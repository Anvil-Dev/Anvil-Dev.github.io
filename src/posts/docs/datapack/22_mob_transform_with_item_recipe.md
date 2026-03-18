---
prev:
   text: 唯一物品冲压配方 (Stamping Unique Items Recipe)
   link: /posts/docs/datapack/21_stamping_unique_items_recipe
next:
   text: 多方块转换配方 (Multiblock Conversion Recipe)
   link: /posts/docs/datapack/23_multiblock_conversion_recipe
---

# 带物品生物转换配方 (Mob Transform With Item Recipe)

该配方在生物满足条件时，根据手持物品数量按概率触发特殊转换。

## 基本结构

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

## 字段说明

- `input`: 输入生物类型
- `ingredients`: 触发用物品条件
- `special_result`: 特殊转换后的生物类型
- `item_result`: 转换后设置给生物主手的物品
- `chance_percent_per_item`: 每个物品的触发概率百分比
- `tag_predicates` / `tag_modifications` / `transform_options`: 高级 NBT 条件与转换选项

