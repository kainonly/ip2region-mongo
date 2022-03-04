package model

type IP struct {
	Range    []uint64 `bson:"range"`
	Country  string   `bson:"country"`
	Province string   `bson:"province"`
	City     string   `bson:"city"`
	ISP      string   `bson:"isp"`
}
