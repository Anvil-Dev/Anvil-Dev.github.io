# Writing Your First Anvil Recipe in Data Generation

The goal is to generate a block crush recipe when building your add-on mod. When an anvil lands on cobblestone, it turns it into gravel. The recipe belongs to `sandstone_press`, so even if other mods also use cobblestone as an ingredient, the file ID stays under your own namespace.

Save the class below as `dev/example/press/PressRecipeProvider.java`. The mod data generation event provides the output directory and registry lookup; `buildRecipes` creates a new builder for this output each time it is called.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.recipe.anvil.wrap.BlockCrushRecipe;
import java.util.concurrent.CompletableFuture;
import net.minecraft.core.HolderLookup;
import net.minecraft.data.PackOutput;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.data.recipes.RecipeProvider;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Blocks;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.data.event.GatherDataEvent;

@EventBusSubscriber(modid = "sandstone_press")
public final class PressRecipeProvider extends RecipeProvider {
    public PressRecipeProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries) {
        super(output, registries);
    }

    @SubscribeEvent
    public static void gather(GatherDataEvent event) {
        var generator = event.getGenerator();
        generator.addProvider(event.includeServer(),
            new PressRecipeProvider(generator.getPackOutput(), event.getLookupProvider()));
    }

    @Override
    protected void buildRecipes(RecipeOutput output) {
        BlockCrushRecipe.builder()
            .input(Blocks.COBBLESTONE)
            .result(Blocks.GRAVEL)
            .save(output, ResourceLocation.fromNamespaceAndPath("sandstone_press", "crush/cobblestone"));
    }
}
```

Add the data generation run configuration to the end of `build.gradle` from [Getting Started](../getting-started/gradle), and pass the generated directory to the resource processing task.

```groovy
neoForge.runs {
    data {
        data()
        programArguments.addAll '--mod', 'sandstone_press', '--all',
            '--output', file('src/generated/resources').absolutePath,
            '--existing', file('src/main/resources').absolutePath
    }
}
sourceSets.main.resources.srcDir 'src/generated/resources'
```

Run `./gradlew runData` and open `src/generated/resources/data/sandstone_press/recipe/crush/cobblestone.json`. Before packaging, confirm that `type` is `anvilcraft:block_crush`. If handwritten and generated resources share the same path, choose which one to keep before running `processResources`.

| Entrypoint or Parameter | When to Use & Constraints |
| --- | --- |
| `GatherDataEvent` | Registers the provider when data generation starts. Use `includeServer()` to limit to server data. |
| `RecipeOutput` | Write target for a single generation run, passed by the provider. Hand it to `save` once recipe building is complete. |
| `input(Block)`, `result(Block)` | Pass registered blocks. This example matches cobblestone and writes gravel on success. |
| `ResourceLocation` | Specifies the relative recipe file path. Submitting a duplicate recipe ID in the same generation run throws an error. |

[JSON fields for block crushing](../packs/impact/block_crush) · [Other recipe builders](../builders/) · [Upstream data generation config](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/gradle/scripts/moddevgradle.gradle)
