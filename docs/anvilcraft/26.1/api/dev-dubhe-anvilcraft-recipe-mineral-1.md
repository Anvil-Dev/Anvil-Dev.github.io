# dev.dubhe.anvilcraft.recipe.mineral（AbstractMineralFountainRecipe 至 MineralFountainReplacementRecipe）



## AbstractMineralFountainRecipe

` public abstract class AbstractMineralFountainRecipe implements Recipe<MineralFountainRecipeInput> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BlockStatePredicate DEFAULT_FROM ` | 初值 ` BlockStatePredicate.builder().of(Blocks.AIR).build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L27) |
| ` public static final int DEFAULT_WEIGHT ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L29) |
| ` public double chance(ServerLevel level) ` | 末尾返回 ` this.toBlock.chance().getFloat(RecipeUtil.emptyLootContext(level)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L74) |
| ` public static <T> T pickWeighted( RandomSource random, List<T> picked, ToIntFunction<T> weight ) ` | ` (picked.size() == 1) ` 成立时提前返回 ` picked.getFirst() `<br>` (total <= 0) ` 成立时提前返回 ` picked.get(random.nextInt(picked.size())) `<br>末尾返回 ` picked.getLast() `<br>[调用处 MineralFountainBlockEntity.pickByPriority](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/MineralFountainBlockEntity.java#L214) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L78) |
| ` @Override public ItemStack assemble(MineralFountainRecipeInput input) ` | 末尾返回 ` this.toBlock.state().getBlock().asItem() == Items.AIR ? ItemStack.EMPTY : new ItemStack(this.toBlock.state().getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L98) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L105) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L110) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L115) |
| ` @Override public String group() ` | 末尾返回 ` "" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L120) |
| ` @Override public boolean isSpecial() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L125) |
| ` public Optional<Identifier> getDimension() ` | 末尾返回 ` this.dimension `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L24) |
| ` public HeightRange getHeight() ` | 末尾返回 ` this.height `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L24) |
| ` public int getPriority() ` | 末尾返回 ` this.priority `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L24) |
| ` public int getWeight() ` | 末尾返回 ` this.weight `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L24) |
| ` public BlockStatePredicate getFromBlock() ` | 末尾返回 ` this.fromBlock `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L24) |
| ` public ChanceBlockState getToBlock() ` | 末尾返回 ` this.toBlock `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L24) |
| ` public Optional<MineralFountainHeat> getHeat() ` | 末尾返回 ` this.heat `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L24) |
| ` public Optional<FluidStackTemplate> getToFluid() ` | 末尾返回 ` this.toFluid `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L24) |

## AroundRequirement

` public record AroundRequirement(BlockStatePredicate block, int count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<AroundRequirement> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L14) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AroundRequirement> STREAM_CODEC ` | 初值 ` StreamCodec.composite( BlockStatePredicate.STREAM_CODEC, AroundRequirement::block, ByteBufCodecs.VAR_INT, AroundRequirement::count, AroundRequirement::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L18) |
| ` public boolean test(List<BlockState> around) ` | 末尾返回 ` matched >= this.count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L24) |
| ` public AroundRequirement(BlockStatePredicate block, int count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L13) |
| ` public BlockStatePredicate block() ` | 读取 record 分量 ` block ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L13) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AroundRequirement.java#L13) |

## HeightRange

` public record HeightRange(int min, int max) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final HeightRange DEFAULT ` | 初值 ` new HeightRange(0, 8) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L13) |
| ` public static final Codec<HeightRange> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L14) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HeightRange> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, HeightRange::min, ByteBufCodecs.VAR_INT, HeightRange::max, HeightRange::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L18) |
| ` public boolean test(Level level, BlockPos pos) ` | 末尾返回 ` offset >= this.min && offset <= this.max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L24) |
| ` public HeightRange(int min, int max) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L11) |
| ` public int min() ` | 读取 record 分量 ` min ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L11) |
| ` public int max() ` | 读取 record 分量 ` max ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/HeightRange.java#L11) |

## MineralFountainActiveRecipe

