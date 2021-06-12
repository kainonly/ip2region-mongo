package main

import (
	"errors"
	jsoniter "github.com/json-iterator/go"
	"github.com/lionsoul2014/ip2region/binding/golang/ip2region"
	"github.com/tencentyun/scf-go-lib/cloudfunction"
	"os"
)

type DefineEvent struct {
	Headers     map[string]interface{} `json:"headers"`
	QueryString map[string]string      `json:"queryString"`
}

func bootstrap(event DefineEvent) (_ interface{}, err error) {
	if event.Headers["x-token"] != os.Getenv("token") {
		return nil, errors.New("verification is inconsistent")
	}
	region, err := ip2region.New("ip2region.db")
	if err != nil {
		return
	}
	defer region.Close()
	ip, err := region.BtreeSearch(event.QueryString["ip"])
	if err != nil {
		return
	}
	body, err := jsoniter.Marshal(map[string]interface{}{
		"cityId":   ip.CityId,
		"country":  ip.Country,
		"region":   ip.Region,
		"province": ip.Province,
		"city":     ip.City,
		"isp":      ip.ISP,
	})
	if err != nil {
		return
	}
	return map[string]interface{}{
		"isBase64Encoded": false,
		"statusCode":      200,
		"headers": map[string]string{
			"Content-Type": "application/json",
		},
		"body": string(body),
	}, nil
}

func main() {
	cloudfunction.Start(bootstrap)
}
