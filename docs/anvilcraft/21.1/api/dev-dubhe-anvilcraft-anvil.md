# dev.dubhe.anvilcraft.anvil



## BeaconConversionBehavior

` public class BeaconConversionBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | ` (!(blockEntity instanceof BeaconBlockEntity beaconBlockEntity)) ` 成立时提前返回 ` false `<br>` (beaconBlockEntity.getBeamSections().isEmpty()) ` 成立时提前返回 ` false `<br>` (beaconLevel <= 0) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L30) |
| ` public BeaconConversionBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L60) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L20) |

## BlockDevourerBehavior

` public class BlockDevourerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BlockDevourerBehavior.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | ` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BlockDevourerBehavior.java#L15) |
| ` public BlockDevourerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BlockDevourerBehavior.java#L14) |

## BlockPlacerBehavior

` public class BlockPlacerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BlockPlacerBehavior.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BlockPlacerBehavior.java#L11) |
| ` public BlockPlacerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L54) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/BlockPlacerBehavior.java#L10) |

## GunpowderBlockBehavior

` public class GunpowderBlockBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/GunpowderBlockBehavior.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/GunpowderBlockBehavior.java#L16) |
| ` public GunpowderBlockBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L55) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/GunpowderBlockBehavior.java#L15) |

## HitBeeNestBehavior

` public class HitBeeNestBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitBeeNestBehavior.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( Level level, BlockPos pos, BlockState state, float fallDistance, AnvilEvent.OnLand event ) ` | ` (!state.hasBlockEntity()) ` 成立时提前返回 ` false `<br>` (honeyLevel < BeehiveBlock.MAX_HONEY_LEVELS) ` 成立时提前返回 ` false `<br>` (filled <= 0) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitBeeNestBehavior.java#L18) |
| ` public HitBeeNestBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L43) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitBeeNestBehavior.java#L17) |

## HitCrabTrapBehavior

` public class HitCrabTrapBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitCrabTrapBehavior.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitCrabTrapBehavior.java#L21) |
| ` public HitCrabTrapBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitCrabTrapBehavior.java#L20) |

## HitSpawnerBehavior

` public class HitSpawnerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitSpawnerBehavior.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( Level level, BlockPos pos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event ) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitSpawnerBehavior.java#L30) |
| ` public HitSpawnerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L45) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/HitSpawnerBehavior.java#L29) |

## ImpactPileBehavior

` public class ImpactPileBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ImpactPileBehavior.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ImpactPileBehavior.java#L12) |
| ` public ImpactPileBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L56) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ImpactPileBehavior.java#L11) |

## ItemSplitterBehavior

` public class ItemSplitterBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemSplitterBehavior.java#L16)

铁砧砸到物品分配器时，把内部物品均分到正前方没有遮挡的空间中。 均分份数即铁砧下落高度。下落距离是逐刻累加的浮点数，需向上取整才能得到 实际掉落的格数（与巨型铁砧震波半径等处一致）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event ) ` | ` (!(level.getBlockEntity(hitBlockPos) instanceof ItemSplitterBlockEntity splitter)) ` 成立时提前返回 ` false `<br>末尾返回 ` splitter.splitToSpace((int) fallDistance + 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemSplitterBehavior.java#L17) |
| ` public ItemSplitterBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L57) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemSplitterBehavior.java#L16) |

## ItemStampingBehavior

