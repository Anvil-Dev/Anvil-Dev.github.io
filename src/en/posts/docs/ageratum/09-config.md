---
prev:
  text: Architecture
  link: /en/posts/docs/ageratum/08-architecture
next:
  text: Preview and Sharing
  link: /en/posts/docs/ageratum/10-preview-and-sharing
---

# Configuration

Ageratum currently provides **client-side configuration only**, covering reader behavior, preview mode, and guide sharing behavior.

---

## Configuration File Location

```
<minecraft_dir>/config/ageratum-client.toml
```

---

## Configuration Options

### `breadCrumbsHasLabel`

**Type**: `boolean`  
**Default**: `false`  
**Description**: Whether sidebar label jumps are recorded in breadcrumb history.

- `false`: only in-content navigation is recorded.
- `true`: sidebar tab clicks are also added to breadcrumbs.

```toml
# Do breadcrumbs record jumps from sidebar tabs
breadCrumbsHasLabel = false
```

---

### `showCodeBlockLineNumbers`

**Type**: `boolean`  
**Default**: `true`  
**Description**: Whether code blocks display a line-number column.

- `true`: show line numbers (starting at `1`).
- `false`: hide line numbers and use full width for content.

```toml
# Show line numbers in code blocks
showCodeBlockLineNumbers = true
```

---

### `allowCodeBlockLineContentLineBreaks`

**Type**: `boolean`  
**Default**: `true`  
**Description**: Whether long code lines are wrapped.

- `true`: long lines wrap so full content remains readable.
- `false`: no wrapping (closer to source layout, but text can be clipped).

```toml
# Allow line breaks in code block content
allowCodeBlockLineContentLineBreaks = true
```

---

### `enablePreview`

**Type**: `boolean`  
**Default**: `false`  
**Description**: Enables local preview mode.

- `true`: `/ageratum preview` is available.
- `false`: the preview command reports that preview is disabled.

```toml
# Whether to enable preview mode (enabling it will allow real-time previews of changes to documents in the specified path)
enablePreview = false
```

---

### `previewPath`

**Type**: `string`  
**Default**: `"ageratum_preview"`  
**Description**: Root directory used by preview mode (relative to game directory).

With default settings, `/ageratum preview` reads:

```
<minecraft_dir>/ageratum_preview/index.md
```

```toml
# Preview mode path
previewPath = "ageratum_preview"
```

---

### `shareGuideOnlyInTeam`

**Type**: `boolean`  
**Default**: `false`  
**Description**: Whether shared guides are limited to players on the same team.

- `false`: sharing can target broader recipients (server-side handling).
- `true`: only same-team players receive the share message.

```toml
# Share your guide only with player from the same team
shareGuideOnlyInTeam = false
```

---

## Full Example Configuration

```toml
# Ageratum Client Configuration

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

## Accessing Configuration in Code

Ageratum uses AnvilCraft Lib v2 configuration APIs. On client-side code, access values via `AgeratumClient.CONFIG`:

```java
import dev.anvilcraft.resource.ageratum.client.AgeratumClient;

// Reader behavior
boolean showLineNumbers = AgeratumClient.CONFIG.showCodeBlockLineNumbers;
boolean allowLineBreaks = AgeratumClient.CONFIG.allowCodeBlockLineContentLineBreaks;

// Preview mode
boolean previewEnabled = AgeratumClient.CONFIG.enablePreview;
String previewRoot = AgeratumClient.CONFIG.previewPath;

// Sharing behavior
boolean sameTeamOnly = AgeratumClient.CONFIG.shareGuideOnlyInTeam;
```

> Note: this config object is `Dist.CLIENT` only. Do not reference it from server-side logic.

---

## See Also

- [Getting Started](01-getting-started.md)
- [Architecture](08-architecture.md)
- [Preview and Sharing](/en/posts/docs/ageratum/10-preview-and-sharing)
