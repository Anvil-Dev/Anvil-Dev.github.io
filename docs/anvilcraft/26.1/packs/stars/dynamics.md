# 恒星动态控制点

阶段内的 `dynamics` 描述物理量如何随进度变化。各个控制点给出半径、温度、光度和包层。响应对象调节金属丰度带来的偏移。

资源位置为 `data/anvilcraft/stellar_tracks.json`。资源管理器按固定文件名选取最高优先级的完整文件。修改前从内置文件复制整表。

## 一个内置条目

```json
{
  "response": {
    "duration": 0.1,
    "radius": 0.08,
    "temperature": -0.06,
    "luminosity": -0.1,
    "wind": 0.18,
    "amplitude": 0.12,
    "minimumPulses": 1,
    "maximumPulses": 1
  },
  "eventPolicy": "visual",
  "pulses": 1,
  "wind": 0,
  "points": [
    {
      "progress": 0,
      "radius": 0.218594,
      "temperature": 1700,
      "luminosity": 0.009097,
      "envelope": 1
    },
    {
      "progress": 1,
      "radius": 0.185804,
      "temperature": 900,
      "luminosity": 0.00091,
      "envelope": 1
    }
  ]
}
```

[包含全部条目的文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/stellar_tracks.json)

## StellarNodeDynamics

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `points` | `StellarControlPoint.CODEC`数组 | 必填 | 按进度排列的控制点 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L16) |
| `response` | `StellarMetallicityResponse.CODEC` | 可省略，默认 `StellarMetallicityResponse.NONE` | 金属丰度响应 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L17) |
| `eventPolicy` | `EventPolicy.CODEC` | 可省略，默认 `EventPolicy.VISUAL` | 事件触发策略 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L19) |
| `pulses` | 整数 `1 至 16` | 可省略，默认 `1` | 脉冲数量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L20) |
| `wind` | 数值 `0 至 1` | 可省略，默认 `0.0f` | 风强度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarNodeDynamics.java#L21) |

## StellarControlPoint

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `progress` | 数值 `0 至 1` | 必填 | 控制点在阶段内的位置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L12) |
| `radius` | 数值 `0.001f 至 10000` | 必填 | 半径参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L13) |
| `temperature` | 数值 `100 至 200000` | 必填 | 温度参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L14) |
| `luminosity` | 数值 `0.0001f 至 10000000` | 必填 | 光度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L15) |
| `envelope` | 数值 `0 至 1` | 必填 | 包层比例 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L16) |
| `minimumTemperature` | 数值 `100 至 200000` | 可省略，默认 `100.0f` | 温度下限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L17) |
| `maximumTemperature` | 数值 `100 至 200000` | 可省略，默认 `200000.0f` | 温度上限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarControlPoint.java#L19) |

## StellarMetallicityResponse

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `duration` | 数值 `-0.5f 至 0.5f` | 可省略，默认 `0.0f` | 持续时间 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L13) |
| `radius` | 数值 `-0.5f 至 0.5f` | 可省略，默认 `0.0f` | 半径参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L14) |
| `temperature` | 数值 `-0.5f 至 0.5f` | 可省略，默认 `0.0f` | 温度参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L15) |
| `luminosity` | 数值 `-0.5f 至 0.5f` | 可省略，默认 `0.0f` | 光度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L16) |
| `wind` | 数值 `-0.5f 至 0.5f` | 可省略，默认 `0.0f` | 风强度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L17) |
| `amplitude` | 数值 `-0.5f 至 0.5f` | 可省略，默认 `0.0f` | 振幅修正 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L18) |
| `minimumPulses` | 整数 `1 至 16` | 可省略，默认 `1` | 脉冲数下限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L19) |
| `maximumPulses` | 整数 `1 至 16` | 可省略，默认 `1` | 脉冲数上限 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicityResponse.java#L20) |

[StellarTrackLibrary.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java)
