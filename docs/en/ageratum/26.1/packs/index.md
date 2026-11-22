# Data & Resource Packs

Ageratum reads guides during client resource reload. When distributing to other players, bundle Markdown files, illustrations, and structure previews with your mod's resources or a client resource pack. The server can notify a player to open a document ID, while the content itself comes from the player's local client.

| Goal | Entrypoint |
| --- | --- |
| Create a guide from an empty directory, check language fallback and preview | [Resource Pack Layout](./layout) |
| Customize directory titles, sorting, and colors | [Page Metadata](./metadata) |
| Open articles from specific items or item components | [Item Bindings](./bindings) |
| Insert callout boxes, row layouts, and formulas | [Block Tags & Layout](./blocks) |
| Display items, blocks, entities, and recipe placeholders | [Game Objects & Recipes](./content) |
| Use localized text, keybinds, interactive styles, and images | [Inline Tags & Images](./inline) |
| Preview NBT or SNBT inside a page | [Structure Previews & Fields](./structures) |
| Project structures from commands or body text | [Structure Projection](./export) |
| Define layouts, panels, component colors, and textures | [Layout JSON](./appearance/) |
| Customize the guidebook item model and translations | [Guidebook Item Appearance](./guidebook) |

The guide registries register component factories in code, and resource pack authors use those factories via tags. The `data/` directory of a regular server-side data pack has no standalone guide discovery or component registration entrypoint. The built-in `recipe` tag reads the ID, and currently leaves a blank placeholder. [Document cache](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java) · [Client registration](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java)
