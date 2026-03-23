---
prev:
   text: Integration 集成模块
   link: /posts/docs/anvillib/03_integration
next:
   text: Recipe 世界内配方模块
   link: /posts/docs/anvillib/05_recipe
---

# Network 网络模块

Network 模块提供了面向 NeoForge 的**网络包自动注册**框架，通过注解和接口约定，免去手动逐一注册每个数据包的繁琐工作。

## 一、核心接口

所有网络包必须实现 `IPacket` 的某个子接口，以声明数据包的传输方向：

| 接口                     | 说明                     |
|------------------------|------------------------|
| `IClientboundPacket`   | 服务端 → 客户端（Clientbound） |
| `IServerboundPacket`   | 客户端 → 服务端（Serverbound） |
| `IInsensitiveBiPacket` | 双向，两端共用同一套处理逻辑（方向不敏感）  |
| `ISensitiveBiPacket`   | 双向，两端各自有独立的处理逻辑（方向敏感）  |

### `IClientboundPacket`

```java
public interface IClientboundPacket extends IPacket {
    /**
     * 在客户端执行的逻辑
     * @param player 始终为 LocalPlayer
     */
    void handleOnClient(Player player);
}
```

### `IServerboundPacket`

```java
public interface IServerboundPacket extends IPacket {
    /**
     * 在服务端执行的逻辑
     * @param player 始终为 ServerPlayer
     */
    void handleOnServer(Player player);
}
```

### `IInsensitiveBiPacket`（双向，共用逻辑）

```java
public interface IInsensitiveBiPacket extends IClientboundPacket, IServerboundPacket {
    /**
     * 客户端和服务端均执行的同一套逻辑
     */
    void handleOnBothSide(Player player);
}
```

### `ISensitiveBiPacket`（双向，各自逻辑）

```java
public interface ISensitiveBiPacket extends IClientboundPacket, IServerboundPacket {
    // 分别实现 handleOnClient 和 handleOnServer 即可
}
```

## 二、`@Network` 注解

`@Network` 注解作用于 **`package-info.java`** 文件，标记整个包为网络包包（扫描单位），并指定包内所有数据包使用的协议通道。

```java
// src/.../network/play/package-info.java
@Network(protocol = PacketProtocol.PLAY)
package com.example.mymod.network.play;

import dev.anvilcraft.lib.v2.network.register.Network;
import dev.anvilcraft.lib.v2.network.register.PacketProtocol;
```

| `PacketProtocol` 枚举值 | 对应 NeoForge 通道 |
|----------------------|----------------|
| `PLAY`（默认）           | 游戏阶段通信         |
| `CONFIGURATION`      | 连接配置阶段通信       |
| `COMMON`             | 两个阶段均可通信       |

## 三、`NetworkRegistrar` 注册

在 `RegisterPayloadHandlersEvent` 事件处理器中调用：

```java
NetworkRegistrar.register(PayloadRegistrar registrar, String modId)
```

该方法会：

1. 扫描 `modId` 对应模组 JAR 中所有标注了 `@Network` 的包；
2. 查找包内实现了 `IPacket` 子接口的类；
3. 自动根据接口类型（Clientbound / Serverbound / Bidirectional）完成注册。

## 四、完整示例

### 1. 创建网络包

以下以一个**客户端同步数据**的包为例。

```java
// 包：com.example.mymod.network.play
package com.example.mymod.network.play;

import dev.anvilcraft.lib.v2.network.packet.IClientboundPacket;
import net.minecraft.network.FriendlyByteBuf;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.network.protocol.common.custom.CustomPacketPayload;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;

public record SyncDataPacket(int value) implements IClientboundPacket {

    public static final Type<SyncDataPacket> TYPE =
        new Type<>(ResourceLocation.fromNamespaceAndPath("my_mod", "sync_data"));

    public static final StreamCodec<FriendlyByteBuf, SyncDataPacket> STREAM_CODEC =
        StreamCodec.composite(
            ByteBufCodecs.INT, SyncDataPacket::value,
            SyncDataPacket::new
        );

    @Override
    public Type<? extends CustomPacketPayload> type() {
        return TYPE;
    }

    @Override
    public void handleOnClient(Player player) {
        // 在客户端线程安全地处理数据
        ClientData.value = this.value;
    }
}
```

### 2. 标注包

在同一包下创建 `package-info.java`：

```java
@Network(protocol = PacketProtocol.PLAY)
package com.example.mymod.network.play;

import dev.anvilcraft.lib.v2.network.register.Network;
import dev.anvilcraft.lib.v2.network.register.PacketProtocol;
```

### 3. 注册所有包

```java
import dev.anvilcraft.lib.v2.network.register.NetworkRegistrar;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.network.event.RegisterPayloadHandlersEvent;

@EventBusSubscriber(modid = "my_mod", bus = EventBusSubscriber.Bus.MOD)
public class MyModNetworking {

    @SubscribeEvent
    public static void onRegisterPayload(RegisterPayloadHandlersEvent event) {
        // "1" 为协议版本号
        var registrar = event.registrar("1");
        NetworkRegistrar.register(registrar, "my_mod");
    }
}
```

### 4. 发送数据包

```java
// 服务端向特定客户端发送
PacketDistributor.sendToPlayer(serverPlayer, new SyncDataPacket(42));

// 服务端广播给所有玩家
PacketDistributor.sendToAllPlayers(new SyncDataPacket(42));

// 客户端向服务端发送
PacketDistributor.sendToServer(new MyServerboundPacket());
```

## 五、双向包示例

```java
// 双向，方向不敏感（两端逻辑相同）
public record PingPacket(long timestamp) implements IInsensitiveBiPacket {

    public static final Type<PingPacket> TYPE = ...;
    public static final StreamCodec<FriendlyByteBuf, PingPacket> STREAM_CODEC = ...;

    @Override
    public Type<? extends CustomPacketPayload> type() { return TYPE; }

    @Override
    public void handleOnBothSide(Player player) {
        System.out.println("Ping received at: " + this.timestamp);
    }
}
```

```java
// 双向，方向敏感（两端逻辑不同）
public record UpdatePacket(String data) implements ISensitiveBiPacket {

    @Override
    public void handleOnClient(Player player) {
        // 客户端处理
    }

    @Override
    public void handleOnServer(Player player) {
        // 服务端处理
    }
}
```

## 六、注意事项

- 每个网络包类**必须**声明静态的 `TYPE`（`CustomPacketPayload.Type`）和 `STREAM_CODEC` 字段，`NetworkRegistrar` 通过反射读取它们；
- `handleOnClient`、 `handleOnServer` 和 `handleOnBothSide` 的回调默认会通过 `ctx.enqueueWork()` 在主线程执行，无需手动排队；
- 建议为不同 `PacketProtocol` 的包分别建立子包（如 `network.play`、`network.configuration`）并各自添加 `@Network` 注解；
- `NetworkRegistrar.register` 仅扫描同一 JAR 内的类，跨模组包不会被扫描。

