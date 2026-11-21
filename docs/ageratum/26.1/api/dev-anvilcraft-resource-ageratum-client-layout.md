# dev.anvilcraft.resource.ageratum.client.layout



## DirectorySide

` public enum DirectorySide implements TranslatableEnum `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/DirectorySide.java#L6)

Player preference for the panel containing document navigation.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` LEFT ` | 声明于枚举 ` DirectorySide ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/DirectorySide.java#L7) |
| ` RIGHT ` | 声明于枚举 ` DirectorySide ` | [枚举值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/DirectorySide.java#L8) |
| ` public String edge() ` | 末尾返回 ` this.name().toLowerCase(java.util.Locale.ROOT) `<br>[调用处 DirectorySide.getTranslationKey](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/DirectorySide.java#L13) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/DirectorySide.java#L10) |
| ` @Override public String getTranslationKey() ` | 末尾返回 ` "ageratum.configuration.directory_side." + this.edge() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/DirectorySide.java#L12) |
| ` public static DirectorySide[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/DirectorySide.java#L6) |
| ` public static DirectorySide valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/DirectorySide.java#L6) |

## GuideLayout

` public final class GuideLayout `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L15)

Immutable resolved layout. Sizes are in the guide's logical coordinate system.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GuideLayout(Identifier id, JsonObject data) ` | 实现调用 ` data.deepCopy() `<br>[调用处 GuideLayoutManager.defaults](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L43) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L23) |
| ` public Identifier id() ` | 末尾返回 ` this.id ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L28) |
| ` public JsonObject json() ` | 末尾返回 ` this.data.deepCopy() `<br>[调用处 GuideLayout.withDirectorySide](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L44) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L29) |
| ` public GuideLayout withDirectorySide(DirectorySide side) ` | Apply the player's choice after inheritance/variant selection without mutating cached layouts.<br>` (panels == null \|\| !panels.isJsonObject()) ` 成立时提前返回 ` this `<br>末尾返回 ` adjusted == null ? this : new GuideLayout(this.id, adjusted) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L32) |
| ` public JsonElement value(String path) ` | 末尾返回 ` current `<br>[调用处 GuideLayout.string](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L60) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L50) |
| ` public String string(String path, String fallback) ` | 末尾返回 ` value != null && value.isJsonPrimitive() ? value.getAsString() : fallback `<br>[调用处 GuideLayout.color](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L90) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L59) |
| ` public boolean bool(String path, boolean fallback) ` | 末尾返回 ` value != null && value.isJsonPrimitive() && value.getAsJsonPrimitive().isBoolean() ? value.getAsBoolean() : fallback ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L64) |
| ` public double number(String path, double fallback) ` | 实现调用 ` this.value(path) `<br>实现调用 ` value.getAsDouble() `<br>实现调用 ` Double.isFinite(result) `<br>[调用处 GuideLayout.integer](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L79) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L70) |
| ` public int integer(String path, int fallback) ` | 末尾返回 ` (int) Math.clamp(this.number(path, fallback), 0, 32768) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L78) |
| ` public List<String> strings(String path, List<String> fallback) ` | ` (value == null \|\| !value.isJsonArray()) ` 成立时提前返回 ` fallback `<br>末尾返回 ` value.getAsJsonArray().asList().stream().filter(JsonElement::isJsonPrimitive) .map(JsonElement::getAsString).distinct().toList() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L82) |
| ` public int color(String path, int fallback) ` | 实现调用 ` parseColor(this.string(path, "")) `<br>实现调用 ` this.string(path, "") `<br>[调用处 GuideLayout.resolveStyle](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L167) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L89) |
| ` public static int parseColor(String value) ` | ` (value.matches("#[0-9a-fA-F]{6}")) ` 成立时提前返回 ` (int) Long.parseLong(value.substring(1), 16) \| 0xFF000000 `<br>` (value.matches("#[0-9a-fA-F]{8}")) ` 成立时提前返回 ` (int) Long.parseLong(value.substring(1), 16) `<br>` (formatting != null && formatting.getColor() != null) ` 成立时提前返回 ` formatting.getColor() \| 0xFF000000 `<br>[调用处 GuideLayoutManager.validate](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L164) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L94) |
| ` public LayoutTexture texture(String path, LayoutTexture fallback) ` | [调用处 GuideLayout.controlTexture](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L112) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L102) |
| ` public LayoutTexture controlTexture(String name) ` | 实现调用 ` name.startsWith("label_") `<br>实现调用 ` name.equals("button_return") `<br>实现调用 ` Identifier.parse("ageratum:textures/gui/guide/light/" + resource + ".png") ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L109) |
| ` public LayoutTexture componentTexture(Identifier key, LayoutTexture fallback) ` | Namespaced component keys are dictionary keys, including namespaces containing dots.<br>` (components == null \|\| !components.isJsonObject()) ` 成立时提前返回 ` fallback `<br>` (value == null) ` 成立时提前返回 ` fallback `<br>末尾返回 ` this.textures.computeIfAbsent(new TextureKey("component:" + key, fallback), ignored -> LayoutTexture.parse(selected, fallback)) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L118) |
| ` public int componentColor(Identifier component, String name, int fallback) ` | ` (components == null \|\| !components.isJsonObject()) ` 成立时提前返回 ` fallback `<br>` (value == null \|\| !value.isJsonObject()) ` 成立时提前返回 ` fallback ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L129) |
| ` public FormattedText text(FormattedText text) ` | 返回 ` FormattedText ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L140) |
| ` public FormattedCharSequence text(FormattedCharSequence sequence) ` | 末尾返回 ` sink -> sequence.accept((index, style, codePoint) -> sink.accept(index, this.style(style), codePoint)) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L151) |
| ` public boolean bookTabs() ` | Legacy geometry is retained for the original book-tab arrangement.<br>` (!this.string("screen.mode", "centered").equals("centered")) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L180) |

## GuideLayoutManager

` public final class GuideLayoutManager `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L28)

Resource reload owns the snapshot; opening a screen only resolves document metadata.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier LIGHT ` | 初值 ` Identifier.parse("ageratum:light") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L29) |
| ` public static final Identifier DARK ` | 初值 ` Identifier.parse("ageratum:dark") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L30) |
| ` public static void warnInvalid(String message) ` | 执行 ` warn(message) `<br>[调用处 LayoutGeometry.compute](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L52) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L40) |
| ` public static long generation() ` | 末尾返回 ` generation `<br>[调用处 GuideScreen.resolveLayout](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L256) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L42) |
| ` public static GuideLayout defaults() ` | 末尾返回 ` new GuideLayout(LIGHT, LayoutDefaults.light()) `<br>[调用处 MDRenderContext.构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDRenderContext.java#L48) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L43) |
| ` public static PreparableReloadListener reloadListener() ` | 返回 ` PreparableReloadListener ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L45) |
| ` public static GuideLayout forDocument(MDDocument document, ResourceManager resources, boolean dark) ` | 末尾返回 ` resolver.select(selected == null ? LIGHT : selected, dark) `<br>[调用处 GuideScreen.resolveLayout](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L254) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L178) |
| ` public static Identifier relativeId(String value, String namespace) ` | 末尾返回 ` value.contains(":") ? Identifier.parse(value) : Identifier.fromNamespaceAndPath(namespace, value) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L229) |
| ` public static JsonObject merge(JsonObject parent, JsonObject patch) ` | 末尾返回 ` merge(parent, patch, true) `<br>[调用处 LayoutDefaults.dark](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java#L40) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L306) |

## GuideLayoutManager.Resolver

` public static final class Resolver `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L234)

