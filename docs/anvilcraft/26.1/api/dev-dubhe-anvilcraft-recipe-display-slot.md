# dev.dubhe.anvilcraft.recipe.display.slot



## CannedFoodSlotDemo

` public record CannedFoodSlotDemo(SlotDisplay foods, SlotDisplay cannedFood) implements SlotDisplay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SlotDisplay.Type<CannedFoodSlotDemo> TYPE ` | 字段类型为 ` SlotDisplay.Type<CannedFoodSlotDemo> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L15) |
| ` @Override public <T> Stream<T> resolve(ContextMap context, DisplayContentsFactory<T> builder) ` | 末尾返回 ` SlotDisplay.applyDemoTransformation(context, builder, this.cannedFood, this.foods, CannedFoodSlotDemo::canFood) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L33) |
| ` @Override public Type<CannedFoodSlotDemo> type() ` | 末尾返回 ` CannedFoodSlotDemo.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L44) |
| ` public CannedFoodSlotDemo(SlotDisplay foods, SlotDisplay cannedFood) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L14) |
| ` public SlotDisplay foods() ` | 读取 record 分量 ` foods ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L14) |
| ` public SlotDisplay cannedFood() ` | 读取 record 分量 ` cannedFood ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/CannedFoodSlotDemo.java#L14) |

## PillSlotDemo

` public record PillSlotDemo(SlotDisplay potions, SlotDisplay pill) implements SlotDisplay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Type<PillSlotDemo> TYPE ` | 字段类型为 ` Type<PillSlotDemo> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L14) |
| ` @Override public <T> Stream<T> resolve(ContextMap context, DisplayContentsFactory<T> builder) ` | 末尾返回 ` SlotDisplay.applyDemoTransformation(context, builder, this.potions, this.pill, PillSlotDemo::canFood) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L32) |
| ` @Override public Type<PillSlotDemo> type() ` | 末尾返回 ` PillSlotDemo.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L43) |
| ` public PillSlotDemo(SlotDisplay potions, SlotDisplay pill) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L13) |
| ` public SlotDisplay potions() ` | 读取 record 分量 ` potions ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L13) |
| ` public SlotDisplay pill() ` | 读取 record 分量 ` pill ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/PillSlotDemo.java#L13) |

## WithAnyPotionsExcept

` public record WithAnyPotionsExcept(SlotDisplay display, List<Identifier> excepts) implements SlotDisplay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<WithAnyPotionsExcept> MAP_CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L25) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, WithAnyPotionsExcept> STREAM_CODEC ` | 初值 ` StreamCodec.composite( SlotDisplay.STREAM_CODEC, WithAnyPotionsExcept::display, Identifier.STREAM_CODEC.apply(ByteBufCodecs.list()), WithAnyPotionsExcept::excepts, WithAnyPotionsExcept::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L34) |
| ` public static final Type<WithAnyPotionsExcept> TYPE ` | 初值 ` new Type<>(WithAnyPotionsExcept.MAP_CODEC, WithAnyPotionsExcept.STREAM_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L41) |
| ` @Override public Type<WithAnyPotionsExcept> type() ` | 末尾返回 ` WithAnyPotionsExcept.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L43) |
| ` @Override public <T> Stream<T> resolve(ContextMap context, DisplayContentsFactory<T> factory) ` | ` (!(factory instanceof DisplayContentsFactory.ForStacks<T> stacks)) ` 成立时提前返回 ` Stream.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L48) |
| ` public WithAnyPotionsExcept(SlotDisplay display, List<Identifier> excepts) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L24) |
| ` public SlotDisplay display() ` | 读取 record 分量 ` display ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L24) |
| ` public List<Identifier> excepts() ` | 读取 record 分量 ` excepts ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/slot/WithAnyPotionsExcept.java#L24) |
