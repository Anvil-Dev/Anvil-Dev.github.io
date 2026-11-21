# 限制插入或提取

对外提供只读的 `ResourceHandler<ItemResource>` 时，用 ReadOnlyItemResourceHandler 包装原处理器。读取槽位、数量和容量会委托给底层对象，插入和提取均不传输。事务的插入和提取返回实际移动量。

## 源码中的用例

- [`BaseChuteBlockEntity` · 第 83 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseChuteBlockEntity.java#L83)
- [`CelestialForgingAnvilLogisticsInterfaceBlockEntity` · 第 60 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilLogisticsInterfaceBlockEntity.java#L60)
- [`ChargerBlockEntity` · 第 61 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargerBlockEntity.java#L61)
- [`DischargerBlockEntity` · 第 64 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/DischargerBlockEntity.java#L64)
- [`ItemCollectorBlockEntity` · 第 102 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ItemCollectorBlockEntity.java#L102)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `FilteredItemStackHandler` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-itemhandler-1#filtereditemstackhandler) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/FilteredItemStackHandler.java) |
| `InputRefusingItemHandlerWrapper` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-itemhandler-1#inputrefusingitemhandlerwrapper) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/InputRefusingItemHandlerWrapper.java) |
| `ReadOnlyItemResourceHandler` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-itemhandler-1#readonlyitemresourcehandler) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/ReadOnlyItemResourceHandler.java) |

<!-- source-guide -->
