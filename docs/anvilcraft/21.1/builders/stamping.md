# 物品冲压的配方构建器

为冲压工序指定掉落物输入和产物，游戏在铁砧触发加工时检查材料及设备。

提交前检查物品原料列表和产物列表。两者都至少需要一项，空列表会触发 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/AbstractProcessRecipe.java#L456)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:stamping/guide`，文件位于 `data/example/recipe/stamping/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.StampingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class StampingRecipes {
    public static void generate(RecipeOutput destination) {
        StampingRecipe.builder()
            .requires(ModItems.WOOD_FIBER)
            .result(Items.PAPER, 4)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "stamping/guide"));
    }
}
```

实现采用上游 `StampingRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/StampingRecipeLoader.java#L33)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `ingredients` | 物品原料谓词数组 | 可省略，默认 `[]` | 参与匹配的原料列表 |
| `results` | 带概率的物品栈数组 | 可省略，默认 `[]` | 各次输出使用的结果列表 |

[查看 物品冲压字段、默认值与配方示例](../packs/impact/stamping)
