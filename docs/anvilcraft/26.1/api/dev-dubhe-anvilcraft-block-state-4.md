# dev.dubhe.anvilcraft.block.state（Orientation 至 Vertical4PartHalf）



## Orientation

` public enum Orientation implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` NORTH_UP ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L9) |
| ` SOUTH_UP ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L10) |
| ` WEST_UP ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L11) |
| ` EAST_UP ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L12) |
| ` UP_NORTH ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L13) |
| ` UP_SOUTH ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L14) |
| ` UP_WEST ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L15) |
| ` UP_EAST ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L16) |
| ` DOWN_NORTH ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L17) |
| ` DOWN_SOUTH ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L18) |
| ` DOWN_WEST ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L19) |
| ` DOWN_EAST ` | 声明于枚举 ` Orientation ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L20) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L27) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L31) |
| ` public Orientation opposite() ` | 获取相反的方向 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L37) |
| ` public Orientation next() ` | 获取下一个的方向 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L55) |
| ` public Orientation rotate(Rotation rotation) ` | [调用处 Orientation.flipHorizontalIfVertical](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L133) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L72) |
| ` public Orientation flipHorizontalIfVertical() ` | 朝向上下时翻转水平方向 用于获取放置器假玩家的Orientation<br>末尾返回 ` switch (this) { case UP_NORTH, UP_SOUTH, UP_WEST, UP_EAST, DOWN_NORTH, DOWN_SOUTH, DOWN_WEST, DOWN_EAST -> this.rotate(Rotation.CLOCKWISE_180); default -> this; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L131) |
| ` public Orientation mirror(Mirror mirror) ` | 返回 ` Orientation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L138) |
| ` public Direction getDirection() ` | 获取对应的方向 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L170) |
| ` public float getYRotation() ` | 获取水平旋转 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L182) |
| ` public float getXRotation() ` | 获取垂直旋转<br>末尾返回 ` switch (this) { case NORTH_UP, SOUTH_UP, WEST_UP, EAST_UP -> 0; case UP_NORTH, UP_SOUTH, UP_WEST, UP_EAST -> -90; case DOWN_NORTH, DOWN_SOUTH, DOWN_WEST, DOWN_EAST -> 90; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L192) |
| ` public static Orientation[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L8) |
| ` public static Orientation valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Orientation.java#L8) |

## ReinforcedConcreteHalf

` public enum ReinforcedConcreteHalf implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ReinforcedConcreteHalf.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SINGLE ` | 声明于枚举 ` ReinforcedConcreteHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ReinforcedConcreteHalf.java#L6) |
| ` TOP ` | 声明于枚举 ` ReinforcedConcreteHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ReinforcedConcreteHalf.java#L7) |
| ` BOTTOM ` | 声明于枚举 ` ReinforcedConcreteHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ReinforcedConcreteHalf.java#L8) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ReinforcedConcreteHalf.java#L16) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ReinforcedConcreteHalf.java#L20) |
| ` public static ReinforcedConcreteHalf[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ReinforcedConcreteHalf.java#L5) |
| ` public static ReinforcedConcreteHalf valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/ReinforcedConcreteHalf.java#L5) |

## StoragePortType

` public enum StoragePortType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/StoragePortType.java#L9)

仓储端口的外观类型：端口连通组件接入的核心是潜影集装箱还是超维存储站。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` SHULKER_CONTAINER ` | 接入潜影集装箱（或未接入 / 接入多个核心） | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/StoragePortType.java#L11) |
| ` HYPERDIMENSION ` | 接入超维存储站 | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/StoragePortType.java#L13) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/StoragePortType.java#L22) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/StoragePortType.java#L9) |
| ` public static StoragePortType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/StoragePortType.java#L9) |
| ` public static StoragePortType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/StoragePortType.java#L9) |

## Vertical3PartHalf

` public enum Vertical3PartHalf implements ISimpleMultiPartBlockState<Vertical3PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` TOP ` | 声明于枚举 ` Vertical3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L7) |
| ` MID ` | 声明于枚举 ` Vertical3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L8) |
| ` BOTTOM ` | 声明于枚举 ` Vertical3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L9) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L23) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L27) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L5) |
| ` public int getOffsetX() ` | 末尾返回 ` this.offsetX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L5) |
| ` public int getOffsetY() ` | 末尾返回 ` this.offsetY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L5) |
| ` public int getOffsetZ() ` | 末尾返回 ` this.offsetZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L5) |
| ` public static Vertical3PartHalf[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 TransmissionPoleBlock.getParts](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/transmitting/TransmissionPoleBlock.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L5) |
| ` public static Vertical3PartHalf valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical3PartHalf.java#L5) |

## Vertical4PartHalf

` public enum Vertical4PartHalf implements ISimpleMultiPartBlockState<Vertical4PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` TOP ` | 声明于枚举 ` Vertical4PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L7) |
| ` MID_UPPER ` | 声明于枚举 ` Vertical4PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L8) |
| ` MID_LOWER ` | 声明于枚举 ` Vertical4PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L9) |
| ` BOTTOM ` | 声明于枚举 ` Vertical4PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L10) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L24) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L28) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L5) |
| ` public int getOffsetX() ` | 末尾返回 ` this.offsetX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L5) |
| ` public int getOffsetY() ` | 末尾返回 ` this.offsetY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L5) |
| ` public int getOffsetZ() ` | 末尾返回 ` this.offsetZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L5) |
| ` public static Vertical4PartHalf[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 TeslaTowerBlock.getParts](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/consumer/TeslaTowerBlock.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L5) |
| ` public static Vertical4PartHalf valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/state/Vertical4PartHalf.java#L5) |
