---
prev:
  text: API 参考
  link: /posts/docs/ageratum/07-api-reference
next:
  text: 配置参考
  link: /posts/docs/ageratum/09-config
---

# 架构设计

本文档介绍 Ageratum 的模块划分、核心数据流和扩展机制，帮助开发者理解代码结构，便于维护和贡献。

---

## 整体架构

```
┌─────────────────────────────────────────────────────┐
│                     游戏客户端                        │
│                                                     │
│  /ageratum 命令  ──→  AgeratumClient                │
│  网络包（服务端）──→  ClientPayloadHandler           │
│                          │                          │
│                          ▼                          │
│                    GuideScreen（GUI）               │
│                          │                          │
│              ┌───────────┴──────────────┐           │
│              ▼                          ▼           │
│    GuideDocumentCache            GuideDocumentLoader │
│    （预解析缓存）                （路径工具）        │
│              │                                      │
│              ▼                                      │
│       MarkdownParser                                │
│    （块级 + 行内 解析）                             │
│              │                                      │
│              ▼                                      │
│       MDComponent 列表                              │
│    ┌──────────────────────────┐                     │
│    │ MDTextComponent          │                     │
│    │ MDHeaderComponent        │                     │
│    │ MDCodeBlockComponent     │                     │
│    │ MDListComponent          │                     │
│    │ MDTableComponent         │                     │
│    │ MDQuoteComponent         │                     │
│    │ MDImageComponent         │                     │
│    │ MDNoticeBoxComponent     │                     │
│    │ MDRecipeComponent        │                     │
│    │ MDItemComponent          │                     │
│    │ MDNBTStructureComponent  │                     │
│    │ <自定义组件>             │                     │
│    └──────────────────────────┘                     │
└─────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│                    网络层（双向）                     │
│                                                      │
│  OpenGuidePayload    (Server -> Client)             │
│  ShareGuidePayload   (Client -> Server)             │
│                                                      │
│  ClientPayloadHandler / ServerPayloadHandler         │
└──────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│              NeoForge 自定义注册表                    │
│                                                      │
│  ageratum:extension_component_factory                │
│    → MDExtensionComponentFactory（块级扩展）         │
│                                                      │
│  ageratum:inline_component_factory                   │
│    → MDInlineComponentFactory（行内组件）            │
│                                                      │
│  ageratum:inline_style_parser                        │
│    → MDInlineStyleParser（行内样式）                 │
│                                                      │
│  ageratum:recipe_component_factory                   │
│    → MDRecipeComponent.RecipeComponentFactory        │
└──────────────────────────────────────────────────────┘
```

---

## 模块说明

### 主模组类 (`Ageratum`)

- 声明 `MOD_ID`
- 提供 `location(path)` 工具方法
- 提供 `openGuide(player, location)` 服务端入口

### 客户端初始化 (`AgeratumClient`)

- 注册 NeoForge 自定义注册表（`AgeratumRegistries.register()`）
- 触发内置注册项类加载（扩展组件、行内组件、行内样式、配方组件）
- 注册客户端命令 `/ageratum`
- 注册文档预加载监听器（`RegisterClientReloadListenersEvent`）
- 提供预览模式入口（`/ageratum preview` + 文件轮询热刷新）

### 网络与协作 (`AgeratumNetwork`)

- `OpenGuidePayload`：服务端发给客户端，直接打开指定文档
- `ShareGuidePayload`：客户端发给服务端，请求广播文档分享消息
- `ServerPayloadHandler`：根据 `sameTeam` 过滤目标玩家并发送可点击命令

### 解析流水线

```
原始 .md 文件文本
        │
        ▼
  MarkdownParser.parseDocument()
        │
        ├─ 提取 Front Matter（--- ... ---）
        │
        ├─ 收集引用链接定义（[ref]: url）
        │
        ├─ 块级解析（按行扫描）
        │   ├─ 代码围栏检测
        │   ├─ 扩展语法（::: 和 <tag>）
        │   ├─ 列表、引用块、表格
        │   ├─ 标题、水平线
        │   ├─ 图片
        │   └─ 段落（默认）
        │
        └─ MDDocument { frontMatter, components }
                │
                ▼
         组件列表传入 GuideScreen 渲染
```

### 行内解析（`MDComponent.textFormat()`）

```
原始文本
    │
    ├─ 预处理转义字符（\* → %%MDESC42%%）
    │
    ├─ 引用链接展开
    │
    ├─ 代码跨度提取（`code`，避免内部内容被解析）
    │
    ├─ 自动链接（<url>、<email>）
    │
    ├─ 图片（内联，目前按文本处理）
    │
    ├─ 普通链接（[text](url)）
    │
    ├─ 粗体 / 斜体 / 删除线
    │
    ├─ 自定义行内样式（查询 INLINE_STYLE_PARSER_REGISTRY，按优先级排序）
    │
    └─ 还原转义字符
```

