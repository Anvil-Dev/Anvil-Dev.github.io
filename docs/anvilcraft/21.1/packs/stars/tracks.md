# 演化轨道与阶段

每条轨道引用进入阶段的节点 ID，结束阶段还可绑定事件。必须保留质量 41 至 64 对应的 24 条轨道，ID 从 `mass_41` 到 `mass_64`。质量 41 使用棕矮星入口。

资源位置为 `data/anvilcraft/stellar_tracks.json`。资源管理器按固定文件名选取最高优先级的完整文件。修改前从内置文件复制整表。

## 一个内置条目

```json
{
  "trackId": "mass_41",
  "definition": {
    "version": 3,
    "massAnvils": 41,
    "startingNodes": {
      "BROWN_DWARF": "brown_dwarf_cooling"
    },
    "terminal": {
      "kind": "keep",
      "massAnvils": 41,
      "solarMass": 0.063,
      "size": 24
    },
    "metallicity": {
      "minimum": 0.1,
      "maximum": 2.5,
      "solarZ": 0.014
    }
  },
  "terminalProfile": "",
  "phaseNodes": [
    {
      "nodeId": "brown_dwarf_cooling",
      "phaseId": "brown_dwarf_cooling",
      "durationWeight": 93.6,
      "radius": 0.185804,
      "temperature": 900,
      "luminosity": 0.00091,
      "envelopeFraction": 1,
      "pulsationAmplitude": 0,
      "pulsationFrequency": 0,
      "surfaceStyle": "brown_dwarf_cooling",
      "eventProfileId": "",
      "dynamics": {
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
    }
  ]
}
```

[包含全部条目的文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/stellar_tracks.json)

## StellarTrack

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `trackId` | 字符串 | 必填 | 轨道 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L16) |
| `surfaceClassFamily` | 字符串 | 可省略，默认 `""` | 表面类型族 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L17) |
| `phaseNodes` | `PhaseNode.CODEC`数组 | 必填 | 依次经过的阶段节点 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L18) |
| `terminalProfile` | 字符串 | 可省略，默认 `""` | 终末事件的 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L19) |
| `definition` | `StellarTrackDefinition.CODEC` | 必填 | 轨道入口和终末天体 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java#L20) |

## StellarTrackDefinition

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `version` | 整数 `3 至 3` | 必填 | 此轨道定义的结构版本 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L14) |
| `massAnvils` | 整数 `41 至 64` | 必填 | 以铁砧数表示的质量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L15) |
| `startingNodes` | 字符串到字符串的对象 | 必填 | 表面类型到入口节点 ID 的映射 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L16) |
| `terminal` | `StellarTerminal.CODEC` | 必填 | 演化结束后留下的天体 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L18) |
| `metallicity` | `StellarMetallicity.CODEC` | 可省略，默认 `StellarMetallicity.DEFAULT` | 金属丰度范围与标度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackDefinition.java#L19) |

## StellarTerminal

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `kind` | `Kind.CODEC` | 必填 | 终末类型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L10) |
| `massAnvils` | 整数 `0 至 64` | 必填 | 以铁砧数表示的质量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L11) |
| `solarMass` | 数值 `0 至 181` | 必填 | 以太阳质量计的质量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L12) |
| `size` | 整数 `1 至 64` | 必填 | 尺寸 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L13) |

## PhaseNode

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `phaseId` | `StellarEvolutionPhase.CODEC` | 必填 | 演化阶段标识 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L24) |
| `durationWeight` | 数值 | 必填 | 该阶段的相对时长 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L25) |
| `radius` | 数值 | 必填 | 半径参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L26) |
| `temperature` | 数值 | 必填 | 温度参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L27) |
| `luminosity` | 数值 | 必填 | 光度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L28) |
| `envelopeFraction` | 数值 | 必填 | 包层所占比例 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L29) |
| `pulsationAmplitude` | 数值 | 必填 | 脉动幅度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L30) |
| `pulsationFrequency` | 数值 | 必填 | 脉动频率 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L31) |
| `surfaceStyle` | 字符串 | 可省略，默认 `"default"` | 表面样式 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L32) |
| `eventProfileId` | 字符串 | 可省略，默认 `""` | 引用的事件曲线 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L33) |
| `nodeId` | 字符串 | 必填 | 同一轨道内的节点 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L34) |
| `dynamics` | `StellarNodeDynamics.CODEC` | 必填 | 动态控制点与脉冲行为 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/PhaseNode.java#L35) |

## StellarMetallicity

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `minimum` | 数值 `0.001 至 10` | 可省略，默认 `0.1` | 允许的最小值 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicity.java#L12) |
| `maximum` | 数值 `0.001 至 10` | 可省略，默认 `2.5` | 允许的最大值 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicity.java#L13) |
| `solarZ` | 数值 `0.001 至 0.1` | 可省略，默认 `0.014` | 太阳金属丰度参考值 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarMetallicity.java#L14) |

[StellarTrackLibrary.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java)
