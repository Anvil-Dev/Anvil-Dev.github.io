---
prev:
   text: Recipe Module (In-World Recipe)
   link: /en/posts/docs/anvillib/05_recipe
next:
   text: Registrum Module
   link: /en/posts/docs/anvillib/07_registrum
---

# Moveable Entity Block Module

The Moveable Entity Block module allows blocks that have **Block Entities** to be pushed by pistons while preserving
their internal data correctly. This solves the vanilla Minecraft limitation where blocks with block entities either
cannot be pushed by pistons or lose their data when pushed.

## I. `IMoveableEntityBlock` Interface

A block that implements this interface can be pushed by pistons and will have its block entity data migrated to the new
position.

```java
package dev.anvilcraft.lib.v2.piston;

public interface IMoveableEntityBlock extends EntityBlock {

    /**
     * Called when the block is pushed out of its original position by a piston.
     * Returns the block entity data (as a CompoundTag) that should be migrated to the new position.
     *
     * @param level The current level
     * @param pos   The block's current position
     * @return NBT data to be migrated
     */
    default CompoundTag clearData(Level level, BlockPos pos) {
        return new CompoundTag();
    }

    /**
     * Called when the block arrives at its new position and stops moving.
     * Restores the migrated NBT data into the block entity at the new position.
     *
     * @param level The current level
     * @param pos   The block's new position
     * @param nbt   NBT data returned from clearData
     */
    default void setData(Level level, BlockPos pos, CompoundTag nbt) {
    }
}
```

## II. How It Works

1. When a piston attempts to push a block, the framework intercepts the push logic via Mixin (`PistonBaseBlockMixin`);
2. For blocks that implement `IMoveableEntityBlock`, `clearData()` is called to extract the block entity data, which
   travels with the piston movement;
3. After the block arrives at its new position, `PistonMovingBlockEntityMixin` calls `setData()` to write the data back
   into the block entity at the new position.

## III. Full Example

### 1. Define the Block

```java
import dev.anvilcraft.lib.v2.piston.IMoveableEntityBlock;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.BaseEntityBlock;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.Nullable;

public class MyStorageBlock extends BaseEntityBlock implements IMoveableEntityBlock {

    public MyStorageBlock(Properties properties) {
        super(properties);
    }

    @Override
    public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) {
        return new MyStorageBlockEntity(pos, state);
    }

    /**
     * Save block entity data before the block is pushed away
     */
    @Override
    public CompoundTag clearData(Level level, BlockPos pos) {
        BlockEntity be = level.getBlockEntity(pos);
        if (be == null) return new CompoundTag();
        // Save full data (without position metadata)
        return be.saveWithoutMetadata(level.registryAccess());
    }

    /**
     * Restore block entity data after the block arrives at its new position
     */
    @Override
    public void setData(Level level, BlockPos pos, CompoundTag nbt) {
        BlockEntity be = level.getBlockEntity(pos);
        if (be == null) return;
        be.loadAdditional(nbt, level.registryAccess());
        // Notify clients of the update
        be.setChanged();
        level.sendBlockUpdated(pos, be.getBlockState(), be.getBlockState(), 3);
    }
}
```

### 2. Define the Block Entity

```java
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.core.HolderLookup;

public class MyStorageBlockEntity extends BlockEntity {

    private int storedValue = 0;

    public MyStorageBlockEntity(BlockPos pos, BlockState state) {
        super(MyBlockEntities.MY_STORAGE.get(), pos, state);
    }

    @Override
    protected void saveAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.saveAdditional(tag, registries);
        tag.putInt("stored_value", this.storedValue);
    }

    @Override
    public void loadAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.loadAdditional(tag, registries);
        this.storedValue = tag.getInt("stored_value");
    }
}
```

### 3. Register the Block

You can combine this with the [Registrum module](07_registrum.md):

```java
public static final BlockEntry<MyStorageBlock> MY_STORAGE_BLOCK = REGISTRUM
    .block("my_storage_block", MyStorageBlock::new)
    .properties(p -> p.strength(2.0f))
    .blockEntity(MyBlockEntities::MY_STORAGE, MyStorageBlockEntity::new).build()
    .register();
```

## IV. Notes

- The block must extend `EntityBlock` (or one of its implementations such as `BaseEntityBlock`) **and** implement
  `IMoveableEntityBlock`;
- The default implementation of `clearData()` returns an empty `CompoundTag`, meaning no data is preserved — **you must
  override this method if you want to keep data**;
- The default implementation of `setData()` is a no-op — **you must override this method if you want to restore data**;
- This module works via Mixin; ensure the Mixin configuration is loaded correctly (when using the aggregate artifact,
  this is handled automatically);
- All piston push directions (horizontal, upward, downward) are supported — the framework has no directional
  restriction.

## V. Sticky Pistons

When a sticky piston pulls the block back, the same flow is triggered: `clearData()` and `setData()` are called
correctly. If a block should not be retractable by sticky pistons, return `PushReaction.BLOCK` from the block's
`getPistonPushReaction()` method — but this is vanilla behavior and unrelated to this module.

