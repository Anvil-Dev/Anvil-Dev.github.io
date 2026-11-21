# 序列装配的配方构建器

以步骤表组织多个加工过程。首个方块、过程显示模型、循环设置和最终方块各自独立。

至少有一个步骤，loop 至少为 1。构建器还检查步骤是否属于铁砧加工配方，以及展示模型数量是否超过该步骤序列的上限。 [构建器校验](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/procedural/ProceduralProcessRecipeBuilder.java#L122)

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:procedural_process/guide`，文件位于 `data/example/recipe/procedural_process/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.anvil.procedural.ProceduralProcessRecipeBuilder;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockProcessingRecipe;
import dev.dubhe.anvilcraft.recipe.anvil.wrap.ItemInjectRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.ItemStackTemplate;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.Blocks;

public final class ProceduralProcessRecipes {
    public static void generate(RecipeOutput destination) {
        ProceduralProcessRecipeBuilder.of(ModBlocks.TUNGSTEN_BLOCK.get())
            .addStep(ItemInjectRecipe.builder()
                .inputBlock(ModBlocks.TUNGSTEN_BLOCK).requires(Items.NETHERITE_SCRAP)
                .resultBlock(ModBlocks.WIP_BLOCK).buildRecipe())
            .addStep(BlockProcessingRecipe.builder()
                .fakeTimeWarp(ModBlocks.WIP_BLOCK.get())
                .result(ModBlocks.WIP_BLOCK.get()).buildRecipe())
            .result(Blocks.ANCIENT_DEBRIS)
            .icon(new ItemStackTemplate(Blocks.ANCIENT_DEBRIS.asItem()))
            .displayedModels(AnvilCraft.of("block/wip_display/ancient_debris_wip"))
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "procedural_process/guide")));
    }
}
```

实现采用上游 `ProceduralProcessRecipeLoader.init` 中的一条实际配方链。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ProceduralProcessRecipeLoader.java#L208)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

## 生成文件的字段约定

| 字段 | JSON 类型或解码器 | 必填与默认值 | 用途 |
| --- | --- | --- | --- |
| `initial_block` | 方块状态谓词 | 必填 | 第一步开始前的方块条件 |
| `steps` | `ProceduralProcessStep.CODEC`数组 | 必填 | 按工序编排的步骤对象列表 |
| `result_block` | 带概率的方块状态 | 必填 | 加工后的方块状态 |
| `icon` | 物品栈模板对象 | 可省略 | 界面图标对应的物品栈 |
| `loop` | 整数 | 必填 | 循环次数 |
| `displayed_model` | 资源 ID | 可省略 | 展示使用的模型 ID |
| `displayed_models` | 资源 ID数组 | 可省略，默认 `[]` | 多阶段的模型 ID 列表 |
| `multiple_loop_first_step` | `ProceduralProcessStep.CODEC` | 可省略 | 重复循环使用的首步 |
| `index` | 整数 | 必填 | 步骤或列表索引 |
| `content` | `Recipe.CODEC` | 必填 | 实际执行的子配方 |

[查看 序列装配字段、默认值与配方示例](../packs/structures/procedural_process) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-anvil-procedural#proceduralprocessserializer)
