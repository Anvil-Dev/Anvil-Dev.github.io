# 全分支与子文档拆分清单

按上游提交保存文档。每棵树单独记录依赖、运行时行为、资源格式和公开符号。方框表示该项核对进度。

| 文档树 | 上游分支 | 取材提交 | 逐篇清单 |
| --- | --- | --- | --- |
| [AnvilCraft 21.1](docs/anvilcraft/21.1/index.md) | `dev/1.21/1.6` | [`6a4cde43b4`](https://github.com/Anvil-Dev/AnvilCraft/tree/6a4cde43b4ece65b765137a7aab145b9b4c002bf) | [逐篇清单](docs/checklist/anvilcraft-21.1.md) |
| [AnvilCraft 26.1](docs/anvilcraft/26.1/index.md) | `dev/26.1/1.6` | [`7ac05a7698`](https://github.com/Anvil-Dev/AnvilCraft/tree/7ac05a76988c98454c0384513fcab44d9da4cf88) | [逐篇清单](docs/checklist/anvilcraft-26.1.md) |
| [Ageratum 21.1](docs/ageratum/21.1/index.md) | `releases/1.21.1` | [`83f89c4c3a`](https://github.com/Anvil-Dev/Ageratum/tree/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c) | [逐篇清单](docs/checklist/ageratum-21.1.md) |
| [Ageratum 26.1](docs/ageratum/26.1/index.md) | `dev/26.1.2` | [`36bf4ce160`](https://github.com/Anvil-Dev/Ageratum/tree/36bf4ce16017ebc532a369c56f972dfb73d272a0) | [逐篇清单](docs/checklist/ageratum-26.1.md) |

## AnvilCraft 21.1

- [x] 快速开始 · 开发环境、仓库过滤、依赖坐标、可编译的入口示例
- [x] 运行时扩展 · 铁砧行为、事件订阅、物品、方块、传输与网络、电力、配方实现和客户端交互
- [x] 数据包与资源包 · 配方分派和各序列化器、条件、标签、注册表、客户端资源、示例与字段约束
- [x] 公开 API · 类型、构造器、字段、重载、注解、事件与构建器

[公开符号索引](docs/anvilcraft/21.1/api/index.md)收录 235 个包、2784 个可公开访问的类型和 22099 个成员，包含 Java 隐式成员及 Lombok 展开的公开成员。继承的 API 在声明它的类型下查阅。

### 已发布的子文档

- [护符](docs/anvilcraft/21.1/amulets/index.md) · 3 页
- [铁砧落地行为](docs/anvilcraft/21.1/anvil/index.md) · 3 页
- [Java 公开 API](docs/anvilcraft/21.1/api/index.md) · 362 页
- [行为树](docs/anvilcraft/21.1/behavior/index.md) · 3 页
- [配方构建器](docs/anvilcraft/21.1/builders/index.md) · 47 页
- [天体锻造砧与恒星演化](docs/anvilcraft/21.1/celestial/index.md) · 5 页
- [电荷与物品能量](docs/anvilcraft/21.1/charge/index.md) · 3 页
- [实体、刷怪与催熟](docs/anvilcraft/21.1/entities/index.md) · 3 页
- [事件](docs/anvilcraft/21.1/events/index.md) · 21 页
- [管道与流体](docs/anvilcraft/21.1/fluid/index.md) · 4 页
- [快速开始](docs/anvilcraft/21.1/getting-started/index.md) · 3 页
- [巨型铁砧](docs/anvilcraft/21.1/giant-anvil/index.md) · 3 页
- [铁砧锤](docs/anvilcraft/21.1/hammer/index.md) · 3 页
- [加热与热能收集](docs/anvilcraft/21.1/heat/index.md) · 4 页
- [物品能力与槽位](docs/anvilcraft/21.1/items/index.md) · 3 页
- [激光](docs/anvilcraft/21.1/laser/index.md) · 3 页
- [客户端与服务端通信](docs/anvilcraft/21.1/network/index.md) · 5 页
- [数据包与资源包](docs/anvilcraft/21.1/packs/index.md) · 92 页
- [方块放置与目标指针](docs/anvilcraft/21.1/placement/index.md) · 3 页
- [等离子喷流](docs/anvilcraft/21.1/plasma/index.md) · 3 页
- [玩家交互与提示](docs/anvilcraft/21.1/player-ui/index.md) · 4 页
- [传送门](docs/anvilcraft/21.1/portals/index.md) · 3 页
- [电网与功率](docs/anvilcraft/21.1/power/index.md) · 5 页
- [进度与条件](docs/anvilcraft/21.1/progress/index.md) · 3 页
- [配方与数据生成](docs/anvilcraft/21.1/recipe-code/index.md) · 4 页
- [方块实体渲染](docs/anvilcraft/21.1/render/index.md) · 3 页
- [滑轨与移动结构](docs/anvilcraft/21.1/sliding/index.md) · 3 页
- [声音与消音](docs/anvilcraft/21.1/sound/index.md) · 2 页
- [仓储端口与终端](docs/anvilcraft/21.1/storage/index.md) · 3 页
- [特斯拉塔](docs/anvilcraft/21.1/tesla/index.md) · 3 页
- [图腾与致死保护](docs/anvilcraft/21.1/totems/index.md) · 3 页
- [区块加载与随机刻](docs/anvilcraft/21.1/world-load/index.md) · 3 页

## AnvilCraft 26.1

- [x] 快速开始 · 开发环境、仓库过滤、依赖坐标、可编译的入口示例
- [x] 运行时扩展 · 铁砧行为、事件订阅、物品、方块、传输与网络、电力、配方实现和客户端交互
- [x] 数据包与资源包 · 配方分派和各序列化器、条件、标签、注册表、客户端资源、示例与字段约束
- [x] 公开 API · 类型、构造器、字段、重载、注解、事件与构建器

[公开符号索引](docs/anvilcraft/26.1/api/index.md)收录 285 个包、3012 个可公开访问的类型和 23885 个成员，包含 Java 隐式成员及 Lombok 展开的公开成员。继承的 API 在声明它的类型下查阅。

### 已发布的子文档

- [护符](docs/anvilcraft/26.1/amulets/index.md) · 3 页
- [铁砧落地行为](docs/anvilcraft/26.1/anvil/index.md) · 3 页
- [Java 公开 API](docs/anvilcraft/26.1/api/index.md) · 412 页
- [行为树](docs/anvilcraft/26.1/behavior/index.md) · 3 页
- [配方构建器](docs/anvilcraft/26.1/builders/index.md) · 49 页
- [恒星演化与铸星砧](docs/anvilcraft/26.1/celestial/index.md) · 3 页
- [电荷与物品能量](docs/anvilcraft/26.1/charge/index.md) · 3 页
- [实体、刷怪与催熟](docs/anvilcraft/26.1/entities/index.md) · 3 页
- [事件](docs/anvilcraft/26.1/events/index.md) · 21 页
- [管道与流体](docs/anvilcraft/26.1/fluid/index.md) · 5 页
- [快速开始](docs/anvilcraft/26.1/getting-started/index.md) · 3 页
- [巨型铁砧](docs/anvilcraft/26.1/giant-anvil/index.md) · 3 页
- [铁砧锤](docs/anvilcraft/26.1/hammer/index.md) · 3 页
- [加热与热能收集](docs/anvilcraft/26.1/heat/index.md) · 4 页
- [物品能力与槽位](docs/anvilcraft/26.1/items/index.md) · 4 页
- [激光](docs/anvilcraft/26.1/laser/index.md) · 3 页
- [网络载荷](docs/anvilcraft/26.1/network/index.md) · 3 页
- [数据包与资源包](docs/anvilcraft/26.1/packs/index.md) · 95 页
- [方块放置与目标指针](docs/anvilcraft/26.1/placement/index.md) · 3 页
- [等离子喷流](docs/anvilcraft/26.1/plasma/index.md) · 3 页
- [玩家交互与提示](docs/anvilcraft/26.1/player-ui/index.md) · 4 页
- [传送门](docs/anvilcraft/26.1/portals/index.md) · 3 页
- [电网与功率](docs/anvilcraft/26.1/power/index.md) · 5 页
- [进度与条件](docs/anvilcraft/26.1/progress/index.md) · 3 页
- [配方与数据生成](docs/anvilcraft/26.1/recipe-code/index.md) · 4 页
- [方块模型渲染](docs/anvilcraft/26.1/render/index.md) · 3 页
- [滑轨与移动结构](docs/anvilcraft/26.1/sliding/index.md) · 3 页
- [声音与消音](docs/anvilcraft/26.1/sound/index.md) · 2 页
- [仓储端口与终端](docs/anvilcraft/26.1/storage/index.md) · 3 页
- [特斯拉塔](docs/anvilcraft/26.1/tesla/index.md) · 3 页
- [区块加载与随机刻](docs/anvilcraft/26.1/world-load/index.md) · 3 页

## Ageratum 21.1

- [x] 快速开始 · 开发环境、仓库过滤、依赖坐标、可编译的入口示例
- [x] 指南内容 · 文档组织、语言回退、Markdown、内置组件、配方与结构预览
- [x] Java 扩展 · 模组生命周期、组件与内联解析器、指南界面和配置
- [x] 数据包与资源包 · 加载路径、元数据、绑定、组件参数与结构资源
- [x] 公开 API · 类型、构造器、字段、重载、注解、事件与构建器

[公开符号索引](docs/ageratum/21.1/api/index.md)收录 20 个包、118 个可公开访问的类型和 698 个成员，包含 Java 隐式成员及 Lombok 展开的公开成员。继承的 API 在声明它的类型下查阅。

### 已发布的子文档

- [Java 公开 API](docs/ageratum/21.1/api/index.md) · 23 页
- [Markdown 扩展](docs/ageratum/21.1/extensions/index.md) · 5 页
- [快速开始](docs/ageratum/21.1/getting-started/index.md) · 3 页
- [编写与打开手册](docs/ageratum/21.1/guides/index.md) · 4 页
- [Markdown 排版](docs/ageratum/21.1/markdown/index.md) · 5 页
- [数据包与资源包](docs/ageratum/21.1/packs/index.md) · 9 页
- [阅读器与导航](docs/ageratum/21.1/reader/index.md) · 4 页
- [客户端配方视图](docs/ageratum/21.1/recipe-render/index.md) · 3 页
- [结构模板、投影与导出](docs/ageratum/21.1/structures/index.md) · 4 页

## Ageratum 26.1

- [x] 快速开始 · 开发环境、仓库过滤、依赖坐标、可编译的入口示例
- [x] 指南内容 · 文档组织、语言回退、Markdown、内置组件、配方与结构预览
- [x] Java 扩展 · 模组生命周期、组件与内联解析器、指南界面和配置
- [x] 数据包与资源包 · 加载路径、元数据、绑定、组件参数与结构资源
- [x] 公开 API · 类型、构造器、字段、重载、注解、事件与构建器

[公开符号索引](docs/ageratum/26.1/api/index.md)收录 24 个包、147 个可公开访问的类型和 939 个成员，包含 Java 隐式成员及 Lombok 展开的公开成员。继承的 API 在声明它的类型下查阅。

### 已发布的子文档

- [Java 公开 API](docs/ageratum/26.1/api/index.md) · 27 页
- [Markdown 扩展](docs/ageratum/26.1/extensions/index.md) · 5 页
- [快速开始](docs/ageratum/26.1/getting-started/index.md) · 3 页
- [编写与打开手册](docs/ageratum/26.1/guides/index.md) · 4 页
- [布局与主题开发](docs/ageratum/26.1/layout/index.md) · 4 页
- [Markdown 排版](docs/ageratum/26.1/markdown/index.md) · 5 页
- [数据包与资源包](docs/ageratum/26.1/packs/index.md) · 16 页
- [阅读器与导航](docs/ageratum/26.1/reader/index.md) · 4 页
- [客户端配方视图](docs/ageratum/26.1/recipe-render/index.md) · 3 页
- [结构模板、投影与方块检查](docs/ageratum/26.1/structures/index.md) · 4 页
