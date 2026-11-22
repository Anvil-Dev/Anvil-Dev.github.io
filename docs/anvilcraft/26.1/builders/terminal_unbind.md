# 终端解绑的配方构建器

把终端放进工作台无序合成。输出物品会保留原来的合成库存、平衡模式和名称，而绑定状态则由配方里指定的新物品栈决定。

使用无序合成构建器并调用 TerminalUpgradeRecipe.output。包装器会根据传入的 ShapelessRecipe 生成 TerminalUnbindRecipe，同样保留终端内的工作台内容、均衡模式和自定义名称。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:terminal_unbind/guide`，文件位于 `data/example/recipe/terminal_unbind/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.data.AnvilCraftDatagen;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.TerminalUpgradeRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeCategory;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.ShapelessRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;

public final class TerminalUnbindRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> lookup) {
        ShapelessRecipeBuilder.shapeless(lookup, RecipeCategory.MISC, ModItems.HYPERDIMENSION_TERMINAL)
            .requires(ModItems.HYPERDIMENSION_TERMINAL)
            .group("example:terminal_unbind")
            .unlockedBy(AnvilCraftDatagen.hasItem(ModItems.HYPERDIMENSION_TERMINAL),
                AnvilCraftDatagen.has(lookup, ModItems.HYPERDIMENSION_TERMINAL))
            .save(TerminalUpgradeRecipe.output(destination), ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "terminal_unbind/guide")));
    }
}
```

实现采用上游 `RegistrumItemRecipeLoader.hyperdimensionTerminalUnbind` 中的一条实际配方链。其中 `HolderGetter<Item> lookup` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RegistrumItemRecipeLoader.java#L851)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

[查看 终端解绑字段、默认值与配方示例](../packs/crafting/terminal_unbind)
