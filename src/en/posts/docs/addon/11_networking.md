# Networking

This chapter introduces how to implement client-server network communication in your Addon.

## Overview

NeoForge uses a Payload system for network communication. Main concepts include:

- **Payload** - Data packets to be transmitted over the network
- **StreamCodec** - Defines how to serialize/deserialize data
- **Handler** - Processing logic after receiving a packet
- **PayloadRegistrar** - Used for registering packets

## Creating Packets

### 1. Define Payload Class

```java
package com.example.myaddon.network;

import com.example.myaddon.MyAddon;
import net.minecraft.core.BlockPos;
import net.minecraft.network.RegistryFriendlyByteBuf;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.network.protocol.common.custom.CustomPacketPayload;
import net.neoforged.neoforge.network.handling.IPayloadContext;
import net.neoforged.neoforge.network.handling.IPayloadHandler;

public class CustomActionPacket implements CustomPacketPayload {
    
    // Define packet type identifier
    public static final Type<CustomActionPacket> TYPE = 
        new Type<>(MyAddon.of("custom_action"));
    
    // Define stream codec
    public static final StreamCodec<RegistryFriendlyByteBuf, CustomActionPacket> STREAM_CODEC =
        StreamCodec.ofMember(CustomActionPacket::encode, CustomActionPacket::new);
    
    // Define handler
    public static final IPayloadHandler<CustomActionPacket> HANDLER = CustomActionPacket::handle;
    
    // Data carried by the packet
    private final BlockPos pos;
    private final int actionType;
    
    // Constructor - for creating packets
    public CustomActionPacket(BlockPos pos, int actionType) {
        this.pos = pos;
        this.actionType = actionType;
    }
    
    // Decode constructor - reads data from network buffer
    public CustomActionPacket(RegistryFriendlyByteBuf buf) {
        this.pos = buf.readBlockPos();
        this.actionType = buf.readVarInt();
    }
    
    // Encode method - writes data to network buffer
    public void encode(RegistryFriendlyByteBuf buf) {
        buf.writeBlockPos(this.pos);
        buf.writeVarInt(this.actionType);
    }
    
    // Handle method - processing logic after receiving packet
    public static void handle(CustomActionPacket packet, IPayloadContext context) {
        // Execute handling logic on main thread
        context.enqueueWork(() -> {
            // Execute different logic based on packet direction
            if (context.flow().isServerbound()) {
                // Server-side handling
                handleOnServer(packet, context);
            } else {
                // Client-side handling
                handleOnClient(packet, context);
            }
        });
    }
    
    private static void handleOnServer(CustomActionPacket packet, IPayloadContext context) {
        var player = context.player();
        var level = player.level();
        // Server-side processing logic
    }
    
    private static void handleOnClient(CustomActionPacket packet, IPayloadContext context) {
        // Client-side processing logic
    }
    
    @Override
    public Type<? extends CustomPacketPayload> type() {
        return TYPE;
    }
}
```

### 2. Register Packets

Create a network registration class:

```java
package com.example.myaddon.init;

import com.example.myaddon.network.CustomActionPacket;
import com.example.myaddon.network.SyncDataPacket;
import com.example.myaddon.network.ClientRequestPacket;
import net.neoforged.neoforge.network.registration.PayloadRegistrar;

public class ModNetworks {
    
    public static void init(PayloadRegistrar registrar) {
        // Bidirectional packet (both client and server can send and receive)
        registrar.playBidirectional(
            CustomActionPacket.TYPE,
            CustomActionPacket.STREAM_CODEC,
            CustomActionPacket.HANDLER
        );
        
        // Server to client packet
        registrar.playToClient(
            SyncDataPacket.TYPE,
            SyncDataPacket.STREAM_CODEC,
            SyncDataPacket.HANDLER
        );
        
        // Client to server packet
        registrar.playToServer(
            ClientRequestPacket.TYPE,
            ClientRequestPacket.STREAM_CODEC,
            ClientRequestPacket.HANDLER
        );
    }
}
```

### 3. Register in Main Class

```java
@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public static final String MOD_ID = "myaddon";
    
    public MyAddon(IEventBus modEventBus) {
        // Register network handler event
        modEventBus.addListener(this::registerPayloads);
    }
    
    private void registerPayloads(RegisterPayloadHandlersEvent event) {
        // Create versioned registrar
        PayloadRegistrar registrar = event.registrar("1");
        ModNetworks.init(registrar);
    }
}
```

## Sending Packets

### Client to Server

```java
// In client code
PacketDistributor.sendToServer(new CustomActionPacket(pos, 1));
```

### Server to Client

