# Generating Charging & Discharging Recipes

Specify the ingredient, result, power, and duration in ticks in the recipe data generator. Negative power uses the charger; positive power uses the discharger. Zero power or non-positive duration fails builder validation. Use a distinct recipe ID so it does not overwrite the same path from another generator.

## Writing Files from RecipeProvider

Pass `RecipeOutput` from your provider's `buildRecipes` during data generation. This charger turns an iron nugget into a gold nugget in 40 ticks at 4 kW. Specify the recipe ID explicitly so no-arg `save` does not produce duplicate files from the output item name.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.recipe.ChargerChargingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class PressRecipes {
    public static void generate(RecipeOutput output) {
        ChargerChargingRecipe.builder()
            .requires(Items.IRON_NUGGET)
            .result(Items.GOLD_NUGGET)
            .power(-4)
            .time(40)
            .save(output, ResourceLocation.fromNamespaceAndPath("sandstone_press", "charged_nugget"));
    }
}
```

## Example in Source

Take `RecipeHandler` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.data.recipe;

import dev.anvilcraft.lib.v2.registrum.providers.RegistrumRecipeProvider;

public class RecipeHandler {
    public static void init(RegistrumRecipeProvider provider) {
        new StoneCutterRecipeLoader(provider);
        new ShapedRecipeLoader(provider);

        BlockCrushRecipeLoader.init(provider);
        ItemCrushRecipeLoader.init(provider);
        UnpackRecipeLoader.init(provider);
        BlockCompressRecipeLoader.init(provider);
        ItemCompressRecipeLoader.init(provider);
        MeshRecipeLoader.init(provider);
        StampingRecipeLoader.init(provider);
        SuperHeatingRecipeLoader.init(provider);
        NeutronIrradiationRecipeLoader.init(provider);
        TimeWarpRecipeLoader.init(provider);
        BlockSmearRecipeLoader.init(provider);
        FastCookingRecipeLoader.init(provider);
        SolidLiquidRecipeLoader.init(provider);
        FluidMixingRecipeLoader.init(provider);
        ItemInjectRecipeLoader.init(provider);
        MassInjectRecipeLoader.init(provider);
        SqueezingRecipeLoader.init(provider);
        MultiBlockRecipeLoader.init(provider);
        MultiBlockConversionRecipeLoader.init(provider);
        MobTransformRecipeLoader.init(provider);
        MobTransformWithItemRecipeLoader.init(provider);
        ConcreteRecipeLoader.init(provider);
        MineralFountainRecipeLoader.init(provider);
        LaserHitRecipeLoader.init(provider);
        VanillaRecipesLoader.init(provider);
        JewelCraftingRecipeLoader.init(provider);
        SpecialCraftingRecipeLoader.init(provider);
        ChargerChargingRecipeLoader.init(provider);
        AnvilCollisionCraftRecipeLoader.init(provider);
        MultipleToOneSmithingRecipeLoader.init(provider);
        PermutationRecipeLoader.init(provider);
        DeformationRecipeLoader.init(provider);
        EnergyWeaponMakeRecipeLoader.init(provider);
        PortalConversionRecipeLoader.init(provider);
        ProceduralProcessRecipeLoader.init(provider);
        PlanetResourceRecipeLoader.init(provider);
        TempleDemandRecipeLoader.init(provider);
        SpecialCelestialBodyRecipeLoader.init(provider);
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java)

- [`ChargerBlockEntity` · Line 115](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargerBlockEntity.java#L115)
- [`DischargerBlockEntity` · Line 115](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/DischargerBlockEntity.java#L115)
- [`ModRecipeTypes` · Line 229](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTypes.java#L229)
- [`AnvilCraftJeiPlugin` · Line 178](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L178)
- [`ChargerChargingCategory` · Line 30](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/ChargerChargingCategory.java#L30)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ChargerChargingRecipe` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java) |
| `ChargerChargingRecipeLoader` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java) |
