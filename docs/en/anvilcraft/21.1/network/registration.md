# Registering Your Own Queries

When adding a "Check remaining search ticks" button to a debug screen, you can send the position to your own server-side handler. Below is a complete payload ready to drop into an add-on mod: call `SearchStatusQuery.register(modBus)` in the mod constructor, and have the client button call `PacketDistributor.sendToServer(new SearchStatusQuery(pos))`. The example displays the result via a system message so no client response packet type is needed.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.block.entity.CelestialForgingAnvilBlockEntity;
import io.netty.buffer.ByteBuf;
import net.minecraft.core.BlockPos;
import net.minecraft.network.chat.Component;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.network.protocol.common.custom.CustomPacketPayload;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.network.event.RegisterPayloadHandlersEvent;
import net.neoforged.neoforge.network.handling.IPayloadContext;

public record SearchStatusQuery(BlockPos pos) implements CustomPacketPayload {
    public static final Type<SearchStatusQuery> TYPE =
        new Type<>(ResourceLocation.fromNamespaceAndPath("workshop", "search_status"));
    public static final StreamCodec<ByteBuf, SearchStatusQuery> CODEC =
        BlockPos.STREAM_CODEC.map(SearchStatusQuery::new, SearchStatusQuery::pos);

    public static void register(IEventBus bus) {
        bus.addListener(SearchStatusQuery::registerPayload);
    }

    private static void registerPayload(RegisterPayloadHandlersEvent event) {
        event.registrar("1").playToServer(TYPE, CODEC, SearchStatusQuery::handle);
    }

    private static void handle(SearchStatusQuery packet, IPayloadContext context) {
        context.enqueueWork(() -> {
            if (!(context.player() instanceof ServerPlayer player)) return;
            BlockPos target = packet.pos();
            if (player.blockPosition().distSqr(target) > 64 || !player.serverLevel().isLoaded(target)) return;
            if (player.serverLevel().getBlockEntity(target) instanceof CelestialForgingAnvilBlockEntity anvil) {
                player.sendSystemMessage(Component.literal("Remaining search ticks: " + anvil.getSearchTicksRemaining()));
            }
        });
    }

    @Override
    public Type<SearchStatusQuery> type() {
        return TYPE;
    }
}
```

| API | Selection Rationale |
| --- | --- |
| `Type<SearchStatusQuery>` | Both sides must register the same resource ID using your mod's own namespace. |
| `BlockPos.STREAM_CODEC.map` | Serializes a single `BlockPos` on the wire. The first function constructs the packet after decoding; the second extracts the position before encoding. |
| `playToServer(type, codec, handler)` | Restricts this type to client-to-server queries. `event.registrar("1")` versions this add-on protocol. |
| `context.enqueueWork` | Dispatches world and block entity access onto the logical server thread. The example looks up in the player's current dimension, with squared distance capped at `64` (8 blocks). |

[AnvilCraft registration timing](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java) · [Built-in read-only query receiver example](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java)
