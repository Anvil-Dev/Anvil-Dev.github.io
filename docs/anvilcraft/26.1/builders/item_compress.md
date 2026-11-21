# 物品压缩的配方构建器

把若干掉落物压成新的物品。多个配方共用材料时，检查 priority 和材料数量。

提交前检查物品原料列表和产物列表。两者都至少需要一项，空列表会触发 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L397)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:item_compress/guide`，文件位于 `data/example/recipe/item_compress/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.ItemCompressRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Items;

public final class ItemCompressRecipes {
    public static void generate(RecipeOutput destination) {
        ItemCompressRecipe.builder()
            .requires(Items.BONE, 3)
            .result(Items.BONE_BLOCK)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "item_compress/guide")));
    }
}
```

实现采用上游 `ItemCompressRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ItemCompressRecipeLoader.java#L36)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 |
| `priority` | 整数 | 可省略 | 多个候选之间的优先级 |

[查看 物品压缩字段、默认值与配方示例](../packs/impact/item_compress) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil-wrap-2#itemcompressrecipe-builder)
