## User Lock 用户锁定

User Lock 适用于用户登录时的锁定支持

### remove(string $username): void

锁定用户清零

- **username** `string` 用户名

### check(string $username): bool

锁定验证，固定上限5次

- **username** `string` 用户名
- **Return** `bool`

### inc(string $username): void

锁定自增

- **username** `string` 用户名

### lock(string $username): void

锁定延长，延长锁定 15 分钟

- **username** `string` 用户名