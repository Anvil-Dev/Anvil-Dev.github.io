# Energy Weapon Crafting Recipe Builder

Specifies 1 to 6 ingredient predicates and a result stack for energy weapons. Can be paired with NeoForge load conditions when depending on external mods.

The recipe requires 1 to 6 ingredients and a result template. If the count is outside that range or the result is null, `validate` throws `IllegalArgumentException`. [Builder validation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/EnergyWeaponMakeRecipe.java#L180)

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:energy_weapon_make/guide` to `data/example/recipe/energy_weapon_make/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.init.item.ModItems;
import dev.dubhe.anvilcraft.recipe.EnergyWeaponMakeRecipe;
import net.minecraft.core.registries.Registries;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.Identifier;
import net.minecraft.resources.ResourceKey;
import net.minecraft.world.item.ItemStackTemplate;

public final class EnergyWeaponMakeRecipes {
    public static void generate(RecipeOutput destination) {
        EnergyWeaponMakeRecipe.builder()
            .requires(ModBlocks.TESLA_TOWER, 4)
            .result(new ItemStackTemplate(ModItems.TESLA_GUN))
            .save(destination, ResourceKey.create(Registries.RECIPE, Identifier.fromNamespaceAndPath("example", "energy_weapon_make/guide")));
    }
}
```

Implementation uses an actual recipe chain from upstream `EnergyWeaponMakeRecipeLoader.init`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/EnergyWeaponMakeRecipeLoader.java#L26)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `save` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `neoforge:conditions` | Load condition array | Optional, default `[]` | Condition list evaluated by NeoForge on load |
| `ingredients` | Array of item ingredient predicates | Required | List of ingredients participating in matching |
| `result` | Item stack template object | Required | Result used after recipe completion |

[Energy Weapon Crafting fields, defaults, and recipe example](../packs/crafting/energy_weapon_make)
