# 筛网配方 (Mesh Recipe)

筛网配方用于在脚手架（筛网）条件下，将输入物品转化为目标产物。

## 基本结构

```json
{
  "type": "anvilcraft:mesh",
  "ingredients": [
    { "items": "minecraft:gravel" }
  ],
  "results": [
    { "id": "minecraft:flint", "count": 1 }
  ]
}
```

## 字段说明

- `type`: 固定值 `anvilcraft:mesh`
- `ingredients`: 输入物品列表
- `results`: 输出结果列表（支持概率结果）

## 说明

- 该配方通常用于“筛选”类掉落转换
- 需要满足对应的方块环境条件（脚手架）

