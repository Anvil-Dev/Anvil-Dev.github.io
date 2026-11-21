# dev.dubhe.anvilcraft.data.generator



## LargeCauldronBlockStateGenerator

` public class LargeCauldronBlockStateGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/generator/LargeCauldronBlockStateGenerator.java#L14)

生成大炼药锅渲染器使用的双贴图火焰模型。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void generate(DataGenContext<Block, LargeCauldronBlock> context, RegistrumBlockModelGenerator provider) ` | 保留主方块的现有模型与方块状态，仅生成独立火焰模型。<br>实现调用 ` TextureSlot.create("0") `<br>实现调用 ` TextureSlot.create("1") `<br>实现调用 ` provider.getBuilder() .parent(AnvilCraft.of("block/fire_cauldron_fire4")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/generator/LargeCauldronBlockStateGenerator.java#L18) |
| ` public LargeCauldronBlockStateGenerator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/generator/LargeCauldronBlockStateGenerator.java#L14) |

## RedstoneWireBlockStateGenerator

` public class RedstoneWireBlockStateGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/generator/RedstoneWireBlockStateGenerator.java#L25)

生成红石导线六种附着方向及四向连接组合使用的 multipart 方块状态和部件模型。 模型先在统一的“附着面局部坐标系”中描述，再转换到世界方块坐标，因此不需要手工维护六套几何数据。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T extends Block> void generate( DataGenContext<Block, T> context, RegistrumBlockModelGenerator provider ) ` | 为红石导线注册中心点、平面线段、跨面拐角和爬升线段的 multipart 条件。<br>实现调用 ` MultiPartGenerator.multiPart(context.get()) `<br>实现调用 ` context.get() `<br>实现调用 ` Direction.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/generator/RedstoneWireBlockStateGenerator.java#L30) |
| ` public RedstoneWireBlockStateGenerator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/generator/RedstoneWireBlockStateGenerator.java#L25) |
