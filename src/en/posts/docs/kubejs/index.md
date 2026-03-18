# KubeJS Integration

AnvilCraft provides complete KubeJS integration, allowing you to customize AnvilCraft recipes using KubeJS scripts.

## Supported Recipe Types

- [InWorld Recipe](00_inworld_recipe.md) - In-world recipe system
- [Item Crush Recipe](01_item_crush_recipe.md) - Crush items into smaller items
- [Item Compress Recipe](02_item_compress_recipe.md) - Compress multiple items into more advanced items
- [Stamping Recipe](03_stamping_recipe.md) - Transform items into other items on the stamping platform
- [Unpack Recipe](04_unpack_recipe.md) - Unpack compressed items into original items
- [Block Crush Recipe](05_block_crush_recipe.md) - Crush blocks into smaller blocks or items
- [Block Compress Recipe](06_block_compress_recipe.md) - Compress multiple blocks into more advanced blocks
- [Block Smear Recipe](07_block_smear_recipe.md) - Smear lower blocks using upper blocks
- [Bulging Recipe](08_bulging_recipe.md) - Bulge items into other items using fluid in cauldrons
- [Squeezing Recipe](09_squeezing_recipe.md) - Squeeze blocks into other blocks using fluid in cauldrons
- [Item Inject Recipe](10_item_inject_recipe.md) - Inject fluid into items to create new items
- [Super Heating Recipe](11_super_heating_recipe.md) - Transform items using high-temperature fluid
- [Time Warp Recipe](12_time_warp_recipe.md) - Transform items using time power and fluid
- [Multiblock Recipe](13_multiblock_recipe.md) - Multiblock structure recipes
- [Mob Transform Recipe](14_mob_transform_recipe.md) - Transform recipes between mob entities
- [Jewel Crafting Recipe](15_jewel_crafting_recipe.md) - Jewel crafting recipes
- [Mineral Fountain Recipe](16_mineral_fountain_recipe.md) - Mineral fountain related recipes
- [Boiling Recipe](17_boiling_recipe.md) - Boiling process in cauldron environments
- [Cooking Recipe](18_cooking_recipe.md) - Heating/cooking process in cauldron environments
- [Mesh Recipe](19_mesh_recipe.md) - Process items with mesh/scaffolding conditions
- [Mineral Fountain Chance Recipe](20_mineral_fountain_chance_recipe.md) - Dimension-based probability block conversion

## Basic Usage

To use AnvilCraft's KubeJS integration, first import the relevant classes in your KubeJS script:

```js
// In your KubeJS script
ServerEvents.recipes(event => {
    // Your recipe code
})
```

All AnvilCraft recipes follow the KubeJS standard recipe format:

```js
event.custom({
    type: "anvilcraft:recipe_type",
    // Recipe parameters
})
```
