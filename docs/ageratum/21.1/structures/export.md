# 把模板导出到当前世界

玩家点击手册预览上的导出按钮后，客户端将当前模板保存成压缩 NBT，再发给服务端。结果落在当前世界的 `data/ageratum/` 中。因此多人游戏要去服务器存档取文件，写完的文件也不会自动成为客户端资源包模板。[导出按钮](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L304) · [网络方向注册](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L34)

下面的附属界面动作读取玩家选中的资源 ID。返回 true 只表示已经把模板交给导出器；服务器写入成功后，会通过系统消息告知实际生成的文件名。客户端缺少连接或本地玩家时不发包。

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

`ageratum:export_structure` 按最多 24 KiB 一块发送，压缩结果最大 8 MiB。服务端按玩家 UUID 维护进行中的传输，首块的 `offset` 必须为零，开始请求之间相隔至少两秒。接收端要求位置 ID、总字节数与首块一致，偏移量恰好等于已接收长度；传输超过三十秒或玩家登出时丢弃状态。[客户端分块](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureExportClient.java#L21) · [服务端组装](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/StructureExportHandler.java#L31)

| API 或载荷字段 | 含义 | 边界 |
| --- | --- | --- |
| `StructureExportClient.export(location, template)` | 在连接中的客户端启动一次异步传输；返回 void | 面板不应在每一帧调用。文件成功落盘由服务器回复。 |
| `ExportStructurePayload(location, totalBytes, offset, data)` | 模板 ID、压缩后总字节数、分块起始字节、当前块数据 | ID 字符串最长 256，空块、错位、超长块或总长超限会使该传输失效。 |
| `StructureExporter.read(byte[] compressed)` | 解压并检查原版模板根标签，返回 `CompoundTag` | 解压读取预算 64 MiB。根须有三个整数的 `size`、`blocks` 列表及 `palette` 或 `palettes` 列表，否则抛 `IOException`。 |
| `StructureExporter.write(Path worldRoot, ResourceLocation location, CompoundTag root)` | 写入当前世界根目录下的导出目录并返回实际 `Path` | 取路径末段，去掉 NBT/SNBT 后缀，前缀使用命名空间。例如 `example:foundry/frame` 生成 `example_frame.nbt`。重名时依次使用 `_1`、`_2`，写入失败会清理本次创建的文件。 |

[编码字段顺序](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ExportStructurePayload.java#L10) · [结构检查和文件命名](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/structure/StructureExporter.java#L21)
