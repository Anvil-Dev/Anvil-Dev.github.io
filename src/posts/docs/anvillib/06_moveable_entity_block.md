# Moveable Entity Block 模块

Moveable Entity Block 模块允许携带**方块实体（Block Entity）的方块**被活塞推动时，保留并正确迁移其内部数据，解决了原版 Minecraft 中带方块实体的方块无法被活塞推动（或推动后丢失数据）的问题。

## 一、`IMoveableEntityBlock` 接口

方块实现此接口后，即可被活塞推动并在推动过程中保留方块实体数据。

```java
package dev.anvilcraft.lib.v2.piston;

public interface IMoveableEntityBlock extends EntityBlock {

    /**
     * 方块被活塞推出原位时调用。
     * 返回需要迁移到新位置的方块实体数据（以 CompoundTag 形式）。
     *
     * @param level 当前世界
     * @param pos   方块当前位置
     * @return 需要被迁移的 NBT 数据
     */
    default CompoundTag clearData(Level level, BlockPos pos) {
        return new CompoundTag();
    }

    /**
     * 方块到达新位置停止时调用。
     * 将迁移的 NBT 数据重新写入新位置的方块实体。
     *
     * @param level 当前世界
     * @param pos   方块新位置
     * @param nbt   从 clearData 返回的 NBT 数据
     */
    default void setData(Level level, BlockPos pos, CompoundTag nbt) {
    }
}
```

## 二、工作原理

1. 活塞推动时，框架通过 Mixin（`PistonBaseBlockMixin`）拦截推动逻辑；
2. 对实现了 `IMoveableEntityBlock` 的方块，调用 `clearData()` 提取方块实体数据，并将数据随活塞携带移动；
3. 通过 `PistonMovingBlockEntityMixin` 在方块到位后调用 `setData()`，将数据写回新位置的方块实体。

## 三、完整示例

### 1. 定义方块

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
     * 方块被推走时，保存方块实体数据
     */
    @Override
    public CompoundTag clearData(Level level, BlockPos pos) {
        BlockEntity be = level.getBlockEntity(pos);
        if (be == null) return new CompoundTag();
        // 保存完整数据（不含位置元数据）
        return be.saveWithoutMetadata(level.registryAccess());
    }

    /**
     * 方块到达新位置后，恢复方块实体数据
     */
    @Override
    public void setData(Level level, BlockPos pos, CompoundTag nbt) {
        BlockEntity be = level.getBlockEntity(pos);
        if (be == null) return;
        be.loadAdditional(nbt, level.registryAccess());
        // 通知客户端更新
        be.setChanged();
        level.sendBlockUpdated(pos, be.getBlockState(), be.getBlockState(), 3);
    }
}
```

### 2. 定义方块实体

```java
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
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

### 3. 注册方块

可与 [Registrum 模块](07_registrum.md) 配合使用：

```java
public static final BlockEntry<MyStorageBlock> MY_STORAGE_BLOCK = REGISTRUM
    .block("my_storage_block", MyStorageBlock::new)
    .properties(p -> p.strength(2.0f))
    .blockEntity(MyBlockEntities::MY_STORAGE, MyStorageBlockEntity::new).build()
    .register();
```

## 四、注意事项

- 方块必须同时继承 `EntityBlock`（或其实现，如 `BaseEntityBlock`）并实现 `IMoveableEntityBlock`；
- `clearData()` 的默认实现返回空 `CompoundTag`，即不保留任何数据——**若需要保留数据必须重写此方法**；
- `setData()` 的默认实现为空操作——**若需要写回数据必须重写此方法**；
- 该模块通过 Mixin 实现，需确保 Mixin 配置文件正确加载（使用聚合包时默认已包含）；
- 推动方向（水平/向上/向下）均受支持，框架无方向限制。

## 五、与粘性活塞

粘性活塞拉回方块时同样会触发该流程，`clearData()` 和 `setData()` 会被正确调用。如果方块不可被粘性活塞拉回，需在方块的 `getPistonPushReaction()` 方法中返回 `PushReaction.BLOCK`（但这与本模块无关，属于原版行为）。
