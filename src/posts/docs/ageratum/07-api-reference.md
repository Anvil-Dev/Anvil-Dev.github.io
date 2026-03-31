---
prev:
  text: 配方组件开发
  link: /posts/docs/ageratum/06-recipe-components
next:
  text: 架构设计
  link: /posts/docs/ageratum/08-architecture
---

# API 参考

本文档基于 `reference/Ageratum` 当前源码整理，覆盖 Ageratum 对外可用的核心 API 与扩展点。

---

## 1. 核心入口

### `Ageratum`

```java
package dev.anvilcraft.resource.ageratum;

public class Ageratum {
    public static final String MOD_ID = "ageratum";

    public static ResourceLocation location(String path);

    public static void openGuide(ServerPlayer player, ResourceLocation location);
}
```

要点：

- `location(path)` 用于快速构造 `ageratum:path`。
- `openGuide(player, location)` 是服务端入口，会通过网络发包让客户端打开文档。

---

## 2. 客户端入口与文档打开流程

### `AgeratumClient`

```java
package dev.anvilcraft.resource.ageratum.client;

public class AgeratumClient {
    public static final String PREVIEW_NAMESPACE = "ageratum_review";
    public static final AgeratumClientConfig CONFIG;

    public static String getClientLanguageCode(Minecraft minecraft);

    public static int openGuide(
        CommandContext<CommandSourceStack> context,
        String namespace,
        @Nullable String fileArgument,
        @Nullable String anchor
    );

    public static boolean openGuideOnClient(ResourceLocation location, List<ResourceLocation> breadCrumbs);

    public static boolean openGuideOnClient(
        ResourceLocation location,
        @Nullable String anchor,
        List<ResourceLocation> breadCrumbs
    );

    public static boolean isPreviewLocation(ResourceLocation location);
    public static ResourceLocation toPreviewLocation(@Nullable String fileArgument);
    public static Path getPreviewRootPath();
    public static Path resolvePreviewDocumentPath(ResourceLocation location);
    public static Path resolvePreviewAssetPath(String relativePath);
}
```

要点：

- `openGuide(...)` 会执行“当前语言 -> `en_us`”的文档回退查找。
- `openGuideOnClient(...)` 会优先读取 `GuideDocumentCache`，未命中时即时解析。
- 预览模式使用独立命名空间 `ageratum_review`，路径来自 `AgeratumClientConfig.previewPath`。

---

## 3. 网络层 API

### `AgeratumNetwork`

```java
package dev.anvilcraft.resource.ageratum.network;

public final class AgeratumNetwork {
    public static final String NETWORK_VERSION = "1";

    public static void register(RegisterPayloadHandlersEvent event);
    public static void sendOpenGuide(ServerPlayer serverPlayer, ResourceLocation location);
}
```

注册内容：

- `playToClient`: `OpenGuidePayload` -> `ClientPayloadHandler::handleOpenGuide`
- `playToServer`: `ShareGuidePayload` -> `ServerPayloadHandler::handleShareGuide`

### `OpenGuidePayload`

```java
public record OpenGuidePayload(ResourceLocation location) implements CustomPacketPayload {
    public static final Type<OpenGuidePayload> TYPE;              // ageratum:open_guide
    public static final StreamCodec<RegistryFriendlyByteBuf, OpenGuidePayload> STREAM_CODEC;
}
```

### `ShareGuidePayload`

```java
public record ShareGuidePayload(
    ResourceLocation location,
    String anchor,
    boolean sameTeam
) implements CustomPacketPayload {
    public static final Type<ShareGuidePayload> TYPE;             // ageratum:share_guide
    public static final StreamCodec<RegistryFriendlyByteBuf, ShareGuidePayload> STREAM_CODEC;
}
```

---

## 4. 注册表（扩展点核心）

### `AgeratumRegistries`

