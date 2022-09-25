package model

type Ipv4 struct {
	ID       uint64 `gorm:"primaryKey,autoIncrement"`
	Start    uint64 `gorm:"index"`
	End      uint64 `gorm:"index"`
	Country  string `gorm:"type:varchar(50)"`
	Province string `gorm:"type:varchar(50)"`
	City     string `gorm:"type:varchar(50)"`
	ISP      string `gorm:"type:varchar(50)"`
}
