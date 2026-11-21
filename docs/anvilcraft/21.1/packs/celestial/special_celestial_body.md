# 特殊天体

将种子物品与天体预设绑定，并填写资源、物理属性及可选的登陆规则。

在数据包中建立 `data/example/recipe/special_celestial_body/example.json`。游戏按 `type` 选择序列化器，这个文件的配方 ID 是 `example:special_celestial_body/example`。

## 配方示例

```json
{
  "type": "anvilcraft:special_celestial_body",
  "axial_tilt": 0.0,
  "can_be_shattered": false,
  "energy": 64,
  "liquid_coverage": "none",
  "magnetic_field": 6,
  "mass": 54,
  "model": "white_hole",
  "name": "white_hole",
  "needs_custom_model": true,
  "resources": {},
  "rotation_speed": 0,
  "seed_items": [
    "anvilcraft:white_hole"
  ],
  "space": 1,
  "time": 3
}
```

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/special_celestial_body/white_hole.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:special_celestial_body`。

BehaviorFields 与 AtmosphereFields 的字段均直接写在根对象。ResourceFields 描述 `resources` 的内容；WeightedEntry、DemandEntry 是这些资源列表里的元素。

### 根对象

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `name` | 字符串 | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L334) |
| `time` | 整数 | 必填 | 时间参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L335) |
| `space` | 整数 | 必填 | 空间属性 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L336) |
| `mass` | 整数 | 必填 | 质量数值 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L337) |
| `energy` | 整数 | 必填 | 能量属性 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L338) |
| `model` | 字符串 | 必填 | 模型标识 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L339) |
| `liquid_coverage` | `LIQUID_COVERAGE_CODEC` | 可省略 | 液体覆盖等级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L341) |
| `magnetic_field` | 整数 | 必填 | 磁场强度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L342) |
| `rotation_speed` | 整数 | 必填 | 自转速度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L343) |
| `axial_tilt` | 数值 | 必填 | 自转轴倾角 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L344) |
| `seed_items` | 资源 ID数组 | 必填 | 关联种子物品列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L345) |
| `resources` | `ResourceFields.CODEC` | 必填 | 该天体产出的资源配置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L351) |
| `landing` | `CelestialTravelData.CODEC` | 可省略 | 降落规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L355) |
| `travel` | `CelestialTravelData.CODEC` | 可省略 | 旅行规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L356) |

### WeightedEntry

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | 字符串 | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L235) |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L236) |

### DemandEntry

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | 字符串 | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L256) |
| `count` | 整数 | 必填 | 数量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L257) |
| `has_atmosphere` | 布尔值 | 可省略 | 是否拥有大气 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L287) |

### ResourceFields

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `minerals` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 矿产条目 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L304) |
| `fluids` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 流体条目 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L305) |
| `biological_items` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 生物物品资源 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L306) |
| `biological_fluids` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 生物流体资源 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L307) |
| `offerings` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 供奉物列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L308) |
| `temple_blessings` | `DemandEntry.CODEC`数组 | 可省略，默认 `[]` | 神庙祝福条目 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L309) |
| `temple_punishments` | `DemandEntry.CODEC`数组 | 可省略，默认 `[]` | 神庙惩罚条目 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L310) |

### BehaviorFields

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `needs_custom_model` | 布尔值 | 可省略，默认 `false` | 是否使用定制模型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L318) |
| `can_be_shattered` | 布尔值 | 可省略 | 是否可被击碎 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L319) |
| `exclude_from_monolith` | 布尔值 | 可省略，默认 `false` | 是否排除在独石选择之外 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L320) |

### AtmosphereFields

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `atmosphere` | `ColorRGBA.CODEC` | 可省略 | 大气颜色 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L326) |

### CoordinateRule

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `type` | `Type.CODEC` | 可省略，默认 `Type.FIXED` | 分派到对应实现的类型 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L35) |
| `scale` | 数值 | 可省略，默认 `1.0` | 坐标缩放比例 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L36) |
| `x` | 整数 | 可省略，默认 `0` | X 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L37) |
| `y` | 整数 | 可省略，默认 `64` | Y 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L38) |
| `z` | 整数 | 可省略，默认 `0` | Z 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L39) |
| `radius` | 整数 | 可省略，默认 `8` | 半径参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L40) |

### ReturnRule

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `type` | `Type.CODEC` | 可省略，默认 `Type.ENTRY_PORTAL` | 分派到对应实现的类型 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L110) |
| `x` | 整数 | 可省略，默认 `0` | X 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L111) |
| `y` | 整数 | 可省略，默认 `64` | Y 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L112) |
| `z` | 整数 | 可省略，默认 `0` | Z 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L113) |
| `radius` | 整数 | 可省略，默认 `8` | 半径参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L114) |

### CelestialTravelData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `dimension` | 资源 ID | 必填 | 维度资源 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L170) |
| `coordinate_rule` | `CoordinateRule.CODEC` | 可省略，默认 `CoordinateRule.DEFAULT` | 目的地坐标计算规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L171) |
| `return_rule` | `ReturnRule.CODEC` | 可省略，默认 `ReturnRule.DEFAULT` | 返程坐标计算规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L173) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java)
