# 处理额外结构和载荷

扩展阶段可以向已解析的结构追加附着方块。expand 返回 false 就中止这次扩展。调试大型结构时先核对解析结果，再查区段与负载对象持有的方块清单。

## 源码中的用例

以本分支的 `SlidingEntitySyncPacket` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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
        return TYPE;
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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/SlidingEntitySyncPacket.java)

- [`ISlidingRail` · 第 125 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/sliding/ISlidingRail.java#L125)
- [`SlidingRailStopBlock` · 第 102 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/sliding/SlidingRailStopBlock.java#L102)
- [`PistonStructureResolverMixin` · 第 53 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/PistonStructureResolverMixin.java#L53)
- [`DynamicBuildingEntities` · 第 38 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/DynamicBuildingEntities.java#L38)
- [`SlidingBlockEntity` · 第 58 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L58)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `SlidingBlockStructureResolver` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockStructureResolver.java) |
| `SlidingBlockSection` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingBlockSection.java) |
| `SlidingRailLoad` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/sliding/SlidingRailLoad.java) |
