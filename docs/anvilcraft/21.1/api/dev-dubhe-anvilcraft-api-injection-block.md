# dev.dubhe.anvilcraft.api.injection.block



## IBlockExtension

` public interface IBlockExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/block/IBlockExtension.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean anvilcraft$canStickTo(BlockPos pos, BlockState state, BlockPos otherPos, BlockState other) ` | Determines if this block can stick to another block when pushed by a piston.<br>参数 ` pos ` My pos<br>参数 ` state ` My state<br>参数 ` otherPos ` Other pos<br>参数 ` other ` Other state<br>返回 True to link blocks<br>末尾返回 ` this.self().canStickTo(state, other) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/block/IBlockExtension.java#L21) |

## IBuddingAmethystBlockExtension

` public interface IBuddingAmethystBlockExtension extends IBrokenCrystalsBudding `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/block/IBuddingAmethystBlockExtension.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default void anvilcraft$tryGrowBuds(Level level, BlockPos pos, BlockState state) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/block/IBuddingAmethystBlockExtension.java#L11) |
| ` @Override default void anvilcraft$tryBreakClusters(Level level, BlockPos pos, BlockState state, BiConsumer<BlockPos, BlockState> breaker) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/block/IBuddingAmethystBlockExtension.java#L16) |

## IGrowingPlantBlockGetter

` public interface IGrowingPlantBlockGetter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/block/IGrowingPlantBlockGetter.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default Direction anvilcraft$getGrowthDirection() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/block/IGrowingPlantBlockGetter.java#L6) |
