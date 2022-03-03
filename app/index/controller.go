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
	result, err := x.Service.SyncData(ctx)
	if err != nil {
		return err
	}
	log.Println("Insert", len(result.InsertedIDs))
	return gin.H{"sync": time.Now()}
}
