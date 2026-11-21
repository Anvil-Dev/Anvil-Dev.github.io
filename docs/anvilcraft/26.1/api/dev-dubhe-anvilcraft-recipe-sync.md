# dev.dubhe.anvilcraft.recipe.sync



## RecipesRecord

` public class RecipesRecord `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/sync/RecipesRecord.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static RecipeMap CLIENTSIDE ` | 字段类型为 ` RecipeMap ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/sync/RecipesRecord.java#L7) |
| ` public static RecipeMap getRecipes(Level level) ` | ` (level.isClientSide()) ` 成立时提前返回 ` RecipesRecord.CLIENTSIDE `<br>[调用处 GiantMonolithCoreBlock.use](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/GiantMonolithCoreBlock.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/sync/RecipesRecord.java#L9) |
| ` public RecipesRecord() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/sync/RecipesRecord.java#L6) |
