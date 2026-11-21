# dev.dubhe.anvilcraft.recipe.anvil.wrap（BlockProcessingRecipe 至 NeutronIrradiationRecipe）



## BlockProcessingRecipe

` public class BlockProcessingRecipe extends AbstractProcessRecipe<BlockProcessingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L34)

序列装配配方中的“闪炼、时移、中子辐照、砧子辐照”都属于方块处理，即用方块处理方块

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockProcessingRecipe( List<BlockStatePredicate> inputs, ChanceBlockState result ) ` | 执行 ` super( new Property() .setBlockInputOffset(new Vec3i(0, -1, 0)) .setInputBlocks(inputs) .setBlockOutputOffset(new Vec3i(0, -1, 0)) .setResultBlocks(result) ) `<br>[调用处 BlockProcessingRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L228) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L36) |
| ` @Override public RecipeSerializer<BlockProcessingRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.BLOCK_PROCESSING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L49) |
| ` @Override public RecipeType<BlockProcessingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.BLOCK_PROCESSING_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L54) |
| ` public static BlockProcessingRecipe.Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new BlockProcessingRecipe.Builder() `<br>[调用处 ProceduralProcessRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L64) |

## BlockProcessingRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<BlockProcessingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L108)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockProcessingRecipe.Builder input(BlockStatePredicate input) ` | 添加输入方块<br>参数 ` input ` 输入方块谓词<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L125) |
| ` public BlockProcessingRecipe.Builder input(TagKey<Block> input) ` | 添加输入方块（标签形式）<br>参数 ` input ` 输入方块标签<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L136) |
| ` public BlockProcessingRecipe.Builder input(Block input) ` | 添加输入方块<br>参数 ` input ` 输入方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L147) |
| ` public BlockProcessingRecipe.Builder fakeSuperHeating(Block input) ` | 直接构建一个（用于序列装配配方的）伪闪炼配方<br>参数 ` input ` 输入的上方方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.HEATER.get(), ModBlocks.BURNING_HEATER.get()) `<br>实现调用 ` ModBlocks.HEATER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L160) |
| ` public BlockProcessingRecipe.Builder fakeTimeWarp(Block input) ` | 构建一个（用于序列装配配方的）伪时移配方<br>参数 ` input ` 输入的上方方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.CORRUPTED_BEACON.get()) .with(CorruptedBeaconBlock.LIT, true) `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.CORRUPTED_BEACON.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L178) |
| ` public BlockProcessingRecipe.Builder fakeNeutronIrradiation(Block input, IrradiatorType type) ` | 构建一个（用于序列装配配方的）伪中子辐照配方<br>参数 ` input ` 输入的上方方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.NEUTRON_IRRADIATOR.get()) .with(NeutronIrradiatorBlock.TYPE, type) `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.NEUTRON_IRRADIATOR.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L195) |
| ` public BlockProcessingRecipe.Builder result(ChanceBlockState result) ` | 设置结果方块<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L210) |
| ` public BlockProcessingRecipe.Builder result(Block result) ` | 设置结果方块（默认概率为1.0f）<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` result.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L221) |
| ` @Override public BlockProcessingRecipe buildRecipe() ` | 末尾返回 ` new BlockProcessingRecipe(this.inputs, this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L226) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.inputs.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe inputs must not be empty, RecipeId: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe result must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L231) |
| ` @Override public String getType() ` | 末尾返回 ` "block_processing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L241) |
| ` @Override public Item getResult() ` | 末尾返回 ` WrapUtils.getItem(this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L246) |
| ` public Builder() ` | Java 提供的无参构造器。<br>[调用处 BlockProcessingRecipe.builder](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L65) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L108) |

## BlockProcessingRecipe.Serializer

