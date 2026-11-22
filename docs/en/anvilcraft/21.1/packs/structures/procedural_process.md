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
    "count": 1,
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

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/recipe/procedural_process/monolith_compress.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:procedural_process`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `initial_block` | Block state predicate | Required | Block condition before the first step begins [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L25) |
| `steps` | `ProceduralProcessStep.CODEC` array | Required | Ordered list of step objects [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L26) |
| `result_block` | Block state with a probability | Required | Block state after processing [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L27) |
| `icon` | Item stack object | Required | Item stack for the UI icon [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L28) |
| `loop` | Integer | Required | Loop count [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L29) |
| `displayed_model` | Resource ID | Optional | Model ID used for display [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L30) |
| `displayed_models` | Resource ID array | Optional, default `[]` | List of model IDs for multiple phases [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L33) |
| `multiple_loop_first_step` | `ProceduralProcessStep.CODEC` | Optional | First step used for repeated loops [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java#L36) |

### ProceduralProcessStep

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `index` | Integer | Required | Step or list index [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessStep.java#L61) |
| `content` | `AbstractProcessRecipe.CODEC` | Required | Sub-recipe actually executed [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessStep.java#L62) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessSerializer.java)
