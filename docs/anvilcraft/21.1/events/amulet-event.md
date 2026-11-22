# AmuletEvent

附属模组有自己的饰品槽时，在 `Find` 中把候选物交给事件回调。护符系统先用 `EntityCheck` 判断这个实体是否参与查找，随后逐个向 `ProcessFound` 交付候选物。取消 `ProcessFound` 只会跳过当前候选物。`ModifyRaffleProbability` 属于稍后的抽取阶段，改动它不会改变查找到的物品。[护符系统](../amulets/)

该组事件定义在 [`AmuletEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AmuletEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `AmuletEvent` | 此提交中未检出以该名称直接构造的调用点 |
| `AmuletEvent.Find` | [`AmuletManager:83`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L83) |
| `AmuletEvent.ProcessFound` | [`AmuletManager:92`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L92) |
| `AmuletEvent.ModifyRaffleProbability` | [`AmuletManager:204`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L204) |
| `AmuletEvent.EntityCheck` | [`AmuletManager:79`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/AmuletManager.java#L79) |
