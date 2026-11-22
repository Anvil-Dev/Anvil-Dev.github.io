# Global Loot Modifiers

First register the entries to apply in `data/neoforge/loot_modifiers/global_loot_modifiers.json`. `entries` on the root object is an ordered ID array, and `replace` is a boolean; set `false` if you want to preserve registrations from lower-priority data packs.

```json
{
  "entries": [
    "anvilcraft:smelting_loot_modifier",
    "anvilcraft:disintegration_loot_modifier"
  ],
  "replace": false
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/neoforge/loot_modifiers/global_loot_modifiers.json)

Modifier files live at `data/<namespace>/loot_modifiers/<name>.json`. `type` is the implementation ID, and `conditions` is an array of loot conditions; an empty array allows attempting in any context meeting the implementation's requirements. Built-in smelting and disintegration logic is implemented in code.

```json
{
  "type": "anvilcraft:smelting_loot_modifier",
  "conditions": []
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/loot_modifiers/smelting_loot_modifier.json)

[ModLootModifiers.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootModifiers.java) · [ModLootItemFunctions.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/loot/ModLootItemFunctions.java)
