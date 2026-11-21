# dev.dubhe.anvilcraft.api.injection.block.state



## IBlockStateExtension

` public interface IBlockStateExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/block/state/IBlockStateExtension.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean anvilcraft$canStickTo(BlockPos pos, BlockPos otherPos, BlockState other) ` | Determines if this block can stick to another block when pushed by a piston.<br>参数 ` pos ` My pos<br>参数 ` otherPos ` Other pos<br>参数 ` other ` Other state<br>返回 True to link blocks<br>末尾返回 ` this.self().getBlock().anvilcraft$canStickTo(pos, this.self(), otherPos, other) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/injection/block/state/IBlockStateExtension.java#L19) |
