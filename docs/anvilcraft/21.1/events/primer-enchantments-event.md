# PrimerEnchantmentsEvent

自动附魔台只在引物槽非空且接受该引物时查询可选附魔。通过 `addEnchantment` 或 `addEnchantments` 添加注册表 holder，重复项会被跳过。`getEnchantments()` 返回不可修改的视图。菜单在发布结束后遍历这个列表，调用点没有再检查取消标志。

该组事件定义在 [`PrimerEnchantmentsEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `PrimerEnchantmentsEvent` | [`AutoEnchantingTableMenu:129`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L129) |

## 参数与事件状态

- [`PrimerEnchantmentsEvent`](../api/dev-dubhe-anvilcraft-api-event-2#primerenchantmentsevent)
