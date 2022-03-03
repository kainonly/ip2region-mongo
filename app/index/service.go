package index

import (
	"context"
	"github.com/go-resty/resty/v2"
	"go.mongodb.org/mongo-driver/mongo"
	"ip2region-mongo/common"
	"log"
)

type Service struct {
	*common.Inject
}

func (x *Service) SyncData(ctx context.Context) (result *mongo.InsertManyResult, err error) {
	var res *resty.Response
	if res, err = x.Client.R().SetContext(ctx).
		Get("/data/ip.merge.txt"); err != nil {
		return
	}
	log.Println(res)
	//if err = x.Db.Collection("ip").
	//	Drop(ctx); err != nil {
	//	return
	//}
	//if result, err = x.Db.Collection("ip").
	//	InsertMany(ctx, data); err != nil {
	//	return
	//}
	//if _, err = x.Db.Collection("ip").Indexes().
	//	CreateMany(ctx, []mongo.IndexModel{
	//	}); err != nil {
	//	return
	//}
	return
}