```java
// Send to specific player
ServerPlayer player = ...;
PacketDistributor.sendToPlayer(player, new SyncDataPacket(data));

// Send to all players
PacketDistributor.sendToAllPlayers(new SyncDataPacket(data));

// Send to chunk trackers
BlockPos pos = ...;
ServerLevel level = ...;
PacketDistributor.sendToPlayersTrackingChunk(level, pos, new SyncDataPacket(data));

// Send to nearby players
PacketDistributor.sendToPlayersNear(level, null, pos.getX(), pos.getY(), pos.getZ(), 64, new SyncDataPacket(data));
```

## Data Type Encoding/Decoding

### Basic Types

```java
// Write
buf.writeBoolean(value);
buf.writeInt(value);
buf.writeLong(value);
buf.writeFloat(value);
buf.writeDouble(value);
buf.writeVarInt(value);        // Variable-length integer, saves space
buf.writeVarLong(value);

// Read
boolean b = buf.readBoolean();
int i = buf.readInt();
long l = buf.readLong();
float f = buf.readFloat();
double d = buf.readDouble();
int vi = buf.readVarInt();
long vl = buf.readVarLong();
```

### Strings

```java
// Write
buf.writeUtf(string);
buf.writeUtf(string, maxLength);

// Read
String s = buf.readUtf();
String s = buf.readUtf(maxLength);
```

### Minecraft Types

```java
// BlockPos
buf.writeBlockPos(pos);
BlockPos pos = buf.readBlockPos();

// ItemStack
ItemStack.STREAM_CODEC.encode(buf, stack);
ItemStack stack = ItemStack.STREAM_CODEC.decode(buf);

// Enum
buf.writeEnum(MyEnum.VALUE);
MyEnum value = buf.readEnum(MyEnum.class);

// UUID
buf.writeUUID(uuid);
UUID uuid = buf.readUUID();

// ResourceLocation
buf.writeResourceLocation(location);
ResourceLocation loc = buf.readResourceLocation();

// Component (text component)
ComponentSerialization.STREAM_CODEC.encode(buf, component);
Component comp = ComponentSerialization.STREAM_CODEC.decode(buf);

// NBT
buf.writeNbt(tag);
CompoundTag tag = buf.readNbt();

// BlockHitResult
buf.writeBlockHitResult(result);
BlockHitResult result = buf.readBlockHitResult();
```

### Collection Types

```java
// Lists
public void encode(RegistryFriendlyByteBuf buf) {
    buf.writeVarInt(items.size());
    for (ItemStack item : items) {
        ItemStack.STREAM_CODEC.encode(buf, item);
    }
}

public MyPacket(RegistryFriendlyByteBuf buf) {
    int size = buf.readVarInt();
    this.items = new ArrayList<>(size);
    for (int i = 0; i < size; i++) {
        items.add(ItemStack.STREAM_CODEC.decode(buf));
    }
}

// Optional values
buf.writeOptional(Optional.ofNullable(value), (b, v) -> b.writeUtf(v));
Optional<String> opt = buf.readOptional(RegistryFriendlyByteBuf::readUtf);
```

## Using StreamCodec

NeoForge provides a more elegant StreamCodec API:

```java
public class ComplexDataPacket implements CustomPacketPayload {
    public static final Type<ComplexDataPacket> TYPE = new Type<>(MyAddon.of("complex_data"));
    
    // Using StreamCodec composite
    public static final StreamCodec<RegistryFriendlyByteBuf, ComplexDataPacket> STREAM_CODEC =
        StreamCodec.composite(
            ByteBufCodecs.VAR_INT, ComplexDataPacket::getId,
            ByteBufCodecs.STRING_UTF8, ComplexDataPacket::getName,
            BlockPos.STREAM_CODEC, ComplexDataPacket::getPos,
            ItemStack.OPTIONAL_STREAM_CODEC, ComplexDataPacket::getStack,
            ComplexDataPacket::new
        );
    
    private final int id;
    private final String name;
    private final BlockPos pos;
    private final ItemStack stack;
    
    public ComplexDataPacket(int id, String name, BlockPos pos, ItemStack stack) {
        this.id = id;
        this.name = name;
        this.pos = pos;
        this.stack = stack;
    }
    
    public int getId() { return id; }
    public String getName() { return name; }
    public BlockPos getPos() { return pos; }
    public ItemStack getStack() { return stack; }
    
    @Override
    public Type<? extends CustomPacketPayload> type() {
        return TYPE;
    }
}
```

## Complete Examples

### Block Entity Sync Packet

