# 网络通信

本章介绍如何在 Addon 中实现客户端与服务端之间的网络通信。

## 概述

NeoForge 使用 Payload 系统实现网络通信。主要概念包括：

- **Payload（负载）** - 需要在网络上传输的数据包
- **StreamCodec（流编解码器）** - 定义如何序列化/反序列化数据
- **Handler（处理器）** - 接收到数据包后的处理逻辑
- **PayloadRegistrar（注册器）** - 用于注册数据包

## 创建数据包

### 1. 定义 Payload 类

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
    
    // 定义数据包类型标识符
    public static final Type<CustomActionPacket> TYPE = 
        new Type<>(MyAddon.of("custom_action"));
    
    // 定义流编解码器
    public static final StreamCodec<RegistryFriendlyByteBuf, CustomActionPacket> STREAM_CODEC =
        StreamCodec.ofMember(CustomActionPacket::encode, CustomActionPacket::new);
    
    // 定义处理器
    public static final IPayloadHandler<CustomActionPacket> HANDLER = CustomActionPacket::handle;
    
    // 数据包携带的数据
    private final BlockPos pos;
    private final int actionType;
    
    // 构造函数 - 用于创建数据包
    public CustomActionPacket(BlockPos pos, int actionType) {
        this.pos = pos;
        this.actionType = actionType;
    }
    
    // 解码构造函数 - 从网络缓冲区读取数据
    public CustomActionPacket(RegistryFriendlyByteBuf buf) {
        this.pos = buf.readBlockPos();
        this.actionType = buf.readVarInt();
    }
    
    // 编码方法 - 将数据写入网络缓冲区
    public void encode(RegistryFriendlyByteBuf buf) {
        buf.writeBlockPos(this.pos);
        buf.writeVarInt(this.actionType);
    }
    
    // 处理方法 - 接收到数据包后的处理逻辑
    public static void handle(CustomActionPacket packet, IPayloadContext context) {
        // 在主线程上执行处理逻辑
        context.enqueueWork(() -> {
            // 根据数据包方向执行不同逻辑
            if (context.flow().isServerbound()) {
                // 服务端处理
                handleOnServer(packet, context);
            } else {
                // 客户端处理
                handleOnClient(packet, context);
            }
        });
    }
    
    private static void handleOnServer(CustomActionPacket packet, IPayloadContext context) {
        var player = context.player();
        var level = player.level();
        // 服务端处理逻辑
    }
    
    private static void handleOnClient(CustomActionPacket packet, IPayloadContext context) {
        // 客户端处理逻辑
    }
    
    @Override
    public Type<? extends CustomPacketPayload> type() {
        return TYPE;
    }
}
```

### 2. 注册数据包

创建一个网络注册类：

```java
package com.example.myaddon.init;

import com.example.myaddon.network.CustomActionPacket;
import com.example.myaddon.network.SyncDataPacket;
import com.example.myaddon.network.ClientRequestPacket;
import net.neoforged.neoforge.network.registration.PayloadRegistrar;

public class ModNetworks {
    
    public static void init(PayloadRegistrar registrar) {
        // 双向数据包（客户端和服务端都可以发送和接收）
        registrar.playBidirectional(
            CustomActionPacket.TYPE,
            CustomActionPacket.STREAM_CODEC,
            CustomActionPacket.HANDLER
        );
        
        // 服务端到客户端的数据包
        registrar.playToClient(
            SyncDataPacket.TYPE,
            SyncDataPacket.STREAM_CODEC,
            SyncDataPacket.HANDLER
        );
        
        // 客户端到服务端的数据包
        registrar.playToServer(
            ClientRequestPacket.TYPE,
            ClientRequestPacket.STREAM_CODEC,
            ClientRequestPacket.HANDLER
        );
    }
}
```

### 3. 在主类中注册

```java
@Mod(MyAddon.MOD_ID)
public class MyAddon {
    public static final String MOD_ID = "myaddon";
    
    public MyAddon(IEventBus modEventBus) {
        // 注册网络处理器事件
        modEventBus.addListener(this::registerPayloads);
    }
    
    private void registerPayloads(RegisterPayloadHandlersEvent event) {
        // 创建版本化的注册器
        PayloadRegistrar registrar = event.registrar("1");
        ModNetworks.init(registrar);
    }
}
```

## 发送数据包

### 客户端发送到服务端

```java
// 在客户端代码中
PacketDistributor.sendToServer(new CustomActionPacket(pos, 1));
```

### 服务端发送到客户端

```java
// 发送给特定玩家
ServerPlayer player = ...;
PacketDistributor.sendToPlayer(player, new SyncDataPacket(data));

// 发送给所有玩家
PacketDistributor.sendToAllPlayers(new SyncDataPacket(data));

// 发送给区块追踪者
BlockPos pos = ...;
ServerLevel level = ...;
PacketDistributor.sendToPlayersTrackingChunk(level, pos, new SyncDataPacket(data));

