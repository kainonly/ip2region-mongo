# Ip SCF

使用腾讯云 [云函数 SCF](https://cloud.tencent.com/product/scf) 搭建获取IP相关信息的接口，相关库：

- [ip2region](https://github.com/lionsoul2014/ip2region) 离线IP地址定位库

## 部署方法

1. 将 `main.go` 编译至项目 `dist` 目录内，名称对应 `main` 
2. 拉取最新的 `ip2region.db` 同样放置 `dist` 目录内
3. 函数代码提交方法使用 **本地上传文件夹** 上传 `dist` 目录
4. 函数配置环境变量需设置 **token**，请求 headers 需要携带相同值 `x-token`
5. API 网关要 **启用响应集成** 并设置 **返回类型 JSON** ，**鉴权类型** 使用免认证即可，其他自定即可

