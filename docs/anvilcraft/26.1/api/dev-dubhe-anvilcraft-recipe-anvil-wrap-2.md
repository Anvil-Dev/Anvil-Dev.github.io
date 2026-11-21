# dev.dubhe.anvilcraft.recipe.anvil.wrap（BlockProcessingRecipe 至 NeutronIrradiationRecipe.Builder）



## BlockProcessingRecipe

` public class BlockProcessingRecipe extends AbstractProcessRecipe<BlockProcessingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L29)

序列装配配方中的"闪炼、时移、中子辐照"都属于方块处理，即用方块处理方块

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<BlockProcessingRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<BlockProcessingRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L31) |
| ` public BlockProcessingRecipe( List<BlockStatePredicate> inputs, ChanceBlockState result ) ` | 执行 ` super( new Property() .setBlockInputOffset(new Vec3i(0, -1, 0)) .setInputBlocks(inputs) .setBlockOutputOffset(new Vec3i(0, -1, 0)) .setResultBlocks(result) ) `<br>[调用处 BlockProcessingRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L128) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L50) |
| ` @Override public RecipeSerializer<BlockProcessingRecipe> getSerializer() ` | 末尾返回 ` BlockProcessingRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L63) |
| ` @Override public RecipeType<BlockProcessingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.BLOCK_PROCESSING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L68) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 ProceduralProcessRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L73) |

## BlockProcessingRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<BlockProcessingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L77)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder input(Block input) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L81) |
| ` public Builder fakeSuperHeating(Block input) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.HEATER.get(), ModBlocks.BURNING_HEATER.get()) `<br>实现调用 ` ModBlocks.HEATER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L86) |
| ` public Builder fakeTimeWarp(Block input) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.CORRUPTED_BEACON.get()) .with(CorruptedBeaconBlock.LIT, true) `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.CORRUPTED_BEACON.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L98) |
| ` public Builder fakeNeutronIrradiation(Block input, IrradiatorType type) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.NEUTRON_IRRADIATOR.get()) .with(NeutronIrradiatorBlock.TYPE, type) `<br>实现调用 ` BlockStatePredicate.builder() .of(ModBlocks.NEUTRON_IRRADIATOR.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L107) |
| ` public Builder result(ChanceBlockState result) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L116) |
| ` public Builder result(Block result) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` result.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L121) |
| ` @Override public BlockProcessingRecipe buildRecipe() ` | 末尾返回 ` new BlockProcessingRecipe(this.inputs, this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L126) |
| ` @Override public void validate(Identifier id) ` | ` (this.inputs.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe inputs must not be empty, RecipeId: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe result must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L131) |
| ` @Override public String getType() ` | 末尾返回 ` "block_processing" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L141) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` WrapUtils.getItem(this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L146) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L77) |

## BlockSmearRecipe

` public class BlockSmearRecipe extends AbstractProcessRecipe<BlockSmearRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L28)

方块涂抹配方类 该配方用于在铁砧下落时将多个方块涂抹成一个方块，结果方块会继承被涂抹方块的同名属性 （如楼梯的朝向、台阶的类型、原木的轴向）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<BlockSmearRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<BlockSmearRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L29) |
| ` public BlockSmearRecipe( List<BlockStatePredicate> inputs, ChanceBlockState result ) ` | 构造一个方块涂抹配方<br>参数 ` inputs ` 输入方块列表<br>参数 ` result ` 结果方块<br>实现调用 ` new Property() .setBlockInputOffset(new Vec3i(0, -1, 0)) .setInputBlocks(inputs) `<br>实现调用 ` new Property() .setBlockInputOffset(new Vec3i(0, -1, 0)) `<br>[调用处 BlockSmearRecipe.Builder.buildRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L144) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L52) |
| ` @Override public RecipeSerializer<BlockSmearRecipe> getSerializer() ` | 末尾返回 ` BlockSmearRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L67) |
| ` @Override public RecipeType<BlockSmearRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.BLOCK_SMEAR.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L72) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 BlockSmearRecipeLoader.blockSmear](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L57) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L80) |

## BlockSmearRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<BlockSmearRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L85)

方块涂抹配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder input(BlockStatePredicate input) ` | 添加输入方块<br>参数 ` input ` 输入方块谓词<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(input) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L97) |
| ` public Builder input(HolderGetter<Block> blocks, TagKey<Block> input) ` | 添加输入方块（标签形式）<br>参数 ` input ` 输入方块标签<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(blocks, input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(blocks, input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(blocks, input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L107) |
| ` public Builder input(Block input) ` | 添加输入方块<br>参数 ` input ` 输入方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.inputs.add(BlockStatePredicate.builder().of(input).build()) `<br>实现调用 ` BlockStatePredicate.builder().of(input).build() `<br>实现调用 ` BlockStatePredicate.builder().of(input) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L117) |
| ` public Builder result(ChanceBlockState result) ` | 设置结果方块<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L127) |
| ` public Builder result(Block result) ` | 设置结果方块（默认概率为1.0F）<br>参数 ` result ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` result.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L137) |
| ` @Override public BlockSmearRecipe buildRecipe() ` | 末尾返回 ` new BlockSmearRecipe(this.inputs, this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L142) |
| ` @Override public void validate(Identifier id) ` | ` (this.inputs.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe inputs must not be empty, RecipeId: " + id) `<br>` (this.result == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe result must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L147) |
| ` @Override public String getType() ` | 末尾返回 ` "block_smear" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L157) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` WrapUtils.getItem(this.result) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L162) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L85) |

