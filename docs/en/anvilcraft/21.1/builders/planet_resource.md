# Planet Resources Recipe Builder

Selects mineral, fluid, biological, or other resource rules via category, then fills in the matching configuration object of the same name.

Select Category first, then set the data object for that category. The example picks FLUID and supplies values for target planet type, temperature condition, and fluid ID.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:planet_resource/guide` to `data/example/recipe/planet_resource/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.block.entity.celestial.PlanetResourceRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class PlanetResourceRecipes {
    public static void generate(RecipeOutput destination) {
        var generatedRecipe = PlanetResourceRecipe.builder(PlanetResourceRecipe.Category.FLUID)
                .fluid(new PlanetResourceRecipe.FluidData("rocky_planet", "", "low", "minecraft:water")).build();
        destination.accept(ResourceLocation.fromNamespaceAndPath("example", "planet_resource/guide"), generatedRecipe, null);
    }
}
```

Implementation uses an actual recipe chain from upstream `PlanetResourceRecipeLoader.createFluidRecipes`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PlanetResourceRecipeLoader.java#L54)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `RecipeOutput.accept` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `category` | `Category.CODEC` | Required | Category selector |
| `mineral` | `MineralData.CODEC` | Optional | Mineral rules |
| `fluid` | `FluidData.CODEC` | Optional | Cauldron fluid matching condition |
| `giant` | `GiantData.CODEC` | Optional | Gas giant resource rules |
| `biological` | `BiologicalData.CODEC` | Optional | Biological resource rules |
| `offering` | `OfferingData.CODEC` | Optional | Offering resource rules |
| `wasteland` | `WastelandData.CODEC` | Optional | Wasteland rules |
| `id` | String | Required | Registry ID |
| `weight` | Integer | Required | Relative weight when sampling from candidates |
| `id` | String | Required | Registry ID |
| `weight` | Integer | Required | Relative weight when sampling from candidates |
| `choices` | `WeightedChoice.CODEC` array | Required | Set of selectable entries |
| `weight` | Integer | Required | Relative weight when sampling from candidates |
| `cold` | Integer | Optional, default `5` | Cold environment parameter |
| `hot` | Integer | Optional, default `5` | Hot environment parameter |
| `mild` | Integer | Optional, default `10` | Mild environment parameter |
| `source_tag` | String | Optional, default `"c:raw_materials"` | Source tag |
| `denylist_tag` | String | Optional, default `"anvilcraft:non_planetary_minerals"` | Exclusion tag |
| `step` | Integer | Optional, default `10` | Resource generation step size |
| `planet_type` | String | Optional, default `"rocky_planet"` | Planet type |
| `temperature` | String | Optional, default `""` | Temperature parameter |
| `liquid_min` | String | Optional, default `"low"` | Minimum liquid coverage level |
| `output_fluid` | String | Required | Output fluid ID |
| `entries` | `WeightedEntry.CODEC` array | Required | Candidate entry list |
| `pressure_type` | String | Required | Applicable pressure type |
| `life_chances` | `LifeChances.CODEC` | Optional, default `LifeChances.DEFAULT` | Chances of generating life at each temperature |
| `land_entity_tag` | String | Optional, default `"anvilcraft:planetary_land_animals"` | Terrestrial entity tag |
| `aquatic_entity_tag` | String | Optional, default `"anvilcraft:planetary_aquatic_animals"` | Aquatic entity tag |
| `drop_denylist_tag` | String | Optional, default `"anvilcraft:non_planetary_mob_drops"` | Disallowed drop tag |
| `mild_extra_fluids` | `WeightedEntry.CODEC` array | Optional, default `[]` | Extra fluids in mild environments |
| `entries` | `WeightedEntry.CODEC` array | Required | Candidate entry list |
| `civilization_chance` | Integer | Optional, default `50` | Chance of forming civilization |
| `age_min` | Integer | Optional, default `32` | Minimum age |
| `age_max` | Integer | Optional, default `43` | Maximum age |
| `entries` | `WeightedEntry.CODEC` array | Required | Candidate entry list |
| `age_min` | Integer | Optional, default `35` | Minimum age |
| `wasteland_chance` | Integer | Optional, default `10` | Chance of forming wasteland |

[View Planet Resources fields, defaults & recipe example](../packs/celestial/planet_resource)
