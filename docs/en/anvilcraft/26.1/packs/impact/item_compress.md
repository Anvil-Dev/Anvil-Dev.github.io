# Item Compression

Compresses dropped items into new items. When multiple recipes share materials, check `priority` and ingredient counts.

Create `data/example/recipe/item_compress/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:item_compress/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:item_compress",
  "ingredients": [
    {
      "count": 3,
      "items": "minecraft:bone"
    }
  ],
  "results": [
    {
      "id": "minecraft:bone_block"
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/item_compress/bone_block.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:item_compress`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredients` | Array of item ingredient predicates | Optional, default `[]` | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L29) |
| `results` | Array of item stacks with individual probabilities | Optional, default `[]` | Result list used for each output [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L32) |
| `priority` | Integer | Optional | Priority among multiple candidates [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L34) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java)
