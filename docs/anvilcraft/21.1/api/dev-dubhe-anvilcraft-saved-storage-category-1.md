# dev.dubhe.anvilcraft.saved.storage.category（AndCategory 至 FluidCategory.Type）



## AndCategory

` public record AndCategory(ItemStack icon, Component name, List<ICategory> categories) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AndCategory(ItemLike icon, ResourceLocation suffix, ICategory... categories) ` | 执行 ` this(new ItemStack(icon.asItem()), ICategory.constructName(suffix), List.of(categories)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L21) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L25) |
| ` @Override public boolean testFluid(FluidStack fluid) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L35) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.AND.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L45) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof AndCategory(ItemStack icon1, Component name1, List<ICategory> categories1))) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItemSameComponents(this.icon(), icon1) && Objects.equals(this.name(), name1) && Objects.equals(this.categories(), categories1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L50) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashItemAndComponents(this.icon()) * 31 + Objects.hash(this.name(), this.categories()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L58) |
| ` public ItemStack icon() ` | 读取 record 分量 ` icon `<br>[调用处 AndCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L20) |
| ` public Component name() ` | 读取 record 分量 ` name `<br>[调用处 AndCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L20) |
| ` public List<ICategory> categories() ` | 读取 record 分量 ` categories `<br>[调用处 AndCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L20) |

## AndCategory.Type

` public static class Type implements ICategory.Type<AndCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L63)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<AndCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L64) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AndCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L77) |
| ` @Override public MapCodec<AndCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L87) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, AndCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L92) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L63) |

## BlockCategory

` public record BlockCategory() implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BlockCategory INSTANCE ` | 初值 ` new BlockCategory() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L15) |
| ` @Override public ItemStack icon() ` | 末尾返回 ` new ItemStack(Items.BRICKS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L17) |
| ` @Override public Component name() ` | 末尾返回 ` Component.translatable("category.anvilcraft.block") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L22) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` stack.getItem() instanceof BlockItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L27) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.BLOCK.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L32) |
| ` public BlockCategory() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14) |

## BlockCategory.Type

` public static class Type implements ICategory.Type<BlockCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<BlockCategory> CODEC ` | 初值 ` MapCodec.unit(BlockCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L38) |
| ` public static final StreamCodec<ByteBuf, BlockCategory> STREAM_CODEC ` | 初值 ` StreamCodec.unit(BlockCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L39) |
| ` @Override public MapCodec<BlockCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L41) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, BlockCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L46) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L37) |

## CraftingBookCategoryCategory

` public record CraftingBookCategoryCategory(ItemStack icon, Component name, CraftingBookCategory category) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L27)

依据服务端配方书分类（CraftingBookCategory）匹配物品的分类： 遍历服务端配方表中该分类的合成配方，物品作为任一配方输出即视为属于该分类。 服务端可求值，无需客户端配方书。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CraftingBookCategoryCategory(ItemLike icon, ResourceLocation suffix, CraftingBookCategory category) ` | 执行 ` this(new ItemStack(icon.asItem()), ICategory.constructName(suffix), category) `<br>[调用处 ModCategories.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L66) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L32) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | ` (server == null) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L36) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.CRAFTING_BOOK_CATEGORY.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L57) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof CraftingBookCategoryCategory(ItemStack icon1, Component name1, CraftingBookCategory category1))) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItemSameComponents(this.icon(), icon1) && Objects.equals(this.name(), name1) && this.category == category1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L62) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashItemAndComponents(this.icon()) * 31 + Objects.hash(this.name(), this.category()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L70) |
| ` public ItemStack icon() ` | 读取 record 分量 ` icon `<br>[调用处 CraftingBookCategoryCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L28) |
| ` public Component name() ` | 读取 record 分量 ` name `<br>[调用处 CraftingBookCategoryCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L29) |
| ` public CraftingBookCategory category() ` | 读取 record 分量 ` category `<br>[调用处 CraftingBookCategoryCategory.hashCode](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L30) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L27) |

## CraftingBookCategoryCategory.Type

` public static class Type implements ICategory.Type<CraftingBookCategoryCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L75)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CraftingBookCategoryCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L76) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CraftingBookCategoryCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L88) |
| ` @Override public MapCodec<CraftingBookCategoryCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L98) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, CraftingBookCategoryCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L103) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CraftingBookCategoryCategory.java#L75) |

## CreativeModeTabCategory

` public record CreativeModeTabCategory(ItemStack icon, Component name, ResourceKey<CreativeModeTab> key) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeModeTabCategory(ItemLike icon, ResourceLocation suffix, ResourceKey<CreativeModeTab> key) ` | 执行 ` this(new ItemStack(icon.asItem()), ICategory.constructName(suffix), key) `<br>[调用处 ModCategories.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L35) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | ` (server == null) ` 成立时提前返回 ` tab.contains(stack.getStack()) `<br>末尾返回 ` CreativeModeTabCategory.contents(server, this.key, tab).contains(stack.getStack()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L39) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.CREATIVE_MODE_TAB.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L77) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof CreativeModeTabCategory(ItemStack icon1, Component name1, ResourceKey<CreativeModeTab> key1))) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItemSameComponents(this.icon(), icon1) && Objects.equals(this.name(), name1) && Objects.equals(this.key(), key1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L82) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashItemAndComponents(this.icon()) * 31 + Objects.hash(this.name(), this.key()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L90) |
| ` public ItemStack icon() ` | 读取 record 分量 ` icon `<br>[调用处 CreativeModeTabCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |
| ` public Component name() ` | 读取 record 分量 ` name `<br>[调用处 CreativeModeTabCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L86) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |
| ` public ResourceKey<CreativeModeTab> key() ` | 读取 record 分量 ` key `<br>[调用处 CreativeModeTabCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |

## CreativeModeTabCategory.Type

` public static class Type implements ICategory.Type<CreativeModeTabCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L95)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CreativeModeTabCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L96) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CreativeModeTabCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L108) |
| ` @Override public MapCodec<CreativeModeTabCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L118) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, CreativeModeTabCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L123) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L95) |

