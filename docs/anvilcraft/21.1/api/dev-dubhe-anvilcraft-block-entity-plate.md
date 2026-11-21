# dev.dubhe.anvilcraft.block.entity.plate



## TimeCountedPressurePlateBlockEntity

` public class TimeCountedPressurePlateBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/plate/TimeCountedPressurePlateBlockEntity.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TimeCountedPressurePlateBlockEntity(BlockPos pos, BlockState blockState, int needTick) ` | 执行 ` this(ModBlockEntities.TIME_COUNTED_PRESSURE_PLATE.get(), pos, blockState, needTick) `<br>[调用处 TimeCountedPressurePlateBlock.newBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/plate/TimeCountedPressurePlateBlock.java#L53) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/plate/TimeCountedPressurePlateBlockEntity.java#L27) |
| ` public static TimeCountedPressurePlateBlockEntity createBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 末尾返回 ` new TimeCountedPressurePlateBlockEntity(type, pos, blockState, 10) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/plate/TimeCountedPressurePlateBlockEntity.java#L31) |
| ` public int getSignalStrength() ` | 末尾返回 ` Math.clamp(this.tick / (this.needTick == 0 ? 1 : this.needTick), 0, 15) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/plate/TimeCountedPressurePlateBlockEntity.java#L49) |
| ` public void tick(Level level, BlockPos pos) ` | 实现调用 ` level.getBlockState(pos) `<br>实现调用 ` state.getBlock() `<br>分支 ` (state.getBlock() instanceof TimeCountedPressurePlateBlock plate) ` 内调用 ` level.getEntities(EntityTypeTest.forClass(LivingEntity.class), new AABB(pos), entity -> true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/plate/TimeCountedPressurePlateBlockEntity.java#L53) |
