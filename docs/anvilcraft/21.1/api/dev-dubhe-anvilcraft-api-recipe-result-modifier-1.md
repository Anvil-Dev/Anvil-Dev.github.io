# dev.dubhe.anvilcraft.api.recipe.result.modifier（ApplyData 至 RemoveAttribute）



## ApplyData

` public record ApplyData(DataComponentPatch patch) implements IResultModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ApplyData> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( DataComponentPatch.CODEC.fieldOf("components").forGetter(ApplyData::patch) ).apply(ins, ApplyData::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L15) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ApplyData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( DataComponentPatch.STREAM_CODEC, ApplyData::patch, ApplyData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L18) |
| ` public static Builder of(ItemLike item) ` | 末尾返回 ` new Builder(item) `<br>[调用处 RecipeResult.Builder.withData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L168) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L23) |
| ` @Override public void modify(ResultContext ctx) ` | 执行 ` ctx.updateResult(this.patch) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L27) |
| ` @Override public Type type() ` | 末尾返回 ` ModResultModifierTypes.APPLY_DATA.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L32) |
| ` public ApplyData(DataComponentPatch patch) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L14) |
| ` public DataComponentPatch patch() ` | 读取 record 分量 ` patch ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L14) |

## ApplyData.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder(ItemLike item) ` | 执行 ` this.map = new PatchedDataComponentMap(item.asItem().components()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L52) |
| ` public <T> Builder withData(DataComponentType<? super T> type, T value) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.map.set(type, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L56) |
| ` public <T> Builder withData(DataComponentPatch patch) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.map.applyPatch(patch) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L61) |
| ` public ApplyData build() ` | 末尾返回 ` new ApplyData(this.map.asPatch()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L66) |

## ApplyData.Type

` public static class Type implements IResultModifier.Type<ApplyData> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<ApplyData> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L38) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ApplyData> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L43) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ApplyData.java#L37) |

## ChangeDataType

` public record ChangeDataType<T>(RecipeInputSlot input, DataComponentType<T> orig, ICustomDataComponent<T> dest) implements IResultModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L21)

复制指定输入物品的数据，并将其粘贴到另一个数据组件类型下。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ChangeDataType<?>> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L22) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ChangeDataType<?>> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L32) |
| ` public ChangeDataType(ResourceLocation origId, ICustomDataComponent<T> dest, RecipeInputSlot slot) ` | 执行 ` this(slot, Util.cast(BuiltInRegistries.DATA_COMPONENT_TYPE.get(origId)), dest) `<br>[调用处 ChangeDataType.Builder.build](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L98) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L42) |
| ` public static <T> Builder<T> builder() ` | 末尾返回 ` new Builder<>() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L50) |
| ` public static <T> Builder<T> changeDataType(RecipeInputSlot input, DataComponentType<T> orig, ICustomDataComponent<T> dest) ` | 末尾返回 ` new Builder<T>().input(input).orig(orig).dest(dest) `<br>[调用处 RecipeResult.Builder.changeDataType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L195) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L54) |
| ` @Override public void modify(ResultContext ctx) ` | 实现调用 ` ctx.getInput(this.input).get(this.orig) `<br>实现调用 ` ctx.getInput(this.input) `<br>实现调用 ` ctx.getResult().set(this.orig, null) `<br>实现调用 ` ctx.getResult() `<br>实现调用 ` this.dest.getDataComponentType() `<br>实现调用 ` this.dest.merge(ctx.getResult().get(this.dest.getDataComponentType()), value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L58) |
| ` @Override public Type type() ` | 末尾返回 ` ModResultModifierTypes.CHANGE_DATA_TYPE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L69) |
| ` public RecipeInputSlot input() ` | 读取 record 分量 ` input ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L21) |
| ` public DataComponentType<T> orig() ` | 读取 record 分量 ` orig ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L21) |
| ` public ICustomDataComponent<T> dest() ` | 读取 record 分量 ` dest ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L21) |

## ChangeDataType.Builder

` public static class Builder<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L90)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ChangeDataType<T> build() ` | 末尾返回 ` new ChangeDataType<>(this.input, this.orig, this.dest) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L97) |
| ` public ChangeDataType.Builder<T> input(final RecipeInputSlot input) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L90) |
| ` public ChangeDataType.Builder<T> orig(final DataComponentType<T> orig) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L90) |
| ` public ChangeDataType.Builder<T> dest(final ICustomDataComponent<T> dest) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L90) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L90) |

