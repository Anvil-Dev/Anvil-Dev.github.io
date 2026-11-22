# Special Celestial Bodies

Binds seed items to a celestial body preset, specifying resources, physical properties, and optional landing rules.

Create `data/example/recipe/special_celestial_body/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:special_celestial_body/example`.

## Recipe Example

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

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/special_celestial_body/white_hole.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:special_celestial_body`.

Fields from `BehaviorFields` and `AtmosphereFields` are written directly on the root object. `ResourceFields` describes the contents of `resources`; `WeightedEntry` and `DemandEntry` are elements inside those resource lists.

### Root Object

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `name` | String | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L377) |
| `time` | Integer | Required | Time parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L378) |
| `space` | Integer | Required | Space property [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L379) |
| `mass` | Integer | Required | Mass value [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L380) |
| `energy` | Integer | Required | Energy property [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L381) |
| `model` | String | Required | Model identifier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L382) |
| `liquid_coverage` | `LIQUID_COVERAGE_CODEC` | Optional | Liquid coverage level [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L384) |
| `magnetic_field` | Integer | Required | Magnetic field strength [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L385) |
| `rotation_speed` | Integer | Required | Rotation speed [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L386) |
| `axial_tilt` | Number | Required | Axial tilt [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L387) |
| `seed_items` | Resource ID array | Required | Associated seed item list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L388) |
| `resources` | `ResourceFields.CODEC` | Required | Resource config produced by this body [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L394) |
| `landing` | `CelestialTravelData.CODEC` | Optional | Landing rules [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L398) |
| `travel` | `CelestialTravelData.CODEC` | Optional | Travel rules [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L399) |

### WeightedEntry

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `id` | String | Required | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L269) |
| `weight` | Integer | Required | Relative weight when sampling from candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L270) |

### DemandEntry

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `id` | String | Required | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L290) |
| `count` | Integer | Required | Count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L291) |
| `has_atmosphere` | Boolean | Optional | Whether it has an atmosphere [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L330) |

### ResourceFields

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `minerals` | `WeightedEntry.CODEC` array | Optional, default `[]` | Mineral entries [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L347) |
| `fluids` | `WeightedEntry.CODEC` array | Optional, default `[]` | Fluid entries [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L348) |
| `biological_items` | `WeightedEntry.CODEC` array | Optional, default `[]` | Biological item resources [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L349) |
| `biological_fluids` | `WeightedEntry.CODEC` array | Optional, default `[]` | Biological fluid resources [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L350) |
| `offerings` | `WeightedEntry.CODEC` array | Optional, default `[]` | Offering list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L351) |
| `temple_blessings` | `DemandEntry.CODEC` array | Optional, default `[]` | Temple blessing entries [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L352) |
| `temple_punishments` | `DemandEntry.CODEC` array | Optional, default `[]` | Temple punishment entries [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L353) |

### BehaviorFields

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `needs_custom_model` | Boolean | Optional, default `false` | Whether a custom model is used [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L361) |
| `can_be_shattered` | Boolean | Optional | Whether it can be shattered [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L362) |
| `exclude_from_monolith` | Boolean | Optional, default `false` | Whether excluded from monolith selection [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L363) |

### AtmosphereFields

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `atmosphere` | `ATMOSPHERE_COLOR_CODEC` | Optional | Atmosphere color [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java#L369) |

### CoordinateRule

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `type` | `Type.CODEC` | Optional, default `Type.FIXED` | Type ID dispatched to the implementation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L37) |
| `scale` | Number | Optional, default `1.0` | Coordinate scale factor [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L38) |
| `x` | Integer | Optional, default `0` | X coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L39) |
| `y` | Integer | Optional, default `64` | Y coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L40) |
| `z` | Integer | Optional, default `0` | Z coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L41) |
| `radius` | Integer | Optional, default `8` | Radius parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L42) |

### ReturnRule

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `type` | `Type.CODEC` | Optional, default `Type.ENTRY_PORTAL` | Type ID dispatched to the implementation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L112) |
| `x` | Integer | Optional, default `0` | X coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L113) |
| `y` | Integer | Optional, default `64` | Y coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L114) |
| `z` | Integer | Optional, default `0` | Z coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L115) |
| `radius` | Integer | Optional, default `8` | Radius parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L116) |

### CelestialTravelData

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `dimension` | Resource ID | Required | Dimension resource ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L172) |
| `coordinate_rule` | `CoordinateRule.CODEC` | Optional, default `CoordinateRule.DEFAULT` | Destination coordinate calculation rule [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L173) |
| `return_rule` | `ReturnRule.CODEC` | Optional, default `ReturnRule.DEFAULT` | Return coordinate calculation rule [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L175) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/SpecialCelestialBodyRecipe.java)
