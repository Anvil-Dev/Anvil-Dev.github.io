# Saving and Loading Bookmarks

Bookmarks are saved on the client at `config/ageratum/bookmarks/<namespace>.json`. A single namespace shares one file, with the page title and resource location encoded separately. You can rename the display text while keeping the original resource path; changing the physical path leaves existing bookmarks pointing to the old page.

```json
{
  "version": 1,
  "entries": [
    {
      "title": {"text": "Furnace"},
      "location": "field_guide:ageratum/en_us/furnace.md"
    }
  ]
}
```

| Method | When Called & What It Modifies |
| --- | --- |
| `ensureLoaded(namespace, target)` | Called the first time a namespace is needed. Returns immediately if the namespace is already marked as loaded; callers should reuse the original list. |
| `reload(namespace, target)` | Clears the target list first, then reads from disk. Does not fabricate bookmarks if the file is missing, the entries array is absent, or an entry fails to decode. |
| `save(namespace, entries)` | Creates directories and writes encodable entries back to the corresponding file. Both saving and loading use UTF-8. |

[Bookmark file & entry Codec](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/GuideBookmarkStore.java)
