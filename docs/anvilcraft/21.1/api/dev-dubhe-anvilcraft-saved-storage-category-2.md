# dev.dubhe.anvilcraft.saved.storage.category（HasComponentCategory 至 UnstackableCategory.Type）



## HasComponentCategory

` public record HasComponentCategory(ItemStack icon, Component name, List<DataComponentPredicate> predicates, List<DataComponentType<?>> presence, MatchType match) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HasComponentCategory(ItemStack icon, Component name, List<DataComponentPredicate> predicates, List<DataComponentType<?>> presence, MatchType match) ` | 实现调用 ` ImmutableList.copyOf(predicates) `<br>实现调用 ` ImmutableList.copyOf(presence) `<br>[调用处 HasComponentCategory.single](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L45) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L35) |
| ` public static HasComponentCategory single( ItemLike icon, ResourceLocation suffix, DataComponentPredicate predicate ) ` | 末尾返回 ` new HasComponentCategory(new ItemStack(icon.asItem()), ICategory.constructName(suffix), ImmutableList.of(predicate), List.of(), MatchType.AND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L40) |
| ` public static HasComponentCategory single( ItemLike icon, ResourceLocation suffix, DataComponentType<?> type ) ` | 末尾返回 ` new HasComponentCategory(new ItemStack(icon.asItem()), ICategory.constructName(suffix), List.of(), ImmutableList.of(type), MatchType.AND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L54) |
| ` public static HasComponentCategory and( ItemLike icon, ResourceLocation suffix, DataComponentPredicate... predicates ) ` | 末尾返回 ` new HasComponentCategory(new ItemStack(icon.asItem()), ICategory.constructName(suffix), ImmutableList.copyOf(predicates), List.of(), MatchType.AND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L68) |
| ` public static HasComponentCategory or( ItemLike icon, ResourceLocation suffix, DataComponentPredicate... predicates ) ` | 末尾返回 ` new HasComponentCategory(new ItemStack(icon.asItem()), ICategory.constructName(suffix), ImmutableList.copyOf(predicates), List.of(), MatchType.OR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L82) |
| ` public static HasComponentCategory or( ItemLike icon, ResourceLocation suffix, DataComponentType<?>... types ) ` | 末尾返回 ` new HasComponentCategory(new ItemStack(icon.asItem()), ICategory.constructName(suffix), List.of(), ImmutableList.copyOf(types), MatchType.OR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L96) |
| ` public static HasComponentCategory nand( ItemLike icon, ResourceLocation suffix, DataComponentPredicate... predicates ) ` | 末尾返回 ` new HasComponentCategory(new ItemStack(icon.asItem()), ICategory.constructName(suffix), ImmutableList.copyOf(predicates), List.of(), MatchType.NAND) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L110) |
| ` public static HasComponentCategory nor( ItemLike icon, ResourceLocation suffix, DataComponentPredicate... predicates ) ` | 末尾返回 ` new HasComponentCategory(new ItemStack(icon.asItem()), ICategory.constructName(suffix), ImmutableList.copyOf(predicates), List.of(), MatchType.NOR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L124) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` matches ^ this.match.isInverted() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L138) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.HAS_COMPONENT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L177) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof HasComponentCategory(ItemStack icon1, Component name1, List<DataComponentPredicate> predicates1, List<DataComponentType<?>> presence1, MatchType match1))) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L182) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashItemAndComponents(this.icon()) * 31 + Objects.hash(this.name(), this.predicates(), this.presence(), this.match()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L200) |
| ` public ItemStack icon() ` | 读取 record 分量 ` icon `<br>[调用处 HasComponentCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L193) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L29) |
| ` public Component name() ` | 读取 record 分量 ` name `<br>[调用处 HasComponentCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L194) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L30) |
| ` public List<DataComponentPredicate> predicates() ` | 读取 record 分量 ` predicates `<br>[调用处 HasComponentCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L197) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L31) |
| ` public List<DataComponentType<?>> presence() ` | 读取 record 分量 ` presence `<br>[调用处 HasComponentCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L196) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L32) |
| ` public MatchType match() ` | 读取 record 分量 ` match `<br>[调用处 HasComponentCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L195) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L33) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L28) |

