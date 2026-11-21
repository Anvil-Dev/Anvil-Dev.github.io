# 方块涂抹的配方构建器

把接触的方块组合写进 inputs。相同的材料放在不同位置可能匹配其他加工方式。

输入列表不能为空，结果不能为 null。成品与输入谓词分别设置，避免把第二种输入误写成结果。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockSmearRecipe.java#L148)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:block_smear/guide`，文件位于 `data/example/recipe/block_smear/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockSmearRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.block.Block;

public final class BlockSmearRecipes {
    public static void generate(RecipeOutput destination, Block block1, Block block2, Block result) {
        BlockSmearRecipe.builder().input(block1).input(block2).result(result)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "block_smear/guide")));
    }
}
```

实现采用上游 `BlockSmearRecipeLoader.blockSmear` 中的一条实际配方链。其中 `Block block1`、`Block block2`、`Block result` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/BlockSmearRecipeLoader.java#L57)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputs` | 方块状态谓词数组 | 必填 | 一组参与匹配的输入 |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 |

[查看 方块涂抹字段、默认值与配方示例](../packs/impact/block_smear) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil-wrap-2#blocksmearrecipe-builder)
