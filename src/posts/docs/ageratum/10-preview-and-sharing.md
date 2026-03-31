---
prev:
  text: 配置参考
  link: /posts/docs/ageratum/09-config
---

# 预览与分享

本文档聚焦 Ageratum 的两条协作链路：**本地预览**（快速迭代文档）与**多人分享**（把当前文档发送给其他玩家）。

---

## 1. 本地预览模式

预览模式用于在不重启游戏、不重载资源包的情况下，实时查看本地 Markdown 修改效果。

### 启用条件

在 `ageratum-client.toml` 中开启：

```toml
enablePreview = true
previewPath = "ageratum_preview"
```

### 命令入口

```text
/ageratum preview
```

该命令会尝试打开：

```text
<minecraft_dir>/<previewPath>/index.md
```

默认路径即：`<minecraft_dir>/ageratum_preview/index.md`。

### 刷新机制

- 预览文档在界面打开后会周期检查文件变化（修改时间 + 文件大小）。
- 检查间隔为约 `500ms`。
- 检测到变化后会重新解析 Markdown，并尽量保留当前阅读位置（滚动位置与侧栏状态）。

### 预览文档路径规则

- 预览命名空间固定为 `ageratum_review`（内部使用）。
- 文件参数会做规范化：
  - 空值变为 `index`
  - `\\` 转 `/`
  - 去掉前导 `/`
  - 去掉 `.md` 后缀后再统一补回
  - `.` 会被忽略，`..` 会回退一级目录
  - 路径分段会转成小写

这保证了 `/ageratum preview` 与内部跳转在不同平台上一致。

---

## 2. 文档分享机制

Ageratum 提供一个“分享当前文档”的网络流程，目标是让玩家之间快速同步阅读页。

### 网络载荷

#### `OpenGuidePayload`（服务端 -> 客户端）

- 字段：`location: ResourceLocation`
- 用途：通知目标客户端打开指定文档

#### `ShareGuidePayload`（客户端 -> 服务端）

- 字段：
  - `location: ResourceLocation`
  - `anchor: String`
  - `sameTeam: boolean`
- 用途：请求服务端向其他玩家发送“可点击的文档消息”

### 服务端处理逻辑

`ServerPayloadHandler.handleShareGuide` 会：

1. 获取发起玩家与玩家列表。
2. 根据 `sameTeam` 决定是否过滤到同队成员。
3. 构造系统消息（含可点击按钮）。
4. 目标玩家点击后执行 `/ageratum "namespace" "path" [anchor]`。

### 队伍内分享配置

`ageratum-client.toml` 的 `shareGuideOnlyInTeam` 会影响分享时的 `sameTeam` 参数。若你希望多人服默认更克制，建议开启。

---

## 3. 与语言回退的关系

无论是普通打开还是分享跳转，文档定位都遵循同一规则：

1. 先尝试客户端当前语言目录（如 `zh_cn`）。
2. 未命中时回退到 `en_us`。

这意味着分享链接通常只需要传递同一个 `ResourceLocation` 路径，不需要为每个语言单独维护命令。

---

## 4. 推荐协作流程

### 单人写作

1. 开启 `enablePreview`。
2. 在 `previewPath` 下编辑文档。
3. 游戏内打开 `/ageratum preview` 实时校对。
4. 定稿后再拷贝到模组资源目录（`assets/<modid>/ageratum/<lang>/...`）。

### 多人联机校审

1. 文档作者在本地调好页面。
2. 通过分享功能将目标页发送给测试玩家。
3. 测试玩家点消息按钮直接跳转同一页。
4. 收集反馈后继续预览迭代。

---

## 5. 常见问题

### Q1: 输入 `/ageratum preview` 没反应？

优先检查：

- `enablePreview` 是否为 `true`
- `<minecraft_dir>/<previewPath>/index.md` 是否存在
- 文件是否 UTF-8 编码

### Q2: 修改了文件但界面不刷新？

- 等待约半秒到一秒（轮询刷新）
- 确认编辑器真实写入了文件（非仅缓存）
- 确认路径位于 `previewPath` 下

### Q3: 分享后别人打不开页面？

- 检查对方是否安装了相同资源内容
- 检查目标页面在对方语言目录是否存在（或可回退到 `en_us`）
- 若启用了队伍限制，确认双方队伍一致

---

## 参见

- [配置参考](09-config.md)
- [快速入门](01-getting-started.md)
- [API 参考](07-api-reference.md)


