# dev.dubhe.anvilcraft.recipe.anvil.collision



## AnvilCollisionCraftRecipe

` public record AnvilCollisionCraftRecipe(BlockStatePredicate anvil, boolean consume, BlockStatePredicate hitBlock, List<BlockTransform> transformBlocks, List<ChanceItemStack> outputItems, int speed) implements Recipe<AnvilCollisionCraftRecipe.Input> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L48)

铁砧碰撞工艺配方类，用于定义铁砧与方块碰撞时的工艺配方 该类定义了铁砧碰撞特定方块时的输入、输出和转换规则<br>参数 ` anvil ` 铁砧输入方块<br>参数 ` consume ` 是否消耗铁砧<br>参数 ` hitBlock ` 碰撞的方块<br>参数 ` transformBlocks ` 方块转换列表<br>参数 ` outputItems ` 输出物品列表<br>参数 ` speed ` 最低撞击速度(m/tick)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RecipeSerializer<AnvilCollisionCraftRecipe> SERIALIZER ` | 字段类型为 ` RecipeSerializer<AnvilCollisionCraftRecipe> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L56) |
| ` @Override public boolean matches(Input input, Level level) ` | 判断配方是否匹配给定的输入和世界<br>参数 ` input ` 输入<br>参数 ` level ` 世界<br>返回 是否匹配<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L88) |
| ` @Override public ItemStack assemble(Input input) ` | 组装配方结果<br>参数 ` input ` 输入<br>返回 配方结果物品堆<br>末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L98) |
| ` @Override public RecipeType<AnvilCollisionCraftRecipe> getType() ` | 获取配方类型<br>返回 配方类型<br>末尾返回 ` ModRecipeTypes.ANVIL_COLLISION_CRAFT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L106) |
| ` @Override public PlacementInfo placementInfo() ` | 末尾返回 ` PlacementInfo.NOT_PLACEABLE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L111) |
| ` @Override public RecipeBookCategory recipeBookCategory() ` | 末尾返回 ` RecipeBookCategories.CRAFTING_MISC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L116) |
| ` @Override public RecipeSerializer<AnvilCollisionCraftRecipe> getSerializer() ` | 获取配方序列化器<br>返回 配方序列化器<br>末尾返回 ` AnvilCollisionCraftRecipe.SERIALIZER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L124) |
| ` @Override public boolean isSpecial() ` | 判断是否为特殊配方<br>返回 是否为特殊配方<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L132) |
| ` @Override public boolean showNotification() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L137) |
| ` @Override public String group() ` | 末尾返回 ` "anvil_collision_craft" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L142) |
| ` public static AnvilCollisionCraftRecipe.Builder builder() ` | 创建一个新的铁砧碰撞工艺配方构建器<br>返回 配方构建器<br>末尾返回 ` new AnvilCollisionCraftRecipe.Builder() `<br>[调用处 AnvilCollisionCraftRecipeLoader.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L457) |
| ` public AnvilCollisionCraftRecipe(BlockStatePredicate anvil, boolean consume, BlockStatePredicate hitBlock, List<BlockTransform> transformBlocks, List<ChanceItemStack> outputItems, int speed) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L48) |
| ` public BlockStatePredicate anvil() ` | 读取 record 分量 ` anvil ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L49) |
| ` public boolean consume() ` | 读取 record 分量 ` consume ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L50) |
| ` public BlockStatePredicate hitBlock() ` | 读取 record 分量 ` hitBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L51) |
| ` public List<BlockTransform> transformBlocks() ` | 读取 record 分量 ` transformBlocks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L52) |
| ` public List<ChanceItemStack> outputItems() ` | 读取 record 分量 ` outputItems ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L53) |
| ` public int speed() ` | 读取 record 分量 ` speed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L54) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L48) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L48) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L48) |

## AnvilCollisionCraftRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<AnvilCollisionCraftRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L234)

