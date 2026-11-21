# 激光照射的配方输出

用强度和持续照射时长筛选命中的方块。需要模拟方块战利品时开启 use_block_loot。

构造器接收命中谓词、强度和持续时间。示例用 tier 同时索引 strengths 与 heated，调用者应保证两个集合都含有该位置，避免数组或列表越界。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:laser_hit/guide`，文件位于 `data/example/recipe/laser_hit/guide.json`。

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.BlockStatePredicate;
import dev.dubhe.anvilcraft.recipe.LaserHitRecipe;
import java.util.List;
import java.util.Optional;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;

public final class LaserHitRecipes {
    public static void generate(RecipeOutput destination, BlockStatePredicate input, int[] strengths, int tier, List<Block> heated) {
        var generatedRecipe = new LaserHitRecipe(
                    input, Optional.empty(), strengths[tier], 20, List.of(), heated.get(tier).defaultBlockState(),
                    false, false, -50, LaserHitRecipe.LaserType.NORMAL, 40
                );
        destination.accept(ResourceLocation.fromNamespaceAndPath("example", "laser_hit/guide"), generatedRecipe, null);
    }
}
```

实现采用上游 `LaserHitRecipeLoader.heating` 中的一条实际配方链。其中 `BlockStatePredicate input`、`int[] strengths`、`int tier`、`List<Block> heated` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/LaserHitRecipeLoader.java#L48)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `RecipeOutput.accept` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 方块状态谓词 | 必填 | 待匹配的输入 |
| `dimension` | 资源 ID | 可省略 | 维度资源 ID |
| `laser_strength` | 整数 `1 至 Integer.MAX_VALUE` | 必填 | 匹配的激光强度 |
| `hit_time` | 整数 `1 至 Integer.MAX_VALUE` | 必填 | 持续照射所需 tick 数 |
| `result_items` | 物品栈对象数组 | 可省略，默认 `[]` | 额外掉落的物品栈 |
| `result_block` | 方块状态对象 | 可省略，默认 `空气方块` | 加工后的方块状态 |
| `use_block_loot` | 布尔值 | 可省略，默认 `false` | 是否计算方块自身战利品 |
| `requires_lens` | 布尔值 | 可省略，默认 `false` | 是否要求透镜 |
| `priority` | 整数 | 可省略，默认 `0` | 多个候选之间的优先级 |
| `laser_type` | `LaserType.CODEC` | 可省略，默认 `LaserType.NORMAL` | 参与匹配的激光类型 |
| `heat_duration` | 整数 `0 至 24000` | 可省略，默认 `0` | 保留热量的 tick 数 |

[查看 激光照射字段、默认值与配方示例](../packs/machine/laser_hit) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-2#laserhitrecipe)
