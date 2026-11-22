# 方块粉碎的配方构建器

使用一个状态谓词筛选要粉碎的方块，再指定粉碎后的方块状态。

input 与 result 必须各提供一个方块，否则保存时会抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCrushRecipe.java#L178)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:block_crush/guide`，文件位于 `data/example/recipe/block_crush/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockCrushRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;

public final class BlockCrushRecipes {
    public static void generate(RecipeOutput destination, Block input, Block result) {
        BlockCrushRecipe.builder().input(input).result(result)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "block_crush/guide"));
    }
}
```

实现采用上游 `BlockCrushRecipeLoader.blockCrush` 中的一条实际配方链。其中 `Block input`、`Block result` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockCrushRecipeLoader.java#L31)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 方块状态谓词 | 必填 | 待匹配的输入 |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 |

[查看 方块粉碎字段、默认值与配方示例](../packs/impact/block_crush)
