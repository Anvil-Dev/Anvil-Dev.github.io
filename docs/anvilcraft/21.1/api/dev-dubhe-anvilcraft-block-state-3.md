# dev.dubhe.anvilcraft.block.state（GiantAnvilCube 至 Orientation）



## GiantAnvilCube

` public enum GiantAnvilCube implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` CORNER ` | 声明于枚举 ` GiantAnvilCube ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L6) |
| ` CENTER ` | 声明于枚举 ` GiantAnvilCube ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L7) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L15) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L19) |
| ` public static GiantAnvilCube[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L5) |
| ` public static GiantAnvilCube valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/GiantAnvilCube.java#L5) |

## IFlexibleMultiPartBlockState

` public interface IFlexibleMultiPartBlockState<E, T extends Comparable<T>> extends StringRepresentable, Comparable<E> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L9)

多方块方块状态

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int getOffsetX(T value) ` | [调用处 IFlexibleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L10) |
| ` int getOffsetY(T value) ` | [调用处 IFlexibleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L12) |
| ` int getOffsetZ(T value) ` | [调用处 IFlexibleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L14) |
| ` boolean isMain() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L16) |
| ` default Vec3i getOffset(T value) ` | 末尾返回 ` new Vec3i(this.getOffsetX(value), this.getOffsetY(value), this.getOffsetZ(value)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IFlexibleMultiPartBlockState.java#L18) |

## ISimpleMultiPartBlockState

` public interface ISimpleMultiPartBlockState<T> extends StringRepresentable, Comparable<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L9)

多方块方块状态

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int getOffsetX() ` | [调用处 ISimpleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L10) |
| ` int getOffsetY() ` | [调用处 ISimpleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L12) |
| ` int getOffsetZ() ` | [调用处 ISimpleMultiPartBlockState.getOffset](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L14) |
| ` default Vec3i getOffset() ` | 末尾返回 ` new Vec3i(this.getOffsetX(), this.getOffsetY(), this.getOffsetZ()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/ISimpleMultiPartBlockState.java#L16) |

## IrradiatorType

` public enum IrradiatorType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NEUTRON ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L7) |
| ` ENERGY ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L8) |
| ` MASS ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L9) |
| ` SPACE ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L10) |
| ` TIME ` | 声明于枚举 ` IrradiatorType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L11) |
| ` @Override public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L20) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L25) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L6) |
| ` public static IrradiatorType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L6) |
| ` public static IrradiatorType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/IrradiatorType.java#L6) |

## LensType

` public enum LensType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NONE ` | 声明于枚举 ` LensType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L8) |
| ` ROYAL ` | 声明于枚举 ` LensType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L9) |
| ` FROST ` | 声明于枚举 ` LensType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L10) |
| ` EMBER ` | 声明于枚举 ` LensType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L11) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L22) |
| ` public BlockMiningEffect getMiningEffect() ` | 末尾返回 ` this.miningEffect `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L7) |
| ` public static LensType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 CreativeLaserBlockEntity.loadAdditional](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeLaserBlockEntity.java#L150) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L7) |
| ` public static LensType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LensType.java#L7) |

## LightColor

