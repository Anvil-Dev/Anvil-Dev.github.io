# dev.dubhe.anvilcraft.recipe.display.recipe



## CanningFoodRecipeDisplay

` public record CanningFoodRecipeDisplay(SlotDisplay can, SlotDisplay foods, SlotDisplay result, SlotDisplay craftingStation) implements RecipeDisplay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Lazy<CanningFoodRecipeDisplay> INSTANCE ` | 字段类型为 ` Lazy<CanningFoodRecipeDisplay> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L20) |
| ` public static final RecipeDisplay.Type<CanningFoodRecipeDisplay> TYPE ` | 字段类型为 ` RecipeDisplay.Type<CanningFoodRecipeDisplay> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L29) |
| ` @Override public Type<CanningFoodRecipeDisplay> type() ` | 末尾返回 ` CanningFoodRecipeDisplay.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L57) |
| ` public CanningFoodRecipeDisplay(SlotDisplay can, SlotDisplay foods, SlotDisplay result, SlotDisplay craftingStation) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L14) |
| ` public SlotDisplay can() ` | 读取 record 分量 ` can ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L15) |
| ` public SlotDisplay foods() ` | 读取 record 分量 ` foods ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L16) |
| ` public SlotDisplay result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L17) |
| ` public SlotDisplay craftingStation() ` | 读取 record 分量 ` craftingStation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L18) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/CanningFoodRecipeDisplay.java#L14) |

## PillRecipeDisplay

` public record PillRecipeDisplay(SlotDisplay pill, SlotDisplay potions, SlotDisplay result, SlotDisplay craftingStation) implements RecipeDisplay `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Lazy<PillRecipeDisplay> INSTANCE ` | 字段类型为 ` Lazy<PillRecipeDisplay> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L22) |
| ` public static final Type<PillRecipeDisplay> TYPE ` | 字段类型为 ` Type<PillRecipeDisplay> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L44) |
| ` @Override public Type<PillRecipeDisplay> type() ` | 末尾返回 ` PillRecipeDisplay.TYPE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L72) |
| ` public PillRecipeDisplay(SlotDisplay pill, SlotDisplay potions, SlotDisplay result, SlotDisplay craftingStation) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L16) |
| ` public SlotDisplay pill() ` | 读取 record 分量 ` pill ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L17) |
| ` public SlotDisplay potions() ` | 读取 record 分量 ` potions ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L18) |
| ` public SlotDisplay result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L19) |
| ` public SlotDisplay craftingStation() ` | 读取 record 分量 ` craftingStation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/display/recipe/PillRecipeDisplay.java#L16) |
