# Block Compression

Describes compressed materials using a list of block state predicates and replaces the target position with the result block.

Create `data/example/recipe/block_compress/example.json` in your data pack. The game selects the serializer by `type`. The recipe ID for this file is `example:block_compress/example`.

## Recipe Example

```json
{
  "type": "anvilcraft:block_compress",
  "inputs": [
    {
      "blocks": "minecraft:ice"
    },
    {
      "blocks": "minecraft:ice"
    }
  ],
  "result": {
    "block": "minecraft:packed_ice"
  }
}
```

[Built-in recipe source](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/generated/resources/data/anvilcraft/recipe/block_compress/packed_ice.json)

## Fields & Values

Set the required `type` field on the root object to `anvilcraft:block_compress`.

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `inputs` | Block state predicate array | Required | Group of inputs participating in matching [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L32) |
| `result` | Block state with a probability | Required | Result used after recipe completion [Declaration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L35) |

[Recipe implementation & matching rules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java)
