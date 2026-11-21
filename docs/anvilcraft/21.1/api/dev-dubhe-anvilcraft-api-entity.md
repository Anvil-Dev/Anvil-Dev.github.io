# dev.dubhe.anvilcraft.api.entity



## EntityHelper

` public class EntityHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/EntityHelper.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CompoundTag getCustomData(LivingEntity entity) ` | 末尾返回 ` entity.getPersistentData() `<br>[调用处 CrabClawItem.holdingCrabClawIncreasesRange](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/CrabClawItem.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/EntityHelper.java#L7) |
| ` public EntityHelper() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/EntityHelper.java#L6) |

## IAnvilCraftEntityExtension

` public interface IAnvilCraftEntityExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IAnvilCraftEntityExtension.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default GravityType anvilcraft$getGravityType() ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IAnvilCraftEntityExtension.java#L9) |
| ` default Vec3 anvilcraft$getAdditionalGravity(double baseGravity) ` | 末尾返回 ` Vec3.ZERO ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IAnvilCraftEntityExtension.java#L13) |
| ` default boolean anvilcraft$isMagnetized() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IAnvilCraftEntityExtension.java#L17) |
| ` default boolean anvilcraft$canCollisionCraft() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IAnvilCraftEntityExtension.java#L21) |
| ` default boolean anvilcraft$acceptMagnetization(Player player, ItemStack stack) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IAnvilCraftEntityExtension.java#L25) |

## IEntityCauldron

` public interface IEntityCauldron extends IFluidHandlerHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IEntityCauldron.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean anvilcraft$usesWholeCauldronFluidTransfers() ` | 流体管网是否应按原版炼药锅的整容器规则转移此实体中的内容。 使用普通储罐实现的实体炼药锅可覆写此方法，以允许任意数量的流体转移。<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IEntityCauldron.java#L10) |
| ` default boolean anvilcraft$isIgnited() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IEntityCauldron.java#L14) |
| ` default void anvilcraft$setIgnited(boolean ignited) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IEntityCauldron.java#L18) |

## IGenericAnvilEntity

` public interface IGenericAnvilEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IGenericAnvilEntity.java#L8)

动态或自定义铁砧实体可声明自己满足「泛铁砧」谓词。 dev.dubhe.anvilcraft.recipe.anvil.predicate.block.HasAnvil 仅在谓词未指定方块类型、 方块属性或 NBT 时询问此接口，因此不会误匹配专用铁砧配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean anvilcraft$isGenericAnvil() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IGenericAnvilEntity.java#L9) |

## IImpersonator

` public interface IImpersonator<T extends Entity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IImpersonator.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") boolean isValidMask(@Nullable Class<?> mask) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IImpersonator.java#L9) |
| ` T impersonate(LivingEntity entity) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/entity/IImpersonator.java#L12) |
