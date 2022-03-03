//go:build wireinject
// +build wireinject

package main

import (
	"github.com/gin-gonic/gin"
	"github.com/google/wire"
	"ip2region-mongo/app"
	"ip2region-mongo/bootstrap"
	"ip2region-mongo/common"
)

func App(value *common.Values) (*gin.Engine, error) {
	wire.Build(
		wire.Struct(new(common.Inject), "*"),
		bootstrap.Provides,
		app.Provides,
	)
	return &gin.Engine{}, nil
}
