# dev.dubhe.anvilcraft.api.block



## BlockPlacementRules

` public final class BlockPlacementRules `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L22)

优先解析以方块 ID 命名的数据包规则；缺失时使用代码层的 IBlockPlacementRule 回退规则。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void registerFallback(IBlockPlacementRule rule) ` | 在代码层面注册一个 Fallback 规则。<br>实现调用 ` FALLBACKS.add(rule) `<br>实现调用 ` FALLBACKS.sort(FALLBACK_COMPARATOR) `<br>[调用处 ModBlockPlacementFallbacks.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBlockPlacementFallbacks.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L45) |
| ` public static List<IBlockPlacementRule.PlacementItem> getPlacementItems( HolderLookup.@Nullable Provider registries, BlockState state ) ` | 末尾返回 ` rule == null ? List.of() : rule.getPlacementItems(state) `<br>实现调用 ` getRule(registries, state) `<br>实现调用 ` List.of() `<br>实现调用 ` rule.getPlacementItems(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L50) |
| ` public static BlockState applyBlueprintStateRules( HolderLookup.Provider registries, BlockState baseState, BlockState blueprintState ) ` | 实现调用 ` BlockPlacementRuleSet.inheritBlueprintState(baseState, blueprintState) `<br>实现调用 ` registries.lookup(ModRegistryKeys.BLOCK_PLACEMENT_RULES) `<br>[调用处 BlockPointer.applyToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java#L119) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L87) |
| ` public static List<ItemStack> getPlacementIngredients( HolderLookup.@Nullable Provider registries, BlockState state ) ` | ` (placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` placementItems.stream() .map(IBlockPlacementRule.PlacementItem::placeStack) .filter(stack -> !stack.isEmpty()) .toList() `<br>实现调用 ` getPlacementItems(registries, state) `<br>实现调用 ` placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden) `<br>实现调用 ` placementItems.stream() `<br>实现调用 ` List.of() `<br>实现调用 ` placementItems.stream() .map(IBlockPlacementRule.PlacementItem::placeStack) .filter(stack -> !stack.isEmpty()) `<br>实现调用 ` placementItems.stream() .map(IBlockPlacementRule.PlacementItem::placeStack) `<br>[调用处 MultiblockUtil.ingredientList](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockUtil.java#L347) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L108) |
| ` public static int getPlacementItemCount( HolderLookup.Provider registries, BlockState state, ItemStack stack ) ` | ` (placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden)) ` 成立时提前返回 ` -1 `<br>末尾返回 ` count > 0 ? count : -1 `<br>实现调用 ` getPlacementItems(registries, state) `<br>实现调用 ` placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden) `<br>实现调用 ` placementItems.stream() `<br>实现调用 ` placementItems.stream() .filter(item -> !item.isForbidden() && stack.is(item.item())) `<br>[调用处 BlockItemHandlerPointer.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L90) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L122) |
| ` public static int getPrimaryPlacementItemCount(HolderLookup.Provider registries, BlockState state) ` | ` (placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden)) ` 成立时提前返回 ` -1 `<br>末尾返回 ` placementItems.stream() .mapToInt(IBlockPlacementRule.PlacementItem::count) .filter(count -> count > 0) .findFirst() .orElse(-1) `<br>实现调用 ` getPlacementItems(registries, state) `<br>实现调用 ` placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden) `<br>实现调用 ` placementItems.stream() `<br>实现调用 ` placementItems.stream() .mapToInt(IBlockPlacementRule.PlacementItem::count) .filter(count -> count > 0) `<br>实现调用 ` placementItems.stream() .mapToInt(IBlockPlacementRule.PlacementItem::count) `<br>[调用处 StructureBookUtil.createMaterialListBook](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/StructureBookUtil.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L138) |
| ` public static @Nullable ItemStack getPrimaryPlacementItem(HolderLookup.Provider registries, BlockState state) ` | ` (placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden)) ` 成立时提前返回 ` null `<br>末尾返回 ` null `<br>实现调用 ` getPlacementItems(registries, state) `<br>实现调用 ` placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden) `<br>实现调用 ` placementItems.stream() `<br>实现调用 ` item.placeStack() `<br>实现调用 ` stack.isEmpty() `<br>[调用处 SmartBlockPlacerBlockEntity.createDisplayedBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L709) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L150) |
| ` public static ItemStack getReturnItem(HolderLookup.Provider registries, BlockState state) ` | 放置 state 后需要返还给源的物品，没有则为 ItemStack#EMPTY<br>` (placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden)) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` ItemStack.EMPTY `<br>实现调用 ` getPlacementItems(registries, state) `<br>实现调用 ` placementItems.stream().anyMatch(IBlockPlacementRule.PlacementItem::isForbidden) `<br>实现调用 ` placementItems.stream() `<br>实现调用 ` item.returnStack() `<br>实现调用 ` returnStack.isEmpty() `<br>[调用处 BlockItemHandlerPointer.placeToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L146) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L167) |

