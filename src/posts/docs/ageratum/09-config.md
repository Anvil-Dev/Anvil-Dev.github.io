---
prev:
  text: 架构设计
  link: /posts/docs/ageratum/08-architecture
next:
  text: 预览与分享
  link: /posts/docs/ageratum/10-preview-and-sharing
---

# 配置参考

Ageratum 当前仅提供**客户端配置**，用于控制阅读器界面、预览模式和文档分享行为。

---

## 配置文件位置

```
<minecraft_dir>/config/ageratum-client.toml
```

---

## 配置项说明

### `breadCrumbsHasLabel`

**类型**：`boolean`  
**默认值**：`false`  
**说明**：控制面包屑导航（顶部路径栏）是否记录来自侧边栏标签页的跳转。

- `false`：仅记录正文链接导致的页面跳转。
- `true`：侧边栏标签点击也会进入面包屑历史。

```toml
# Do breadcrumbs record jumps from sidebar tabs
breadCrumbsHasLabel = false
```

---

### `showCodeBlockLineNumbers`

**类型**：`boolean`  
**默认值**：`true`  
**说明**：控制代码块左侧是否显示行号列。

- `true`：显示行号（从 `1` 开始）。
- `false`：隐藏行号，代码内容占满可用宽度。

```toml
# Show line numbers in code blocks
showCodeBlockLineNumbers = true
```

---

### `allowCodeBlockLineContentLineBreaks`

**类型**：`boolean`  
**默认值**：`true`  
**说明**：控制代码块中过长文本是否自动换行。

- `true`：代码行超出显示宽度时自动折行，确保内容完整可见。
- `false`：不换行（更贴近原始排版，但可能被裁切）。

```toml
# Allow line breaks in code block content
allowCodeBlockLineContentLineBreaks = true
```

---

### `enablePreview`

**类型**：`boolean`  
**默认值**：`false`  
**说明**：是否启用本地预览模式。

- `true`：允许使用 `/ageratum preview` 打开预览文档。
- `false`：命令会提示预览功能未启用。

```toml
# Whether to enable preview mode (enabling it will allow real-time previews of changes to documents in the specified path)
enablePreview = false
```

---

### `previewPath`

**类型**：`string`  
**默认值**：`"ageratum_preview"`  
**说明**：预览模式使用的根目录（相对游戏根目录）。

例如默认情况下，`/ageratum preview` 会读取：

```
<minecraft_dir>/ageratum_preview/index.md
```

```toml
# Preview mode path
previewPath = "ageratum_preview"
```

---

### `shareGuideOnlyInTeam`

**类型**：`boolean`  
**默认值**：`false`  
**说明**：分享文档时是否仅向同队玩家广播。

- `false`：默认可向可见目标广播（由服务端处理）。
- `true`：仅同队玩家可收到分享消息。

```toml
# Share your guide only with player from the same team
shareGuideOnlyInTeam = false
```

---

## 完整示例配置

```toml
# Ageratum 客户端配置

# Do breadcrumbs record jumps from sidebar tabs
breadCrumbsHasLabel = false

# Show line numbers in code blocks
showCodeBlockLineNumbers = true

# Allow line breaks in code block content
allowCodeBlockLineContentLineBreaks = true

# Whether to enable preview mode (enabling it will allow real-time previews of changes to documents in the specified path)
enablePreview = false

# Preview mode path
previewPath = "ageratum_preview"

# Share your guide only with player from the same team
shareGuideOnlyInTeam = false
```

---

## 在代码中访问配置

Ageratum 使用 AnvilCraft Lib v2 配置系统。在客户端可通过 `AgeratumClient.CONFIG` 直接读取：

```java
import dev.anvilcraft.resource.ageratum.client.AgeratumClient;

// 阅读器行为
boolean showLineNumbers = AgeratumClient.CONFIG.showCodeBlockLineNumbers;
boolean allowLineBreaks = AgeratumClient.CONFIG.allowCodeBlockLineContentLineBreaks;

// 预览模式
boolean previewEnabled = AgeratumClient.CONFIG.enablePreview;
String previewRoot = AgeratumClient.CONFIG.previewPath;

// 分享策略
boolean sameTeamOnly = AgeratumClient.CONFIG.shareGuideOnlyInTeam;
```

> 注意：该配置类属于 `Dist.CLIENT`，服务端逻辑不要直接引用。

---

## 参见

- [快速入门](01-getting-started.md)
- [架构设计](08-architecture.md)
- [预览与分享](10-preview-and-sharing.md)

