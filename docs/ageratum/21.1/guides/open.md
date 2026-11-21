# 从服务端打开页面

比如管理员想在工作台旁用命令给玩家演示手册，可以像下面这样注册 `/fieldguide` 命令。服务端把逻辑页 ID 发给执行命令的玩家，客户端收到后按自己的语言加载对应资源。

```java
package dev.example.fieldguide;

import dev.anvilcraft.resource.ageratum.Ageratum;
import net.minecraft.commands.Commands;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.common.NeoForge;
import net.neoforged.neoforge.event.RegisterCommandsEvent;

@Mod("field_guide")
public final class FieldGuideMod {
    public FieldGuideMod() {
        NeoForge.EVENT_BUS.addListener(FieldGuideMod::registerCommands);
    }

    private static void registerCommands(RegisterCommandsEvent event) {
        event.getDispatcher().register(Commands.literal("fieldguide").executes(context -> {
            ServerPlayer reader = context.getSource().getPlayerOrException();
            Ageratum.openGuide(reader, ResourceLocation.fromNamespaceAndPath("field_guide", "index"));
            return 1;
        }));
    }
}
```

| 调用 | 参数、返回与时机 |
| --- | --- |
| `Ageratum.openGuide(ServerPlayer, ResourceLocation)` | 在服务器端取得目标玩家，传入命名空间和逻辑页名。返回 void，表示已发起发送，服务器不会收到页面是否存在的确认。 |
| `openGuideOnClientWithoutLanguageCode` | 客户端传入逻辑页 ID 和面包屑列表，自动解析语言。解析失败返回 false。 |
| `openGuideOnClient` | 用已经定位的资源 ID 打开页面，例如 `field_guide:ageratum/en_us/index.md`。需要指定锚点时使用相应重载。 |

别把 `ageratum/en_us/` 拼进服务端发出的逻辑页名。客户端收到包后会自己拼接手册根目录和语言目录，提前拼上反而会找不到文件。从控制台执行这个命令时没有玩家，`getPlayerOrException()` 会通过 Brigadier 把错误提示返回给命令发送方。

[服务端入口](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java) · [客户端接包](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java)
