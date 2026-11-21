# 对指定维度催熟或抑制生成

催熟状态按维度管理，重复触发同一位置可能命中当刻的去重逻辑。电感灯的抑制区域由已登记的方块实体快照维护。

## 源码中的用例

- [`InductionLightBlockEntity` · 第 47 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/InductionLightBlockEntity.java#L47)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `RipeningManager` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api#ripeningmanager) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/RipeningManager.java) |
| `SpawningManager` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api#spawningmanager) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/SpawningManager.java) |

<!-- source-guide -->
