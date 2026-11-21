# StorageUnlockCraftingEvent

仓储找到工作台和切石机后，把两者的槽位加入事件，随后才扣除解锁材料。附属模组可追加要消耗一件物品的槽位。若取消事件，或者有任何追加的槽位越界、为空，解锁会失败且保留材料。[仓储接口](../storage/)

该组事件定义在 [`StorageUnlockCraftingEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/StorageUnlockCraftingEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `StorageUnlockCraftingEvent` | [`BaseStorage:94`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L94) |

## 参数与事件状态

- [`StorageUnlockCraftingEvent`](../api/dev-dubhe-anvilcraft-api-event-2#storageunlockcraftingevent)
