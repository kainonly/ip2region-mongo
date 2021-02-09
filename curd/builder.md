## Builder 构造器

构造器是 CURD 的组装器，按需要可灵活组合成想要的逻辑

### should(array $rule = [], ...$extend): array

验证请求并返回数据

- **rule** `array` 验证规则
- **extend** `array` 扩展验证规则

例如，验证某个接口：

```php
public function bulkAdd(): array
{
    $body = $this->curd->should([
        'type_id' => 'required',
        'data' => 'required|array',
        'data.*.name' => 'required',
        'data.*.url' => 'required'
    ]);
    return [
        'error' => 0,
        'msg' => 'ok'
    ];
}
```

### model(string $name, array $body): CurdFactory

计划 curd 工厂

- **name** `string` 模型名称
- **body** `array` 请求数据
- **CurdFactory**
  - **where(array $value)** 设置条件
    - **value** `array` 条件数组
  - **query(Closure $value)** 设置子查询
    - **value** `Closure` 闭包子查询，例如 `function ($query) {}`
  - **orderBy(array $value)** 设置排序
    - **value** `array` 排序数组，例如 `['create_time' => 'desc']`
  - **select(array $value)** 设置字段
    - **value** `array` 字段数组
  - **autoTimestamp(bool $value, ?string $createAt = null, ?string $updateAt = null)** 设置自动生成时间戳
    - **value** `bool` 是否开启
    - **createAt** `string` 创建时间字段
    - **updateAt** `string` 更新时间字段
  - **afterHook(Closure $value)** 后置周期
    - **value** `Closure` 闭包函数，例如 `function ($param) {}`
  - **prepHook(Closure $value)** 事务预处理周期
    - **value** `Closure` 闭包函数，例如 `function ($param) {}`
  - **originLists()** `array` 获取列表数据
  - **lists()** `array` 获取分页数据
  - **get()** `array` 获取数据
  - **add()** `array` 新增数据
  - **edit()** `array` 编辑数据
  - **delete()** `array` 删除数据

工厂最终包含了 `originLists()` `lists()` `get()` `add()` `edit()` `delete()` 执行输出方式，例如：

```php
// 示例
$body = $this->curd->should([
    ...
]);
$this->curd->model('acl', $body)
    ->where([
        ['status', '=', 1]
    ])
    ->select(['id', 'name'])
    ->orderBy(['create_time' => 'desc'])
    ->originLists();

// 示例
$body = $this->curd->should([
    ...
]);
$this->curd->model('acl', $body)
    ->afterHook(function (stdClass $param) {
        // $param->id 是 insertId
        Db::table('some_rel')->insert([
            'aid' => $param->id
        ]);
        return true;
    })
    ->add();
```

### 不同的执行输出不包含完整的构造子句

| 是否支持          | originLists | lists   | get     | add     | edit    | delete  |
| ----------------- | ----------- | ------- | ------- | ------- | ------- | ------- |
| **where**         | &radic;     | &radic; | &radic; |         | &radic; | &radic; |
| **query**         | &radic;     | &radic; | &radic; |         |         |         |
| **orderBy**       | &radic;     | &radic; | &radic; |         |         |         |
| **select**        | &radic;     | &radic; | &radic; |         |         |         |
| **autoTimestamp** |             |         |         |         | &radic; | &radic; |
| **afterHook**     |             |         |         | &radic; | &radic; | &radic; |
| **prepHook**      |             |         |         |         |         | &radic; |