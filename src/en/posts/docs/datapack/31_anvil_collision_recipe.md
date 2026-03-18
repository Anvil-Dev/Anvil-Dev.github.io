# Anvil Collision Craft Recipe

This recipe triggers when an anvil hits a target block above a configured speed threshold.

## Basic Structure

```json
{
  "type": "anvilcraft:anvil_collision",
  "anvil": { "blocks": "minecraft:anvil" },
  "consume": false,
  "hitBlock": { "blocks": "minecraft:stone" },
  "transform_blocks": [
    {
      "input_block": { "blocks": "minecraft:stone" },
      "output_block": { "state": { "Name": "minecraft:cobblestone" }, "chance": 1.0 }
    }
  ],
  "output_items": [
    { "id": "minecraft:gravel", "count": 1 }
  ],
  "speed": 6
}
```

## Field Description

- `type`: Fixed value `anvilcraft:anvil_collision`
- `anvil`: Anvil block predicate
- `consume`: Whether the anvil is consumed
- `hitBlock`: Hit target block predicate
- `transform_blocks`: Block transform list
- `output_items`: Item drop outputs
- `speed`: Minimum collision speed threshold

