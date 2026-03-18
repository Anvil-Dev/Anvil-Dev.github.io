---
prev:
   text: 挤压配方 (Squeezing Recipe)
   link: /posts/docs/datapack/07_squeezing_recipe
next:
   text: 烹饪配方 (Cooking Recipe)
   link: /posts/docs/datapack/09_cooking_recipe
---

# 物品注入配方 (Item Inject Recipe)

物品注入配方用于将流体注入物品中以创建新物品。

## 基本结构

```json
{
  "type": "anvilcraft:item_inject",
  "ingredients": [
    {
      "items": "minecraft:glass_bottle"
    }
  ],
  "results": [
    {
      "id": "minecraft:potion",
      "count": 1
    }
  ],
  "block_ingredient": {
    "blocks": "minecraft:water"
  },
  "block_result": {
    "block": {
      "Name": "minecraft:air"
    },
    "chance": 1.0
  }
}
```

## 字段说明

### type

固定值 `anvilcraft:item_inject`，标识这是一个物品注入配方。

### ingredients

配方所需的输入物品列表。每个元素包含：

- `items`: 物品ID（可以是单个物品ID字符串或物品ID数组）
- `count`: 物品数量（可选，默认为1）

### results

配方的输出物品列表。每个元素包含：

- `id`: 物品ID
- `count`: 物品数量

### block_ingredient

配方所需的输入方块：

- `blocks`: 方块ID（可以是单个方块ID字符串或方块ID数组）

### block_result

配方的输出方块（可选）：

- `block`: 方块状态对象，包含方块名称和其他属性
- `chance`: 结果出现的概率（0.0到1.0之间）

## 使用示例

将玻璃瓶注入水制作成药水：

```json
{
  "type": "anvilcraft:item_inject",
  "ingredients": [
    {
      "items": "minecraft:glass_bottle"
    }
  ],
  "results": [
    {
      "id": "minecraft:potion",
      "count": 1
    }
  ],
  "block_ingredient": {
    "blocks": "minecraft:water"
  },
  "block_result": {
    "block": {
      "Name": "minecraft:air"
    },
    "chance": 1.0
  }
}
```