# 布局 JSON 的路径、继承与选择

给同一章统一换版式时，先在 `assets/workshop/ageratum/layouts/maintenance.json` 写一份布局，再在该章的 `index.md` 前置区写 `layout: workshop:maintenance`。布局跟着客户端资源重载，F3+T 后重新打开页面即可检查结果。路径里的 `workshop` 是资源包作者自己的命名空间。

```json
{
  "name": "maintenance",
  "extends": "ageratum:light",
  "dark_variant": "ageratum:dark",
  "tree": { "hover_shift": 0 },
  "content": { "rows_margin": 7 }
}
```

```markdown
---
layout: workshop:maintenance
---

# 设备维护

这个目录下的维护记录采用相同的布局。
```

| 顶层字段 | 类型 | 要求与读取规则 |
| --- | --- | --- |
| `name` | 字符串 | 可选，仅元数据。资源 ID 取自文件路径。 |
| `extends` | 父布局 ID 字符串 | 可选。普通布局默认继承 `ageratum:light`。短 ID 使用当前布局的命名空间。 |
| `dark_variant` | 布局 ID 字符串或 `null` | 可选。启用深色模式时选择这个布局。普通布局省略时停在当前布局。 |
| `screen`、`panels` | 对象 | 可选。[屏幕与边栏](./panels) |
| `tree`、`bookmarks`、`actions` | 对象 | 可选。[目录、书签和按钮](./sections) |
| `content`、`interaction` | 对象 | 可选。[正文与滚动条](./content) |
| `textures`、`colors` | 对象 | 可选。[贴图](./textures)与[颜色](./colors)分别列出内置键。 |

名称 `ageratum:light`、`ageratum:dark`、`ageratum:fullscreen`、`ageratum:fullscreen_dark` 均有随包发布的布局。打开子页时先读该页的 `layout`，再从同目录的 `index.md` 逐级向上查到语言根。缺失或无效的 ID 会跳过。预览模式按同样顺序查找磁盘上的 `index.md`，到预览根目录为止。没有可用声明时选择 `ageratum:light`。

继承会递归合并对象，覆盖同名标量，整组替换数组。写 `null` 可以移除父级字段。`name`、`extends`、`dark_variant` 只对本文件生效。资源管理器逐字段校验后合并，错误的字段会留下日志并让父级值继续生效。父布局缺失、环形继承或继承深度超过 64 时，回退到代码内置默认值，再逐层应用已读补丁。深色变体遇到缺失或环引用时停在最后一个有效布局。[加载、校验与继承](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java) · [内置默认值](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/LayoutDefaults.java)
