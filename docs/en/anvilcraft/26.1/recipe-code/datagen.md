# Generating a Block Crushing Recipe from the Data Event

Use the block crushing serializer to turn end stone into calcite when an anvil hits it. The example adds `sandstone_press:crush/end_stone`. During data generation, NeoForge sets up the output directory and registry lookup. Minecraft's `RecipeProvider.Runner` waits for the registries before creating the recipe provider.

Add `dev/example/press/PressRecipeProvider.java` to your add-on's main source set. This example starts data generation with `clientData()` and subscribes to the corresponding `GatherDataEvent.Client`. This run can also generate server-side recipes under `data/`.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockCrushRecipe;
import net.minecraft.core.HolderLookup;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.RecipeProvider;
import net.minecraft.resources.Identifier;
import net.minecraft.world.level.block.Blocks;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.data.event.GatherDataEvent;

@EventBusSubscriber(modid = "sandstone_press")
public final class PressRecipeProvider extends RecipeProvider {
    private PressRecipeProvider(HolderLookup.Provider registries, RecipeOutput output) {
        super(registries, output);
    }

    @SubscribeEvent
    public static void gather(GatherDataEvent.Client event) {
        var generator = event.getGenerator();
        generator.addProvider(true, new RecipeProvider.Runner(generator.getPackOutput(), event.getLookupProvider()) {
            @Override
            protected RecipeProvider createRecipeProvider(HolderLookup.Provider registries, RecipeOutput output) {
                return new PressRecipeProvider(registries, output);
            }

            @Override
            public String getName() {
                return "Sandstone Press block crushing recipes";
            }
        });
    }

    @Override
    protected void buildRecipes() {
        BlockCrushRecipe.builder()
            .input(Blocks.END_STONE)
            .result(Blocks.CALCITE)
            .save(output, Identifier.fromNamespaceAndPath("sandstone_press", "crush/end_stone"));
    }
}
```

Append this run configuration to the `build.gradle` from [Getting Started](../getting-started/gradle). Include the generated directory in the main resource source set so the recipes ship with the add-on.

```groovy
neoForge.runs {
    data {
        clientData()
        programArguments.addAll '--mod', 'sandstone_press', '--all',
            '--output', file('src/generated/resources').absolutePath,
            '--existing', file('src/main/resources').absolutePath
    }
}
sourceSets.main.resources.srcDir 'src/generated/resources'
```

Run `./gradlew runData` and inspect `src/generated/resources/data/sandstone_press/recipe/crush/end_stone.json`. Its top-level `type` should be `anvilcraft:block_crush`. If the build reports a duplicate ID, check whether another generator saves the same recipe.

| Entry point or parameter | When and how to use it |
| --- | --- |
| `GatherDataEvent.Client` | The Gradle client data run fires this event. Add the server-side JSON provider to the `DataGenerator` here. |
| `Runner.createRecipeProvider(registries, output)` | Retain the output and registries for this run. Other builders can use these `registries` to look up item tags. |
| `buildRecipes()` | Runs when the provider generates recipes. Loading recipes on the server or triggering an anvil in-game does not call this method. |
| `input(Block)`, `result(Block)` | Specify the block to match and the block it becomes, respectively. |
| `save(output, id)` | Passes the recipe to this run's output. The ID's namespace and path determine the data file's location. |

[Block crushing fields and example](../packs/impact/block_crush) · [Recipe builders for this version](../builders/) · [Gradle configuration for the data run](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/gradle/scripts/moddevgradle.gradle)