` public class ItemStampingBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L32)

冲压台行为：铁砧砸落时直接读取冲压平台方块实体中的原料执行冲压配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event ) ` | ` (!(level.getBlockEntity(hitBlockPos) instanceof StampingPlatformBlockEntity platform)) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStampingBehavior.processPlatform(platform, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L33) |
| ` public static boolean processPlatform(StampingPlatformBlockEntity platform, Level level) ` | 从冲压台原料槽读取物品执行冲压配方，产物掉落至冲压台下方一格。<br>末尾返回 ` processItemHandler( platform.getInput(), platform.getBlockPos(), level ) `<br>[调用处 ItemStampingBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L48) |
| ` public static int compareRecipeHolders( RecipeHolder<StampingUniqueItemsRecipe> holderA, RecipeHolder<StampingUniqueItemsRecipe> holderB ) ` | 末尾返回 ` a.mergedIngredients.size() - b.mergedIngredients.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L122) |
| ` public ItemStampingBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L47) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L32) |

## MagnetBlockBehavior

` public class MagnetBlockBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/MagnetBlockBehavior.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/MagnetBlockBehavior.java#L18) |
| ` public MagnetBlockBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L64) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/MagnetBlockBehavior.java#L17) |

## MassInjectBehavior

` public class MassInjectBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/MassInjectBehavior.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event ) ` | ` (!(blockEntity instanceof SpaceOvercompressorBlockEntity compressor)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/MassInjectBehavior.java#L24) |
| ` public MassInjectBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L48) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/MassInjectBehavior.java#L23) |

## RedstoneEMPBehavior

` public class RedstoneEMPBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/RedstoneEMPBehavior.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( Level level, BlockPos pos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event ) ` | ` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/RedstoneEMPBehavior.java#L21) |
| ` public RedstoneEMPBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L40) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/RedstoneEMPBehavior.java#L20) |

## ResetVaultBehavior

` public class ResetVaultBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ResetVaultBehavior.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event ) ` | ` (!level.getBlockState(hitBlockPos).is(ModBlockTags.STORAGE_BLOCKS_LEAD)) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ResetVaultBehavior.java#L16) |
| ` public ResetVaultBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ResetVaultBehavior.java#L15) |

## SugarBlockBehavior

` public class SugarBlockBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/SugarBlockBehavior.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/SugarBlockBehavior.java#L11) |
| ` public SugarBlockBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L58) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/SugarBlockBehavior.java#L10) |

## TimeWarpPlayerBehavior

` public class TimeWarpPlayerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/TimeWarpPlayerBehavior.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | ` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` false `<br>` (!activeBeacon) ` 成立时提前返回 ` false `<br>` (players.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/TimeWarpPlayerBehavior.java#L18) |
| ` public TimeWarpPlayerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L59) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/TimeWarpPlayerBehavior.java#L17) |

## TranscendiumBehavior

` public class TranscendiumBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/TranscendiumBehavior.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | ` (!hitBlockState.is(ModBlocks.OVERHEATED_EMBER_METAL_BLOCK)) ` 成立时提前返回 ` false `<br>` (itemEntities.isEmpty()) ` 成立时提前返回 ` false `<br>` (!chargedNeutroniumIngotItem.is(ModItems.CHARGED_NEUTRONIUM_INGOT) \|\| chargedNeutroniumIngotItem.getCount() != 1) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/TranscendiumBehavior.java#L23) |
| ` public TranscendiumBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/TranscendiumBehavior.java#L22) |

## Upgrade2HyperdimensionStationBehavior

` public class Upgrade2HyperdimensionStationBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L35)

将满级潜影集装箱升级为超维存储站： 从顶部砸入 1x 奇点晶体 + 16x 超立方体，该过程不可逆。 仅在潜影集装箱的空间大小已达到满级（4 次空间压缩器升级）时生效。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public int priority() ` | 末尾返回 ` 200 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L41) |
| ` @Override public boolean handle( Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event ) ` | ` (!hitBlockState.is(ModBlocks.SHULKER_CONTAINER)) ` 成立时提前返回 ` false `<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` false `<br>` (!(blockEntity instanceof ShulkerContainerBlockEntity shulker)) ` 成立时提前返回 ` false `<br>` (id == null) ` 成立时提前返回 ` false `<br>` (oldStorage == null \|\| oldStorage.getItems().getSpaceSize() < Upgrade2HyperdimensionStationBehavior.MAX_SPACE_SIZE) ` 成立时提前返回 ` false `<br>` (crystalCount < Upgrade2HyperdimensionStationBehavior.REQUIRED_CRYSTALS \|\| hypercubeCount < Upgrade2HyperdimensionStationBehavior.REQUIRED_HYPERCUBES) ` 成立时提前返回 ` false `<br>` (!(newBe instanceof HyperdimensionStorageStationBlockEntity station)) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L47) |
| ` public Upgrade2HyperdimensionStationBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L70) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L35) |

## Upgrade2ShulkerContainerBehavior

` public class Upgrade2ShulkerContainerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2ShulkerContainerBehavior.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | ` (!hitBlockState.is(ModBlocks.LARGE_CRATE)) ` 成立时提前返回 ` false `<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` false `<br>` (spaceOvercompressor == null \|\| netheriteBlock.isEmpty() \|\| count < 6) ` 成立时提前返回 ` false `<br>` (!(blockEntity instanceof LargeCrateBlockEntity be)) ` 成立时提前返回 ` true `<br>` (be.getId() == null) ` 成立时提前返回 ` true `<br>` (storageOp.isEmpty()) ` 成立时提前返回 ` true `<br>` (!(scBlockEntity instanceof ShulkerContainerBlockEntity scBe)) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2ShulkerContainerBehavior.java#L34) |
| ` public Upgrade2ShulkerContainerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L66) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2ShulkerContainerBehavior.java#L33) |

## UpgradeShulkerContainerBehavior

` public class UpgradeShulkerContainerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/UpgradeShulkerContainerBehavior.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(Level level, BlockPos hitBlockPos, BlockState hitBlockState, float fallDistance, AnvilEvent.OnLand event) ` | ` (!hitBlockState.is(ModBlocks.SHULKER_CONTAINER)) ` 成立时提前返回 ` false `<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` false `<br>` (count <= 0) ` 成立时提前返回 ` false `<br>` (!(blockEntity instanceof ShulkerContainerBlockEntity be)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/UpgradeShulkerContainerBehavior.java#L29) |
| ` public UpgradeShulkerContainerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L72) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/UpgradeShulkerContainerBehavior.java#L23) |
