# Eight-to-One Smithing

Sets matching conditions for eight base items and a smithing material, then specifies the output.

Create `data/example/recipe/eight_to_one_smithing/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:eight_to_one_smithing/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:eight_to_one_smithing",
  "inputs": [
    {
      "items": "minecraft:shears"
    },
    {
      "items": "minecraft:flint_and_steel"
    },
    {
      "items": "minecraft:brush"
    },
    {
      "items": "minecraft:spyglass"
    },
    {
      "items": "anvilcraft:magnet"
    },
    {
      "items": "minecraft:fishing_rod"
    },
    {
      "items": "minecraft:carrot_on_a_stick"
    },
    {
      "items": "minecraft:warped_fungus_on_a_stick"
    }
  ],
  "material": {
    "items": "anvilcraft:multiphase_matter"
  },
  "modifiers": [
    {
      "type": "anvilcraft:merge_data",
      "types": [
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.0"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.1"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.2"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.3"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.4"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.5"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.6"
        },
        {
          "type": "anvilcraft:item_enchantments",
          "component": "minecraft:enchantments",
          "input": "input.7"
        }
      ]
    }
  ],
  "result": {
    "id": "anvilcraft:multitool"
  },
  "template": {
    "items": "anvilcraft:eight_to_one_smithing_template"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/eight_to_one_smithing/multitool.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:eight_to_one_smithing`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `template` | Item ingredient predicate | Required | Smithing template predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L165) |
| `material` | Item ingredient predicate | Required | Smithing material predicate [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L168) |
| `inputs` | Array of item ingredient predicates | Required | Group of inputs participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/BaseMultipleToOneSmithingRecipe.java#L171) |
| `result` | Item stack template object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L38) |
| `modifiers` | `IResultModifier.CODEC` array | Optional, default `[]` | Modifiers applied to the result in order [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L42) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiple/EightToOneSmithingRecipe.java)
