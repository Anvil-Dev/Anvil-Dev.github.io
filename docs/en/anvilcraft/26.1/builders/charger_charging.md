# Charger Charging Recipe Builder

Specifies charging/discharging power and duration for a single input item. Negative power charges; positive power discharges. Power is in kW and time is in ticks.

Both ingredient and result must be set. Negative power charges and positive power discharges; zero power throws. time is in ticks and must be > 0. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L169)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:charger_charging/guide` to `data/example/recipe/charger_charging/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.ChargerChargingRecipe;
import net.minecraft.core.HolderGetter;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Items;

public final class ChargerChargingRecipes {
    public static void generate(RecipeOutput destination, HolderGetter<Item> items) {
        ChargerChargingRecipe.builder(items)
            .requires(Items.IRON_BLOCK)
            .result(ModBlocks.MAGNET_BLOCK)
            .power(-20)
            .time(80)
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "charger_charging/guide")));
    }
}
```

The example follows a recipe from `ChargerChargingRecipeLoader.init`. The caller supplies `HolderGetter<Item> items` from the data generation context. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L22)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Ingredient ID, tag, or valid ingredient expression | Required | Single ingredient to match |
| `result` | Item stack template object | Required | Result used after recipe completion |
| `power` | Integer | Required | Charging/discharging power in kW; negative charges, positive discharges |
| `time` | Integer | Required | Time parameter |

[View Charger Charging fields, defaults & recipe example](../packs/machine/charger_charging)
