# dev.dubhe.anvilcraft.anvil



## BeaconConversionBehavior

` public class BeaconConversionBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | ` (!(blockEntity instanceof BeaconBlockEntity beaconBlockEntity)) ` 成立时提前返回 ` false `<br>` (beaconBlockEntity.getBeamSections().isEmpty()) ` 成立时提前返回 ` false `<br>` (beaconLevel <= 0) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L31) |
| ` public BeaconConversionBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L60) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BeaconConversionBehavior.java#L21) |

## BlockDevourerBehavior

` public class BlockDevourerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BlockDevourerBehavior.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BlockDevourerBehavior.java#L13) |
| ` public BlockDevourerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BlockDevourerBehavior.java#L12) |

## BlockPlacerBehavior

` public class BlockPlacerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BlockPlacerBehavior.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BlockPlacerBehavior.java#L11) |
| ` public BlockPlacerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L54) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/BlockPlacerBehavior.java#L10) |

## GunpowderBlockBehavior

` public class GunpowderBlockBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/GunpowderBlockBehavior.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/GunpowderBlockBehavior.java#L16) |
| ` public GunpowderBlockBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L55) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/GunpowderBlockBehavior.java#L15) |

## HitBeeNestBehavior

` public class HitBeeNestBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitBeeNestBehavior.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( ServerLevel level, BlockPos pos, BlockState state, double fallDistance, AnvilEvent.OnLand event ) ` | ` (!state.hasBlockEntity()) ` 成立时提前返回 ` false `<br>` (honeyLevel < BeehiveBlock.MAX_HONEY_LEVELS) ` 成立时提前返回 ` false `<br>` (filled <= 0) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitBeeNestBehavior.java#L20) |
| ` public HitBeeNestBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L44) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitBeeNestBehavior.java#L19) |

## HitCrabTrapBehavior

` public class HitCrabTrapBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitCrabTrapBehavior.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitCrabTrapBehavior.java#L20) |
| ` public HitCrabTrapBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L47) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitCrabTrapBehavior.java#L19) |

## HitSpawnerBehavior

` public class HitSpawnerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitSpawnerBehavior.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( ServerLevel level, BlockPos pos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event ) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitSpawnerBehavior.java#L34) |
| ` public HitSpawnerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/HitSpawnerBehavior.java#L32) |

## ImpactPileBehavior

` public class ImpactPileBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ImpactPileBehavior.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ImpactPileBehavior.java#L12) |
| ` public ImpactPileBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L56) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ImpactPileBehavior.java#L11) |

## ItemSplitterBehavior

` public class ItemSplitterBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ItemSplitterBehavior.java#L15)

铁砧砸到物品分配器时，把内部物品均分到正前方没有遮挡的空间中。 均分份数为下落距离的整数部分加一，包含落点所在的一格。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event ) ` | ` (!(level.getBlockEntity(hitBlockPos) instanceof ItemSplitterBlockEntity splitter)) ` 成立时提前返回 ` false `<br>末尾返回 ` splitter.splitToSpace((int) fallDistance + 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ItemSplitterBehavior.java#L16) |
| ` public ItemSplitterBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L57) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ItemSplitterBehavior.java#L15) |

## ItemStampingBehavior

` public class ItemStampingBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event ) ` | ` (!(level.getBlockEntity(hitBlockPos) instanceof StampingPlatformBlockEntity platform)) ` 成立时提前返回 ` false `<br>` (IntStream.range(0, input.size()).allMatch(slot -> input.getResource(slot).isEmpty())) ` 成立时提前返回 ` false `<br>` (selected == null) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L21) |
| ` public static int compareRecipeHolders(RecipeHolder<StampingDiffRecipe> first, RecipeHolder<StampingDiffRecipe> second) ` | ` (groups != 0) ` 成立时提前返回 ` groups `<br>[调用处 ItemStampingBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L47) |
| ` public ItemStampingBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L40) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L20) |

## MagnetBlockBehavior

` public class MagnetBlockBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/MagnetBlockBehavior.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/MagnetBlockBehavior.java#L18) |
| ` public MagnetBlockBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L64) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/MagnetBlockBehavior.java#L17) |

## MassInjectBehavior

` public class MassInjectBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/MassInjectBehavior.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event ) ` | ` (!(blockEntity instanceof SpaceOvercompressorBlockEntity compressor)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/MassInjectBehavior.java#L24) |
| ` public MassInjectBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L48) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/MassInjectBehavior.java#L23) |

## RedstoneEMPBehavior

` public class RedstoneEMPBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/RedstoneEMPBehavior.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( ServerLevel level, BlockPos pos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event ) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/RedstoneEMPBehavior.java#L21) |
| ` public RedstoneEMPBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L41) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/RedstoneEMPBehavior.java#L20) |

## ResetVaultBehavior

` public class ResetVaultBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ResetVaultBehavior.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle( ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event ) ` | ` (!level.getBlockState(hitBlockPos).is(ModBlockTags.STORAGE_BLOCKS_LEAD)) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ResetVaultBehavior.java#L16) |
| ` public ResetVaultBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/ResetVaultBehavior.java#L15) |

## SugarBlockBehavior

` public class SugarBlockBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/SugarBlockBehavior.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/SugarBlockBehavior.java#L11) |
| ` public SugarBlockBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L58) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/SugarBlockBehavior.java#L10) |

## TimeWarpPlayerBehavior

` public class TimeWarpPlayerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/TimeWarpPlayerBehavior.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | ` (!activeBeacon) ` 成立时提前返回 ` false `<br>` (players.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/TimeWarpPlayerBehavior.java#L18) |
| ` public TimeWarpPlayerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L59) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/TimeWarpPlayerBehavior.java#L17) |

