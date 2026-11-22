# 传送门转换的配方构建器

匹配要发生转换的方块状态，再设置转换后的方块及其概率。

必须设置门类型 ID，并添加至少一个结果。只设置门类型、未添加结果时 validate 会抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L420)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:portal_conversion/guide`，文件位于 `data/example/recipe/portal_conversion/guide.json`。

```java
package dev.example.recipebuild;

import dev.anvilcraft.lib.v2.util.Util;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.PortalConversionRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;

public final class PortalConversionRecipes {
    public static void generate(RecipeOutput destination, Block anvil, float chance) {
        PortalConversionRecipe.builder()
            .type(Util.cast(Blocks.END_PORTAL))
            .input(anvil)
            .result(ModBlocks.SPECTRAL_ANVIL, chance)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "portal_conversion/guide")));
    }
}
```

实现采用上游 `PortalConversionRecipeLoader.spectral` 中的一条实际配方链。其中 `Block anvil`、`float chance` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L24)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 方块状态谓词 | 必填 | 待匹配的输入 |
| `results` | `WeightedChanceBlockStates.CODEC` | 必填 | 各次输出使用的结果列表 |
| `portal` | 资源 ID | 必填 | 触发转换的传送门类型 |

[查看 传送门转换字段、默认值与配方示例](../packs/machine/portal_conversion)
