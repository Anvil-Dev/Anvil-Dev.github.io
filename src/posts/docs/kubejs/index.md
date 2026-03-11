# KubeJS 集成

AnvilCraft 提供了完整的 KubeJS 集成，允许你使用 KubeJS 脚本自定义 AnvilCraft 的配方。

## 支持的配方类型

- [InWorld 配方](00_inworld_recipe.md) - 世界内配方系统
- [物品粉碎配方](01_item_crush_recipe.md) - 将物品粉碎成更小的物品
- [物品压缩配方](02_item_compress_recipe.md) - 将多个物品压缩成更高级的物品
- [冲压配方](03_stamping_recipe.md) - 在冲压平台上将物品转换为其他物品
- [解包配方](04_unpack_recipe.md) - 将压缩物品解包为原始物品
- [方块粉碎配方](05_block_crush_recipe.md) - 将方块粉碎成更小的方块或物品
- [方块压缩配方](06_block_compress_recipe.md) - 将多个方块压缩成更高级的方块
- [方块涂抹配方](07_block_smear_recipe.md) - 
- [膨发配方](08_bulging_recipe.md) - 使用炼药锅中的流体将物品膨发成其他物品
- [挤压配方](09_squeezing_recipe.md) - 使用炼药锅中的流体将方块挤压成其他方块
- [物品注入配方](10_item_inject_recipe.md) - 将流体注入物品中以创建新物品
- [超级加热配方](11_super_heating_recipe.md) - 使用高温流体将物品转换为其他物品
- [时移配方](12_time_warp_recipe.md) - 使用时间力量和流体将物品转换为其他物品
- [多方块结构配方](13_multiblock_recipe.md) - 使用多方块结构的配方
- [生物转换配方](14_mob_transform_recipe.md) - 生物实体之间的转换配方
- [珠宝制作配方](15_jewel_crafting_recipe.md) - 珠宝制作配方
- [矿物涌泉配方](16_mineral_fountain_recipe.md) - 矿物涌泉相关配方

## 基础用法

要使用 AnvilCraft 的 KubeJS 集成，首先需要在 KubeJS 脚本中导入相关类：

```js
// 在你的 KubeJS 脚本中
ServerEvents.recipes(event => {
    // 你的配方代码
})
```

所有 AnvilCraft 配方都遵循 KubeJS 标准配方格式：

```js
event.custom({
    type: "anvilcraft:recipe_type",
    // 配方参数
})
```