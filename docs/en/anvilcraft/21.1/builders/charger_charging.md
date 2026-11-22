# Charger Charging Recipe Builder

Specifies charging/discharging power and duration for a single input item. Negative power charges; positive power discharges. Power is in kW and time is in ticks.

Both ingredient and result must be set. Negative power charges and positive power discharges; zero power throws. time is in ticks and must be > 0. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java#L178)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:charger_charging/guide` to `data/example/recipe/charger_charging/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.ChargerChargingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class ChargerChargingRecipes {
    public static void generate(RecipeOutput destination) {
        ChargerChargingRecipe.builder()
            .requires(Items.IRON_INGOT)
            .result(ModItems.MAGNET_INGOT)
            .power(-4)
            .time(20 * 2)
            .save(destination, ResourceLocation.fromNamespaceAndPath("example", "charger_charging/guide"));
    }
}
```

Implementation uses an actual recipe chain from upstream `ChargerChargingRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java#L13)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `ingredient` | Non-empty ingredient | Required | Single ingredient to match |
| `result` | Item stack object | Required | Result used after recipe completion |
| `power` | Integer | Required | Charging/discharging power in kW; negative charges, positive discharges |
| `time` | Integer | Required | Time parameter |

[View Charger Charging fields, defaults & recipe example](../packs/machine/charger_charging)
