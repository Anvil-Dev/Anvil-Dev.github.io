# 图腾与致死保护

需要给物品添加一次性免死效果时，注册 `TotemHandler`。每次触发都由 `LivingEntity` 的死亡保护检查驱动，处理器直接拿到受伤实体和图腾栈。平时佩戴产生的持续效果见[护符](../amulets/)。

- [实现图腾并注册](./handler)包含一枚只在着火伤害下生效的余烬符和完整注册代码。
- [手持、口袋与护符盒](./box)说明多个候选的检查顺序、盒内委托及内置图腾的适用范围。

[图腾管理器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java) · [致死保护调用点](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java)
