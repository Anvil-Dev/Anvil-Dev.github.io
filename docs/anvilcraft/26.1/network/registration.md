# 注册载荷和约定编码

铁砧工艺使用 AnvilLib 的网络注册器。模组构造期间将监听器挂在 mod 事件总线，收到 `RegisterPayloadHandlersEvent` 时通过 `event.registrar("2")` 取得本模组的协议注册器，再调用 `NetworkRegistrar.register(registrar, "anvilcraft")`。声明铁砧工艺载荷的包在 `package-info.java` 上使用了 `@Network`。[注册调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L184) · [包注解](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/package-info.java#L1)

假设附属模组的 mod ID 是 `pressconsole`，需要给调试面板发一个“显示当前方块坐标”的请求。模组入口注册自己的协议版本和命名空间。在 `dev/example/pressconsole/network/package-info.java` 中写入完整的包声明 `@dev.anvilcraft.lib.v2.network.register.Network package dev.example.pressconsole.network;`。将下列两个文件分别放入声明的包。

```java
package dev.example.pressconsole;

import dev.anvilcraft.lib.v2.network.register.NetworkRegistrar;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.network.event.RegisterPayloadHandlersEvent;

@Mod("pressconsole")
public final class PressConsole {
    public PressConsole(IEventBus modBus) {
        modBus.addListener(PressConsole::registerPayloads);
    }

    private static void registerPayloads(RegisterPayloadHandlersEvent event) {
        NetworkRegistrar.register(event.registrar("1"), "pressconsole");
    }
}
```

```java
package dev.example.pressconsole.network;

import dev.anvilcraft.lib.v2.network.packet.IPacket;
import dev.anvilcraft.lib.v2.network.packet.IServerboundPacket;
import io.netty.buffer.ByteBuf;
import net.minecraft.network.chat.Component;
import net.minecraft.network.codec.ByteBufCodecs;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.resources.Identifier;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.entity.player.Player;

public record ShowPosition(boolean overlay) implements IServerboundPacket {
    public static final Type<ShowPosition> TYPE =
        IPacket.type(Identifier.fromNamespaceAndPath("pressconsole", "show_position"));
    public static final StreamCodec<ByteBuf, ShowPosition> STREAM_CODEC =
        StreamCodec.composite(ByteBufCodecs.BOOL, ShowPosition::overlay, ShowPosition::new);

    @Override
    public Type<ShowPosition> type() {
        return TYPE;
    }

    @Override
    public void handleOnServer(Player player) {
        if (player instanceof ServerPlayer sender) {
            sender.sendSystemMessage(Component.literal(sender.blockPosition().toShortString()), overlay);
        }
    }
}
```

点击按钮时，客户端通过 `ClientPacketDistributor.sendToServer(new ShowPosition(true))` 发出请求。坐标取自收到请求的服务端玩家。实际附魔台按钮也将选定等级发送给服务端处理。[附魔台的发送点](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L619)

| 声明或调用 | 作用 | 易错处 |
| --- | --- | --- |
| `IPacket.type(Identifier)`、`type()` | 提供协议 ID，实例返回同一个类型 | 使用附属模组自己的命名空间。线上 ID 应保持稳定。 |
| `STREAM_CODEC` | 指定字段编码、读取顺序和构造函数 | `ByteBufCodecs.INT` 与 `VAR_INT` 是两种编码；调整字段顺序、类型或枚举顺序时应审查协议兼容性。 |
| `IServerboundPacket`、`IClientboundPacket` | 分别处理发向服务端、客户端的载荷 | 客户端视觉逻辑只能在对应的处理路径访问。 |
| `ISensitiveBiPacket` | 支持同一数据向两个方向传递 | 服务端需要检查请求，客户端接收服务端确认值。过滤菜单使用该模式。 |

[附魔台载荷的实际编码](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L12) · [震动包的实际编码](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L49)
