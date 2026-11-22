# Dimensions, Damage, and Fuel

A dimension definition references a dimension type and a generator. Data pack dimensions take effect during world creation. Test changes in a new world.

## `dimension`

File path: `data/anvilcraft/dimension/overworld_like.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/dimension/overworld_like.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `type` | String | Registered ID selecting the sub-format |
| `generator` | Object | Chunk generator for this dimension |

## `dimension_type`

File path: `data/anvilcraft/dimension_type/void_planet.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/data/anvilcraft/dimension_type/void_planet.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `ambient_light` | Number | Read according to the resource ID definition above |
| `attributes` | Object | Read according to the resource ID definition above |
| `coordinate_scale` | Number | Read according to the resource ID definition above |
| `default_clock` | String | Read according to the resource ID definition above |
| `has_ceiling` | Boolean | Read according to the resource ID definition above |
| `has_ender_dragon_fight` | Boolean | Read according to the resource ID definition above |
| `has_fixed_time` | Boolean | Read according to the resource ID definition above |
| `has_skylight` | Boolean | Read according to the resource ID definition above |
| `height` | Integer | Fountain height condition |
| `infiniburn` | String | Read according to the resource ID definition above |
| `logical_height` | Integer | Read according to the resource ID definition above |
| `min_y` | Integer | Read according to the resource ID definition above |
| `monster_spawn_block_light_limit` | Integer | Read according to the resource ID definition above |
| `monster_spawn_light_level` | Integer | Read according to the resource ID definition above |
| `skybox` | String | Read according to the resource ID definition above |
| `timelines` | String | Read according to the resource ID definition above |

## `damage_type`

File path: `data/anvilcraft/damage_type/planetary_collapse.json`.

```json
{
  "exhaustion": 0.0,
  "message_id": "anvilcraft.planetary_collapse",
  "scaling": "never"
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/damage_type/planetary_collapse.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `exhaustion` | Number | Hunger exhaustion when dealing damage |
| `message_id` | String | Death message translation key suffix |
| `scaling` | String | Difficulty scaling mode |

## Furnace Fuel Data Map

Add item IDs or tags to the `values` object in `data/neoforge/data_maps/item/furnace_fuels.json`.

```json
{
  "values": {
    "anvilcraft:wood_fiber": {
      "burn_time": 300
    }
  }
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/neoforge/data_maps/item/furnace_fuels.json)
