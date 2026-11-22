# Neutronium Ingot Charging Recipe Builder

Arranges neutronium ingots and supercapacitors using a shaped crafting key and pattern, while the dedicated recipe class handles extra crafting logic.

Save the shaped recipe with `NeutroniumChargingRecipe.output`. When assembling the output, the recipe copies enchantments from the first input matching the uncharged neutronium ingot tag to the designated charged neutronium ingot result.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:neutronium_charging/guide` to `data/example/recipe/neutronium_charging/guide.json`.

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

The example follows a recipe from `RegistrumItemRecipeLoader.chargedNeutroniumIngot`. The caller supplies `HolderGetter<Item> lookup` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RegistrumItemRecipeLoader.java#L1527)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

[Neutronium Ingot Charging fields, defaults, and recipe example](../packs/crafting/neutronium_charging)
