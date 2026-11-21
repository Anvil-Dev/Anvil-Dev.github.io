# dev.dubhe.anvilcraft.mixin.projectile



## AbstractArrowMixin

` public abstract class AbstractArrowMixin extends Projectile `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/projectile/AbstractArrowMixin.java#L28)

修正箭矢自带的方块射线和实体查询。 箭矢没有完全复用通用投掷物碰撞工具，因此需要同时裁剪 AbstractArrow#tick 中的方块射线、实体射线和实体查询包围盒。

类型注解 ` @Mixin(AbstractArrow.class) `


## AbstractHurtingProjectileMixin

` public abstract class AbstractHurtingProjectileMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/projectile/AbstractHurtingProjectileMixin.java#L10)

为火球类投射物应用所在维度的空气阻力。

类型注解 ` @Mixin(AbstractHurtingProjectile.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AbstractHurtingProjectileMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/projectile/AbstractHurtingProjectileMixin.java#L10) |

## ProjectileMixin

` public abstract class ProjectileMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/projectile/ProjectileMixin.java#L17)

环形加速器的通用投掷物速度修正。 投掷物进入原版 tick 前会先限制速度，避免超大移动向量使碰撞区段坐标溢出， 或让一次方块、实体碰撞查询扫描过大的范围。

类型注解 ` @Mixin(Projectile.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ProjectileMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/projectile/ProjectileMixin.java#L17) |

## ThrowableProjectileMixin

` public abstract class ThrowableProjectileMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/projectile/ThrowableProjectileMixin.java#L10)

为投掷物应用所在维度的空气阻力。

类型注解 ` @Mixin(ThrowableProjectile.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrowableProjectileMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/projectile/ThrowableProjectileMixin.java#L10) |

## ThrownEnderpearlMixin

` public abstract class ThrownEnderpearlMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/projectile/ThrownEnderpearlMixin.java#L17)

修正高速末影珍珠的传送落点。 原版在移动珍珠前先处理命中，并使用珍珠上一 tick 的坐标传送玩家。高速情况下 该坐标可能仍位于前一个偏转环，因此命中时先把珍珠的原始坐标更新到真实命中点。

类型注解 ` @Mixin(ThrownEnderpearl.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ThrownEnderpearlMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/projectile/ThrownEnderpearlMixin.java#L17) |
