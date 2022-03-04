package index

import (
	"bufio"
	"context"
	"github.com/panjf2000/ants/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"io"
	"ip2region-mongo/common"
	"ip2region-mongo/model"
	"log"
	"net/http"
	"strings"
	"sync"
)

type Service struct {
	*common.Inject
}

func (x *Service) SyncData(ctx context.Context) (err error) {
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
	if err = x.Db.Collection("ip").
		Drop(ctx); err != nil {
		return
	}
	var wg sync.WaitGroup
	var p *ants.PoolWithFunc
	if p, err = ants.NewPoolWithFunc(100, func(i interface{}) {
		if v, ok := i.([]interface{}); ok {
			if _, err := x.Db.Collection("ip").
				InsertMany(ctx, v); err != nil {
				log.Fatalln(err)
			}
		}
		wg.Done()
	}); err != nil {
		return
	}
	defer p.Release()
	var bulk []interface{}
	buf := bufio.NewReader(resp.Body)
	for {
		var s string
		if s, err = buf.ReadString('\n'); err != nil {
			if err == io.EOF {
				wg.Add(1)
				_ = p.Invoke(bulk)
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
		bulk = append(bulk, model.IP{
			Range:    []uint64{ip2Dec(v[0]), ip2Dec(v[1])},
			Country:  isZero(v[2]),
			Province: isZero(v[4]),
			City:     isZero(v[5]),
			ISP:      isZero(v[6]),
		})
		if len(bulk) == 5000 {
			wg.Add(1)
			_ = p.Invoke(bulk)
			bulk = []interface{}{}
		}
	}
	wg.Wait()
	if _, err = x.Db.Collection("ip").Indexes().
		CreateMany(ctx, []mongo.IndexModel{
			{
				Keys:    bson.M{"range": 1},
				Options: options.Index().SetName("idx_range"),
			},
		}); err != nil {
		return
	}
	return
}
