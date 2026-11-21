# dev.dubhe.anvilcraft.block.decoration



## InstructBlock

` public class InstructBlock extends HorizontalDirectionalBlock implements IHammerRemovable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/InstructBlock.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InstructBlock(Properties properties) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.getStateDefinition().any().setValue(HorizontalDirectionalBlock.FACING, Direction.NORTH) `<br>实现调用 ` this.getStateDefinition().any() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/InstructBlock.java#L16) |
| ` @Override public BlockState rotate(BlockState state, Rotation rotation) ` | 末尾返回 ` state.setValue(HorizontalDirectionalBlock.FACING, rotation.rotate(state.getValue(HorizontalDirectionalBlock.FACING))) `<br>[调用处 InstructBlock.mirror](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/InstructBlock.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/InstructBlock.java#L32) |
| ` @Override public BlockState mirror(BlockState state, Mirror mirror) ` | 末尾返回 ` this.rotate(state, mirror.getRotation(state.getValue(HorizontalDirectionalBlock.FACING))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/InstructBlock.java#L37) |
| ` @Override public BlockState getStateForPlacement(BlockPlaceContext context) ` | 放置方块时根据点击位置、朝向和相邻状态决定初始 BlockState。<br>末尾返回 ` this.defaultBlockState() .setValue(HorizontalDirectionalBlock.FACING, context.getHorizontalDirection().getOpposite()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/InstructBlock.java#L42) |

## ReinforcedConcreteBlock

` public class ReinforcedConcreteBlock extends Block `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ReinforcedConcreteBlock.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnumProperty<ReinforcedConcreteHalf> HALF ` | 初值 ` EnumProperty.create("half", ReinforcedConcreteHalf.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ReinforcedConcreteBlock.java#L20) |
| ` public ReinforcedConcreteBlock(Properties properties, Color color) ` | 实现调用 ` super(properties) `<br>实现调用 ` this.stateDefinition.any().setValue(ReinforcedConcreteBlock.HALF, ReinforcedConcreteHalf.SINGLE) `<br>实现调用 ` this.stateDefinition.any() `<br>[调用处 ModBlocks.registerReinforcedConcreteBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModBlocks.java#L3925) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ReinforcedConcreteBlock.java#L24) |
| ` @Override public void tick( BlockState state, ServerLevel level, BlockPos pos, RandomSource random) ` | 执行 ` super.tick(state, level, pos, random) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ReinforcedConcreteBlock.java#L102) |
| ` public Color getColor() ` | 末尾返回 ` this.color `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/decoration/ReinforcedConcreteBlock.java#L19) |
