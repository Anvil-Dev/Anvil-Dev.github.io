# 数据包与资源包

Ageratum 在客户端资源重载时读取手册。发布给其他玩家时，把 Markdown、插图和结构预览随模组资源或客户端资源包一起分发。服务端可以通知玩家打开某个文档 ID，正文来自玩家本机。

| 要做的事 | 入口 |
| --- | --- |
| 从空目录创建手册，检查语言回退和预览 | [资源包布局](./layout) |
| 修改目录标题、排序和颜色 | [页面元数据](./metadata) |
| 让玩家从特定物品或物品组件进入文章 | [物品绑定](./bindings) |
| 插入提示框、行布局和公式 | [块标签与排版](./blocks) |
| 展示物品、方块、实体及配方占位 | [游戏对象与配方](./content) |
| 使用本地化文本、按键、交互样式和图片 | [行内标记与图片](./inline) |
| 在页面中预览 NBT 或 SNBT | [结构预览与字段](./structures) |
| 从命令或正文投影结构 | [结构投影](./export) |
| 定义布局、面板、组件颜色与贴图 | [布局 JSON](./appearance/) |
| 修改指南物品模型与翻译 | [手册物品外观](./guidebook) |

手册注册表在代码中登记组件工厂，资源包作者通过标签使用这些工厂。普通服务端数据包的 `data/` 目录没有独立的手册发现或组件注册入口。内置 `recipe` 标签能读取 ID，目前只会留下空白占位。[文档缓存](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java) · [客户端注册](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java)
