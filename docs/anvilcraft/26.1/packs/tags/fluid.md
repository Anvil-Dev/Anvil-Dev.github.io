# 流体标签

路径为 `data/<命名空间>/tags/fluid/<标签名>.json`。同一个标签可由多个数据包追加。

`values` 必填，是注册 ID、以 `#` 开头的标签引用或条目对象的数组。可选布尔值 `replace` 默认 `false`。对象条目使用字符串 `id` 和可选布尔值 `required`（默认 `true`）；依赖可选模组时填写 `false`。

## 内置示例

```json
{
  "values": []
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/fluid/cannot_be_infinite.json)

## 标签目录

| 标签 ID | 内置文件 |
| --- | --- |
| `anvilcraft:cannot_be_infinite` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/fluid/cannot_be_infinite.json) |
| `anvilcraft:ignitable` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/fluid/ignitable.json) |
| `anvilcraft:menger_sponge_can_absorb` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/fluid/menger_sponge_can_absorb.json) |
| `c:cement` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/c/tags/fluid/cement.json) |
| `c:experience` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/c/tags/fluid/experience.json) |
| `c:oil` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/c/tags/fluid/oil.json) |
