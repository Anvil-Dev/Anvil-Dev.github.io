# 神庙需求的配方输出

按类别列出物品与数量，供神庙需求系统选择。

构造时指定需求类别并传入需求条目列表，每个条目给出物品标识和数量。不同类别使用不同文件名可保留各自的兜底需求。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:temple_demand/guide`，文件位于 `data/example/recipe/temple_demand/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.recipe.celestial.TempleDemandRecipe;
import java.util.List;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;

public final class TempleDemandRecipes {
    public static void generate(RecipeOutput destination) {
        var generatedRecipe = new TempleDemandRecipe(
                TempleDemandRecipe.Category.PUNISHMENT,
                List.of(
                    new TempleDemandRecipe.Entry("anvilcraft:topaz", 1),
                    new TempleDemandRecipe.Entry("minecraft:lava_bucket", 1),
                    new TempleDemandRecipe.Entry("minecraft:tnt", 1024)
                )
            );
        destination.accept(ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "temple_demand/guide")), generatedRecipe, null);
    }
}
```

实现采用上游 `TempleDemandRecipeLoader.createPunishmentRecipe` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/TempleDemandRecipeLoader.java#L53)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `RecipeOutput.accept` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `category` | `Category.CODEC` | 必填 | 选择类别 |
| `entries` | `Entry.CODEC`数组 | 必填 | 候选条目列表 |
| `id` | 字符串 | 必填 | 注册 ID |
| `count` | 整数 | 必填 | 数量 |

[查看 神庙需求字段、默认值与配方示例](../packs/celestial/temple_demand)
