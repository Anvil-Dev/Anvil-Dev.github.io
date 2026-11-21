# dev.dubhe.anvilcraft.mixin.invoker



## BlockBehaviourInvoker

` public interface BlockBehaviourInvoker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BlockBehaviourInvoker.java#L13)

类型注解 ` @Mixin(BlockBehaviour.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker @Nullable MenuProvider invokeGetMenuProvider(BlockState state, Level level, BlockPos pos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BlockBehaviourInvoker.java#L15) |

## BlockItemInvoker

` public interface BlockItemInvoker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BlockItemInvoker.java#L12)

BlockItemInvoker

类型注解 ` @Mixin(BlockItem.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker("getPlacementState") BlockState invokerGetPlacementState(BlockPlaceContext blockPlaceContext) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/invoker/BlockItemInvoker.java#L14) |
