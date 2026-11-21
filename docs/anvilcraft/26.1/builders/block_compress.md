# 方块压缩的配方构建器

用一组方块状态谓词描述受压材料，将指定位置改成结果方块。

用两次 input 提供一对输入方块，并指定非空结果。多写或少写任意一个输入都会让 validate 抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/BlockCompressRecipe.java#L147)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:block_compress/guide`，文件位于 `data/example/recipe/block_compress/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockCompressRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.block.Blocks;

public final class BlockCompressRecipes {
    public static void generate(RecipeOutput destination) {
        BlockCompressRecipe.builder()
                .input(Blocks.IRON_BLOCK).input(Blocks.IRON_BLOCK)
                .result(ModBlocks.WIP_BLOCK.get())
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "block_compress/guide")));
    }
}
```

实现采用上游 `ProceduralProcessRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L245)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `inputs` | 方块状态谓词数组 | 必填 | 一组参与匹配的输入 |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 |

[查看 方块压缩字段、默认值与配方示例](../packs/impact/block_compress) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil-wrap-1#blockcompressrecipe-builder)