` public class MineralFountainActiveRecipe extends AbstractMineralFountainRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainActiveRecipe( Optional<Identifier> dimension, HeightRange height, int priority, int weight, List<AroundRequirement> around, BlockStatePredicate fromBlock, ChanceBlockState toBlock, Optional<MineralFountainHeat> heat, Optional<FluidStackTemplate> toFluid ) ` | 实现调用 ` super(dimension, height, priority, weight, fromBlock, toBlock, heat, toFluid) `<br>实现调用 ` List.copyOf(around) `<br>[调用处 MineralFountainActiveRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L113) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L32) |
| ` @Override public RecipeType<MineralFountainActiveRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.MINERAL_FOUNTAIN_ACTIVE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L47) |
| ` @Override public RecipeSerializer<MineralFountainActiveRecipe> getSerializer() ` | 末尾返回 ` MineralFountainActiveRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L52) |
| ` @Override public boolean matches(MineralFountainRecipeInput input, Level level) ` | ` (!this.matchesCommon(input, level)) ` 成立时提前返回 ` false `<br>末尾返回 ` this.matchesAround(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L57) |
| ` public boolean matchesContextAndAround(MineralFountainRecipeInput input, Level level) ` | 末尾返回 ` this.matchesContext(input, level) && this.matchesAround(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L63) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MineralFountainRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L74) |
| ` public static final RecipeSerializer<MineralFountainActiveRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>(MineralFountainActiveRecipe.CODEC, MineralFountainActiveRecipe.STREAM_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L126) |
| ` public List<AroundRequirement> getAround() ` | 末尾返回 ` this.around `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L27) |

## MineralFountainActiveRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<MineralFountainActiveRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L130)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder dimension(Identifier dimension) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(dimension) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L141) |
| ` public Builder height(int min, int max) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L146) |
| ` public Builder priority(int priority) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L151) |
| ` public Builder weight(int weight) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L156) |
| ` public Builder around(List<AroundRequirement> around) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` List.copyOf(around) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L161) |
| ` public Builder require(AroundRequirement requirement) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` list.add(requirement) `<br>实现调用 ` List.copyOf(list) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L166) |
| ` public Builder fromBlock(BlockStatePredicate fromBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L173) |
| ` public Builder toBlock(ChanceBlockState toBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L178) |
| ` public Builder heat(MineralFountainHeat heat) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(heat) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L183) |
| ` public Builder toFluid(FluidStackTemplate toFluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(toFluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L188) |
| ` @Override public MineralFountainActiveRecipe buildRecipe() ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalStateException("to_block is required") `<br>末尾返回 ` new MineralFountainActiveRecipe(this.dimension, this.height, this.priority, this.weight, this.around, this.fromBlock, this.toBlock, this.heat, this.toFluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L193) |
| ` @Override public void validate(Identifier id) ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalArgumentException("to_block must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L202) |
| ` @Override public String getType() ` | 末尾返回 ` "mineral_fountain_active" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L209) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` new ItemStackTemplate(this.toBlock == null ? Items.AIR : this.toBlock.state().getBlock().asItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L214) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainActiveRecipe.java#L130) |

## MineralFountainHeat

` public record MineralFountainHeat(HeatTier tier, int duration, int count) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<MineralFountainHeat> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L12) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MineralFountainHeat> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L17) |
| ` public HeatTierLine toLine() ` | 末尾返回 ` HeatTierLine.always(this.tier, this.duration) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L24) |
| ` public MineralFountainHeat(HeatTier tier, int duration, int count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L11) |
| ` public HeatTier tier() ` | 读取 record 分量 ` tier ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L11) |
| ` public int duration() ` | 读取 record 分量 ` duration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L11) |
| ` public int count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainHeat.java#L11) |

## MineralFountainPassiveRecipe

` public class MineralFountainPassiveRecipe extends AbstractMineralFountainRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainPassiveRecipe( Optional<Identifier> dimension, HeightRange height, int priority, int weight, BlockStatePredicate fromBlock, ChanceBlockState toBlock, Optional<MineralFountainHeat> heat, Optional<FluidStackTemplate> toFluid ) ` | 执行 ` super(dimension, height, priority, weight, fromBlock, toBlock, heat, toFluid) `<br>[调用处 MineralFountainPassiveRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L89) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L25) |
| ` @Override public RecipeType<MineralFountainPassiveRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.MINERAL_FOUNTAIN_PASSIVE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L38) |
| ` @Override public RecipeSerializer<MineralFountainPassiveRecipe> getSerializer() ` | 末尾返回 ` MineralFountainPassiveRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L43) |
| ` @Override public boolean matches(MineralFountainRecipeInput input, Level level) ` | 末尾返回 ` this.matchesCommon(input, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L48) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MineralFountainRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L53) |
| ` public static final RecipeSerializer<MineralFountainPassiveRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>( MineralFountainPassiveRecipe.CODEC, MineralFountainPassiveRecipe.STREAM_CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L101) |

## MineralFountainPassiveRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<MineralFountainPassiveRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L105)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder dimension(Identifier dimension) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(dimension) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L115) |
| ` public Builder height(int min, int max) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L120) |
| ` public Builder priority(int priority) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L125) |
| ` public Builder weight(int weight) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L130) |
| ` public Builder fromBlock(BlockStatePredicate fromBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L135) |
| ` public Builder toBlock(ChanceBlockState toBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L140) |
| ` public Builder heat(MineralFountainHeat heat) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(heat) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L145) |
| ` public Builder toFluid(FluidStackTemplate toFluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(toFluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L150) |
| ` @Override public MineralFountainPassiveRecipe buildRecipe() ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalStateException("to_block is required") `<br>末尾返回 ` new MineralFountainPassiveRecipe( this.dimension, this.height, this.priority, this.weight, this.fromBlock, this.toBlock, this.heat, this.toFluid ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L155) |
| ` @Override public void validate(Identifier id) ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalArgumentException("to_block must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L164) |
| ` @Override public String getType() ` | 末尾返回 ` "mineral_fountain_passive" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L171) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` new ItemStackTemplate(this.toBlock == null ? Items.AIR : this.toBlock.state().getBlock().asItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L176) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L105) |

## MineralFountainRecipeInput

` public record MineralFountainRecipeInput(BlockState from, List<BlockState> around, BlockPos pos) implements RecipeInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainRecipeInput(BlockState from, List<BlockState> around, BlockPos pos) ` | 执行 ` around = List.copyOf(around) `<br>[调用处 MineralFountainBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/MineralFountainBlockEntity.java#L78) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L12) |
| ` @Override public ItemStack getItem(int index) ` | 末尾返回 ` new ItemStack(this.from.getBlock()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L16) |
| ` @Override public int size() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L21) |
| ` @Override public boolean isEmpty() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L26) |
| ` public BlockState from() ` | 读取 record 分量 ` from ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L10) |
| ` public List<BlockState> around() ` | 读取 record 分量 ` around ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L10) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainRecipeInput.java#L10) |

## MineralFountainReplacementRecipe

` public class MineralFountainReplacementRecipe extends AbstractMineralFountainRecipe `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MineralFountainReplacementRecipe( Optional<Identifier> dimension, HeightRange height, List<Identifier> replace, int priority, double chance, BlockStatePredicate fromBlock, ChanceBlockState toBlock, Optional<MineralFountainHeat> heat, Optional<FluidStackTemplate> toFluid ) ` | 实现调用 ` super(dimension, height, priority, DEFAULT_WEIGHT, fromBlock, toBlock, heat, toFluid) `<br>实现调用 ` List.copyOf(replace) `<br>实现调用 ` Math.clamp(chance, 0.0, 1.0) `<br>[调用处 MineralFountainReplacementRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L115) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L31) |
| ` public List<Identifier> getReplace() ` | 末尾返回 ` this.replace ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L49) |
| ` public double getReplaceChance() ` | 末尾返回 ` this.chance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L53) |
| ` public boolean appliesTo(@Nullable Identifier activeRecipeId) ` | 末尾返回 ` this.replace.isEmpty() \|\| (activeRecipeId != null && this.replace.contains(activeRecipeId)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L57) |
| ` @Override public RecipeType<MineralFountainReplacementRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.MINERAL_FOUNTAIN_REPLACEMENT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L61) |
| ` @Override public RecipeSerializer<MineralFountainReplacementRecipe> getSerializer() ` | 末尾返回 ` MineralFountainReplacementRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L66) |
| ` @Override public boolean matches(MineralFountainRecipeInput input, Level level) ` | 末尾返回 ` this.matchesCommon(input, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L71) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 MineralFountainRecipeLoader.replacement](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L104) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L76) |
| ` public static final RecipeSerializer<MineralFountainReplacementRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>( MineralFountainReplacementRecipe.CODEC, MineralFountainReplacementRecipe.STREAM_CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L128) |
