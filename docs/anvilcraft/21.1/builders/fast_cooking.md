# 快速烹饪的配方构建器

配方分别处理食材和炼药锅液体。将液体谓词及消耗量写在根对象。

提交前检查物品原料列表和产物列表。两者都至少需要一项，空列表会触发 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L456)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:fast_cooking/guide`，文件位于 `data/example/recipe/fast_cooking/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.FastCookingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class FastCookingRecipes {
    public static void generate(RecipeOutput destination) {
        FastCookingRecipe.builder()
            .requires(Items.MUD)
            .result(Items.CLAY)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "fast_cooking/guide"));
    }
}
```

实现采用上游 `FastCookingRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/FastCookingRecipeLoader.java#L41)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 |
| `fluid` | `FluidStackPredicate.CODEC` | 可省略，默认 `EMPTY_PREDICATE` | 炼药锅的流体匹配条件 |
| `consume` | 整数 | 可省略，默认 `0` | 本次工序的消耗设置 |
| `transform` | `TRANSFORMS_CODEC` | 可省略，默认 `[]` | 工序结束时的流体变化 |
| `chance` | 数值 | 可省略，默认 `1.0f` | 触发概率 |
| `ignited` | 布尔值 | 可省略，默认 `false` | 匹配点燃状态 |

[查看 快速烹饪字段、默认值与配方示例](../packs/machine/fast_cooking)
