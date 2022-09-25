package model

type Ipv4 struct {
	ID       uint64 `gorm:"primaryKey,autoIncrement"`
	Start    uint64 `gorm:"not null;index"`
	End      uint64 `gorm:"not null;index"`
	Country  string `gorm:"type:varchar(50);not null"`
	Province string `gorm:"type:varchar(50);not null"`
	City     string `gorm:"type:varchar(50);not null"`
	ISP      string `gorm:"type:varchar(50);not null"`
}
