# 多方块定义与表达式函数

AnvilCraft 向 AnvilLib 提供具名结构与可调用函数。结构中的非空符号要有对应 mapping，函数参数名与表达式体的引用保持一致。

## `definitions`

路径 `data/anvilcraft/anvillib/definitions/fluid_tank.json`。

```json
{
  "grid": [
    [
      "AAA",
      "A A",
      "AAA"
    ],
    [
      "A A",
      " 0 ",
      "A A"
    ],
    [
      "AAA",
      "A A",
      "AAA"
    ]
  ],
  "mapping": {
    "0": {
      "blocks": "anvilcraft:fluid_tank"
    },
    "A": {
      "blocks": "anvilcraft:menger_sponge"
    }
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/anvillib/definitions/fluid_tank.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `grid` | 数组 | 按层分组的字符行 |
| `mapping` | 对象 | 字符到匹配条件的映射 |

## `function`

路径 `data/anvilcraft/anvillib/function/double.json`。

```json
{
  "type": "anvillib:custom",
  "body": "$(a)*2",
  "parameters": [
    "a"
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/anvillib/function/double.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `type` | 字符串 | 选择子格式的注册 ID |
| `body` | 字符串 | 表达式函数体 |
| `parameters` | 数组 | 函数形参名称 |
