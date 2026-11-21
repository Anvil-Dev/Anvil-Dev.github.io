# dev.dubhe.anvilcraft.block.state（FacingWithAxis 至 OpenedCube3x3PartHalf）



## FacingWithAxis

` public enum FacingWithAxis implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` UP_X ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L10) |
| ` DOWN_X ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L11) |
| ` NORTH_X ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L12) |
| ` SOUTH_X ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L13) |
| ` UP_Z ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L14) |
| ` DOWN_Z ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L15) |
| ` WEST_Z ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L16) |
| ` EAST_Z ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L17) |
| ` NORTH_Y ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L18) |
| ` SOUTH_Y ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L19) |
| ` WEST_Y ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L20) |
| ` EAST_Y ` | 声明于枚举 ` FacingWithAxis ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L21) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L35) |
| ` public static FacingWithAxis of(Direction facing, Direction.Axis axis) ` | 末尾返回 ` FacingWithAxis.NORTH_X `<br>[调用处 BlockComparatorBlock.getStateForPlacement](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/redstone/BlockComparatorBlock.java#L142) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L40) |
| ` public FacingWithAxis rotate(Rotation rotation) ` | 末尾返回 ` FacingWithAxis.of(newFacing, newAxis) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L49) |
| ` public FacingWithAxis mirror(Mirror mirror) ` | 末尾返回 ` FacingWithAxis.of(mirror.mirror(this.facing), this.axis) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L56) |
| ` public FacingWithAxis toggleAxis() ` | 返回 ` FacingWithAxis ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L60) |
| ` public Direction getFacing() ` | 末尾返回 ` this.facing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L9) |
| ` public Direction.Axis getAxis() ` | 末尾返回 ` this.axis `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L9) |
| ` public static FacingWithAxis[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 FacingWithAxis.of](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L9) |
| ` public static FacingWithAxis valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FacingWithAxis.java#L9) |

## FragmentationDegree

` public enum FragmentationDegree implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ZERO ` | 声明于枚举 ` FragmentationDegree ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L8) |
| ` ONE ` | 声明于枚举 ` FragmentationDegree ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L9) |
| ` TWO ` | 声明于枚举 ` FragmentationDegree ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L10) |
| ` THREE ` | 声明于枚举 ` FragmentationDegree ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L11) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L19) |
| ` public FragmentationDegree next() ` | 末尾返回 ` switch (this) { case ZERO -> FragmentationDegree.ONE; case ONE -> FragmentationDegree.TWO; case TWO, THREE -> FragmentationDegree.THREE; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L24) |
| ` public String getValue() ` | 末尾返回 ` this.value `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L6) |
| ` public static FragmentationDegree[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L6) |
| ` public static FragmentationDegree valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/FragmentationDegree.java#L6) |

## GiantAnvilCube

` public enum GiantAnvilCube implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` CORNER ` | 声明于枚举 ` GiantAnvilCube ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L6) |
| ` CENTER ` | 声明于枚举 ` GiantAnvilCube ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L7) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L15) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L19) |
| ` public static GiantAnvilCube[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L5) |
| ` public static GiantAnvilCube valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L5) |

## IFlexibleMultiPartBlockState

` public interface IFlexibleMultiPartBlockState<E, T extends Comparable<T>> extends StringRepresentable, Comparable<E> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L7)

多方块方块状态

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int getOffsetX(T value) ` | [调用处 IFlexibleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L8) |
| ` int getOffsetY(T value) ` | [调用处 IFlexibleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L10) |
| ` int getOffsetZ(T value) ` | [调用处 IFlexibleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L12) |
| ` boolean isMain() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L14) |
| ` default Vec3i getOffset(T value) ` | 末尾返回 ` new Vec3i(this.getOffsetX(value), this.getOffsetY(value), this.getOffsetZ(value)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L16) |

## ISimpleMultiPartBlockState

` public interface ISimpleMultiPartBlockState<T> extends StringRepresentable, Comparable<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L7)

多方块方块状态

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int getOffsetX() ` | [调用处 ISimpleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L8) |
| ` int getOffsetY() ` | [调用处 ISimpleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L10) |
| ` int getOffsetZ() ` | [调用处 ISimpleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L15) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L12) |
| ` default Vec3i getOffset() ` | 末尾返回 ` new Vec3i(this.getOffsetX(), this.getOffsetY(), this.getOffsetZ()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L14) |

## IrradiatorType

` public enum IrradiatorType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NEUTRON ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L7) |
| ` ENERGY ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L8) |
| ` MASS ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L9) |
| ` SPACE ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L10) |
| ` TIME ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L11) |
| ` @Override public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L20) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L25) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L6) |
| ` public static IrradiatorType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L6) |
| ` public static IrradiatorType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L6) |

## LensType

