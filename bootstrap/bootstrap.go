package bootstrap

import (
	"github.com/caarlos0/env/v6"
	"github.com/google/wire"
	"github.com/kainonly/ip2region-sync/common"
	"github.com/kainonly/ip2region-sync/model"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var Provides = wire.NewSet(
	LoadValues,
	UseGorm,
)

// LoadValues 加载配置
func LoadValues() (values *common.Values, err error) {
	values = new(common.Values)
	if err = env.Parse(values); err != nil {
		return
	}
	return
}

// UseGorm 初始化 Gorm
// 配置文档 https://gorm.io/zh_CN
func UseGorm(values *common.Values) (db *gorm.DB, err error) {
	if db, err = gorm.Open(mysql.Open(values.Database), &gorm.Config{
		SkipDefaultTransaction:                   true,
		DisableForeignKeyConstraintWhenMigrating: true,
	}); err != nil {
		return
	}
	if err = db.AutoMigrate(model.Ipv4{}); err != nil {
		return
	}
	return
}
