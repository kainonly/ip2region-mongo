//go:build wireinject
// +build wireinject

package bootstrap

import (
	"github.com/google/wire"
	"github.com/kainonly/ip2region-sync/api"
)

func NewAPI() (*api.API, error) {
	wire.Build(
		wire.Struct(new(api.API), "*"),
		Provides,
	)
	return &api.API{}, nil
}
