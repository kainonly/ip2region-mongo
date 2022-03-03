# Ip2region Mongo

IP 信息同步至 MongoDB，数据支持来自：

- https://github.com/lionsoul2014/ip2region

镜像支持：

- ghcr.io/kainonly/ip2region:latest
- hkccr.ccs.tencentyun.com/kainonly/ip2region:latest（腾讯云）

## 定时触发

推荐使用腾讯云云函数，因需要从 Github 跨境获取数据延迟较高，请选择香港地区，使用容器镜像部署

## 环境变量

- **DATABASE_URI** MongoDB 连接 URI
- **DATABASE_DBNAME** 数据库名称