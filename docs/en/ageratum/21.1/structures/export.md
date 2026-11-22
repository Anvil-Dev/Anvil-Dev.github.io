# Exporting Templates to the Current World

When a player clicks the export button in a guide's structure preview, the client packs the current template into compressed NBT and sends it to the server, which writes it to `data/ageratum/` in the current world. Because the file is written into the server save, in multiplayer you must retrieve it from the server save; exported files also do not automatically become templates in client resource packs. [Export button](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L304) · [Network direction registration](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L34)

The add-on UI action below reads the resource ID selected by the player. Returning `true` only means the template has been handed to the exporter; once the server actually finishes writing the file, it sends a system message telling the player the generated filename. If the client is not connected to a server or has no local player, no packet is sent.

```java
package dev.example.blueprint;

import dev.anvilcraft.resource.ageratum.client.feat.structure.AgeratumStructureTemplateManager;
import dev.anvilcraft.resource.ageratum.client.feat.structure.StructureExportClient;
import net.minecraft.client.Minecraft;
import net.minecraft.resources.ResourceLocation;

public final class BlueprintExport {
    public static boolean submit(ResourceLocation id) {
        var client = Minecraft.getInstance();
        if (client.player == null || client.getConnection() == null) return false;
        var template = AgeratumStructureTemplateManager.get(id);
        if (template.isEmpty()) return false;
        StructureExportClient.export(id, template.get());
        return true;
    }
}
```

`ageratum:export_structure` sends chunks of at most 24 KiB, with a maximum compressed size of 8 MiB. The server tracks active transfers per player UUID; the first chunk's `offset` must be zero, and start requests must be at least two seconds apart. The receiver requires the location ID and total byte count to match the first chunk, and the offset to equal the bytes received so far; transfers exceeding 30 seconds or interrupted by player logout are discarded. [Client chunking](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureExportClient.java#L21) · [Server reassembly](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java#L31)

| API or Payload Field | Meaning | Boundaries |
| --- | --- | --- |
| `StructureExportClient.export(location, template)` | Starts an asynchronous transfer on a connected client; returns `void` | Panels must not call this every frame. Disk write success is reported by the server. |
| `ExportStructurePayload(location, totalBytes, offset, data)` | Template ID, total compressed bytes, chunk start offset, current chunk data | ID string max length `256`; empty chunks, out-of-order offsets, oversized chunks, or oversized totals invalidate the transfer. |
| `StructureExporter.read(byte[] compressed)` | Decompresses and checks vanilla template root tags, returning `CompoundTag` | 64 MiB decompression read budget. Root must contain 3-int `size`, `blocks` list, and `palette` or `palettes` list, or `IOException` is thrown. |
| `StructureExporter.write(Path worldRoot, ResourceLocation location, CompoundTag root)` | Writes to the export directory under the current world root and returns the actual `Path` | Takes the last path segment, strips `.nbt`/`.snbt`, and prefixes the namespace (e.g. `example:foundry/frame` becomes `example_frame.nbt`). Collisions append `_1`, `_2`; write failures clean up the newly created file. |

[Encoding field order](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) · [Structure validation & file naming](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/structure/StructureExporter.java#L21)
