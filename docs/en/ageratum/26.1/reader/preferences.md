# Adjusting Client Preferences and Preview

These options are managed by `AgeratumClientConfig` on the client. When accessing Java fields via `AgeratumClient.CONFIG`, keep calls on the physical client. Theme buttons handle saving the current configuration.

| Java Field | Type | Default | Effect |
| --- | --- | --- | --- |
| `darkMode` | boolean | false | Body color scheme and guide textures. |
| `reducedMotion` | boolean | false | Reduces motion in structure previews, keeping gentler transitions. |
| `breadCrumbsHasLabel` | boolean | false | Whether sidebar page switches enter breadcrumb history. |
| `showCodeBlockLineNumbers` | boolean | true | Code block line numbers. |
| `allowCodeBlockLineContentLineBreaks` | boolean | true | Whether long code lines are allowed to wrap. |
| `enablePreview` | boolean | false | Enables development preview. |
| `previewPath` | String | `ageratum_preview` | Development preview directory; relative paths are resolved against the game directory. |
| `shareGuideOnlyInTeam` | boolean | false | Whether sharing filters to teammates by default. |
| `itemBindingHoldDurationMs` | int | 750 | Milliseconds required to hold the item navigation key, allowed `100` to `5000`. |
| `scale` | double | 1.0 | Guide logical scale, a decimal allowed from `0.5` to `4.0`. |
| `directorySide` | `DirectorySide` | `LEFT` | Determines the final side of the panel containing the directory; accepts `LEFT` or `RIGHT`. |

When testing a single page you are editing, enable preview and open it with `/ageratum preview`. When verifying resource pack overrides, language fallback, and item indexes, place files back into the formal `assets` directory and reload resources.

[Config fields](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java) · [Active layout selection](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java)
