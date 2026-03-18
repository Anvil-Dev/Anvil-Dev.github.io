# Mineral Fountain Recipe

Mineral fountain recipes are used to define block transformation rules for mineral fountains, including basic transformations and probability-based transformations.

## Basic Mineral Fountain Recipe

### Basic Structure

```json
{
  "type": "anvilcraft:mineral_fountain",
  "need_block": "minecraft:stone",
  "from_block": "minecraft:cobblestone",
  "to_block": "minecraft:andesite"
}
```

## Field Description

### type

Fixed value `anvilcraft:mineral_fountain`, identifies this as a basic mineral fountain recipe.

### need_block

The block required to trigger the transformation.

### from_block

The block to be transformed.

### to_block

The resulting block after transformation.

## Usage Example

### Basic Mineral Fountain

```json
{
  "type": "anvilcraft:mineral_fountain",
  "need_block": "minecraft:granite",
  "from_block": "minecraft:cobblestone",
  "to_block": "minecraft:diorite"
}
```

## Probability Mineral Fountain Recipe

### Basic Structure

```json
{
  "type": "anvilcraft:mineral_fountain_chance",
  "dimension": "minecraft:overworld",
  "from_block": "minecraft:stone",
  "to_block": "minecraft:diamond_ore",
  "chance": 0.05
}
```

## Field Description

### type

Fixed value `anvilcraft:mineral_fountain_chance`, identifies this as a probability mineral fountain recipe.

### dimension

The dimension where the recipe is effective (using resource location format, e.g., "minecraft:overworld").

### from_block

The block to be transformed.

### to_block

The resulting block after transformation.

### chance

Transformation probability, ranging from 0.0 to 1.0.

## Usage Examples

### Probability-based Mineral Fountain

```json
{
  "type": "anvilcraft:mineral_fountain_chance",
  "dimension": "minecraft:the_nether",
  "from_block": "minecraft:netherrack",
  "to_block": "minecraft:ancient_debris",
  "chance": 0.1
}
```

### Multiple Mineral Fountain Recipes

```json
[
  {
    "type": "anvilcraft:mineral_fountain",
    "need_block": "minecraft:diamond_block",
    "from_block": "minecraft:stone",
    "to_block": "minecraft:diamond_ore"
  },
  {
    "type": "anvilcraft:mineral_fountain_chance",
    "dimension": "minecraft:overworld",
    "from_block": "minecraft:deepslate",
    "to_block": "minecraft:deepslate_diamond_ore",
    "chance": 0.02
  }
]
```

## Dimension Reference

Available dimension resource locations:

- `minecraft:overworld` - Overworld
- `minecraft:the_nether` - The Nether
- `minecraft:the_end` - The End
- Or custom dimensions added by other mods

## Notes

1. Basic mineral fountain recipes require a specified need_block nearby to trigger
2. Probability mineral fountain recipes only work in the specified dimension
3. Probability value must be between 0.0 and 1.0, where 0.0 means 0% probability and 1.0 means 100% probability
4. All block IDs must use standard Minecraft resource location format
