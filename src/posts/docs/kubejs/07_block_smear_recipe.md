# 方块涂抹配方 (Block Smear Recipe)

方块涂抹配方用于使用上方方块涂抹下方方块。

## 基本结构

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:block_smear",
    inputs: [
      { blocks: "minecraft:moss_block" },
      { blocks: "minecraft:cobblestone" }
    ],
    result: {
        block: {
            name: "anvilcraft:mossy_cobblestone"
        },
        chance: 1.0
    }
  })
})
```

## 字段说明

### type

固定值 `anvilcraft:block_smear`，标识这是一个方块涂抹配方。

### inputs (输入方块)

输入方块列表，每个元素包含：

- `blocks`: 方块ID（可以是单个方块ID字符串或方块ID数组）

### result (输出结果)

输出结果，元素包含：

- `block`: 方块状态对象，包含方块名称和其他属性
- `chance`: 结果出现的概率（0.0到1.0之间）

## 实用方法

```js
ServerEvents.recipes(event => {
  // 方块涂抹 - 不同的构造函数参数组合
  event.recipes.anvilcraft.block_smear("anvilcraft:iron_block_to_compressed") // 仅ID
  
  event.recipes.anvilcraft.block_smear(
    [                                            // 输入列表
      { blocks: "minecraft:mossy_cobblestone" },
      { blocks: "minecraft:cobblestone" }
    ],    
    {                                            // 输出
      block: { name: "anvilcraft:mossy_cobblestone" },
      chance: 1.0
    }
  )
})
```

## KubeJS 风格构建器

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.block_smear()
    .input("minecraft:moss_block")            // 输入方块
    .input("minecraft:cobblestone")
    .result("anvilcraft:mossy_cobblestone")   // 输出方块
})
```

## 使用示例

将圆石涂抹为苔石

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.block_smear()
    .input("minecraft:moss_block")
    .input("minecraft:cobblestone")
    .result("anvilcraft:mossy_cobblestone")
})
```