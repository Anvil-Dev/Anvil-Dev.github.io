# Planet Resources

Selects mineral, fluid, biological, or other resource rules via `category`, then fills in the matching configuration object of the same name.

Create `data/example/recipe/planet_resource/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:planet_resource/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:planet_resource",
  "category": "mineral",
  "mineral": {}
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/planet_resource/mineral.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:planet_resource`.

### Root Object

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `category` | `Category.CODEC` | Required | Category selector [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L474) |
| `mineral` | `MineralData.CODEC` | Optional | Mineral rules [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L475) |
| `fluid` | `FluidData.CODEC` | Optional | Cauldron fluid matching conditions [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L476) |
| `giant` | `GiantData.CODEC` | Optional | Gas giant resource rules [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L477) |
| `biological` | `BiologicalData.CODEC` | Optional | Biological resource rules [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L478) |
| `offering` | `OfferingData.CODEC` | Optional | Offering resource rules [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L479) |
| `wasteland` | `WastelandData.CODEC` | Optional | Wasteland rules [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L480) |

### WeightedChoice

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `id` | String | Required | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L78) |
| `weight` | Integer | Required | Relative weight when sampling from candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L79) |

### DirectEntry

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `id` | String | Required | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L98) |
| `weight` | Integer | Required | Relative weight when sampling from candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L99) |

### ChoiceEntry

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `choices` | `WeightedChoice.CODEC` array | Required | Set of selectable entries [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L105) |
| `weight` | Integer | Required | Relative weight when sampling from candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L106) |

### LifeChances

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `cold` | Integer | Optional, default `5` | Cold environment parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L243) |
| `hot` | Integer | Optional, default `5` | Hot environment parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L244) |
| `mild` | Integer | Optional, default `10` | Mild environment parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L245) |

### MineralData

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `source_tag` | String | Optional, default `"c:raw_materials"` | Source tag [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L270) |
| `blacklist_tag` | String | Optional, default `"anvilcraft:non_planetary_minerals"` | Tag of mineral resources to exclude [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L271) |
| `step` | Integer | Optional, default `10` | Resource generation step size [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L272) |

### FluidData

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `planet_type` | String | Optional, default `"rocky_planet"` | Planet type [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L288) |
| `temperature` | String | Optional, default `""` | Temperature parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L289) |
| `liquid_min` | String | Optional, default `"low"` | Minimum liquid coverage level [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L290) |
| `output_fluid` | String | Required | Output fluid ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L291) |

### GiantData

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `entries` | `WeightedEntry.CODEC` array | Required | Candidate entry list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L328) |
| `pressure_type` | String | Required | Applicable pressure type [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L330) |

### BiologicalData

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `life_chances` | `LifeChances.CODEC` | Optional, default `LifeChances.DEFAULT` | Chances of generating life at each temperature [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L346) |
| `land_entity_tag` | String | Optional, default `"anvilcraft:planetary_land_animals"` | Terrestrial entity tag [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L347) |
| `aquatic_entity_tag` | String | Optional, default `"anvilcraft:planetary_aquatic_animals"` | Aquatic entity tag [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L348) |
| `drop_blacklist_tag` | String | Optional, default `"anvilcraft:non_planetary_mob_drops"` | Tag of mob drops to exclude [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L350) |
| `mild_extra_fluids` | `WeightedEntry.CODEC` array | Optional, default `[]` | Extra fluids in mild environments [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L352) |

### OfferingData

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `entries` | `WeightedEntry.CODEC` array | Required | Candidate entry list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L374) |
| `civilization_chance` | Integer | Optional, default `50` | Chance of forming civilization [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L375) |
| `age_min` | Integer | Optional, default `32` | Minimum age [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L376) |
| `age_max` | Integer | Optional, default `43` | Maximum age [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L377) |

### WastelandData

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `entries` | `WeightedEntry.CODEC` array | Required | Candidate entry list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L397) |
| `age_min` | Integer | Optional, default `35` | Minimum age [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L398) |
| `wasteland_chance` | Integer | Optional, default `10` | Chance of forming wasteland [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java#L399) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/PlanetResourceRecipe.java)
