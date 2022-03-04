package model

type IP struct {
	Start    uint64 `bson:"start"`
	End      uint64 `bson:"end"`
	Country  string `bson:"country"`
	Province string `bson:"province"`
	City     string `bson:"city"`
	ISP      string `bson:"isp"`
}
