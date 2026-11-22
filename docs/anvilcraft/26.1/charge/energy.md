# 经能力接口向相邻方块送电

EnergyHelper 从给定方块面查询 Capabilities.Energy.BLOCK，在根事务中调用 insert 并提交。它没有返回值。需要扣减发送端余额的机器应直接使用 EnergyHandler 的实际插入量，在同一事务中结算。

## 源码中的用例

- [`ModCapabilities` · 第 268 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCapabilities.java#L268)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `EnergyHelper` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java) |
| `ItemFEStorage` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java) |
| `IEnergyHandlerHolder` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/IEnergyHandlerHolder.java) |

<!-- source-guide -->
