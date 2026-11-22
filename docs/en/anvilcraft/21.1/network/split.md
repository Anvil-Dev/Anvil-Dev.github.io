# Sending Large Snapshots per Recipient

When data contains registry references such as items or fluids, use the `RegistryFriendlyByteBuf` overload. On the logical server thread, obtain the player and an immutable snapshot, then pass both to the send method below. The same snapshot only needs to be sent to the player who opened the screen.

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.network.split.PacketSplitter;
import net.minecraft.network.RegistryFriendlyByteBuf;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.network.protocol.common.custom.CustomPacketPayload;
import net.minecraft.server.level.ServerPlayer;
import net.neoforged.neoforge.network.PacketDistributor;

public final class SnapshotDelivery {
    public static <T extends CustomPacketPayload> void send(
        ServerPlayer recipient,
        CustomPacketPayload.Type<T> type,
        StreamCodec<RegistryFriendlyByteBuf, T> codec,
        T snapshot
    ) {
        PacketSplitter.INSTANCE.split(type, codec, snapshot, recipient.registryAccess(),
            part -> PacketDistributor.sendToPlayer(recipient, part));
    }
}
```

| Parameter & Timing | Description |
| --- | --- |
| `type`, `codec`, `payload` | All three must belong to the same registered protocol; the receiver selects the decoder by raw ID, direction, and connection protocol. |
| `RegistryAccess` | Registry context. Packets with only primitives and bytes can use the `StreamCodec<? super FriendlyByteBuf, T>` overload and omit this parameter. |
| `partSize` | Optional positive integer, default `1640` bytes. If the encoded size is at or below this limit, the original packet is sent directly; otherwise a header is sent followed by chunks in order. |
| `Consumer<CustomPacketPayload> sender` | Called once per chunk or unsplit packet. Queued asynchronously on a thread pool; `split` returns `void`, and encoding may not have completed yet when it returns. |

On the receiving side, `PacketCollector` reassembles chunks by transfer UUID and chunk index, then dispatches the reassembled payload through NeoForge's original payload handler. Send all chunks from a single `split` call over the same target connection, and copy any collections or stacks that may mutate on game ticks when preparing data so async encoding sees a consistent state. [Split overloads](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java) · [Receive dispatch](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/split/PacketCollector.java) · [Save sync call site](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java)
