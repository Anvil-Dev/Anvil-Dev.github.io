# 维护终端可见的仓储源

终端的可见源按维度维护。方块实体就绪后登记主方块位置，移除或区块卸载时注销，避免让失效位置继续出现在终端查询中。

## 源码中的用例

- [`StorageBlockEntity` · 第 53 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/StorageBlockEntity.java#L53)
- [`StorageServerStub` · 第 5314 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L5314)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `TerminalSourceManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/TerminalSourceManager.java) |
| `StorageComparatorManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/StorageComparatorManager.java) |
