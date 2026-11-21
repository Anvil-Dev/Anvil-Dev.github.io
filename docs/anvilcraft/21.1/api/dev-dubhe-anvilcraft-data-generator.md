# dev.dubhe.anvilcraft.data.generator



## PipeBlockStateGenerator

` public class PipeBlockStateGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/PipeBlockStateGenerator.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T extends Block> void pipeStraightBlock(DataGenContext<Block, T> ctx, RegistrumBlockstateProvider provider) ` | 执行 ` pipeStraightBlock(ctx, provider, "pipe_straight", "pipe_no_end", "pipe_end") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/PipeBlockStateGenerator.java#L27) |
| ` public static <T extends Block> void glassPipeStraightBlock(DataGenContext<Block, T> ctx, RegistrumBlockstateProvider provider) ` | 执行 ` pipeStraightBlock(ctx, provider, "glass_pipe_straight", "glass_pipe_no_end", "glass_pipe_end") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/PipeBlockStateGenerator.java#L157) |
| ` public static <T extends Block> void pipeCornerBlock(DataGenContext<Block, T> ctx, RegistrumBlockstateProvider provider) ` | 执行 ` pipeCornerBlock(ctx, provider, "pipe_side_corner", "pipe_no_end", "pipe_end") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/PipeBlockStateGenerator.java#L161) |
| ` public static <T extends Block> void glassPipeCornerBlock(DataGenContext<Block, T> ctx, RegistrumBlockstateProvider provider) ` | 执行 ` pipeCornerBlock(ctx, provider, "glass_pipe_side_corner", "glass_pipe_no_end", "glass_pipe_end") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/PipeBlockStateGenerator.java#L390) |
| ` public static <T extends Block> void pipeNodeBlock(DataGenContext<Block, T> ctx, RegistrumBlockstateProvider provider) ` | 执行 ` pipeNodeBlock(ctx, provider, "pipe_node", "pipe_no_end", "pipe_end") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/PipeBlockStateGenerator.java#L394) |
| ` public static <T extends Block> void glassPipeNodeBlock(DataGenContext<Block, T> ctx, RegistrumBlockstateProvider provider) ` | 执行 ` pipeNodeBlock(ctx, provider, "glass_pipe_node", "glass_pipe_no_end", "glass_pipe_end") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/PipeBlockStateGenerator.java#L497) |
| ` public PipeBlockStateGenerator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/PipeBlockStateGenerator.java#L26) |

## RedstoneWireBlockStateGenerator

` public class RedstoneWireBlockStateGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/RedstoneWireBlockStateGenerator.java#L22)

生成红石导线六种附着方向及四向连接组合使用的 multipart 方块状态和部件模型。 模型先在统一的“附着面局部坐标系”中描述，再转换到世界方块坐标，因此不需要手工维护六套几何数据。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T extends Block> void generate( DataGenContext<Block, T> context, RegistrumBlockstateProvider provider ) ` | 为红石导线注册中心点、平面线段、跨面拐角和爬升线段的 multipart 条件。<br>实现调用 ` provider.getMultipartBuilder(context.get()) `<br>实现调用 ` context.get() `<br>实现调用 ` Direction.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/RedstoneWireBlockStateGenerator.java#L24) |
| ` public RedstoneWireBlockStateGenerator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/generator/RedstoneWireBlockStateGenerator.java#L22) |
