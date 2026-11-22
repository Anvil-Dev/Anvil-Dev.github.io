# 登记可缓存的渲染器

按方块实体类型选择渲染器，登记发生在类型可用之后。将渲染注册放在客户端初始化路径，避免服务端加载 Minecraft 客户端类。

## 源码中的用例

- [`RenderRegion` · 第 176 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L176)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `CacheableBlockEntityRenderer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderer.java) |
| `CacheableBlockEntityRenderers` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderers.java) |
