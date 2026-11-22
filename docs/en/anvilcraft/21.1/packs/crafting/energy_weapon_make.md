# Energy Weapon Crafting

Specifies 1 to 6 ingredient predicates and a result stack for energy weapons. Can be paired with NeoForge load conditions when depending on external mods.

Create `data/example/recipe/energy_weapon_make/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:energy_weapon_make/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:energy_weapon_make",
  "ingredients": [
    {
      "count": 4,
      "items": "anvilcraft:tesla_tower"
    }
  ],
  "result": {
    "count": 1,
    "id": "anvilcraft:tesla_gun"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/energy_weapon_make/tesla_gun.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:energy_weapon_make`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `neoforge:conditions` | Load condition array | Optional, default `[]` | Condition list evaluated by NeoForge on load [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L109) |
| `ingredients` | Array of item ingredient predicates | Required | List of ingredients participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L113) |
| `result` | Item stack object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L116) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java)
