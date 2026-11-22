# 流体混合的配方构建器

给混合器定义带用量的流体原料，以及物品或流体产物。

输入必须为 2 至 4 项。物品和流体各最多三种，产物总数为 1 至 6 项。空气、非正数量的物品和空流体都无法通过校验。启用 consumeMaximum 后只允许流体产物。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/FluidMixingRecipe.java#L340)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:fluid_mixing/guide`，文件位于 `data/example/recipe/fluid_mixing/guide.json`。

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.registrum.providers.generators.RegistrumRecipeProvider;
import dev.dubhe.anvilcraft.recipe.FluidMixingRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.material.Fluids;

public final class FluidMixingRecipes {
    public static void generate(RecipeOutput destination, RegistrumRecipeProvider provider) {
        FluidMixingRecipe.builder(provider.getRegistries().lookupOrThrow(Registries.FLUID))
            .requires(Fluids.WATER, 1000)
            .requires(Fluids.LAVA, 1000)
            .result(Items.OBSIDIAN, 1)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "fluid_mixing/guide")));
    }
}
```

实现采用上游 `FluidMixingRecipeLoader.init` 中的一条实际配方链。其中 `RegistrumRecipeProvider provider` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/FluidMixingRecipeLoader.java#L11)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 带用量的流体原料数组 | 必填 | 参与匹配的原料列表 |
| `results` | 物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 |
| `fluid_results` | 流体栈数组 | 可省略，默认 `[]` | 流体产物 |
| `consume_maximum` | 布尔值 | 可省略，默认 `false` | 按可用原料量尽量多地消耗 |

[查看 流体混合字段、默认值与配方示例](../packs/machine/fluid_mixing)
