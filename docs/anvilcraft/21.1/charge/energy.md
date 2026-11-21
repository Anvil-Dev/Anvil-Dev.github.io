# 经能力接口向相邻方块送电

从给定方向查询目标方块的能源能力。调用 insertEnergy 会立即尝试接收且不返回接收量；需要结算剩余能量时应直接使用能力返回值。

## 源码中的用例

- [`CapabilitiesEventListener` · 第 264 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L264)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `EnergyHelper` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-energy#energyhelper) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java) |
| `ItemFEStorage` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-energy#itemfestorage) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java) |
| `IEnergyHandlerHolder` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-energy#ienergyhandlerholder) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/IEnergyHandlerHolder.java) |