铁砧碰撞工艺配方构建器类

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder anvil(Block anvil) ` | 设置铁砧方块<br>参数 ` anvil ` 铁砧方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(anvil).build() `<br>实现调用 ` BlockStatePredicate.builder().of(anvil) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L260) |
| ` public Builder anvil(HolderGetter<Block> blocks, TagKey<Block> anvil) ` | 设置铁砧方块标签<br>参数 ` anvil ` 铁砧方块标签<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` BlockStatePredicate.builder().of(blocks, anvil).build() `<br>实现调用 ` BlockStatePredicate.builder().of(blocks, anvil) `<br>实现调用 ` BlockStatePredicate.builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L270) |
| ` public Builder consume(boolean consume) ` | 设置是否消耗铁砧<br>参数 ` consume ` 是否消耗铁砧<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L280) |
| ` public Builder hitBlock(BlockStatePredicate hitBlock) ` | 设置碰撞的方块<br>参数 ` hitBlock ` 碰撞的方块<br>返回 构建器实例<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L290) |
| ` public Builder hitBlock(HolderGetter<Block> blocks, TagKey<Block> blockTagKey) ` | 设置碰撞的方块标签<br>参数 ` blockTagKey ` 方块标签<br>返回 构建器实例<br>末尾返回 ` this.hitBlock(BlockStatePredicate.builder().of(blocks, blockTagKey).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L300) |
| ` public Builder hitBlock(Block block, Map<String, String> states) ` | 设置碰撞的方块<br>参数 ` block ` 方块<br>参数 ` states ` 方块状态<br>返回 构建器实例<br>末尾返回 ` this.hitBlock(BlockStatePredicate.builder().of(block).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L310) |
| ` public Builder hitBlock(Block block) ` | 设置碰撞的方块<br>参数 ` block ` 方块<br>返回 构建器实例<br>末尾返回 ` this.hitBlock(BlockStatePredicate.builder().of(block).build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L319) |
| ` public Builder transformBlock( BlockStatePredicate inputBlock, ChanceBlockState outputBlock, int maxCount ) ` | 添加方块转换<br>参数 ` inputBlock ` 输入方块<br>参数 ` outputBlock ` 输出方块<br>参数 ` maxCount ` 最大数量<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.transformBlocks.add(new BlockTransform(inputBlock, outputBlock, maxCount)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L330) |
| ` public Builder outputItem(ChanceItemStack outputItem) ` | 添加输出物品<br>参数 ` outputItem ` 输出物品<br>返回 构建器实例<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.outputItems.add(outputItem) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L344) |
| ` public Builder outputItem(Item item, int count, float chance) ` | 添加输出物品<br>参数 ` item ` 物品<br>参数 ` count ` 数量<br>参数 ` chance ` 概率<br>返回 构建器实例<br>末尾返回 ` this.outputItem(ChanceItemStack.of(new ItemStackTemplate(item, count), chance)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L356) |
| ` public Builder outputItem(Item item, int count) ` | 添加输出物品<br>参数 ` item ` 物品<br>参数 ` count ` 数量<br>返回 构建器实例<br>末尾返回 ` this.outputItem(ChanceItemStack.of(new ItemStackTemplate(item, count), 1.0F)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L366) |
| ` public Builder outputItem(Item item, float chance) ` | 添加输出物品<br>参数 ` item ` 物品<br>参数 ` chance ` 概率<br>返回 构建器实例<br>末尾返回 ` this.outputItem(ChanceItemStack.of(new ItemStackTemplate(item, 1), chance)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L376) |
| ` public Builder outputItem(Item item) ` | 添加输出物品<br>参数 ` item ` 物品<br>返回 构建器实例<br>末尾返回 ` this.outputItem(ChanceItemStack.of(new ItemStackTemplate(item, 1), 1.0F)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L385) |
| ` public Builder speed(int speed) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L389) |
| ` @Override public ItemStackTemplate getResult() ` | 获取配方结果物品<br>返回 配方结果物品<br>` (this.anvil.getStatesCache().isEmpty()) ` 成立时提前返回 ` new ItemStackTemplate(Blocks.ANVIL.asItem()) `<br>末尾返回 ` new ItemStackTemplate(this.anvil.getStatesCache().getFirst().getBlock().asItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L397) |
| ` @Override public AnvilCollisionCraftRecipe buildRecipe() ` | 构建配方<br>返回 铁砧碰撞工艺配方<br>末尾返回 ` new AnvilCollisionCraftRecipe(this.anvil, this.consume, this.hitBlock, this.transformBlocks, this.outputItems, this.speed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L408) |
| ` @Override public void validate(Identifier id) ` | 验证配方参数<br>参数 ` id ` 配方ID<br>` (this.anvil == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe has no anvil, RecipeId:" + id) `<br>` (this.hitBlock == null) ` 成立时抛出 ` new IllegalArgumentException("Recipe has no hitBlock, RecipeId:" + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L423) |
| ` @Override public String getType() ` | 获取配方类型<br>返回 配方类型<br>末尾返回 ` "anvil_collision" `<br>[调用处 AnvilCollisionCraftRecipe.Builder.save](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L449) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L436) |
| ` @Override public void save(RecipeOutput recipeOutput) ` | 保存配方<br>参数 ` recipeOutput ` 配方输出<br>实现调用 ` AnvilCraft.of(this.anvil.getKey().getPath() + "_and_" + this.hitBlock.getKey().getPath() + "_" + this.speed) `<br>实现调用 ` this.anvil.getKey().getPath() `<br>实现调用 ` this.anvil.getKey() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L444) |
| ` public AnvilCollisionCraftRecipe.Builder transformBlocks(final List<BlockTransform> transformBlocks) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L234) |
| ` public AnvilCollisionCraftRecipe.Builder outputItems(final List<ChanceItemStack> outputItems) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L234) |
| ` public Builder() ` | Java 提供的无参构造器。<br>[调用处 AnvilCollisionCraftRecipe.builder](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L458) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L234) |

