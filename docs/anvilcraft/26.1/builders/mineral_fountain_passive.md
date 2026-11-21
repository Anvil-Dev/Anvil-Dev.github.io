# 被动矿物涌泉的配方构建器

给涌泉设置候选产物。用 priority 和 weight 处理多个匹配项。

为兜底产出设置 toBlock。未设置就 build 会抛 IllegalStateException，save 的前置检查会抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainPassiveRecipe.java#L165)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:mineral_fountain_passive/guide`，文件位于 `data/example/recipe/mineral_fountain_passive/guide.json`。

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.predicate.ChanceBlockState;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.mineral.MineralFountainPassiveRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.block.Block;

public final class MineralFountainPassiveRecipes {
    public static void generate(RecipeOutput destination) {
        MineralFountainPassiveRecipe.builder()
            .priority(-1)
            .toBlock(result(ModBlocks.CINERITE.get()))
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "mineral_fountain_passive/guide")));
    }

    private static ChanceBlockState result(Block block) {
        return new ChanceBlockState(block.defaultBlockState(), 1.0f);
    }
}
```

实现采用上游 `MineralFountainRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/MineralFountainRecipeLoader.java#L57)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `dimension` | 资源 ID | 可省略 | 维度资源 ID |
| `height` | `HeightRange.CODEC` | 可省略，默认 `min = 0，max = 8` | 涌泉高度条件 |
| `priority` | 整数 | 可省略，默认 `0` | 多个候选之间的优先级 |
| `weight` | 整数 | 可省略，默认 `1` | 在候选集中抽取的相对权重 |
| `from_block` | 方块状态谓词 | 可省略，默认 `空气方块` | 可原地转换的方块条件 |
| `to_block` | 带概率的方块状态 | 必填 | 生成的方块 |
| `heat` | `MineralFountainHeat.CODEC` | 可省略 | 热量效果 |
| `to_fluid` | 流体栈模板对象 | 可省略 | 伴随配方产生的流体栈 |
| `tier` | `HeatTier.LOWER_NAME_CODEC` | 必填 | 热量等级 |
| `duration` | 整数 | 可省略，默认 `20` | 持续时间 |
| `count` | 整数 | 可省略，默认 `1` | 数量 |
| `min` | 整数 | 可省略，默认 `0` | 下限 |
| `max` | 整数 | 可省略，默认 `8` | 上限 |

[查看 被动矿物涌泉字段、默认值与配方示例](../packs/fountain/mineral_fountain_passive) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-mineral-1#mineralfountainpassiverecipe-builder)
