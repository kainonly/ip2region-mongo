# Ip2region SCF

使用腾讯云 [云函数 SCF](https://cloud.tencent.com/product/scf) 搭建获取IP相关信息的接口，相关库：

- [ip2region](https://github.com/lionsoul2014/ip2region) 离线IP地址定位库
- [ajv](https://github.com/ajv-validator/ajv) JSON Schema 验证

相关配置可参看 `serverless.yml`

```yml
app: ip2region
component: scf
inputs:
  cls:
    logsetId:
    topicId:
  description: 获取IP相关信息
  eip: false
  enableRoleAuth: true
  events:
    - apigw:
        name: SCF_OPEN_API
        parameters:
          endpoints:
            - function:
                functionQualifier: $LATEST
                isIntegratedResponse: true
              method: POST
              path: /ip2region
          environment: release
          protocols:
            - http
            - https
          serviceId:
  handler: index.main_handler
  memorySize: 64
  name: ip2region
  namespace: default
  publicAccess: true
  region: ap-guangzhou
  runtime: Nodejs12.16
  src: ./src
  timeout: 3
name: ap-guangzhou_default_ip2region
org: ''
stage: dev
# When using this configuration file for deployment, make sure the file name is "serverless.yml".
# For more information: https://github.com/serverless-components/tencent-scf/blob/master/docs/configure.md
```

进入 `Cloud Studio` 后，目录至 `src` 内使用终端安装 npm 依赖即可