## HasComponentCategory.MatchType

` public enum MatchType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L252)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` AND ` | 声明于枚举 ` HasComponentCategory.MatchType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L254) |
| ` OR ` | 声明于枚举 ` HasComponentCategory.MatchType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L255) |
| ` NAND ` | 声明于枚举 ` HasComponentCategory.MatchType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L256) |
| ` NOR ` | 声明于枚举 ` HasComponentCategory.MatchType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L257) |
| ` public static final Codec<MatchType> CODEC ` | 初值 ` StringRepresentable.fromEnum(MatchType::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L260) |
| ` public static final StreamCodec<ByteBuf, MatchType> STREAM_CODEC ` | 初值 ` StreamCodecUtil.enumStreamCodec(MatchType.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L261) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name().toLowerCase(Locale.ROOT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L270) |
| ` public boolean isAnd() ` | 末尾返回 ` this.and `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L252) |
| ` public boolean isInverted() ` | 末尾返回 ` this.inverted `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L252) |
| ` public static MatchType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L252) |
| ` public static MatchType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L252) |

## HasComponentCategory.Type

` public static class Type implements ICategory.Type<HasComponentCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L206)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<HasComponentCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L207) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, HasComponentCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L227) |
| ` @Override public MapCodec<HasComponentCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L241) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, HasComponentCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L246) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/HasComponentCategory.java#L206) |

## ICategory

` public interface ICategory extends Predicate<UnlimitedItemStack> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Codec<ICategory> DIRECT_CODEC ` | 初值 ` Codec.lazyInitialized( () -> ModRegistries.CATEGORY_TYPE.byNameCodec().dispatch(ICategory::getType, Type::codec) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L32) |
| ` Codec<Holder<ICategory>> HOLDER_CODEC ` | 初值 ` RegistryFileCodec.create(ModRegistryKeys.CATEGORY, DIRECT_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L35) |
| ` Codec<ICategory> CODEC ` | 由 ` Codec.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L36) |
| ` StreamCodec<RegistryFriendlyByteBuf, ICategory> STREAM_CODEC ` | 初值 ` ByteBufCodecs.registry(ModRegistryKeys.CATEGORY_TYPE) .dispatch(ICategory::getType, Type::streamCodec) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L59) |
| ` StreamCodec<RegistryFriendlyByteBuf, List<ICategory>> LIST_STREAM_CODEC ` | 初值 ` ICategory.STREAM_CODEC.apply(ByteBufCodecs.list()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L61) |
| ` Codec<Component> NAME_CODEC ` | 初值 ` Codec.either(ComponentSerialization.flatCodec(Integer.MAX_VALUE), ComponentSerialization.CODEC) .xmap(either -> either.map(Function.identity(), Function.identity()), Either::right) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L62) |
| ` ItemStack icon() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L65) |
| ` Component name() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L67) |
| ` @Override boolean test(UnlimitedItemStack stack) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L69) |
| ` default boolean testFluid(FluidStack fluid) ` | 判定仓储中的流体伪条目是否属于本分类。 分类本身是物品谓词，而流体不是物品，因此默认不匹配任何流体； 只有流体分类（以及命名空间这类对流体质地成立的分类）才覆写它。<br>参数 ` fluid ` 待判定的流体<br>返回 属于本分类时返回 true<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L81) |
| ` Type<? extends ICategory> getType() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L85) |
| ` static Component constructName(ResourceLocation suffix) ` | 末尾返回 ` Component.translatable("category." + suffix.toString().replace(':', '.')) `<br>[调用处 AndCategory.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/AndCategory.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L87) |

## ICategory.Type

` interface Type<C extends ICategory> extends ISerializer<C> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/ICategory.java#L91)


## NamespaceCategory