Also used by the resolver regression tests without any client or resource manager.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Resolver(Map<Identifier, JsonObject> files, Consumer<String> warning) ` | 实现调用 ` files.forEach((id, object) -> this.files.put(id, object.deepCopy())) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L239) |
| ` public boolean exists(Identifier id) ` | 末尾返回 ` id.equals(LIGHT) \|\| id.equals(DARK) \|\| this.files.containsKey(id) `<br>[调用处 GuideLayoutManager.Resolver.select](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L295) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L245) |
| ` public GuideLayout resolve(Identifier id) ` | 末尾返回 ` this.resolve(id, new LinkedHashSet<>()) `<br>[调用处 GuideLayoutManager.Resolver.select](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L279) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L246) |
| ` public GuideLayout select(Identifier id, boolean dark) ` | ` (!dark) ` 成立时提前返回 ` result `<br>末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L278) |

## LayoutDefaults

` public final class LayoutDefaults `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java#L7)

Hard fallback, independent of resource packs (including a broken light.json).

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static JsonObject light() ` | 末尾返回 ` layout `<br>[调用处 GuideLayout.bookTabs](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L182) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java#L10) |
| ` public static JsonObject dark() ` | 末尾返回 ` layout `<br>[调用处 GuideLayoutManager.Resolver.resolve](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java#L258) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java#L39) |

## LayoutGeometry

` public record LayoutGeometry(Rect contentBackground, Rect content, Map<String, Rect> panels, Map<String, Rect> sections) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L14)

