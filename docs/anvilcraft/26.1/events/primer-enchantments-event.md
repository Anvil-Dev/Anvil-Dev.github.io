# PrimerEnchantmentsEvent

自动附魔台需要根据引物列出额外附魔时，在 `PrimerEnchantmentsEvent` 中匹配 `getPrimer()` 并调用 `addEnchantment(holder)`。菜单刷新会先清空旧列表，仅在引物非空、方块实体允许此引物时发布。引物变化也会触发刷新。每个候选按其最高等级创建，然后排序。

`addEnchantments` 逐项调用去重方法，`getEnchantments()` 返回只读视图。类型实现 `ICancellableEvent`，但当前菜单发布后直接读取候选列表，不会因为取消而丢弃已经添加的附魔。取消只能影响后续默认监听器能否收到，不能当成清空候选的 API。[自动附魔台刷新](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `PrimerEnchantmentsEvent` | [`AutoEnchantingTableMenu:125`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L125) |
