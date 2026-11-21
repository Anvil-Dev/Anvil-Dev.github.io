# dev.dubhe.anvilcraft.block.state（Color 至 Cube3x3PartHalf）



## Color

` public enum Color implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` WHITE ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L13) |
| ` LIGHT_GRAY ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L14) |
| ` GRAY ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L15) |
| ` BLACK ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L16) |
| ` BROWN ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L17) |
| ` RED ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L18) |
| ` ORANGE ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L19) |
| ` YELLOW ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L20) |
| ` LIME ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L21) |
| ` GREEN ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L22) |
| ` CYAN ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L23) |
| ` LIGHT_BLUE ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L24) |
| ` BLUE ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L25) |
| ` PURPLE ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L26) |
| ` MAGENTA ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L27) |
| ` PINK ` | 声明于枚举 ` Color ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L28) |
| ` public static final Codec<Color> CODEC ` | 初值 ` StringRepresentable.fromValues(Color::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L35) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L42) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L46) |
| ` @Nullable public static Color getColorByDyeItem(Item dyeItem) ` | ` (dyeItem == Items.BLACK_DYE) ` 成立时提前返回 ` BLACK ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L51) |
| ` public static Color getColorByIndex(int index) ` | ` (index >= 0 && index < values.length) ` 成立时提前返回 ` values[index] `<br>末尾返回 ` values[0] ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L90) |
| ` public Item dyeItem() ` | 末尾返回 ` this.dyeItem `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L11) |
| ` public static Color[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 ItemTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/ItemTooltipManager.java#L168) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L11) |
| ` public static Color valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Color.java#L11) |

## Cube323PartHalf