## ChangeDataType.Type

` public static class Type implements IResultModifier.Type<ChangeDataType<?>> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L78)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<ChangeDataType<?>> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L79) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ChangeDataType<?>> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L84) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ChangeDataType.java#L78) |

## CopyData

` public record CopyData(List<ICustomDataComponent<?>> types) implements IResultModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L22)

复制指定输入物品的数据。<br>参数 ` types ` 包含指定的输入物品和将要复制的数据组件类型的自定义数据组件。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CopyData> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( ICustomDataComponent.CODEC.listOf().fieldOf("types").forGetter(CopyData::types) ).apply(ins, CopyData::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L23) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, CopyData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ICustomDataComponent.STREAM_CODEC.apply(ByteBufCodecs.list()), CopyData::types, CopyData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L26) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L31) |
| ` public static Builder copyData(ICustomDataComponent<?>... types) ` | 末尾返回 ` new Builder().withTypes(types) `<br>[调用处 RecipeResult.Builder.copyData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L150) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L35) |
| ` @Override public void modify(ResultContext ctx) ` | 实现调用 ` CopyData.wrappedMake(ctx, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L39) |
| ` @Override public Type type() ` | 末尾返回 ` ModResultModifierTypes.COPY_DATA.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L46) |
| ` public CopyData(List<ICustomDataComponent<?>> types) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L22) |
| ` public List<ICustomDataComponent<?>> types() ` | 读取 record 分量 ` types ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L22) |

## CopyData.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L67)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder withType(int input, DataComponentType<?> type) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.add(NormalDataComponent.of(input, type)) `<br>实现调用 ` NormalDataComponent.of(input, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L70) |
| ` public Builder withTypes(int input, DataComponentType<?>... types) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.add(NormalDataComponent.of(input, type)) `<br>实现调用 ` NormalDataComponent.of(input, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L75) |
| ` public Builder withTypes(List<ICustomDataComponent<?>> types) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.addAll(types) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L82) |
| ` public Builder withTypes(ICustomDataComponent<?>... types) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.add(type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L87) |
| ` public CopyData build() ` | 末尾返回 ` new CopyData(this.types.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L94) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L67) |

## CopyData.Type

` public static class Type implements IResultModifier.Type<CopyData> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L55)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<CopyData> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L56) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, CopyData> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L61) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/CopyData.java#L55) |

## IResultModifier

` public interface IResultModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/IResultModifier.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Codec<IResultModifier> CODEC ` | 初值 ` Codec.lazyInitialized(() -> ModRegistries.MODIFIER_TYPE .byNameCodec().dispatch(IResultModifier::type, Type::codec)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/IResultModifier.java#L15) |
| ` StreamCodec<RegistryFriendlyByteBuf, IResultModifier> STREAM_CODEC ` | 初值 ` StreamCodec.recursive( streamCodec -> ByteBufCodecs.registry(ModRegistryKeys.MODIFIER) .dispatch(IResultModifier::type, Type::streamCodec)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/IResultModifier.java#L17) |
| ` void modify(ResultContext ctx) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/IResultModifier.java#L21) |
| ` Type<? extends IResultModifier> type() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/IResultModifier.java#L23) |
| ` static ItemStack getInput(ResultContext ctx, RecipeInputSlot slot) ` | 末尾返回 ` ctx.getInput(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/IResultModifier.java#L25) |

## IResultModifier.Type

` interface Type<T extends IResultModifier> extends ISerializer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/IResultModifier.java#L29)


## MergeData

` public record MergeData(List<ICustomDataComponent<?>> types) implements IResultModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L22)

复制并合并指定输入物品的数据。<br>参数 ` types ` 包含指定的输入物品和将要复制的数据组件类型的自定义数据组件。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<MergeData> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( ICustomDataComponent.CODEC.listOf() .fieldOf("types") .forGetter(MergeData::types) ).apply(ins, MergeData::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L23) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, MergeData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ICustomDataComponent.STREAM_CODEC.apply(ByteBufCodecs.list()), MergeData::types, MergeData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L28) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L34) |
| ` public static Builder mergeData(ICustomDataComponent<?>... types) ` | 末尾返回 ` new Builder().withTypes(types) `<br>[调用处 RecipeResult.Builder.mergeData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L38) |
| ` @Override public void modify(ResultContext ctx) ` | 实现调用 ` MergeData.wrappedMake(ctx, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L42) |
| ` @Override public Type type() ` | 末尾返回 ` ModResultModifierTypes.MERGE_DATA.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L49) |
| ` public MergeData(List<ICustomDataComponent<?>> types) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L22) |
| ` public List<ICustomDataComponent<?>> types() ` | 读取 record 分量 ` types ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L22) |

