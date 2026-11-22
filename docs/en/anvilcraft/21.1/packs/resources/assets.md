# Block Models, Sounds, and Fonts

Resource packs override built-in assets by full path. After reloading with F3+T, verify in a minimal test case whether the added assets are referenced by existing blocks, particles, sound events, or fonts.

## `blockstates`

File path: `assets/anvilcraft/blockstates/oil.json`.

```json
{
  "variants": {
    "": {
      "model": "anvilcraft:block/oil"
    }
  }
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/assets/anvilcraft/blockstates/oil.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `variants` | Object | Map from block state to model variant |

## `models`

File path: `assets/anvilcraft/models/item/lens.json`.

```json
{
  "parent": "anvilcraft:block/lens"
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/assets/anvilcraft/models/item/lens.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `parent` | String | Parent model to inherit from |

## `particles`

File path: `assets/anvilcraft/particles/ionocraft_backpack_exhaust.json`.

```json
{
  "textures": [
    "anvilcraft:anvilon_air"
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/assets/anvilcraft/particles/ionocraft_backpack_exhaust.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `textures` | Array | Texture variables or texture references |

## `font`

File path: `assets/anvilcraft/font/small.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/assets/anvilcraft/font/small.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `providers` | Array | Font providers ordered by priority |

## `sounds.json`

File path: `assets/anvilcraft/sounds.json`.

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

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/assets/anvilcraft/sounds.json)

| Root Field Used in This File | Value Type in Example | Meaning |
| --- | --- | --- |
| `anvil_hammer_rotate_block` | Object | Read according to the resource ID definition above |
| `block.anvilcraft.auto_enchanting_table.use` | Object | Read according to the resource ID definition above |
| `burning_heater` | Object | Read according to the resource ID definition above |
| `giant_anvil_land` | Object | Read according to the resource ID definition above |
| `giant_anvil_resin_shock` | Object | Read according to the resource ID definition above |
| `giant_anvil_shock` | Object | Read according to the resource ID definition above |
| `music.mun.above_the_moon_dust` | Object | Read according to the resource ID definition above |
| `music.mun.far_side_glow` | Object | Read according to the resource ID definition above |
| `music.mun.munlight` | Object | Read according to the resource ID definition above |
| `neoforge_land` | Object | Read according to the resource ID definition above |
| `plasma_jet` | Object | Read according to the resource ID definition above |
| `plasma_jet_lava` | Object | Read according to the resource ID definition above |
| `quenched_out` | Object | Read according to the resource ID definition above |
| `smart_block_placer_extend` | Object | Read according to the resource ID definition above |
| `smart_block_placer_retract` | Object | Read according to the resource ID definition above |
| `tesla_tower_strike` | Object | Read according to the resource ID definition above |
