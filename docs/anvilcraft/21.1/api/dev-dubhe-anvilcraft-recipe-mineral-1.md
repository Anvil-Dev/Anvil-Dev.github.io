# dev.dubhe.anvilcraft.recipe.mineral（AbstractMineralFountainRecipe 至 MineralFountainReplacementRecipe）



## AbstractMineralFountainRecipe

` public abstract class AbstractMineralFountainRecipe implements Recipe<MineralFountainRecipeInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L26)

矿物涌泉配方的公共部分：高度范围、世界类型、优先级、权重、材料方块与结果方块。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BlockStatePredicate DEFAULT_FROM ` | 材料方块默认值：空气，即「上方为空」时也可生效。<br>初值 ` BlockStatePredicate.builder().of(Blocks.AIR).build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L29) |
| ` public static final int DEFAULT_WEIGHT ` | 权重默认值：同优先级并列时等概率。<br>初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L31) |
| ` public double chance(ServerLevel level) ` | 末尾返回 ` this.toBlock.chance().getFloat(RecipeUtil.emptyLootContext(level)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L82) |
| ` public static <T> T pickWeighted( RandomSource random, List<T> picked, ToIntFunction<T> weight ) ` | 在一组同优先级的候选中按权重随机取一个。 权重非正的条目不参与；若全部非正则退回等概率，避免整体不产出。<br>` (picked.size() == 1) ` 成立时提前返回 ` picked.getFirst() `<br>` (total <= 0) ` 成立时提前返回 ` picked.get(random.nextInt(picked.size())) `<br>末尾返回 ` picked.getLast() `<br>[调用处 MineralFountainBlockEntity.pickByPriority](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/MineralFountainBlockEntity.java#L223) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L91) |
| ` @Override public boolean canCraftInDimensions(int width, int height) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L111) |
| ` @Override public ItemStack assemble(MineralFountainRecipeInput input, HolderLookup.Provider registries) ` | 末尾返回 ` this.getResultItem(registries) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L116) |
| ` @Override public ItemStack getResultItem(@Nullable HolderLookup.Provider registries) ` | 末尾返回 ` this.toBlock.state().getBlock().asItem() == Items.AIR ? ItemStack.EMPTY : new ItemStack(this.toBlock.state().getBlock()) `<br>[调用处 AbstractMineralFountainRecipe.assemble](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L121) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L128) |
| ` public Optional<ResourceLocation> getDimension() ` | 为空表示任意世界。<br>末尾返回 ` this.dimension `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L26) |
| ` public HeightRange getHeight() ` | 末尾返回 ` this.height `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L26) |
| ` public int getPriority() ` | 越大越先尝试。<br>末尾返回 ` this.priority `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L26) |
| ` public int getWeight() ` | 同优先级并列时的抽取权重。<br>末尾返回 ` this.weight `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L26) |
| ` public BlockStatePredicate getFromBlock() ` | 末尾返回 ` this.fromBlock `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L26) |
| ` public ChanceBlockState getToBlock() ` | 末尾返回 ` this.toBlock `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L26) |
| ` public Optional<MineralFountainHeat> getHeat() ` | 末尾返回 ` this.heat `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L26) |
| ` public Optional<FluidStack> getToFluid() ` | 上方为排水口时的流体产出。 与 #heat 同样不判材料方块：上方是排水口而非空气，材料条件天然不成立。<br>末尾返回 ` this.toFluid `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L26) |

## AroundRequirement

` public record AroundRequirement(BlockStatePredicate block, int count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L19)

周围方块需求：四方相邻方块中至少有 count 个匹配 block。<br>参数 ` block ` 匹配谓词，可为方块或标签<br>参数 ` count ` 至少需要的数量

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<AroundRequirement> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L20) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AroundRequirement> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockStatePredicate.STREAM_CODEC, AroundRequirement::block, ByteBufCodecs.VAR_INT, AroundRequirement::count, AroundRequirement::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L24) |
| ` public boolean test(List<BlockState> around) ` | 判断一组相邻方块是否满足本需求。<br>末尾返回 ` matched >= this.count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L33) |
| ` public AroundRequirement(BlockStatePredicate block, int count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L19) |
| ` public BlockStatePredicate block() ` | 读取 record 分量 ` block ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L19) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L19) |

## HeightRange

` public record HeightRange(int min, int max) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L17)

矿物涌泉可工作的高度范围，用相对世界最低高度的偏移表示。<br>参数 ` min ` 偏移下限（含）<br>参数 ` max ` 偏移上限（含）

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final HeightRange DEFAULT ` | 默认范围：世界最低高度起 9 格内，与旧版硬编码行为一致。<br>初值 ` new HeightRange(0, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L19) |
| ` public static final Codec<HeightRange> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L20) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HeightRange> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, HeightRange::min, ByteBufCodecs.VAR_INT, HeightRange::max, HeightRange::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L24) |
| ` public boolean test(Level level, BlockPos pos) ` | 末尾返回 ` offset >= this.min && offset <= this.max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L30) |
| ` public HeightRange(int min, int max) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L17) |
| ` public int min() ` | 读取 record 分量 ` min ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L17) |
| ` public int max() ` | 读取 record 分量 ` max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L17) |

