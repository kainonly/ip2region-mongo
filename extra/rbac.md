## RBAC 权限验证

RbacMiddleware 权限验证是一个抽象定义中间件，使用时需要根据场景继承定义，例如

```php
<?php
declare(strict_types=1);

namespace App\Middleware\System;

use App\RedisModel\System\AclRedis;
use App\RedisModel\System\RoleRedis;
use Hyperf\Extra\Rbac\RbacMiddleware;

class RbacVerify extends RbacMiddleware
{
    protected string $prefix = 'system';
    protected array $ignore = [
        'valided*'
    ];

    public function __construct(RoleRedis $role, AclRedis $acl)
    {
        parent::__construct($role, $acl);
    }
}
```

- **prefix** `string` url前缀
- **ignore** `array` 忽略的函数名

```php
AutoController(App\Controller\System\AclController::class, [
    'middleware' => [
        App\Middleware\System\AuthVerify::class,
        App\Middleware\System\RbacVerify::class
    ]
]);
```