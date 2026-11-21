# dev.dubhe.anvilcraft.api.injection.entity



## IEntityExtension

` public interface IEntityExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IEntityExtension.java#L11)

用于实体mixin中获取实体是否被转向环转向的接口

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable default GravityManager.OrbitalMotion anvilcraft$getOrbitalMotion() ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IEntityExtension.java#L12) |
| ` default boolean anvilcraft$isDeflected() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IEntityExtension.java#L17) |
| ` default Vec3 anvilcraft$getFixedDeltaMovement() ` | 末尾返回 ` Vec3.ZERO ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IEntityExtension.java#L21) |

## IExperienceOrbExtension

` public interface IExperienceOrbExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IExperienceOrbExtension.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean anvilcraft$getDiscarded() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IExperienceOrbExtension.java#L4) |
| ` default void anvilcraft$poach() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IExperienceOrbExtension.java#L8) |

## IFallingBlockEntityExtension

` public interface IFallingBlockEntityExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IFallingBlockEntityExtension.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default float anvilcraft$getFallDistance() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IFallingBlockEntityExtension.java#L4) |
| ` default boolean anvilcraft$isSpectral() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IFallingBlockEntityExtension.java#L8) |

## IItemEntityExtension

` public interface IItemEntityExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IItemEntityExtension.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default void anvilcraft$setIsAdsorbable(boolean value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IItemEntityExtension.java#L4) |
| ` default boolean anvilcraft$isAdsorbable() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IItemEntityExtension.java#L8) |
| ` default boolean anvilcraft$getDiscarded() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IItemEntityExtension.java#L12) |
| ` default void anvilcraft$setMergeCooldown(int cooldown) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IItemEntityExtension.java#L16) |
| ` default void anvilcraft$setShouldPoach(boolean shouldPoach) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IItemEntityExtension.java#L20) |
| ` default void anvilcraft$poach() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/entity/IItemEntityExtension.java#L24) |
