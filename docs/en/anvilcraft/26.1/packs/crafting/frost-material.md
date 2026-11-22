# Frost Metal Material Predicates

Select a predicate inside `material` of a smithing recipe. `and` and `or` can both be composed recursively. Built-in permutation recipes show the full template, material, and result syntax.

## Usage Example

```json
{
  "type": "anvilcraft:permutation",
  "input": {
    "items": "minecraft:netherite_axe"
  },
  "options": [
    {
      "material": {
        "type": "anvilcraft:empty"
      },
      "result": {
        "id": "minecraft:diamond_axe"
      }
    }
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/permutation/netherite_axe.json)

## Types & Fields

### `anvilcraft:and`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `predicates` | `IFrostMaterialPredicate.CODEC` array | Required | Predicate list for matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java#L19) |

[AndFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/AndFrostMaterialPredicate.java)

### `anvilcraft:or`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `predicates` | `IFrostMaterialPredicate.CODEC` array | Required | Predicate list for matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java#L19) |

[OrFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/OrFrostMaterialPredicate.java)

### `anvilcraft:repair_material`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `cost` | Integer | Required | Repair material cost [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L52) |
| `allow_universal` | Boolean | Optional, default `true` | Whether universal materials are accepted [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L55) |
| `universal_cost` | `IExpression.CODEC` | Optional, default `DEFAULT_UNIVERSAL_COST` | Universal material cost expression [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java#L58) |

[RepairMaterialFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/RepairMaterialFrostMaterialPredicate.java)

### `anvilcraft:custom`

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `predicate` | Item ingredient predicate | Required | Specific match condition [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java#L21) |

[CustomFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/CustomFrostMaterialPredicate.java)

### `anvilcraft:empty`

The type itself determines all behavior; only the dispatch ID is needed.

[EmptyFrostMaterialPredicate.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/frost/EmptyFrostMaterialPredicate.java)

[ModFrostMaterialPredicateTypes.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModFrostMaterialPredicateTypes.java)
