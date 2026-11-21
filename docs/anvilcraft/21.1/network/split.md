# 按收件人发送大型快照

数据带有物品、流体等注册表引用时，使用 `RegistryFriendlyByteBuf` 版本。服务端在逻辑线程上取好玩家和不可变快照，将两者交给下面的发送方法。相同的快照只需要发给打开界面的那名玩家。

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

| 参数与时机 | 说明 |
| --- | --- |
| `type`、`codec`、`payload` | 三者必须属于同一已注册协议，收件端按原始 ID、连接方向和连接协议选解码器。 |
| `RegistryAccess` | 注册表上下文。只有基础数值和字节的包也可选 `StreamCodec<? super FriendlyByteBuf,T>` 重载，省略此参数。 |
| `partSize` | 可选正整数，默认 1640 字节。编码后大小小于或等于它时直接发送原包，否则先发头部，再顺序发送分片。 |
| `Consumer<CustomPacketPayload> sender` | 每次调用发送一个片段或原包。工作在线程池中异步排队，`split` 返回 `void`，返回时数据可能尚未编码。 |

接收过程由 `PacketCollector` 按此次传输 UUID 和片序组合，收齐后重新通过 NeoForge 的原始载荷处理器分发。使用同一个目标连接发送一次调用产生的所有片段；准备数据时复制可能随游戏刻变化的集合或栈，使异步编码看到同一份状态。[分片重载](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/split/PacketSplitter.java) · [接收分发](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/split/PacketCollector.java) · [存档同步调用点](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/BetterSavedData.java)