```java
// SyncBlockEntityPacket.java
public class SyncBlockEntityPacket implements CustomPacketPayload {
    public static final Type<SyncBlockEntityPacket> TYPE = new Type<>(MyAddon.of("sync_be"));
    
    public static final StreamCodec<RegistryFriendlyByteBuf, SyncBlockEntityPacket> STREAM_CODEC =
        StreamCodec.ofMember(SyncBlockEntityPacket::encode, SyncBlockEntityPacket::new);
    
    public static final IPayloadHandler<SyncBlockEntityPacket> HANDLER = (packet, context) -> {
        context.enqueueWork(() -> {
            var mc = Minecraft.getInstance();
            var level = mc.level;
            if (level != null) {
                var be = level.getBlockEntity(packet.pos);
                if (be instanceof CustomBlockEntity customBe) {
                    customBe.setEnergy(packet.energy);
                    customBe.setProcessTime(packet.processTime);
                }
            }
        });
    };
    
    private final BlockPos pos;
    private final int energy;
    private final int processTime;
    
    public SyncBlockEntityPacket(BlockPos pos, int energy, int processTime) {
        this.pos = pos;
        this.energy = energy;
        this.processTime = processTime;
    }
    
    public SyncBlockEntityPacket(RegistryFriendlyByteBuf buf) {
        this.pos = buf.readBlockPos();
        this.energy = buf.readVarInt();
        this.processTime = buf.readVarInt();
    }
    
    public void encode(RegistryFriendlyByteBuf buf) {
        buf.writeBlockPos(pos);
        buf.writeVarInt(energy);
        buf.writeVarInt(processTime);
    }
    
    @Override
    public Type<? extends CustomPacketPayload> type() {
        return TYPE;
    }
}
```

### Syncing in Block Entity

```java
public class CustomBlockEntity extends BlockEntity {
    private int energy;
    private int processTime;
    
    public void tick() {
        if (!level.isClientSide) {
            // Processing logic...
            
            // Sync to clients
            syncToClients();
        }
    }
    
    private void syncToClients() {
        if (level instanceof ServerLevel serverLevel) {
            var packet = new SyncBlockEntityPacket(worldPosition, energy, processTime);
            PacketDistributor.sendToPlayersTrackingChunk(
                serverLevel, 
                new ChunkPos(worldPosition), 
                packet
            );
        }
    }
    
    // Update data from packet
    public void setEnergy(int energy) {
        this.energy = energy;
    }
    
    public void setProcessTime(int processTime) {
        this.processTime = processTime;
    }
}
```

### Client Request Packet

```java
// RequestActionPacket.java - Client requests server to perform action
public class RequestActionPacket implements CustomPacketPayload {
    public static final Type<RequestActionPacket> TYPE = new Type<>(MyAddon.of("request_action"));
    
    public static final StreamCodec<RegistryFriendlyByteBuf, RequestActionPacket> STREAM_CODEC =
        StreamCodec.ofMember(RequestActionPacket::encode, RequestActionPacket::new);
    
    public static final IPayloadHandler<RequestActionPacket> HANDLER = (packet, context) -> {
        context.enqueueWork(() -> {
            ServerPlayer player = (ServerPlayer) context.player();
            ServerLevel level = player.serverLevel();
            
            // Validate player permissions
            if (!canPlayerPerformAction(player, packet.pos)) {
                return;
            }
            
            // Perform action
            performAction(level, packet.pos, packet.actionId);
            
            // Send response
            PacketDistributor.sendToPlayer(player, new ActionResponsePacket(true));
        });
    };
    
    private final BlockPos pos;
    private final int actionId;
    
    public RequestActionPacket(BlockPos pos, int actionId) {
        this.pos = pos;
        this.actionId = actionId;
    }
    
    public RequestActionPacket(RegistryFriendlyByteBuf buf) {
        this.pos = buf.readBlockPos();
        this.actionId = buf.readVarInt();
    }
    
    public void encode(RegistryFriendlyByteBuf buf) {
        buf.writeBlockPos(pos);
        buf.writeVarInt(actionId);
    }
    
    @Override
    public Type<? extends CustomPacketPayload> type() {
        return TYPE;
    }
    
    private static boolean canPlayerPerformAction(ServerPlayer player, BlockPos pos) {
        // Permission checking logic
        return true;
    }
    
    private static void performAction(ServerLevel level, BlockPos pos, int actionId) {
        // Action execution logic
    }
}
```

## Packet Direction

| Method | Direction | Use Case |
|--------|-----------|----------|
| `playToServer` | Client → Server | Player action requests, GUI interactions |
| `playToClient` | Server → Client | Data sync, state updates |
| `playBidirectional` | Bidirectional | Features needing two-way communication |

## Best Practices

1. **Data Validation**
   - Server must validate all data sent by client
   - Never trust any information sent by clients

2. **Thread Safety**
   - Use `context.enqueueWork()` to execute game logic on main thread
   - Don't modify game state directly on network thread

3. **Data Volume Control**
   - Only send necessary data
   - Consider splitting packets for large data

4. **Error Handling**
   - Catch exceptions when handling packets
   - Log errors for debugging

5. **Version Compatibility**
   - Use versioned registrar
   - Consider forward/backward compatibility

```java
// Versioned registration
PayloadRegistrar registrar = event.registrar("1")
    .optional();  // Mark as optional, supports version mismatch
```

6. **Performance Considerations**
   - Avoid frequent sending of many packets
   - Use variable-length encoding (VarInt/VarLong) to save bandwidth
   - Merge packets for batch updates
