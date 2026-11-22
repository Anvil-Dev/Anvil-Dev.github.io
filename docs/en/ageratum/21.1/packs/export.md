# Template Projection and Export Location

To project the same structure with the client command, place the compressed binary template at `assets/workshop/ageratum/stands/basic.nbt`. After pressing F3+T, run the following command in-game:

```text
/ageratum structure workshop:stands/basic ~ ~ ~
```

The command index only scans `.nbt` files under `ageratum/`, stripping the folder prefix and extension to form the template ID. This differs from the direct resource path used by the `structure` tag in body text. The template manager receives raw NBT during client reload and loads it into a `StructureTemplate` using the current world's block registry when an actual projection request arrives. Templates cannot be instantiated before entering a world. [Template registration & lazy loading](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java) · [Projection command](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java)

## Exporting from a Page

After opening a loaded structure preview and clicking the export button, the client compresses the full structure and sends it in chunks to the server. The server validates total size, chunk order, identifier, and NBT structure, then writes it to `data/ageratum/` under the **current world directory**. The exported filename keeps only the namespace and the last segment of the source file: for example, `workshop:ageratum/en_us/maintenance/stand.snbt` is saved as `workshop_stand.nbt`, and subsequent exports become `workshop_stand_1.nbt`, `workshop_stand_2.nbt`, and so on.

| Limit | Value | Handling |
| --- | --- | --- |
| Single transfer | Max 8 MiB compressed | Checked on both client and server. |
| Per chunk | Max 24 KiB | Server requires the next chunk offset to equal the bytes received so far. |
| Decompression read budget | 64 MiB | Parsed with a bounded NBT reader. |
| Request interval & timeout | At least 2 seconds per player; 30-second transfer limit | Timed-out transfers are cleaned up. |

The export location is an output directory inside the save. To ship the result in the next resource pack release, copy the file into `assets/workshop/ageratum/` in your resource pack and reference its template ID. [Client export](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureExportClient.java) · [Server validation](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java) · [File naming](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/structure/StructureExporter.java)
