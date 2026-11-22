# Model Selection and Dynamic Parts

Create `assets/example/anvillib/cube_selection.json` in your resource pack. Set namespace defaults first, then add exceptions for individual blocks; block-level settings take precedence.

```json
{
  "namespaces": {
    "anvilcraft": "model"
  },
  "blocks": {
    "anvilcraft:trading_station": "outline"
  }
}
```

| Field | Type | Default Behavior |
| --- | --- | --- |
| `namespaces` | Object mapping namespace to mode | Keeps existing rules |
| `blocks` | Object mapping block ID to mode | Uses namespace rule |

`model` enables model selection and outlining, `outline` uses existing selection and draws the model outline, and `vanilla` keeps existing selection and outlining. Higher-priority packs override key by key; within the same pack, files merge in lexicographical order of resource ID.

## Excluding Block Entity Renderer Parts

The fixed resource `assets/anvilcraft/model_selection_denylist.json` accepts an optional string array `disable_ber_selection`. Elements must be registered AnvilCraft block IDs. A valid array from a higher-priority pack replaces the previous value; omitting the field yields an empty set. Parse failures preserve the previous valid set.

```json
{
  "disable_ber_selection": [
    "anvilcraft:pulse_generator"
  ]
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/model_selection_denylist.json)

[ModelSelectionDenylist.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionDenylist.java)
