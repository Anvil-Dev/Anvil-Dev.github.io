# Charger Charging

Specifies charging/discharging power and duration for a single input item. Negative power charges; positive power discharges. Power is in kW and time is in ticks.

Create `data/example/recipe/charger_charging/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:charger_charging/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:charger_charging",
  "ingredient": {
    "item": "minecraft:iron_ingot"
  },
  "power": -4,
  "result": {
    "count": 1,
    "id": "anvilcraft:magnet_ingot"
  },
  "time": 40
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/charger_charging/magnet_ingot.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:charger_charging`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Non-empty ingredient | Required | Single ingredient to match [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L103) |
| `result` | Item stack object | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L104) |
| `power` | Integer | Required | Charging/discharging power in kW; negative charges, positive discharges [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L105) |
| `time` | Integer | Required | Time parameter [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L106) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java)
