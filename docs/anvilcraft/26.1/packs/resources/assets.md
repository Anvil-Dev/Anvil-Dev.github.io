# 方块模型、音效与字体

资源包按完整路径覆盖内置资源。按 F3+T 重新读取后，用最小场景检查新增资源是否被已有方块、粒子、声音事件或字体引用。

## `blockstates`

路径 `assets/anvilcraft/blockstates/ruins_block.json`。

```json
{
  "variants": {
    "": {
      "model": "anvilcraft:block/ruins_block"
    }
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/blockstates/ruins_block.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `variants` | 对象 | 状态到模型变体的映射 |

## `models`

路径 `assets/anvilcraft/models/item/pipe.json`。

```json
{
  "parent": "anvilcraft:block/pipe"
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/models/item/pipe.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `parent` | 字符串 | 要继承的模型 |

## `particles`

路径 `assets/anvilcraft/particles/ionocraft_backpack_exhaust.json`。

```json
{
  "textures": [
    "anvilcraft:anvilon_air"
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/assets/anvilcraft/particles/ionocraft_backpack_exhaust.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `textures` | 数组 | 纹理变量或纹理引用 |

## `font`

路径 `assets/anvilcraft/font/small.json`。

```json
{
  "providers": [
    {
      "type": "bitmap",
      "file": "anvilcraft:font/small.png",
      "height": 6,
      "ascent": 5,
      "chars": [
        "1234567890!?.",
        "ABCDEFGHIJKLM",
        "NOPQRSTUVWXYZ",
        "abcdefghijklm",
        "nopqrstuvwxyz",
        "()[]{}-+=<>:;",
        "'\",_^$%/\\&`| "
      ]
    },
    {
      "type": "bitmap",
      "file": "anvilcraft:font/infinity.png",
      "height": 6,
      "ascent": 5,
      "chars": [
        "∞"
      ]
    }
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/font/small.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `providers` | 数组 | 按优先级排列的字体提供器 |

## `sounds.json`

路径 `assets/anvilcraft/sounds.json`。

```json
{
  "anvil_hammer_rotate_block": {
    "sounds": [
      {
        "type": "event",
        "name": "block.copper_bulb.turn_on"
      }
    ],
    "subtitle": "subtitles.anvilcraft.anvil_hammer_rotate_block"
  },
  "block.anvilcraft.auto_enchanting_table.use": {
    "sounds": [
      {
        "type": "event",
        "name": "block.enchantment_table.use"
      }
    ],
    "subtitle": "subtitles.anvilcraft.auto_enchanting_table.use"
  },
  "burning_heater": {
    "sounds": [
      "block/furnace/fire_crackle1",
      "block/furnace/fire_crackle2",
      "block/furnace/fire_crackle3",
      "block/furnace/fire_crackle4",
      "block/furnace/fire_crackle5"
    ],
    "subtitle": "subtitles.anvilcraft.burning_heater"
  },
  "giant_anvil_land": {
    "sounds": [
      {
        "type": "event",
        "name": "block.anvil.land"
      }
    ],
    "subtitle": "subtitles.anvilcraft.giant_anvil_land"
  },
  "giant_anvil_resin_shock": {
    "sounds": [
      {
        "type": "event",
        "name": "block.slime_block.break"
      }
    ],
    "subtitle": "subtitles.anvilcraft.giant_anvil_resin_shock"
  },
  "giant_anvil_shock": {
    "sounds": [
      {
        "type": "event",
        "name": "entity.generic.explode"
      }
    ],
    "subtitle": "subtitles.anvilcraft.giant_anvil_shock"
  },
  "music.mun.above_the_moon_dust": {
    "sounds": [
      {
        "name": "anvilcraft:music/mun/above_the_moon_dust_loop",
        "stream": true
      }
    ]
  },
  "music.mun.far_side_glow": {
    "sounds": [
      {
        "name": "anvilcraft:music/mun/far_side_glow_loop",
        "stream": true
      }
    ]
  },
  "music.mun.munlight": {
    "sounds": [
      {
        "name": "anvilcraft:music/mun/munlight",
        "stream": true
      }
    ]
  },
  "neoforge_land": {
    "sounds": [
      {
        "type": "event",
        "name": "entity.fox.ambient"
      }
    ],
    "subtitle": "subtitles.entity.fox.ambient"
  },
  "plasma_jet": {
    "sounds": [
      {
        "type": "event",
        "name": "entity.blaze.burn"
      }
    ],
    "subtitle": "subtitles.anvilcraft.plasma_jet"
  },
  "plasma_jet_lava": {
    "sounds": [
      {
        "type": "event",
        "name": "block.lava.extinguish"
      }
    ],
    "subtitle": "subtitles.anvilcraft.plasma_jet_lava"
  },
  "quenched_out": {
    "sounds": [
      {
        "attenuation_distance": 64,
        "name": "anvilcraft:quenched_out"
      }
    ],
    "subtitle": "subtitles.anvilcraft.quenched_out"
  },
  "smart_block_placer_extend": {
    "sounds": [
      {
        "type": "event",
        "name": "block.piston.extend"
      }
    ],
    "subtitle": "subtitles.anvilcraft.smart_block_placer_extend"
  },
  "smart_block_placer_retract": {
    "sounds": [
      {
        "type": "event",
        "name": "block.piston.contract"
      }
    ],
    "subtitle": "subtitles.anvilcraft.smart_block_placer_retract"
  },
  "tesla_tower_strike": {
    "sounds": [
      "anvilcraft:tesla_tower_strike"
    ],
    "subtitle": "subtitles.anvilcraft.tesla_tower_strike"
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/assets/anvilcraft/sounds.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `anvil_hammer_rotate_block` | 对象 | 按上方资源 ID 的定义读取 |
| `block.anvilcraft.auto_enchanting_table.use` | 对象 | 按上方资源 ID 的定义读取 |
| `burning_heater` | 对象 | 按上方资源 ID 的定义读取 |
| `giant_anvil_land` | 对象 | 按上方资源 ID 的定义读取 |
| `giant_anvil_resin_shock` | 对象 | 按上方资源 ID 的定义读取 |
| `giant_anvil_shock` | 对象 | 按上方资源 ID 的定义读取 |
| `music.mun.above_the_moon_dust` | 对象 | 按上方资源 ID 的定义读取 |
| `music.mun.far_side_glow` | 对象 | 按上方资源 ID 的定义读取 |
| `music.mun.munlight` | 对象 | 按上方资源 ID 的定义读取 |
| `neoforge_land` | 对象 | 按上方资源 ID 的定义读取 |
| `plasma_jet` | 对象 | 按上方资源 ID 的定义读取 |
| `plasma_jet_lava` | 对象 | 按上方资源 ID 的定义读取 |
| `quenched_out` | 对象 | 按上方资源 ID 的定义读取 |
| `smart_block_placer_extend` | 对象 | 按上方资源 ID 的定义读取 |
| `smart_block_placer_retract` | 对象 | 按上方资源 ID 的定义读取 |
| `tesla_tower_strike` | 对象 | 按上方资源 ID 的定义读取 |

## `items`

路径 `assets/anvilcraft/items/pill.json`。

```json
{
  "model": {
    "type": "minecraft:model",
    "model": "anvilcraft:item/pill"
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/assets/anvilcraft/items/pill.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `model` | 对象 | 模型标识 |

## `equipment`

路径 `assets/anvilcraft/equipment/ionocraft_backpack.json`。

```json
{
  "layers": {
    "humanoid": [
      {
        "texture": "anvilcraft:ionocraft_backpack",
        "use_player_texture": false
      }
    ]
  }
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/equipment/ionocraft_backpack.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `layers` | 对象 | 叠加层 |

## `atlases`

路径 `assets/anvilcraft/atlases/laser.json`。

```json
{
  "sources": [
    {
      "type": "minecraft:single",
      "resource": "anvilcraft:laser/beam",
      "sprite": "anvilcraft:laser/beam"
    },
    {
      "type": "minecraft:single",
      "resource": "minecraft:block/white_concrete",
      "sprite": "anvilcraft:laser/solid"
    }
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/atlases/laser.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `sources` | 数组 | 按上方资源 ID 的定义读取 |

## `post_effect`

路径 `assets/anvilcraft/post_effect/gravitational_lens.json`。

```json
{
  "targets": {
    "lens_out": {}
  },
  "passes": [
    {
      "vertex_shader": "minecraft:core/screenquad",
      "fragment_shader": "anvilcraft:post/gravitational_lens",
      "inputs": [
        {
          "sampler_name": "Diffuse",
          "target": "minecraft:main"
        }
      ],
      "output": "lens_out"
    },
    {
      "vertex_shader": "minecraft:core/screenquad",
      "fragment_shader": "minecraft:post/blit",
      "inputs": [
        {
          "sampler_name": "In",
          "target": "lens_out"
        }
      ],
      "uniforms": {
        "BlitConfig": [
          {
            "name": "ColorModulate",
            "type": "vec4",
            "value": [
              1.0,
              1.0,
              1.0,
              1.0
            ]
          }
        ]
      },
      "output": "minecraft:main"
    }
  ]
}
```

[完整资源文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/post_effect/gravitational_lens.json)

| 此文件使用的根字段 | 样例中的值类型 | 含义 |
| --- | --- | --- |
| `targets` | 对象 | 按上方资源 ID 的定义读取 |
| `passes` | 数组 | 按上方资源 ID 的定义读取 |
