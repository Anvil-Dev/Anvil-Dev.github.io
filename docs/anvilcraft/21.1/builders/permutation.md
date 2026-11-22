# 霜钢锻造置换的配方构建器

用多个材料与结果选项把同一个基础物品导向不同锻造成品。

基础输入必须含有物品，再用 options 添加至少一个材料与结果组合。缺失输入或组合为空都会被 validate 拒绝。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/frost/PermutationRecipe.java#L187)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:permutation/guide`，文件位于 `data/example/recipe/permutation/guide.json`。

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.ItemIngredientPredicate;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.frost.CustomFrostMaterialPredicate;
import dev.dubhe.anvilcraft.recipe.frost.PermutationRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class PermutationRecipes {
    public static void generate(RecipeOutput destination) {
        PermutationRecipe.builder()
            .input(ModItems.SILENCE_AMULET, ModItems.ARMADILLO_AMULET, ModItems.CAT_AMULET, ModItems.DOG_AMULET)
            .options(
                CustomFrostMaterialPredicate.of(ItemIngredientPredicate.of(Items.CAKE).withCount(1).build()),
                ModItems.SILENCE_AMULET,
                ModItems.ARMADILLO_AMULET,
                ModItems.CAT_AMULET,
                ModItems.DOG_AMULET
            )
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "permutation/guide"));
    }
}
```

实现采用上游 `PermutationRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PermutationRecipeLoader.java#L78)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `template` | 物品原料谓词 | 可省略，默认 `PermutationRecipe.DEFAULT_TEMPLATE` | 锻造模板谓词 |
| `input` | 物品原料谓词 | 必填 | 待匹配的输入 |
| `options` | `FrostSmithingOption.CODEC`数组 | 必填 | 各材料与结果的对应关系 |
| `material` | `IFrostMaterialPredicate.CODEC` | 必填 | 锻造材料谓词 |
| `result` | `RecipeResult.CODEC` | 必填 | 完成配方后使用的结果 |

[查看 霜钢锻造置换字段、默认值与配方示例](../packs/crafting/permutation)
