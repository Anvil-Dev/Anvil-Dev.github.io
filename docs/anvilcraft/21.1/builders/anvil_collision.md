# 铁砧碰撞的配方构建器

按碰撞铁砧、命中方块和速度匹配。输出可同时包含方块转换和多个掉落物。

anvil 与 hitBlock 都必须设置。缺任意一个，保存时会抛 IllegalArgumentException。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/collision/AnvilCollisionCraftRecipe.java#L492)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:anvil_collision/guide`，文件位于 `data/example/recipe/anvil_collision/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.anvil.collision.AnvilCollisionCraftRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class AnvilCollisionRecipes {
    public static void generate(RecipeOutput destination) {
        AnvilCollisionCraftRecipe.builder()
            .anvil(ModBlocks.EMBER_ANVIL.get())
            .hitBlock(ModBlocks.FROST_METAL_BLOCK.get())
            .outputItem(ModItems.MULTIPHASE_MATTER.get(), 4)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "anvil_collision/guide"));
    }
}
```

实现采用上游 `AnvilCollisionCraftRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/AnvilCollisionCraftRecipeLoader.java#L23)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `anvil` | 方块状态谓词 | 必填 | 参与碰撞或压制的铁砧条件 |
| `consume` | 布尔值 | 必填 | 本次工序的消耗设置 |
| `hitBlock` | 方块状态谓词 | 必填 | 冲击位置的方块条件 |
| `transform_blocks` | `BlockTransform.CODEC`数组 | 必填 | 碰撞后转换的方块规则 |
| `output_items` | 带概率的物品栈数组 | 必填 | 碰撞产生的掉落物 |
| `speed` | 整数 | 必填 | 碰撞所需速度参数 |
| `input` | 方块状态谓词 | 必填 | 待匹配的输入 |
| `output` | 带概率的方块状态 | 必填 | 转换后的结果 |
| `max_count` | 整数 | 必填 | 最多转换的方块数 |

[查看 铁砧碰撞字段、默认值与配方示例](../packs/impact/anvil_collision) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil-collision#anvilcollisioncraftrecipe-builder)