## AnvilCollisionCraftRecipe.Input

` public record Input(ItemStack source, List<ItemStack> items) implements RecipeInput, IItemsInput `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L148)

铁砧碰撞工艺配方输入记录类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack getItem(int index) ` | 获取指定索引的物品堆<br>参数 ` index ` 索引<br>返回 物品堆<br>末尾返回 ` this.items.get(index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L158) |
| ` @Override public int size() ` | 获取物品堆列表的大小<br>返回 大小<br>末尾返回 ` this.items.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L166) |
| ` public Input(ItemStack source, List<ItemStack> items) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L148) |
| ` public ItemStack source() ` | 读取 record 分量 ` source ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L149) |
| ` public List<ItemStack> items() ` | 读取 record 分量 ` items ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L150) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L148) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L148) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L148) |

## AnvilCollisionCraftRecipe.Serializer

` public static class Serializer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L173)

铁砧碰撞工艺配方序列化器类

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Serializer() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L173) |

## BlockTransform

` public record BlockTransform(BlockStatePredicate inputBlock, ChanceBlockState outputBlock, int maxCount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L24)

方块转换类，用于定义方块的输入、输出和转换规则 该类表示一个方块从一种状态转换为另一种状态的规则，包括概率和最大数量限制

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<BlockTransform> CODEC ` | Map编解码器<br>由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L31) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, BlockTransform> STREAM_CODEC ` | 流编解码器<br>初值 ` StreamCodec.of(BlockTransform::encode, BlockTransform::decode) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L38) |
| ` public Boolean progress(Level level, BlockPos pos) ` | 执行方块转换过程<br>参数 ` level ` 世界<br>参数 ` pos ` 方块位置<br>返回 是否成功转换<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L69) |
| ` public BlockTransform(BlockStatePredicate inputBlock, ChanceBlockState outputBlock, int maxCount) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L24) |
| ` public BlockStatePredicate inputBlock() ` | 读取 record 分量 ` inputBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L26) |
| ` public ChanceBlockState outputBlock() ` | 读取 record 分量 ` outputBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L27) |
| ` public int maxCount() ` | 读取 record 分量 ` maxCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransform.java#L24) |

## BlockTransformDamageCalculator

` public final class BlockTransformDamageCalculator extends ExplosionDamageCalculator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransformDamageCalculator.java#L25)

在爆炸阻力计算时执行配方转换，使原版和优化后的射线计算共用转换与成品保护规则。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockTransformDamageCalculator(ExplosionDamageCalculator original, Collection<BlockTransform> transforms) ` | 实现调用 ` this.addTransforms(transforms) `<br>[调用处 ServerExplosionMixin.anvilcraft$setBlockTransformExplosion](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ServerExplosionMixin.java#L68) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransformDamageCalculator.java#L31) |
| ` public void addTransforms(Collection<BlockTransform> transforms) ` | 向当前爆炸添加转换规则，保留已经执行的转换数量。<br>实现调用 ` transform.inputBlock().getBlocks().unwrap() `<br>实现调用 ` transform.inputBlock().getBlocks() `<br>实现调用 ` transform.inputBlock() `<br>[调用处 BlockTransformDamageCalculator.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransformDamageCalculator.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransformDamageCalculator.java#L37) |
| ` @Override public Optional<Float> getBlockExplosionResistance( Explosion explosion, BlockGetter level, BlockPos pos, BlockState state, FluidState fluid ) ` | 末尾返回 ` this.original.getBlockExplosionResistance(explosion, level, pos, state, fluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransformDamageCalculator.java#L48) |
| ` @Override public boolean shouldBlockExplode(Explosion explosion, BlockGetter level, BlockPos pos, BlockState state, float power) ` | 末尾返回 ` !this.transformed.contains(pos) && this.original.shouldBlockExplode(explosion, level, pos, state, power) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransformDamageCalculator.java#L70) |
| ` @Override public boolean shouldDamageEntity(Explosion explosion, Entity entity) ` | 末尾返回 ` this.original.shouldDamageEntity(explosion, entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransformDamageCalculator.java#L75) |
| ` @Override public float getKnockbackMultiplier(Entity entity) ` | 末尾返回 ` this.original.getKnockbackMultiplier(entity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransformDamageCalculator.java#L80) |
| ` @Override public float getEntityDamageAmount(Explosion explosion, Entity entity, float exposure) ` | 末尾返回 ` this.original.getEntityDamageAmount(explosion, entity, exposure) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/BlockTransformDamageCalculator.java#L85) |
