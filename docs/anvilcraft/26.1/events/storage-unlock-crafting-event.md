# StorageUnlockCraftingEvent

附属存储解锁合成时要多消耗一种工作站，可以通过 `addRecipeBaseSlot(slot)` 增加所需材料所在的槽。只有现有供给同时找到工作台和切石机才发出事件，这两项槽号在发布前已经加入。`getRecipeBaseSlots()` 提供只读列表。

取消会直接返回失败。否则服务端开启一次事务，按列表顺序从每一槽提取一件。无效下标、空槽或数量不足都会让本次提取整体回滚。追加同一槽两次表示还要再取一件，方法不会去重。成功提交后才会保存所有材料栈作为配方基座。[事务与解锁流程](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java)

| 事件类型 | 创建位置 |
| --- | --- |
| `StorageUnlockCraftingEvent` | [`BaseStorage:111`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L111) |
