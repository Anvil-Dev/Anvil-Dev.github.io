# 维度、伤害与燃料

维度定义引用维度类型和生成器。月球气压和重力另存于 dimension_physics 路径，坐标加速度使用三分量数值数组。

## `dimension`

路径 `data/anvilcraft/dimension/overworld_like.json`。

```json
{
  "type": "minecraft:overworld",
  "generator": {
    "type": "minecraft:noise",
    "biome_source": {
      "type": "anvilcraft:vanilla_overworld"
    },
    "settings": "minecraft:overworld"
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/dimension/overworld_like.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `type` | 字符串 | 选择子格式的注册 ID |
| `generator` | 对象 | 该维度的区块生成器 |

## `dimension_type`

路径 `data/anvilcraft/dimension_type/mun.json`。

```json
{
  "ambient_light": 0.0,
  "bed_works": false,
  "coordinate_scale": 16.0,
  "effects": "anvilcraft:mun",
  "has_ceiling": false,
  "has_raids": false,
  "has_skylight": true,
  "height": 384,
  "infiniburn": "#minecraft:infiniburn_end",
  "logical_height": 384,
  "min_y": -64,
  "monster_spawn_block_light_limit": 0,
  "monster_spawn_light_level": 0,
  "natural": false,
  "piglin_safe": false,
  "respawn_anchor_works": false,
  "ultrawarm": false
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/dimension_type/mun.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `ambient_light` | 数值 | 按上方资源 ID 的定义读取 |
| `bed_works` | 布尔值 | 按上方资源 ID 的定义读取 |
| `coordinate_scale` | 数值 | 按上方资源 ID 的定义读取 |
| `effects` | 字符串 | 按上方资源 ID 的定义读取 |
| `has_ceiling` | 布尔值 | 按上方资源 ID 的定义读取 |
| `has_raids` | 布尔值 | 按上方资源 ID 的定义读取 |
| `has_skylight` | 布尔值 | 按上方资源 ID 的定义读取 |
| `height` | 整数 | 涌泉高度条件 |
| `infiniburn` | 字符串 | 按上方资源 ID 的定义读取 |
| `logical_height` | 整数 | 按上方资源 ID 的定义读取 |
| `min_y` | 整数 | 按上方资源 ID 的定义读取 |
| `monster_spawn_block_light_limit` | 整数 | 按上方资源 ID 的定义读取 |
| `monster_spawn_light_level` | 整数 | 按上方资源 ID 的定义读取 |
| `natural` | 布尔值 | 按上方资源 ID 的定义读取 |
| `piglin_safe` | 布尔值 | 按上方资源 ID 的定义读取 |
| `respawn_anchor_works` | 布尔值 | 按上方资源 ID 的定义读取 |
| `ultrawarm` | 布尔值 | 按上方资源 ID 的定义读取 |

## `dimension_physics`

路径 `data/anvilcraft/dimension_physics/mun.json`。

```json
{
  "dimension": "anvilcraft:mun",
  "base_gravity": [
    0.0,
    -1.83,
    0.0
  ],
  "base_pressure": 0.0,
  "universal_drag": 0.0
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/data/anvilcraft/dimension_physics/mun.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `dimension` | 字符串 | 适用维度 |
| `base_gravity` | 数组 | 基础重力向量 |
| `base_pressure` | 数值 | 基础气压 |
| `universal_drag` | 数值 | 环境阻力 |

## `damage_type`

路径 `data/anvilcraft/damage_type/planetary_collapse.json`。

```json
{
  "exhaustion": 0.0,
  "message_id": "anvilcraft.planetary_collapse",
  "scaling": "never"
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/damage_type/planetary_collapse.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `exhaustion` | 数值 | 造成伤害时的饥饿消耗 |
| `message_id` | 字符串 | 死亡消息翻译键后缀 |
| `scaling` | 字符串 | 难度缩放模式 |

## 熔炉燃料数据映射

向 `data/neoforge/data_maps/item/furnace_fuels.json` 的 `values` 对象添加物品 ID 或标签。

```json
{
  "values": {
    "anvilcraft:wood_fiber": {
      "burn_time": 300
    }
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/neoforge/data_maps/item/furnace_fuels.json)
