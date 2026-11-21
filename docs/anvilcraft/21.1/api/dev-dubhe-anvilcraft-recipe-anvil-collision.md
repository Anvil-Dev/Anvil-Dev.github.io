# dev.dubhe.anvilcraft.recipe.anvil.collision



## AnvilCollisionCraftRecipe

` public record AnvilCollisionCraftRecipe(BlockStatePredicate anvil, boolean consume, BlockStatePredicate hitBlock, List<BlockTransform> transformBlocks, List<ChanceItemStack> outputItems, int speed) implements Recipe<AnvilCollisionCraftRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L46)

铁砧碰撞工艺配方类，用于定义铁砧与方块碰撞时的工艺配方 该类定义了铁砧碰撞特定方块时的输入、输出和转换规则<br>参数 ` anvil ` 铁砧输入方块<br>参数 ` consume ` 是否消耗铁砧<br>参数 ` hitBlock ` 碰撞的方块<br>参数 ` transformBlocks ` 方块转换列表<br>参数 ` outputItems ` 输出物品列表<br>参数 ` speed ` 最低撞击速度(m/tick)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean matches(Input input, Level level) ` | 判断配方是否匹配给定的输入和世界<br>参数 ` input ` 输入<br>参数 ` level ` 世界<br>返回 是否匹配<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L62) |
| ` @Override public ItemStack assemble(Input input, HolderLookup.Provider provider) ` | 组装配方结果<br>参数 ` input ` 输入<br>参数 ` provider ` 数据提供器<br>返回 配方结果物品堆<br>末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L74) |
| ` @Override public boolean canCraftInDimensions(int i, int i1) ` | 判断配方是否可以在指定尺寸的工作台中制作<br>参数 ` i ` 宽度<br>参数 ` i1 ` 高度<br>返回 是否可以制作<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L86) |
| ` @Override public ItemStack getResultItem(HolderLookup.Provider provider) ` | 获取配方结果物品堆<br>参数 ` provider ` 数据提供器<br>返回 配方结果物品堆<br>` (!this.outputItems.isEmpty()) ` 成立时提前返回 ` this.outputItems.getFirst().stack() `<br>` (!this.transformBlocks.isEmpty()) ` 成立时提前返回 ` new ItemStack(this.transformBlocks.getFirst().outputBlock().state().getBlock().asItem()) `<br>末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L97) |
| ` @Override public RecipeSerializer<?> getSerializer() ` | 获取配方序列化器<br>返回 配方序列化器<br>末尾返回 ` ModRecipeTypes.ANVIL_COLLISION_CRAFT_SERIALIZER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L111) |
| ` @Override public RecipeType<?> getType() ` | 获取配方类型<br>返回 配方类型<br>末尾返回 ` ModRecipeTypes.ANVIL_COLLISION_CRAFT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L121) |
| ` @Override public boolean isSpecial() ` | 判断是否为特殊配方<br>返回 是否为特殊配方<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L131) |
| ` public static AnvilCollisionCraftRecipe.Builder builder() ` | 创建一个新的铁砧碰撞工艺配方构建器<br>返回 配方构建器<br>末尾返回 ` new AnvilCollisionCraftRecipe.Builder() `<br>[调用处 AnvilCollisionCraftRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L531) |
| ` public AnvilCollisionCraftRecipe(BlockStatePredicate anvil, boolean consume, BlockStatePredicate hitBlock, List<BlockTransform> transformBlocks, List<ChanceItemStack> outputItems, int speed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L46) |
| ` public BlockStatePredicate anvil() ` | 读取 record 分量 ` anvil ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L47) |
| ` public boolean consume() ` | 读取 record 分量 ` consume ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L48) |
| ` public BlockStatePredicate hitBlock() ` | 读取 record 分量 ` hitBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L49) |
| ` public List<BlockTransform> transformBlocks() ` | 读取 record 分量 ` transformBlocks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L50) |
| ` public List<ChanceItemStack> outputItems() ` | 读取 record 分量 ` outputItems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L51) |
| ` public int speed() ` | 读取 record 分量 ` speed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L52) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L46) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L46) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L46) |

## AnvilCollisionCraftRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<AnvilCollisionCraftRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L278)

铁砧碰撞工艺配方构建器类

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder anvil(Block anvil) ` | 设置铁砧方块<br>参数 ` anvil ` 铁砧方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(anvil).build() `<br>实现调用 ` BlockStatePredicate.builder().of(anvil) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L315) |
| ` public Builder anvil(TagKey<Block> anvil) ` | 设置铁砧方块标签<br>参数 ` anvil ` 铁砧方块标签<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(anvil).build() `<br>实现调用 ` BlockStatePredicate.builder().of(anvil) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L326) |
| ` public Builder consume(boolean consume) ` | 设置是否消耗铁砧<br>参数 ` consume ` 是否消耗铁砧<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L337) |
| ` public Builder hitBlock(BlockStatePredicate hitBlock) ` | 设置碰撞的方块<br>参数 ` hitBlock ` 碰撞的方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L348) |
| ` public Builder hitBlock(TagKey<Block> blockTagKey) ` | 设置碰撞的方块标签<br>参数 ` blockTagKey ` 方块标签<br>返回 构建器实例<br>末尾返回 ` this.hitBlock(BlockStatePredicate.builder().of(blockTagKey).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L359) |
| ` public Builder hitBlock(Block block, Map<String, String> states) ` | 设置碰撞的方块<br>参数 ` block ` 方块<br>参数 ` states ` 方块状态<br>返回 构建器实例<br>末尾返回 ` this.hitBlock(BlockStatePredicate.builder().of(block).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L370) |
| ` public Builder hitBlock(Block block) ` | 设置碰撞的方块<br>参数 ` block ` 方块<br>返回 构建器实例<br>末尾返回 ` this.hitBlock(BlockStatePredicate.builder().of(block).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L380) |
| ` public Builder transformBlock( BlockStatePredicate inputBlock, ChanceBlockState outputBlock, int maxCount ) ` | 添加方块转换<br>参数 ` inputBlock ` 输入方块<br>参数 ` outputBlock ` 输出方块<br>参数 ` maxCount ` 最大数量<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.transformBlocks.add(new BlockTransform(inputBlock, outputBlock, maxCount)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L392) |
| ` public Builder outputItem(ChanceItemStack outputItem) ` | 添加输出物品<br>参数 ` outputItem ` 输出物品<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.outputItems.add(outputItem) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L407) |
| ` public Builder outputItem(Item item, int count, float chance) ` | 添加输出物品<br>参数 ` item ` 物品<br>参数 ` count ` 数量<br>参数 ` chance ` 概率<br>返回 构建器实例<br>末尾返回 ` this.outputItem(ChanceItemStack.of(new ItemStack(item, count), chance)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L420) |
| ` public Builder outputItem(Item item, int count) ` | 添加输出物品<br>参数 ` item ` 物品<br>参数 ` count ` 数量<br>返回 构建器实例<br>末尾返回 ` this.outputItem(ChanceItemStack.of(new ItemStack(item, count), 1.0F)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L431) |
| ` public Builder outputItem(Item item, float chance) ` | 添加输出物品<br>参数 ` item ` 物品<br>参数 ` chance ` 概率<br>返回 构建器实例<br>末尾返回 ` this.outputItem(ChanceItemStack.of(new ItemStack(item, 1), chance)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L442) |
| ` public Builder outputItem(Item item) ` | 添加输出物品<br>参数 ` item ` 物品<br>返回 构建器实例<br>末尾返回 ` this.outputItem(ChanceItemStack.of(new ItemStack(item, 1), 1.0F)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L452) |
| ` public Builder speed(int speed) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L456) |
| ` @Override public Item getResult() ` | 获取配方结果物品<br>返回 配方结果物品<br>` (this.anvil.getStatesCache().isEmpty()) ` 成立时提前返回 ` Blocks.ANVIL.asItem() `<br>末尾返回 ` this.anvil.getStatesCache().getFirst().getBlock().asItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L466) |
| ` @Override public AnvilCollisionCraftRecipe buildRecipe() ` | 构建配方<br>返回 铁砧碰撞工艺配方<br>末尾返回 ` new AnvilCollisionCraftRecipe(this.anvil, this.consume, this.hitBlock, this.transformBlocks, this.outputItems, this.speed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L479) |
| ` @Override public void validate(ResourceLocation id) ` | 验证配方参数<br>参数 ` id ` 配方ID<br>` (this.anvil == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe has no anvil, RecipeId:" + id) `<br>` (this.hitBlock == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe has no hitBlock, RecipeId:" + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L491) |
| ` @Override public String getType() ` | 获取配方类型<br>返回 配方类型<br>末尾返回 ` "anvil_collision" `<br>[调用处 AnvilCollisionCraftRecipe.Builder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L521) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L506) |
| ` @Override public void save(RecipeOutput recipeOutput) ` | 保存配方<br>参数 ` recipeOutput ` 配方输出<br>实现调用 ` AnvilCraft.of(this.anvil.getKey().getPath() + "_and_" + this.hitBlock.getKey().getPath() + "_" + this.speed) `<br>实现调用 ` this.anvil.getKey().getPath() `<br>实现调用 ` this.anvil.getKey() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L516) |
| ` public AnvilCollisionCraftRecipe.Builder transformBlocks(final List<BlockTransform> transformBlocks) ` | 方块转换列表<br>返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L278) |
| ` public AnvilCollisionCraftRecipe.Builder outputItems(final List<ChanceItemStack> outputItems) ` | 输出物品列表<br>返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L278) |
| ` public Builder() ` | Java 提供的无参构造器。<br>[调用处 AnvilCollisionCraftRecipe.builder](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L532) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L278) |

