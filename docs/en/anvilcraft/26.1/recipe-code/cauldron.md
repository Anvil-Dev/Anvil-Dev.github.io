# Letting Blocks Participate in Cauldron Processing

Add a block state predicate for a processing category during common setup; both client and server must register the same conditions. This only checks whether the block can operate; ingredients, fluids, and outputs are handled by recipes.

## Adding a Heat Source

Call `install()` once during common setup on both sides. When the server matches recipes and when a cauldron searches for processing positions, magma blocks will match the existing fast-cooking category. Registering multiple times appends the predicate to the list again.

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.recipe.CauldronProcessing;
import net.minecraft.world.level.block.Blocks;

public final class MagmaStove {
    public static void install() {
        CauldronProcessing.register(CauldronProcessing.FAST_COOKING, state -> state.is(Blocks.MAGMA_BLOCK));
    }
}
```

## Example in Source

Take `HasCauldronProcessor` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.recipe.anvil.predicate.block;

import com.mojang.serialization.MapCodec;
import com.mojang.serialization.codecs.RecordCodecBuilder;
import dev.anvilcraft.lib.v2.codec.StreamCodecUtil;
import dev.anvilcraft.lib.v2.recipe.cache.BlockCache;
import dev.anvilcraft.lib.v2.recipe.predicate.IRecipePredicate;
import dev.anvilcraft.lib.v2.recipe.util.InWorldRecipeContext;
import dev.dubhe.anvilcraft.api.recipe.CauldronProcessing;
import dev.dubhe.anvilcraft.init.recipe.ModRecipePredicateTypes;
import net.minecraft.core.BlockPos;
import net.minecraft.network.RegistryFriendlyByteBuf;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.resources.Identifier;
import net.minecraft.world.phys.Vec3;

/**
 * Matches the block below the cauldron by its registered processing category so existing recipes can use blocks supplied by add-ons.
 *
 * @param offset Block offset relative to the recipe position
 * @param category Processing category
 */
public record HasCauldronProcessor(Vec3 offset, Identifier category) implements IRecipePredicate<HasCauldronProcessor> {
    public static final MapCodec<HasCauldronProcessor> CODEC = RecordCodecBuilder.mapCodec(instance -> instance.group(
        Vec3.CODEC.fieldOf("offset").forGetter(HasCauldronProcessor::offset),
        Identifier.CODEC.fieldOf("category").forGetter(HasCauldronProcessor::category)
    ).apply(instance, HasCauldronProcessor::new));
    public static final StreamCodec<RegistryFriendlyByteBuf, HasCauldronProcessor> STREAM_CODEC = StreamCodec.composite(
        StreamCodecUtil.VEC3, HasCauldronProcessor::offset,
        Identifier.STREAM_CODEC, HasCauldronProcessor::category,
        HasCauldronProcessor::new
    );

    @Override
    public boolean test(InWorldRecipeContext context) {
        BlockPos pos = BlockPos.containing(context.getPos().add(this.offset));
        BlockCache cache = context.computeIfAbsent(BlockCache.BLOCK_CACHE);
        return CauldronProcessing.matches(this.category, cache.getBlockState(pos));
    }

    @Override
    public Type getType() {
        return ModRecipePredicateTypes.HAS_CAULDRON_PROCESSOR.get();
    }

    /** Codec type for the processing block condition. */
    public static class Type implements IRecipePredicate.Type<HasCauldronProcessor> {
        @Override
        public MapCodec<HasCauldronProcessor> codec() {
            return HasCauldronProcessor.CODEC;
        }

        @Override
        public StreamCodec<RegistryFriendlyByteBuf, HasCauldronProcessor> streamCodec() {
            return HasCauldronProcessor.STREAM_CODEC;
        }
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java)

- [`LargeCauldronBlockEntity` · Line 710](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L710)
- [`HasCauldronProcessor` · Line 38](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java#L38)
- [`RecipeOutputTracker` · Line 69](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/RecipeOutputTracker.java#L69)
- [`FastCookingRecipe` · Line 72](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L72)
- [`NeutronIrradiationRecipe` · Line 68](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L68)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `CauldronProcessing` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java) |

<!-- source-guide -->