## TranscendiumBehavior

` public class TranscendiumBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/TranscendiumBehavior.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | ` (!hitBlockState.is(ModBlocks.OVERHEATED_EMBER_METAL_BLOCK)) ` 成立时提前返回 ` false `<br>` (itemEntities.isEmpty()) ` 成立时提前返回 ` false `<br>` (!chargedNeutroniumIngotItem.is(ModItems.CHARGED_NEUTRONIUM_INGOT) \|\| chargedNeutroniumIngotItem.getCount() != 1) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/TranscendiumBehavior.java#L24) |
| ` public TranscendiumBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/TranscendiumBehavior.java#L23) |

## Upgrade2HyperdimensionStationBehavior

` public class Upgrade2HyperdimensionStationBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L32)

将满级潜影集装箱升级为超维存储站： 从顶部砸入 1x 奇点晶体 + 16x 超立方体，该过程不可逆。 仅在潜影集装箱的空间大小已达到满级（4 次空间压缩器升级）时生效。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public int priority() ` | 末尾返回 ` 200 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L38) |
| ` @Override public boolean handle( ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event ) ` | ` (!hitBlockState.is(ModBlocks.SHULKER_CONTAINER)) ` 成立时提前返回 ` false `<br>` (!(blockEntity instanceof ShulkerContainerBlockEntity shulker)) ` 成立时提前返回 ` false `<br>` (id == null) ` 成立时提前返回 ` false `<br>` (oldStorage == null \|\| oldStorage.getItems().getSpaceSize() < Upgrade2HyperdimensionStationBehavior.MAX_SPACE_SIZE) ` 成立时提前返回 ` false `<br>` (crystalCount < Upgrade2HyperdimensionStationBehavior.REQUIRED_CRYSTALS \|\| hypercubeCount < Upgrade2HyperdimensionStationBehavior.REQUIRED_HYPERCUBES) ` 成立时提前返回 ` false `<br>` (!(newBe instanceof HyperdimensionStorageStationBlockEntity station)) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L44) |
| ` public Upgrade2HyperdimensionStationBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L67) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L32) |

## Upgrade2ShulkerContainerBehavior

` public class Upgrade2ShulkerContainerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2ShulkerContainerBehavior.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | ` (!hitBlockState.is(ModBlocks.LARGE_CRATE)) ` 成立时提前返回 ` false `<br>` (spaceOvercompressor == null \|\| netheriteBlock.isEmpty() \|\| count < 6) ` 成立时提前返回 ` false `<br>` (!(blockEntity instanceof LargeCrateBlockEntity be)) ` 成立时提前返回 ` true `<br>` (be.getId() == null) ` 成立时提前返回 ` true `<br>` (storageOp.isEmpty()) ` 成立时提前返回 ` true `<br>` (!(scBlockEntity instanceof ShulkerContainerBlockEntity scBe)) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2ShulkerContainerBehavior.java#L32) |
| ` public Upgrade2ShulkerContainerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L66) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2ShulkerContainerBehavior.java#L31) |

## UpgradeShulkerContainerBehavior

` public class UpgradeShulkerContainerBehavior implements IAnvilBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/UpgradeShulkerContainerBehavior.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean handle(ServerLevel level, BlockPos hitBlockPos, BlockState hitBlockState, double fallDistance, AnvilEvent.OnLand event) ` | ` (!hitBlockState.is(ModBlocks.SHULKER_CONTAINER)) ` 成立时提前返回 ` false `<br>` (count <= 0) ` 成立时提前返回 ` false `<br>` (!(blockEntity instanceof ShulkerContainerBlockEntity be)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/UpgradeShulkerContainerBehavior.java#L28) |
| ` public UpgradeShulkerContainerBehavior() ` | Java 提供的无参构造器。<br>[调用处 ModAnvilBehaviors.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L68) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/UpgradeShulkerContainerBehavior.java#L22) |
