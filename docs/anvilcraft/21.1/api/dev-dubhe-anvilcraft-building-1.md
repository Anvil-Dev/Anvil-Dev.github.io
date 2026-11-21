# dev.dubhe.anvilcraft.building（BlockEntityContentAdapter 至 BuildingRodObstructions）



## BlockEntityContentAdapter

` public final class BlockEntityContentAdapter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L36)

从结构方块实体 NBT 拆出真实物品槽,配置字段留在剥离后的 NBT 里供提交恢复。 战利品表箱子不能在规划时生成物品,记为无法映射。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Extracted extract(BlockState state, @Nullable CompoundTag nbt, HolderLookup.Provider registries) ` | ` (nbt == null \|\| nbt.isEmpty()) ` 成立时提前返回 ` Extracted.empty() `<br>末尾返回 ` extract(BlockEntity.loadStatic(BlockPos.ZERO, state, nbt, registries), nbt, registries, null) `<br>[调用处 BuildingBlockMaterial.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingBlockMaterial.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L49) |
| ` public static void insert( BlockEntity blockEntity, List<SlotStack> contents, HolderLookup.Provider registries ) ` | 实现调用 ` contents.isEmpty() `<br>分支 ` (blockEntity instanceof LecternBlockEntity lectern) ` 内调用 ` lectern.setBook(contents.getFirst().stack().copy()) `<br>分支 ` (blockEntity instanceof LecternBlockEntity lectern) ` 内调用 ` contents.getFirst().stack().copy() `<br>[调用处 BuildingRodService.commit](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L884) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L106) |

## BlockEntityContentAdapter.Extracted

` public record Extracted(CompoundTag config, List<SlotStack> contents, boolean unmapped) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Extracted empty() ` | 末尾返回 ` new Extracted(new CompoundTag(), List.of(), false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L41) |
| ` public Extracted(CompoundTag config, List<SlotStack> contents, boolean unmapped) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L40) |
| ` public CompoundTag config() ` | 读取 record 分量 ` config ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L40) |
| ` public List<SlotStack> contents() ` | 读取 record 分量 ` contents ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L40) |
| ` public boolean unmapped() ` | 读取 record 分量 ` unmapped ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L40) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L40) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L40) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L40) |

## BlockEntityContentAdapter.SlotStack

` public record SlotStack(int slot, ItemStack stack) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SlotStack(int slot, ItemStack stack) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L37) |
| ` public int slot() ` | 读取 record 分量 ` slot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L37) |
| ` public ItemStack stack() ` | 读取 record 分量 ` stack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L37) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L37) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L37) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlockEntityContentAdapter.java#L37) |

## BlueprintBlockConfiguration

` public final class BlueprintBlockConfiguration `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintBlockConfiguration.java#L57)

