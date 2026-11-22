# 终端升级的配方构建器

沿用有序合成图案，将输入终端的合成库存、切石输入、平衡模式和自定义名称复制到升级后的物品。

使用有序合成构建器，保存时把输出包在 TerminalUpgradeRecipe.output 中。服务端合成取第一个终端输入，将其工作台内容、均衡模式和自定义名称复制到成品。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:terminal_upgrade/guide`，文件位于 `data/example/recipe/terminal_upgrade/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.data.AnvilCraftDatagen;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.TerminalUpgradeRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeCategory;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.ShapedRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;

public final class TerminalUpgradeRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> lookup) {
        ShapedRecipeBuilder.shaped(lookup, RecipeCategory.MISC, ModItems.HYPERDIMENSION_TERMINAL)
            .pattern(" B ").pattern("ACA").pattern(" D ")
            .define('A', ModItems.TRANSCENDIUM_INGOT)
            .define('B', ModBlocks.SINGULARITY_CRYSTAL)
            .define('C', ModItems.SHULKER_TERMINAL)
            .define('D', ModBlocks.HYPERCUBE)
            .group("example:terminal_upgrade")
            .unlockedBy(AnvilCraftDatagen.hasItem(ModItems.TRANSCENDIUM_INGOT),
                AnvilCraftDatagen.has(lookup, ModItems.TRANSCENDIUM_INGOT))
            .unlockedBy(AnvilCraftDatagen.hasItem(ModBlocks.SINGULARITY_CRYSTAL.asItem()),
                AnvilCraftDatagen.has(lookup, ModBlocks.SINGULARITY_CRYSTAL))
            .unlockedBy(AnvilCraftDatagen.hasItem(ModItems.SHULKER_TERMINAL),
                AnvilCraftDatagen.has(lookup, ModItems.SHULKER_TERMINAL))
            .unlockedBy(AnvilCraftDatagen.hasItem(ModBlocks.HYPERCUBE.asItem()),
                AnvilCraftDatagen.has(lookup, ModBlocks.HYPERCUBE))
            .save(TerminalUpgradeRecipe.output(destination), ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "terminal_upgrade/guide")));
    }
}
```

实现采用上游 `RegistrumItemRecipeLoader.hyperdimensionTerminal` 中的一条实际配方链。其中 `HolderGetter<Item> lookup` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RegistrumItemRecipeLoader.java#L831)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

[查看 终端升级字段、默认值与配方示例](../packs/crafting/terminal_upgrade)
