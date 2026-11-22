# ModCategoryInitEvent

服务器初始化仓储分类时，可用自己的模组 ID 和图标注册命名空间分类，也可以传入完整 `ICategory`。同一个 ID 重复调用 `register` 会替换映射值。`getHolder` 从本次事件的注册表查询，键不存在会抛异常。[仓储分类](../storage/)

该组事件定义在 [`ModCategoryInitEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/ModCategoryInitEvent.java)。

| 事件类型 | 创建位置 |
| --- | --- |
| `ModCategoryInitEvent` | [`CategoryInitEventListener:45`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CategoryInitEventListener.java#L45) |
