# 从服务端打开页面

例如工作台旁的管理员希望用命令给玩家演示手册。下面的完整入口注册 `/fieldguide`，把逻辑页 ID 发送给执行命令的玩家。接收端按自己的语言选资源。

```java
package dev.example.fieldguide;

import dev.anvilcraft.resource.ageratum.Ageratum;
import net.minecraft.commands.Commands;
import net.minecraft.resources.Identifier;
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
            Ageratum.openGuide(reader, Identifier.fromNamespaceAndPath("field_guide", "index"));
            return 1;
        }));
    }
}
```

| 调用 | 参数、返回与时机 |
| --- | --- |
| `Ageratum.openGuide(ServerPlayer, Identifier)` | 在服务器端取得目标玩家，传入命名空间和逻辑页名。返回 void，表示已发起发送，服务器不会收到页面是否存在的确认。 |
| `openGuideOnClientWithoutLanguageCode` | 客户端传入逻辑页 ID 和面包屑列表，自动解析语言。解析失败返回 false。 |
| `openGuideOnClient` | 用已经定位的资源 ID 打开页面，例如 `field_guide:ageratum/en_us/index.md`。需要指定锚点时使用相应重载。 |

不要把 `ageratum/en_us/` 拼进服务端发送的逻辑页名。客户端处理这个包时会再拼手册根目录和语言，导致文件明明存在却找不到。命令从控制台执行时没有玩家，`getPlayerOrException()` 会经 Brigadier 将错误反馈给命令源。

[服务端入口](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java) · [客户端接包](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java)
