# 调整客户端配置与预览

这些选项由客户端的 `AgeratumClientConfig` 管理。通过 `AgeratumClient.CONFIG` 访问 Java 字段时，应把调用放在物理客户端。主题按钮会处理当前配置的保存。

| Java 字段 | 类型 | 默认值 | 影响 |
| --- | --- | --- | --- |
| `darkMode` | boolean | false | 正文配色与手册贴图。 |
| `reducedMotion` | boolean | false | 降低结构预览中的运动，保留较轻的过渡。 |
| `breadCrumbsHasLabel` | boolean | false | 侧栏切页是否进入面包屑历史。 |
| `showCodeBlockLineNumbers` | boolean | true | 代码块行号。 |
| `allowCodeBlockLineContentLineBreaks` | boolean | true | 代码行是否允许折行。 |
| `enablePreview` | boolean | false | 启用开发预览。 |
| `previewPath` | String | `ageratum_preview` | 开发预览目录，相对路径以游戏目录为基准。 |
| `shareGuideOnlyInTeam` | boolean | false | 分享操作默认是否按队伍过滤。 |
| `itemBindingHoldDurationMs` | int | 750 | 按住物品导航键所需毫秒数，允许 100 至 5000。 |
| `scale` | double | 1.0 | 手册逻辑缩放，允许 0.5 至 4.0 的小数。 |
| `directorySide` | `DirectorySide` | `LEFT` | 决定含目录面板的最终侧别，取 `LEFT` 或 `RIGHT`。 |

测试正在编辑的单页时，可启用预览并从 `/ageratum preview` 打开。验证资源包覆盖、语言回退与物品索引时，应将文件放回正式的 `assets` 目录并重载资源。

[配置字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java) · [当前布局选择](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java)
