# 霜钢锻造变形的配方构建器

指定锻造模板、材料谓词以及参与变形的一组物品。

至少提供两个参与变形的输入，并配置材料谓词。少于两个输入或材料为 null 时，保存会抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/DeformationRecipe.java#L166)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:deformation/guide`，文件位于 `data/example/recipe/deformation/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.frost.DeformationRecipe;
import dev.dubhe.anvilcraft.recipe.frost.EmptyFrostMaterialPredicate;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class DeformationRecipes {
    public static void generate(RecipeOutput destination) {
        DeformationRecipe.builder()
            .material(new EmptyFrostMaterialPredicate())
            .input(Items.BOW)
            .input(Items.CROSSBOW)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "deformation/guide"));
    }
}
```

实现采用上游 `DeformationRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/DeformationRecipeLoader.java#L70)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `template` | 物品原料谓词 | 可省略，默认 `DeformationRecipe.DEFAULT_TEMPLATE` | 锻造模板谓词 |
| `material` | `IFrostMaterialPredicate.CODEC` | 必填 | 锻造材料谓词 |
| `inputs` | `RecipeResult.LIST_CODEC` | 必填 | 一组参与匹配的输入 |

[查看 霜钢锻造变形字段、默认值与配方示例](../packs/crafting/deformation)
