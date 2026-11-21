# dev.dubhe.anvilcraft.integration



## IntegrationUtil

` public class IntegrationUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Root root ` | 初值 ` Root.EMPTY ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L24) |
| ` public static Root load() ` | ` (IntegrationUtil.root != Root.EMPTY) ` 成立时提前返回 ` IntegrationUtil.root `<br>末尾返回 ` Root.EMPTY `<br>[调用处 IntegrationScreen.IntegrationList.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L363) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L26) |
| ` public static void openIntegrationScreen() ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.setScreen(new IntegrationScreen(minecraft.screen)) `<br>[调用处 GuideBookItem.onThought](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L216) |
| ` public IntegrationUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L23) |

## IntegrationUtil.Additional

` public static class Additional `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L114)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Additional> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L115) |
| ` public Additional(String id, Component name, Component description, Links links) ` | 实现调用 ` description.toString().isBlank() `<br>实现调用 ` description.toString() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L127) |
| ` public String id() ` | 末尾返回 ` this.id `<br>[调用处 IntegrationUtil.Additional.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L156) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L134) |
| ` public Component name() ` | 末尾返回 ` this.name `<br>[调用处 IntegrationUtil.Additional.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L157) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L138) |
| ` @Nullable public Component description() ` | 末尾返回 ` this.description `<br>[调用处 IntegrationUtil.Additional.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L158) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L142) |
| ` public Links links() ` | 末尾返回 ` this.links `<br>[调用处 IntegrationUtil.Additional.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L147) |
| ` @Override public boolean equals(@Nullable Object obj) ` | ` (obj == this) ` 成立时提前返回 ` true `<br>` (obj == null \|\| obj.getClass() != this.getClass()) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L151) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hash(this.id(), this.name(), this.description(), this.links()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L162) |
| ` @Override public String toString() ` | 末尾返回 ` "Additional[id=%s, name=%s, description=%s, links=%s]".formatted( this.id(), this.name(), this.description(), this.links() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L167) |

## IntegrationUtil.Integration

` public static final class Integration extends Additional `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L70)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Integration> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L71) |
| ` public Integration(String id, IntegrationType type, Component name, Component description, Links links) ` | 实现调用 ` super(id, name, description, links) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L80) |
| ` public IntegrationType type() ` | 末尾返回 ` this.type `<br>[调用处 IntegrationUtil.Integration.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L85) |
| ` @Override public boolean equals(@Nullable Object obj) ` | ` (obj == this) ` 成立时提前返回 ` true `<br>` (obj == null \|\| obj.getClass() != this.getClass()) ` 成立时提前返回 ` false `<br>末尾返回 ` super.equals(that) && Objects.equals(this.type(), that.type()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L89) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hash(this.id(), this.type(), this.name(), this.description(), this.links()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L97) |
| ` @Override public String toString() ` | 末尾返回 ` "Integration[id=%s, type=%s, name=%s, description=%s, links=%s]".formatted( this.id(), this.type(), this.name(), this.description(), this.links() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L102) |

## IntegrationUtil.IntegrationType

` public enum IntegrationType `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L202)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` EXTRA ` | 声明于枚举 ` IntegrationUtil.IntegrationType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L203) |
| ` BUILTIN ` | 声明于枚举 ` IntegrationUtil.IntegrationType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L203) |
| ` public static final MapCodec<IntegrationType> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L205) |
| ` public static IntegrationType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L202) |
| ` public static IntegrationType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L202) |

## IntegrationUtil.Integrations

` public record Integrations(List<Integration> guide, List<Integration> recipeQuery, List<Integration> infoHud, List<Integration> modify, List<Integration> interaction, List<Integration> compatible) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Integrations EMPTY ` | 初值 ` new Integrations(List.of(), List.of(), List.of(), List.of(), List.of(), List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L59) |
| ` public static final MapCodec<Integrations> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L60) |
| ` public Integrations(List<Integration> guide, List<Integration> recipeQuery, List<Integration> infoHud, List<Integration> modify, List<Integration> interaction, List<Integration> compatible) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51) |
| ` public List<Integration> guide() ` | 读取 record 分量 ` guide ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L52) |
| ` public List<Integration> recipeQuery() ` | 读取 record 分量 ` recipeQuery ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L53) |
| ` public List<Integration> infoHud() ` | 读取 record 分量 ` infoHud ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L54) |
| ` public List<Integration> modify() ` | 读取 record 分量 ` modify ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L55) |
| ` public List<Integration> interaction() ` | 读取 record 分量 ` interaction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L56) |
| ` public List<Integration> compatible() ` | 读取 record 分量 ` compatible ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L57) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51) |

## IntegrationUtil.Link

` public record Link(String type, String url) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Link> MAP_CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(instance -> instance.group( Codec.STRING.fieldOf("type") .forGetter(Link::type), Codec.STRING.fieldOf("url") .forGetter(Link::url) ) .apply(instance, Link::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L193) |
| ` public Link(String type, String url) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public String type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public String url() ` | 读取 record 分量 ` url ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |

## IntegrationUtil.Links

