# dev.dubhe.anvilcraft.integration



## AcceleratedRenderingCompat

` public final class AcceleratedRenderingCompat `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/AcceleratedRenderingCompat.java#L11)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void enqueueIMC(InterModEnqueueEvent event) ` | 事件总线派发 ` InterModEnqueueEvent ` 时调用。<br>执行 ` InterModComms.sendTo("acceleratedrendering", "block_entity_type_blacklist", ModBlockEntities.CELESTIAL_FORGING_ANVIL::get) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/AcceleratedRenderingCompat.java#L16) |

## IntegrationUtil

` public class IntegrationUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Root root ` | 初值 ` Root.EMPTY ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L24) |
| ` public static Root load() ` | ` (root != Root.EMPTY) ` 成立时提前返回 ` root `<br>末尾返回 ` Root.EMPTY `<br>[调用处 IntegrationScreen.IntegrationList.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L355) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L26) |
| ` public static void openIntegrationScreen() ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.setScreen(new IntegrationScreen(minecraft.screen)) `<br>[调用处 GuideBookItem.onThought](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GuideBookItem.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L216) |
| ` public IntegrationUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L23) |

## IntegrationUtil.Additional

` public static class Additional `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L114)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Additional> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L115) |
| ` public Additional(String id, Component name, Component description, Links links) ` | 实现调用 ` description.toString().isBlank() `<br>实现调用 ` description.toString() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L127) |
| ` public String id() ` | 末尾返回 ` this.id `<br>[调用处 IntegrationUtil.Additional.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L156) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L134) |
| ` public Component name() ` | 末尾返回 ` this.name `<br>[调用处 IntegrationUtil.Additional.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L157) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L138) |
| ` @Nullable public Component description() ` | 末尾返回 ` this.description `<br>[调用处 IntegrationUtil.Additional.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L158) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L142) |
| ` public Links links() ` | 末尾返回 ` this.links `<br>[调用处 IntegrationUtil.Additional.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L147) |
| ` @Override public boolean equals(@Nullable Object obj) ` | ` (obj == this) ` 成立时提前返回 ` true `<br>` (obj == null \|\| obj.getClass() != this.getClass()) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L151) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hash(this.id(), this.name(), this.description(), this.links()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L162) |
| ` @Override public String toString() ` | 末尾返回 ` "Additional[id=%s, name=%s, description=%s, links=%s]".formatted( this.id(), this.name(), this.description(), this.links() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L167) |

## IntegrationUtil.Integration

` public static final class Integration extends Additional `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L70)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Integration> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L71) |
| ` public Integration(String id, IntegrationType type, Component name, Component description, Links links) ` | 实现调用 ` super(id, name, description, links) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L80) |
| ` public IntegrationType type() ` | 末尾返回 ` this.type `<br>[调用处 IntegrationUtil.Integration.equals](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L85) |
| ` @Override public boolean equals(@Nullable Object obj) ` | ` (obj == this) ` 成立时提前返回 ` true `<br>` (obj == null \|\| obj.getClass() != this.getClass()) ` 成立时提前返回 ` false `<br>末尾返回 ` super.equals(that) && Objects.equals(this.type(), that.type()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L89) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hash(this.id(), this.type(), this.name(), this.description(), this.links()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L97) |
| ` @Override public String toString() ` | 末尾返回 ` "Integration[id=%s, type=%s, name=%s, description=%s, links=%s]".formatted( this.id(), this.type(), this.name(), this.description(), this.links() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L102) |

## IntegrationUtil.IntegrationType

` public enum IntegrationType `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L202)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` EXTRA ` | 声明于枚举 ` IntegrationUtil.IntegrationType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L203) |
| ` BUILTIN ` | 声明于枚举 ` IntegrationUtil.IntegrationType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L203) |
| ` public static final MapCodec<IntegrationType> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L205) |
| ` public static IntegrationType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L202) |
| ` public static IntegrationType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L202) |

## IntegrationUtil.Integrations

` public record Integrations(List<Integration> guide, List<Integration> recipeQuery, List<Integration> infoHud, List<Integration> modify, List<Integration> interaction, List<Integration> compatible) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Integrations EMPTY ` | 初值 ` new Integrations(List.of(), List.of(), List.of(), List.of(), List.of(), List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L59) |
| ` public static final MapCodec<Integrations> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L60) |
| ` public Integrations(List<Integration> guide, List<Integration> recipeQuery, List<Integration> infoHud, List<Integration> modify, List<Integration> interaction, List<Integration> compatible) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51) |
| ` public List<Integration> guide() ` | 读取 record 分量 ` guide ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L52) |
| ` public List<Integration> recipeQuery() ` | 读取 record 分量 ` recipeQuery ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L53) |
| ` public List<Integration> infoHud() ` | 读取 record 分量 ` infoHud ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L54) |
| ` public List<Integration> modify() ` | 读取 record 分量 ` modify ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L55) |
| ` public List<Integration> interaction() ` | 读取 record 分量 ` interaction ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L56) |
| ` public List<Integration> compatible() ` | 读取 record 分量 ` compatible ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L57) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L51) |

## IntegrationUtil.Link

` public record Link(String type, String url) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Link> MAP_CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(instance -> instance.group( Codec.STRING.fieldOf("type") .forGetter(Link::type), Codec.STRING.fieldOf("url") .forGetter(Link::url) ) .apply(instance, Link::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L193) |
| ` public Link(String type, String url) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public String type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public String url() ` | 读取 record 分量 ` url ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L192) |

## IntegrationUtil.Links

` public record Links(List<Link> target, List<Link> extra) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Links> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L180) |
| ` public Links(List<Link> target, List<Link> extra) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public List<Link> target() ` | 读取 record 分量 ` target ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public List<Link> extra() ` | 读取 record 分量 ` extra ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L179) |

## IntegrationUtil.LoadStatus

` public enum LoadStatus `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L210)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` LOADED ` | 声明于枚举 ` IntegrationUtil.LoadStatus ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L211) |
| ` NOT_LOADED ` | 声明于枚举 ` IntegrationUtil.LoadStatus ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L212) |
| ` NOT_FOUND ` | 声明于枚举 ` IntegrationUtil.LoadStatus ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L213) |
| ` public static LoadStatus[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L210) |
| ` public static LoadStatus valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L210) |

## IntegrationUtil.Root

` public record Root(Integrations integration, List<Additional> additional) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Root EMPTY ` | 初值 ` new Root(Integrations.EMPTY, List.of()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L43) |
| ` public static final MapCodec<Root> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L44) |
| ` public static final Codec<Root> CODEC ` | 初值 ` MAP_CODEC.codec() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L48) |
| ` public Root(Integrations integration, List<Additional> additional) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public Integrations integration() ` | 读取 record 分量 ` integration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public List<Additional> additional() ` | 读取 record 分量 ` additional ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/IntegrationUtil.java#L42) |
