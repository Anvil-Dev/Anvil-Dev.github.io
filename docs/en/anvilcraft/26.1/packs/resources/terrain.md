# Worldgen and Dimensions

When modifying lunar ore veins or terrain, distinguish between configured features, placed features, and dimension references. Configured features describe what to generate, while placed features specify attempt counts, height, and spatial filters.

## `biome`

File path: `data/anvilcraft/worldgen/biome/mun.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/biome/mun.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `carvers` | Array | Read according to the resource ID definition above |
| `creature_spawn_probability` | Number | Read according to the resource ID definition above |
| `downfall` | Number | Read according to the resource ID definition above |
| `effects` | Object | Read according to the resource ID definition above |
| `features` | Array | Read according to the resource ID definition above |
| `has_precipitation` | Boolean | Read according to the resource ID definition above |
| `spawn_costs` | Object | Read according to the resource ID definition above |
| `spawners` | Object | Read according to the resource ID definition above |
| `temperature` | Number | Temperature parameter |
| `attributes` | Object | Read according to the resource ID definition above |

## `configured_feature`

File path: `data/anvilcraft/worldgen/configured_feature/mun_deepslate_iron_ore.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/configured_feature/mun_deepslate_iron_ore.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `type` | String | Registered ID selecting the sub-format |
| `config` | Object | Configuration for the corresponding type |

## `placed_feature`

File path: `data/anvilcraft/worldgen/placed_feature/mun_deepslate_iron_ore.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/placed_feature/mun_deepslate_iron_ore.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `feature` | String | Referenced configured feature |
| `placement` | Array | Position filters or repeaters executed in order |

## `noise`

File path: `data/anvilcraft/worldgen/noise/crater_cell.json`.

```json
{
  "amplitudes": [
    1.0,
    1.0
  ],
  "firstOctave": 0
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/noise/crater_cell.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `amplitudes` | Array | Amplitudes per noise octave |
| `firstOctave` | Integer | First sampled octave |

## `noise_settings`

File path: `data/anvilcraft/worldgen/noise_settings/mun.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/noise_settings/mun.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `aquifers_enabled` | Boolean | Read according to the resource ID definition above |
| `default_block` | Object | Read according to the resource ID definition above |
| `default_fluid` | Object | Read according to the resource ID definition above |
| `disable_mob_generation` | Boolean | Read according to the resource ID definition above |
| `legacy_random_source` | Boolean | Read according to the resource ID definition above |
| `noise` | Object | Noise parameters or noise registry ID |
| `noise_router` | Object | Read according to the resource ID definition above |
| `ore_veins_enabled` | Boolean | Read according to the resource ID definition above |
| `sea_level` | Integer | Read according to the resource ID definition above |
| `spawn_target` | Array | Read according to the resource ID definition above |
| `surface_rule` | Object | Read according to the resource ID definition above |

## `structure`

File path: `data/anvilcraft/worldgen/structure/small_monolith.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/structure/small_monolith.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `type` | String | Registered ID selecting the sub-format |
| `start_pool` | String | Read according to the resource ID definition above |
| `size` | Integer | Size |
| `max_distance_from_center` | Integer | Read according to the resource ID definition above |
| `biomes` | String | Read according to the resource ID definition above |
| `step` | String | Resource generation step |
| `terrain_adaptation` | String | Read according to the resource ID definition above |
| `start_height` | Object | Read according to the resource ID definition above |
| `project_start_to_heightmap` | String | Read according to the resource ID definition above |
| `spawn_overrides` | Object | Read according to the resource ID definition above |
| `use_expansion_hack` | Boolean | Read according to the resource ID definition above |

## `structure_set`

File path: `data/anvilcraft/worldgen/structure_set/small_monolith.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/structure_set/small_monolith.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `structures` | Array | Candidate structures and weights |
| `placement` | Object | Position filters or repeaters executed in order |

## `template_pool`

File path: `data/anvilcraft/worldgen/template_pool/the_monolith_pool.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/worldgen/template_pool/the_monolith_pool.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `fallback` | String | Fallback template pool ID |
| `elements` | Array | Weighted entries of the template pool |

## Crater Density Function

The custom density function for lunar terrain also configures the following parameters.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `noise` | `NoiseHolder.CODEC` | Required | Noise sampler used [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L32) |
| `layers` | `Layer.CODEC` array | Required | Terrain sampling layer count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L33) |
| `cell_size` | Integer | Required | Noise sampling cell size [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L73) |
| `min_radius` | Number | Required | Minimum crater radius [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L74) |
| `max_radius` | Number | Required | Maximum crater radius [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L75) |
| `rim_height` | Number | Required | Crater rim height [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L76) |
| `bowl_depth` | Number | Required | Crater bowl depth [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L77) |
| `rim_width` | Number | Required | Crater rim width [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/worldgen/CraterDensityFunction.java#L78) |
