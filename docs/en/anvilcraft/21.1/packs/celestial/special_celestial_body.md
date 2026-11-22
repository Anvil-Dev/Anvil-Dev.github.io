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

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/special_celestial_body/white_hole.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:special_celestial_body`.

Fields from `BehaviorFields` and `AtmosphereFields` are written directly on the root object. `ResourceFields` describes the contents of `resources`; `WeightedEntry` and `DemandEntry` are elements inside those resource lists.

### Root Object

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `name` | String | Required | Name [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L334) |
| `time` | Integer | Required | Time parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L335) |
| `space` | Integer | Required | Space property [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L336) |
| `mass` | Integer | Required | Mass value [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L337) |
| `energy` | Integer | Required | Energy property [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L338) |
| `model` | String | Required | Model identifier [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L339) |
| `liquid_coverage` | `LIQUID_COVERAGE_CODEC` | Optional | Liquid coverage level [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L341) |
| `magnetic_field` | Integer | Required | Magnetic field strength [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L342) |
| `rotation_speed` | Integer | Required | Rotation speed [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L343) |
| `axial_tilt` | Number | Required | Axial tilt [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L344) |
| `seed_items` | Resource ID array | Required | Associated seed item list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L345) |
| `resources` | `ResourceFields.CODEC` | Required | Resource config produced by this body [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L351) |
| `landing` | `CelestialTravelData.CODEC` | Optional | Landing rules [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L355) |
| `travel` | `CelestialTravelData.CODEC` | Optional | Travel rules [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L356) |

### WeightedEntry

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `id` | String | Required | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L235) |
| `weight` | Integer | Required | Relative weight when sampling from candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L236) |

### DemandEntry

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `id` | String | Required | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L256) |
| `count` | Integer | Required | Count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L257) |
| `has_atmosphere` | Boolean | Optional | Whether it has an atmosphere [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L287) |

### ResourceFields

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `minerals` | `WeightedEntry.CODEC` array | Optional, default `[]` | Mineral entries [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L304) |
| `fluids` | `WeightedEntry.CODEC` array | Optional, default `[]` | Fluid entries [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L305) |
| `biological_items` | `WeightedEntry.CODEC` array | Optional, default `[]` | Biological item resources [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L306) |
| `biological_fluids` | `WeightedEntry.CODEC` array | Optional, default `[]` | Biological fluid resources [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L307) |
| `offerings` | `WeightedEntry.CODEC` array | Optional, default `[]` | Offering list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L308) |
| `temple_blessings` | `DemandEntry.CODEC` array | Optional, default `[]` | Temple blessing entries [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L309) |
| `temple_punishments` | `DemandEntry.CODEC` array | Optional, default `[]` | Temple punishment entries [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L310) |

### BehaviorFields

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `needs_custom_model` | Boolean | Optional, default `false` | Whether a custom model is used [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L318) |
| `can_be_shattered` | Boolean | Optional | Whether it can be shattered [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L319) |
| `exclude_from_monolith` | Boolean | Optional, default `false` | Whether excluded from monolith selection [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L320) |

### AtmosphereFields

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `atmosphere` | `ColorRGBA.CODEC` | Optional | Atmosphere color [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java#L326) |

### CoordinateRule

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `type` | `Type.CODEC` | Optional, default `Type.FIXED` | Type ID dispatched to the implementation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L35) |
| `scale` | Number | Optional, default `1.0` | Coordinate scale factor [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L36) |
| `x` | Integer | Optional, default `0` | X coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L37) |
| `y` | Integer | Optional, default `64` | Y coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L38) |
| `z` | Integer | Optional, default `0` | Z coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L39) |
| `radius` | Integer | Optional, default `8` | Radius parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L40) |

### ReturnRule

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `type` | `Type.CODEC` | Optional, default `Type.ENTRY_PORTAL` | Type ID dispatched to the implementation [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L110) |
| `x` | Integer | Optional, default `0` | X coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L111) |
| `y` | Integer | Optional, default `64` | Y coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L112) |
| `z` | Integer | Optional, default `0` | Z coordinate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L113) |
| `radius` | Integer | Optional, default `8` | Radius parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L114) |

### CelestialTravelData

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `dimension` | Resource ID | Required | Dimension resource ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L170) |
| `coordinate_rule` | `CoordinateRule.CODEC` | Optional, default `CoordinateRule.DEFAULT` | Destination coordinate calculation rule [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L171) |
| `return_rule` | `ReturnRule.CODEC` | Optional, default `ReturnRule.DEFAULT` | Return coordinate calculation rule [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialTravelData.java#L173) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/SpecialCelestialBodyRecipe.java)
