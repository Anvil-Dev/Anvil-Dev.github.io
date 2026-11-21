# 游戏内手册与动态模型

手册位于 `assets/anvilcraft/ageratum/<语言>/<分类>/<文章>.md`。资源包可用相同路径修改现有文章。保留 YAML 前置导航标题和图标；正文可通过 Ageratum 的物品引用和配方组件展示当前配方。中文文章使用 `zh_cn`。

[随模组发布的中文手册文章](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/resources/assets/anvilcraft/ageratum/zh_cn/000_process/001.md)

## 中间态与天体模型

客户端搜集序列装配的 `models/block/wip_display/` 及天体的 `models/block/celestial_body/` 下的 JSON 模型，按独立模型注册。序列装配的 `displayed_models` 使用模型 ID，去掉 `models/` 和扩展名。天体纹理放在 `assets/anvilcraft/textures/block/celestial_body/`；重载资源包会清空动态纹理缓存。

[RegisterAdditionalEventListener.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java) · [StellarVisualReloadListener.java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StellarVisualReloadListener.java)
