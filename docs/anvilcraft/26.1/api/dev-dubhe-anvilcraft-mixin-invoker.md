# dev.dubhe.anvilcraft.mixin.invoker



## BaseMappedRegistryInvoker

` public interface BaseMappedRegistryInvoker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BaseMappedRegistryInvoker.java#L7)

类型注解 ` @SuppressWarnings("UnstableApiUsage") `、` @Mixin(BaseMappedRegistry.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker void invokeSetSync(boolean sync) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BaseMappedRegistryInvoker.java#L10) |

## BlockBehaviourInvoker

` public interface BlockBehaviourInvoker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BlockBehaviourInvoker.java#L12)

类型注解 ` @Mixin(BlockBehaviour.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker @Nullable MenuProvider invokeGetMenuProvider(BlockState state, Level level, BlockPos pos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BlockBehaviourInvoker.java#L14) |

## BlockItemInvoker

` public interface BlockItemInvoker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BlockItemInvoker.java#L10)

BlockItemInvoker

类型注解 ` @Mixin(BlockItem.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker("getPlacementState") BlockState invokerGetPlacementState(BlockPlaceContext blockPlaceContext) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BlockItemInvoker.java#L12) |
