# dev.dubhe.anvilcraft.block.workstation（TransparentCraftingTableBlock.Type 至 UnpackingTableBlock）



## TransparentCraftingTableBlock.Type

` public enum Type implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L246)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SINGLE ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L247) |
| ` CENTER ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L248) |
| ` SIDE_NORTH ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L249) |
| ` SIDE_EAST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L250) |
| ` SIDE_SOUTH ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L251) |
| ` SIDE_WEST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L252) |
| ` CORNER_NORTH_WEST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L253) |
| ` CORNER_NORTH_EAST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L254) |
| ` CORNER_SOUTH_WEST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L255) |
| ` CORNER_SOUTH_EAST ` | 声明于枚举 ` TransparentCraftingTableBlock.Type ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L256) |
| ` public static final Type[][] LOOKUP ` | 初值 ` { { Type.CORNER_NORTH_WEST, Type.SIDE_WEST, Type.CORNER_SOUTH_WEST }, { Type.SIDE_NORTH, Type.CENTER, Type.SIDE_SOUTH }, { Type.CORNER_NORTH_EAST, Type.SIDE_EAST, Type.CORNER_SOUTH_EAST } } ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L258) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.serializedName `<br>[调用处 TransparentCraftingTableBlock.Type.toString](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L289) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L282) |
| ` @Override public String toString() ` | 末尾返回 ` this.getSerializedName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L287) |
| ` public static Type[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L246) |
| ` public static Type valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/TransparentCraftingTableBlock.java#L246) |

## UnpackingTableBlock

` public class UnpackingTableBlock extends ProcessingTableBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/UnpackingTableBlock.java#L13)

拆包台：在台面上放置原料，铁砧砸落时执行拆包配方。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UnpackingTableBlock(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/UnpackingTableBlock.java#L14) |
| ` @Override public @Nullable BlockEntity newBlockEntity(BlockPos pos, BlockState state) ` | 为指定位置和状态创建方块实体。<br>末尾返回 ` ModBlockEntities.UNPACKING_TABLE.create(pos, state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/UnpackingTableBlock.java#L18) |
