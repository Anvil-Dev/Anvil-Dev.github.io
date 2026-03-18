# Jewel Crafting Recipe

Jewel crafting recipes are used to craft various jewelry and decorative items.

## Basic Structure

```json
{
  "type": "anvilcraft:jewel_crafting",
  "ingredients": [
    {
      "tag": "forge:gems/diamond"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:ingots/gold"
    }
  ],
  "result": {
    "id": "anvilcraft:amber_block",
    "count": 1
  }
}
```

## Field Description

### type

Fixed value `anvilcraft:jewel_crafting`, identifies this as a jewel crafting recipe.

### ingredients

List of input materials, each element is a standard Minecraft recipe ingredient:

- Can be an item ID, like `"minecraft:diamond"`
- Can be a tag, like `"#forge:gems/diamond"`
- Can be a complex ingredient object

### result

Output item for the recipe:

- `id`: Item ID
- `count`: Item count (optional, defaults to 1)

## Recipe Ingredient Formats

### Item Ingredient

```json
{
  "item": "minecraft:diamond"
}
```

### Tag Ingredient

```json
{
  "tag": "forge:gems/diamond"
}
```

### Ingredient with Count

```json
{
  "item": "minecraft:gold_ingot",
  "count": 2
}
```

### Complex Ingredient

```json
{
  "type": "minecraft:item",
  "item": "minecraft:potion",
  "nbt": "{Potion:\"minecraft:water\"}"
}
```

## Usage Examples

### Simple Jewel Crafting

```json
{
  "type": "anvilcraft:jewel_crafting",
  "ingredients": [
    {
      "item": "minecraft:diamond"
    },
    {
      "tag": "forge:ingots/gold"
    },
    {
      "tag": "forge:ingots/gold"
    }
  ],
  "result": {
    "id": "anvilcraft:amber_block",
    "count": 1
  }
}
```

### Complex Jewel Crafting

```json
{
  "type": "anvilcraft:jewel_crafting",
  "ingredients": [
    {
      "tag": "forge:gems/emerald",
      "count": 3
    },
    {
      "tag": "forge:ingots/gold",
      "count": 5
    },
    {
      "item": "minecraft:nether_star"
    }
  ],
  "result": {
    "id": "anvilcraft:royal_crown",
    "count": 1
  }
}
```

### Recipe with NBT Data

```json
{
  "type": "anvilcraft:jewel_crafting",
  "ingredients": [
    {
      "item": "minecraft:potion",
      "nbt": "{Potion:\"minecraft:water\"}"
    },
    {
      "item": "minecraft:redstone"
    }
  ],
  "result": {
    "id": "minecraft:potion",
    "count": 1,
    "nbt": "{Potion:\"minecraft:awkward\"}"
  }
}
```

## Notes

1. Jewel crafting recipes can accept any number of input materials
2. The order of materials does not affect recipe matching
3. Item tags can be used to increase recipe flexibility
4. Output can only be one item, unlike other recipe types that can have multiple outputs
5. Maximum of 4 different materials supported
