# 特殊物品冲压的配方构建器

为特殊冲压行为提供候选产物。产物使用带概率的物品栈格式。

需要 1 至 9 项互异物品加工所用的原料条目，还需要非空产物列表。条目数越界或产物为空都会被拒绝。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/StampingUniqueItemsRecipe.java#L208)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:stamping_unique_items/guide`，文件位于 `data/example/recipe/stamping_unique_items/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItemTags;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.StampingUniqueItemsRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class StampingUniqueItemsRecipes {
    public static void generate(RecipeOutput destination) {
        StampingUniqueItemsRecipe.builderUnique()
            .requires(ModItemTags.TEMPLATES, 2)
            .result(ModItems.TWO_TO_ONE_SMITHING_TEMPLATE)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "stamping_unique_items/guide"));
    }
}
```

实现采用上游 `StampingRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L72)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `results` | 带概率的物品栈数组 | 必填 | 各次输出使用的结果列表 |
| `ingredients` | `Ingredient.CODEC`数组 | 必填 | 参与匹配的原料列表 |

[查看 特殊物品冲压字段、默认值与配方示例](../packs/impact/stamping_unique_items) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil#stampinguniqueitemsrecipe-builder)