恢复蓝图设置与运行进度；库存由材料系统供应，身份由当前放置重建。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void transform( CompoundTag config, BlueprintPlacement placement, @Nullable BlockPos sourceOrigin ) ` | 实现调用 ` "minecraft:piston".equals(config.getString("id")) `<br>实现调用 ` config.getString("id") `<br>分支 ` ("minecraft:piston".equals(config.getString("id"))) ` 内调用 ` NbtUtils.readBlockState(BuiltInRegistries.BLOCK.asLookup(), config.getCompound("blockState")) `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L565) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintBlockConfiguration.java#L317) |
| ` @Nullable public static BlockPos sourceOrigin(StructureSnapshot snapshot) ` | 末尾返回 ` origin `<br>[调用处 BlueprintEntities.relocateMemories](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintEntities.java#L106) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintBlockConfiguration.java#L360) |

## BlueprintBlockEntities

` public final class BlueprintBlockEntities `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintBlockEntities.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public static BlockEntity create(Level level, BlockPos pos, BlockState state, @Nullable CompoundTag data) ` | ` (entity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` entity `<br>[调用处 BuildingRegionSnapshot.restore](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L243) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintBlockEntities.java#L18) |

## BlueprintCapture

` public final class BlueprintCapture `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintCapture.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public static CompoundTag captureEntity(Entity entity) ` | ` (!BlueprintLeashes.save(entity, tag)) ` 成立时提前返回 ` null `<br>末尾返回 ` tag `<br>[调用处 StructureScannerBlockEntity.captureEntities](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StructureScannerBlockEntity.java#L434) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintCapture.java#L27) |
| ` public static BlueprintNormalizer.Result capture(ServerLevel level, AABB area) ` | 末尾返回 ` BlueprintNormalizer.normalize(ScannerDiskNormalizer.normalize(raw, Direction.NORTH, false)) `<br>[调用处 StructureSaveUtil.buildSnapshot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/StructureSaveUtil.java#L148) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintCapture.java#L36) |

## BlueprintFluids

` public final class BlueprintFluids `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintFluids.java#L20)

只读检查液体源的可达范围，不模拟液位、不产生任何流体更新。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isFlowing(BlockState state) ` | 末尾返回 ` state.getBlock() instanceof LiquidBlock && !state.getFluidState().isSource() `<br>[调用处 BlueprintNormalizer.normalize](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L83) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintFluids.java#L24) |
| ` public static Set<BlockPos> reachable(Map<BlockPos, BlockState> blocks) ` | 末尾返回 ` reached `<br>[调用处 BlueprintNormalizer.normalize](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintFluids.java#L28) |

## BlueprintMultiblocks

` public final class BlueprintMultiblocks `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L24)

核心选择与部件展开只用于生成完整蓝图；部署只变换已保存的每一格。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean shouldRecord(BlockState state) ` | ` (state.getBlock() instanceof AbstractMultiPartBlock<?> block) ` 成立时提前返回 ` block.isMainPart(state) `<br>` (isDoubleBlock(state)) ` 成立时提前返回 ` state.getValue(BlockStateProperties.DOUBLE_BLOCK_HALF) == DoubleBlockHalf.LOWER `<br>` (state.getBlock() instanceof BedBlock) ` 成立时提前返回 ` state.getValue(BedBlock.PART) == BedPart.FOOT `<br>末尾返回 ` !(state.getBlock() instanceof PistonHeadBlock) `<br>[调用处 StructureScannerBlockEntity.scanNextLayer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StructureScannerBlockEntity.java#L373) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L31) |
| ` public static BlockPos core(BlockPos pos, BlockState state) ` | ` (state.getBlock() instanceof AbstractMultiPartBlock<?> block) ` 成立时提前返回 ` block.getMainPartPos(pos, state) `<br>` (isDoubleBlock(state) && !shouldRecord(state)) ` 成立时提前返回 ` pos.below() `<br>` (state.getBlock() instanceof BedBlock && !shouldRecord(state)) ` 成立时提前返回 ` pos.relative(state.getValue(BedBlock.FACING).getOpposite()) `<br>` (state.getBlock() instanceof PistonHeadBlock) ` 成立时提前返回 ` pos.relative(state.getValue(PistonHeadBlock.FACING).getOpposite()) `<br>末尾返回 ` pos `<br>[调用处 BuildingRegionSnapshot.checkParts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L205) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L38) |
| ` public static void forEachPart(BlockPos pos, BlockState state, BiConsumer<BlockPos, BlockState> consumer) ` | 实现调用 ` state.getBlock() `<br>实现调用 ` block.isMainPart(state) `<br>实现调用 ` addParts(pos, state, block, consumer) `<br>[调用处 StructureScannerBlockEntity.scanNextLayer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/StructureScannerBlockEntity.java#L374) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L54) |
| ` public static void forEachPart( BlockPos pos, BlockState state, BlueprintPlacement placement, BiConsumer<BlockPos, BlockState> consumer ) ` | 执行 ` forEachPart(pos, state, (partPos, partState) -> consumer.accept(placement.worldOf(partPos), placement.stateOf(partState))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L72) |
| ` public static List<PlacedBlock> expand(StructureSnapshot snapshot, BlueprintPlacement placement, int layer) ` | 末尾返回 ` List.copyOf(blocks) `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L518) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L84) |

## BlueprintMultiblocks.PlacedBlock

` public record PlacedBlock(BlockPos pos, BlockState state, Optional<CompoundTag> nbt) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PlacedBlock(BlockPos pos, BlockState state, Optional<CompoundTag> nbt) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L28) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L28) |
| ` public BlockState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L28) |
| ` public Optional<CompoundTag> nbt() ` | 读取 record 分量 ` nbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L28) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L28) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintMultiblocks.java#L28) |

## BlueprintNormalizer

