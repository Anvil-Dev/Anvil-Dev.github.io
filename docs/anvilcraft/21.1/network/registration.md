# 注册附属模组自己的查询

给调试界面加一个“查看搜索还剩几刻”的按钮时，可向自己的服务端处理器发送位置。下面是可直接加入附属模组的完整载荷，在构造函数里调用 `SearchStatusQuery.register(modBus)`，客户端按钮用 `PacketDistributor.sendToServer(new SearchStatusQuery(pos))`。示例直接用系统消息显示结果，无需再注册客户端响应类型。

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
                player.sendSystemMessage(Component.literal("搜索剩余刻数：" + anvil.getSearchTicksRemaining()));
            }
        });
    }

    @Override
    public Type<SearchStatusQuery> type() {
        return TYPE;
    }
}
```

| API | 选择依据 |
| --- | --- |
| `Type<SearchStatusQuery>` | 两端必须注册一致的资源 ID，使用自己的模组命名空间。 |
| `BlockPos.STREAM_CODEC.map` | 线上的字段为一个 `BlockPos`。第一个函数在解码后创建包，第二个函数在编码前取坐标。 |
| `playToServer(type, codec, handler)` | 将该类型限定为客户端到服务端的查询。`event.registrar("1")` 的版本用于这个附属协议。 |
| `context.enqueueWork` | 把访问当前世界与方块实体的工作交给逻辑线程。例中以玩家当前维度查找，距离平方上限 64 即八格。 |

[AnvilCraft 注册时机](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java) · [内置只读查询的接收端示例](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerRequestPacket.java)