` public record NamespaceCategory(ItemStack icon, Component name, String namespace) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NamespaceCategory(ItemStack icon, String namespace) ` | 执行 ` this( icon, Component.translatable( "category.anvilcraft.namespace", MutableComponent.create(new ModNameContents(namespace)) ), namespace ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L23) |
| ` public NamespaceCategory(ItemLike icon, String namespace) ` | 执行 ` this(new ItemStack(icon.asItem()), namespace) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L34) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` stack.typeHolder() .unwrapKey() .map(key -> key.location().getNamespace().equals(this.namespace)) .orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L38) |
| ` @Override public boolean testFluid(FluidStack fluid) ` | 末尾返回 ` BuiltInRegistries.FLUID.getKey(fluid.getFluid()).getNamespace().equals(this.namespace) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L46) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.NAMESPACE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L52) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof NamespaceCategory(ItemStack icon1, Component name1, String namespace1))) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItemSameComponents(this.icon(), icon1) && Objects.equals(this.name(), name1) && Objects.equals(this.namespace(), namespace1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L57) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashItemAndComponents(this.icon()) * 31 + Objects.hash(this.name(), this.namespace()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L65) |
| ` public ItemStack icon() ` | 读取 record 分量 ` icon `<br>[调用处 NamespaceCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L22) |
| ` public Component name() ` | 读取 record 分量 ` name `<br>[调用处 NamespaceCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L61) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L22) |
| ` public String namespace() ` | 读取 record 分量 ` namespace `<br>[调用处 NamespaceCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L22) |

## NamespaceCategory.Type

` public static class Type implements ICategory.Type<NamespaceCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L70)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<NamespaceCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L71) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, NamespaceCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L83) |
| ` @Override public MapCodec<NamespaceCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L93) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, NamespaceCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L98) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L70) |

## OrCategory

` public record OrCategory(ItemStack icon, Component name, List<ICategory> categories) implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OrCategory(ItemLike icon, ResourceLocation suffix, ICategory... categories) ` | 执行 ` this(new ItemStack(icon.asItem()), ICategory.constructName(suffix), List.of(categories)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L21) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L25) |
| ` @Override public boolean testFluid(FluidStack fluid) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L35) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.OR.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L45) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof OrCategory(ItemStack icon1, Component name1, List<ICategory> categories1))) ` 成立时提前返回 ` false `<br>末尾返回 ` ItemStack.isSameItemSameComponents(this.icon(), icon1) && Objects.equals(this.name(), name1) && Objects.equals(this.categories(), categories1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L50) |
| ` @Override public int hashCode() ` | 末尾返回 ` ItemStack.hashItemAndComponents(this.icon()) * 31 + Objects.hash(this.name(), this.categories()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L58) |
| ` public ItemStack icon() ` | 读取 record 分量 ` icon `<br>[调用处 OrCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L20) |
| ` public Component name() ` | 读取 record 分量 ` name `<br>[调用处 OrCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L20) |
| ` public List<ICategory> categories() ` | 读取 record 分量 ` categories `<br>[调用处 OrCategory.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L20) |

## OrCategory.Type

` public static class Type implements ICategory.Type<OrCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L63)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<OrCategory> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L64) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, OrCategory> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L77) |
| ` @Override public MapCodec<OrCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L87) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, OrCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L92) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/OrCategory.java#L63) |

## UnstackableCategory

` public record UnstackableCategory() implements ICategory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final UnstackableCategory INSTANCE ` | 初值 ` new UnstackableCategory() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L14) |
| ` @Override public ItemStack icon() ` | 末尾返回 ` new ItemStack(Items.DIAMOND_SWORD) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L16) |
| ` @Override public Component name() ` | 末尾返回 ` Component.translatable("category.anvilcraft.unstackable") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L21) |
| ` @Override public boolean test(UnlimitedItemStack stack) ` | 末尾返回 ` !stack.isStackable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L26) |
| ` @Override public Type getType() ` | 末尾返回 ` ModCategoryTypes.UNSTACKABLE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L31) |
| ` public UnstackableCategory() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L13) |

## UnstackableCategory.Type

` public static class Type implements ICategory.Type<UnstackableCategory> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<UnstackableCategory> CODEC ` | 初值 ` MapCodec.unit(UnstackableCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L37) |
| ` public static final StreamCodec<ByteBuf, UnstackableCategory> STREAM_CODEC ` | 初值 ` StreamCodec.unit(UnstackableCategory.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L38) |
| ` @Override public MapCodec<UnstackableCategory> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L40) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, UnstackableCategory> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC.cast() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L45) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/UnstackableCategory.java#L36) |
