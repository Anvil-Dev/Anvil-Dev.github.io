# Special Celestial Bodies Recipe Output

Binds seed items to a celestial body preset, specifying resources, physical properties, and optional landing rules.

Constructs the celestial definition directly and passes it to RecipeOutput. Property, resource, and demand collections are passed in constructor parameter order; empty collections leave that category empty.

Call `generate` from your add-on’s data provider with the current `RecipeOutput`. Data generation writes recipe `example:special_celestial_body/guide` to `data/example/recipe/special_celestial_body/guide.json`.

```java
package dev.example.recipebuild;

import dev.dubhe.anvilcraft.block.entity.celestial.LiquidCoverage;
import dev.dubhe.anvilcraft.block.entity.celestial.SpecialCelestialBodyRecipe;
import java.util.List;
import java.util.Optional;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;

public final class SpecialCelestialBodyRecipes {
    public static void generate(RecipeOutput destination) {
        var generatedRecipe = new SpecialCelestialBodyRecipe(
                "white_hole", "white_hole", true, false,
                3, 1, 54, 64, Optional.empty(), Optional.of(LiquidCoverage.NONE),
                6, 0, 0f, List.of(anvil("white_hole")),
                List.of(), List.of(), List.of(), List.of(), List.of(), List.of(), List.of(), Optional.empty()
            );
        destination.accept(ResourceLocation.fromNamespaceAndPath("example", "special_celestial_body/guide"), generatedRecipe, null);
    }

    private static ResourceLocation anvil(String path) {
        return ResourceLocation.fromNamespaceAndPath("anvilcraft", path);
    }
}
```

Implementation uses an actual recipe chain from upstream `SpecialCelestialBodyRecipeLoader.createWhiteHole`. [Original recipe call](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/SpecialCelestialBodyRecipeLoader.java#L283)

| Entrypoint | Calling Convention |
| --- | --- |
| `generate` | Receives the current output object during datagen; writes one recipe per call. |
| `RecipeOutput.accept` | Explicitly specifies the recipe key. Each ID should be written only once per generation run. |

## Generated File Field Conventions

| Field | JSON Type or Codec | Required & Default | Purpose |
| --- | --- | --- | --- |
| `name` | String | Required | Name |
| `time` | Integer | Required | Time parameter |
| `space` | Integer | Required | Space property |
| `mass` | Integer | Required | Mass value |
| `energy` | Integer | Required | Energy property |
| `model` | String | Required | Model identifier |
| `liquid_coverage` | `LIQUID_COVERAGE_CODEC` | Optional | Liquid coverage level |
| `magnetic_field` | Integer | Required | Magnetic field strength |
| `rotation_speed` | Integer | Required | Rotation speed |
| `axial_tilt` | Number | Required | Axial tilt |
| `seed_items` | Resource ID array | Required | Associated seed item list |
| `resources` | `ResourceFields.CODEC` | Required | Resource config produced by this body |
| `landing` | `CelestialTravelData.CODEC` | Optional | Landing rules |
| `travel` | `CelestialTravelData.CODEC` | Optional | Travel rules |
| `id` | String | Required | Registry ID |
| `weight` | Integer | Required | Relative weight when sampling from candidates |
| `id` | String | Required | Registry ID |
| `count` | Integer | Required | Count |
| `has_atmosphere` | Boolean | Optional | Whether it has an atmosphere |
| `minerals` | `WeightedEntry.CODEC` array | Optional, default `[]` | Mineral entries |
| `fluids` | `WeightedEntry.CODEC` array | Optional, default `[]` | Fluid entries |
| `biological_items` | `WeightedEntry.CODEC` array | Optional, default `[]` | Biological item resources |
| `biological_fluids` | `WeightedEntry.CODEC` array | Optional, default `[]` | Biological fluid resources |
| `offerings` | `WeightedEntry.CODEC` array | Optional, default `[]` | Offering list |
| `temple_blessings` | `DemandEntry.CODEC` array | Optional, default `[]` | Temple blessing entries |
| `temple_punishments` | `DemandEntry.CODEC` array | Optional, default `[]` | Temple punishment entries |
| `needs_custom_model` | Boolean | Optional, default `false` | Whether a custom model is used |
| `can_be_shattered` | Boolean | Optional | Whether it can be shattered |
| `exclude_from_monolith` | Boolean | Optional, default `false` | Whether excluded from monolith selection |
| `atmosphere` | `ColorRGBA.CODEC` | Optional | Atmosphere color |
| `type` | `Type.CODEC` | Optional, default `Type.FIXED` | Type ID dispatched to the implementation |
| `scale` | Number | Optional, default `1.0` | Coordinate scale factor |
| `x` | Integer | Optional, default `0` | X coordinate |
| `y` | Integer | Optional, default `64` | Y coordinate |
| `z` | Integer | Optional, default `0` | Z coordinate |
| `radius` | Integer | Optional, default `8` | Radius parameter |
| `type` | `Type.CODEC` | Optional, default `Type.ENTRY_PORTAL` | Type ID dispatched to the implementation |
| `x` | Integer | Optional, default `0` | X coordinate |
| `y` | Integer | Optional, default `64` | Y coordinate |
| `z` | Integer | Optional, default `0` | Z coordinate |
| `radius` | Integer | Optional, default `8` | Radius parameter |
| `dimension` | Resource ID | Required | Dimension resource ID |
| `coordinate_rule` | `CoordinateRule.CODEC` | Optional, default `CoordinateRule.DEFAULT` | Destination coordinate calculation rule |
| `return_rule` | `ReturnRule.CODEC` | Optional, default `ReturnRule.DEFAULT` | Return coordinate calculation rule |

[View Special Celestial Bodies fields, defaults & recipe example](../packs/celestial/special_celestial_body)