One geometry snapshot shared by rendering, scissoring and input. No Minecraft dependencies.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Rect section(String name) ` | 末尾返回 ` this.sections.getOrDefault(name, Rect.EMPTY) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L28) |
| ` public static LayoutGeometry compute(GuideLayout layout, int width, int height, ToIntBiFunction<String, Integer> naturalHeight) ` | 末尾返回 ` new LayoutGeometry(background, content, java.util.Collections.unmodifiableMap(panels), Map.copyOf(sections)) `<br>[调用处 GuideScreen.calculateLayoutGeometry](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L263) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L30) |
| ` public LayoutGeometry(Rect contentBackground, Rect content, Map<String, Rect> panels, Map<String, Rect> sections) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L14) |
| ` public Rect contentBackground() ` | 读取 record 分量 ` contentBackground ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L14) |
| ` public Rect content() ` | 读取 record 分量 ` content ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L14) |
| ` public Map<String, Rect> panels() ` | 读取 record 分量 ` panels ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L14) |
| ` public Map<String, Rect> sections() ` | 读取 record 分量 ` sections ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L14) |

## LayoutGeometry.Rect

` public record Rect(int x, int y, int width, int height) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Rect EMPTY ` | 初值 ` new Rect(0, 0, 0, 0) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L16) |
| ` public int right() ` | 末尾返回 ` this.x + this.width `<br>[调用处 LayoutGeometry.Rect.contains](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L20) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L17) |
| ` public int bottom() ` | 末尾返回 ` this.y + this.height `<br>[调用处 LayoutGeometry.Rect.contains](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L20) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L18) |
| ` public boolean contains(double x, double y) ` | 末尾返回 ` x >= this.x && y >= this.y && x < this.right() && y < this.bottom() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L19) |
| ` public Rect inset(int left, int top, int right, int bottom) ` | 末尾返回 ` new Rect(this.x + left, this.y + top, Math.max(0, this.width - left - right), Math.max(0, this.height - top - bottom)) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L22) |
| ` public Rect(int x, int y, int width, int height) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L15) |
| ` public int x() ` | 读取 record 分量 ` x ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L15) |
| ` public int y() ` | 读取 record 分量 ` y ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L15) |
| ` public int width() ` | 读取 record 分量 ` width ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L15) |
| ` public int height() ` | 读取 record 分量 ` height ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutGeometry.java#L15) |

## LayoutMarquee

` public final class LayoutMarquee `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutMarquee.java#L7)

Shared title clipping/animation for book tabs, panel trees and bookmarks.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void draw(GuiGraphicsExtractor graphics, GuideLayout layout, String section, String identity, String title, int x, int y, int width, int color, boolean hovered) ` | 实现调用 ` GuideFont.get() `<br>实现调用 ` font.width(title) `<br>实现调用 ` layout.bool(section + ".marquee.enabled", true) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutMarquee.java#L11) |
| ` public LayoutMarquee() ` | Java 提供的无参构造器。<br>[调用处 GuideScreen](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L242) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutMarquee.java#L7) |

## LayoutResourceProvider

` public interface LayoutResourceProvider `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutResourceProvider.java#L7)

Optional resource declarations on component factories. Existing lambda factories remain compatible.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default Map<Identifier, LayoutTexture> layoutTextures() ` | 末尾返回 ` Map.of() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutResourceProvider.java#L8) |
| ` default Map<Identifier, Map<String, Integer>> layoutColors() ` | Component key -&gt; semantic color name -&gt; default ARGB value.<br>末尾返回 ` Map.of() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutResourceProvider.java#L10) |

## LayoutScrollbar

` public final class LayoutScrollbar `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L6)