` public static class Serializer implements RecipeSerializer<BlockProcessingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L68)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<BlockProcessingRecipe> codec() ` | 末尾返回 ` BlockProcessingRecipe.Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L97) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, BlockProcessingRecipe> streamCodec() ` | 末尾返回 ` BlockProcessingRecipe.Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L102) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L68) |

## BlockSmearRecipe

` public class BlockSmearRecipe extends AbstractProcessRecipe<BlockSmearRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L30)

方块涂抹配方类 该配方用于在铁砧下落时将多个方块涂抹成一个方块，结果方块会继承被涂抹方块的同名属性 （如楼梯的朝向、台阶的类型、原木的轴向）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockSmearRecipe( List<BlockStatePredicate> inputs, ChanceBlockState result ) ` | 构造一个方块涂抹配方<br>参数 ` inputs ` 输入方块列表<br>参数 ` result ` 结果方块<br>实现调用 ` new Property() .setBlockInputOffset(new Vec3i(0, -1, 0)) .setInputBlocks(inputs) `<br>实现调用 ` new Property() .setBlockInputOffset(new Vec3i(0, -1, 0)) `<br>[调用处 BlockSmearRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L181) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L37) |
| ` @Override public RecipeSerializer<BlockSmearRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.BLOCK_SMEAR_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L52) |
| ` @Override public RecipeType<BlockSmearRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.BLOCK_SMEAR_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L57) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 BlockSmearRecipeLoader.blockSmear](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L67) |

## BlockSmearRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<BlockSmearRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L113)

方块涂抹配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder input(BlockStatePredicate input) ` | 添加输入方块<br>参数 ` input ` 输入方块谓词<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L130) |
| ` public Builder input(TagKey<Block> input) ` | 添加输入方块（标签形式）<br>参数 ` input ` 输入方块标签<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L141) |
| ` public Builder input(Block input) ` | 添加输入方块<br>参数 ` input ` 输入方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L152) |
| ` public Builder result(ChanceBlockState result) ` | 设置结果方块<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L163) |
| ` public Builder result(Block result) ` | 设置结果方块（默认概率为1.0f）<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` result.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L174) |
| ` @Override public BlockSmearRecipe buildRecipe() ` | 末尾返回 ` new BlockSmearRecipe(this.inputs, this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L179) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.inputs.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe inputs must not be empty, RecipeId: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe result must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L184) |
| ` @Override public String getType() ` | 末尾返回 ` "block_smear" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L194) |
| ` @Override public Item getResult() ` | 末尾返回 ` WrapUtils.getItem(this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L199) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L113) |

## BlockSmearRecipe.Serializer

` public static class Serializer implements RecipeSerializer<BlockSmearRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L74)

方块涂抹配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<BlockSmearRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L99) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, BlockSmearRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L104) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L74) |

## FastCookingRecipe

` public class FastCookingRecipe extends AbstractProcessRecipe<FastCookingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L33)

Anvil processing recipe heated by a lit campfire.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FastCookingRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron ) ` | 实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)).setItemInputRange(new Vec3(0.75, 0.75, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(Blocks.CAMPFIRE, ModBlocks.BURNING_HEATER.get()) `<br>[调用处 FastCookingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L167) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L35) |
| ` @Override public RecipeSerializer<FastCookingRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.FAST_COOKING_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L62) |
| ` @Override public RecipeType<FastCookingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.FAST_COOKING_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L67) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 FastCookingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L14) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L72) |
| ` @SuppressWarnings("unused") public boolean isConsumeFluid() ` | 末尾返回 ` hasCauldron.hasFluid() && hasCauldron.consume() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L76) |
| ` @SuppressWarnings("unused") public boolean isProduceFluid() ` | 末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L82) |

## FastCookingRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<FastCookingRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L121)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder cauldron(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L124) |
| ` public Builder cauldron(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L129) |
| ` public Builder cauldron(Block cauldron) ` | 末尾返回 ` this.cauldron(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L134) |
| ` public Builder transform(Fluid fluid, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(fluid, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L138) |
| ` public Builder transform(Holder<Fluid> fluid, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(fluid, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L143) |
| ` public Builder transform(Block cauldron, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.get(WrapUtils.cauldron2Fluid(cauldron)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L148) |
| ` public Builder transform(FluidStack fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L152) |
| ` public Builder consume(int amount) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L157) |
| ` @Override public String getType() ` | 末尾返回 ` "fast_cooking" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L170) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L121) |

## FastCookingRecipe.Serializer

` public static class Serializer implements RecipeSerializer<FastCookingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L88)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<FastCookingRecipe> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L110) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, FastCookingRecipe> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L115) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L88) |

