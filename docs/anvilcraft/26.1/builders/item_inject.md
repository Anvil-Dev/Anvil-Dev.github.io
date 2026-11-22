# 物品注入的配方构建器

同时限定掉落物和要注入的方块。只设物品条件无法区分接受注入的基底。

需要至少一种物品原料。结果可以是方块，也可以是物品列表；两者同时缺失时保存失败。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/ItemInjectRecipe.java#L156)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:item_inject/guide`，文件位于 `data/example/recipe/item_inject/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.ItemInjectRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class ItemInjectRecipes {
    public static void generate(RecipeOutput destination) {
        ItemInjectRecipe.builder()
                .inputBlock(ModBlocks.WIP_BLOCK).requires(ModItems.SAPPHIRE)
                .resultBlock(ModBlocks.WIP_BLOCK)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "item_inject/guide")));
    }
}
```

实现采用上游 `ProceduralProcessRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L268)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 |
| `block_ingredient` | 方块状态谓词 | 必填 | 接受注入的方块条件 |
| `block_result` | 带概率的方块状态 | 可省略 | 注入后的方块状态 |

[查看 物品注入字段、默认值与配方示例](../packs/impact/item_inject)