` public record Links(List<Link> target, List<Link> extra) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Links> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L180) |
| ` public Links(List<Link> target, List<Link> extra) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public List<Link> target() ` | 读取 record 分量 ` target ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public List<Link> extra() ` | 读取 record 分量 ` extra ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |

## IntegrationUtil.LoadStatus

` public enum LoadStatus `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L210)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` LOADED ` | 声明于枚举 ` IntegrationUtil.LoadStatus ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L211) |
| ` NOT_LOADED ` | 声明于枚举 ` IntegrationUtil.LoadStatus ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L212) |
| ` NOT_FOUND ` | 声明于枚举 ` IntegrationUtil.LoadStatus ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L213) |
| ` public static LoadStatus[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L210) |
| ` public static LoadStatus valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L210) |

## IntegrationUtil.Root

` public record Root(Integrations integration, List<Additional> additional) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Root EMPTY ` | 初值 ` new Root(Integrations.EMPTY, List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L43) |
| ` public static final MapCodec<Root> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L44) |
| ` public static final Codec<Root> CODEC ` | 初值 ` Root.MAP_CODEC.codec() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L48) |
| ` public Root(Integrations integration, List<Additional> additional) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public Integrations integration() ` | 读取 record 分量 ` integration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public List<Additional> additional() ` | 读取 record 分量 ` additional ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |

## StorageJeiBridge

` public final class StorageJeiBridge `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageJeiBridge.java#L10)

配方查看器在运行时注册入口，使仓储屏幕不直接加载可选依赖。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void setRecipeOpener(@Nullable Consumer<Boolean> opener) ` | 执行 ` recipeOpener = opener `<br>[调用处 StorageJeiSupport.onRuntimeAvailable](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/StorageJeiSupport.java#L46) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageJeiBridge.java#L19) |
| ` public static void setRecipeParent(@Nullable Predicate<Screen> parent) ` | 执行 ` recipeParent = parent `<br>[调用处 StorageJeiSupport.onRuntimeAvailable](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/StorageJeiSupport.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageJeiBridge.java#L23) |
| ` public static void setEmiRecipeOpener(@Nullable Consumer<Boolean> opener) ` | 执行 ` emiRecipeOpener = opener `<br>[调用处 AnvilCraftEmiPlugin.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/emi/AnvilCraftEmiPlugin.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageJeiBridge.java#L27) |
| ` public static void setEmiRecipeParent(@Nullable Predicate<Screen> parent) ` | 执行 ` emiRecipeParent = parent `<br>[调用处 AnvilCraftEmiPlugin.register](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/emi/AnvilCraftEmiPlugin.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageJeiBridge.java#L31) |
| ` public static boolean isRecipeParent(Screen screen) ` | 末尾返回 ` emiRecipeParent != null && emiRecipeParent.test(screen) \|\| recipeParent != null && recipeParent.test(screen) `<br>[调用处 StorageScreen.canTransferRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L646) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageJeiBridge.java#L35) |
| ` public static boolean openRecipes(boolean stonecutter) ` | ` (recipeOpener == null) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 StorageScreen.clickCraftingPanel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L1118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageJeiBridge.java#L40) |

## StorageRecipeTransferPlan

` public final class StorageRecipeTransferPlan `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Result create( List<List<ItemStack>> variants, Map<ItemResource, Long> available, List<StorageServerStub.FluidEntry> fluidEntries ) ` | 末尾返回 ` new Result(List.copyOf(inputs), counts, missing) `<br>[调用处 StorageRecipeHandler.plan](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/emi/StorageRecipeHandler.java#L189) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L29) |
| ` public static @Nullable FluidContainer container(ItemStack wanted) ` | ` (fluid.isEmpty()) ` 成立时提前返回 ` null `<br>` (handler == null) ` 成立时提前返回 ` null `<br>[调用处 TerminalJeiTransferPlan.addFilledContainers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/transfer/TerminalJeiTransferPlan.java#L151) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L75) |

## StorageRecipeTransferPlan.FluidContainer

` public record FluidContainer(ItemResource empty, FluidResource fluid, int amount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L72)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidContainer(ItemResource empty, FluidResource fluid, int amount) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L72) |
| ` public ItemResource empty() ` | 读取 record 分量 ` empty ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L72) |
| ` public FluidResource fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L72) |
| ` public int amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L72) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L72) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L72) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L72) |

## StorageRecipeTransferPlan.Result

` public record Result(List<ItemStack> inputs, IntList counts, IntList missing) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Result(List<ItemStack> inputs, IntList counts, IntList missing) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L26) |
| ` public List<ItemStack> inputs() ` | 读取 record 分量 ` inputs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L26) |
| ` public IntList counts() ` | 读取 record 分量 ` counts ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L26) |
| ` public IntList missing() ` | 读取 record 分量 ` missing ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L26) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L26) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L26) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/StorageRecipeTransferPlan.java#L26) |

## TerminalItemInventory

` public interface TerminalItemInventory extends ResourceHandler<ItemResource> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/TerminalItemInventory.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ItemStack getStackInSlot(int slot) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/TerminalItemInventory.java#L8) |
| ` void setStackInSlot(int slot, ItemStack stack) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/TerminalItemInventory.java#L10) |