## FastCookingRecipe

` public class FastCookingRecipe extends AbstractProcessRecipe<FastCookingRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<FastCookingRecipe> SERIALIZER ` | 初值 ` new RecipeSerializer<>(FastCookingRecipe.CODEC, FastCookingRecipe.STREAM_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L54) |
| ` public FastCookingRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron ) ` | 实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)).setItemInputRange(new Vec3(0.75, 0.75, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(Blocks.CAMPFIRE, ModBlocks.BURNING_HEATER.get()) `<br>[调用处 FastCookingRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L169) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L57) |
| ` @Override public RecipeSerializer<FastCookingRecipe> getSerializer() ` | 末尾返回 ` ModRecipeSerializers.FAST_COOKING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L84) |
| ` @Override public RecipeType<FastCookingRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.FAST_COOKING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L89) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 FastCookingRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L94) |
| ` public boolean isConsumeFluid() ` | 末尾返回 ` hasCauldron.hasFluid() && hasCauldron.consume() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L98) |
| ` public boolean isProduceFluid() ` | 末尾返回 ` !hasCauldron.transforms().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L103) |

## FastCookingRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<FastCookingRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L108)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder cauldron(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L109) |
| ` public Builder cauldron(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L114) |
| ` public Builder cauldron(Identifier fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L119) |
| ` public Builder cauldron(Block cauldron) ` | 末尾返回 ` this.cauldron(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L124) |
| ` public Builder transform(Fluid fluid, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(fluid, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L128) |
| ` public Builder transform(Holder<Fluid> fluid, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(fluid, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L133) |
| ` public Builder transform(Block cauldron, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(cauldron)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L138) |
| ` public Builder transform(FluidStack fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L142) |
| ` public Builder transform(Identifier fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L147) |
| ` public Builder consume(int amount) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L154) |
| ` public Builder produce(int amount) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.produce(amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L159) |
| ` @Override public String getType() ` | 末尾返回 ` "fast_cooking" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L172) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L108) |

## ItemCompressRecipe

` public class ItemCompressRecipe extends AbstractProcessRecipe<ItemCompressRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L24)

物品压缩配方类 该配方用于在铁砧下落时压缩物品，需要在铁砧下方放置炼药锅作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<ItemCompressRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<ItemCompressRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L26) |
| ` public ItemCompressRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results ) ` | 构造一个物品压缩配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>执行 ` this(itemIngredients, results, Optional.empty()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L52) |
| ` @Override public RecipeType<ItemCompressRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.ITEM_COMPRESS.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L86) |
| ` @Override public RecipeSerializer<ItemCompressRecipe> getSerializer() ` | 末尾返回 ` ItemCompressRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L91) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 ItemCompressRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L99) |
| ` public Optional<Integer> getCustomPriority() ` | 末尾返回 ` this.customPriority `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L24) |

## ItemCompressRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<ItemCompressRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L104)

物品压缩配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder priority(int priority) ` | 指定配方优先级，未指定时沿用按原料和产物计算的默认优先级。<br>返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(priority) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L110) |
| ` @Override public String getType() ` | 末尾返回 ` "item_compress" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L115) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCompressRecipe.java#L104) |

## ItemCrushRecipe

` public class ItemCrushRecipe extends AbstractProcessRecipe<ItemCrushRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L19)