## MergeData.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L77)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder withType(int input, DataComponentType<?> type) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.add(NormalDataComponent.of(input, type)) `<br>实现调用 ` NormalDataComponent.of(input, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L80) |
| ` public Builder withTypes(int input, DataComponentType<?>... types) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.add(NormalDataComponent.of(input, type)) `<br>实现调用 ` NormalDataComponent.of(input, type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L85) |
| ` public Builder withTypes(List<ICustomDataComponent<?>> types) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.addAll(types) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L92) |
| ` public Builder withTypes(ICustomDataComponent<?>... types) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.add(type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L97) |
| ` public MergeData build() ` | 末尾返回 ` new MergeData(this.types.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L104) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L77) |

## MergeData.Type

` public static class Type implements IResultModifier.Type<MergeData> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L65)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<MergeData> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L66) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, MergeData> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L71) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/MergeData.java#L65) |

## ModifyCount

` public record ModifyCount(INumberProvider count) implements IResultModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ModifyCount> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( INumberProvider.CODEC .fieldOf("count") .forGetter(ModifyCount::count) ).apply(ins, ModifyCount::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L13) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ModifyCount> STREAM_CODEC ` | 初值 ` StreamCodec.composite( INumberProvider.STREAM_CODEC, ModifyCount::count, ModifyCount::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L18) |
| ` public static Builder of() ` | 末尾返回 ` new Builder() `<br>[调用处 RecipeResult.Builder.count](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L141) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L24) |
| ` @Override public void modify(ResultContext ctx) ` | 执行 ` ctx.updateResult(this.count.getInt(ctx)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L28) |
| ` @Override public Type type() ` | 末尾返回 ` ModResultModifierTypes.MODIFY_COUNT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L33) |
| ` public ModifyCount(INumberProvider count) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L12) |
| ` public INumberProvider count() ` | 读取 record 分量 ` count ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L12) |

## ModifyCount.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L50)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder() ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L53) |
| ` public Builder count(int count) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` ConstantValue.exactly(count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L56) |
| ` public ModifyCount build() ` | ` (this.count == null) ` 成立时抛出 ` new IllegalArgumentException("The count in ModifyCount should not be null!") `<br>末尾返回 ` new ModifyCount(this.count) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L61) |

## ModifyCount.Type

` public static class Type implements IResultModifier.Type<ModifyCount> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<ModifyCount> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L39) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ModifyCount> streamCodec() ` | 末尾返回 ` STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L44) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/ModifyCount.java#L38) |

## RemoveAttribute

` public record RemoveAttribute(List<ResourceLocation> attrs) implements IResultModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L22)

删除指定输入物品的数据。<br>参数 ` attrs ` 包含指定的输入物品和将要删除的数据组件类型。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<RemoveAttribute> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( ResourceLocation.CODEC .listOf() .fieldOf("attrs") .forGetter(RemoveAttribute::attrs) ).apply(ins, RemoveAttribute::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L23) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RemoveAttribute> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ResourceLocation.STREAM_CODEC.apply(ByteBufCodecs.list()), RemoveAttribute::attrs, RemoveAttribute::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L29) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L35) |
| ` public static Builder removeAttr(ResourceLocation... attrs) ` | 末尾返回 ` new Builder().withAttrs(attrs) `<br>[调用处 RecipeResult.Builder.removeAttribute](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L186) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L39) |
| ` @Override public void modify(ResultContext ctx) ` | 实现调用 ` ItemAttributeModifiers.builder() `<br>实现调用 ` ctx.getResult().getAttributeModifiers().modifiers() `<br>实现调用 ` ctx.getResult().getAttributeModifiers() `<br>实现调用 ` ctx.getResult() `<br>实现调用 ` this.attrs.contains(entry.modifier().id()) `<br>实现调用 ` entry.modifier().id() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L43) |
| ` @Override public Type type() ` | 末尾返回 ` ModResultModifierTypes.REMOVE_ATTRIBUTE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L52) |
| ` public RemoveAttribute(List<ResourceLocation> attrs) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L22) |
| ` public List<ResourceLocation> attrs() ` | 读取 record 分量 ` attrs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L22) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L22) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L22) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L22) |
