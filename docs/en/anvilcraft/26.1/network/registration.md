# Registering Payloads and Defining Their Encoding

AnvilCraft uses AnvilLib's network registrar. During mod construction it adds a listener to the mod event bus. On `RegisterPayloadHandlersEvent`, the listener obtains the protocol registrar with `event.registrar("2")` and calls `NetworkRegistrar.register(registrar, "anvilcraft")`. The package containing AnvilCraft's payloads has a `@Network` annotation in `package-info.java`. [Registration call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L184) · [Package annotation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/package-info.java#L1)

Suppose the `pressconsole` add-on has a debug panel with a button that displays the player's current block coordinates. Register the add-on's protocol version and namespace in its mod entry point. In `dev/example/pressconsole/network/package-info.java`, write the full package declaration `@dev.anvilcraft.lib.v2.network.register.Network package dev.example.pressconsole.network;`. Place each of the following classes in the package it declares.

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

When the player clicks the button, the client calls `ClientPacketDistributor.sendToServer(new ShowPosition(true))`. The server reads the coordinates from the player who sent the request. AnvilCraft's automatic enchanting table button similarly sends the selected level to the server for processing. [Enchanting table button handler](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L619)

| Declaration or call | Purpose | Usage notes |
| --- | --- | --- |
| `IPacket.type(Identifier)`, `type()` | Defines the protocol ID. Each instance returns the same type. | Use the add-on's own namespace and keep the ID stable across releases. |
| `STREAM_CODEC` | Defines each field's encoding, read order, and the constructor used for decoding. | `ByteBufCodecs.INT` and `VAR_INT` use different encodings. Review protocol compatibility when changing field order, field types, or enum order. |
| `IServerboundPacket`, `IClientboundPacket` | Handle payloads sent to the server and client respectively. | Access client-side rendering code only on the client handling path. |
| `ISensitiveBiPacket` | Supports sending the same data in both directions. | The server validates the request and the client receives the confirmed value. The filter menu uses this pattern. |

[Enchanting table payload codec](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/AutoEnchantingTableLevelPacket.java#L12) · [Screen shake payload codec](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L49)
