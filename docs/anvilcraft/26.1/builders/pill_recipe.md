# 药丸合成的配方构建器

启用药丸的动态合成。输入槽和产物由特殊配方在合成时判断。

SpecialRecipeBuilder 把特殊配方工厂交给数据生成输出。输入判断和成品由游戏中的配方实现计算，生成时只需选择正确工厂。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:pill_recipe/guide`，文件位于 `data/example/recipe/pill_recipe/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.PillRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.SpecialRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class PillRecipeRecipes {
    public static void generate(RecipeOutput destination) {
        SpecialRecipeBuilder.special(PillRecipe::new)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "pill_recipe/guide")));
    }
}
```

实现采用上游 `SpecialCraftingRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L17)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

[查看 药丸合成字段、默认值与配方示例](../packs/crafting/pill_recipe)
