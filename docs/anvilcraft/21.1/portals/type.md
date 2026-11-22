# 从方块 ID 构造传送门类型

PortalType 同时保存注册 ID 和 Portal 实现。从数据构造时会查询方块注册表；注册项必须实现 Portal，否则构造失败。序列化传递 ID。

## 源码中的用例

以本分支的 `PortalConversionRecipeLoader` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java)

- [`PortalConversionRecipeLoader` · 第 25 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/PortalConversionRecipeLoader.java#L25)
- [`EntityMixin` · 第 380 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/EntityMixin.java#L380)
- [`PortalConversionRecipe` · 第 42 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/PortalConversionRecipe.java#L42)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `PortalType` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/portal/PortalType.java) |
