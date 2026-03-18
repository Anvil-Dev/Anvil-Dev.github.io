# Datapack

Datapack support is one of the core features of AnvilCraft, allowing customization of various recipes and mechanics through JSON files. The following documentation will detail the structure, fields, and usage of each recipe type.

## Recipes

These recipe types form the foundation of AnvilCraft's crafting system:

- [InWorld Recipe](00_inworld_recipe.md) - In-world recipe system, triggered by mechanisms like anvils
- [Item Compress Recipe](01_item_compress_recipe.md) - Compress multiple items into more advanced items
- [Block Compress Recipe](02_block_compress_recipe.md) - Compress multiple blocks into more advanced blocks
- [Item Crush Recipe](03_item_crush_recipe.md) - Crush items into smaller items
- [Block Crush Recipe](04_block_crush_recipe.md) - Crush blocks into smaller blocks or items
- [Stamping Recipe](05_stamping_recipe.md) - Transform items into other items on the stamping platform
- [Bulging Recipe](06_bulging_recipe.md) - Bulge items into other items using fluid in cauldrons
- [Squeezing Recipe](07_squeezing_recipe.md) - Squeeze blocks into other blocks using fluid in cauldrons
- [Item Inject Recipe](08_item_inject_recipe.md) - Inject fluid into items to create new items
- [Cooking Recipe](09_cooking_recipe.md) - Cook items into other items using heat sources
- [Super Heating Recipe](10_super_heating_recipe.md) - Transform items using high-temperature fluid
- [Time Warp Recipe](11_timewarp_recipe.md) - Transform items using time power and fluid
- [Unpack Recipe](12_unpack_recipe.md) - Unpack compressed items into original items
- [Block Smear Recipe](13_block_smear_recipe.md) - Smear lower blocks using upper blocks
- [Multiblock Recipe](14_multiblock_recipe.md) - Define complex multiblock structure recipes
- [Mob Transform Recipe](15_mob_transform_recipe.md) - Define transformation rules between mob entities
- [Jewel Crafting Recipe](16_jewel_crafting_recipe.md) - Craft various jewelry and decorative items
- [Mineral Fountain Recipe](17_mineral_fountain_recipe.md) - Define block transformation rules for mineral fountains
- [Boiling Recipe](18_boiling_recipe.md) - Process items with cauldron + lit campfire conditions
- [Mesh Recipe](19_mesh_recipe.md) - Filter/transform items through mesh scaffolding
- [Mass Inject Recipe](20_mass_inject_recipe.md) - Inject mass value into target items
- [Stamping Unique Items Recipe](21_stamping_unique_items_recipe.md) - Stamping recipe with unique (non-duplicate) inputs
- [Mob Transform With Item Recipe](22_mob_transform_with_item_recipe.md) - Item-driven probabilistic special mob transformation
- [Multiblock Conversion Recipe](23_multiblock_conversion_recipe.md) - Convert a matched structure into another structure
- [Mineral Fountain Chance Recipe](24_mineral_fountain_chance_recipe.md) - Dimension-limited probability conversion for mineral fountain
- [Charger Charging Recipe](25_charger_charging_recipe.md) - Define charger/discharger processing behavior
- [Multiple To One Smithing Recipe](26_multiple_to_one_smithing_recipe.md) - 2/4/8-to-1 multi-input smithing recipes
- [Neutron Irradiation Recipe](27_neutron_irradiation_recipe.md) - Process items with neutron irradiator conditions
- [Permutation Recipe](28_permutation_recipe.md) - Frost smithing permutation recipe type
- [Deformation Recipe](29_deformation_recipe.md) - Frost smithing deformation recipe type
- [Energy Weapon Make Recipe](30_energy_weapon_make_recipe.md) - Multi-ingredient energy weapon assembly
- [Anvil Collision Craft Recipe](31_anvil_collision_recipe.md) - Trigger conversions by anvil collision speed and targets

## Usage Instructions

To use these recipes, you need to create corresponding JSON files in your datapack and place them in the correct directory structure. Each recipe type has its specific structure and field requirements - please refer to the corresponding documentation for detailed information.
