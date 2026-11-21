# 实体类型标签

路径为 `data/<命名空间>/tags/entity_type/<标签名>.json`。同一个标签可由多个数据包追加。

`values` 必填，是注册 ID、以 `#` 开头的标签引用或条目对象的数组。可选布尔值 `replace` 默认 `false`。对象条目使用字符串 `id` 和可选布尔值 `required`（默认 `true`）；依赖可选模组时填写 `false`。

## 内置示例

```json
{
  "values": [
    "minecraft:warden"
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/silence.json)

## 标签目录

| 标签 ID | 内置文件 |
| --- | --- |
| `anvilcraft:amulet_valid` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid.json) |
| `anvilcraft:amulet_valid/anvil` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/anvil.json) |
| `anvilcraft:amulet_valid/armadillo` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/armadillo.json) |
| `anvilcraft:amulet_valid/cat` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/cat.json) |
| `anvilcraft:amulet_valid/dog` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/dog.json) |
| `anvilcraft:amulet_valid/emerald` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/emerald.json) |
| `anvilcraft:amulet_valid/sapphire` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/sapphire.json) |
| `anvilcraft:amulet_valid/silence` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/amulet_valid/silence.json) |
| `anvilcraft:falling_giant_anvil_damage_immune` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/tags/entity_type/falling_giant_anvil_damage_immune.json) |
| `minecraft:arrows` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/minecraft/tags/entity_type/arrows.json) |