` public enum Cube323PartHalf implements ISimpleMultiPartBlockState<Cube323PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` BOTTOM_CENTER ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L12) |
| ` BOTTOM_W ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L13) |
| ` BOTTOM_E ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L14) |
| ` BOTTOM_N ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L15) |
| ` BOTTOM_S ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L16) |
| ` BOTTOM_NW ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L17) |
| ` BOTTOM_SW ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L18) |
| ` BOTTOM_NE ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L19) |
| ` BOTTOM_SE ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L20) |
| ` TOP_CENTER ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L21) |
| ` TOP_W ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L22) |
| ` TOP_E ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L23) |
| ` TOP_N ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L24) |
| ` TOP_S ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L25) |
| ` TOP_NW ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L26) |
| ` TOP_SW ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L27) |
| ` TOP_NE ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L28) |
| ` TOP_SE ` | 声明于枚举 ` Cube323PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L29) |
| ` @Nullable public static Cube323PartHalf findByOffset(int offsetX, int offsetY, int offsetZ) ` | 实现调用 ` Arrays.stream(Cube323PartHalf.values()).filter(part -> part.offsetX == offsetX) `<br>实现调用 ` Arrays.stream(Cube323PartHalf.values()) `<br>实现调用 ` Cube323PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L41) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L71) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L75) |
| ` public Cube323PartHalf rotate(Rotation rotation) ` | 末尾返回 ` switch (rotation) { case NONE -> this; case CLOCKWISE_90 -> this.clockwise90; case CLOCKWISE_180 -> this.clockwise180; case COUNTERCLOCKWISE_90 -> this.clockwise270; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L80) |
| ` public Cube323PartHalf mirror(Mirror mirror) ` | 末尾返回 ` switch (mirror) { case NONE -> this; case LEFT_RIGHT -> this.mirrorZ; case FRONT_BACK -> this.mirrorX; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L89) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public int getOffsetX() ` | 末尾返回 ` this.offsetX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public int getOffsetY() ` | 末尾返回 ` this.offsetY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public int getOffsetZ() ` | 末尾返回 ` this.offsetZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public Cube323PartHalf getClockwise90() ` | 末尾返回 ` this.clockwise90 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public Cube323PartHalf getClockwise180() ` | 末尾返回 ` this.clockwise180 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public Cube323PartHalf getClockwise270() ` | 末尾返回 ` this.clockwise270 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public Cube323PartHalf getMirrorX() ` | 末尾返回 ` this.mirrorX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public Cube323PartHalf getMirrorZ() ` | 末尾返回 ` this.mirrorZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public static Cube323PartHalf[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 CelestialForgingAnvilBlock.getParts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/CelestialForgingAnvilBlock.java#L160) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |
| ` public static Cube323PartHalf valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube323PartHalf.java#L10) |

## Cube3x3PartHalf

` public enum Cube3x3PartHalf implements ISimpleMultiPartBlockState<Cube3x3PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` BOTTOM_CENTER ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L12) |
| ` BOTTOM_W ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L13) |
| ` BOTTOM_E ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L14) |
| ` BOTTOM_N ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L15) |
| ` BOTTOM_S ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L16) |
| ` BOTTOM_WN ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L17) |
| ` BOTTOM_WS ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L18) |
| ` BOTTOM_EN ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L19) |
| ` BOTTOM_ES ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L20) |
| ` MID_CENTER ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L21) |
| ` MID_W ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L22) |
| ` MID_E ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L23) |
| ` MID_N ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L24) |
| ` MID_S ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L25) |
| ` MID_WN ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L26) |
| ` MID_WS ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L27) |
| ` MID_EN ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L28) |
| ` MID_ES ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L29) |
| ` TOP_CENTER ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L30) |
| ` TOP_W ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L31) |
| ` TOP_E ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L32) |
| ` TOP_N ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L33) |
| ` TOP_S ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L34) |
| ` TOP_WN ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L35) |
| ` TOP_WS ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L36) |
| ` TOP_EN ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L37) |
| ` TOP_ES ` | 声明于枚举 ` Cube3x3PartHalf ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L38) |
| ` @Nullable public static Cube3x3PartHalf findByOffset(int offsetX, int offsetY, int offsetZ) ` | 实现调用 ` Arrays.stream(Cube3x3PartHalf.values()).filter(part -> part.offsetX == offsetX) `<br>实现调用 ` Arrays.stream(Cube3x3PartHalf.values()) `<br>实现调用 ` Cube3x3PartHalf.values() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L50) |
| ` public String toString() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L80) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L84) |
| ` public Cube3x3PartHalf rotate(Rotation rotation) ` | 末尾返回 ` switch (rotation) { case NONE -> this; case CLOCKWISE_90 -> this.clockwise90; case CLOCKWISE_180 -> this.clockwise180; case COUNTERCLOCKWISE_90 -> this.clockwise270; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L89) |
| ` public Cube3x3PartHalf mirror(Mirror mirror) ` | 末尾返回 ` switch (mirror) { case NONE -> this; case LEFT_RIGHT -> this.mirrorZ; case FRONT_BACK -> this.mirrorX; } ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L98) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public int getOffsetX() ` | 末尾返回 ` this.offsetX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public int getOffsetY() ` | 末尾返回 ` this.offsetY `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public int getOffsetZ() ` | 末尾返回 ` this.offsetZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public Cube3x3PartHalf getClockwise90() ` | 末尾返回 ` this.clockwise90 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public Cube3x3PartHalf getClockwise180() ` | 末尾返回 ` this.clockwise180 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public Cube3x3PartHalf getClockwise270() ` | 末尾返回 ` this.clockwise270 `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public Cube3x3PartHalf getMirrorX() ` | 末尾返回 ` this.mirrorX `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public Cube3x3PartHalf getMirrorZ() ` | 末尾返回 ` this.mirrorZ `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public static Cube3x3PartHalf[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 Upgrade2HyperdimensionStationBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/Upgrade2HyperdimensionStationBehavior.java#L129) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
| ` public static Cube3x3PartHalf valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/state/Cube3x3PartHalf.java#L10) |
