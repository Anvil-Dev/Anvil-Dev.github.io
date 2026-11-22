# Charger Charging

Specifies charging/discharging power and duration for a single input item. Negative power charges; positive power discharges. Power is in kW and time is in ticks.

Create `data/example/recipe/charger_charging/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:charger_charging/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:charger_charging",
  "ingredient": "minecraft:iron_ingot",
  "power": -4,
  "result": {
    "id": "anvilcraft:magnet_ingot"
  },
  "time": 40
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/charger_charging/magnet_ingot.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:charger_charging`.

Use an item ID or an item tag prefixed with `#` for `ingredient`. The `result` is an item stack template with a default count of 1.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Ingredient ID, tag, or valid ingredient expression | Required | Single ingredient to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L44) |
| `result` | Item stack template object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L47) |
| `power` | Integer | Required | Charging/discharging power in kW; negative charges, positive discharges [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L50) |
| `time` | Integer | Required | Time parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L53) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java)
