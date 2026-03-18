---
prev:
   text: Datapack
   link: /en/posts/docs/datapack/index
next:
   text: Item Compress Recipe
   link: /en/posts/docs/datapack/01_item_compress_recipe
---

# InWorld Recipe System

The InWorld recipe system is the core system in AnvilCraft for handling in-world recipes, allowing various effects to be
triggered under specific conditions.

## Basic Structure

```json
{
  "type": "anvillib_recipe:in_world_recipe",
  "icon": {
    "item": "minecraft:anvil"
  },
  "trigger": "anvilcraft:on_anvil_fall_on",
  "conflicting": [],
  "non_conflicting": [],
  "outcomes": [],
  "priority": 0,
  "compatible": true,
  "max_efficiency": 2147483647
}
```

### Field Description

- `type`: Fixed value `anvillib_recipe:in_world_recipe`, identifies this as an InWorld recipe
- `icon`: Recipe icon, displayed in the recipe interface
- `trigger`: Trigger type, determines when the recipe is activated
- `conflicting`: List of conflicting predicates, these predicates conflict with each other
- `non_conflicting`: List of non-conflicting predicates, these predicates don't conflict
- `outcomes`: List of recipe outcomes, executed when the recipe matches
- `priority`: Recipe priority, higher values mean higher priority
- `compatible`: Compatibility mode, determines predicate matching behavior
- `max_efficiency`: Maximum efficiency value (optional, defaults to Integer.MAX_VALUE)

## Triggers

Triggers determine when a recipe is activated. Currently supported triggers:

### `anvilcraft:on_anvil_fall_on`

Triggers when an anvil falls

## Predicates

Predicates are used to determine whether a recipe can be executed, divided into conflicting and non-conflicting
categories.

### `has_item`

Check if a specified item exists at the specified position (provided by AnvilLib Recipe)

```json
{
  "type": "anvillib_recipe:has_item",
  "offset": [0, -1, 0],
  "item": {
    "items": "minecraft:iron_ingot"
  }
}
```

### `has_item_ingredient`

Check if a specified item exists at the specified position, consumes the item if the recipe matches (provided by
AnvilLib Recipe)

```json
{
  "type": "anvillib_recipe:has_item_ingredient",
  "offset": [0, -1, 0],
  "item": {
    "items": "minecraft:iron_ingot"
  }
}
```

### `has_block`

Check if a specified block exists at the specified position (provided by AnvilLib Recipe)

```json
{
  "type": "anvillib_recipe:has_block",
  "offset": [0, -1, 0],
  "predicate": {
    "blocks": "minecraft:iron_block"
  }
}
```

### `has_block_ingredient`

Check if a specified block exists at the specified position, clears the block if the recipe matches (provided by
AnvilLib Recipe)

```json
{
  "type": "anvillib_recipe:has_block_ingredient",
  "offset": [0, -1, 0],
  "predicate": {
    "blocks": "minecraft:iron_block"
  }
}
```

### `has_cauldron`

Check if a cauldron with specified fluid exists at the specified position (provided by AnvilCraft)

```json
{
  "type": "anvilcraft:has_cauldron",
  "offset": [0, -1, 0],
  "fluid": "minecraft:water"
}
```

## Outcomes

Outcomes define the operations executed when a recipe matches.

### `spawn_item`

Spawn items at the specified position

```json
{
  "type": "anvillib_recipe:spawn_item",
  "offset": [0, -1, 0],
  "item": "minecraft:iron_nugget"
}
```

### `set_block`

Set a block at the specified position

```json
{
  "type": "anvillib_recipe:set_block",
  "offset": [0, -1, 0],
  "block": "minecraft:diamond_block"
}
```

### `damage_anvil`

Damage the anvil

```json
{
  "type": "anvilcraft:damage_anvil"
}
```

## Usage Example

Here's a complete example that spawns iron nuggets and consumes iron ingot when an anvil falls on it:

```json
{
  "type": "anvillib_recipe:in_world_recipe",
  "icon": {
    "item": "minecraft:iron_nugget"
  },
  "trigger": "anvilcraft:on_anvil_fall_on",
  "conflicting": [],
  "non_conflicting": [
    {
      "type": "anvillib_recipe:has_item_ingredient",
      "offset": [0, -1, 0],
      "item": {
        "items": "minecraft:iron_ingot"
      }
    }
  ],
  "outcomes": [
    {
      "type": "anvillib_recipe:spawn_item",
      "offset": [0, -1, 0],
      "item": "minecraft:iron_nugget"
    }
  ],
  "priority": 0,
  "compatible": true
}
```
