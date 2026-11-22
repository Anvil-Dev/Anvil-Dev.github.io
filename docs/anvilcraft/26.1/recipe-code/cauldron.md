# 让方块参与大锅加工

公共初始化时为加工类别增加一个方块状态谓词，客户端和服务端需注册同一组条件。只检查方块是否能工作；原料、流体和产物交给配方。

## 增加一个热源

在双方的公共初始化阶段调用一次 `install()`。服务端匹配配方以及大锅寻找加工位置时，岩浆块都会匹配已有的快速烹饪类别。重复登记会把谓词再次追加到列表。

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

## 源码中的用例

以本分支的 `HasCauldronProcessor` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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
 * 按注册的加工类别匹配锅下方块，使已有配方可复用附属模组提供的加工方块。
 *
 * @param offset 相对于配方位置的方块偏移
 * @param category 加工类别
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

    /** 加工方块条件的编解码类型。 */
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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java)

- [`LargeCauldronBlockEntity` · 第 710 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L710)
- [`HasCauldronProcessor` · 第 38 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/predicate/block/HasCauldronProcessor.java#L38)
- [`RecipeOutputTracker` · 第 69 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/util/RecipeOutputTracker.java#L69)
- [`FastCookingRecipe` · 第 72 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/FastCookingRecipe.java#L72)
- [`NeutronIrradiationRecipe` · 第 68 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/wrap/NeutronIrradiationRecipe.java#L68)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `CauldronProcessing` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/recipe/CauldronProcessing.java) |

<!-- source-guide -->
