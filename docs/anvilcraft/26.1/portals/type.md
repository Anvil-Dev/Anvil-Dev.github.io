# 从方块 ID 构造传送门类型

PortalType 同时保存注册 ID 和 Portal 实现。从数据构造时会查询方块注册表；注册项必须实现 Portal，否则构造失败。序列化传递 ID。

## 源码中的用例

- [`EntityMixin` · 第 330 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L330)
- [`PortalConversionRecipe` · 第 45 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L45)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `PortalType` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-portal#portaltype) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java) |

<!-- source-guide -->