## EnchantedCategory

` public record EnchantedCategory() implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17)

匹配实际包含附魔的物品，包括储存附魔与额外附魔。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnchantedCategory INSTANCE ` | 初值 ` new EnchantedCategory() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L18) |
| ` @Override public ItemStack icon() ` | 末尾返回 ` new ItemStack(Items.ENCHANTED_BOOK) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L20) |
| ` @Override public Component name() ` | 末尾返回 ` Component.translatable("category.anvilcraft.enchanted") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L25) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 实现调用 ` stack.getOrDefault(DataComponents.ENCHANTMENTS, ItemEnchantments.EMPTY).isEmpty() `<br>实现调用 ` stack.getOrDefault(DataComponents.ENCHANTMENTS, ItemEnchantments.EMPTY) `<br>实现调用 ` stack.getOrDefault(DataComponents.STORED_ENCHANTMENTS, ItemEnchantments.EMPTY).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L30) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.ENCHANTED.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L38) |
| ` public EnchantedCategory() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17) |

## EnchantedCategory.Type

` public static class Type implements ICategory.Type<EnchantedCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<EnchantedCategory> CODEC ` | 初值 ` MapCodec.unit(EnchantedCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L44) |
| ` public static final StreamCodec<ByteBuf, EnchantedCategory> STREAM_CODEC ` | 初值 ` StreamCodec.unit(EnchantedCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L45) |
| ` @Override public MapCodec<EnchantedCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L47) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, EnchantedCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L52) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L43) |

## FilterCategory

` public record FilterCategory(ItemStack icon, Component name, FilterContent filter) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static FilterCategory from(ItemStack filter) ` | 末尾返回 ` new FilterCategory( filter.copy(), FilterCategory.findNameFromFilter(filter), Objects.requireNonNull(filter.get(ModComponents.FILTER_CONTENT), "Not valid filter content") ) `<br>[调用处 CategorySettingsScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L183) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L21) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` this.filter.filter(stack.getStack()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L34) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.FILTER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L39) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof FilterCategory(ItemStack icon1, Component name1, FilterContent filter1))) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItemSameComponents(this.icon(), icon1) && Objects.equals(this.name(), name1) && Objects.equals(this.filter(), filter1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L44) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashItemAndComponents(this.icon()) * 31 + Objects.hash(this.name(), this.filter()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L52) |
| ` public FilterCategory(ItemStack icon, Component name, FilterContent filter) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public ItemStack icon() ` | 读取 record 分量 ` icon `<br>[调用处 FilterCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public Component name() ` | 读取 record 分量 ` name `<br>[调用处 FilterCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public FilterContent filter() ` | 读取 record 分量 ` filter `<br>[调用处 FilterCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |

## FilterCategory.Type

` public static class Type implements ICategory.Type<FilterCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L57)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<FilterCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L58) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FilterCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L70) |
| ` @Override public MapCodec<FilterCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L80) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, FilterCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L85) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L57) |

## FluidCategory

` public record FluidCategory() implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L17)

匹配仓储端口中的流体和装有流体的物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidCategory INSTANCE ` | 初值 ` new FluidCategory() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L18) |
| ` @Override public ItemStack icon() ` | 末尾返回 ` new ItemStack(Items.WATER_BUCKET) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L20) |
| ` @Override public Component name() ` | 末尾返回 ` Component.translatable("category.anvilcraft.fluid") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L25) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | ` (handler == null) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L30) |
| ` @Override public boolean testFluid(FluidStack fluid) ` | 末尾返回 ` !fluid.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L44) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.FLUID.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L49) |
| ` public FluidCategory() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L17) |

## FluidCategory.Type

` public static class Type implements ICategory.Type<FluidCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L54)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<FluidCategory> CODEC ` | 初值 ` MapCodec.unit(FluidCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L55) |
| ` public static final StreamCodec<ByteBuf, FluidCategory> STREAM_CODEC ` | 初值 ` StreamCodec.unit(FluidCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L56) |
| ` @Override public MapCodec<FluidCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L58) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, FluidCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L63) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L54) |
