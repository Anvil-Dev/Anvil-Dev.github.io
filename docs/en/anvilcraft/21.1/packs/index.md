# Data & Resource Packs

Recipes go in server-side `data/<namespace>/recipe/`, while resource pack models, translations, and in-game guides go in `assets/<namespace>/`. To override a built-in recipe, reuse its namespace and relative path; choosing a different ID adds another recipe of the same type. Run `/reload` after editing recipes or tags; dynamic registry changes load when reopening the world.

## Choose a Format

- [Anvil Impact Processing](./impact/)
- [Fluids, Lasers & Machine Processing](./machine/)
- [Crafting, Accessories & Smithing](./crafting/)
- [Multiblocks & Sequential Assembly](./structures/)
- [Mineral Fountains](./fountain/)
- [Mob Transformation](./transform/)
- [Celestial & Temple Recipes](./celestial/)
- [Dynamic Registries](./registries/)
- [Stellar Evolution Data](./stars/)
- [Loot, Advancements & Item Components](./rules/)
- [Tags & Built-in Keys](./tags/)
- [World Resources & Client Resource Packs](./resources/)

## Creating a Data Pack from an Empty Folder

Create `pack.mcmeta` in `datapacks/workshop/` inside your save. Create `data/workshop/recipe/` alongside it and place your new recipes there. Minecraft 1.21.1 uses data pack format `48`.

```json
{
  "pack": {
    "pack_format": 48,
    "description": "Anvil processing recipes"
  }
}
```

After running `/reload` in-game, verify that `workshop` is enabled with `/datapack list enabled`. To replace a base-mod recipe, use `data/anvilcraft/recipe/` and preserve the relative path of the overridden file. When packaging a ZIP, place `pack.mcmeta` and `data/` at the archive root.

Place client translations, models, or textures in a separate resource pack with `pack_format` set to `34`, organizing files under `assets/`. Enable it from the Resource Packs menu and press F3+T to reload.