物品粉碎配方类 该配方用于在铁砧下落时粉碎物品，需要在铁砧下方放置粉碎台作为触发条件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<ItemCrushRecipe> SERIALIZER ` | 初值 ` AbstractProcessRecipe.makeSerializer(ItemCrushRecipe::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L21) |
| ` public ItemCrushRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results ) ` | 构造一个物品粉碎配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.125, 0.0)).setItemInputRange(new Vec3(0.75, 0.25, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.125, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(ModBlocks.CRUSHING_TABLE.get()).build() `<br>[调用处 ItemCrushRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L73) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L27) |
| ` @Override public RecipeType<ItemCrushRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.ITEM_CRUSH.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L47) |
| ` @Override public RecipeSerializer<ItemCrushRecipe> getSerializer() ` | 末尾返回 ` ItemCrushRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L52) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 ItemCrushRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCrushRecipeLoader.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L60) |

## ItemCrushRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<ItemCrushRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L65)

物品粉碎配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String getType() ` | 末尾返回 ` "item_crush" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L66) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemCrushRecipe.java#L65) |

## ItemInjectRecipe

` public class ItemInjectRecipe extends AbstractProcessRecipe<ItemInjectRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L28)

物品注入配方类 该配方用于在铁砧下落时将物品注入到方块中，需要在铁砧下方放置特定方块作为注入目标

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<ItemInjectRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<ItemInjectRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L30) |
| ` public ItemInjectRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, BlockStatePredicate blockIngredient, @Nullable ChanceBlockState blockResult ) ` | 构造一个物品注入配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>参数 ` blockIngredient ` 方块原料谓词<br>参数 ` blockResult ` 方块结果<br>实现调用 ` new Property().setItemInputOffset(Vec3.ZERO).setInputItems(itemIngredients) `<br>实现调用 ` new Property().setItemInputOffset(Vec3.ZERO) `<br>实现调用 ` List.of() `<br>[调用处 ItemInjectRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L47) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L68) |
| ` @Override public RecipeType<ItemInjectRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.ITEM_INJECT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L87) |
| ` @Override public RecipeSerializer<ItemInjectRecipe> getSerializer() ` | 末尾返回 ` ItemInjectRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L92) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 ItemInjectRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemInjectRecipeLoader.java#L10) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L100) |

## ItemInjectRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<ItemInjectRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L105)

物品注入配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder inputBlock(Block block) ` | 设置输入方块<br>参数 ` block ` 输入方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.blockIngredient.of(block) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L117) |
| ` public Builder inputBlock(Supplier<? extends Block> block) ` | 设置输入方块（供应器形式）<br>参数 ` block ` 输入方块供应器<br>返回 构建器实例<br>末尾返回 ` this.inputBlock(block.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L127) |
| ` public Builder resultBlock(Block block) ` | 设置结果方块<br>参数 ` block ` 结果方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` block.defaultBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L136) |
| ` public Builder resultBlock(Supplier<? extends Block> block) ` | 设置结果方块（供应器形式）<br>参数 ` block ` 结果方块供应器<br>返回 构建器实例<br>末尾返回 ` this.resultBlock(block.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L146) |
| ` @Override public String getType() ` | 末尾返回 ` "item_inject" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L150) |
| ` @Override public void validate(Identifier id) ` | ` (this.itemIngredients.isEmpty()) ` 成立时抛出 ` new IllegalArgumentException("Recipe ingredients must not be empty, RecipeId: " + id) `<br>` (this.results.isEmpty() && this.blockResult == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe must have an item or block result, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L155) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` this.blockResult == null ? super.getResult() : WrapUtils.getItem(this.blockResult) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L170) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L105) |

## MeshRecipe

` public class MeshRecipe extends AbstractProcessRecipe<MeshRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L20)

