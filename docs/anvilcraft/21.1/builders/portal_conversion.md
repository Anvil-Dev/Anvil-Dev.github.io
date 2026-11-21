# 传送门转换的配方构建器

匹配要发生转换的方块状态，再设置转换后的方块及其概率。

需要可识别的门类型 ID 和非空结果；遗漏任一项都会触发 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L252)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:portal_conversion/guide`，文件位于 `data/example/recipe/portal_conversion/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.api.portal.PortalType;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.PortalConversionRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;

public final class PortalConversionRecipes {
    public static void generate(RecipeOutput destination, Block anvil, float chance) {
        PortalConversionRecipe.builder()
            .type(PortalType.END_PORTAL)
            .input(anvil)
            .result(ModBlocks.SPECTRAL_ANVIL.getDefaultState(), chance)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "portal_conversion/guide"));
    }
}
```

实现采用上游 `PortalConversionRecipeLoader.spectral` 中的一条实际配方链。其中 `Block anvil`、`float chance` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L24)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `input` | 方块状态谓词 | 必填 | 待匹配的输入 |
| `result` | 带概率的方块状态 | 必填 | 完成配方后使用的结果 |
| `portal` | 资源 ID | 必填 | 触发转换的传送门类型 |

[查看 传送门转换字段、默认值与配方示例](../packs/machine/portal_conversion) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-3#portalconversionrecipe-builder)
