# 全局战利品修饰器

先在 `data/neoforge/loot_modifiers/global_loot_modifiers.json` 注册要应用的条目。根对象的 `entries` 是有序 ID 数组，`replace` 是布尔值；若希望保留较低优先级数据包的注册项，填 `false`。

```json
{
  "entries": [
    "anvilcraft:smelting_loot_modifier",
    "anvilcraft:disintegration_loot_modifier"
  ],
  "replace": false
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/neoforge/loot_modifiers/global_loot_modifiers.json)

修饰器文件放在 `data/<命名空间>/loot_modifiers/<名称>.json`。`type` 为实现 ID，`conditions` 为战利品条件数组，空数组允许在任意满足实现要求的上下文尝试。内置熔炼和瓦解逻辑由代码实现。

```json
{
  "type": "anvilcraft:smelting_loot_modifier",
  "conditions": []
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/loot_modifiers/smelting_loot_modifier.json)

[ModLootModifiers.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java) · [ModLootItemFunctions.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java)
