# 超高温加热的配方构建器

把输入物品和炉内环境写入加热配方。产物使用带概率的物品栈。

至少配置一项物品原料。若列表为空，validate 抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/SuperHeatingRecipe.java#L284)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:super_heating/guide`，文件位于 `data/example/recipe/super_heating/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.SuperHeatingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.Blocks;

public final class SuperHeatingRecipes {
    public static void generate(RecipeOutput destination) {
        SuperHeatingRecipe.builder()
            .requires(Blocks.COAL_BLOCK, 8)
            .result(Items.DIAMOND)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "super_heating/guide"));
    }
}
```

实现采用上游 `SuperHeatingRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SuperHeatingRecipeLoader.java#L123)

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

[查看 超高温加热字段、默认值与配方示例](../packs/machine/super_heating) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil-wrap-3#superheatingrecipe-builder)
