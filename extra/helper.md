## Helper 助手

Helper 助手函数扩展，此服务必须安装 `kain/hyperf-extra`

#### AutoController(string $controller, array $options = [])

路由自动绑定，控制器内公有函数绑定至路由

```php
AutoController(App\Controller\System\AclController::class, [
    'middleware' => [
        App\Middleware\System\AuthVerify::class,
        App\Middleware\System\RbacVerify::class
    ]
]);
```

例如 **AclController** 控制器中存在 `originLists()` `lists()` `add()` `get()` `edit()` `delete()` 等公有函数，他们分别被绑定为 `/acl/originLists` `/acl/lists` `/acl/add` `/acl/get` `/acl/edit` `/acl/delete` 的 POST 路由。当然肯定还会存在不想绑定的函数，可以通过配置 `config/autoload/curd.php` 忽略它们

```php
return [
    'auto' => [
        'ignore' => [
            '__construct',
            'addAfterHooks',
            'addBeforeHooks',
            'deleteAfterHooks',
            'deleteBeforeHooks',
            'deletePrepHooks',
            'editAfterHooks',
            'editBeforeHooks',
            'getBeforeHooks',
            'getCustomReturn',
            'listsBeforeHooks',
            'listsCustomReturn',
            'originListsBeforeHooks',
            'originListsCustomReturn'
        ]
    ]
];
```

可以通过数组集合来限定需要运行中间件的路由

```php
AutoController(App\Controller\System\MainController::class, [
    'middleware' => [
        App\Middleware\System\AuthVerify::class => [
            'resource', 'information', 'update', 'uploads'
        ]
    ]
]);
```

#### uuid()

生成 uuid v4

- **Return** `UuidInterface`

```php
$uuid = uuid();
dump($uuid->toString());

// "a2bcf1d5-2be3-4dc6-8cd4-937835a18a8b"
```

#### stringy($str = '', $encoding = null)

创建一个Stringy字符串操作工具

- **str** `string`
- **encoding** `string`
- **Return** `Stringy\Stringy`

```php
stringy('abc');
```

**Stringy\Stringy** 对象说明，https://github.com/danielstjules/Stringy