# 限制插入或提取

向外暴露物品能力时，根据机器的槽位职责选择过滤、拒绝输入或只读包装器。模拟操作也要返回正确的余量，否则传输设备会误判接收能力。

## 源码中的用例

- [`BaseChuteBlockEntity` · 第 79 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseChuteBlockEntity.java#L79)
- [`CelestialForgingAnvilLogisticsInterfaceBlockEntity` · 第 69 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilLogisticsInterfaceBlockEntity.java#L69)
- [`ChargerBlockEntity` · 第 62 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargerBlockEntity.java#L62)
- [`DischargerBlockEntity` · 第 62 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/DischargerBlockEntity.java#L62)
- [`ItemCollectorBlockEntity` · 第 84 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ItemCollectorBlockEntity.java#L84)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `FilteredItemStackHandler` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-itemhandler-1#filtereditemstackhandler) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/FilteredItemStackHandler.java) |
| `ReadOnlyItemHandlerWrapper` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-itemhandler-1#readonlyitemhandlerwrapper) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/ReadOnlyItemHandlerWrapper.java) |
| `InputRefusingItemHandlerWrapper` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-itemhandler-1#inputrefusingitemhandlerwrapper) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/InputRefusingItemHandlerWrapper.java) |
