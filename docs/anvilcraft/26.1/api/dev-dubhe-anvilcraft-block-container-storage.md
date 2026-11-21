# dev.dubhe.anvilcraft.block.container.storage



## CrateBlock

` public class CrateBlock extends Block implements EntityBlock, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L52)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BooleanProperty DISPOSE ` | 初值 ` BooleanProperty.create("dispose") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L53) |
| ` public CrateBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.registerDefaultState(this.stateDefinition.any().setValue(DISPOSE, false)) `<br>实现调用 ` this.stateDefinition.any().setValue(DISPOSE, false) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L55) |
| ` public static boolean hasAdjacentVoidMatter(LevelReader level, BlockPos pos) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L65) |
| ` public static void updateDisposeState(Level level, BlockPos pos) ` | 实现调用 ` level.getBlockState(pos) `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` state.getBlock() `<br>[调用处 CrateBlockEntity.refreshDispose](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/storage/CrateBlockEntity.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L72) |
| ` public static Component displayName(BlockState state) ` | 末尾返回 ` state.getValue(DISPOSE) ? Component.translatable("block.anvilcraft.overflow_disposal_crate") : state.getBlock().getName() `<br>[调用处 StorageScreen.refreshTitle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L564) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L90) |
| ` @Override public ItemStack getCloneItemStack(LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L94) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L101) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.CRATE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L111) |
| ` public static List<CrateBlockEntity> getNearbyCrates(Level level, BlockPos sourcePos) ` | 末尾返回 ` crates `<br>[调用处 StorageServerStub.getView](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/rpc/StorageServerStub.java#L2891) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/CrateBlock.java#L116) |

## HyperdimensionStorageStationBlock

` public class HyperdimensionStorageStationBlock extends SimpleMultiPartBlock<Cube3x3PartHalf> implements MultiPartBlockEntity<Cube3x3PartHalf, HyperdimensionStorageStationBlock>, IHammerRemovable, ITranscendiumBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Cube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Cube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L42) |
| ` public HyperdimensionStorageStationBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L44) |
| ` @Override public ItemStack getCloneItemStack(LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L48) |
| ` @Override public Property<Cube3x3PartHalf> getPart() ` | 末尾返回 ` HyperdimensionStorageStationBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L55) |
| ` @Override public Cube3x3PartHalf[] getParts() ` | 末尾返回 ` Cube3x3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L60) |
| ` @Override public HyperdimensionStorageStationBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L70) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.HYPERDIMENSION_STORAGE_STATION.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L85) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L90) |
| ` public static int getLightLevel(BlockState state) ` | 实现调用 ` state.getValue(HyperdimensionStorageStationBlock.HALF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L132) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 实现调用 ` state.getValue(HyperdimensionStorageStationBlock.HALF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/HyperdimensionStorageStationBlock.java#L141) |

## LargeCrateBlock

` public class LargeCrateBlock extends SimpleMultiPartBlock<Cube3x3PartHalf> implements MultiPartBlockEntity<Cube3x3PartHalf, LargeCrateBlock>, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<Cube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", Cube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L41) |
| ` public LargeCrateBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L43) |
| ` @Override public ItemStack getCloneItemStack(LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L47) |
| ` @Override public boolean hasAnalogOutputSignal(BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L54) |
| ` @Override public Property<Cube3x3PartHalf> getPart() ` | 末尾返回 ` LargeCrateBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L65) |
| ` @Override public Cube3x3PartHalf[] getParts() ` | 末尾返回 ` Cube3x3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L70) |
| ` @Override public LargeCrateBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L80) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.LARGE_CRATE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L95) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 实现调用 ` state.getValue(LargeCrateBlock.HALF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/LargeCrateBlock.java#L130) |

## ShulkerContainerBlock

` public class ShulkerContainerBlock extends FlexibleMultiPartBlock<OpenedCube3x3PartHalf, BooleanProperty, Boolean> implements MultiPartBlockEntity<OpenedCube3x3PartHalf, ShulkerContainerBlock>, IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<OpenedCube3x3PartHalf> HALF ` | 初值 ` EnumProperty.create("half", OpenedCube3x3PartHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L46) |
| ` public static final BooleanProperty OPENED ` | 初值 ` BooleanProperty.create("opened") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L47) |
| ` public ShulkerContainerBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any() .setValue(ShulkerContainerBlock.HALF, OpenedCube3x3PartHalf.BOTTOM_CENTER) `<br>实现调用 ` this.stateDefinition.any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L49) |
| ` @Override public ItemStack getCloneItemStack(LevelReader level, BlockPos pos, BlockState state, boolean includeData, Player player) ` | 末尾返回 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L58) |
| ` @Override public Property<OpenedCube3x3PartHalf> getPart() ` | 末尾返回 ` ShulkerContainerBlock.HALF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L90) |
| ` @Override public OpenedCube3x3PartHalf[] getParts() ` | 末尾返回 ` OpenedCube3x3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L95) |
| ` @Override public BooleanProperty getAdditionalProperty() ` | 末尾返回 ` ShulkerContainerBlock.OPENED ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L100) |
| ` @Override public ShulkerContainerBlock getMultiBlock() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L105) |
| ` @Override public BlockEntity createBlockEntity(BlockPos pos, BlockState state) ` | 末尾返回 ` ModBlockEntities.SHULKER_CONTAINER.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L110) |
| ` public void setOpened(Level level, BlockPos pos, boolean opened) ` | 实现调用 ` level.getBlockState(pos) `<br>实现调用 ` state.is(this) `<br>实现调用 ` state.getValue(ShulkerContainerBlock.OPENED) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L123) |
| ` @Override public BlockState playerWillDestroy(Level level, BlockPos pos, BlockState state, Player player) ` | 末尾返回 ` super.playerWillDestroy(level, pos, state, player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L130) |
| ` @Override public VoxelShape getPartShape(BlockState state) ` | 实现调用 ` state.getValue(ShulkerContainerBlock.HALF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L170) |
