# dev.dubhe.anvilcraft.block.placement



## BlockPlacementRuleSet

` public record BlockPlacementRuleSet(List<StateRule> rules, Map<String, String> state) implements IBlockPlacementRule `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L35)

单个方块的放置规则文件，描述状态与物品的映射。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<BlockPlacementRuleSet> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L47) |
| ` public BlockPlacementRuleSet(List<StateRule> rules, Map<String, String> state) ` | 实现调用 ` List.copyOf(rules) `<br>实现调用 ` Collections.unmodifiableMap(new LinkedHashMap<>(state)) `<br>[调用处 ModBlockPlacementRuleProvider.run](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L107) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L54) |
| ` @Override public boolean matches(BlockState state) ` | 末尾返回 ` this.rules.stream().anyMatch(rule -> rule.matches(state)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L59) |
| ` @Override public List<PlacementItem> getPlacementItems(BlockState state) ` | 末尾返回 ` this.rules.stream() .filter(rule -> rule.matches(state)) .map(StateRule::placementItem) .toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L64) |
| ` public BlockState applyStateRules(BlockState blueprintState, BlockState resultState) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L72) |
| ` public static BlockState inheritBlueprintState(BlockState baseState, BlockState blueprintState) ` | ` (!baseState.is(blueprintState.getBlock())) ` 成立时提前返回 ` baseState `<br>末尾返回 ` result `<br>[调用处 BlockPlacementRules.applyBlueprintStateRules](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L92) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L82) |
| ` public List<StateRule> rules() ` | 读取 record 分量 ` rules ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L35) |
| ` public Map<String, String> state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L35) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L35) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L35) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L35) |

## BlockPlacementRuleSet.StateRule

` public record StateRule(List<String> properties, Optional<ItemStackTemplate> item, Optional<ItemStackTemplate> returnItem) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L207)

放置物品（默认 1 数量、无组件），与返还物品（可为空）。<br>参数 ` properties ` 匹配的方块状态表达式（任一匹配即应用）<br>参数 ` item ` 放置消耗的物品模板；空值表示该状态禁止放置<br>参数 ` returnItem ` 放置后返还的物品模板；加载阶段不依赖物品默认组件绑定

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<StateRule> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L230) |
| ` public StateRule(List<String> properties, ItemStack item, ItemStack returnItem) ` | 执行 ` this(properties, template(item), template(returnItem)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L236) |
| ` public StateRule(List<String> properties, ItemStack item) ` | 执行 ` this(properties, item, ItemStack.EMPTY) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L240) |
| ` public StateRule(List<String> properties, Item item, int count) ` | 执行 ` this(properties, item, count, null) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L244) |
| ` public StateRule(List<String> properties, Item item, int count, @Nullable Item returnItem) ` | 实现调用 ` Optional.empty() `<br>实现调用 ` Optional.of(new ItemStackTemplate(item, count)) `<br>实现调用 ` Optional.of(new ItemStackTemplate(returnItem)) `<br>[调用处 ModBlockPlacementRuleProvider.addRule](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L531) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L248) |
| ` public StateRule(List<String> properties, Optional<ItemStackTemplate> item, Optional<ItemStackTemplate> returnItem) ` | 执行 ` properties = List.copyOf(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L254) |
| ` public boolean matches(BlockState state) ` | 末尾返回 ` this.properties.stream().anyMatch(expression -> matchesExpression(state, expression)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L262) |
| ` public PlacementItem placementItem() ` | 末尾返回 ` new PlacementItem(this.item.map(ItemStackTemplate::create).orElse(ItemStack.EMPTY), this.returnItem.map(ItemStackTemplate::create).orElse(ItemStack.EMPTY)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L266) |
| ` public List<String> properties() ` | 读取 record 分量 ` properties ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L207) |
| ` public Optional<ItemStackTemplate> item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L207) |
| ` public Optional<ItemStackTemplate> returnItem() ` | 读取 record 分量 ` returnItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L207) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L207) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L207) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlockPlacementRuleSet.java#L207) |

## BlueprintMaterialBudget

` public final class BlueprintMaterialBudget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlueprintMaterialBudget.java#L22)

