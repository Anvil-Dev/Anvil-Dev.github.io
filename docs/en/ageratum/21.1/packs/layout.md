# Opening a Guide from an Empty Resource Pack

Start with a pack containing just a single page. Place `field-guide/` into the client's `resourcepacks/` folder and enable it in the Resource Packs screen. This pack adds an anvil maintenance guide to the `workshop` namespace.

```text
field-guide/
  pack.mcmeta
  assets/
    workshop/
      ageratum/
        en_us/
          index.md
        zh_cn/
          index.md
```

`pack.mcmeta` in the root directory uses resource pack format `34` for Minecraft 1.21.1.

```json
{
  "pack": {
    "pack_format": 34,
    "description": "Anvil Maintenance Guide"
  }
}
```

Write the following complete content into `en_us/index.md` (and use the same structure with translated title and body for `zh_cn/index.md`).

```markdown
---
navigation:
  title: Anvil Maintenance
guide:
  items:
    - "minecraft:anvil"
---
# Anvil Maintenance

Place the anvil on a solid block. An unsupported anvil will fall.

<item id="minecraft:anvil" showText="true"/>
```

In-game, run `/ageratum workshop` to open the home page; to jump directly to a subpage, run `/ageratum workshop "maintenance/repair"`, which maps to `maintenance/repair.md` (omitting the file argument opens `index.md` by default). The client searches for the current language first and falls back to `en_us`, so partial translations are fine. Language codes are automatically lowercased with hyphens converted to underscores. After editing files, press F3+T so the client rebuilds the content and binding indexes. [Path handling](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java) · [Command registration](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java)

## Live Preview While Writing

Set `enablePreview` to `true` in the client config. Place `index.md` directly into `ageratum_preview/` under the game directory, then run `/ageratum preview`. `previewPath` can specify a different root directory. Preview uses a separate filesystem workspace; when shipping a resource pack, still use the `assets` layout above. [Client config](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java) · [Preview path](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java)
