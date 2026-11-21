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

[内置配方原文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/special_celestial_body/white_hole.json)

## 字段与取值

根对象的 `type` 必填，填写 `anvilcraft:special_celestial_body`。

BehaviorFields 与 AtmosphereFields 的字段均直接写在根对象。ResourceFields 描述 `resources` 的内容；WeightedEntry、DemandEntry 是这些资源列表里的元素。

### 根对象

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `name` | 字符串 | 必填 | 名称 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L377) |
| `time` | 整数 | 必填 | 时间参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L378) |
| `space` | 整数 | 必填 | 空间属性 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L379) |
| `mass` | 整数 | 必填 | 质量数值 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L380) |
| `energy` | 整数 | 必填 | 能量属性 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L381) |
| `model` | 字符串 | 必填 | 模型标识 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L382) |
| `liquid_coverage` | `LIQUID_COVERAGE_CODEC` | 可省略 | 液体覆盖等级 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L384) |
| `magnetic_field` | 整数 | 必填 | 磁场强度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L385) |
| `rotation_speed` | 整数 | 必填 | 自转速度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L386) |
| `axial_tilt` | 数值 | 必填 | 自转轴倾角 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L387) |
| `seed_items` | 资源 ID数组 | 必填 | 关联种子物品列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L388) |
| `resources` | `ResourceFields.CODEC` | 必填 | 该天体产出的资源配置 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L394) |
| `landing` | `CelestialTravelData.CODEC` | 可省略 | 降落规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L398) |
| `travel` | `CelestialTravelData.CODEC` | 可省略 | 旅行规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L399) |

### WeightedEntry

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | 字符串 | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L269) |
| `weight` | 整数 | 必填 | 在候选集中抽取的相对权重 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L270) |

### DemandEntry

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `id` | 字符串 | 必填 | 注册 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L290) |
| `count` | 整数 | 必填 | 数量 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L291) |
| `has_atmosphere` | 布尔值 | 可省略 | 是否拥有大气 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L330) |

### ResourceFields

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `minerals` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 矿产条目 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L347) |
| `fluids` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 流体条目 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L348) |
| `biological_items` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 生物物品资源 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L349) |
| `biological_fluids` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 生物流体资源 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L350) |
| `offerings` | `WeightedEntry.CODEC`数组 | 可省略，默认 `[]` | 供奉物列表 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L351) |
| `temple_blessings` | `DemandEntry.CODEC`数组 | 可省略，默认 `[]` | 神庙祝福条目 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L352) |
| `temple_punishments` | `DemandEntry.CODEC`数组 | 可省略，默认 `[]` | 神庙惩罚条目 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L353) |

### BehaviorFields

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `needs_custom_model` | 布尔值 | 可省略，默认 `false` | 是否使用定制模型 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L361) |
| `can_be_shattered` | 布尔值 | 可省略 | 是否可被击碎 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L362) |
| `exclude_from_monolith` | 布尔值 | 可省略，默认 `false` | 是否排除在独石选择之外 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L363) |

### AtmosphereFields

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `atmosphere` | `ATMOSPHERE_COLOR_CODEC` | 可省略 | 大气颜色 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L369) |

### CoordinateRule

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `type` | `Type.CODEC` | 可省略，默认 `Type.FIXED` | 分派到对应实现的类型 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L37) |
| `scale` | 数值 | 可省略，默认 `1.0` | 坐标缩放比例 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L38) |
| `x` | 整数 | 可省略，默认 `0` | X 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L39) |
| `y` | 整数 | 可省略，默认 `64` | Y 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L40) |
| `z` | 整数 | 可省略，默认 `0` | Z 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L41) |
| `radius` | 整数 | 可省略，默认 `8` | 半径参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L42) |

### ReturnRule

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `type` | `Type.CODEC` | 可省略，默认 `Type.ENTRY_PORTAL` | 分派到对应实现的类型 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L112) |
| `x` | 整数 | 可省略，默认 `0` | X 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L113) |
| `y` | 整数 | 可省略，默认 `64` | Y 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L114) |
| `z` | 整数 | 可省略，默认 `0` | Z 坐标 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L115) |
| `radius` | 整数 | 可省略，默认 `8` | 半径参数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L116) |

### CelestialTravelData

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `dimension` | 资源 ID | 必填 | 维度资源 ID [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L172) |
| `coordinate_rule` | `CoordinateRule.CODEC` | 可省略，默认 `CoordinateRule.DEFAULT` | 目的地坐标计算规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L173) |
| `return_rule` | `ReturnRule.CODEC` | 可省略，默认 `ReturnRule.DEFAULT` | 返程坐标计算规则 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L175) |

[配方实现与匹配规则](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java)
