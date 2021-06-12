package main

import (
	"github.com/lionsoul2014/ip2region/binding/golang/ip2region"
	"log"
	"testing"
)

func TestIp(t *testing.T) {
	region, err := ip2region.New("ip2region.db")
	if err != nil {
		return
	}
	defer region.Close()
	ip, err := region.BtreeSearch("36.101.187.67")
	if err != nil {
		return
	}
	log.Println(ip)
}