` public enum LensType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NONE ` | 声明于枚举 ` LensType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L8) |
| ` ROYAL ` | 声明于枚举 ` LensType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L9) |
| ` FROST ` | 声明于枚举 ` LensType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L10) |
| ` EMBER ` | 声明于枚举 ` LensType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L11) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L22) |
| ` public BlockMiningEffect getMiningEffect() ` | 末尾返回 ` this.miningEffect `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L7) |
| ` public static LensType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 CreativeLaserBlockEntity.loadAdditional](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeLaserBlockEntity.java#L152) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L7) |
| ` public static LensType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L7) |

## LightColor

` public enum LightColor implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` PRIMARY ` | 声明于枚举 ` LightColor ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L6) |
| ` PINK ` | 声明于枚举 ` LightColor ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L7) |
| ` DARK ` | 声明于枚举 ` LightColor ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L8) |
| ` YELLOW ` | 声明于枚举 ` LightColor ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L9) |
| ` public final String name ` | 字段类型为 ` String ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L11) |
| ` public final int dissipation ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L12) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L19) |
| ` public static LightColor[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L5) |
| ` public static LightColor valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L5) |

## OpenedCube3x3PartHalf

` public enum OpenedCube3x3PartHalf implements IFlexibleMultiPartBlockState<OpenedCube3x3PartHalf, Boolean>, ISimpleMultiPartBlockState<OpenedCube3x3PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` BOTTOM_CENTER ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L14) |
| ` BOTTOM_W ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L15) |
| ` BOTTOM_E ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L16) |
| ` BOTTOM_N ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L17) |
| ` BOTTOM_S ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L18) |
| ` BOTTOM_NW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L19) |
| ` BOTTOM_SW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L20) |
| ` BOTTOM_NE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L21) |
| ` BOTTOM_SE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L22) |
| ` MID_CENTER ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L23) |
| ` MID_W ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L24) |
| ` MID_E ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L25) |
| ` MID_N ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L26) |
| ` MID_S ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L27) |
| ` MID_NW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L28) |
| ` MID_SW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L29) |
| ` MID_NE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L30) |
| ` MID_SE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L31) |
| ` TOP_CENTER ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L32) |
| ` TOP_W ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L33) |
| ` TOP_E ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L34) |
| ` TOP_N ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L35) |
| ` TOP_S ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L36) |
| ` TOP_NW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L37) |
| ` TOP_SW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L38) |
| ` TOP_NE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L39) |
| ` TOP_SE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L40) |
| ` @Nullable public static OpenedCube3x3PartHalf findByOffset(int offsetX, int offsetY, int offsetZ) ` | 实现调用 ` Arrays.stream(OpenedCube3x3PartHalf.values()).filter(part -> part.offsetX == offsetX) `<br>实现调用 ` Arrays.stream(OpenedCube3x3PartHalf.values()) `<br>实现调用 ` OpenedCube3x3PartHalf.values() `<br>[调用处 OpenedCube3x3PartHalf](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L52) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L87) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L91) |
| ` public OpenedCube3x3PartHalf rotate(Rotation rotation) ` | 末尾返回 ` switch (rotation) { case NONE -> this; case CLOCKWISE_90 -> this.clockwise90; case CLOCKWISE_180 -> this.clockwise180; case COUNTERCLOCKWISE_90 -> this.clockwise270; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L96) |
| ` public OpenedCube3x3PartHalf mirror(Mirror mirror) ` | 末尾返回 ` switch (mirror) { case NONE -> this; case LEFT_RIGHT -> this.mirrorZ; case FRONT_BACK -> this.mirrorX; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L105) |
| ` @Override public int getOffsetX(Boolean value) ` | 末尾返回 ` this.offsetX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L113) |
| ` @Override public int getOffsetY(Boolean value) ` | 末尾返回 ` this.offsetY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L118) |
| ` @Override public int getOffsetZ(Boolean value) ` | 末尾返回 ` this.offsetZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L123) |
| ` @Override public boolean isMain() ` | 末尾返回 ` this == OpenedCube3x3PartHalf.BOTTOM_CENTER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L128) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public int getOffsetX() ` | 末尾返回 ` this.offsetX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public int getOffsetY() ` | 末尾返回 ` this.offsetY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public int getOffsetZ() ` | 末尾返回 ` this.offsetZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public OpenedCube3x3PartHalf getClockwise90() ` | 末尾返回 ` this.clockwise90 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public OpenedCube3x3PartHalf getClockwise180() ` | 末尾返回 ` this.clockwise180 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public OpenedCube3x3PartHalf getClockwise270() ` | 末尾返回 ` this.clockwise270 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public OpenedCube3x3PartHalf getMirrorX() ` | 末尾返回 ` this.mirrorX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public OpenedCube3x3PartHalf getMirrorZ() ` | 末尾返回 ` this.mirrorZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public static OpenedCube3x3PartHalf[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 ShulkerContainerBlock.getParts](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L97) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
| ` public static OpenedCube3x3PartHalf valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L11) |
