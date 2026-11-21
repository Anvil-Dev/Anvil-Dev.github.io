# dev.dubhe.anvilcraft.saved.storage.category（AndCategory 至 HasComponentCategory）



## AndCategory

` public record AndCategory(ItemStackTemplate icon, Component name, List<ICategory> categories) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AndCategory(ItemLike icon, Identifier suffix, ICategory... categories) ` | 执行 ` this(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), List.of(categories)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L20) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L24) |
| ` @Override public boolean testFluid(FluidStack fluid) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L34) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.AND.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L44) |
| ` public ItemStackTemplate icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L19) |
| ` public Component name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L19) |
| ` public List<ICategory> categories() ` | 读取 record 分量 ` categories ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L19) |

## AndCategory.Type

` public static class Type implements ICategory.Type<AndCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<AndCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L50) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AndCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L63) |
| ` @Override public MapCodec<AndCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L73) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, AndCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L78) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L49) |

## BlockCategory

` public record BlockCategory() implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BlockCategory INSTANCE ` | 初值 ` new BlockCategory() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L15) |
| ` @Override public ItemStackTemplate icon() ` | 末尾返回 ` new ItemStackTemplate(Items.BRICKS) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L17) |
| ` @Override public Component name() ` | 末尾返回 ` Component.translatable("category.anvilcraft.block") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L22) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` stack.getItem() instanceof BlockItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L27) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.BLOCK.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L32) |
| ` public BlockCategory() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L14) |

## BlockCategory.Type

` public static class Type implements ICategory.Type<BlockCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<BlockCategory> CODEC ` | 初值 ` MapCodec.unit(BlockCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L38) |
| ` public static final StreamCodec<ByteBuf, BlockCategory> STREAM_CODEC ` | 初值 ` StreamCodec.unit(BlockCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L39) |
| ` @Override public MapCodec<BlockCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L41) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, BlockCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L46) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/BlockCategory.java#L37) |

## CreativeModeTabCategory

` public record CreativeModeTabCategory(ItemStackTemplate icon, Component name, ResourceKey<CreativeModeTab> key) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeModeTabCategory(ItemLike icon, Identifier suffix, ResourceKey<CreativeModeTab> key) ` | 执行 ` this(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), key) `<br>[调用处 ModCategories.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L73) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L35) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | ` (server == null) ` 成立时提前返回 ` tab.contains(stack.getStack()) `<br>末尾返回 ` CreativeModeTabCategory.contents(server, this.key, tab).contains(stack.getStack()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L39) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.CREATIVE_MODE_TAB.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L76) |
| ` public ItemStackTemplate icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |
| ` public Component name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |
| ` public ResourceKey<CreativeModeTab> key() ` | 读取 record 分量 ` key ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L31) |

## CreativeModeTabCategory.Type

` public static class Type implements ICategory.Type<CreativeModeTabCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L81)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CreativeModeTabCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L82) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CreativeModeTabCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L94) |
| ` @Override public MapCodec<CreativeModeTabCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L104) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, CreativeModeTabCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L109) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/CreativeModeTabCategory.java#L81) |

## EnchantedCategory

` public record EnchantedCategory() implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17)

匹配实际包含附魔的物品，包括储存附魔与额外附魔。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnchantedCategory INSTANCE ` | 初值 ` new EnchantedCategory() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L18) |
| ` @Override public ItemStackTemplate icon() ` | 末尾返回 ` new ItemStackTemplate(Items.ENCHANTED_BOOK) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L20) |
| ` @Override public Component name() ` | 末尾返回 ` Component.translatable("category.anvilcraft.enchanted") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L25) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 实现调用 ` stack.getOrDefault(DataComponents.ENCHANTMENTS, ItemEnchantments.EMPTY).isEmpty() `<br>实现调用 ` stack.getOrDefault(DataComponents.ENCHANTMENTS, ItemEnchantments.EMPTY) `<br>实现调用 ` stack.getOrDefault(DataComponents.STORED_ENCHANTMENTS, ItemEnchantments.EMPTY).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L30) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.ENCHANTED.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L38) |
| ` public EnchantedCategory() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L17) |

## EnchantedCategory.Type