Shared scrollbar geometry and pointer capture, in guide logical coordinates.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int contentWidth(int viewportWidth, int width, int hitWidth) ` | 留出完整命中区域及间距，正文和结构边框不再延伸到滚动条下方。<br>末尾返回 ` Math.max(1, viewportWidth - reserved) `<br>[调用处 GuideScreen.getContentWidth](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L2803) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L16) |
| ` public void update(Rect viewport, int width, int hitWidth, int minimumThumb, double maximum, double position) ` | 实现调用 ` this.geometry(viewport, width, hitWidth, maximum, position) `<br>实现调用 ` viewport.height() `<br>实现调用 ` Math.max(1, minimumThumb) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L21) |
| ` public void updateSlider(Rect viewport, int width, int hitWidth, int thumbHeight, double maximum, double position) ` | Fixed-size thumb for value sliders, sharing pointer capture with document scrollbars.<br>实现调用 ` this.geometry(viewport, width, hitWidth, maximum, position) `<br>实现调用 ` Math.min(viewport.height(), Math.max(1, thumbHeight)) `<br>实现调用 ` viewport.height() ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L29) |
| ` public Rect track() ` | 末尾返回 ` this.track ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L50) |
| ` public Rect thumb() ` | 末尾返回 ` new Rect(this.track.x(), this.track.y() + offset, this.track.width(), this.thumbHeight) `<br>[调用处 LayoutScrollbar.press](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L65) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L51) |
| ` public boolean scrollable() ` | 末尾返回 ` this.maximum > 0 && this.track.width() > 0 && this.travel() > 0 `<br>[调用处 LayoutScrollbar.clampThumb](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L47) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L56) |
| ` public boolean contains(double x, double y) ` | 末尾返回 ` this.scrollable() && this.hitbox.contains(x, y) `<br>[调用处 LayoutScrollbar.press](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L64) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L57) |
| ` public boolean dragging() ` | 末尾返回 ` this.dragging ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L58) |
| ` public double position() ` | 末尾返回 ` this.position ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L59) |
| ` public void cancel() ` | 执行 ` this.dragging = false `<br>[调用处 LayoutScrollbar.clampThumb](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L47) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L60) |
| ` public boolean press(double x, double y) ` | A hidden bar still accepts a first touch; grabbing the thumb never jumps.<br>` (!this.contains(x, y)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L63) |
| ` public double drag(double y) ` | 末尾返回 ` this.position `<br>[调用处 LayoutScrollbar.press](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L69) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L73) |
| ` public float opacity(double x, double y, double fadeDistance, boolean autoHide) ` | ` (!this.scrollable()) ` 成立时提前返回 ` 0 `<br>` (this.dragging \|\| !autoHide) ` 成立时提前返回 ` 1 `<br>` (fadeDistance <= 0) ` 成立时提前返回 ` distance == 0 ? 1 : 0 `<br>末尾返回 ` (float) (proximity * proximity * (3 - 2 * proximity)) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L80) |
| ` public LayoutScrollbar() ` | Java 提供的无参构造器。<br>[调用处 GuideScreen](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L158) | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutScrollbar.java#L6) |

## LayoutTexture

` public record LayoutTexture(Identifier location, int width, int height, int atlasWidth, int atlasHeight, int left, int top, int right, int bottom, int tint) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10)

Source frame dimensions are independent from destination bounds and atlas dimensions.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static LayoutTexture of(Identifier location, int width, int height, int atlasWidth, int atlasHeight) ` | 末尾返回 ` new LayoutTexture(location, width, height, atlasWidth, atlasHeight, 0, 0, 0, 0, -1) `<br>[调用处 GuideScreen.extractBackgroundRenderState](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L1024) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L12) |
| ` public static LayoutTexture parse(JsonElement element, LayoutTexture fallback) ` | 实现调用 ` element.isJsonPrimitive() `<br>分支 ` (element.isJsonPrimitive()) ` 内调用 ` object.add("location", element) `<br>分支 ` !(element.isJsonPrimitive()) ` 内调用 ` element.getAsJsonObject() `<br>[调用处 GuideLayout.texture](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayout.java#L105) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L16) |
| ` public void draw(GuiGraphicsExtractor graphics, int x, int y, int targetWidth, int targetHeight, boolean hover) ` | 执行 ` this.draw(graphics, x, y, targetWidth, targetHeight, hover, 1.0f) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L44) |
| ` public void draw(GuiGraphicsExtractor graphics, int x, int y, int targetWidth, int targetHeight, boolean hover, float opacity) ` | 实现调用 ` withOpacity(this.tint, opacity) `<br>实现调用 ` Math.min(this.left, this.width / 2) `<br>实现调用 ` Math.min(this.right, this.width - l) `<br>[调用处 LayoutTexture.draw](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L45) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L48) |
| ` public static int withOpacity(int tint, float opacity) ` | 末尾返回 ` (tint & 0x00FFFFFF) \| (Math.round((tint >>> 24) * Math.clamp(opacity, 0, 1)) << 24) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L73) |
| ` public LayoutTexture(Identifier location, int width, int height, int atlasWidth, int atlasHeight, int left, int top, int right, int bottom, int tint) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10) |
| ` public Identifier location() ` | 读取 record 分量 ` location ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10) |
| ` public int width() ` | 读取 record 分量 ` width ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10) |
| ` public int height() ` | 读取 record 分量 ` height ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10) |
| ` public int atlasWidth() ` | 读取 record 分量 ` atlasWidth ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10) |
| ` public int atlasHeight() ` | 读取 record 分量 ` atlasHeight ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10) |
| ` public int left() ` | 读取 record 分量 ` left ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L11) |
| ` public int top() ` | 读取 record 分量 ` top ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L11) |
| ` public int right() ` | 读取 record 分量 ` right ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L11) |
| ` public int bottom() ` | 读取 record 分量 ` bottom ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L11) |
| ` public int tint() ` | 读取 record 分量 ` tint ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutTexture.java#L10) |
