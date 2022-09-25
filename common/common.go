package common

type Values struct {
	// 监听地址
	Address string `env:"ADDRESS" envDefault:":9000"`
	// 数据库
	Database string `env:"DATABASE"`
}
