# Block Entity Development

Block Entities are special objects attached to blocks, used to store data and execute logic. Common block entities include chests, furnaces, hoppers, etc.

## Block Entity Registration Basics

Use the `REGISTRUM.blockEntity()` method to register block entities:

```java
public static final BlockEntityEntry<CustomBlockEntity> CUSTOM_BLOCK_ENTITY = REGISTRUM
    .blockEntity("custom_block_entity", CustomBlockEntity::new)
    .validBlock(ModBlocks.CUSTOM_BLOCK)
    .register();
```

Where:
- `"custom_block_entity"` is the block entity ID
- `CustomBlockEntity::new` is the block entity factory method
- `validBlock()` specifies which blocks this block entity can be attached to

## This chapter will detail how to use `REGISTRUM.blockEntity()`

### `BlockEntityBuilder.validBlock()` / `validBlocks()`

Specify which blocks the block entity can be attached to:

```java
// Single block
public static final BlockEntityEntry<CustomBlockEntity> CUSTOM = REGISTRUM
    .blockEntity("custom", CustomBlockEntity::new)
    .validBlock(ModBlocks.CUSTOM_BLOCK)
    .register();

// Multiple blocks
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

Register the client-side renderer for the block entity:

```java
public static final BlockEntityEntry<FluidTankBlockEntity> FLUID_TANK = REGISTRUM
    .blockEntity("fluid_tank", FluidTankBlockEntity::new)
    .validBlocks(ModBlocks.FLUID_TANK)
    .renderer(() -> FluidTankBlockEntityRenderer::new)
    .register();
```

### `BlockEntityBuilder.registerCapability()`

Register capabilities for the block entity:

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

Execute additional logic during registration:

```java
public static final BlockEntityEntry<ChuteBlockEntity> CHUTE = REGISTRUM
    .blockEntity("chute", ChuteBlockEntity::createBlockEntity)
    .onRegister(ChuteBlockEntity::onBlockEntityRegister)
    .validBlock(ModBlocks.CHUTE)
    .register();
```

## Custom Block Entity Classes

### Basic Block Entity

```java
public class CustomBlockEntity extends BlockEntity {
    // Stored data
    private int counter = 0;

    public CustomBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    // Factory method for registration
    public static CustomBlockEntity createBlockEntity(
            BlockEntityType<CustomBlockEntity> type, 
            BlockPos pos, 
            BlockState state) {
        return new CustomBlockEntity(type, pos, state);
    }

    // Save data to NBT
    @Override
    protected void saveAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.saveAdditional(tag, registries);
        tag.putInt("counter", counter);
    }

    // Load data from NBT
    @Override
    protected void loadAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.loadAdditional(tag, registries);
        counter = tag.getInt("counter");
    }

    // Get the update tag for syncing to client
    @Override
    public CompoundTag getUpdateTag(HolderLookup.Provider registries) {
        CompoundTag tag = super.getUpdateTag(registries);
        saveAdditional(tag, registries);
        return tag;
    }

    // Handle update packet from server
    @Override
    public Packet<ClientGamePacketListener> getUpdatePacket() {
        return ClientboundBlockEntityDataPacket.create(this);
    }
}
```

### Block Entity with Tick Logic

```java
public class TickingBlockEntity extends BlockEntity {
    public TickingBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    // Server tick
    public static void serverTick(Level level, BlockPos pos, BlockState state, 
                                   TickingBlockEntity blockEntity) {
        // Server-side logic executed every tick
        blockEntity.doWork();
    }

    // Client tick (optional)
    public static void clientTick(Level level, BlockPos pos, BlockState state, 
                                   TickingBlockEntity blockEntity) {
        // Client-side logic executed every tick (e.g., animations)
    }

    private void doWork() {
        // Implement your logic
        setChanged(); // Mark data as changed, needs saving
    }
}
```

Register the Ticker in the block:

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

### Block Entity with Item Storage

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

### Block Entity with Fluid Storage

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

## Block Entity Renderer

```java
public class CustomBlockEntityRenderer 
        implements BlockEntityRenderer<CustomBlockEntity> {

    public CustomBlockEntityRenderer(BlockEntityRendererProvider.Context context) {
        // Initialize renderer
    }

    @Override
    public void render(CustomBlockEntity blockEntity, float partialTick, 
                       PoseStack poseStack, MultiBufferSource buffer, 
                       int packedLight, int packedOverlay) {
        // Custom rendering logic
        poseStack.pushPose();
        
        // Render content...
        
        poseStack.popPose();
    }
}
```

## Using with Blocks

When creating a block entity within a block, it's recommended to use `BlockBuilder.simpleBlockEntity()`:

```java
public static final BlockEntry<CustomBlock> CUSTOM_BLOCK = REGISTRUM
    .block("custom_block", CustomBlock::new)
    .initialProperties(() -> Blocks.IRON_BLOCK)
    .simpleBlockEntity(CustomBlockEntity::new)  // Automatically create block entity
    .simpleItem()
    .register();
```

Or use the `blockEntity()` method for more configuration:

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

## Data Synchronization

### Client-Server Data Synchronization

```java
public class SyncedBlockEntity extends BlockEntity {
    private int syncedValue = 0;

    // Call this method to sync to client when data changes
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

## Complete Example

Here is a complete block entity registration example:

```java
// ModBlockEntities.java
public class ModBlockEntities {
    public static final BlockEntityEntry<ProcessorBlockEntity> PROCESSOR = REGISTRUM
        .blockEntity("processor", ProcessorBlockEntity::createBlockEntity)
        .validBlock(ModBlocks.PROCESSOR)
        .renderer(() -> ProcessorBlockEntityRenderer::new)
        .register();

    public static void register() {
        // Ensure the class is loaded
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
        // Item processing logic
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

## Best Practices

1. **Data Saving**
    * Always override `saveAdditional()` and `loadAdditional()` to save/load data
    * Call `setChanged()` after data changes to ensure data is saved

2. **Client Synchronization**
    * Only sync data that the client needs to reduce network overhead
    * Use `getUpdateTag()` and `getUpdatePacket()` for synchronization

3. **Performance Optimization**
    * Avoid time-consuming operations in tick methods
    * Use delayed processing or batch processing for large amounts of data

4. **Capability System**
    * Use NeoForge's Capabilities system to expose item/fluid/energy handlers
    * Support different handlers for different directions

5. **Timely Registration**
    * Ensure you call the `register()` method in the mod main class constructor
