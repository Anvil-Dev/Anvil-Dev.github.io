# 中子锭充能的配方构建器

按有序合成的符号表和图案安排中子锭与超级电容，再由专用配方类处理合成时的额外逻辑。

有序合成必须配合 NeutroniumChargingRecipe.output 保存。组装成品时从首个符合未充能中子锭标签的输入读取附魔，并仅将其复制到指定的充能中子锭结果。

在附属模组的数据生成提供器中调用 `generate`，传入当前 `RecipeOutput`。运行数据生成后，配方 ID 为 `example:neutronium_charging/guide`，文件位于 `data/example/recipe/neutronium_charging/guide.json`。

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.data.AnvilCraftDatagen;
import dev.dubhe.anvilcraft.init.item.ModItemTags;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.NeutroniumChargingRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeCategory;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.ShapedRecipeBuilder;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;

public final class NeutroniumChargingRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> lookup) {
        ShapedRecipeBuilder.shaped(lookup, RecipeCategory.MISC, ModItems.CHARGED_NEUTRONIUM_INGOT)
            .pattern("SSS")
            .pattern("SNS")
            .pattern("SSS")
            .define('S', ModItems.SUPER_CAPACITOR)
            .define('N', ModItemTags.UNCHARGED_NEUTRONIUM_INGOTS)
            .unlockedBy(AnvilCraftDatagen.hasItem(ModItems.SUPER_CAPACITOR), AnvilCraftDatagen.has(lookup, ModItems.SUPER_CAPACITOR))
            .save(NeutroniumChargingRecipe.output(destination), ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "neutronium_charging/guide")));
    }
}
```

实现采用上游 `RegistrumItemRecipeLoader.chargedNeutroniumIngot` 中的一条实际配方链。其中 `HolderGetter<Item> lookup` 由调用者按生成环境传入。 [原始配方调用](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RegistrumItemRecipeLoader.java#L1527)

| 入口 | 调用约定 |
| --- | --- |
| `generate` | 在 datagen 期间接收当前输出对象，一次调用写入一个配方。 |
| `save` | 显式指定配方键。同一轮生成中，每个 ID 只应写一次。 |

[查看 中子锭充能字段、默认值与配方示例](../packs/crafting/neutronium_charging) · [查看 Java 成员签名](../api/dev-dubhe-anvilcraft-recipe-2#neutroniumchargingrecipe)
