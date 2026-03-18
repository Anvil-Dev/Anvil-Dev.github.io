# 概率矿物涌泉配方 (Mineral Fountain Chance Recipe)

该配方用于在指定维度中，以概率方式将方块转换为目标方块。

## 基本结构

```js
ServerEvents.recipes(event => {
  event.custom({
    type: "anvilcraft:mineral_fountain_chance",
    dimension: "minecraft:overworld",
    from_block: "minecraft:stone",
    to_block: "minecraft:diamond_ore",
    chance: 0.05
  })
})
```

## 字段说明

- `type`: 固定值 `anvilcraft:mineral_fountain_chance`
- `dimension`: 生效维度（资源位置）
- `from_block`: 被转换方块条件
- `to_block`: 目标方块
- `chance`: 概率（0.0 ~ 1.0）

## KubeJS 风格构建器

```js
ServerEvents.recipes(event => {
  event.recipes.anvilcraft.mineral_fountain_chance()
    .dimension("minecraft:overworld")
    .fromBlock("minecraft:stone")
    .toBlock("minecraft:diamond_ore")
    .chance(0.05)
})
```

## 注意事项

- `chance` 建议使用小数表示概率，如 `0.1` 代表 10%
- 仅在 `dimension` 指定维度内生效

