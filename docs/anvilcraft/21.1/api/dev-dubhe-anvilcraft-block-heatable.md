# dev.dubhe.anvilcraft.block.heatable



## GlowingBlock

` public class GlowingBlock extends RedhotBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/GlowingBlock.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GlowingBlock(Properties properties) ` | 执行 ` super(properties, 2, 6) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/GlowingBlock.java#L9) |
| ` @Override public HeatableBlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.GLOWING_BLOCK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/GlowingBlock.java#L13) |

## HeatableBlock

` public abstract class HeatableBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/HeatableBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public @Nullable <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState ignored, BlockEntityType<T> ignored1) ` | ` (level.isClientSide) ` 成立时提前返回 ` null `<br>` (!this.hasBlockEntity()) ` 成立时提前返回 ` null `<br>末尾返回 ` (level1, pos, it, it1) -> HeatableBlockEntity.tick(level1, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/HeatableBlock.java#L47) |
| ` public Optional<BlockState> getPrevTier(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` HeatRecorder.getPrevTierHeatableBlock(level, pos, state) .map(Block::defaultBlockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/HeatableBlock.java#L53) |
| ` @Override public void setPlacedBy(Level level, BlockPos pos, BlockState state, @Nullable LivingEntity placer, ItemStack stack) ` | 分支 ` (placer instanceof ServerPlayer player) ` 内调用 ` player.gameMode.isCreative() `<br>分支 ` (player.gameMode.isCreative()) ` 内调用 ` Optional.ofNullable(level.getBlockEntity(pos)) .filter(HeatableBlockEntity.class::isInstance) `<br>分支 ` (player.gameMode.isCreative()) ` 内调用 ` Optional.ofNullable(level.getBlockEntity(pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/HeatableBlock.java#L71) |

## HeatedBlock

` public class HeatedBlock extends HeatableBlock implements IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/HeatedBlock.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeatedBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/HeatedBlock.java#L13) |
| ` @Override public HeatableBlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.HEATED_BLOCK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/HeatedBlock.java#L22) |
| ` @Override public void notifyMoved(Level level, BlockPos pos, BlockState state, BlockEntity be) ` | 分支 ` (be instanceof HeatedBlockEntity heated) ` 内调用 ` heated.setDuration(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/HeatedBlock.java#L27) |

## IncandescentBlock

` public class IncandescentBlock extends RedhotBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/IncandescentBlock.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IncandescentBlock(Properties properties) ` | 执行 ` super(properties, 4, 8) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/IncandescentBlock.java#L9) |
| ` @Override public HeatableBlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.INCANDESCENT_BLOCK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/IncandescentBlock.java#L13) |

## NormalBlock

` public class NormalBlock extends HeatableBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/NormalBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NormalBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/NormalBlock.java#L4) |

## OverheatedBlock

` public class OverheatedBlock extends RedhotBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/OverheatedBlock.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OverheatedBlock(Properties properties) ` | 执行 ` super(properties, 8, 10) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/OverheatedBlock.java#L9) |
| ` @Override public HeatableBlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.OVERHEATED_BLOCK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/OverheatedBlock.java#L13) |

## OverheatedEmberMetalBlock

` public class OverheatedEmberMetalBlock extends OverheatedBlock implements IOverheatedEmberBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/OverheatedEmberMetalBlock.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OverheatedEmberMetalBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/OverheatedEmberMetalBlock.java#L13) |
| ` @Override public Optional<BlockState> getPrevTier(Level level, BlockPos pos, BlockState state) ` | ` (level.random.nextFloat() <= AnvilCraft.CONFIG.world.overheatedEmberMetalNetheriteChance) ` 成立时提前返回 ` Optional.of(Blocks.NETHERITE_BLOCK.defaultBlockState()) `<br>末尾返回 ` super.getPrevTier(level, pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/OverheatedEmberMetalBlock.java#L17) |

## RedhotBlock

` public class RedhotBlock extends HeatableBlock implements IMoveableEntityBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/RedhotBlock.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RedhotBlock(Properties properties) ` | 执行 ` this(properties, 1, 4) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/RedhotBlock.java#L29) |
| ` @Override public HeatableBlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.REDHOT_BLOCK.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/RedhotBlock.java#L44) |
| ` @Override public void notifyMoved(Level level, BlockPos pos, BlockState state, BlockEntity be) ` | 分支 ` (be instanceof HeatableBlockEntity heatable) ` 内调用 ` heatable.setDuration(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/RedhotBlock.java#L49) |
| ` @Override public void stepOn(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` entity.isSteppingCarefully() `<br>分支 ` (!entity.isSteppingCarefully() && entity instanceof LivingEntity) ` 内调用 ` entity.hurt(ModDamageTypes.redhotBlock(level), this.steppingDamage) `<br>分支 ` (!entity.isSteppingCarefully() && entity instanceof LivingEntity) ` 内调用 ` ModDamageTypes.redhotBlock(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/heatable/RedhotBlock.java#L56) |
