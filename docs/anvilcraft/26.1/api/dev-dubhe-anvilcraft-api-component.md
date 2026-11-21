# dev.dubhe.anvilcraft.api.component



## ModNameContents

` public class ModNameContents implements ComponentContents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L31)

# 模组名称内容 首先尝试寻找翻译键为 \`component\_content.anvilcraft.mod\_name.&#123;id&#125;\` 的 Component； 其次尝试找到 ModNameContents#id 对应的模组的显示名称； 若都没有，则显示翻译键为 \`component\_content.anvilcraft.mod\_name.unknown\` 的 Component，并传入 ModNameContents#id 作为参数

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ModNameContents> CODEC ` | 初值 ` CodecUtil.mapCodec(Codec.STRING.fieldOf("mod_id").forGetter(ModNameContents::getId), ModNameContents::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L33) |
| ` public ModNameContents(String id) ` | 执行 ` this.id = id `<br>[调用处 NamespaceCategory.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/category/NamespaceCategory.java#L26) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L45) |
| ` @Override public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> output, Style currentStyle) ` | 末尾返回 ` Optional.empty() `<br>实现调用 ` this.decompose() `<br>实现调用 ` part.visit(output, currentStyle) `<br>实现调用 ` result.isPresent() `<br>实现调用 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L78) |
| ` @Override public <T> Optional<T> visit(FormattedText.ContentConsumer<T> output) ` | 末尾返回 ` Optional.empty() `<br>实现调用 ` this.decompose() `<br>实现调用 ` part.visit(output) `<br>实现调用 ` result.isPresent() `<br>实现调用 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L92) |
| ` @Override public MutableComponent resolve(ResolutionContext context, int recursionDepth) throws CommandSyntaxException ` | 末尾返回 ` MutableComponent.create(new ModNameContents(this.id)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L106) |
| ` @Override public MapCodec<? extends ComponentContents> codec() ` | 末尾返回 ` ModNameContents.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L111) |
| ` @Override public boolean equals(Object o) ` | ` (!(o instanceof ModNameContents that)) ` 成立时提前返回 ` false `<br>末尾返回 ` Objects.equals(this.getId(), that.getId()) `<br>实现调用 ` Objects.equals(this.getId(), that.getId()) `<br>实现调用 ` this.getId() `<br>实现调用 ` that.getId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L116) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hashCode(this.getId()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/ModNameContents.java#L122) |

## TranslatableContents

` public class TranslatableContents implements ComponentContents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Object[] NO_ARGS ` | 初值 ` new Object[0] ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L33) |
| ` public static final MapCodec<TranslatableContents> MAP_CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L45) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean isAllowedPrimitiveArgument(@Nullable Object object) ` | 末尾返回 ` object instanceof Number \|\| object instanceof Boolean \|\| object instanceof String `<br>[调用处 TranslatableContents.filterAllowedArguments](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L76) |
| ` public TranslatableContents(String key, @Nullable Component fallback, Object[] args) ` | 实现调用 ` FMLLoader.getCurrentOrNull() `<br>实现调用 ` loader.isProduction() `<br>分支 ` (loader != null && !loader.isProduction()) ` 内调用 ` TranslatableContents.isAllowedPrimitiveArgument(arg) `<br>[调用处 TranslatableContents.create](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L92) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L95) |
| ` @Override public MapCodec<TranslatableContents> codec() ` | 末尾返回 ` TranslatableContents.MAP_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L113) |
| ` @Override public <T> Optional<T> visit(FormattedText.StyledContentConsumer<T> output, Style currentStyle) ` | 末尾返回 ` Optional.empty() `<br>实现调用 ` this.decompose() `<br>实现调用 ` part.visit(output, currentStyle) `<br>实现调用 ` result.isPresent() `<br>实现调用 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L212) |
| ` @Override public <T> Optional<T> visit(FormattedText.ContentConsumer<T> output) ` | 末尾返回 ` Optional.empty() `<br>实现调用 ` this.decompose() `<br>实现调用 ` part.visit(output) `<br>实现调用 ` result.isPresent() `<br>实现调用 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L226) |
| ` @Override public MutableComponent resolve(ResolutionContext context, int recursionDepth) throws CommandSyntaxException ` | 末尾返回 ` MutableComponent.create(new TranslatableContents(this.key, this.fallback, argsCopy)) `<br>分支 ` (param instanceof Component component) ` 内调用 ` ComponentUtils.resolve(context, component, recursionDepth) `<br>实现调用 ` MutableComponent.create(new TranslatableContents(this.key, this.fallback, argsCopy)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L240) |
| ` @Override public boolean equals(Object o) ` | 末尾返回 ` this == o \|\| o instanceof TranslatableContents that && Objects.equals(this.key, that.key) && Objects.equals(this.fallback, that.fallback) && Arrays.equals(this.args, that.args) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L256) |
| ` @Override public int hashCode() ` | 末尾返回 ` 31 * result + Arrays.hashCode(this.args) `<br>实现调用 ` Objects.hashCode(this.key) `<br>实现调用 ` Objects.hashCode(this.fallback) `<br>实现调用 ` Arrays.hashCode(this.args) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L265) |
| ` @Override public String toString() ` | 末尾返回 ` "translation{key=\'" + this.key + "\'" + (this.fallback != null ? ", fallback=\'" + this.fallback + "\'" : "") + ", args=" + Arrays.toString(this.args) + "}" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L272) |
| ` public String getKey() ` | 末尾返回 ` this.key `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L32) |
| ` @Nullable public Component getFallback() ` | 末尾返回 ` this.fallback `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L32) |
| ` public Object[] getArgs() ` | 末尾返回 ` this.args `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableContents.java#L32) |

## TranslatableFormatException

` public class TranslatableFormatException extends IllegalArgumentException `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableFormatException.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TranslatableFormatException(TranslatableContents component, String message) ` | 执行 ` super(String.format(Locale.ROOT, "Error parsing: %s: %s", component, message)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableFormatException.java#L6) |
| ` public TranslatableFormatException(TranslatableContents component, int index) ` | 执行 ` super(String.format(Locale.ROOT, "Invalid index %d requested for %s", index, component)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableFormatException.java#L10) |
| ` public TranslatableFormatException(TranslatableContents component, Throwable t) ` | 执行 ` super(String.format(Locale.ROOT, "Error while parsing: %s", component), t) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/component/TranslatableFormatException.java#L14) |