## MineralFountainActiveRecipe

` public class MineralFountainActiveRecipe extends AbstractMineralFountainRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L33)

主动生产：周围方块满足需求表时执行。 需求表按计数判定，例如 \[\[粗铜, 2\], \[粗锡, 1\]\] 表示四方相邻中 至少有 2 个粗铜块与 1 个粗锡块。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainActiveRecipe( Optional<ResourceLocation> dimension, HeightRange height, int priority, int weight, List<AroundRequirement> around, BlockStatePredicate fromBlock, ChanceBlockState toBlock, Optional<MineralFountainHeat> heat, Optional<FluidStack> toFluid ) ` | 实现调用 ` super(dimension, height, priority, weight, fromBlock, toBlock, heat, toFluid) `<br>实现调用 ` List.copyOf(around) `<br>[调用处 MineralFountainActiveRecipe.Serializer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L126) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L38) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.MINERAL_FOUNTAIN_ACTIVE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L53) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.MINERAL_FOUNTAIN_ACTIVE_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L58) |
| ` @Override public boolean matches(MineralFountainRecipeInput input, Level level) ` | ` (!this.matchesCommon(input, level)) ` 成立时提前返回 ` false `<br>末尾返回 ` this.matchesAround(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L63) |
| ` public boolean matchesContextAndAround(MineralFountainRecipeInput input, Level level) ` | 只判定世界类型、高度范围与周围方块需求，不含材料方块。 供热与滴液查询用：上方是排水口时材料方块不匹配，但二者仍应生效。<br>末尾返回 ` this.matchesContext(input, level) && this.matchesAround(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L74) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MineralFountainRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L85) |
| ` public List<AroundRequirement> getAround() ` | 周围方块需求表，全部满足才算匹配。<br>末尾返回 ` this.around `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L33) |

## MineralFountainActiveRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<MineralFountainActiveRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L150)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder dimension(ResourceLocation dimension) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(dimension) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L161) |
| ` public Builder height(int min, int max) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L166) |
| ` public Builder priority(int priority) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L171) |
| ` public Builder weight(int weight) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L176) |
| ` public Builder around(List<AroundRequirement> around) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` List.copyOf(around) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L181) |
| ` public Builder require(AroundRequirement requirement) ` | 添加一项需求：四方相邻中至少有 count 个匹配 block 的方块。<br>返回当前实例，可继续链式调用。<br>实现调用 ` list.add(requirement) `<br>实现调用 ` List.copyOf(list) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L187) |
| ` public Builder fromBlock(BlockStatePredicate fromBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L194) |
| ` public Builder toBlock(ChanceBlockState toBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L199) |
| ` public Builder heat(MineralFountainHeat heat) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(heat) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L204) |
| ` public Builder toFluid(FluidStack toFluid) ` | 上方为排水口时灌入的流体。<br>返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(toFluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L210) |
| ` @Override public MineralFountainActiveRecipe buildRecipe() ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalStateException("to_block is required") `<br>末尾返回 ` new MineralFountainActiveRecipe(this.dimension, this.height, this.priority, this.weight, this.around, this.fromBlock, this.toBlock, this.heat, this.toFluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L215) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalArgumentException("to_block must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L224) |
| ` @Override public String getType() ` | 末尾返回 ` "mineral_fountain_active" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L231) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.toBlock == null ? Items.AIR : this.toBlock.state().getBlock().asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L236) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L150) |

## MineralFountainActiveRecipe.Serializer

` public static class Serializer implements RecipeSerializer<MineralFountainActiveRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L89)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<MineralFountainActiveRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L139) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, MineralFountainActiveRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L144) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L89) |

## MineralFountainHeat

` public record MineralFountainHeat(HeatTier tier, int duration, int count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L18)

矿物涌泉提供的加热能力：满足条件时向上方方块供热。<br>参数 ` tier ` 加热等级<br>参数 ` duration ` 该等级的持续时间（单位：刻）<br>参数 ` count ` 提供的供热份数

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<MineralFountainHeat> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L19) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MineralFountainHeat> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L24) |
| ` public HeatTierLine toLine() ` | 末尾返回 ` HeatTierLine.always(this.tier, this.duration) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L31) |
| ` public MineralFountainHeat(HeatTier tier, int duration, int count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L18) |
| ` public HeatTier tier() ` | 读取 record 分量 ` tier ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L18) |
| ` public int duration() ` | 读取 record 分量 ` duration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L18) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L18) |

## MineralFountainPassiveRecipe

` public class MineralFountainPassiveRecipe extends AbstractMineralFountainRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L30)

