---
prev:
   text: 注册实体
   link: /posts/docs/addon/04_create_entity
next:
   text: 数据生成器
   link: /posts/docs/addon/06_data_generation
---

# 方块实体开发

方块实体（BlockEntity）是附加到方块上的特殊对象，用于存储数据和执行逻辑。常见的方块实体包括箱子、熔炉、漏斗等。

## 方块实体注册基础

使用 `REGISTRUM.blockEntity()` 方法可以注册方块实体：

```java
public static final BlockEntityEntry<CustomBlockEntity> CUSTOM_BLOCK_ENTITY = REGISTRUM
    .blockEntity("custom_block_entity", CustomBlockEntity::new)
    .validBlock(ModBlocks.CUSTOM_BLOCK)
    .register();
```

其中：

- `"custom_block_entity"` 是方块实体的ID
- `CustomBlockEntity::new` 是方块实体的工厂方法
- `validBlock()` 指定该方块实体可以附加到哪些方块上

## 本章节内容将详细介绍 `REGISTRUM.blockEntity()` 的使用方法

### `BlockEntityBuilder.validBlock()` / `validBlocks()`

指定方块实体可以附加的方块：

```java
// 单个方块
public static final BlockEntityEntry<CustomBlockEntity> CUSTOM = REGISTRUM
    .blockEntity("custom", CustomBlockEntity::new)
    .validBlock(ModBlocks.CUSTOM_BLOCK)
    .register();

// 多个方块
public static final BlockEntityEntry<PowerConverterBlockEntity> POWER_CONVERTER = REGISTRUM
    .blockEntity("power_converter", PowerConverterBlockEntity::createBlockEntity)
    .validBlocks(
        ModBlocks.POWER_CONVERTER_SMALL, 
        ModBlocks.POWER_CONVERTER_MIDDLE, 
        ModBlocks.POWER_CONVERTER_BIG
    )
    .register();
```

### `BlockEntityBuilder.renderer()`

注册方块实体的客户端渲染器：

```java
public static final BlockEntityEntry<FluidTankBlockEntity> FLUID_TANK = REGISTRUM
    .blockEntity("fluid_tank", FluidTankBlockEntity::new)
    .validBlocks(ModBlocks.FLUID_TANK)
    .renderer(() -> FluidTankBlockEntityRenderer::new)
    .register();
```

### `BlockEntityBuilder.registerCapability()`

注册方块实体的能力（Capabilities）：

```java
public static final BlockEntityEntry<CustomBlockEntity> CUSTOM = REGISTRUM
    .blockEntity("custom", CustomBlockEntity::new)
    .validBlock(ModBlocks.CUSTOM_BLOCK)
    .registerCapability(event -> {
        event.registerBlockEntity(
            Capabilities.ItemHandler.BLOCK,
            ModBlockEntities.CUSTOM.get(),
            (blockEntity, direction) -> blockEntity.getItemHandler(direction)
        );
    })
    .register();
```

### `BlockEntityBuilder.onRegister()`

在注册时执行额外的逻辑：

```java
public static final BlockEntityEntry<ChuteBlockEntity> CHUTE = REGISTRUM
    .blockEntity("chute", ChuteBlockEntity::createBlockEntity)
    .onRegister(ChuteBlockEntity::onBlockEntityRegister)
    .validBlock(ModBlocks.CHUTE)
    .register();
```

## 自定义方块实体类

### 基础方块实体

```java
public class CustomBlockEntity extends BlockEntity {
    // 存储的数据
    private int counter = 0;

    public CustomBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    // 用于注册的工厂方法
    public static CustomBlockEntity createBlockEntity(
            BlockEntityType<CustomBlockEntity> type, 
            BlockPos pos, 
            BlockState state) {
        return new CustomBlockEntity(type, pos, state);
    }

    // 保存数据到 NBT
    @Override
    protected void saveAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.saveAdditional(tag, registries);
        tag.putInt("counter", counter);
    }

    // 从 NBT 加载数据
    @Override
    protected void loadAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.loadAdditional(tag, registries);
        counter = tag.getInt("counter");
    }

    // 获取用于同步到客户端的数据包
    @Override
    public CompoundTag getUpdateTag(HolderLookup.Provider registries) {
        CompoundTag tag = super.getUpdateTag(registries);
        saveAdditional(tag, registries);
        return tag;
    }

    // 处理从服务器接收的更新包
    @Override
    public Packet<ClientGamePacketListener> getUpdatePacket() {
        return ClientboundBlockEntityDataPacket.create(this);
    }
}
```

