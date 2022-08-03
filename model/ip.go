package model

type IP struct {
	// 查询范围
	Range []uint64 `bson:"range"`
	// 国家 / 地区
	Country string `bson:"country"`
	// 省 / 州
	Province string `bson:"province"`
	// 市
	City string `bson:"city"`
	// 运营商
	ISP string `bson:"isp"`
}
