# 恒星事件曲线

事件文件的根是数组，每个对象用 `profileId` 标识。阶段的 `eventProfileId` 引用此处的 ID。加载器拒绝重复 ID、无对应曲线的引用和不可达的终末事件。

资源位置为 `data/anvilcraft/stellar_event_profiles.json`。资源管理器按固定文件名选取最高优先级的完整文件。修改前从内置文件复制整表。

## 一个内置条目

```json
{
  "profileId": "HELIUM_FLASH",
  "precursorTicks": 4,
  "collapseTicks": 4,
  "ejectaTicks": 0,
  "fadeTicks": 12,
  "coreRadiusCurve": [
    1.0,
    0.82,
    1.05
  ],
  "ejectaRadiusCurve": [
    0.0,
    0.0
  ],
  "peakEmission": 1.8,
  "palette": [
    16773280,
    16777215
  ],
  "shellCount": 1,
  "rayCount": 0,
  "rayLength": 0.0,
  "asymmetry": 0.0,
  "remnantKind": "none"
}
```

[包含全部条目的文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/stellar_event_profiles.json)

## StellarEventProfile

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `profileId` | 字符串 | 必填 | 事件曲线的唯一 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L65) |
| `precursorTicks` | 整数 | 必填 | 前兆阶段 tick 数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L66) |
| `collapseTicks` | 整数 | 必填 | 坍缩阶段 tick 数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L67) |
| `ejectaTicks` | 整数 | 必填 | 抛射阶段 tick 数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L68) |
| `fadeTicks` | 整数 | 必填 | 衰退阶段 tick 数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L69) |
| `coreRadiusCurve` | 数值数组 | 必填 | 核心半径曲线采样 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L70) |
| `ejectaRadiusCurve` | 数值数组 | 必填 | 抛射物半径曲线采样 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L71) |
| `peakEmission` | 数值 | 必填 | 峰值发光强度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L72) |
| `palette` | 整数数组 | 必填 | 颜色值数组 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L73) |
| `shellCount` | 整数 | 必填 | 壳层数量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L74) |
| `rayCount` | 整数 | 必填 | 射线数量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L75) |
| `rayLength` | 数值 | 必填 | 射线长度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L76) |
| `asymmetry` | 数值 | 必填 | 不对称程度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L77) |
| `remnantKind` | `RemnantKind.CODEC` | 必填 | 事件留下的遗骸类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarEventProfile.java#L78) |

[StellarTrackLibrary.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java)
