# dev.dubhe.anvilcraft.api.component



## ModNameContents

` public class ModNameContents implements ComponentContents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ModNameContents> CODEC ` | 初值 ` CodecUtil.mapCodec(Codec.STRING.fieldOf("mod_id").forGetter(ModNameContents::getId), ModNameContents::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L27) |
| ` public static final ComponentContents.Type<ModNameContents> TYPE ` | 初值 ` new ComponentContents.Type<>(CODEC, "anvilcraft:mod_name") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L33) |
| ` public ModNameContents(String id) ` | 执行 ` this.id = id `<br>[调用处 NamespaceCategory.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L40) |
| ` @Override public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> output, Style currentStyle) ` | 末尾返回 ` Optional.empty() `<br>实现调用 ` this.decompose() `<br>实现调用 ` part.visit(output, currentStyle) `<br>实现调用 ` result.isPresent() `<br>实现调用 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L69) |
| ` @Override public <T> Optional<T> visit(FormattedText.ContentConsumer<T> output) ` | 末尾返回 ` Optional.empty() `<br>实现调用 ` this.decompose() `<br>实现调用 ` part.visit(output) `<br>实现调用 ` result.isPresent() `<br>实现调用 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L83) |
| ` @Override public MutableComponent resolve( @Nullable CommandSourceStack nbtPathPattern, @Nullable Entity entity, int recursionDepth ) throws CommandSyntaxException ` | 末尾返回 ` MutableComponent.create(new ModNameContents(this.id)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L97) |
| ` @Override public Type<?> type() ` | 末尾返回 ` ModNameContents.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L106) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof ModNameContents that)) ` 成立时提前返回 ` false `<br>末尾返回 ` Objects.equals(this.getId(), that.getId()) `<br>实现调用 ` Objects.equals(this.getId(), that.getId()) `<br>实现调用 ` this.getId() `<br>实现调用 ` that.getId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L111) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hashCode(this.getId()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L117) |
