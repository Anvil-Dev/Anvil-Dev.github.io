---
prev:
   text: 筛网配方 (Mesh Recipe)
   link: /posts/docs/datapack/19_mesh_recipe
next:
   text: 唯一物品冲压配方 (Stamping Unique Items Recipe)
   link: /posts/docs/datapack/21_stamping_unique_items_recipe
---

# 质量注入配方 (Mass Inject Recipe)

质量注入配方用于给匹配物品附加质量值，不直接产出新物品。

## 基本结构

```json
{
  "type": "anvilcraft:mass_inject",
  "ingredient": {
    "item": "minecraft:iron_ingot"
  },
  "mass": 250
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:mass_inject`
- `ingredient`: 输入物品条件（`Ingredient`）
- `mass`: 注入质量值（整数）

## 说明

- `mass` 仅影响系统内部质量计算与展示
- 该配方属于特殊处理配方，结果由运行逻辑决定

