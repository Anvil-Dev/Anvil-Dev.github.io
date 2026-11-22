# Choosing a Fullscreen Layout for a Chapter

A guide can keep overview pages at book size while using fullscreen only for large structure diagrams. Add the Front Matter below to a structure chapter's `index.md`, and pages in that directory without an explicit layout will automatically inherit this layout up the directory tree.

```markdown
---
layout: ageratum:fullscreen
title: Machine Structures
---

# Machine Structures

The part diagrams and assembly sequence in this chapter share the fullscreen reading layout.
```

A document checks its own `layout` first, then walks up directory home pages, and finally falls back to `ageratum:light`. When looking up ancestor home pages, it accounts for the language actually used to load the body text; if the page loaded English text due to a missing translation, ancestor lookup also starts from English. Invalid resource IDs are logged while continuing up to ancestor pages.

| Requirement | File or Entrypoint |
| --- | --- |
| Share one layout across all translations | Place layout JSON in `assets/<namespace>/ageratum/layouts/<name>.json`; language directories only hold body text. |
| Keep panels clickable at any GUI scale | Design panels in guide logical pixels, and verify click targets at both scaled-up and narrow window sizes. |
| Change which side the directory sits on | The layout sets the initial position; the player's `directorySide` preference affects panels containing the directory. |
| Difference between preview and packed resources | Local preview reads guide pages from the preview directory, while layout JSON and textures still load from client resource packs. |

[Built-in fullscreen layout](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/resources/assets/ageratum/ageratum/layouts/fullscreen.json) · [Layout parser](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java)
