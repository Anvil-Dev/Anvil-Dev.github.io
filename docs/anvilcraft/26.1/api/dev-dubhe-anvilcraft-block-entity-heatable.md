# dev.dubhe.anvilcraft.block.entity.heatable



## GlowingBlockEntity

` public class GlowingBlockEntity extends HeatableBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/GlowingBlockEntity.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GlowingBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) `<br>[调用处 GlowingBlockEntity.createBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/GlowingBlockEntity.java#L13) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/GlowingBlockEntity.java#L8) |
| ` public static GlowingBlockEntity createBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 末尾返回 ` new GlowingBlockEntity(type, pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/GlowingBlockEntity.java#L12) |

## HeatableBlockEntity

` public abstract class HeatableBlockEntity extends BlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void addDuration(int second) ` | 增加1秒<br>执行 ` this.addDurationInTick(second * 20) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L41) |
| ` public void addDurationInTick(int tick) ` | 执行 ` this.setDuration(Math.clamp(this.duration + tick, -1, HeatableBlockEntity.MAX_DURATION)) `<br>[调用处 HeatableBlockEntity.addDuration](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L45) |
| ` public void setDuration(int duration) ` | 实现调用 ` this.setChanged() `<br>[调用处 HeatableBlockEntity.addDurationInTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L49) |
| ` @RemoteCallable(validator = Validator.class) public static int getDuration(@CallableParam(clazz = HeatableBlockEntity.class, field = "POS_STREAM_CODEC") BlockPos pos) ` | ` (level == null) ` 成立时提前返回 ` -1 `<br>末尾返回 ` Util.castSafely(level.getBlockEntity(pos), HeatableBlockEntity.class).map(HeatableBlockEntity::getDuration).orElse(-1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L54) |
| ` public int getSignal() ` | ` (this.duration == HeatableBlockEntity.MAX_DURATION) ` 成立时提前返回 ` 15 `<br>` (this.duration == 0) ` 成立时提前返回 ` 0 `<br>末尾返回 ` (int) Math.ceil((double) this.duration / HeatableBlockEntity.MAX_DURATION * 14) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L64) |
| ` @Override public void onLoad() ` | 实现调用 ` super.onLoad() `<br>实现调用 ` HeaterManager.addHeatableBlock(this.getBlockPos(), Objects.requireNonNull(this.getLevel())) `<br>实现调用 ` this.getBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L82) |
| ` public static void tick(Level level, BlockPos pos) ` | 执行 ` HeaterManager.addHeatableBlock(pos, level) `<br>[调用处 HeatableBlock.getTicker](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/heatable/HeatableBlock.java#L50) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L88) |
| ` public Optional<BlockState> getPrevTier(Level level, BlockPos pos) ` | ` (!(state.getBlock() instanceof HeatableBlock heatable)) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` heatable.getPrevTier(level, pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L92) |
| ` public int getDuration() ` | 末尾返回 ` this.duration `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatableBlockEntity.java#L29) |

## HeatedBlockEntity

` public class HeatedBlockEntity extends HeatableBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatedBlockEntity.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeatedBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) `<br>[调用处 HeatedBlockEntity.createBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatedBlockEntity.java#L13) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatedBlockEntity.java#L8) |
| ` public static HeatedBlockEntity createBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 末尾返回 ` new HeatedBlockEntity(type, pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/HeatedBlockEntity.java#L12) |

## IncandescentBlockEntity

` public class IncandescentBlockEntity extends HeatableBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/IncandescentBlockEntity.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IncandescentBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) `<br>[调用处 IncandescentBlockEntity.createBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/IncandescentBlockEntity.java#L13) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/IncandescentBlockEntity.java#L8) |
| ` public static IncandescentBlockEntity createBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 末尾返回 ` new IncandescentBlockEntity(type, pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/IncandescentBlockEntity.java#L12) |

## OverheatedBlockEntity

` public class OverheatedBlockEntity extends HeatableBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/OverheatedBlockEntity.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OverheatedBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) `<br>[调用处 OverheatedBlockEntity.createBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/OverheatedBlockEntity.java#L13) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/OverheatedBlockEntity.java#L8) |
| ` public static OverheatedBlockEntity createBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 末尾返回 ` new OverheatedBlockEntity(type, pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/OverheatedBlockEntity.java#L12) |

## RedhotBlockEntity

` public class RedhotBlockEntity extends HeatableBlockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/RedhotBlockEntity.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RedhotBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 执行 ` super(type, pos, blockState) `<br>[调用处 RedhotBlockEntity.createBlockEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/RedhotBlockEntity.java#L13) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/RedhotBlockEntity.java#L8) |
| ` public static RedhotBlockEntity createBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState blockState) ` | 末尾返回 ` new RedhotBlockEntity(type, pos, blockState) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/heatable/RedhotBlockEntity.java#L12) |
