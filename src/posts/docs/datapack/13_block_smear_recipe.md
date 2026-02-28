# 方块涂抹配方 (Block Smear Recipe)

方块涂抹配方用于使用上方方块涂抹下方方块。

## 基本结构

```json
{
  "type": "anvilcraft:block_smear",
  "inputs": [
    { "blocks": "minecraft:moss_block" },
    { "blocks": "minecraft:cobblestone" }
  ],
  "result": {
    "block": {
      "name": "anvilcraft:mossy_cobblestone"
    },
    "chance": 1.0
  }
}
```

## 字段说明

### type

固定值 `anvilcraft:block_smear`，标识这是一个方块涂抹配方。

### inputs

配方所需的输入方块列表。每个元素包含：

- `blocks`: 方块ID（可以是单个方块ID字符串或方块ID数组）

### result

配方的输出结果。元素包含：

- `block`: 方块状态对象，包含方块名称和其他属性
- `chance`: 结果出现的概率（0.0到1.0之间）

## 使用示例

将圆石涂抹为苔石：

```json
{
  "type": "anvilcraft:block_smear",
  "inputs": [
    { "blocks": "minecraft:moss_block" },
    { "blocks": "minecraft:cobblestone" }
  ],
  "results": {
    "block": {
      "name": "anvilcraft:mossy_cobblestone"
    },
    "chance": 1.0
  }
}
```