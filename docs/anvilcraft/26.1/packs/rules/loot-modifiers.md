# 全局战利品修饰器

服务器重载时按 `loot_modifiers` 目录读取每个条目。`priority` 为可选整数，默认 1000，高值先执行。铁砧工艺提供的两种修饰器显式填写优先级 0。

修饰器文件放在 `data/<命名空间>/loot_modifiers/<名称>.json`。`type` 为实现 ID，`conditions` 为战利品条件数组，空数组允许在任意满足实现要求的上下文尝试。内置熔炼和瓦解逻辑由代码实现。

```json
{
  "type": "anvilcraft:smelting_loot_modifier",
  "conditions": [],
  "priority": 0
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/loot_modifiers/smelting_loot_modifier.json)

[ModLootModifiers.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java) · [ModLootItemFunctions.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java)
