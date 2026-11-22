# 附加喷流行为

生成检查、燃料和方块操作在服务端执行。需要视觉反馈时使用客户端粒子回调，保持客户端类与服务端逻辑分开加载。

## 源码中的用例

- [`PlasmaJetHooks` · 第 59 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetHooks.java#L59)
- [`PlasmaJetsBlock` · 第 87 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/special/PlasmaJetsBlock.java#L87)
- [`ModHeaterInfos` · 第 95 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L95)
- [`ModBlockEntities` · 第 480 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlockEntities.java#L480)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `PlasmaJetBehavior` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/plasma/PlasmaJetBehavior.java) |
| `PlasmaJetsBlockEntity` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/PlasmaJetsBlockEntity.java) |

<!-- source-guide -->