` public static class Type implements ICategory.Type<EnchantedCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L43)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<EnchantedCategory> CODEC ` | 初值 ` MapCodec.unit(EnchantedCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L44) |
| ` public static final StreamCodec<ByteBuf, EnchantedCategory> STREAM_CODEC ` | 初值 ` StreamCodec.unit(EnchantedCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L45) |
| ` @Override public MapCodec<EnchantedCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L47) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, EnchantedCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L52) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/EnchantedCategory.java#L43) |

## FilterCategory

` public record FilterCategory(ItemStackTemplate icon, Component name, FilterContent filter) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static FilterCategory from(ItemStack filter) ` | 实现调用 ` filter.copyWithCount(1) `<br>实现调用 ` ItemStackTemplate.fromNonEmptyStack(filter) `<br>实现调用 ` FilterCategory.findNameFromFilter(filter) `<br>[调用处 CategorySettingsScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L166) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L21) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` this.filter.filter(stack.getStack()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L34) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.FILTER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L39) |
| ` public FilterCategory(ItemStackTemplate icon, Component name, FilterContent filter) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public ItemStackTemplate icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public Component name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public FilterContent filter() ` | 读取 record 分量 ` filter ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L18) |

## FilterCategory.Type

` public static class Type implements ICategory.Type<FilterCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L44)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<FilterCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L45) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, FilterCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L57) |
| ` @Override public MapCodec<FilterCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L67) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, FilterCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L72) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FilterCategory.java#L44) |

## FluidCategory

` public record FluidCategory() implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L20)

匹配仓储端口中的流体和装有流体的物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidCategory INSTANCE ` | 初值 ` new FluidCategory() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L21) |
| ` @Override public ItemStackTemplate icon() ` | 末尾返回 ` new ItemStackTemplate(Items.WATER_BUCKET) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L23) |
| ` @Override public Component name() ` | 末尾返回 ` Component.translatable("category.anvilcraft.fluid") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L28) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | ` (stack.isEmpty()) ` 成立时提前返回 ` false `<br>` (handler == null) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L33) |
| ` @Override public boolean testFluid(FluidStack fluid) ` | 末尾返回 ` !fluid.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L51) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.FLUID.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L56) |
| ` public FluidCategory() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L20) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L20) |

## FluidCategory.Type

` public static class Type implements ICategory.Type<FluidCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L61)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<FluidCategory> CODEC ` | 初值 ` MapCodec.unit(FluidCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L62) |
| ` public static final StreamCodec<ByteBuf, FluidCategory> STREAM_CODEC ` | 初值 ` StreamCodec.unit(FluidCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L63) |
| ` @Override public MapCodec<FluidCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L65) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, FluidCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L70) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/FluidCategory.java#L61) |

## HasComponentCategory

` public record HasComponentCategory(ItemStackTemplate icon, Component name, ImmutableMap<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates, MatchType match) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T extends DataComponentPredicate> HasComponentCategory single( ItemLike icon, Identifier suffix, DataComponentPredicate.Type<T> type, T predicate ) ` | 末尾返回 ` new HasComponentCategory(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), ImmutableMap.of(type, predicate), MatchType.AND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L32) |
| ` public static HasComponentCategory and( ItemLike icon, Identifier suffix, Map<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates ) ` | 末尾返回 ` new HasComponentCategory(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), processed.build(), MatchType.AND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L46) |
| ` public static HasComponentCategory and( ItemLike icon, Identifier suffix, DataComponentPredicate.AnyValueType... types ) ` | 末尾返回 ` new HasComponentCategory(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), predicates.build(), MatchType.AND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L67) |
| ` public static HasComponentCategory or( ItemLike icon, Identifier suffix, Map<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates ) ` | 末尾返回 ` new HasComponentCategory(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), processed.build(), MatchType.OR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L84) |
| ` public static HasComponentCategory or( ItemLike icon, Identifier suffix, DataComponentPredicate.AnyValueType... types ) ` | 末尾返回 ` new HasComponentCategory(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), predicates.build(), MatchType.OR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L105) |
| ` public static HasComponentCategory nand( ItemLike icon, Identifier suffix, Map<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates ) ` | 末尾返回 ` new HasComponentCategory(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), processed.build(), MatchType.NAND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L122) |
| ` public static HasComponentCategory nand( ItemLike icon, Identifier suffix, DataComponentPredicate.AnyValueType... types ) ` | 末尾返回 ` new HasComponentCategory(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), predicates.build(), MatchType.NAND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L143) |
| ` public static HasComponentCategory nor( ItemLike icon, Identifier suffix, Map<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates ) ` | 末尾返回 ` new HasComponentCategory(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), processed.build(), MatchType.NOR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L160) |
| ` public static HasComponentCategory nor( ItemLike icon, Identifier suffix, DataComponentPredicate.AnyValueType... types ) ` | 末尾返回 ` new HasComponentCategory(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), predicates.build(), MatchType.NOR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L181) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` this.match.isAnd() ^ this.match.isInverted() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L198) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.HAS_COMPONENT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L208) |
| ` public HasComponentCategory(ItemStackTemplate icon, Component name, ImmutableMap<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates, MatchType match) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L26) |
| ` public ItemStackTemplate icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L27) |
| ` public Component name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L28) |
| ` public ImmutableMap<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates() ` | 读取 record 分量 ` predicates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L29) |
| ` public MatchType match() ` | 读取 record 分量 ` match ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L26) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L26) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L26) |
