# 天体铁砧合成的配方构建器

登记天体铁砧的特殊工作台配方，黑洞或白洞材料决定生成的天体预设。

SpecialRecipeBuilder 把特殊配方工厂交给数据生成输出。输入判断和成品由游戏中的配方实现计算，生成时只需选择正确工厂。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:celestial_anvil/guide`，文件位于 `data/example/recipe/celestial_anvil/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.CelestialAnvilRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.SpecialRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class CelestialAnvilRecipes {
    public static void generate(RecipeOutput destination) {
        SpecialRecipeBuilder.special(CelestialAnvilRecipe::new)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "celestial_anvil/guide")));
    }
}
```

实现采用上游 `SpecialCraftingRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCraftingRecipeLoader.java#L13)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

[查看 天体铁砧合成字段、默认值与配方示例](../packs/celestial/celestial_anvil)
