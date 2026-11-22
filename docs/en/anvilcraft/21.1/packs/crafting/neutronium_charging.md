# Neutronium Ingot Charging

Arranges neutronium ingots and supercapacitors using a shaped crafting key and pattern, while the dedicated recipe class handles extra crafting logic.

Create `data/example/recipe/neutronium_charging/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:neutronium_charging/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:neutronium_charging",
  "category": "misc",
  "key": {
    "N": {
      "tag": "anvilcraft:uncharged_neutronium_ingots"
    },
    "S": {
      "item": "anvilcraft:supercapacitor"
    }
  },
  "pattern": [
    "SSS",
    "SNS",
    "SSS"
  ],
  "result": {
    "count": 1,
    "id": "anvilcraft:charged_neutronium_ingot"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/charged_neutronium_ingot.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:neutronium_charging`.

Uses the vanilla shaped crafting serializer underneath. `pattern` (required, string array) gives the shape row by row, with spaces for empty slots. `key` (required, object) maps each non-space character to an ingredient. `result` (required, item stack) specifies the output. `group` (string, default empty), `category` (string, default `misc`), and `show_notification` (boolean, default `true`) control recipe book presentation.

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/NeutroniumChargingRecipe.java)
