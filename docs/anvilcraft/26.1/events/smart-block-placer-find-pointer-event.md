# SmartBlockPlacerFindPointerEvent

放置器需要在附属库存或自定义目标中查找下一个方块时，通过 `setPointer(...)` 提供 `ITargetPointer`。服务端优先复用仍有效且符合 `requiredState` 的旧指针，只有复用失败才发布新查询。`getSourcePos()`、`getFacing()`、操作模式、目标模式与执行阶段共同决定该搜哪里。要求状态允许为空。

发布后如果取消，查找立即返回 `null`，即使已经设置指针也一样。没有取消时直接读最终指针，未提供也返回 `null`。内置提供器使用 `LOWEST` 并可能覆盖已设指针，所以要为自定义目标明确安排匹配条件和监听顺序。[查询和结果读取](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java) · [内置候选](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/SmartBlockPlacerEventListener.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `SmartBlockPlacerFindPointerEvent` | [`SmartBlockPlacerBlockEntity:284`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L284) |

## 参数与事件状态

- [`SmartBlockPlacerFindPointerEvent`](../api/dev-dubhe-anvilcraft-api-event-2#smartblockplacerfindpointerevent)