```java
package dev.anvilcraft.resource.ageratum.client.registries;

public final class AgeratumRegistries {
    // block extension
    public static final ResourceKey<Registry<MDExtensionComponentFactory>>
        EXTENSION_COMPONENT_FACTORY_REGISTRY_KEY;
    public static final DeferredRegister<MDExtensionComponentFactory>
        EXTENSION_COMPONENT_FACTORIES;
    public static final Registry<MDExtensionComponentFactory>
        EXTENSION_COMPONENT_FACTORY_REGISTRY;

    // inline component
    public static final ResourceKey<Registry<MDInlineComponentFactory>>
        INLINE_COMPONENT_FACTORY_REGISTRY_KEY;
    public static final DeferredRegister<MDInlineComponentFactory>
        INLINE_COMPONENT_FACTORIES;
    public static final Registry<MDInlineComponentFactory>
        INLINE_COMPONENT_FACTORY_REGISTRY;

    // inline style
    public static final ResourceKey<Registry<MDInlineStyleParser>>
        INLINE_STYLE_PARSER_REGISTRY_KEY;
    public static final DeferredRegister<MDInlineStyleParser>
        INLINE_STYLE_PARSERS;
    public static final Registry<MDInlineStyleParser>
        INLINE_STYLE_PARSER_REGISTRY;

    // recipe component
    public static final ResourceKey<Registry<MDRecipeComponent.RecipeComponentFactory<?>>>
        RECIPE_COMPONENT_FACTORY_REGISTRY_KEY;
    public static final DeferredRegister<MDRecipeComponent.RecipeComponentFactory<?>>
        RECIPE_COMPONENT_FACTORIES;
    public static final Registry<MDRecipeComponent.RecipeComponentFactory<?>>
        RECIPE_COMPONENT_FACTORY_REGISTRY;

    public static void register(IEventBus modEventBus);
}
```

外部模组建议：

- 使用 `DeferredRegister.create(<REGISTRY_KEY>, "your_modid")` 注册。
- 在**客户端**模组入口绑定到 `modEventBus`。

---

## 5. 文档定位与缓存

### `GuideDocumentLoader`

```java
package dev.anvilcraft.resource.ageratum.client.feat.markdown;

public final class GuideDocumentLoader {
    public static final String DEFAULT_LANGUAGE_CODE = "en_us";

    public static ResourceLocation toDocumentLocation(String namespace, String fileArgument);

    public static ResourceLocation toDocumentLocation(
        String namespace,
        String languageCode,
        @Nullable String fileArgument
    );

    public static Optional<ResourceLocation> resolveExistingLocation(
        ResourceManager resourceManager,
        String namespace,
        String languageCode,
        @Nullable String fileArgument
    );

    public static boolean exists(ResourceManager resourceManager, ResourceLocation location);
    public static String read(ResourceManager resourceManager, ResourceLocation location);

    public static List<String> listNamespaces(ResourceManager resourceManager, String languageCode);
    public static List<String> listFiles(ResourceManager resourceManager, String namespace, String languageCode);
}
```

### `GuideDocumentCache`

```java
package dev.anvilcraft.resource.ageratum.client.feat.markdown;

public final class GuideDocumentCache {
    public static PreparableReloadListener reloadListener();

    public static Optional<MDDocument> getParsedDocument(ResourceLocation location);
    public static Optional<List<MDComponent>> getParsedComponents(ResourceLocation location);

    public static Optional<NavigationTree> getNavigationTree(String namespace, String languageCode);

    public record NavigationTree(
        List<NavigationDocument> rootDocuments,
        List<NavigationDirectory> rootDirectories
    ) {}

    public record NavigationDirectory(
        String namespace,
        String name,
        @Nullable NavigationDocument indexDocument,
        List<NavigationDocument> documents,
        List<NavigationDirectory> children
    ) {}

    public record NavigationDocument(String fileArgument, String title, ResourceLocation location) {}
}
```

---

## 6. Markdown 解析模型

### `MarkdownParser`

```java
public class MarkdownParser {
    public MarkdownParser();

    public void registerComponentParser(int priority, MDComponentParser parser);

    public List<MDComponent> parse(ResourceLocation sourceLocation, String markdown);

    public MDDocument parseDocument(ResourceLocation sourceLocation, String markdown);
}
```

### `MDDocument`

```java
public record MDDocument(
    @Nullable ResourceLocation sourceLocation,
    Map<String, Object> frontMatter,
    List<MDComponent> components
) {
    public String getTitle(String fileName);
    public String getTitle();
    public Optional<String> getSourceFileName();
}
```

