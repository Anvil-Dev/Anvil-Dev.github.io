# 世界生成与维度

修改月球的矿脉或地形时要区分配置、放置规则与维度引用。配置地物描述生成什么，放置地物指定尝试次数、高度和空间筛选。

## `biome`

路径 `data/anvilcraft/worldgen/biome/mun.json`。

```json
{
  "carvers": [],
  "creature_spawn_probability": 0.0,
  "downfall": 0.0,
  "effects": {
    "water_color": "#3f76e4"
  },
  "features": [
    [],
    [],
    [],
    [],
    [],
    [],
    [
      "anvilcraft:mun_deepslate_iron_ore",
      "anvilcraft:mun_deepslate_titanium_ore"
    ],
    [],
    [],
    [],
    []
  ],
  "has_precipitation": false,
  "spawn_costs": {},
  "spawners": {
    "ambient": [],
    "axolotls": [],
    "creature": [],
    "misc": [],
    "monster": [],
    "underground_water_creature": [],
    "water_ambient": [],
    "water_creature": []
  },
  "temperature": 0.5,
  "attributes": {
    "minecraft:visual/fog_color": "#000000",
    "minecraft:visual/sky_color": "#000000",
    "minecraft:visual/water_fog_color": "#050533",
    "minecraft:audio/ambient_sounds": {
      "mood": {
        "block_search_extent": 8,
        "offset": 2.0,
        "sound": "minecraft:ambient.cave",
        "tick_delay": 6000
      }
    }
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/biome/mun.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `carvers` | 数组 | 按上方资源 ID 的定义读取 |
| `creature_spawn_probability` | 数值 | 按上方资源 ID 的定义读取 |
| `downfall` | 数值 | 按上方资源 ID 的定义读取 |
| `effects` | 对象 | 按上方资源 ID 的定义读取 |
| `features` | 数组 | 按上方资源 ID 的定义读取 |
| `has_precipitation` | 布尔值 | 按上方资源 ID 的定义读取 |
| `spawn_costs` | 对象 | 按上方资源 ID 的定义读取 |
| `spawners` | 对象 | 按上方资源 ID 的定义读取 |
| `temperature` | 数值 | 温度参数 |
| `attributes` | 对象 | 按上方资源 ID 的定义读取 |

## `configured_feature`

路径 `data/anvilcraft/worldgen/configured_feature/mun_deepslate_iron_ore.json`。

```json
{
  "type": "minecraft:ore",
  "config": {
    "discard_chance_on_air_exposure": 0.0,
    "size": 9,
    "targets": [
      {
        "state": {
          "Name": "minecraft:deepslate_iron_ore"
        },
        "target": {
          "predicate_type": "tag_match",
          "tag": "minecraft:deepslate_ore_replaceables"
        }
      }
    ]
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/configured_feature/mun_deepslate_iron_ore.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `type` | 字符串 | 选择子格式的注册 ID |
| `config` | 对象 | 对应类型的配置 |

## `placed_feature`

路径 `data/anvilcraft/worldgen/placed_feature/mun_deepslate_iron_ore.json`。

```json
{
  "feature": "anvilcraft:mun_deepslate_iron_ore",
  "placement": [
    {
      "type": "minecraft:count",
      "count": 40
    },
    {
      "type": "minecraft:in_square"
    },
    {
      "type": "minecraft:height_range",
      "height": {
        "type": "minecraft:uniform",
        "max_inclusive": {
          "absolute": 40
        },
        "min_inclusive": {
          "absolute": -64
        }
      }
    },
    {
      "type": "minecraft:biome"
    }
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/placed_feature/mun_deepslate_iron_ore.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `feature` | 字符串 | 引用的配置地物 |
| `placement` | 数组 | 按顺序执行的位置筛选或重复操作 |

## `noise`

路径 `data/anvilcraft/worldgen/noise/crater_cell.json`。

```json
{
  "amplitudes": [
    1.0,
    1.0
  ],
  "firstOctave": 0
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/noise/crater_cell.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `amplitudes` | 数组 | 各级噪声振幅 |
| `firstOctave` | 整数 | 首个采样八度 |

## `noise_settings`

路径 `data/anvilcraft/worldgen/noise_settings/mun.json`。

```json
{
  "aquifers_enabled": false,
  "default_block": {
    "Name": "anvilcraft:lunar_rock"
  },
  "default_fluid": {
    "Name": "minecraft:air"
  },
  "disable_mob_generation": true,
  "legacy_random_source": false,
  "noise": {
    "height": 384,
    "min_y": -64,
    "size_horizontal": 1,
    "size_vertical": 2
  },
  "noise_router": {
    "barrier": 0,
    "continents": 0,
    "depth": 0,
    "erosion": 0,
    "final_density": {
      "type": "minecraft:interpolated",
      "argument": {
        "type": "minecraft:add",
        "argument1": {
          "type": "minecraft:add",
          "argument1": {
            "type": "minecraft:y_clamped_gradient",
            "from_value": 1.0,
            "from_y": 40,
            "to_value": -1.0,
            "to_y": 80
          },
          "argument2": {
            "type": "minecraft:mul",
            "argument1": 0.1,
            "argument2": {
              "type": "minecraft:noise",
              "noise": "anvilcraft:mun_base",
              "xz_scale": 1.0,
              "y_scale": 0.0
            }
          }
        },
        "argument2": {
          "type": "minecraft:mul",
          "argument1": {
            "type": "anvilcraft:crater",
            "layers": [
              {
                "bowl_depth": 0.5,
                "cell_size": 384,
                "max_radius": 150.0,
                "min_radius": 80.0,
                "rim_height": 0.5,
                "rim_width": 12.0
              },
              {
                "bowl_depth": 0.45,
                "cell_size": 192,
                "max_radius": 72.0,
                "min_radius": 32.0,
                "rim_height": 0.55,
                "rim_width": 7.0
              },
              {
                "bowl_depth": 0.2,
                "cell_size": 64,
                "max_radius": 18.0,
                "min_radius": 6.0,
                "rim_height": 0.15,
                "rim_width": 3.0
              }
            ],
            "noise": "anvilcraft:crater_cell"
          },
          "argument2": {
            "type": "minecraft:mul",
            "argument1": {
              "type": "minecraft:y_clamped_gradient",
              "from_value": 0.0,
              "from_y": 0,
              "to_value": 1.0,
              "to_y": 30
            },
            "argument2": {
              "type": "minecraft:y_clamped_gradient",
              "from_value": 1.0,
              "from_y": 30,
              "to_value": 0.0,
              "to_y": 160
            }
          }
        }
      }
    },
    "fluid_level_floodedness": 0,
    "fluid_level_spread": 0,
    "lava": 0,
    "ridges": 0,
    "temperature": 0,
    "vegetation": 0,
    "vein_gap": 0,
    "vein_ridged": 0,
    "vein_toggle": 0,
    "preliminary_surface_level": {
      "type": "minecraft:add",
      "argument1": {
        "type": "minecraft:mul",
        "argument1": 65536,
        "argument2": 32768
      },
      "argument2": -1
    }
  },
  "ore_veins_enabled": false,
  "sea_level": -64,
  "spawn_target": [],
  "surface_rule": {
    "type": "minecraft:sequence",
    "sequence": [
      {
        "type": "minecraft:condition",
        "if_true": {
          "type": "minecraft:vertical_gradient",
          "false_at_and_above": {
            "above_bottom": 2
          },
          "random_name": "anvilcraft:mun_bedrock_floor",
          "true_at_and_below": {
            "above_bottom": 0
          }
        },
        "then_run": {
          "type": "minecraft:block",
          "result_state": {
            "Name": "minecraft:bedrock"
          }
        }
      },
      {
        "type": "minecraft:condition",
        "if_true": {
          "type": "minecraft:vertical_gradient",
          "false_at_and_above": {
            "absolute": 45
          },
          "random_name": "minecraft:deepslate",
          "true_at_and_below": {
            "absolute": 37
          }
        },
        "then_run": {
          "type": "minecraft:block",
          "result_state": {
            "Name": "minecraft:deepslate"
          }
        }
      },
      {
        "type": "minecraft:condition",
        "if_true": {
          "type": "minecraft:stone_depth",
          "add_surface_depth": true,
          "offset": 0,
          "secondary_depth_range": 4,
          "surface_type": "floor"
        },
        "then_run": {
          "type": "minecraft:block",
          "result_state": {
            "Name": "anvilcraft:lunar_soil"
          }
        }
      }
    ]
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/noise_settings/mun.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `aquifers_enabled` | 布尔值 | 按上方资源 ID 的定义读取 |
| `default_block` | 对象 | 按上方资源 ID 的定义读取 |
| `default_fluid` | 对象 | 按上方资源 ID 的定义读取 |
| `disable_mob_generation` | 布尔值 | 按上方资源 ID 的定义读取 |
| `legacy_random_source` | 布尔值 | 按上方资源 ID 的定义读取 |
| `noise` | 对象 | 噪声参数或噪声注册 ID |
| `noise_router` | 对象 | 按上方资源 ID 的定义读取 |
| `ore_veins_enabled` | 布尔值 | 按上方资源 ID 的定义读取 |
| `sea_level` | 整数 | 按上方资源 ID 的定义读取 |
| `spawn_target` | 数组 | 按上方资源 ID 的定义读取 |
| `surface_rule` | 对象 | 按上方资源 ID 的定义读取 |

## `structure`

路径 `data/anvilcraft/worldgen/structure/small_monolith.json`。

```json
{
  "type": "minecraft:jigsaw",
  "start_pool": "anvilcraft:small_monolith_pool",
  "size": 1,
  "max_distance_from_center": 80,
  "biomes": "#minecraft:is_savanna",
  "step": "surface_structures",
  "terrain_adaptation": "beard_thin",
  "start_height": {
    "absolute": 0
  },
  "project_start_to_heightmap": "WORLD_SURFACE_WG",
  "spawn_overrides": {},
  "use_expansion_hack": false
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/structure/small_monolith.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `type` | 字符串 | 选择子格式的注册 ID |
| `start_pool` | 字符串 | 按上方资源 ID 的定义读取 |
| `size` | 整数 | 尺寸 |
| `max_distance_from_center` | 整数 | 按上方资源 ID 的定义读取 |
| `biomes` | 字符串 | 按上方资源 ID 的定义读取 |
| `step` | 字符串 | 资源生成步长 |
| `terrain_adaptation` | 字符串 | 按上方资源 ID 的定义读取 |
| `start_height` | 对象 | 按上方资源 ID 的定义读取 |
| `project_start_to_heightmap` | 字符串 | 按上方资源 ID 的定义读取 |
| `spawn_overrides` | 对象 | 按上方资源 ID 的定义读取 |
| `use_expansion_hack` | 布尔值 | 按上方资源 ID 的定义读取 |

## `structure_set`

路径 `data/anvilcraft/worldgen/structure_set/small_monolith.json`。

```json
{
  "structures": [
    {
      "structure": "anvilcraft:small_monolith",
      "weight": 1
    }
  ],
  "placement": {
    "type": "minecraft:random_spread",
    "salt": 1725764832,
    "spacing": 48,
    "separation": 24
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/structure_set/small_monolith.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `structures` | 数组 | 候选结构及权重 |
| `placement` | 对象 | 按顺序执行的位置筛选或重复操作 |

## `template_pool`

路径 `data/anvilcraft/worldgen/template_pool/the_monolith_pool.json`。

```json
{
  "fallback": "minecraft:empty",
  "elements": [
    {
      "weight": 1,
      "element": {
        "element_type": "minecraft:single_pool_element",
        "location": "anvilcraft:the_monolith",
        "processors": "minecraft:empty",
        "projection": "rigid"
      }
    }
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/template_pool/the_monolith_pool.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `fallback` | 字符串 | 备用模板池 ID |
| `elements` | 数组 | 模板池的加权条目 |

## 撞击坑密度函数

月球地形中的自定义密度函数还可配置以下参数。

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `noise` | `NoiseHolder.CODEC` | 必填 | 使用的噪声采样器 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L32) |
| `layers` | `Layer.CODEC`数组 | 必填 | 地形采样层数 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L33) |
| `cell_size` | 整数 | 必填 | 噪声采样单元尺寸 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L73) |
| `min_radius` | 数值 | 必填 | 最小撞击坑半径 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L74) |
| `max_radius` | 数值 | 必填 | 最大撞击坑半径 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L75) |
| `rim_height` | 数值 | 必填 | 撞击坑边缘高度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L76) |
| `bowl_depth` | 数值 | 必填 | 坑底深度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L77) |
| `rim_width` | 数值 | 必填 | 撞击坑边缘宽度 [声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L78) |
