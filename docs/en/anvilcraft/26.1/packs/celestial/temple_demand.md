# Temple Demands

Lists items and counts by category for selection by the temple demand system.

Create `data/example/recipe/temple_demand/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:temple_demand/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:temple_demand",
  "category": "punishment",
  "entries": [
    {
      "count": 1,
      "id": "anvilcraft:topaz"
    },
    {
      "count": 1,
      "id": "minecraft:lava_bucket"
    },
    {
      "count": 1024,
      "id": "minecraft:tnt"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/temple_demand/punishment.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:temple_demand`.

### Root Object

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `category` | `Category.CODEC` | Required | Category selector [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L77) |
| `entries` | `Entry.CODEC` array | Required | Candidate entry list [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L78) |

### Entry

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `id` | String | Required | Registry ID [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L60) |
| `count` | Integer | Required | Count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java#L61) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/celestial/TempleDemandRecipe.java)