被动生产：没有任何主动生产匹配时执行。 默认材料方块为空气，即旧版「上方为空气则生成火山灰」的行为。 同一维度可放多条同优先级配方，按 weight 随机取一，用数据包表达任意产出比例。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainPassiveRecipe( Optional<ResourceLocation> dimension, HeightRange height, int priority, int weight, BlockStatePredicate fromBlock, ChanceBlockState toBlock, Optional<MineralFountainHeat> heat, Optional<FluidStack> toFluid ) ` | 执行 ` super(dimension, height, priority, weight, fromBlock, toBlock, heat, toFluid) `<br>[调用处 MineralFountainPassiveRecipe.Serializer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L96) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L31) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.MINERAL_FOUNTAIN_PASSIVE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L44) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.MINERAL_FOUNTAIN_PASSIVE_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L49) |
| ` @Override public boolean matches(MineralFountainRecipeInput input, Level level) ` | 末尾返回 ` this.matchesCommon(input, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L54) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MineralFountainRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L59) |

## MineralFountainPassiveRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<MineralFountainPassiveRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L119)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder dimension(ResourceLocation dimension) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(dimension) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L129) |
| ` public Builder height(int min, int max) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L134) |
| ` public Builder priority(int priority) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L139) |
| ` public Builder weight(int weight) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L144) |
| ` public Builder fromBlock(BlockStatePredicate fromBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L149) |
| ` public Builder toBlock(ChanceBlockState toBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L154) |
| ` public Builder heat(MineralFountainHeat heat) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(heat) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L159) |
| ` public Builder toFluid(FluidStack toFluid) ` | 上方为排水口时灌入的流体。<br>返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(toFluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L165) |
| ` @Override public MineralFountainPassiveRecipe buildRecipe() ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalStateException("to_block is required") `<br>末尾返回 ` new MineralFountainPassiveRecipe( this.dimension, this.height, this.priority, this.weight, this.fromBlock, this.toBlock, this.heat, this.toFluid ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L170) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalArgumentException("to_block must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L179) |
| ` @Override public String getType() ` | 末尾返回 ` "mineral_fountain_passive" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L186) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.toBlock == null ? Items.AIR : this.toBlock.state().getBlock().asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L191) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L119) |

## MineralFountainPassiveRecipe.Serializer

` public static class Serializer implements RecipeSerializer<MineralFountainPassiveRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L63)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<MineralFountainPassiveRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L108) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, MineralFountainPassiveRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L113) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L63) |

## MineralFountainRecipeInput

` public record MineralFountainRecipeInput(BlockState from, List<BlockState> around, BlockPos pos) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L17)

矿物涌泉配方的匹配输入。<br>参数 ` from ` 上方（被转化）的方块<br>参数 ` around ` 四个水平相邻方块<br>参数 ` pos ` 矿物涌泉所在位置，用于判定高度与维度

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainRecipeInput(BlockState from, List<BlockState> around, BlockPos pos) ` | 执行 ` around = List.copyOf(around) `<br>[调用处 MineralFountainBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/MineralFountainBlockEntity.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L19) |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` new ItemStack(this.from.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L23) |
| ` @Override public int size() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L28) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L33) |
| ` public BlockState from() ` | 读取 record 分量 ` from ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L17) |
| ` public List<BlockState> around() ` | 读取 record 分量 ` around ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L17) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L17) |

## MineralFountainReplacementRecipe

` public class MineralFountainReplacementRecipe extends AbstractMineralFountainRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L30)

替换生产：存在主动生产匹配时执行，按优先级依次尝试替换其结果。 配方 id 表为空表示可以替换任意主动配方；chance 为替换概率。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainReplacementRecipe( Optional<ResourceLocation> dimension, HeightRange height, List<ResourceLocation> replace, int priority, double chance, BlockStatePredicate fromBlock, ChanceBlockState toBlock, Optional<MineralFountainHeat> heat, Optional<FluidStack> toFluid ) ` | 实现调用 ` super(dimension, height, priority, DEFAULT_WEIGHT, fromBlock, toBlock, heat, toFluid) `<br>实现调用 ` List.copyOf(replace) `<br>实现调用 ` Math.clamp(chance, 0.0, 1.0) `<br>[调用处 MineralFountainReplacementRecipe.Serializer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L123) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L36) |
| ` public List<ResourceLocation> getReplace() ` | 末尾返回 ` this.replace ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L54) |
| ` public double getReplaceChance() ` | 末尾返回 ` this.chance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L58) |
| ` public boolean appliesTo(@Nullable ResourceLocation activeRecipeId) ` | 判断本替换是否适用于给定的主动配方。<br>末尾返回 ` this.replace.isEmpty() \|\| (activeRecipeId != null && this.replace.contains(activeRecipeId)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L63) |
| ` @Override public RecipeType<?> getType() ` | 末尾返回 ` ModRecipeTypes.MINERAL_FOUNTAIN_REPLACEMENT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L67) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 末尾返回 ` ModRecipeTypes.MINERAL_FOUNTAIN_REPLACEMENT_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L72) |
| ` @Override public boolean matches(MineralFountainRecipeInput input, Level level) ` | 末尾返回 ` this.matchesCommon(input, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L77) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MineralFountainRecipeLoader.replacement](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L82) |
