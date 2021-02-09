## Refresh Token 缓存

Refresh Token 是用于自动刷新、验证对应 Token 的缓存模型

### factory(string $jti, string $ack, int $expires): bool

生产 Token 对应的 Refresh Token

- **jti** `string` JSON Web Token ID
- **ack** `string` Token ID 验证码
- **expires** `int` 有限时间，单位<秒>
- **Return** `bool`

### renewal(string $jti, int $expires): void

Refresh Token 续约

- **jti** `string` JSON Web Token ID
- **expires** `int` 有限时间，单位<秒>

### verify(string $jti, string $ack): bool

验证 Token 的 Token ID 有效性

- **jti** `string` JSON Web Token ID
- **ack** `string` Token ID 验证码
- **Return** `bool`

### clear(string $jti, string $ack): int

清除 Token 对应的 Refresh Token

- **jti** `string` JSON Web Token ID
- **ack** `string` Token ID 验证码
- **Return** `bool`