` public final class BlueprintNormalizer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L27)

扫描、导入和旧磁盘共用的完整化入口，所有修复发生在写入世界之前。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static StructureSnapshot load(CompoundTag tag, HolderLookup.Provider registries, Direction facing, boolean upsideDown) throws ConstructionBlueprintException ` | ` (cached != null) ` 成立时提前返回 ` cached `<br>末尾返回 ` normalized `<br>[调用处 BuildingRodService.blueprints](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L484) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L39) |
| ` public static Result normalize(StructureSnapshot snapshot) ` | 实现调用 ` snapshot.blocks() `<br>实现调用 ` snapshot.stateOf(entry) `<br>实现调用 ` OrdinaryBlockAdapter.mapping(state) `<br>[调用处 BlueprintCapture.capture](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintCapture.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L51) |

## BlueprintNormalizer.Result

` public record Result(StructureSnapshot snapshot, BlockPos offset, int added, int removed) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(StructureSnapshot snapshot, BlockPos offset, int added, int removed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L36) |
| ` public StructureSnapshot snapshot() ` | 读取 record 分量 ` snapshot ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L36) |
| ` public BlockPos offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L36) |
| ` public int added() ` | 读取 record 分量 ` added ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L36) |
| ` public int removed() ` | 读取 record 分量 ` removed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L36) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L36) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L36) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintNormalizer.java#L36) |

## BlueprintPlacement

` public record BlueprintPlacement(BlockPos anchor, Rotation rotation, Mirror mirror) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L21)

蓝图放置参数与坐标变换。快照局部坐标以零点为枢轴按原版 StructureTemplate 语义镜像和旋转,再平移到锚点;方块状态使用原版 mirror/rotate,保证与最终提交一致。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Rotation facingPlayer(Direction source, Direction playerFacing) ` | 末尾返回 ` Rotation.NONE `<br>[调用处 BuildingRodClient.viewRotation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L262) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L22) |
| ` @SuppressWarnings("deprecation") public BlockPos localOf(BlockPos snapshotLocal) ` | 快照局部方块坐标经镜像与旋转后的局部坐标,不含锚点平移。<br>末尾返回 ` StructureTemplate.transform(snapshotLocal, this.mirror, this.rotation, BlockPos.ZERO) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L31) |
| ` public Vec3 localOf(Vec3 snapshotLocal) ` | 快照局部连续坐标经镜像与旋转后的局部坐标,不含锚点平移。 先变换所在方块再变换格内小数,使矿车等实体仍落在对应方块格子里; 原版 StructureTemplate#transform(Vec3, Mirror, Rotation, BlockPos) 绕原点直接变换会把格内偏移甩到邻格。<br>末尾返回 ` this.localOf(snapshotLocal, BlockPos.containing(snapshotLocal)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L41) |
| ` public Vec3 localOf(Vec3 snapshotLocal, BlockPos snapshotBlock) ` | 以快照记录的方块格为格子原点变换格内小数,使矿车跟它所在的轨道格一起走。<br>末尾返回 ` new Vec3(transformed.getX() + rx, transformed.getY() + fy, transformed.getZ() + rz) `<br>[调用处 BlueprintPlacement.localOf](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L48) |
| ` public float yawDegrees() ` | 与 Axis.YP.rotationDegrees 同号的结构偏航,供投影姿态插值。<br>末尾返回 ` switch (this.rotation) { case NONE -> 0.0F; case CLOCKWISE_90 -> -90.0F; case CLOCKWISE_180 -> 180.0F; case COUNTERCLOCKWISE_90 -> 90.0F; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L80) |
| ` public float mirrorX() ` | 末尾返回 ` this.mirror == Mirror.FRONT_BACK ? -1.0F : 1.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L89) |
| ` public float mirrorZ() ` | 末尾返回 ` this.mirror == Mirror.LEFT_RIGHT ? -1.0F : 1.0F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L93) |
| ` public BlockPos worldOf(BlockPos local) ` | 快照局部方块坐标对应的世界坐标。<br>末尾返回 ` this.localOf(local).offset(this.anchor) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L98) |
| ` public Vec3 worldOf(Vec3 local) ` | 快照局部连续坐标对应的世界坐标,用于实体条目。<br>末尾返回 ` transformed.add(this.anchor.getX(), this.anchor.getY(), this.anchor.getZ()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L103) |
| ` public BlockState stateOf(BlockState state) ` | 应用镜像与旋转后的方块状态。<br>末尾返回 ` state.mirror(this.mirror).rotate(this.rotation) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L109) |
| ` public BoundingBox bounds(Vec3i size) ` | 放置后整个蓝图的世界包围盒。<br>末尾返回 ` BoundingBox.fromCorners(first, second) `<br>[调用处 BlueprintPlacement.tile](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L114) |
| ` public List<BlueprintPlacement> tile(StructureSnapshot snapshot, BlockPos last) ` | ` (countX > AnvilCraft.CONFIG.equipment.buildingRodMaxBlocks \|\| countY > AnvilCraft.CONFIG.equipment.buildingRodMaxBlocks \|\| countZ > AnvilCraft.CONFIG.equipment.buildingRodMaxBlocks) ` 成立时提前返回 ` List.of() `<br>` (count > 1 && count * entries > AnvilCraft.CONFIG.equipment.buildingRodMaxBlocks) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` List.copyOf(placements) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L120) |
| ` public BlueprintPlacement(BlockPos anchor, Rotation rotation, Mirror mirror) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L21) |
| ` public BlockPos anchor() ` | 读取 record 分量 ` anchor ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L21) |
| ` public Rotation rotation() ` | 读取 record 分量 ` rotation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L21) |
| ` public Mirror mirror() ` | 读取 record 分量 ` mirror ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintPlacement.java#L21) |