### 缓存机制 (`GuideDocumentCache`)

```
资源包加载/重载事件
        │
        ▼
  RELOAD_LISTENER.prepare()
        │
        ├─ 扫描全部 ageratum/**/*.md
        ├─ 解析为 MDDocument
        └─ 构建 NavigationTree（目录结构）
        │
        ▼
  RELOAD_LISTENER.apply()
        │
        ├─ 原子替换 PARSED_DOCUMENT_CACHE（volatile Map）
        └─ 原子替换 NAVIGATION_TREE_CACHE
```

缓存使用 `volatile` 变量保证线程可见性，`Map.copyOf()` 保证不可变性。

---

## 扩展机制

### 扩展组件注册流程

```
外部模组注册
DeferredRegister<MDExtensionComponentFactory>
        │  register(modEventBus)
        ▼
NeoForge 注册事件
        │
        ▼
AgeratumRegistries.EXTENSION_COMPONENT_FACTORY_REGISTRY
        │  查询 by ResourceLocation（namespace:name）
        ▼
MarkdownParser 解析到扩展语法
        │
        ▼
MDExtensionComponentFactory.create(context)
        │
        ▼
返回 MDComponent，加入文档组件列表
```

### 行内样式解析流程

```
MDComponent.textFormat(rawText)
        │
        ▼
查询 AgeratumRegistries.INLINE_STYLE_PARSER_REGISTRY
（所有已注册解析器，按 priority 排序）
        │
        ▼
逐字符扫描：
  for each parser (by priority asc):
    parser.parse(text, pos) → InlineStyleMatch or null
        │
        ▼
取最早命中（最小 startPos）的匹配，若优先级相同取优先级数值小的
        │
        ▼
将命中范围内的文本应用对应 Style，递归处理内部文本
        │
        ▼
输出 FormattedText
```

### 行内组件解析流程

```
MDComponent.textFormat(rawText)
        │
        ▼
查询 AgeratumRegistries.INLINE_COMPONENT_FACTORY_REGISTRY
        │
        ▼
命中 <namespace:id .../> 自闭合标签
        │
        ▼
构建 MDInlineComponentContext
        │
        ▼
MDInlineComponentFactory.create(context)
        │
        ▼
返回 FormattedText 并拼接到当前行内内容
```

---

## 设计原则

### 1. 分离关注点（SoC）

每个类职责单一：

- `MarkdownParser`：仅负责文本 → 组件列表
- `GuideDocumentLoader`：仅负责路径规范化和 IO 读取
- `GuideDocumentCache`：仅负责预加载缓存管理
- `GuideScreen`：仅负责 GUI 渲染和用户交互

### 2. 客户端隔离（`@Mod(dist = Dist.CLIENT)`）

所有渲染相关代码（GUI、Markdown 解析、注册表）通过 `@Mod(dist = Dist.CLIENT)` 隔离在客户端。服务端仅持有 `Ageratum`
主类（无渲染代码）和 `AgeratumNetwork`。

### 3. 注册表驱动扩展

扩展点全部通过 NeoForge Custom Registry 实现，而非反射或接口扫描。这样做的好处：

- 注册与游戏生命周期一致（冻结在 `FMLCommonSetupEvent` 之后）
- 支持 `DeferredHolder` 懒引用
- 自动处理注册顺序冲突

### 4. 预加载 + 缓存

所有文档在资源包加载时一次性解析完毕并缓存，避免每次打开文档时的 IO 和解析开销。缓存在资源包重载时自动失效并重建。

### 5. 语言回退

查找文档时优先使用客户端当前语言（如 `zh_cn`），找不到时自动回退到 `en_us`。这简化了模组开发者的工作：**只要提供 `en_us`
版本，就能在所有语言客户端上正常显示**。

### 6. 预览模式隔离

预览模式使用独立命名空间 `ageratum_review` 与本地 `previewPath` 路径读取文档，不依赖资源包扫描缓存，避免污染正式文档索引。

---

## 文件大小控制

项目遵循"无过长文件"原则：

| 文件        | 行数上限     | 说明    |
|-----------|----------|-------|
| 单个 Java 类 | ~400 行   | 超出则拆分 |
| 内部类       | 提取为独立文件  |       |
| 静态工具方法    | 提取到专用工具类 |       |

---

## 测试策略

当前版本暂无单元测试，功能验证通过游戏内运行（`/ageratum` 命令 + 资源包）进行。  
未来规划：

- `MarkdownParser` 纯文本输出的单元测试（不依赖游戏环境）
- `GuideDocumentLoader` 路径规范化测试

---

## 参见

- [API 参考](07-api-reference.md)
- [扩展组件开发](04-extension-components.md)
- [行内样式解析器开发](05-inline-style-parsers.md)
- [预览与分享](10-preview-and-sharing.md)

