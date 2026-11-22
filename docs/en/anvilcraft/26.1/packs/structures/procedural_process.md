# Sequential Assembly

Organizes multiple processing steps in a step list. The initial block, display models, loop settings, and final block are configured independently.

Create `data/example/recipe/procedural_process/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:procedural_process/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:procedural_process",
  "displayed_models": [
    "anvilcraft:block/wip_display/monolith_wip"
  ],
  "icon": {
    "id": "anvilcraft:monolith"
  },
  "initial_block": {
    "blocks": "minecraft:blackstone"
  },
  "loop": 1,
  "result_block": {
    "block": "anvilcraft:monolith"
  },
  "steps": [
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          {
            "blocks": "anvilcraft:spacetime_supercomputer"
          },
          {
            "blocks": "minecraft:blackstone"
          }
        ],
        "result": {
          "block": "anvilcraft:wip_block"
        }
      },
      "index": 0
    },
    {
      "content": {
        "type": "anvilcraft:block_compress",
        "inputs": [
          {
            "blocks": "anvilcraft:mass_energy_inverter"
          },
          {
            "blocks": "anvilcraft:wip_block"
          }
        ],
        "result": {
          "block": "anvilcraft:monolith"
        }
      },
      "index": 1
    }
  ]
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/procedural_process/monolith_compress.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:procedural_process`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `initial_block` | Block state predicate | Required | Block condition before the first step begins [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L21) |
| `steps` | `ProceduralProcessStep.CODEC` array | Required | Ordered list of step objects [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L22) |
| `result_block` | Block state with a probability | Required | Block state after processing [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L23) |
| `icon` | Item stack template object | Optional | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L24) |
| `loop` | Integer | Required | Loop count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L26) |
| `displayed_model` | Resource ID | Optional | Model ID used for display [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L27) |
| `displayed_models` | Resource ID array | Optional, default `[]` | List of model IDs for multiple phases [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L30) |
| `multiple_loop_first_step` | `ProceduralProcessStep.CODEC` | Optional | First step used for repeated loops [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L33) |

### ProceduralProcessStep

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `index` | Integer | Required | Step or list index [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessStep.java#L33) |
| `content` | `Recipe.CODEC` | Required | Sub-recipe actually executed [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessStep.java#L34) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java)
