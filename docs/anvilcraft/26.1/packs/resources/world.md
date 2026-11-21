# 维度、伤害与燃料

维度定义引用维度类型和生成器。写入数据包的维度参与世界创建，修改应先用新建测试世界验证。

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

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/dimension/overworld_like.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `type` | 字符串 | 选择子格式的注册 ID |
| `generator` | 对象 | 该维度的区块生成器 |

## `dimension_type`

路径 `data/anvilcraft/dimension_type/void_planet.json`。

```json
{
  "ambient_light": 0.0,
  "attributes": {
    "minecraft:audio/ambient_sounds": {
      "mood": {
        "block_search_extent": 8,
        "offset": 2.0,
        "sound": "minecraft:ambient.cave",
        "tick_delay": 6000
      }
    },
    "minecraft:audio/background_music": {
      "creative": {
        "max_delay": 24000,
        "min_delay": 12000,
        "sound": "minecraft:music.creative"
      },
      "default": {
        "max_delay": 24000,
        "min_delay": 12000,
        "sound": "minecraft:music.game"
      }
    },
    "minecraft:gameplay/bed_rule": {
      "can_set_spawn": "never",
      "can_sleep": "never",
      "explodes": true
    },
    "minecraft:gameplay/respawn_anchor_works": false,
    "minecraft:visual/ambient_light_color": "#3f473f",
    "minecraft:visual/fog_color": "#1c2026",
    "minecraft:visual/sky_color": "#000000",
    "minecraft:visual/sky_light_color": "#ac60cd",
    "minecraft:visual/sky_light_factor": 0.0,
    "minecraft:gameplay/can_start_raid": false,
    "minecraft:gameplay/can_pillager_patrol_spawn": false
  },
  "coordinate_scale": 1.0,
  "default_clock": "minecraft:overworld",
  "has_ceiling": false,
  "has_ender_dragon_fight": false,
  "has_fixed_time": true,
  "has_skylight": true,
  "height": 384,
  "infiniburn": "#minecraft:infiniburn_end",
  "logical_height": 384,
  "min_y": -64,
  "monster_spawn_block_light_limit": 0,
  "monster_spawn_light_level": 0,
  "skybox": "end",
  "timelines": "#minecraft:universal"
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/dimension_type/void_planet.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `ambient_light` | 数值 | 按上方资源 ID 的定义读取 |
| `attributes` | 对象 | 按上方资源 ID 的定义读取 |
| `coordinate_scale` | 数值 | 按上方资源 ID 的定义读取 |
| `default_clock` | 字符串 | 按上方资源 ID 的定义读取 |
| `has_ceiling` | 布尔值 | 按上方资源 ID 的定义读取 |
| `has_ender_dragon_fight` | 布尔值 | 按上方资源 ID 的定义读取 |
| `has_fixed_time` | 布尔值 | 按上方资源 ID 的定义读取 |
| `has_skylight` | 布尔值 | 按上方资源 ID 的定义读取 |
| `height` | 整数 | 涌泉高度条件 |
| `infiniburn` | 字符串 | 按上方资源 ID 的定义读取 |
| `logical_height` | 整数 | 按上方资源 ID 的定义读取 |
| `min_y` | 整数 | 按上方资源 ID 的定义读取 |
| `monster_spawn_block_light_limit` | 整数 | 按上方资源 ID 的定义读取 |
| `monster_spawn_light_level` | 整数 | 按上方资源 ID 的定义读取 |
| `skybox` | 字符串 | 按上方资源 ID 的定义读取 |
| `timelines` | 字符串 | 按上方资源 ID 的定义读取 |

## `damage_type`

路径 `data/anvilcraft/damage_type/planetary_collapse.json`。

```json
{
  "exhaustion": 0.0,
  "message_id": "anvilcraft.planetary_collapse",
  "scaling": "never"
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/damage_type/planetary_collapse.json)

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

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/neoforge/data_maps/item/furnace_fuels.json)
