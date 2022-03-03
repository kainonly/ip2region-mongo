package app

import (
	"github.com/gin-gonic/gin"
	"github.com/google/wire"
	"github.com/weplanx/go/route"
	"ip2region-mongo/app/index"
	"ip2region-mongo/common"
)

var Provides = wire.NewSet(
	index.Provides,
	New,
)

func New(
	values *common.Values,
	index *index.Controller,
) *gin.Engine {
	r := globalMiddleware(gin.New(), values)
	r.POST("/event-invoke", route.Use(index.Run))
	return r
}
