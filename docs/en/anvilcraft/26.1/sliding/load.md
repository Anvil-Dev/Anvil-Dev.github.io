# Handling Extra Structures and Payloads

The expansion phase can append attached blocks to an already-resolved structure. Returning `false` from `expand` aborts that expansion. When debugging large structures, verify the resolution result first, then inspect the block lists held by sections and payload objects.

## Example in Source

Take `SlidingEntitySyncPacket` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.network;

import dev.anvilcraft.lib.v2.network.packet.IClientboundPacket;
import dev.anvilcraft.lib.v2.network.packet.IPacket;
import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.sliding.SlidingBlockInfo;
import dev.dubhe.anvilcraft.api.sliding.SlidingBlockSection;
import dev.dubhe.anvilcraft.entity.SlidingBlockEntity;
import net.minecraft.core.Direction;
import net.minecraft.network.RegistryFriendlyByteBuf;
import net.minecraft.network.codec.ByteBufCodecs;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.world.entity.player.Player;

import java.util.List;

public record SlidingEntitySyncPacket(int id, List<SlidingBlockInfo> infos, Direction moveDirection) implements IClientboundPacket {
    public static final Type<SlidingEntitySyncPacket> TYPE = IPacket.type(AnvilCraft.of("sliding_entity_sync"));
    public static final StreamCodec<RegistryFriendlyByteBuf, SlidingEntitySyncPacket> STREAM_CODEC = StreamCodec.composite(
        ByteBufCodecs.VAR_INT,
        SlidingEntitySyncPacket::id,
        SlidingBlockInfo.STREAM_CODEC.apply(ByteBufCodecs.list()),
        SlidingEntitySyncPacket::infos,
        Direction.STREAM_CODEC,
        SlidingEntitySyncPacket::moveDirection,
        SlidingEntitySyncPacket::new
    );

    @Override
    public Type<SlidingEntitySyncPacket> type() {
        return SlidingEntitySyncPacket.TYPE;
    }

    @Override
    public void handleOnClient(Player player) {
        if (!(player.level().getEntity(this.id) instanceof SlidingBlockEntity sliding)) return;
        sliding.setSection(new SlidingBlockSection(this.infos));
        sliding.setMoveDirection(this.moveDirection);
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java)

- [`DetectorSlidingRailBlockEntity` · Line 25](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/DetectorSlidingRailBlockEntity.java#L25)
- [`ISlidingRail` · Line 117](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/sliding/ISlidingRail.java#L117)
- [`SlidingRailStopBlock` · Line 97](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/sliding/SlidingRailStopBlock.java#L97)
- [`PistonStructureResolverMixin` · Line 53](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/PistonStructureResolverMixin.java#L53)
- [`DynamicBuildingEntities` · Line 36](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/DynamicBuildingEntities.java#L36)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `SlidingBlockStructureResolver` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java) |
| `SlidingBlockSection` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java) |
| `SlidingRailLoad` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingRailLoad.java) |

<!-- source-guide -->
