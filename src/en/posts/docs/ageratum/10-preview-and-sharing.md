---
prev:
  text: Configuration
  link: /en/posts/docs/ageratum/09-config
---

# Preview and Sharing

This page covers two collaboration workflows in Ageratum: **local preview** (iterate docs quickly) and **guide sharing** (send your current page to other players).

---

## 1. Local Preview Mode

Preview mode lets you iterate Markdown documents without restarting the game or reloading resource packs.

### Enable Preview

Set these in `ageratum-client.toml`:

```toml
enablePreview = true
previewPath = "ageratum_preview"
```

### Command Entry

```text
/ageratum preview
```

This command tries to open:

```text
<minecraft_dir>/<previewPath>/index.md
```

With defaults, that is `<minecraft_dir>/ageratum_preview/index.md`.

### Refresh Behavior

- After the screen opens, preview checks file changes periodically (last-modified time + file size).
- Poll interval is about `500ms`.
- When changes are detected, markdown is re-parsed and reader position is preserved as much as possible.

### Preview Path Rules

- Preview namespace is fixed as `ageratum_review` (internal use).
- File arguments are normalized:
  - empty -> `index`
  - `\\` -> `/`
  - remove leading `/`
  - strip `.md` then re-append consistently
  - ignore `.` and resolve `..` back to parent
  - lowercase each path segment

This keeps behavior consistent across platforms.

---

## 2. Guide Sharing Workflow

Ageratum provides a network-based flow for sharing your current guide page with other players.

### Network Payloads

#### `OpenGuidePayload` (Server -> Client)

- Field: `location: ResourceLocation`
- Purpose: tell target client to open a document

#### `ShareGuidePayload` (Client -> Server)

- Fields:
  - `location: ResourceLocation`
  - `anchor: String`
  - `sameTeam: boolean`
- Purpose: ask server to broadcast a clickable share message

### Server Handling

`ServerPayloadHandler.handleShareGuide`:

1. Gets sender and current online players.
2. Applies team filter when `sameTeam` is true.
3. Builds a system message with a clickable button.
4. Click executes `/ageratum "namespace" "path" [anchor]` on receiver side.

### Team-only Sharing Config

`shareGuideOnlyInTeam` in `ageratum-client.toml` controls the `sameTeam` behavior. For public servers, enabling this is usually safer.

---

## 3. Language Fallback and Sharing

Both normal opening and share-based opening use the same lookup rule:

1. Try client language first (for example `zh_cn`).
2. Fall back to `en_us` if not found.

So shared links can stay language-neutral while still opening localized pages when available.

---

## 4. Recommended Team Workflow

### Solo Writing

1. Enable `enablePreview`.
2. Edit documents under `previewPath`.
3. Run `/ageratum preview` for live verification.
4. Move finalized files into `assets/<modid>/ageratum/<lang>/...`.

### Multiplayer Review

1. Author iterates locally in preview mode.
2. Share the target page to testers.
3. Testers click the system message and jump directly to the same document.
4. Collect feedback and continue iterating.

---

## 5. FAQ

### Q1: `/ageratum preview` does nothing

Check first:

- `enablePreview` is `true`
- `<minecraft_dir>/<previewPath>/index.md` exists
- file encoding is UTF-8

### Q2: File changed but screen did not refresh

- wait about 0.5~1 second (polling)
- ensure your editor actually wrote the file to disk
- ensure the file is under `previewPath`

### Q3: Shared guide cannot be opened by others

- verify both sides have required assets/docs
- verify target page exists for receiver language (or has `en_us` fallback)
- if team-only sharing is enabled, verify both players are on the same team

---

## See Also

- [Configuration](09-config.md)
- [Getting Started](01-getting-started.md)
- [API Reference](07-api-reference.md)