// 发送给附近玩家
PacketDistributor.sendToPlayersNear(level, null, pos.getX(), pos.getY(), pos.getZ(), 64, new SyncDataPacket(data));
```

## 数据类型编解码

### 基本类型

```java
// 写入
buf.writeBoolean(value);
buf.writeInt(value);
buf.writeLong(value);
buf.writeFloat(value);
buf.writeDouble(value);
buf.writeVarInt(value);        // 变长整数，更节省空间
buf.writeVarLong(value);

// 读取
boolean b = buf.readBoolean();
int i = buf.readInt();
long l = buf.readLong();
float f = buf.readFloat();
double d = buf.readDouble();
int vi = buf.readVarInt();
long vl = buf.readVarLong();
```

### 字符串

```java
// 写入
buf.writeUtf(string);
buf.writeUtf(string, maxLength);

// 读取
String s = buf.readUtf();
String s = buf.readUtf(maxLength);
```

### Minecraft 类型

```java
// BlockPos
buf.writeBlockPos(pos);
BlockPos pos = buf.readBlockPos();

// ItemStack
ItemStack.STREAM_CODEC.encode(buf, stack);
ItemStack stack = ItemStack.STREAM_CODEC.decode(buf);

// 枚举
buf.writeEnum(MyEnum.VALUE);
MyEnum value = buf.readEnum(MyEnum.class);

// UUID
buf.writeUUID(uuid);
UUID uuid = buf.readUUID();

// ResourceLocation
buf.writeResourceLocation(location);
ResourceLocation loc = buf.readResourceLocation();

// Component（文本组件）
ComponentSerialization.STREAM_CODEC.encode(buf, component);
Component comp = ComponentSerialization.STREAM_CODEC.decode(buf);

// NBT
buf.writeNbt(tag);
CompoundTag tag = buf.readNbt();

// BlockHitResult
buf.writeBlockHitResult(result);
BlockHitResult result = buf.readBlockHitResult();
```

### 集合类型

```java
// 列表
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

// 可选值
buf.writeOptional(Optional.ofNullable(value), (b, v) -> b.writeUtf(v));
Optional<String> opt = buf.readOptional(RegistryFriendlyByteBuf::readUtf);
```

## 使用 StreamCodec

NeoForge 提供了更优雅的 StreamCodec API：

```java
public class ComplexDataPacket implements CustomPacketPayload {
    public static final Type<ComplexDataPacket> TYPE = new Type<>(MyAddon.of("complex_data"));
    
    // 使用 StreamCodec 组合器
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

## 完整示例

### 方块实体同步数据包

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

### 在方块实体中发送同步

```java
public class CustomBlockEntity extends BlockEntity {
    private int energy;
    private int processTime;
    
    public void tick() {
        if (!level.isClientSide) {
            // 处理逻辑...
            
            // 同步到客户端
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
    
    // 从数据包更新数据
    public void setEnergy(int energy) {
        this.energy = energy;
    }
    
    public void setProcessTime(int processTime) {
        this.processTime = processTime;
    }
}
```

### 客户端请求数据包

```java
// RequestActionPacket.java - 客户端请求服务端执行操作
public class RequestActionPacket implements CustomPacketPayload {
    public static final Type<RequestActionPacket> TYPE = new Type<>(MyAddon.of("request_action"));
    
    public static final StreamCodec<RegistryFriendlyByteBuf, RequestActionPacket> STREAM_CODEC =
        StreamCodec.ofMember(RequestActionPacket::encode, RequestActionPacket::new);
    
    public static final IPayloadHandler<RequestActionPacket> HANDLER = (packet, context) -> {
        context.enqueueWork(() -> {
            ServerPlayer player = (ServerPlayer) context.player();
            ServerLevel level = player.serverLevel();
            
            // 验证玩家权限
            if (!canPlayerPerformAction(player, packet.pos)) {
                return;
            }
            
            // 执行操作
            performAction(level, packet.pos, packet.actionId);
            
            // 发送响应
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
        // 检查权限逻辑
        return true;
    }
    
    private static void performAction(ServerLevel level, BlockPos pos, int actionId) {
        // 执行操作逻辑
    }
}
```

## 数据包方向

| 方法 | 方向 | 使用场景 |
|------|------|----------|
| `playToServer` | 客户端 → 服务端 | 玩家操作请求、GUI 交互 |
| `playToClient` | 服务端 → 客户端 | 数据同步、状态更新 |
| `playBidirectional` | 双向 | 需要双向通信的功能 |

## 最佳实践

1. **数据验证**
   - 服务端必须验证客户端发送的所有数据
   - 不要信任客户端发送的任何信息

2. **线程安全**
   - 使用 `context.enqueueWork()` 在主线程执行游戏逻辑
   - 不要在网络线程直接修改游戏状态

3. **数据量控制**
   - 只发送必要的数据
   - 大数据考虑分包发送

4. **错误处理**
   - 处理数据包时捕获异常
   - 记录错误日志便于调试

5. **版本兼容**
   - 使用版本化的注册器
   - 考虑前向/后向兼容性

```java
// 版本化注册
PayloadRegistrar registrar = event.registrar("1")
    .optional();  // 标记为可选，支持版本不匹配
```

6. **性能考虑**
   - 避免频繁发送大量数据包
   - 使用变长编码（VarInt/VarLong）节省带宽
   - 批量更新时合并数据包
