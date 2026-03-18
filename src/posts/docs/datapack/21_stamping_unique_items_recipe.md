# 唯一物品冲压配方 (Stamping Unique Items Recipe)

该配方要求输入物品彼此不重复，且每个输入堆叠数量为 1。

## 基本结构

```json
{
  "type": "anvilcraft:stamping_unique_items",
  "ingredients": [
    { "item": "minecraft:iron_ingot" },
    { "item": "minecraft:gold_ingot" }
  ],
  "results": [
    { "id": "minecraft:clock", "count": 1 }
  ]
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:stamping_unique_items`
- `ingredients`: 输入配料列表（最多 9 个）
- `results`: 输出结果列表（支持概率结果）

## 约束

- 输入物品必须互不相同
- 每个输入槽位数量必须为 `1`

