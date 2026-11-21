# 多方块合成的配方构建器

用分层字符网格描述输入结构，每个非空符号通过映射表匹配方块。

至少给出一份有效图样并指定结果。结果为 null 或图样为空会在保存阶段抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/MultiblockBuilder.java#L73)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:multiblock/guide`，文件位于 `data/example/recipe/multiblock/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.multiblock.MultiblockRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Blocks;

public final class MultiblockRecipes {
    public static void generate(RecipeOutput destination) {
        MultiblockRecipe.builder(Blocks.DIAMOND_BLOCK)
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .symbol('A', Blocks.COAL_BLOCK)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "multiblock/guide"));
    }
}
```

实现采用上游 `MultiBlockRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L100)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `pattern` | `MultiblockDefinition.CODEC` | 必填 | 输入的有序图案或结构定义 |
| `result` | 物品栈对象 | 必填 | 完成配方后使用的结果 |

[查看 多方块合成字段、默认值与配方示例](../packs/structures/multiblock) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-multiblock-2#multiblockrecipe)