### 带有 Tick 逻辑的方块实体

```java
public class TickingBlockEntity extends BlockEntity {
    public TickingBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    // 服务端 tick
    public static void serverTick(Level level, BlockPos pos, BlockState state, 
                                   TickingBlockEntity blockEntity) {
        // 每 tick 执行的服务端逻辑
        blockEntity.doWork();
    }

    // 客户端 tick（可选）
    public static void clientTick(Level level, BlockPos pos, BlockState state, 
                                   TickingBlockEntity blockEntity) {
        // 每 tick 执行的客户端逻辑（如动画）
    }

    private void doWork() {
        // 实现你的逻辑
        setChanged(); // 标记数据已更改，需要保存
    }
}
```

在方块中注册 Ticker：

```java
public class CustomBlock extends BaseEntityBlock {
    public CustomBlock(Properties properties) {
        super(properties);
    }

    @Override
    public BlockEntity newBlockEntity(BlockPos pos, BlockState state) {
        return new TickingBlockEntity(ModBlockEntities.TICKING.get(), pos, state);
    }

    @Override
    public <T extends BlockEntity> BlockEntityTicker<T> getTicker(
            Level level, BlockState state, BlockEntityType<T> type) {
        if (level.isClientSide) {
            return createTickerHelper(type, ModBlockEntities.TICKING.get(), 
                TickingBlockEntity::clientTick);
        } else {
            return createTickerHelper(type, ModBlockEntities.TICKING.get(), 
                TickingBlockEntity::serverTick);
        }
    }
}
```

### 带有物品存储的方块实体

```java
public class StorageBlockEntity extends BlockEntity {
    private final ItemStackHandler inventory = new ItemStackHandler(9) {
        @Override
        protected void onContentsChanged(int slot) {
            setChanged();
            if (level != null && !level.isClientSide) {
                level.sendBlockUpdated(worldPosition, getBlockState(), 
                    getBlockState(), Block.UPDATE_ALL);
            }
        }
    };

    public StorageBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    public IItemHandler getItemHandler(@Nullable Direction direction) {
        return inventory;
    }

    @Override
    protected void saveAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.saveAdditional(tag, registries);
        tag.put("inventory", inventory.serializeNBT(registries));
    }

    @Override
    protected void loadAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.loadAdditional(tag, registries);
        inventory.deserializeNBT(registries, tag.getCompound("inventory"));
    }
}
```

### 带有流体存储的方块实体

```java
public class FluidStorageBlockEntity extends BlockEntity {
    private final FluidTank fluidTank = new FluidTank(16000) {
        @Override
        protected void onContentsChanged() {
            setChanged();
        }
    };

    public FluidStorageBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    public IFluidHandler getFluidHandler(@Nullable Direction direction) {
        return fluidTank;
    }

    @Override
    protected void saveAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.saveAdditional(tag, registries);
        tag.put("fluid", fluidTank.writeToNBT(registries, new CompoundTag()));
    }

    @Override
    protected void loadAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.loadAdditional(tag, registries);
        fluidTank.readFromNBT(registries, tag.getCompound("fluid"));
    }
}
```

## 方块实体渲染器

```java
public class CustomBlockEntityRenderer 
        implements BlockEntityRenderer<CustomBlockEntity> {

    public CustomBlockEntityRenderer(BlockEntityRendererProvider.Context context) {
        // 初始化渲染器
    }

    @Override
    public void render(CustomBlockEntity blockEntity, float partialTick, 
                       PoseStack poseStack, MultiBufferSource buffer, 
                       int packedLight, int packedOverlay) {
        // 自定义渲染逻辑
        poseStack.pushPose();
        
        // 渲染内容...
        
        poseStack.popPose();
    }
}
```

## 与方块配合使用

在方块中创建方块实体时，推荐使用 `BlockBuilder.simpleBlockEntity()`：

```java
public static final BlockEntry<CustomBlock> CUSTOM_BLOCK = REGISTRUM
    .block("custom_block", CustomBlock::new)
    .initialProperties(() -> Blocks.IRON_BLOCK)
    .simpleBlockEntity(CustomBlockEntity::new)  // 自动创建方块实体
    .simpleItem()
    .register();
```