---

## 7. 扩展接口

### 块级扩展

#### `MDExtensionComponentFactory`

```java
@FunctionalInterface
public interface MDExtensionComponentFactory {
    MDComponent create(MDExtensionContext context);
}
```

#### `MDExtensionContext`

```java
public record MDExtensionContext(
    ResourceLocation sourceLocation,
    ResourceLocation id,
    String rawParams,
    Map<String, String> params,
    List<MDComponent> renderedContent,
    String rawContent
) {}
```

### 行内组件

#### `MDInlineComponentFactory`

```java
@FunctionalInterface
public interface MDInlineComponentFactory {
    FormattedText create(MDInlineComponentContext context);
}
```

#### `MDInlineComponentContext`

```java
public record MDInlineComponentContext(
    ResourceLocation id,
    String rawParams,
    Map<String, String> params,
    Style baseStyle
) {}
```

### 行内样式

#### `MDInlineStyleParser`

```java
public interface MDInlineStyleParser {
    int priority();

    @Nullable
    MDComponent.InlineStyleMatch parse(String text, int pos);

    static MDInlineStyleParser create(
        int priority,
        Pattern openTagPattern,
        String closeTag,
        BiFunction<Style, Matcher, Style> styleFactory
    );
}
```

### 配方组件工厂

#### `MDRecipeComponent.RecipeComponentFactory<T>`

```java
public interface RecipeComponentFactory<T extends Recipe<?>> {
    List<RecipeType<? extends T>> type();

    MDRecipeComponent create(T recipe, boolean enableAlignCenter);

    static <R extends Recipe<?>> RecipeComponentFactory<R> create(
        RecipeType<R> type,
        BiFunction<R, Boolean, MDRecipeComponent> function
    );

    @SafeVarargs
    static <R extends Recipe<?>> RecipeComponentFactory<R> create(
        BiFunction<R, Boolean, MDRecipeComponent> function,
        RecipeType<? extends R>... types
    );
}
```

---

## 8. 内置注册项（常用）

### `BuiltinExtensionComponents`

内置块级扩展：

- `ageratum:info`
- `ageratum:tip`
- `ageratum:warning`
- `ageratum:danger`
- `ageratum:recipe`
- `ageratum:structure`
- `ageratum:item`

### `BuiltinInlineStyleParsers`

内置行内样式标签：

- `<color=#RRGGBB>...</color>`
- `<o>...</o>`
- `<hover ...>...</hover>`
- `<click ...>...</click>`

### `BuiltinInlineComponents`

内置行内组件：

- `<translate key="..." fallback="..."/>`

### `BuiltinRecipeComponentFactories`

内置配方类型工厂：

- `crafting`
- `smithing`
- `stonecutter`
- `furnace`（同时覆盖 smelting / smoking / blasting / campfire_cooking）

---

## 9. 客户端配置对象

### `AgeratumClientConfig`

```java
public class AgeratumClientConfig {
    public boolean breadCrumbsHasLabel = false;
    public boolean showCodeBlockLineNumbers = true;
    public boolean allowCodeBlockLineContentLineBreaks = true;

    public boolean enablePreview = false;
    public String previewPath = "ageratum_preview";

    public boolean shareGuideOnlyInTeam = false;
}
```

---

## 10. 常量速查

| 常量 | 值 | 位置 |
|---|---|---|
| `Ageratum.MOD_ID` | `"ageratum"` | `Ageratum` |
| `GuideDocumentLoader.DEFAULT_LANGUAGE_CODE` | `"en_us"` | `GuideDocumentLoader` |
| `AgeratumNetwork.NETWORK_VERSION` | `"1"` | `AgeratumNetwork` |
| `AgeratumClient.PREVIEW_NAMESPACE` | `"ageratum_review"` | `AgeratumClient` |

---

## 参见

- [扩展组件开发](04-extension-components.md)
- [行内样式解析器开发](05-inline-style-parsers.md)
- [架构设计](08-architecture.md)
- [预览与分享](10-preview-and-sharing.md)