## IBlockPlacementRule

` public interface IBlockPlacementRule `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L13)

定义放置匹配方块状态所需的物品

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean matches(BlockState state) ` | [调用处 IBlockPlacementRule.canCreate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L14) |
| ` List<PlacementItem> getPlacementItems(BlockState state) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L16) |
| ` default int getPriority() ` | 规则优先级，越大越优先，用于决定 Fallback 的尝试顺序<br>末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L21) |
| ` default boolean canCreate(BlockState state) ` | 判断该规则是否允许创建（放置）对应方块。<br>末尾返回 ` this.matches(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L28) |

## IBlockPlacementRule.PlacementItem

` record PlacementItem(ItemStack placeStack, ItemStack returnStack) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L38)

放置所需的物品与放置后返还的物品。<br>参数 ` placeStack ` 放置消耗的物品（为空表示禁止放置）<br>参数 ` returnStack ` 放置后返还的物品（如细雪桶放置后返还空桶），没有则为 ItemStack#EMPTY

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PlacementItem(Item item, int count, @Nullable Item returnItem) ` | 执行 ` this( count < 0 ? ItemStack.EMPTY : new ItemStack(item, count), returnItem != null ? new ItemStack(returnItem) : ItemStack.EMPTY ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L39) |
| ` public PlacementItem(Item item, int count) ` | 执行 ` this(item, count, null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L46) |
| ` public boolean isForbidden() ` | 末尾返回 ` this.placeStack.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L50) |
| ` public Item item() ` | 末尾返回 ` this.placeStack.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L54) |
| ` public int count() ` | 末尾返回 ` this.placeStack.getCount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L58) |
| ` public ItemStack placeStack() ` | 读取 record 分量 ` placeStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L38) |
| ` public ItemStack returnStack() ` | 读取 record 分量 ` returnStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L38) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L38) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L38) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBlockPlacementRule.java#L38) |

## IBrokenCrystalsBudding

` public interface IBrokenCrystalsBudding `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBrokenCrystalsBudding.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void anvilcraft$tryGrowBuds(Level level, BlockPos pos, BlockState state) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBrokenCrystalsBudding.java#L10) |
| ` void anvilcraft$tryBreakClusters(Level level, BlockPos pos, BlockState state, BiConsumer<BlockPos, BlockState> breaker) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBrokenCrystalsBudding.java#L12) |

## IBrokenCrystalsCluster

` public interface IBrokenCrystalsCluster `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBrokenCrystalsCluster.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean isFullyGrown(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IBrokenCrystalsCluster.java#L8) |

## ICauldron

` public interface ICauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/ICauldron.java#L4)

炼药锅实现共有的能力。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean supportsMultipleFluidOutputs() ` | 检查此炼药锅是否可以处理包含多个流体输出的配方。<br>返回 是否支持多个流体输出<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/ICauldron.java#L10) |

## ICauldronGeometry

` public interface ICauldronGeometry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/ICauldronGeometry.java#L10)

描述非标准炼药锅的内部空间与承载方块

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` AABB getCauldronInnerArea(BlockPos pos, BlockState state) ` | 获取锅内可容纳实体的区域 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/ICauldronGeometry.java#L12) |
| ` List<BlockPos> getCauldronBottomPositions(BlockPos pos, BlockState state) ` | 获取锅底下方用于加热的方块位置 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/ICauldronGeometry.java#L15) |

## IDamagingHeater

` public interface IDamagingHeater `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IDamagingHeater.java#L6)

会对站在其上或位于其上方锅内的实体造成伤害的加热器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean isActive(BlockState state) ` | 该状态下加热器是否正在工作 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IDamagingHeater.java#L8) |

## IEmberBlock

` public interface IEmberBlock extends INegativeShapeBlock<IEmberBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmberBlock.java#L18)

