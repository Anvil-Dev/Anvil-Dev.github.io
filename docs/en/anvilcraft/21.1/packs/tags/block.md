# Block Tags

Path: `data/<namespace>/tags/block/<tag_name>.json`. Multiple data packs can append to the same tag.

`values` is required: an array of registry IDs, `#`-prefixed tag references, or entry objects. Optional boolean `replace` defaults to `false`. Object entries use string `id` and optional boolean `required` (default `true`); set `false` when depending on optional mods.

## Built-in Example

```json
{
  "values": []
}
```

[Full resource file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/incorrect_for_transcendium_tool.json)

## Tag Directory

| Tag ID | Built-in File |
| --- | --- |
| `anvilcraft:anvil_hammer_denylist` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/anvil_hammer_denylist.json) |
| `anvilcraft:anvil_tier_0` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/anvil_tier_0.json) |
| `anvilcraft:anvil_tier_1` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/anvil_tier_1.json) |
| `anvilcraft:anvil_tier_2` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/anvil_tier_2.json) |
| `anvilcraft:anvil_tier_3` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/anvil_tier_3.json) |
| `anvilcraft:block_devourer_chain_devouring` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/block_devourer_chain_devouring.json) |
| `anvilcraft:block_devourer_probability_dropping` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/block_devourer_probability_dropping.json) |
| `anvilcraft:broken_crystals_clusters` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/broken_crystals_clusters.json) |
| `anvilcraft:cant_broken_anvil` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/cant_broken_anvil.json) |
| `anvilcraft:cleaning_applicable` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/cleaning_applicable.json) |
| `anvilcraft:collision_immune` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/collision_immune.json) |
| `anvilcraft:contains_void_energy` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/contains_void_energy.json) |
| `anvilcraft:crafting_matrix_element` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/crafting_matrix_element.json) |
| `anvilcraft:devour_denylist` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/devour_denylist.json) |
| `anvilcraft:end_portal_unable_change` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/end_portal_unable_change.json) |
| `anvilcraft:felling_applicable` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/felling_applicable.json) |
| `anvilcraft:giant_anvil` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/giant_anvil.json) |
| `anvilcraft:glowing_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/glowing_blocks.json) |
| `anvilcraft:hammer_changeable` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/hammer_changeable.json) |
| `anvilcraft:hammer_removable` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/hammer_removable.json) |
| `anvilcraft:heatable_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/heatable_blocks.json) |
| `anvilcraft:heated_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/heated_blocks.json) |
| `anvilcraft:incandescent_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/incandescent_blocks.json) |
| `anvilcraft:incorrect_for_ember_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/incorrect_for_ember_tool.json) |
| `anvilcraft:incorrect_for_transcendium_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/incorrect_for_transcendium_tool.json) |
| `anvilcraft:landing_no_recipe` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/landing_no_recipe.json) |
| `anvilcraft:laser_can_pass_though` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/laser_can_pass_though.json) |
| `anvilcraft:magnet` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/magnet.json) |
| `anvilcraft:monolith_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/monolith_blocks.json) |
| `anvilcraft:mushroom_block` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/mushroom_block.json) |
| `anvilcraft:needs_ember_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/needs_ember_tool.json) |
| `anvilcraft:needs_netherite_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/needs_netherite_tool.json) |
| `anvilcraft:needs_transcendium_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/needs_transcendium_tool.json) |
| `anvilcraft:neutronium_cannot_pass_through` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/neutronium_cannot_pass_through.json) |
| `anvilcraft:non_magnetic` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/non_magnetic.json) |
| `anvilcraft:overheatable` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/overheatable.json) |
| `anvilcraft:overheated_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/overheated_blocks.json) |
| `anvilcraft:overseer_base` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/overseer_base.json) |
| `anvilcraft:placement_preview` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/placement_preview.json) |
| `anvilcraft:power_converter` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/power_converter.json) |
| `anvilcraft:redhot_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/redhot_blocks.json) |
| `anvilcraft:redstone_torch` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/redstone_torch.json) |
| `anvilcraft:resin_shock_compatible` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/resin_shock_compatible.json) |
| `anvilcraft:sliding_rail_stop_like` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/sliding_rail_stop_like.json) |
| `anvilcraft:sliding_rails` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/sliding_rails.json) |
| `anvilcraft:spectral_can_through` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/spectral_can_through.json) |
| `anvilcraft:stickable_with_sliding_rails` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/stickable_with_sliding_rails.json) |
| `anvilcraft:under_cauldron` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/under_cauldron.json) |
| `anvilcraft:void_decay_products` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/anvilcraft/tags/block/void_decay_products.json) |
| `c:dyed` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed.json) |
| `c:dyed/black` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/black.json) |
| `c:dyed/blue` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/blue.json) |
| `c:dyed/brown` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/brown.json) |
| `c:dyed/cyan` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/cyan.json) |
| `c:dyed/gray` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/gray.json) |
| `c:dyed/green` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/green.json) |
| `c:dyed/light_blue` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/light_blue.json) |
| `c:dyed/light_gray` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/light_gray.json) |
| `c:dyed/lime` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/lime.json) |
| `c:dyed/magenta` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/magenta.json) |
| `c:dyed/orange` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/orange.json) |
| `c:dyed/pink` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/pink.json) |
| `c:dyed/purple` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/purple.json) |
| `c:dyed/red` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/red.json) |
| `c:dyed/white` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/white.json) |
| `c:dyed/yellow` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/dyed/yellow.json) |
| `c:glass_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/glass_blocks.json) |
| `c:ores` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores.json) |
| `c:ores/earth_core_shard` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores/earth_core_shard.json) |
| `c:ores/lead` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores/lead.json) |
| `c:ores/silver` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores/silver.json) |
| `c:ores/tin` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores/tin.json) |
| `c:ores/titanium` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores/titanium.json) |
| `c:ores/tungsten` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores/tungsten.json) |
| `c:ores/uranium` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores/uranium.json) |
| `c:ores/void_matter` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores/void_matter.json) |
| `c:ores/zinc` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores/zinc.json) |
| `c:ores_in_ground/deepslate` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/ores_in_ground/deepslate.json) |
| `c:player_workstations/crafting_tables` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/player_workstations/crafting_tables.json) |
| `c:storage_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks.json) |
| `c:storage_blocks/amber` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/amber.json) |
| `c:storage_blocks/brass` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/brass.json) |
| `c:storage_blocks/bronze` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/bronze.json) |
| `c:storage_blocks/earth_core_shard` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/earth_core_shard.json) |
| `c:storage_blocks/exp_gem` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/exp_gem.json) |
| `c:storage_blocks/flint` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/flint.json) |
| `c:storage_blocks/frost_metal` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/frost_metal.json) |
| `c:storage_blocks/gunpowder` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/gunpowder.json) |
| `c:storage_blocks/lead` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/lead.json) |
| `c:storage_blocks/magnet` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/magnet.json) |
| `c:storage_blocks/multiphase_matter` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/multiphase_matter.json) |
| `c:storage_blocks/plutonium` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/plutonium.json) |
| `c:storage_blocks/raw_lead` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/raw_lead.json) |
| `c:storage_blocks/raw_silver` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/raw_silver.json) |
| `c:storage_blocks/raw_tin` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/raw_tin.json) |
| `c:storage_blocks/raw_titanium` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/raw_titanium.json) |
| `c:storage_blocks/raw_tungsten` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/raw_tungsten.json) |
| `c:storage_blocks/raw_uranium` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/raw_uranium.json) |
| `c:storage_blocks/raw_zinc` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/raw_zinc.json) |
| `c:storage_blocks/resin` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/resin.json) |
| `c:storage_blocks/rotten_flesh` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/rotten_flesh.json) |
| `c:storage_blocks/ruby` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/ruby.json) |
| `c:storage_blocks/sapphire` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/sapphire.json) |
| `c:storage_blocks/silver` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/silver.json) |
| `c:storage_blocks/sugar` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/sugar.json) |
| `c:storage_blocks/tin` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/tin.json) |
| `c:storage_blocks/titanium` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/titanium.json) |
| `c:storage_blocks/topaz` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/topaz.json) |
| `c:storage_blocks/transcendium` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/transcendium.json) |
| `c:storage_blocks/tungsten` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/tungsten.json) |
| `c:storage_blocks/uranium` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/uranium.json) |
| `c:storage_blocks/void_matter` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/void_matter.json) |
| `c:storage_blocks/zinc` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/storage_blocks/zinc.json) |
| `c:villager_job_sites` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/c/tags/block/villager_job_sites.json) |
| `mekanism:cardboard_blacklist` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/mekanism/tags/block/cardboard_blacklist.json) |
| `minecraft:anvil` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/anvil.json) |
| `minecraft:beacon_base_blocks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/beacon_base_blocks.json) |
| `minecraft:cauldrons` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/cauldrons.json) |
| `minecraft:doors` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/doors.json) |
| `minecraft:dragon_immune` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/dragon_immune.json) |
| `minecraft:enchantment_power_provider` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/enchantment_power_provider.json) |
| `minecraft:enchantment_power_transmitter` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/enchantment_power_transmitter.json) |
| `minecraft:incorrect_for_diamond_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/incorrect_for_diamond_tool.json) |
| `minecraft:incorrect_for_gold_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/incorrect_for_gold_tool.json) |
| `minecraft:incorrect_for_iron_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/incorrect_for_iron_tool.json) |
| `minecraft:incorrect_for_netherite_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/incorrect_for_netherite_tool.json) |
| `minecraft:incorrect_for_stone_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/incorrect_for_stone_tool.json) |
| `minecraft:incorrect_for_wooden_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/incorrect_for_wooden_tool.json) |
| `minecraft:mineable/axe` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/mineable/axe.json) |
| `minecraft:mineable/hoe` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/mineable/hoe.json) |
| `minecraft:mineable/pickaxe` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/mineable/pickaxe.json) |
| `minecraft:mineable/shovel` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/mineable/shovel.json) |
| `minecraft:needs_diamond_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/needs_diamond_tool.json) |
| `minecraft:needs_iron_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/needs_iron_tool.json) |
| `minecraft:needs_stone_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/needs_stone_tool.json) |
| `minecraft:planks` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/planks.json) |
| `minecraft:pressure_plates` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/pressure_plates.json) |
| `minecraft:slabs` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/slabs.json) |
| `minecraft:stairs` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/stairs.json) |
| `minecraft:trapdoors` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/trapdoors.json) |
| `minecraft:walls` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/walls.json) |
| `minecraft:wither_immune` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/wither_immune.json) |
| `minecraft:wooden_slabs` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/wooden_slabs.json) |
| `minecraft:wooden_stairs` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/minecraft/tags/block/wooden_stairs.json) |
| `neoforge:needs_netherite_tool` | [View entries](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/generated/resources/data/neoforge/tags/block/needs_netherite_tool.json) |