## BlueprintTicks

` public final class BlueprintTicks `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String KEY ` | 初值 ` "anvilcraft:scheduled_ticks" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L23) |
| ` public static List<Entry> read(CompoundTag tag) ` | ` (saved.size() > 32768) ` 成立时抛出 ` new IllegalArgumentException("Too many scheduled blueprint ticks") `<br>末尾返回 ` ticks `<br>[调用处 StructureSnapshotCodec.parse](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/StructureSnapshotCodec.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L38) |
| ` public static void write(CompoundTag tag, List<Entry> ticks) ` | 实现调用 ` entry.put("pos", NbtUtils.writeBlockPos(tick.pos())) `<br>实现调用 ` NbtUtils.writeBlockPos(tick.pos()) `<br>实现调用 ` tick.pos() `<br>[调用处 LitematicaImporter.convert](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/LitematicaImporter.java#L173) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L55) |
| ` public static List<Entry> capture(ServerLevel level, BoundingBox bounds) ` | 末尾返回 ` ticks `<br>[调用处 BlueprintCapture.capture](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintCapture.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L70) |
| ` public static void restore(ServerLevel level, List<Entry> ticks, Set<BlockPos> placed) ` | 实现调用 ` ticks.stream().sorted(Comparator.comparingLong(Entry::order)).toList() `<br>实现调用 ` ticks.stream().sorted(Comparator.comparingLong(Entry::order)) `<br>实现调用 ` ticks.stream() `<br>[调用处 BuildingCommit.activatePlaced](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L90) |

## BlueprintTicks.Entry

` public record Entry(BlockPos pos, ResourceLocation type, int delay, int priority, boolean fluid, long order) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Entry(BlockPos pos, ResourceLocation type, int delay, int priority, boolean fluid) ` | 执行 ` this(pos, type, delay, priority, fluid, 0) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L29) |
| ` public Entry at(BlockPos target) ` | 末尾返回 ` new Entry(target, this.type, this.delay, this.priority, this.fluid, this.order) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L33) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28) |
| ` public ResourceLocation type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28) |
| ` public int delay() ` | 读取 record 分量 ` delay ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28) |
| ` public int priority() ` | 读取 record 分量 ` priority ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28) |
| ` public boolean fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28) |
| ` public long order() ` | 读取 record 分量 ` order ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BlueprintTicks.java#L28) |

## BuildingCommit

` public final class BuildingCommit `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L29)

移植悦灵建造的静默提交，全部状态就位后再恢复方块实体，避免红石和多方块中途更新。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void quietly(Level level, Runnable action) ` | 仅在本次蓝图提交的调用栈内抑制恢复方块实体引起的间接更新。<br>实现调用 ` QUIET_LEVEL.get() `<br>实现调用 ` QUIET_LEVEL.set(level) `<br>实现调用 ` action.run() `<br>[调用处 BuildingRegionSnapshot.restore](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L234) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L40) |
| ` public static boolean isQuiet(Level level) ` | 末尾返回 ` QUIET_LEVEL.get() == level `<br>[调用处 BlueprintLevelMixin.anvilcraft$quietBlueprintUpdates](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintLevelMixin.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L51) |
| ` @Nullable public static Level quietLevel() ` | 末尾返回 ` QUIET_LEVEL.get() `<br>[调用处 BlueprintTicksMixin.anvilcraft$quietBlueprintTicks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintTicksMixin.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L55) |
| ` public static void activate(ServerLevel level, List<BuildingRodService.Cell> cells, List<BlueprintTicks.Entry> ticks) ` | 实现调用 ` cells.stream() .collect(Collectors.toMap(BuildingRodService.Cell::pos, BuildingRodService.Cell::state)) `<br>实现调用 ` cells.stream() `<br>实现调用 ` Collectors.toMap(BuildingRodService.Cell::pos, BuildingRodService.Cell::state) `<br>[调用处 BuildingRegionSnapshot.restore](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L277) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L60) |
| ` public static void activate(ServerLevel level, List<BuildingRodService.Cell> cells) ` | 执行 ` activatePlaced(level, cells) `<br>[调用处 BuildingRodService.commit](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L917) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L73) |
| ` public static boolean isRestoredObserverUpdate(Level level, Direction direction, BlockState source, BlockPos pos, BlockPos sourcePos) ` | ` (activation == null \|\| activation.level() != level) ` 成立时提前返回 ` false `<br>[调用处 BlueprintLevelMixin.anvilcraft$keepBlueprintObserverPhase](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlueprintLevelMixin.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L77) |
| ` public static void set(Level level, BlockPos pos, BlockState state) ` | 实现调用 ` level.isInWorldBounds(pos) `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` BuildingRodUndo.replaced(level, pos, previous, state) `<br>[调用处 BuildingRegionSnapshot.restore](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRegionSnapshot.java#L237) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingCommit.java#L126) |

## BuildingEntityOp

` public record BuildingEntityOp(CompoundTag entityNbt, ItemStack returnStack) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityOp.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BuildingEntityOp(CompoundTag entityNbt, ItemStack returnStack) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityOp.java#L6) |
| ` public CompoundTag entityNbt() ` | 读取 record 分量 ` entityNbt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityOp.java#L6) |
| ` public ItemStack returnStack() ` | 读取 record 分量 ` returnStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityOp.java#L6) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityOp.java#L6) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityOp.java#L6) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityOp.java#L6) |

## BuildingEntityTransform

` public final class BuildingEntityTransform `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityTransform.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CompoundTag transform(StructureSnapshot.EntityEntry entry, BlueprintPlacement placement) ` | 末尾返回 ` tag `<br>[调用处 BuildingRodService.planBlueprint](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L660) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingEntityTransform.java#L22) |

## BuildingMaterials

` public final class BuildingMaterials `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L43)

