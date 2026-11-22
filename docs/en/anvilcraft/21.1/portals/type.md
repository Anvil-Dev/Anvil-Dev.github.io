# Constructing Portal Types from Block IDs

`PortalType` stores both the registry ID and the `Portal` implementation. When constructed from data, it queries the block registry; the registered block must implement `Portal`, otherwise construction fails. Serialization passes the ID.

## Example in Source

Take `PortalConversionRecipeLoader` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.data.recipe;

import dev.anvilcraft.lib.v2.registrum.providers.RegistrumRecipeProvider;
import dev.anvilcraft.lib.v2.registrum.util.entry.BlockEntry;
import dev.dubhe.anvilcraft.api.portal.PortalType;
import dev.dubhe.anvilcraft.init.block.ModBlocks;
import dev.dubhe.anvilcraft.recipe.PortalConversionRecipe;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.Blocks;

public class PortalConversionRecipeLoader {
    public static void init(RegistrumRecipeProvider provider) {
        PortalConversionRecipeLoader.spectral(provider, Blocks.DAMAGED_ANVIL, 0.01F);
        PortalConversionRecipeLoader.spectral(provider, Blocks.CHIPPED_ANVIL, 0.02F);
        PortalConversionRecipeLoader.spectral(provider, Blocks.ANVIL, 0.03F);
        PortalConversionRecipeLoader.spectral(provider, ModBlocks.ROYAL_ANVIL, 0.5F);
        PortalConversionRecipeLoader.spectral(provider, ModBlocks.FROST_ANVIL, 1.0F);
        PortalConversionRecipeLoader.spectral(provider, ModBlocks.EMBER_ANVIL, 1.0F);
        PortalConversionRecipeLoader.spectral(provider, ModBlocks.TRANSCENDENCE_ANVIL, 1.0F);
    }

    @SuppressWarnings("deprecation")
    private static void spectral(RegistrumRecipeProvider provider, Block anvil, float chance) {
        PortalConversionRecipe.builder()
            .type(PortalType.END_PORTAL)
            .input(anvil)
            .result(ModBlocks.SPECTRAL_ANVIL.getDefaultState(), chance)
            .save(provider, anvil.builtInRegistryHolder().key().location().getPath());
    }

    private static void spectral(RegistrumRecipeProvider provider, BlockEntry<? extends Block> anvil, float chance) {
        PortalConversionRecipe.builder()
            .type(PortalType.END_PORTAL)
            .input(anvil)
            .result(ModBlocks.SPECTRAL_ANVIL.getDefaultState(), chance)
            .save(provider, anvil.getId().getPath());
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java)

- [`PortalConversionRecipeLoader` · Line 25](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L25)
- [`EntityMixin` · Line 380](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L380)
- [`PortalConversionRecipe` · Line 42](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L42)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `PortalType` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java) |