余烬金属系方块

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` BlockState getCheckBlockState() ` | [调用处 IEmberBlock.tryAbsorbWater](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmberBlock.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmberBlock.java#L19) |
| ` void setCheckBlockState(BlockState blockState) ` | [调用处 IEmberBlock.removeFluidBreadthFirstSearch](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmberBlock.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmberBlock.java#L21) |
| ` @Override default Class<IEmberBlock> getBlockType() ` | 末尾返回 ` IEmberBlock.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmberBlock.java#L23) |
| ` default void tryAbsorbWater(Level level, BlockPos pos) ` | 尝试吸水<br>实现调用 ` this.removeFluidBreadthFirstSearch(level, pos) `<br>分支 ` (this.removeFluidBreadthFirstSearch(level, pos)) ` 内调用 ` level.levelEvent(2001, pos, Block.getId(this.getCheckBlockState())) `<br>分支 ` (this.removeFluidBreadthFirstSearch(level, pos)) ` 内调用 ` Block.getId(this.getCheckBlockState()) `<br>分支 ` (this.removeFluidBreadthFirstSearch(level, pos)) ` 内调用 ` this.getCheckBlockState() `<br>分支 ` (this.removeFluidBreadthFirstSearch(level, pos)) ` 内调用 ` level.playSound(null, pos, SoundEvents.LAVA_EXTINGUISH, SoundSource.BLOCKS, 1F, 1F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmberBlock.java#L29) |

## IEmptyCauldron

` public interface IEmptyCauldron extends IIgnitableCauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmptyCauldron.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default boolean isEmpty(BlockCache cache, BlockPos pos) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmptyCauldron.java#L9) |
| ` @Override default boolean isIgnited(BlockCache cache, BlockPos pos) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmptyCauldron.java#L14) |
| ` @Override default Fluid getFluid(BlockCache cache, BlockPos pos) ` | 末尾返回 ` Fluids.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IEmptyCauldron.java#L19) |

## IFrostBlock

` public interface IFrostBlock extends INegativeShapeBlock<IFrostBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IFrostBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default Class<IFrostBlock> getBlockType() ` | 末尾返回 ` IFrostBlock.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IFrostBlock.java#L4) |

## IIgnitableCauldron

` public interface IIgnitableCauldron extends ICauldron `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IIgnitableCauldron.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean isEmpty(BlockCache cache, BlockPos pos) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IIgnitableCauldron.java#L10) |
| ` default boolean isIgnited(BlockCache cache, BlockPos pos) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IIgnitableCauldron.java#L14) |
| ` default void setIgnited(BlockCache cache, BlockPos pos, boolean ignited) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IIgnitableCauldron.java#L18) |
| ` Fluid getFluid(BlockCache cache, BlockPos pos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IIgnitableCauldron.java#L21) |
| ` default int getFluidAmount(BlockCache cache, BlockPos pos) ` | 末尾返回 ` Integer.MAX_VALUE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IIgnitableCauldron.java#L23) |
| ` default OptionalInt consumeOnce(BlockCache cache, BlockPos pos, boolean simulate) ` | 末尾返回 ` OptionalInt.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IIgnitableCauldron.java#L27) |

## IItemSuctionContainer

` public interface IItemSuctionContainer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IItemSuctionContainer.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` static boolean allowsSuction(Level level, BlockPos pos) ` | 末尾返回 ` level.getBlockState(pos).getBlock() instanceof IItemSuctionContainer \|\| level.getBlockEntity(pos) instanceof IItemSuctionContainer `<br>[调用处 BaseChuteBlockEntity.canSuctionItemEntities](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BaseChuteBlockEntity.java#L275) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IItemSuctionContainer.java#L7) |

## INegativeMatterBlock

` public interface INegativeMatterBlock extends INegativeShapeBlock<INegativeMatterBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/INegativeMatterBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default Class<INegativeMatterBlock> getBlockType() ` | 末尾返回 ` INegativeMatterBlock.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/INegativeMatterBlock.java#L4) |

## INegativeShapeBlock

` public interface INegativeShapeBlock<T> extends IHammerRemovable, Predicate<BlockState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/INegativeShapeBlock.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Class<T> getBlockType() ` | [调用处 INegativeShapeBlock.test](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/INegativeShapeBlock.java#L13) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/INegativeShapeBlock.java#L9) |
| ` @Override default boolean test(BlockState blockState) ` | 末尾返回 ` this.getBlockType().isInstance(blockState.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/INegativeShapeBlock.java#L11) |

## IOverheatedEmberBlock

` public interface IOverheatedEmberBlock extends INegativeShapeBlock<IOverheatedEmberBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IOverheatedEmberBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default Class<IOverheatedEmberBlock> getBlockType() ` | 末尾返回 ` IOverheatedEmberBlock.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IOverheatedEmberBlock.java#L4) |

## ITranscendiumBlock

` public interface ITranscendiumBlock extends INegativeShapeBlock<ITranscendiumBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/ITranscendiumBlock.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default Class<ITranscendiumBlock> getBlockType() ` | 末尾返回 ` ITranscendiumBlock.class ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/ITranscendiumBlock.java#L4) |

## IVoidEnergyAmplifier

` public interface IVoidEnergyAmplifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IVoidEnergyAmplifier.java#L6)

方块实现此接口后，可修改虚空能发电机的虚空能增幅量。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int getVoidEnergyAmplification() ` | 返回该方块提供的虚空能增幅量。<br>返回 计入虚空能发电机方块数量时的增幅量，负数为增益 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/IVoidEnergyAmplifier.java#L12) |
