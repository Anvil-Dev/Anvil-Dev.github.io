---
prev:
   text: 霜铸置换配方 (Permutation Recipe)
   link: /posts/docs/datapack/28_permutation_recipe
next:
   text: 能量武器制作配方 (Energy Weapon Make Recipe)
   link: /posts/docs/datapack/30_energy_weapon_make_recipe
---

# 霜铸形变配方 (Deformation Recipe)

形变配方是霜铸系统配方之一，用于在模板和材料约束下对输入物品进行形态变换。

## 基本结构

```json
{
  "type": "anvilcraft:deformation",
  "template": { "items": "anvilcraft:deformation_template_item" },
  "material": { "items": "anvilcraft:frost_metal_ingot" },
  "inputs": [
    { "id": "minecraft:iron_pickaxe" },
    { "id": "minecraft:diamond_pickaxe" }
  ]
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:deformation`
- `template`: 模板条件（可选）
- `material`: 材料条件（可选，不填使用默认霜金属）
- `inputs`: 形变候选列表

