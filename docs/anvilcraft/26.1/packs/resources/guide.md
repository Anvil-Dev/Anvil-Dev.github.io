# 游戏内手册与动态模型

手册位于 `assets/anvilcraft/ageratum/<语言>/<分类>/<文章>.md`。资源包可用相同路径修改现有文章。保留 YAML 前置导航标题和图标。正文可通过 Ageratum 的物品引用和配方组件展示当前配方。中文文章使用 `zh_cn`。

[随模组发布的中文手册文章](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/resources/assets/anvilcraft/ageratum/zh_cn/000_process/001.md)

## 中间态与天体模型

客户端在 `ModelEvent.RegisterStandalone` 中为序列装配逐个注册内置中间态模型。资源包可覆盖同名 JSON 和纹理。天体模型另行扫描 `models/block/celestial_body/` 下的 JSON，按命名空间和无扩展名的模型路径建立独立模型键。

[RegisterAdditionalEventListener.java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java)