` public enum LightColor implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` PRIMARY ` | 声明于枚举 ` LightColor ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L6) |
| ` PINK ` | 声明于枚举 ` LightColor ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L7) |
| ` DARK ` | 声明于枚举 ` LightColor ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L8) |
| ` YELLOW ` | 声明于枚举 ` LightColor ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L9) |
| ` public final String name ` | 字段类型为 ` String ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L11) |
| ` public final int dissipation ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L12) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L19) |
| ` public static LightColor[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L5) |
| ` public static LightColor valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/LightColor.java#L5) |

## OpenedCube3x3PartHalf

` public enum OpenedCube3x3PartHalf implements IFlexibleMultiPartBlockState<OpenedCube3x3PartHalf, Boolean>, ISimpleMultiPartBlockState<OpenedCube3x3PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` BOTTOM_CENTER ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L15) |
| ` BOTTOM_W ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L16) |
| ` BOTTOM_E ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L17) |
| ` BOTTOM_N ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L18) |
| ` BOTTOM_S ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L19) |
| ` BOTTOM_NW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L20) |
| ` BOTTOM_SW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L21) |
| ` BOTTOM_NE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L22) |
| ` BOTTOM_SE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L23) |
| ` MID_CENTER ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L24) |
| ` MID_W ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L25) |
| ` MID_E ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L26) |
| ` MID_N ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L27) |
| ` MID_S ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L28) |
| ` MID_NW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L29) |
| ` MID_SW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L30) |
| ` MID_NE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L31) |
| ` MID_SE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L32) |
| ` TOP_CENTER ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L33) |
| ` TOP_W ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L34) |
| ` TOP_E ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L35) |
| ` TOP_N ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L36) |
| ` TOP_S ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L37) |
| ` TOP_NW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L38) |
| ` TOP_SW ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L39) |
| ` TOP_NE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L40) |
| ` TOP_SE ` | 声明于枚举 ` OpenedCube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L41) |
| ` @Nullable public static OpenedCube3x3PartHalf findByOffset(int offsetX, int offsetY, int offsetZ) ` | 实现调用 ` Arrays.stream(OpenedCube3x3PartHalf.values()).filter(part -> part.offsetX == offsetX) `<br>实现调用 ` Arrays.stream(OpenedCube3x3PartHalf.values()) `<br>实现调用 ` OpenedCube3x3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L53) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L83) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L87) |
| ` public OpenedCube3x3PartHalf rotate(Rotation rotation) ` | 实现调用 ` Objects.requireNonNull(this.clockwise90) `<br>实现调用 ` Objects.requireNonNull(this.clockwise180) `<br>实现调用 ` Objects.requireNonNull(this.clockwise270) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L92) |
| ` public OpenedCube3x3PartHalf mirror(Mirror mirror) ` | 末尾返回 ` switch (mirror) { case NONE -> this; case LEFT_RIGHT -> Objects.requireNonNull(this.mirrorZ); case FRONT_BACK -> Objects.requireNonNull(this.mirrorX); } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L101) |
| ` @Override public int getOffsetX(Boolean value) ` | 末尾返回 ` this.offsetX ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L109) |
| ` @Override public int getOffsetY(Boolean value) ` | 末尾返回 ` this.offsetY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L114) |
| ` @Override public int getOffsetZ(Boolean value) ` | 末尾返回 ` this.offsetZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L119) |
| ` @Override public boolean isMain() ` | 末尾返回 ` this == OpenedCube3x3PartHalf.BOTTOM_CENTER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L124) |
| ` public BlockPos fromMain(BlockPos pos) ` | 末尾返回 ` pos.offset(this.offsetX, this.offsetY, this.offsetZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L129) |
| ` public BlockPos toMain(BlockPos pos) ` | 末尾返回 ` pos.offset(-this.offsetX, -this.offsetY, -this.offsetZ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L133) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` public int getOffsetX() ` | 末尾返回 ` this.offsetX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` public int getOffsetY() ` | 末尾返回 ` this.offsetY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` public int getOffsetZ() ` | 末尾返回 ` this.offsetZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` @Nullable public OpenedCube3x3PartHalf getClockwise90() ` | 末尾返回 ` this.clockwise90 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` @Nullable public OpenedCube3x3PartHalf getClockwise180() ` | 末尾返回 ` this.clockwise180 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` @Nullable public OpenedCube3x3PartHalf getClockwise270() ` | 末尾返回 ` this.clockwise270 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` @Nullable public OpenedCube3x3PartHalf getMirrorX() ` | 末尾返回 ` this.mirrorX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` @Nullable public OpenedCube3x3PartHalf getMirrorZ() ` | 末尾返回 ` this.mirrorZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` public static OpenedCube3x3PartHalf[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 ShulkerContainerBlock.getParts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/container/storage/ShulkerContainerBlock.java#L227) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |
| ` public static OpenedCube3x3PartHalf valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/OpenedCube3x3PartHalf.java#L12) |

## Orientation

` public enum Orientation implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NORTH_UP ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L9) |
| ` SOUTH_UP ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L10) |
| ` WEST_UP ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L11) |
| ` EAST_UP ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L12) |
| ` UP_NORTH ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L13) |
| ` UP_SOUTH ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L14) |
| ` UP_WEST ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L15) |
| ` UP_EAST ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L16) |
| ` DOWN_NORTH ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L17) |
| ` DOWN_SOUTH ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L18) |
| ` DOWN_WEST ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L19) |
| ` DOWN_EAST ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L20) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L27) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L31) |
| ` public Orientation opposite() ` | 获取相反的方向 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L39) |
| ` public Orientation next() ` | 获取下一个的方向 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L59) |
| ` public Orientation rotate(Rotation rotation) ` | [调用处 Orientation.flipHorizontalIfVertical](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L76) |
| ` public Orientation flipHorizontalIfVertical() ` | 朝向上下时翻转水平方向 用于获取放置器假玩家的Orientation<br>末尾返回 ` switch (this) { case UP_NORTH, UP_SOUTH, UP_WEST, UP_EAST, DOWN_NORTH, DOWN_SOUTH, DOWN_WEST, DOWN_EAST -> this.rotate(Rotation.CLOCKWISE_180); default -> this; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L137) |
| ` public Orientation mirror(Mirror mirror) ` | 返回 ` Orientation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L144) |
| ` public Direction getDirection() ` | 获取对应的方向 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L178) |
| ` public float getYRotation() ` | 获取水平旋转 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L192) |
| ` public float getXRotation() ` | 获取垂直旋转<br>末尾返回 ` switch (this) { case NORTH_UP, SOUTH_UP, WEST_UP, EAST_UP -> 0; case UP_NORTH, UP_SOUTH, UP_WEST, UP_EAST -> -90; case DOWN_NORTH, DOWN_SOUTH, DOWN_WEST, DOWN_EAST -> 90; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L204) |
| ` public static Orientation[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L8) |
| ` public static Orientation valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L8) |