筛网配方类 该配方用于在铁砧下落时通过筛网过滤物品，需要在铁砧下方放置脚手架作为筛网

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<MeshRecipe> SERIALIZER ` | 初值 ` AbstractProcessRecipe.makeSerializer(MeshRecipe::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L22) |
| ` public MeshRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results ) ` | 构造一个筛网配方<br>参数 ` itemIngredients ` 物品原料列表<br>参数 ` results ` 结果物品列表<br>实现调用 ` new Property().setItemInputOffset(Vec3.ZERO).setInputItems(itemIngredients) `<br>实现调用 ` new Property().setItemInputOffset(Vec3.ZERO) `<br>实现调用 ` BlockStatePredicate.builder().of(Blocks.SCAFFOLDING, ModBlocks.SIFTING_TABLE.get()).build() `<br>[调用处 MeshRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L73) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L28) |
| ` @Override public RecipeType<MeshRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.MESH.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L47) |
| ` @Override public RecipeSerializer<MeshRecipe> getSerializer() ` | 末尾返回 ` MeshRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L52) |
| ` public static Builder builder() ` | 创建一个构建器实例<br>返回 构建器实例<br>末尾返回 ` new Builder() `<br>[调用处 MeshRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L11) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L60) |

## MeshRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<MeshRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L65)

筛网配方构建器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String getType() ` | 末尾返回 ` "mesh" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L66) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/MeshRecipe.java#L65) |

## NeutronIrradiationRecipe

` public class NeutronIrradiationRecipe extends AbstractProcessRecipe<NeutronIrradiationRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<NeutronIrradiationRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<NeutronIrradiationRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L31) |
| ` public NeutronIrradiationRecipe( List<ItemIngredientPredicate> itemIngredients, List<ChanceItemStack> results, HasCauldronSimple hasCauldron ) ` | 实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)).setItemInputRange(new Vec3(0.75, 0.75, 0.75)) `<br>实现调用 ` new Property().setItemInputOffset(new Vec3(0.0, -0.375, 0.0)) `<br>实现调用 ` BlockStatePredicate.builder().of(ModBlocks.NEUTRON_IRRADIATOR.get()).build() `<br>[调用处 NeutronIrradiationRecipe.Builder.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L159) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L53) |
| ` @Override public RecipeType<NeutronIrradiationRecipe> getType() ` | 末尾返回 ` ModRecipeTypes.NEUTRON_IRRADIATION.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L77) |
| ` @Override public RecipeSerializer<NeutronIrradiationRecipe> getSerializer() ` | 末尾返回 ` NeutronIrradiationRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L82) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 NeutronIrradiationRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/NeutronIrradiationRecipeLoader.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L87) |

## NeutronIrradiationRecipe.Builder

` public static class Builder extends SimpleAbstractBuilder<NeutronIrradiationRecipe, Builder> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L91)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder fluid(Fluid fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L92) |
| ` public Builder fluid(Holder<Fluid> fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L97) |
| ` public Builder fluid(Identifier fluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.fluid(fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L102) |
| ` public Builder fluid(Block cauldron) ` | 末尾返回 ` this.fluid(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(cauldron))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L107) |
| ` public Builder transform(Fluid transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L111) |
| ` public Builder transform(Holder<Fluid> transform, int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform, produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L116) |
| ` public Builder transform(Block cauldron, int produce) ` | 末尾返回 ` this.transform(BuiltInRegistries.FLUID.getValue(WrapUtils.cauldron2Fluid(cauldron)), produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L121) |
| ` public Builder transform(FluidStackTemplate transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L125) |
| ` public Builder transform(FluidStack transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L130) |
| ` public Builder transform(Identifier transform) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.transform(transform) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L135) |
| ` public Builder transform(Block cauldron) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.transform(WrapUtils.cauldron2Fluid(cauldron)) `<br>实现调用 ` WrapUtils.cauldron2Fluid(cauldron) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L140) |
| ` public Builder consume(int consume) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.consume(consume) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L147) |
| ` public Builder produce(int produce) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.hasCauldron.produce(produce) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L152) |
| ` @Override public void validate(Identifier id) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L162) |
| ` @Override public String getType() ` | 末尾返回 ` "neutron_irradiation" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L166) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L91) |
