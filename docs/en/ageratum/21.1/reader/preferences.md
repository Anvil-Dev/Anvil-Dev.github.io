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
| `scale` | int | 2 | Guide UI scale, allowed `1` to `4`. |

When testing a single page you are editing, enable preview and open it with `/ageratum preview`. When verifying resource pack overrides, language fallback, and item indexes, place files back into the formal `assets` directory and reload resources.

[Config fields](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java) · [Theme switching](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideTheme.java)