按实际取料顺序在副本中扣减整份蓝图的消耗，检查期间不占用或取走物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlueprintMaterialBudget(ServerLevel level, BlockPos sourcePos, Direction facing) ` | 实现调用 ` ItemHandlerUtil.getSourceItemHandler(sourcePos, facing, level) `<br>分支 ` (handler != null) ` 内调用 ` Transaction.openRoot() `<br>分支 ` (handler != null) ` 内调用 ` handler.size() `<br>[调用处 SmartBlockPlacerBlockEntity.hasBlueprintMaterials](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L313) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlueprintMaterialBudget.java#L29) |
| ` public boolean reserve(BlockState state) ` | 每个目标优先使用容器，其次使用掉落物；同一目标的材料遵循现有取料边界。<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlueprintMaterialBudget.java#L51) |

## ClassBlockPlacementRule

` public abstract class ClassBlockPlacementRule<T extends Block> implements IBlockPlacementRule `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/ClassBlockPlacementRule.java#L19)

按方块类匹配的 Fallback 父类：匹配特定方块类（如所有台阶、楼梯、活板门）的任意状态， 放置消耗 1 个该方块对应 ID 的 BlockItem。<br>参数 ` <T> ` 匹配的方块类型

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public int getPriority() ` | 末尾返回 ` 100 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/ClassBlockPlacementRule.java#L26) |
| ` @Override public boolean canCreate(BlockState state) ` | 末尾返回 ` this.blockClass.isInstance(state.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/ClassBlockPlacementRule.java#L31) |
| ` @Override public boolean matches(BlockState state) ` | 末尾返回 ` this.blockClass.isInstance(state.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/ClassBlockPlacementRule.java#L36) |
| ` @Override public List<PlacementItem> getPlacementItems(BlockState state) ` | 末尾返回 ` simplePlacementItems(state.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/ClassBlockPlacementRule.java#L41) |

## CompositeBlockPlacement

` public final class CompositeBlockPlacement `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L28)

将基础物品与附加材料组合为蓝图方块，放置失败时返还两件材料。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isConverted(BlockState state) ` | 末尾返回 ` !materialFor(state).isEmpty() `<br>[调用处 BlockItemHandlerPointer.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L32) |
| ` public static ItemStack baseMaterial(BlockState state) ` | ` (state.getBlock() instanceof CandleCakeBlock) ` 成立时提前返回 ` new ItemStack(Items.CAKE) `<br>` (state.getBlock() instanceof FlowerPotBlock pot) ` 成立时提前返回 ` new ItemStack(pot.getEmptyPot().asItem()) `<br>末尾返回 ` isConverted(state) ? ModBlocks.STAMPING_PLATFORM.asStack() : new ItemStack(state.getBlock().asItem()) `<br>[调用处 BuildingBlockMaterial.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/building/BuildingBlockMaterial.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L36) |
| ` public static ItemStack materialFor(BlockState state) ` | 组合放置所需的附加材料，供放置与整份蓝图预检共用。<br>` (state.getBlock() instanceof CandleCakeBlock cake) ` 成立时提前返回 ` new ItemStack(cake.candleBlock.asItem()) `<br>` (state.getBlock() instanceof FlowerPotBlock pot) ` 成立时提前返回 ` new ItemStack(pot.getPotted().asItem()) `<br>末尾返回 ` new ItemStack(UseItemOnBlock.upgradeItem(state)) `<br>[调用处 BlueprintMaterialBudget.reserve](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/BlueprintMaterialBudget.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L47) |
| ` public static boolean matches(ItemStack stack, BlockState state) ` | 末尾返回 ` stack.is(baseMaterial(state).getItem()) `<br>[调用处 BlockItemHandlerPointer.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L57) |
| ` public static boolean placeFromHandler( ServerLevel level, BlockPos target, BlockState state, ResourceHandler<ItemResource> handler, int slot, ItemStack expected, BlockPos source, @Nullable Direction facing ) ` | ` (!isConverted(state) \|\| !matches(expected, state) \|\| !BlockPlacementUtil.isTargetAvailable(level, target)) ` 成立时提前返回 ` false `<br>` (slot < 0 \|\| slot >= handler.size()) ` 成立时提前返回 ` false `<br>` (upgradeSlot < 0) ` 成立时提前返回 ` false `<br>[调用处 BlockItemHandlerPointer.placeToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L61) |
| ` public static int upgradeSlot(ResourceHandler<ItemResource> handler, BlockState state) ` | ` (upgrade.isEmpty()) ` 成立时提前返回 ` -1 `<br>末尾返回 ` -1 `<br>[调用处 BlockItemHandlerPointer.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L90) |
| ` @Nullable public static ItemEntity upgradeEntity(ServerLevel level, ItemEntity base, BlockState state) ` | 末尾返回 ` level.getEntitiesOfClass(ItemEntity.class, new AABB(base.blockPosition()), entity -> entity.isAlive() && entity.getItem().is(upgrade.getItem())).stream().findFirst().orElse(null) `<br>[调用处 ItemEntityPointer.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/ItemEntityPointer.java#L107) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L106) |
| ` public static boolean placeFromEntities( ServerLevel level, BlockPos target, BlockState state, ItemEntity base, @Nullable Direction facing ) ` | ` (!isConverted(state) \|\| !matches(base.getItem(), state) \|\| !BlockPlacementUtil.isTargetAvailable(level, target)) ` 成立时提前返回 ` false `<br>` (upgrade == null) ` 成立时提前返回 ` false `<br>[调用处 ItemEntityPointer.placeToPos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/ItemEntityPointer.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L113) |

## FacingOnlyPlacementRule

` public final class FacingOnlyPlacementRule extends PropertyBlockPlacementRule `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/FacingOnlyPlacementRule.java#L11)

仅有 FACING/HORIZONTAL\_FACING/ROTATION\_16 状态属性方块的 Fallback： 放置消耗 1 个对应 ID 的 BlockItem。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FacingOnlyPlacementRule INSTANCE ` | 初值 ` new FacingOnlyPlacementRule() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/FacingOnlyPlacementRule.java#L12) |

## LensBlockPlacementRule

` public final class LensBlockPlacementRule extends ClassBlockPlacementRule<LensBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/LensBlockPlacementRule.java#L11)

透镜的建造材料包含镜框和当前安装的玻璃。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final LensBlockPlacementRule INSTANCE ` | 初值 ` new LensBlockPlacementRule() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/LensBlockPlacementRule.java#L12) |
| ` @Override public List<PlacementItem> getPlacementItems(BlockState state) ` | 末尾返回 ` items ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/LensBlockPlacementRule.java#L18) |

## PropertyBlockPlacementRule

` public abstract class PropertyBlockPlacementRule implements IBlockPlacementRule `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/PropertyBlockPlacementRule.java#L15)

按方块属性匹配的 Fallback 父类：匹配状态属性仅为指定集合内属性的方块 （如仅有 FACING/HORIZONTAL\_FACING/ROTATION\_16 的方块）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public int getPriority() ` | 末尾返回 ` 100 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/PropertyBlockPlacementRule.java#L22) |
| ` @Override public boolean canCreate(BlockState state) ` | 末尾返回 ` this.matches(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/PropertyBlockPlacementRule.java#L27) |
| ` @Override public boolean matches(BlockState state) ` | 末尾返回 ` !properties.isEmpty() && this.allowedProperties.containsAll(properties) `<br>[调用处 PropertyBlockPlacementRule.canCreate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/PropertyBlockPlacementRule.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/PropertyBlockPlacementRule.java#L32) |
| ` @Override public List<PlacementItem> getPlacementItems(BlockState state) ` | 末尾返回 ` ClassBlockPlacementRule.simplePlacementItems(state.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/PropertyBlockPlacementRule.java#L38) |

## SimpleBlockPlacementRule

` public final class SimpleBlockPlacementRule implements IBlockPlacementRule `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/SimpleBlockPlacementRule.java#L31)

单个具体方块的 Fallback：方块状态不决定放置物（任意状态都放置 1 个自身 BlockItem）， 且对应方块物品与方块 ID 一致时由它接管。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable public static SimpleBlockPlacementRule of(Block block) ` | 仅当该方块适合由 SimpleBlockPlacementRule 接管时才创建，否则返回 null。<br>` (!canTakeOver(block)) ` 成立时提前返回 ` null `<br>末尾返回 ` new SimpleBlockPlacementRule(block, block.asItem()) `<br>[调用处 BlockPlacementRules.getRule](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/BlockPlacementRules.java#L84) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/SimpleBlockPlacementRule.java#L43) |
| ` public static boolean canTakeOver(Block block) ` | 该方块是否由 Simple 规则接管：对应方块物品与方块 ID 一致， 且方块状态不决定放置物（无需要额外物品或改变数量的状态）。<br>` (item == Items.AIR) ` 成立时提前返回 ` false `<br>` (!BuiltInRegistries.ITEM.getKey(item).equals(BuiltInRegistries.BLOCK.getKey(block))) ` 成立时提前返回 ` false `<br>末尾返回 ` !isStateDependent(block) `<br>[调用处 ModBlockPlacementRuleProvider.shouldSkipDataPack](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L138) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/SimpleBlockPlacementRule.java#L55) |
| ` @Override public boolean matches(BlockState state) ` | 末尾返回 ` state.is(this.block) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/SimpleBlockPlacementRule.java#L108) |
| ` @Override public List<PlacementItem> getPlacementItems(BlockState state) ` | 末尾返回 ` List.of(new PlacementItem(new ItemStack(this.item, 1), ItemStack.EMPTY)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/SimpleBlockPlacementRule.java#L113) |

## SlabBlockPlacementRule

` public final class SlabBlockPlacementRule extends ClassBlockPlacementRule<SlabBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/SlabBlockPlacementRule.java#L12)

台阶方块按单层或双层消耗对应数量的方块物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SlabBlockPlacementRule INSTANCE ` | 初值 ` new SlabBlockPlacementRule() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/SlabBlockPlacementRule.java#L13) |
| ` @Override public List<PlacementItem> getPlacementItems(BlockState state) ` | 末尾返回 ` simplePlacementItems(state.getBlock()).stream() .map(item -> new PlacementItem(item.placeStack().copyWithCount(count), item.returnStack())) .toList() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/SlabBlockPlacementRule.java#L19) |

## StairBlockPlacementRule

` public final class StairBlockPlacementRule extends ClassBlockPlacementRule<StairBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/StairBlockPlacementRule.java#L8)

所有楼梯方块的 Fallback：放置消耗 1 个对应 ID 的 BlockItem。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StairBlockPlacementRule INSTANCE ` | 初值 ` new StairBlockPlacementRule() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/StairBlockPlacementRule.java#L9) |

## TrapDoorBlockPlacementRule

` public final class TrapDoorBlockPlacementRule extends ClassBlockPlacementRule<TrapDoorBlock> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/TrapDoorBlockPlacementRule.java#L8)

所有活板门方块的 Fallback：放置消耗 1 个对应 ID 的 BlockItem。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final TrapDoorBlockPlacementRule INSTANCE ` | 初值 ` new TrapDoorBlockPlacementRule() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/TrapDoorBlockPlacementRule.java#L9) |
