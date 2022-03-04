package index

import (
	"github.com/google/wire"
	"strconv"
	"strings"
)

var Provides = wire.NewSet(
	wire.Struct(new(Controller), "*"),
	wire.Struct(new(Service), "*"),
)

func isZero(value string) string {
	if value == "0" {
		return ""
	}
	return value
}

func ip2Dec(value string) uint64 {
	ip := uint64(0)
	for k, v := range strings.Split(value, ".") {
		n, _ := strconv.ParseUint(v, 10, 64)
		ip |= n << ((3 - uint64(k)) << 3)
	}
	return ip
}
