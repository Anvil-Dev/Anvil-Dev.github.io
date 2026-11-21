# dev.dubhe.anvilcraft.saved.storage.category（HasComponentCategory.MatchType 至 UnstackableCategory.Type）



## HasComponentCategory.MatchType

` public enum MatchType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L256)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` AND ` | 声明于枚举 ` HasComponentCategory.MatchType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L258) |
| ` OR ` | 声明于枚举 ` HasComponentCategory.MatchType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L259) |
| ` NAND ` | 声明于枚举 ` HasComponentCategory.MatchType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L260) |
| ` NOR ` | 声明于枚举 ` HasComponentCategory.MatchType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L261) |
| ` public static final Codec<MatchType> CODEC ` | 初值 ` StringRepresentable.fromEnum(MatchType::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L264) |
| ` public static final StreamCodec<ByteBuf, MatchType> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(MatchType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L265) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L274) |
| ` public boolean isAnd() ` | 末尾返回 ` this.and `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L256) |
| ` public boolean isInverted() ` | 末尾返回 ` this.inverted `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L256) |
| ` public static MatchType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L256) |
| ` public static MatchType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L256) |

## HasComponentCategory.Type

` public static class Type implements ICategory.Type<HasComponentCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L213)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<HasComponentCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L214) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HasComponentCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L231) |
| ` @Override public MapCodec<HasComponentCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L245) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, HasComponentCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L250) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L213) |

## ICategory

` public interface ICategory extends Predicate<UnlimitedItemStack> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Codec<ICategory> DIRECT_CODEC ` | 初值 ` Codec.lazyInitialized( () -> ModRegistries.CATEGORY_TYPE.byNameCodec().dispatch(ICategory::getType, Type::codec) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L34) |
| ` Codec<Holder<ICategory>> HOLDER_CODEC ` | 初值 ` RegistryFileCodec.create(ModRegistryKeys.CATEGORY, ICategory.DIRECT_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L37) |
| ` Codec<ICategory> CODEC ` | 由 ` Codec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L38) |
| ` StreamCodec<RegistryFriendlyByteBuf, ICategory> STREAM_CODEC ` | 初值 ` ByteBufCodecs.registry(ModRegistryKeys.CATEGORY_TYPE) .dispatch(ICategory::getType, Type::streamCodec) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L61) |
| ` StreamCodec<RegistryFriendlyByteBuf, List<ICategory>> LIST_STREAM_CODEC ` | 初值 ` ICategory.STREAM_CODEC.apply(ByteBufCodecs.list()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L63) |
| ` Codec<Component> NAME_CODEC ` | 由 ` Codec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L64) |
| ` ItemStackTemplate icon() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L82) |
| ` Component name() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L84) |
| ` @Override boolean test(UnlimitedItemStack stack) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L86) |
| ` default boolean testFluid(FluidStack fluid) ` | 默认物品分类不匹配流体；流体、命名空间及组合分类按各自规则覆写。<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L90) |
| ` Type<? extends ICategory> getType() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L94) |
| ` static Component constructName(Identifier suffix) ` | 末尾返回 ` Component.translatable("category." + suffix.toString().replace(':', '.')) `<br>[调用处 AndCategory.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L96) |

## ICategory.Type

` interface Type<C extends ICategory> extends ISerializer<C> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L100)


## NamespaceCategory

` public record NamespaceCategory(ItemStackTemplate icon, Component name, String namespace) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NamespaceCategory(ItemLike icon, String namespace) ` | 实现调用 ` icon.asItem() `<br>实现调用 ` MutableComponent.create(new ModNameContents(namespace)) `<br>[调用处 CategorySettingsScreen.rebuild](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CategorySettingsScreen.java#L212) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L21) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` stack.typeHolder() .unwrapKey() .map(key -> key.identifier().getNamespace().equals(this.namespace)) .orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L32) |
| ` @Override public boolean testFluid(FluidStack fluid) ` | 末尾返回 ` BuiltInRegistries.FLUID.getKey(fluid.getFluid()).getNamespace().equals(this.namespace) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L40) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.NAMESPACE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L46) |
| ` public ItemStackTemplate icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L20) |
| ` public Component name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L20) |
| ` public String namespace() ` | 读取 record 分量 ` namespace ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L20) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L20) |

## NamespaceCategory.Type

` public static class Type implements ICategory.Type<NamespaceCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<NamespaceCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L52) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, NamespaceCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L64) |
| ` @Override public MapCodec<NamespaceCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L74) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, NamespaceCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L79) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L51) |

## OrCategory

` public record OrCategory(ItemStackTemplate icon, Component name, List<ICategory> categories) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OrCategory(ItemLike icon, Identifier suffix, ICategory... categories) ` | 执行 ` this(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), List.of(categories)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L20) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L24) |
| ` @Override public boolean testFluid(FluidStack fluid) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L34) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.OR.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L44) |
| ` public ItemStackTemplate icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L19) |
| ` public Component name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L19) |
| ` public List<ICategory> categories() ` | 读取 record 分量 ` categories ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L19) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L19) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L19) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L19) |

## OrCategory.Type

` public static class Type implements ICategory.Type<OrCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<OrCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L50) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, OrCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L63) |
| ` @Override public MapCodec<OrCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L73) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, OrCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L78) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L49) |

## RecipeBookCategoryCategory

` public record RecipeBookCategoryCategory(ItemStackTemplate icon, Component name, ResourceKey<RecipeBookCategory> key) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RecipeBookCategoryCategory(ItemLike icon, Identifier suffix, ResourceKey<RecipeBookCategory> key) ` | 执行 ` this(new ItemStackTemplate(icon.asItem()), ICategory.constructName(suffix), key) `<br>[调用处 ModCategories.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/storage/ModCategories.java#L78) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L33) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | ` (category.isEmpty()) ` 成立时提前返回 ` false `<br>` (server == null) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L37) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.RECIPE_BOOK_CATEGORY.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L63) |
| ` public ItemStackTemplate icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L29) |
| ` public Component name() ` | 读取 record 分量 ` name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L30) |
| ` public ResourceKey<RecipeBookCategory> key() ` | 读取 record 分量 ` key ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L28) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L28) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L28) |

## RecipeBookCategoryCategory.Type

` public static class Type implements ICategory.Type<RecipeBookCategoryCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L68)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<RecipeBookCategoryCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L69) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RecipeBookCategoryCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L81) |
| ` @Override public MapCodec<RecipeBookCategoryCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L91) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, RecipeBookCategoryCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L96) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/RecipeBookCategoryCategory.java#L68) |

## UnstackableCategory

` public record UnstackableCategory() implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final UnstackableCategory INSTANCE ` | 初值 ` new UnstackableCategory() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L14) |
| ` @Override public ItemStackTemplate icon() ` | 末尾返回 ` new ItemStackTemplate(Items.DIAMOND_SWORD) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L16) |
| ` @Override public Component name() ` | 末尾返回 ` Component.translatable("category.anvilcraft.unstackable") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L21) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` !stack.isStackable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L26) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.UNSTACKABLE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L31) |
| ` public UnstackableCategory() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13) |

## UnstackableCategory.Type

` public static class Type implements ICategory.Type<UnstackableCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<UnstackableCategory> CODEC ` | 初值 ` MapCodec.unit(UnstackableCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L37) |
| ` public static final StreamCodec<ByteBuf, UnstackableCategory> STREAM_CODEC ` | 初值 ` StreamCodec.unit(UnstackableCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L38) |
| ` @Override public MapCodec<UnstackableCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L40) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, UnstackableCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L45) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L36) |
