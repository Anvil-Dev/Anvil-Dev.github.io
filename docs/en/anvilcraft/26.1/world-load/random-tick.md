# Locating Random Tick Processing

Chunks are registered by dimension and source position. A random tick query checks the sources for the chunk and returns `true` as soon as one source requests a skip. Removing the last source clears the chunk's registration.

## Example in Source

The following example shows `OverseerSyncPacket` from this branch. Compile it in the upstream project under its original package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.network;

import dev.anvilcraft.lib.v2.network.packet.IClientboundPacket;
import dev.anvilcraft.lib.v2.network.packet.IPacket;
import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.world.load.LoadChunkData;
import dev.dubhe.anvilcraft.client.overseer.OverseerMapData;
import net.minecraft.core.BlockPos;
import net.minecraft.core.registries.Registries;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.ChunkPos;
import net.minecraft.world.level.Level;

import java.util.HashMap;
import java.util.Map;

/** An empty chunk map removes the source; other updates replace that source's loaded chunks. */
public record OverseerSyncPacket(ResourceKey<Level> dimension, BlockPos source, Map<Long, Integer> chunks)
    implements IClientboundPacket {
    public static final Type<OverseerSyncPacket> TYPE = IPacket.type(AnvilCraft.of("overseer_sync"));
    public static final StreamCodec<FriendlyByteBuf, OverseerSyncPacket> STREAM_CODEC = new StreamCodec<>() {
        @Override
        public OverseerSyncPacket decode(FriendlyByteBuf buffer) {
            ResourceKey<Level> dimension = buffer.readResourceKey(Registries.DIMENSION);
            BlockPos source = BlockPos.STREAM_CODEC.decode(buffer);
            int count = buffer.readVarInt();
            if (count < 0 || count > 81) throw new IllegalArgumentException("Invalid overseer chunk count: " + count);
            Map<Long, Integer> chunks = new HashMap<>();
            for (int i = 0; i < count; i++) {
                chunks.put(buffer.readLong(), (int) buffer.readUnsignedByte());
            }
            return new OverseerSyncPacket(dimension, source, Map.copyOf(chunks));
        }

        @Override
        public void encode(FriendlyByteBuf buffer, OverseerSyncPacket packet) {
            buffer.writeResourceKey(packet.dimension());
            BlockPos.STREAM_CODEC.encode(buffer, packet.source());
            buffer.writeVarInt(packet.chunks().size());
            packet.chunks().forEach((chunk, flags) -> {
                buffer.writeLong(chunk);
                buffer.writeByte(flags);
            });
        }
    };

    public static OverseerSyncPacket of(LoadChunkData data) {
        Map<Long, Integer> chunks = new HashMap<>();
        for (ChunkPos chunk : data.getChunkPosList()) {
            int flags = 0;
            if (data.shouldSkipRandomTick(chunk)) flags |= LoadChunkData.SourceFlags.NO_RANDOM_TICK;
            if (data.shouldAllowFireSpread(chunk)) flags |= LoadChunkData.SourceFlags.ALLOW_FIRE_SPREAD;
            if (data.shouldAllowNaturalSpawn(chunk)) flags |= LoadChunkData.SourceFlags.ALLOW_NATURAL_SPAWN;
            if (data.shouldAllowSpawnerSpawn(chunk)) flags |= LoadChunkData.SourceFlags.ALLOW_SPAWNER_SPAWN;
            chunks.put(chunk.pack(), flags);
        }
        return new OverseerSyncPacket(data.getServerLevel().dimension(), data.getCenterPos(), Map.copyOf(chunks));
    }

    @Override
    public Type<OverseerSyncPacket> type() {
        return TYPE;
    }

    @Override
    public void handleOnClient(Player player) {
        OverseerMapData.update(this);
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/OverseerSyncPacket.java)

- [`BaseSpawnerMixin` · line 24](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/BaseSpawnerMixin.java#L24)
- [`ChunkMapMixin` · line 27](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ChunkMapMixin.java#L27)
- [`DistanceManagerMixin` · line 26](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/DistanceManagerMixin.java#L26)
- [`MobCategoryMixin` · line 22](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MobCategoryMixin.java#L22)
- [`MobMixin` · line 27](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/MobMixin.java#L27)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ChunkFeatureManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/world/load/ChunkFeatureManager.java) |
| `LoadChunkData` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/world/load/LoadChunkData.java) |

<!-- source-guide -->
