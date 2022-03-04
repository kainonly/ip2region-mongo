package index

import (
	"github.com/gin-gonic/gin"
	"log"
	"time"
)

type Controller struct {
	Service *Service
}

func (x *Controller) Run(c *gin.Context) interface{} {
	ctx := c.Request.Context()
	log.Println("Sync Data")
	if err := x.Service.SyncData(ctx); err != nil {
		return err
	}
	return gin.H{"sync": time.Now()}
}
