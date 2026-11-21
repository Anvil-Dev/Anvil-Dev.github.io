# 宝石工艺的配方构建器

用饰品工作台配方列出材料和结果，按需关闭成品默认携带的消失诅咒。

材料列表允许 1 至 256 项，不能用空物品栈作成品。空列表也会触发 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L225)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:jewel_crafting/guide`，文件位于 `data/example/recipe/jewel_crafting/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.JewelCraftingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;

public final class JewelCraftingRecipes {
    public static void generate(RecipeOutput destination) {
        JewelCraftingRecipe.builder()
            .requires(Items.POLISHED_TUFF)
            .requires(Items.COPPER_INGOT)
            .result(new ItemStack(Items.TRIAL_KEY))
            .hasVanishingCurse(false)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "jewel_crafting/guide"));
    }
}
```

实现采用上游 `JewelCraftingRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/JewelCraftingRecipeLoader.java#L29)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `neoforge:conditions` | 加载条件数组 | 可省略，默认 `[]` | NeoForge 在载入时计算的条件列表 |
| `result` | 物品栈对象 | 必填 | 完成配方后使用的结果 |
| `has_vanishing_curse` | 布尔值 | 可省略，默认 `true` | 产物是否带消失诅咒 |
| `ingredients` | `Ingredient.CODEC`数组 | 必填 | 参与匹配的原料列表 |

[查看 宝石工艺字段、默认值与配方示例](../packs/crafting/jewel_crafting) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-2#jewelcraftingrecipe-builder)
