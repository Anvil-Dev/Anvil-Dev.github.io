# dev.dubhe.anvilcraft.api.recipe.result.modifier（RemoveAttribute.Builder 至 RemoveData.Type）



## RemoveAttribute.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L67)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("UnusedReturnValue") public Builder withAttr(Identifier attr) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.attrs.add(attr) `<br>[调用处 RemoveAttribute.Builder.withAttrs](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L70) |
| ` public Builder withAttrs(Identifier... attrs) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.withAttr(attr) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L76) |
| ` public Builder withAttrs(List<Identifier> attrs) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.attrs.addAll(attrs) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L83) |
| ` public RemoveAttribute build() ` | 末尾返回 ` new RemoveAttribute(this.attrs.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L88) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L67) |

## RemoveAttribute.Type

` public static class Type implements IResultModifier.Type<RemoveAttribute> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L55)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<RemoveAttribute> codec() ` | 末尾返回 ` RemoveAttribute.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L56) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, RemoveAttribute> streamCodec() ` | 末尾返回 ` RemoveAttribute.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L61) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveAttribute.java#L55) |

## RemoveData

` public record RemoveData(List<DataComponentType<?>> types) implements IResultModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L18)

删除指定输入物品的数据。<br>参数 ` types ` 包含指定的输入物品和将要删除的数据组件类型。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<RemoveData> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(ins -> ins.group( DataComponentType.CODEC .listOf() .fieldOf("types") .forGetter(RemoveData::types) ).apply(ins, RemoveData::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L19) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, RemoveData> STREAM_CODEC ` | 初值 ` StreamCodec.composite( DataComponentType.STREAM_CODEC.apply(ByteBufCodecs.list()), RemoveData::types, RemoveData::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L25) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L31) |
| ` public static Builder removeData(DataComponentType<?>... types) ` | 末尾返回 ` new Builder().withTypes(types) `<br>[调用处 RecipeResult.Builder.removeData](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/RecipeResult.java#L177) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L35) |
| ` @Override public void modify(ResultContext ctx) ` | 实现调用 ` ctx.getResult().set(type, null) `<br>实现调用 ` ctx.getResult() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L39) |
| ` @Override public Type type() ` | 末尾返回 ` ModResultModifierTypes.REMOVE_DATA.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L46) |
| ` public RemoveData(List<DataComponentType<?>> types) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L18) |
| ` public List<DataComponentType<?>> types() ` | 读取 record 分量 ` types ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L18) |

## RemoveData.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L63)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("UnusedReturnValue") public Builder withType(DataComponentType<?> type) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.add(type) `<br>[调用处 RemoveData.Builder.withTypes](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L66) |
| ` public Builder withTypes(DataComponentType<?>... types) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.withType(type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L72) |
| ` public Builder withTypes(List<DataComponentType<?>> types) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` this.types.addAll(types) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L79) |
| ` public RemoveData build() ` | 末尾返回 ` new RemoveData(this.types.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L84) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L63) |

## RemoveData.Type

` public static class Type implements IResultModifier.Type<RemoveData> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public MapCodec<RemoveData> codec() ` | 末尾返回 ` RemoveData.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L52) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, RemoveData> streamCodec() ` | 末尾返回 ` RemoveData.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L57) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/result/modifier/RemoveData.java#L51) |
