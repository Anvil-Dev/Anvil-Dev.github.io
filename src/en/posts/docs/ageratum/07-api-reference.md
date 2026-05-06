---
prev:
  text: Recipe Components
  link: /en/posts/docs/ageratum/06-recipe-components
next:
  text: Architecture
  link: /en/posts/docs/ageratum/08-architecture
---

# API Reference

This page is aligned with the current source under `reference/Ageratum` and covers the main public APIs and extension points.

---

## 1. Core Entry

### `Ageratum`

```java
package dev.anvilcraft.resource.ageratum;

public class Ageratum {
    public static final String MOD_ID = "ageratum";

    public static ResourceLocation location(String path);

    public static void openGuide(ServerPlayer player, ResourceLocation location);
}
```

Notes:

- `location(path)` builds a `ResourceLocation` in the `ageratum` namespace.
- `openGuide(player, location)` is the server-side entry for opening guides on clients.

---

## 2. Client Entry and Guide Opening

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

Notes:

- `openGuide(...)` resolves documents with language fallback (`current language -> en_us`).
- `openGuideOnClient(...)` uses `GuideDocumentCache` first, then falls back to immediate parsing.
- Preview documents use `ageratum_review` and paths under `AgeratumClientConfig.previewPath`.

---

## 3. Networking API

### `AgeratumNetwork`

```java
package dev.anvilcraft.resource.ageratum.network;

public final class AgeratumNetwork {
    public static final String NETWORK_VERSION = "1";

    public static void register(RegisterPayloadHandlersEvent event);
    public static void sendOpenGuide(ServerPlayer serverPlayer, ResourceLocation location);
}
```

Registered handlers:

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

## 4. Registries (Extension Core)

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

For external mods:

- Use `DeferredRegister.create(<REGISTRY_KEY>, "your_modid")`.
- Register on client-side mod event bus.

---

## 5. Document Resolution and Cache

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

## 6. Markdown Parsing Model

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

## 7. Extension Interfaces

### Block Extensions

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

### Inline Components

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

### Inline Styles

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

### Recipe Component Factories

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

## 8. Built-in Registrations

### `BuiltinExtensionComponents`

Built-in block extensions:

- `ageratum:info`
- `ageratum:tip`
- `ageratum:warning`
- `ageratum:danger`
- `ageratum:recipe`
- `ageratum:structure`
- `ageratum:item`
- `ageratum:block`
- `ageratum:entity`
- `ageratum:latex`
- `ageratum:row`

### `BuiltinInlineStyleParsers`

Built-in inline style tags:

- `<color=#RRGGBB>...</color>`
- `<o>...</o>`
- `<hover ...>...</hover>`
- `<click ...>...</click>`
- `<gradient start="#RRGGBB" end="#RRGGBB">...</gradient>`

### `BuiltinInlineComponents`

Built-in inline components:

- `<translate key="..." fallback="..."/>`
- `<ref item="..." component="..."/>` (item reference with document jump)

### `BuiltinRecipeComponentFactories`

Built-in recipe factories:

- `crafting`
- `smithing`
- `stonecutter`
- `furnace` (covers smelting / smoking / blasting / campfire_cooking)

---

## 9. Client Config Object

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

## 10. Constant Quick Reference

| Constant | Value | Location |
|---|---|---|
| `Ageratum.MOD_ID` | `"ageratum"` | `Ageratum` |
| `GuideDocumentLoader.DEFAULT_LANGUAGE_CODE` | `"en_us"` | `GuideDocumentLoader` |
| `AgeratumNetwork.NETWORK_VERSION` | `"1"` | `AgeratumNetwork` |
| `AgeratumClient.PREVIEW_NAMESPACE` | `"ageratum_review"` | `AgeratumClient` |

---

## See Also

- [Extension Components](04-extension-components.md)
- [Inline Style Parsers](05-inline-style-parsers.md)
- [Architecture](08-architecture.md)
- [Preview and Sharing](10-preview-and-sharing.md)
