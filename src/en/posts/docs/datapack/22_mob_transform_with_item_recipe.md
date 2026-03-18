# Mob Transform With Item Recipe

This recipe performs a special entity transformation based on held items and per-item probability.

## Basic Structure

```json
{
  "type": "anvilcraft:mob_transform_with_item",
  "input": "minecraft:zombie",
  "ingredients": [
    { "items": "minecraft:golden_apple" }
  ],
  "special_result": "minecraft:zombie_villager",
  "item_result": { "id": "minecraft:gold_nugget", "count": 1 },
  "chance_percent_per_item": 10,
  "tag_predicates": [],
  "tag_modifications": [],
  "transform_options": []
}
```

## Field Description

- `input`: Source entity type
- `ingredients`: Trigger item predicates
- `special_result`: Target entity type for special transform
- `item_result`: Main-hand item set after transform
- `chance_percent_per_item`: Probability percent per held item count
- `tag_predicates` / `tag_modifications` / `transform_options`: Advanced NBT conditions/options

