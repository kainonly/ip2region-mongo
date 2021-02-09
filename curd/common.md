## Common 通用特征

使用通用特征快速生产需要的处理逻辑，这需要继承抽象类 `CurdController` ，其中包含一些静态属性需要在单例中重写（注意：属性重写定义需当成常量，存在变量逻辑会受协程影响），例如：

```php
use Hyperf\Curd\CurdController;
use Hyperf\Curd\CurdInterface;
use Hyperf\Di\Annotation\Inject;
use Hyperf\Extra\Hash\HashInterface;
use Hyperf\Extra\Token\TokenInterface;
use Hyperf\Extra\Utils\UtilsInterface;
use Hyperf\HttpServer\Contract\RequestInterface;
use Hyperf\HttpServer\Contract\ResponseInterface;
use Hyperf\Validation\Contract\ValidatorFactoryInterface;

abstract class BaseController extends CurdController
{
    /**
     * @Inject()
     * @var RequestInterface
     */
    protected RequestInterface $request;
    /**
     * @Inject()
     * @var ResponseInterface
     */
    protected ResponseInterface $response;
    /**
     * @Inject()
     * @var ValidatorFactoryInterface
     */
    protected ValidatorFactoryInterface $validation;
    /**
     * @Inject()
     * @var CurdInterface
     */
    protected CurdInterface $curd;
    /**
     * @Inject()
     * @var HashInterface
     */
    protected HashInterface $hash;
    /**
     * @Inject()
     * @var TokenInterface
     */
    protected TokenInterface $token;
    /**
     * @Inject()
     * @var UtilsInterface
     */
    protected UtilsInterface $utils;
}
```

### 列表查询

### 分页查询

### 数据查询

### 新增

### 修改

### 删除