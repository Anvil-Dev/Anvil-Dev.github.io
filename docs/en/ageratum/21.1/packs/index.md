# Data & Resource Packs

Ageratum reads guides during client resource reload. When distributing to other players, bundle Markdown files, illustrations, and structure previews with your mod's resources or a client resource pack. The server can notify a player to open a document ID, while the content itself comes from the player's local client.

| Goal | Entrypoint |
| --- | --- |
| Create a guide from an empty directory, check language fallback and preview | [Resource Pack Layout](./layout) |
| Customize directory titles, sorting, and colors | [Page Metadata](./metadata) |
| Open articles from specific items or item components | [Item Bindings](./bindings) |
| Insert callout boxes, directories, layouts, and formulas | [Block Tags & Layout](./blocks) |
| Display items, blocks, entities, and live recipes | [Game Objects & Recipes](./content) |
| Use localized text, keybinds, interactive styles, and images | [Inline Tags & Images](./inline) |
| Preview NBT or SNBT inside a page | [Structure Previews & Fields](./structures) |
| Project structures or export them to a save | [Structure Projection & Export](./export) |

The guide registries register component factories in code, and resource pack authors use those factories via tags. The `data/` directory of a regular server-side data pack has no standalone guide discovery or component registration entrypoint. When displaying server recipes in an article, the recipes themselves are still loaded by the game's recipe manager. [Document cache](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java) · [Client registration](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java)
