---
prev:
   text: Integration Module
   link: /en/posts/docs/anvillib/03_integration
next:
   text: Recipe Module (In-World Recipe)
   link: /en/posts/docs/anvillib/05_recipe
---

# Network Module

The Network module provides a **NeoForge networking abstraction with automatic packet registration**. By using
annotations and interface conventions, it eliminates the need to manually register each packet individually.

## I. Core Interfaces

All network packets must implement one of the sub-interfaces of `IPacket` to declare their transmission direction:

| Interface              | Description                                                    |
|------------------------|----------------------------------------------------------------|
| `IClientboundPacket`   | Server → Client (Clientbound)                                  |
| `IServerboundPacket`   | Client → Server (Serverbound)                                  |
| `IInsensitiveBiPacket` | Bidirectional, both sides share the same handler logic         |
| `ISensitiveBiPacket`   | Bidirectional, each side has its own independent handler logic |

### `IClientboundPacket`

```java
public interface IClientboundPacket extends IPacket {
    /**
     * Logic executed on the client
     * @param player Always a LocalPlayer on the client
     */
    void handleOnClient(Player player);
}
```

### `IServerboundPacket`

```java
public interface IServerboundPacket extends IPacket {
    /**
     * Logic executed on the server
     * @param player Always a ServerPlayer on the server
     */
    void handleOnServer(Player player);
}
```

### `IInsensitiveBiPacket` (Bidirectional, shared logic)

```java
public interface IInsensitiveBiPacket extends IClientboundPacket, IServerboundPacket {
    /**
     * Same logic executed on both client and server
     */
    void handleOnBothSide(Player player);
}
```

### `ISensitiveBiPacket` (Bidirectional, direction-sensitive)

```java
public interface ISensitiveBiPacket extends IClientboundPacket, IServerboundPacket {
    // Implement handleOnClient and handleOnServer separately
}
```

## II. `@Network` Annotation

The `@Network` annotation is applied to a **`package-info.java`** file to mark an entire package as a network packet
package (the unit of scanning) and specify the protocol channel for all packets in that package.

```java
// src/.../network/play/package-info.java
@Network(protocol = PacketProtocol.PLAY)
package com.example.mymod.network.play;

import dev.anvilcraft.lib.v2.network.register.Network;
import dev.anvilcraft.lib.v2.network.register.PacketProtocol;
```

| `PacketProtocol` Value | NeoForge Channel               |
|------------------------|--------------------------------|
| `PLAY` (default)       | In-game communication          |
| `CONFIGURATION`        | Connection configuration phase |
| `COMMON`               | Both phases                    |

## III. Registering with `NetworkRegistrar`

Call in your `RegisterPayloadHandlersEvent` listener:

```java
NetworkRegistrar.register(PayloadRegistrar registrar, String modId)
```

This method will:

1. Scan all packages in the mod JAR annotated with `@Network`;
2. Find classes in those packages that implement an `IPacket` sub-interface;
3. Automatically register each packet according to its direction (Clientbound / Serverbound / Bidirectional).

## IV. Full Example

### 1. Create a Packet

Here is a **clientbound data sync** packet:

```java
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
        // Safely handle data on the client main thread
        ClientData.value = this.value;
    }
}
```

### 2. Annotate the Package

Create `package-info.java` in the same package:

```java
@Network(protocol = PacketProtocol.PLAY)
package com.example.mymod.network.play;

import dev.anvilcraft.lib.v2.network.register.Network;
import dev.anvilcraft.lib.v2.network.register.PacketProtocol;
```

### 3. Register All Packets

```java
import dev.anvilcraft.lib.v2.network.register.NetworkRegistrar;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.network.event.RegisterPayloadHandlersEvent;

@EventBusSubscriber(modid = "my_mod", bus = EventBusSubscriber.Bus.MOD)
public class MyModNetworking {

    @SubscribeEvent
    public static void onRegisterPayload(RegisterPayloadHandlersEvent event) {
        // "1" is the protocol version string
        var registrar = event.registrar("1");
        NetworkRegistrar.register(registrar, "my_mod");
    }
}
```

### 4. Sending Packets

```java
// Server → specific client
PacketDistributor.sendToPlayer(serverPlayer, new SyncDataPacket(42));

// Server → all clients
PacketDistributor.sendToAllPlayers(new SyncDataPacket(42));

// Client → server
PacketDistributor.sendToServer(new MyServerboundPacket());
```

## V. Bidirectional Packet Examples

```java
// Bidirectional, direction-insensitive (same logic on both sides)
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
// Bidirectional, direction-sensitive (different logic per side)
public record UpdatePacket(String data) implements ISensitiveBiPacket {

    @Override
    public void handleOnClient(Player player) {
        // Client-side handling
    }

    @Override
    public void handleOnServer(Player player) {
        // Server-side handling
    }
}
```

## VI. Notes

- Each packet class **must** declare static `TYPE` (`CustomPacketPayload.Type`) and `STREAM_CODEC` fields —
  `NetworkRegistrar` reads them via reflection;
- `handleOnClient`, `handleOnServer` and `handleOnBothSide` callbacks are automatically dispatched to the main thread via
  `ctx.enqueueWork()` — no manual queuing needed;
- It is recommended to place packets for different `PacketProtocol` values in separate sub-packages (e.g.,
  `network.play`, `network.configuration`) each with their own `@Network` annotation;
- `NetworkRegistrar.register` only scans classes within the same JAR — cross-mod packages are not scanned.

