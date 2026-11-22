# Generating Charging & Discharging Recipes

Specify the ingredient, result, power, and duration in ticks in the recipe data generator. Negative power uses the charger; positive power uses the discharger. Zero power or non-positive duration fails builder validation. Use a distinct recipe ID so it does not overwrite the same path from another generator.

## Writing Files from RecipeProvider

During data generation, pass the item registry's `HolderGetter<Item>` and the `RecipeOutput`. The builder uses this registry view to look up ingredient tags. This charger turns an iron nugget into a gold nugget in 40 ticks at 4 kW. Pass an explicit recipe ID to prevent the default `save` overload from generating duplicate files based on the result's name.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.recipe.ChargerChargingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.core.HolderGetter;
import net.minecraft.resources.Identifier;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Items;

public final class PressRecipes {
    public static void generate(HolderGetter<Item> items, RecipeOutput output) {
        ChargerChargingRecipe.builder(items)
            .requires(Items.IRON_NUGGET)
            .result(Items.GOLD_NUGGET)
            .power(-4)
            .time(40)
            .save(output, Identifier.fromNamespaceAndPath("sandstone_press", "charged_nugget"));
    }
}
```

## Example in Source

Take `RecipeHandler` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.data.recipe;

import dev.anvilcraft.lib.v2.registrum.providers.generators.RegistrumRecipeProvider;

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
        LaserHitRecipeLoader.init(provider);
        ItemInjectRecipeLoader.init(provider);
        MassInjectRecipeLoader.init(provider);
        SqueezingRecipeLoader.init(provider);
        MultiBlockRecipeLoader.init(provider);
        MultiBlockConversionRecipeLoader.init(provider);
        MobTransformRecipeLoader.init(provider);
        MobTransformWithItemRecipeLoader.init(provider);
        ConcreteRecipeLoader.init(provider);
        MineralFountainRecipeLoader.init(provider);
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
        PlanetResourceRecipeLoader.init(provider);
        SpecialCelestialBodyRecipeLoader.init(provider);
        TempleDemandRecipeLoader.init(provider);
        ProceduralProcessRecipeLoader.init(provider);
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java)

- [`ChargerBlockEntity` · line 117](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargerBlockEntity.java#L117)
- [`DischargerBlockEntity` · line 120](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/DischargerBlockEntity.java#L120)
- [`ModRecipeSerializers` · line 198](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L198)
- [`ModRecipeTypes` · line 103](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTypes.java#L103)
- [`AnvilCraftJeiPlugin` · line 177](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L177)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ChargerChargingRecipe` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java) |
| `ChargerChargingRecipeLoader` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java) |

<!-- source-guide -->