## ItemCompressRecipe

` public class ItemCompressRecipe extends AbstractProcessRecipe<ItemCompressRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L28)

物品压缩配方类 该配方用于在铁砧下落时压缩物品，需要在铁砧下方放置炼药锅作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemCompressRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results ) ` | 构造一个物品压缩配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>执行 ` this(itemIngredients, results, Optional.empty()) `<br>[调用处 ItemCompressRecipe.Serializer.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L126) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L38) |
| ` @Override public RecipeSerializer<ItemCompressRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.ITEM_COMPRESS_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L72) |
| ` @Override public RecipeType<ItemCompressRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.ITEM_COMPRESS_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L77) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 ItemCompressRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L87) |
| ` public Optional<Integer> getCustomPriority() ` | 末尾返回 ` this.customPriority `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L28) |

## ItemCompressRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<ItemCompressRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L133)

物品压缩配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder priority(int priority) ` | 指定配方优先级，未指定时沿用按原料和产物计算的默认优先级。<br>返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(priority) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L139) |
| ` @Override public String getType() ` | 末尾返回 ` "item_compress" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L144) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L133) |

## ItemCompressRecipe.Serializer

` public static class Serializer extends AbstractSerializer<ItemCompressRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L94)

物品压缩配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<ItemCompressRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L114) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ItemCompressRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L119) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L94) |

## ItemCrushRecipe

` public class ItemCrushRecipe extends AbstractProcessRecipe<ItemCrushRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L21)

物品粉碎配方类 该配方用于在铁砧下落时粉碎物品，需要在铁砧下方放置粉碎台作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemCrushRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results ) ` | 构造一个物品粉碎配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.125, 0.0)).setItemInputRange(new Vec3(0.75, 0.25, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.125, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(ModBlocks.CRUSHING_TABLE.get()).build() `<br>[调用处 ItemCrushRecipe.Serializer.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L74) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L29) |
| ` @Override public RecipeSerializer<ItemCrushRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.ITEM_CRUSH_SERIALIZERS.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L49) |
| ` @Override public RecipeType<ItemCrushRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.ITEM_CRUSH_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L54) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 ItemCrushRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L64) |

## ItemCrushRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<ItemCrushRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L81)

物品粉碎配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String getType() ` | 末尾返回 ` "item_crush" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L82) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L81) |

## ItemCrushRecipe.Serializer

` public static class Serializer extends AbstractSerializer<ItemCrushRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L71)

物品粉碎配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L71) |

## ItemInjectRecipe

` public class ItemInjectRecipe extends AbstractProcessRecipe<ItemInjectRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L31)