或者使用 `blockEntity()` 方法进行更多配置：

```java
public static final BlockEntry<CustomBlock> CUSTOM_BLOCK = REGISTRUM
    .block("custom_block", CustomBlock::new)
    .initialProperties(() -> Blocks.IRON_BLOCK)
    .blockEntity(CustomBlockEntity::new)
        .renderer(() -> CustomBlockEntityRenderer::new)
        .build()
    .simpleItem()
    .register();
```

## 数据同步

### 客户端-服务端数据同步

```java
public class SyncedBlockEntity extends BlockEntity {
    private int syncedValue = 0;

    // 当数据改变时调用此方法同步到客户端
    public void syncToClient() {
        if (level != null && !level.isClientSide) {
            level.sendBlockUpdated(worldPosition, getBlockState(), 
                getBlockState(), Block.UPDATE_CLIENTS);
        }
    }

    @Override
    public CompoundTag getUpdateTag(HolderLookup.Provider registries) {
        CompoundTag tag = super.getUpdateTag(registries);
        tag.putInt("syncedValue", syncedValue);
        return tag;
    }

    @Override
    public void handleUpdateTag(CompoundTag tag, HolderLookup.Provider registries) {
        super.handleUpdateTag(tag, registries);
        syncedValue = tag.getInt("syncedValue");
    }

    @Override
    public Packet<ClientGamePacketListener> getUpdatePacket() {
        return ClientboundBlockEntityDataPacket.create(this);
    }
}
```

## 完整示例

以下是一个完整的方块实体注册示例：

```java
// ModBlockEntities.java
public class ModBlockEntities {
    public static final BlockEntityEntry<ProcessorBlockEntity> PROCESSOR = REGISTRUM
        .blockEntity("processor", ProcessorBlockEntity::createBlockEntity)
        .validBlock(ModBlocks.PROCESSOR)
        .renderer(() -> ProcessorBlockEntityRenderer::new)
        .register();

    public static void register() {
        // 确保类被加载
    }
}

// ProcessorBlockEntity.java
public class ProcessorBlockEntity extends BlockEntity {
    private int progress = 0;
    private static final int MAX_PROGRESS = 200;

    private final ItemStackHandler inputSlot = new ItemStackHandler(1);
    private final ItemStackHandler outputSlot = new ItemStackHandler(1);

    public ProcessorBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    public static ProcessorBlockEntity createBlockEntity(
            BlockEntityType<ProcessorBlockEntity> type,
            BlockPos pos, BlockState state) {
        return new ProcessorBlockEntity(type, pos, state);
    }

    public static void serverTick(Level level, BlockPos pos, BlockState state,
                                   ProcessorBlockEntity blockEntity) {
        if (blockEntity.canProcess()) {
            blockEntity.progress++;
            if (blockEntity.progress >= MAX_PROGRESS) {
                blockEntity.processItem();
                blockEntity.progress = 0;
            }
            blockEntity.setChanged();
        }
    }

    private boolean canProcess() {
        return !inputSlot.getStackInSlot(0).isEmpty();
    }

    private void processItem() {
        // 处理物品逻辑
    }

    @Override
    protected void saveAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.saveAdditional(tag, registries);
        tag.putInt("progress", progress);
        tag.put("input", inputSlot.serializeNBT(registries));
        tag.put("output", outputSlot.serializeNBT(registries));
    }

    @Override
    protected void loadAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.loadAdditional(tag, registries);
        progress = tag.getInt("progress");
        inputSlot.deserializeNBT(registries, tag.getCompound("input"));
        outputSlot.deserializeNBT(registries, tag.getCompound("output"));
    }
}
```

## 最佳实践

1. **数据保存**
    * 总是重写 `saveAdditional()` 和 `loadAdditional()` 来保存/加载数据
    * 在数据改变后调用 `setChanged()` 确保数据被保存

2. **客户端同步**
    * 只同步客户端需要的数据，减少网络开销
    * 使用 `getUpdateTag()` 和 `getUpdatePacket()` 进行同步

3. **性能优化**
    * 避免在 tick 方法中进行耗时操作
    * 使用延迟处理或批量处理大量数据

4. **能力系统**
    * 使用 NeoForge 的 Capabilities 系统暴露物品/流体/能量处理器
    * 支持不同方向有不同的处理器

5. **及时注册**
    * 确保在 mod 主类的构造函数中调用 `register()` 方法
