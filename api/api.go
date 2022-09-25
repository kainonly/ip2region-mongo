package api

import (
	"bufio"
	"context"
	"fmt"
	"github.com/kainonly/ip2region-sync/common"
	"github.com/kainonly/ip2region-sync/model"
	"github.com/panjf2000/ants/v2"
	"gorm.io/gorm"
	"io"
	"log"
	"net/http"
	"strconv"
	"strings"
	"sync"
	"time"
)

type API struct {
	Values *common.Values
	Db     *gorm.DB
}

func (x *API) EventInvoke(w http.ResponseWriter, req *http.Request) {
	if req.Method != "POST" {
		return
	}

	fmt.Println("开始同步数据")
	ctx := req.Context()
	if err := x.SyncData(ctx); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte(fmt.Sprintf(`已同步: %s`, time.Now())))
}

func (x *API) SyncData(ctx context.Context) (err error) {
	client := http.DefaultClient
	url := `https://raw.githubusercontent.com/lionsoul2014/ip2region/master/data/ip.merge.txt`
	var req *http.Request
	if req, err = http.NewRequest("GET", url, nil); err != nil {
		return
	}
	var resp *http.Response
	if resp, err = client.Do(req.WithContext(ctx)); err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	var wg sync.WaitGroup
	var p *ants.PoolWithFunc
	if p, err = ants.NewPoolWithFunc(100, func(i interface{}) {
		if v, ok := i.([]model.Ipv4); ok {
			if err = x.Db.CreateInBatches(v, 1000).WithContext(ctx).Error; err != nil {
				log.Fatalln(err)
			}
		}
		wg.Done()
	}); err != nil {
		return
	}
	defer p.Release()
	var bulk []model.Ipv4
	buf := bufio.NewReader(resp.Body)
	for {
		var s string
		if s, err = buf.ReadString('\n'); err != nil {
			if err == io.EOF {
				wg.Add(1)
				_ = p.Invoke(bulk)
				err = nil
				break
			} else {
				return
			}
		}
		row := strings.TrimSpace(s)
		if row == "" {
			continue
		}
		v := strings.Split(row, "|")
		bulk = append(bulk, model.Ipv4{
			Start:    ip2Dec(v[0]),
			End:      ip2Dec(v[1]),
			Country:  isZero(v[2]),
			Province: isZero(v[4]),
			City:     isZero(v[5]),
			ISP:      isZero(v[6]),
		})
		if len(bulk) == 5000 {
			wg.Add(1)
			_ = p.Invoke(bulk)
			bulk = []model.Ipv4{}
		}
	}
	wg.Wait()
	return
}

func isZero(value string) string {
	if value == "0" {
		return ""
	}
	return value
}

func ip2Dec(value string) uint64 {
	ip := uint64(0)
	for k, v := range strings.Split(value, ".") {
		n, _ := strconv.ParseUint(v, 10, 64)
		ip |= n << ((3 - uint64(k)) << 3)
	}
	return ip
}
