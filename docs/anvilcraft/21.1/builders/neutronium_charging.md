# 中子锭充能的配方输出

按有序合成的符号表和图案安排中子锭与超级电容，再由专用配方类处理合成时的额外逻辑。

本例接收已生成的有序合成，调用者应传入 ShapedRecipe 实例。传入其他 Recipe 实现会在强制转型处抛 ClassCastException。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:neutronium_charging/guide`，文件位于 `data/example/recipe/neutronium_charging/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.NeutroniumChargingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.crafting.Recipe;
import net.minecraft.world.item.crafting.ShapedRecipe;

public final class NeutroniumChargingRecipes {
    public static void generate(RecipeOutput destination, Recipe<?> recipe) {
        var generatedRecipe = new NeutroniumChargingRecipe((ShapedRecipe) recipe);
        destination.accept(ResourceLocation.fromNamespaceAndPath("example", "neutronium_charging/guide"), generatedRecipe, null);
    }
}
```

实现采用上游 `ShapedRecipeLoader.accept` 中的一条实际配方链。其中 `Recipe<?> recipe` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ShapedRecipeLoader.java#L75)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `RecipeOutput.accept` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

[查看 中子锭充能字段、默认值与配方示例](../packs/crafting/neutronium_charging)
