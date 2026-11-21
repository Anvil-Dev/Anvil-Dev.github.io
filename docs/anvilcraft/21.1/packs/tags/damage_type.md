# 伤害类型标签

路径为 `data/<命名空间>/tags/damage_type/<标签名>.json`。同一个标签可由多个数据包追加。

`values` 必填，是注册 ID、以 `#` 开头的标签引用或条目对象的数组。可选布尔值 `replace` 默认 `false`。对象条目使用字符串 `id` 和可选布尔值 `required`（默认 `true`）；依赖可选模组时填写 `false`。

## 内置示例

```json
{
  "values": [
    "minecraft:wither"
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/abnormal.json)

## 标签目录

| 标签 ID | 内置文件 |
| --- | --- |
| `anvilcraft:amulet_valid` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid.json) |
| `anvilcraft:amulet_valid/abnormal` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/abnormal.json) |
| `anvilcraft:amulet_valid/anvil` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/anvil.json) |
| `anvilcraft:amulet_valid/feather` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/feather.json) |
| `anvilcraft:amulet_valid/ruby` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/ruby.json) |
| `anvilcraft:amulet_valid/sapphire` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/sapphire.json) |
| `anvilcraft:amulet_valid/topaz` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/damage_type/amulet_valid/topaz.json) |
| `anvilcraft:is_falling_giant_anvil` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/damage_type/is_falling_giant_anvil.json) |
| `minecraft:burn_from_stepping` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/burn_from_stepping.json) |
| `minecraft:bypasses_armor` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/bypasses_armor.json) |
| `minecraft:bypasses_cooldown` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/bypasses_cooldown.json) |
| `minecraft:bypasses_effects` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/bypasses_effects.json) |
| `minecraft:bypasses_enchantments` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/bypasses_enchantments.json) |
| `minecraft:bypasses_invulnerability` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/bypasses_invulnerability.json) |
| `minecraft:bypasses_resistance` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/bypasses_resistance.json) |
| `minecraft:bypasses_shield` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/bypasses_shield.json) |
| `minecraft:is_fall` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/is_fall.json) |
| `minecraft:is_fire` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/is_fire.json) |
| `minecraft:no_knockback` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/no_knockback.json) |
| `minecraft:panic_environmental_causes` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/damage_type/panic_environmental_causes.json) |
| `neoforge:is_magic` | [查看条目](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/neoforge/tags/damage_type/is_magic.json) |