物品注入配方类 该配方用于在铁砧下落时将物品注入到方块中，需要在铁砧下方放置特定方块作为注入目标

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemInjectRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, BlockStatePredicate blockIngredient, ChanceBlockState blockResult ) ` | 构造一个物品注入配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>参数 ` blockIngredient ` 方块原料谓词<br>参数 ` blockResult ` 方块结果<br>实现调用 ` new Property().setItemInputOffset(Vec3.ZERO).setInputItems(itemIngredients) `<br>实现调用 ` new Property().setItemInputOffset(Vec3.ZERO) `<br>实现调用 ` List.of() `<br>[调用处 ItemInjectRecipe.Serializer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L103) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L41) |
| ` @Override public RecipeSerializer<ItemInjectRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.ITEM_INJECT_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L61) |
| ` @Override public RecipeType<ItemInjectRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.ITEM_INJECT_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L66) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 ItemInjectRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemInjectRecipeLoader.java#L10) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L76) |

## ItemInjectRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<ItemInjectRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L135)

物品注入配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder inputBlock(Block block) ` | 设置输入方块<br>参数 ` block ` 输入方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.blockIngredient.of(block) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L152) |
| ` public Builder inputBlock(Supplier<? extends Block> block) ` | 设置输入方块（供应器形式）<br>参数 ` block ` 输入方块供应器<br>返回 构建器实例<br>末尾返回 ` this.inputBlock(block.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L163) |
| ` public Builder resultBlock(Block block) ` | 设置结果方块<br>参数 ` block ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` block.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L173) |
| ` public Builder resultBlock(Supplier<? extends Block> block) ` | 设置结果方块（供应器形式）<br>参数 ` block ` 结果方块供应器<br>返回 构建器实例<br>末尾返回 ` this.resultBlock(block.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L184) |
| ` @Override public String getType() ` | 末尾返回 ` "item_inject" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L188) |
| ` @Override public void validate(ResourceLocation id) ` | ` (this.itemIngredients.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe ingredients must not be empty, RecipeId: " + id) `<br>` (this.results.isEmpty() && this.blockResult == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe must have an item or block result, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L193) |
| ` @Override public Item getResult() ` | 末尾返回 ` this.blockResult == null ? super.getResult() : WrapUtils.getItem(this.blockResult) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L208) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L135) |

## ItemInjectRecipe.Serializer

` public static class Serializer implements RecipeSerializer<ItemInjectRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L83)

物品注入配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<ItemInjectRecipe> codec() ` | 末尾返回 ` Serializer.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L121) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ItemInjectRecipe> streamCodec() ` | 末尾返回 ` Serializer.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L126) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L83) |

## MeshRecipe

` public class MeshRecipe extends AbstractProcessRecipe<MeshRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L22)

筛网配方类 该配方用于在铁砧下落时通过筛网过滤物品，需要在铁砧下方放置脚手架作为筛网

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MeshRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results ) ` | 构造一个筛网配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>实现调用 ` new Property().setItemInputOffset(Vec3.ZERO).setInputItems(itemIngredients) `<br>实现调用 ` new Property().setItemInputOffset(Vec3.ZERO) `<br>实现调用 ` BlockStatePredicate.builder().of(Blocks.SCAFFOLDING, ModBlocks.SIFTING_TABLE.get()).build() `<br>[调用处 MeshRecipe.Serializer.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L75) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L31) |
| ` @Override public RecipeSerializer<MeshRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.MESH_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L50) |
| ` @Override public RecipeType<MeshRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.MESH_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L55) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 MeshRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L11) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L65) |

## MeshRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<MeshRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L82)

筛网配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String getType() ` | 末尾返回 ` "mesh" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L83) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L82) |

## MeshRecipe.Serializer

` public static class Serializer extends AbstractSerializer<MeshRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L72)

筛网配方序列化器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L72) |

## NeutronIrradiationRecipe

` public class NeutronIrradiationRecipe extends AbstractProcessRecipe<NeutronIrradiationRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NeutronIrradiationRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron ) ` | 实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)).setItemInputRange(new Vec3(0.75, 0.75, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(ModBlocks.NEUTRON_IRRADIATOR.get()).build() `<br>[调用处 NeutronIrradiationRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L150) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L33) |
| ` @Override public RecipeSerializer<NeutronIrradiationRecipe> getSerializer() ` | 末尾返回 ` ModRecipeTypes.NEUTRON_IRRADIATION_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L57) |
| ` @Override public RecipeType<NeutronIrradiationRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.NEUTRON_IRRADIATION_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L62) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 NeutronIrradiationRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L67) |
