# 四维多方块的配方构建器

在同一份配方中引用多份结构定义，匹配完成后给出一个物品栈。

每次 next() 收起一份三维图样。结果为空、已收起的图样为空或最后一份图样为空都无法通过 validate。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DBuilder.java#L159)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:4d_multiblock/guide`，文件位于 `data/example/recipe/4d_multiblock/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.multiblock.Multiblock4DRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class Example4dMultiblockRecipes {
    public static void generate(RecipeOutput destination) {
        Multiblock4DRecipe.builder("anvilcraft:hypercube", 1)
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .symbol('A', "anvilcraft:tempering_glass")
            .next()
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .symbol('A', "anvilcraft:tempering_glass")
            .next()
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .layer("AAA", "AAA", "AAA")
            .symbol('A', "anvilcraft:tempering_glass")
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "4d_multiblock/guide"));
    }
}
```

实现采用上游 `MultiBlockRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/MultiBlockRecipeLoader.java#L281)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `definitions` | `MultiblockDefinition.CODEC`数组 | 必填 | 依次参与匹配的结构定义 |
| `result` | 物品栈对象 | 必填 | 完成配方后使用的结果 |

[查看 四维多方块字段、默认值与配方示例](../packs/structures/4d_multiblock) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-multiblock-1#multiblock4drecipe)
