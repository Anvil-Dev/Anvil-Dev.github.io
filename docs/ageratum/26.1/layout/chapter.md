# 为章节选择全屏布局

一本手册可以让总览页保持书本大小，只让大型结构图用全屏。把下面这段 Front Matter 写进结构章节的 `index.md` 里，这个目录下没单独指定布局的页面，就会自动沿目录往上继承这个布局。

```markdown
---
layout: ageratum:fullscreen
title: 机器结构
---

# 机器结构

本章的零件图与安装次序共用全屏阅读布局。
```

文档先看自己的 `layout`，再逐级检查目录首页，最后回退到 `ageratum:light`。查祖先首页时会考虑实际加载正文所用的语言；如果该页因缺译而加载了英语正文，祖先查找也从英语开始。错误的资源 ID 会留下日志，这时继续检查祖先页面。

| 需求 | 文件或入口 |
| --- | --- |
| 全部译文共用一个布局 | 布局 JSON 放 `assets/<命名空间>/ageratum/layouts/<名称>.json`，语言目录只保存正文。 |
| 栏目在任意 GUI 缩放下可点 | 以手册逻辑像素设计面板，用玩家界面的缩放和窄窗检查点击位置。 |
| 改变目录所在侧 | 布局给出初始位置，玩家的 `directorySide` 偏好会影响含目录的面板。 |
| 检查预览与正式资源的区别 | 本地预览可读预览目录中的文档首页，布局 JSON 和贴图仍从客户端资源包加载。 |

[内置全屏布局](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/resources/assets/ageratum/ageratum/layouts/fullscreen.json) · [布局解析器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/layout/GuideLayoutManager.java)
