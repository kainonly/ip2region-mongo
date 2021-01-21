## Token 令牌

Token 是 JSON Web Token 方案的功能服务，此服务必须安装 `kain/hyperf-extra`，首先更新配置 `config/autoload/token.php`

```php
return [
    'system' => [
        'issuer' => 'api.kainonly.com',
        'audience' => 'console.kainonly.com',
        'expires' => 3600
    ],
];
```

当中 `system` 就是 `Token` 的 Label 标签，可以自行定义名称

- **issuer** `string` 发行者
- **audience** `string` 听众
- **expires** `int` 有效时间

在 `config/autoload/dependencies.php` 内完成关系配置

```php
return [
    Hyperf\Extra\Token\TokenInterface::class => Hyperf\Extra\Token\TokenFactory::class,
];
```

即可注入使用

```php
use Hyperf\Extra\Token\TokenInterface;
use Hyperf\Utils\Str;
use stdClass;

class IndexController
{

    public function index(TokenInterface $token)
    {
        $token->create('system', Str::random(), Str::random(8), [
            'role' => '*'
        ]);
    }
}
```

也可以使用注解方式

```php
use Hyperf\Di\Annotation\Inject;
use Hyperf\Extra\Token\TokenInterface;
use Hyperf\Utils\Str;
use stdClass;

class IndexController
{
    /**
     * @Inject()
     * @var TokenInterface
     */
    private TokenInterface $token;

    public function index()
    {
        $this->token->create('system', Str::random(), Str::random(8), [
            'role' => '*'
        ]);
    }
}
```

#### create(string $scene, string $jti, string $ack, array $symbol = []): Plain

生成令牌

- **scene** `string` 场景标签
- **jti** `string` Token ID
- **ack** `string` Token 确认码
- **symbol** `array` 标识组
- **Return** `Lcobucci\JWT\Token\Plain`

```php
use Hyperf\Di\Annotation\Inject;
use Hyperf\Extra\Token\TokenInterface;
use Hyperf\Utils\Str;
use stdClass;

class IndexController
{
    /**
     * @Inject()
     * @var TokenInterface
     */
    private TokenInterface $token;

    public function index()
    {
        $symbol = new stdClass();
        $symbol->role = '*';
        $token = $this->token->create('system', Str::random(), Str::random(8), [
            'role' => '*'
        ]);
        var_dump($token->toString());
    }
}
```

#### get(string $jwt): Plain

获取令牌对象

- **jwt** `string` 字符串令牌
- **Return** `Lcobucci\JWT\Token\Plain`

```php
use Hyperf\Di\Annotation\Inject;
use Hyperf\Extra\Token\TokenInterface;

class IndexController
{
    /**
     * @Inject()
     * @var TokenInterface
     */
    private TokenInterface $token;

    public function index()
    {
        $tokenString = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6InNMYW1vdkRMcFpMaTBKMzIifQ.eyJpc3MiOiJhcGkua2Fpbm9ubHkuY29tIiwiYXVkIjoiY29uc29sZS5rYWlub25seS5jb20iLCJqdGkiOiJzTGFtb3ZETHBaTGkwSjMyIiwiYWNrIjoiZlUxeUN6U2ciLCJzeW1ib2wiOnsicm9sZSI6IioifSwiZXhwIjoxNTg1MzY1MDUzfQ.zkamZXgUaqOTZEn8JBBo-8k3oZAzuU7zWH-ZtNJjagA';
        $token = $this->token->get($tokenString);
        assert($token instanceof Plain);
        var_dump($token);
    }
}
```

#### verify(string $scene, string $jwt): stdClass

验证令牌有效性

- **scene** `string` 场景标签
- **jwt** `string` 字符串令牌
- **Return** `stdClass`
  - **expired** `bool` 是否过期
  - **token** `\Lcobucci\JWT\Token` 令牌对象

```php
use Hyperf\Di\Annotation\Inject;
use Hyperf\Extra\Token\TokenInterface;

class IndexController
{
    /**
     * @Inject()
     * @var TokenInterface
     */
    private TokenInterface $token;

    public function index()
    {
        $tokenString = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImp0aSI6InNMYW1vdkRMcFpMaTBKMzIifQ.eyJpc3MiOiJhcGkua2Fpbm9ubHkuY29tIiwiYXVkIjoiY29uc29sZS5rYWlub25seS5jb20iLCJqdGkiOiJzTGFtb3ZETHBaTGkwSjMyIiwiYWNrIjoiZlUxeUN6U2ciLCJzeW1ib2wiOnsicm9sZSI6IioifSwiZXhwIjoxNTg1MzY1MDUzfQ.zkamZXgUaqOTZEn8JBBo-8k3oZAzuU7zWH-ZtNJjagA';
        $result = $this->token->verify('system', $tokenString);
        var_dump($result);
    }
}
```