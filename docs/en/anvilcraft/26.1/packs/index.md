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

## Create a Standalone Pack

Place `pack.mcmeta` at the root of the ZIP archive or pack folder, alongside `data` or `assets`. Minecraft 26.1.2 uses data pack format 101.1 and resource pack format 84.0. This metadata targets that game version.

```json
{
  "pack": {
    "description": "AnvilCraft recipe changes",
    "min_format": [
      101,
      1
    ],
    "max_format": [
      101,
      1
    ]
  }
}
```

For a client resource pack, set both format limits to `[84, 0]`.
