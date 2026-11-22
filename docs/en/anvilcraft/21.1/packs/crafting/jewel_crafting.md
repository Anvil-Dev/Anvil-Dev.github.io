# Jewel Crafting

Lists materials and results for jewel crafting table recipes, optionally disabling the default Curse of Vanishing on the output.

Create `data/example/recipe/jewel_crafting/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:jewel_crafting/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:jewel_crafting",
  "ingredients": [
    {
      "item": "anvilcraft:silver_ingot"
    },
    {
      "item": "minecraft:anvil"
    }
  ],
  "result": {
    "count": 1,
    "id": "anvilcraft:anvil_amulet"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/jewel_crafting/anvil_amulet.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:jewel_crafting`.

The ingredient list can contain up to 256 items.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `neoforge:conditions` | Load condition array | Optional, default `[]` | Condition list evaluated by NeoForge on load [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L134) |
| `result` | Item stack object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L139) |
| `has_vanishing_curse` | Boolean | Optional, default `true` | Whether the output carries Curse of Vanishing [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L142) |
| `ingredients` | `Ingredient.CODEC` array | Required | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L136) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java)
