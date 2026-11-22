# 方块处理的配方构建器

序列装配可把材料方块与处理方块配对。输入与输出偏移均以冲击点下方一格为基准。

输入方块列表至少要有一项，结果必须非空。两个约束分别在 validate 中检查。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockProcessingRecipe.java#L232)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:block_processing/guide`，文件位于 `data/example/recipe/block_processing/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockProcessingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class BlockProcessingRecipes {
    public static void generate(RecipeOutput destination) {
        BlockProcessingRecipe.builder()
                    .fakeTimeWarp(ModBlocks.WIP_BLOCK.get())
                    .result(ModBlocks.WIP_BLOCK.get())
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "block_processing/guide"));
    }
}
```

实现采用上游 `ProceduralProcessRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L239)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputs` | 方块状态谓词数组 | 必填 | 一组参与匹配的输入 |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 |

[查看 方块处理字段、默认值与配方示例](../packs/impact/block_processing)