## AnvilCollisionCraftRecipe.Input

` public record Input(ItemStack source, List<ItemStack> items) implements RecipeInput, IItemsInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L139)

铁砧碰撞工艺配方输入记录类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 获取指定索引的物品堆<br>参数 ` index ` 索引<br>返回 物品堆<br>末尾返回 ` this.items.get(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L150) |
| ` @Override public int size() ` | 获取物品堆列表的大小<br>返回 大小<br>末尾返回 ` this.items.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L160) |
| ` public Input(ItemStack source, List<ItemStack> items) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L139) |
| ` public ItemStack source() ` | 读取 record 分量 ` source ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L140) |
| ` public List<ItemStack> items() ` | 读取 record 分量 ` items ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L141) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L139) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L139) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L139) |

## AnvilCollisionCraftRecipe.Serializer

` public static class Serializer implements RecipeSerializer<AnvilCollisionCraftRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L169)

铁砧碰撞工艺配方序列化器类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AnvilCollisionCraftRecipe> STREAM_CODEC ` | 流编解码器<br>初值 ` StreamCodec.of(AnvilCollisionCraftRecipe.Serializer::encode, AnvilCollisionCraftRecipe.Serializer::decode) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L186) |
| ` @Override public MapCodec<AnvilCollisionCraftRecipe> codec() ` | 获取Map编解码器<br>返回 Map编解码器<br>末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L195) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, AnvilCollisionCraftRecipe> streamCodec() ` | 获取流编解码器<br>返回 流编解码器<br>末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L205) |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L169) |

## BlockTransform

` public record BlockTransform(BlockStatePredicate inputBlock, ChanceBlockState outputBlock, int maxCount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L22)

方块转换类，用于定义方块的输入、输出和转换规则 该类表示一个方块从一种状态转换为另一种状态的规则，包括概率和最大数量限制

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<BlockTransform> CODEC ` | Map编解码器<br>由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L30) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BlockTransform> STREAM_CODEC ` | 流编解码器<br>初值 ` StreamCodec.of( BlockTransform::encode, BlockTransform::decode ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L39) |
| ` public Boolean progress(Level level, BlockPos pos) ` | 执行方块转换过程<br>参数 ` level ` 世界<br>参数 ` pos ` 方块位置<br>返回 是否成功转换<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L76) |
| ` public BlockTransform(BlockStatePredicate inputBlock, ChanceBlockState outputBlock, int maxCount) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L22) |
| ` public BlockStatePredicate inputBlock() ` | 读取 record 分量 ` inputBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L23) |
| ` public ChanceBlockState outputBlock() ` | 读取 record 分量 ` outputBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L24) |
| ` public int maxCount() ` | 读取 record 分量 ` maxCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L25) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L22) |
