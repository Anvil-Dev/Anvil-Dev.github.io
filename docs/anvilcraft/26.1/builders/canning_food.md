# 罐装食物的配方构建器

让工作台启用罐装食物的特殊合成。食材识别与结果组件由配方类计算。

SpecialRecipeBuilder 把特殊配方工厂交给数据生成输出。输入判断和成品由游戏中的配方实现计算，生成时只需选择正确工厂。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:canning_food/guide`，文件位于 `data/example/recipe/canning_food/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.CanningFoodRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.SpecialRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class CanningFoodRecipes {
    public static void generate(RecipeOutput destination) {
        SpecialRecipeBuilder.special(CanningFoodRecipe::new)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "canning_food/guide")));
    }
}
```

实现采用上游 `SpecialCraftingRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L15)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

[查看 罐装食物字段、默认值与配方示例](../packs/crafting/canning_food) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-1#canningfoodrecipe)
