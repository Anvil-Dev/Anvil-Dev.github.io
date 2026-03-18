---
prev:
   text: 中子辐照配方 (Neutron Irradiation Recipe)
   link: /posts/docs/datapack/27_neutron_irradiation_recipe
next:
   text: 霜铸形变配方 (Deformation Recipe)
   link: /posts/docs/datapack/29_deformation_recipe
---

# 霜铸置换配方 (Permutation Recipe)

置换配方是霜铸系统配方之一，用于基于模板+材料对候选输入进行轮换转换。

## 基本结构

```json
{
  "type": "anvilcraft:permutation",
  "template": { "items": "anvilcraft:permutation_template_item" },
  "material": { "items": "minecraft:lapis_lazuli" },
  "inputs": [
    { "id": "minecraft:iron_sword" },
    { "id": "minecraft:golden_sword" }
  ]
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:permutation`
- `template`: 模板物品条件（可选，不填使用默认模板）
- `material`: 材料条件
- `inputs`: 候选输入结果列表（按顺序参与置换）