同一服务端任务内先分配全部材料，预检完成后再统一扣除。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BuildingMaterials(ServerPlayer player) ` | 执行 ` this(player, player.isCreative()) `<br>[调用处 BuildingRodFluids.place](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L37) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L93) |
| ` public boolean reserve(List<ItemStack> materials) ` | ` (this.creative) ` 成立时提前返回 ` true `<br>末尾返回 ` true `<br>[调用处 BuildingMaterials.reserve](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L189) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L171) |
| ` public boolean reserve(List<ItemStack> materials, List<FluidStack> fluids) ` | ` (this.creative) ` 成立时提前返回 ` true `<br>` (!this.reserve(materials)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 BuildingMaterials.reserve](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L312) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L184) |
| ` public boolean consume() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L648) |

## BuildingMaterials.FluidPayment

` public record FluidPayment(UUID storage, FluidStack fluid) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L347)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidPayment(UUID storage, FluidStack fluid) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L347) |
| ` public UUID storage() ` | 读取 record 分量 ` storage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L347) |
| ` public FluidStack fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L347) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L347) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L347) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingMaterials.java#L347) |

## BuildingRodFluids

` public final class BuildingRodFluids `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isWater(ItemStack stack) ` | ` (!(stack.getItem() instanceof BucketItem) \|\| stack.getItem() instanceof MobBucketItem) ` 成立时提前返回 ` false `<br>末尾返回 ` FluidUtil.getFluidContained(stack).filter(fluid -> fluid.getFluid().isSame(Fluids.WATER)).isPresent() `<br>[调用处 BuildingRodClient.updateTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodClient.java#L218) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L27) |
| ` public static List<BuildingRodService.Cell> preview(Player player, BlockPos first, BlockPos last) ` | 末尾返回 ` plan == null ? List.of() : List.copyOf(plan.group.cells) `<br>[调用处 BuildingRodService.preview](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodService.java#L240) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodFluids.java#L56) |

## BuildingRodObstructions

` public final class BuildingRodObstructions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/building/BuildingRodObstructions.java#L16)
