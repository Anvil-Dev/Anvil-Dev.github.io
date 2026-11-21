# 异种物品冲压的配方构建器

用原料谓词匹配互异的掉落物。压制平台具有优先处理行为时，配方会让出本次匹配。

提交前检查物品原料列表和产物列表。两者都至少需要一项，空列表会触发 IllegalArgumentException。匹配时使用差异原料；冲压平台设置了 DEFER_TO_PLATFORM_BEHAVIOR 时会跳过这条配方。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L397)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:stamping_diff/guide`，文件位于 `data/example/recipe/stamping_diff/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItemTags;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.StampingDiffRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;

public final class StampingDiffRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> items) {
        StampingDiffRecipe.builder()
            .requires(items, ModItemTags.TEMPLATES, 2)
            .result(ModItems.TWO_TO_ONE_SMITHING_TEMPLATE)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "stamping_diff/guide")));
    }
}
```

实现采用上游 `StampingRecipeLoader.init` 中的一条实际配方链。其中 `HolderGetter<Item> items` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L80)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 |

[查看 异种物品冲压字段、默认值与配方示例](../packs/impact/stamping_diff) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil-wrap-3#stampingdiffrecipe-builder)
