# 支持轮询与大容量库存

轮询处理器决定从哪个槽位开始访问。大容量接口使用 long 读取数量；通过 ResourceHandler 插入或提取时使用返回的实际转移量，并遵守外层事务的提交或回滚。

## 源码中的用例

- [`FishTankBlockEntity` · 第 226 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/FishTankBlockEntity.java#L226)
- [`CreativeCrateBlockEntity` · 第 31 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeCrateBlockEntity.java#L31)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `PollableItemHandler` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-itemhandler-1#pollableitemhandler) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/PollableItemHandler.java) |
| `OverLimitItemHandler` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-itemhandler-1#overlimititemhandler) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/OverLimitItemHandler.java) |
| `InfinityItemStackHandler` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-item#infinityitemstackhandler) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/InfinityItemStackHandler.java) |

<!-- source-guide -->
