# 筛分的配方构建器

在筛网上方处理掉落物。使用 results 中各个产物的概率控制副产物。

提交前检查物品原料列表和产物列表。两者都至少需要一项，空列表会触发 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L456)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:mesh/guide`，文件位于 `data/example/recipe/mesh/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.MeshRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class MeshRecipes {
    public static void generate(RecipeOutput destination) {
        MeshRecipe.builder()
            .requires(ModBlocks.QUARTZ_SAND)
            .result(ModBlocks.QUARTZ_SAND, 0.5f)
            .result(Items.QUARTZ)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "mesh/guide"));
    }
}
```

实现采用上游 `MeshRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MeshRecipeLoader.java#L64)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 |

[查看 筛分字段、默认值与配方示例](../packs/impact/mesh) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil-wrap-2#meshrecipe-builder)
