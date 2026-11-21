# 生成充放电配方

在配方数据生成器里指定原料、产物、功率和持续 tick。负功率走充电器，正功率走放电器。功率为零或时间非正会使构建器校验失败。使用独立的配方 ID 以免与其他生成器覆盖同一路径。

## 从 RecipeProvider 写入文件

在数据生成阶段从提供器的 `buildRecipes` 传入 `RecipeOutput`。这台充电器用 40 tick、4 kW 把铁粒变成金粒。显式指定配方 ID，避免无参 `save` 用产物名称产生重复文件。

```java
package dev.example.press;

import dev.dubhe.anvilcraft.recipe.ChargerChargingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;

public final class PressRecipes {
    public static void generate(RecipeOutput output) {
        ChargerChargingRecipe.builder()
            .requires(Items.IRON_NUGGET)
            .result(Items.GOLD_NUGGET)
            .power(-4)
            .time(40)
            .save(output, ResourceLocation.fromNamespaceAndPath("sandstone_press", "charged_nugget"));
    }
}
```

## 源码中的用例

以本分支的 `RecipeHandler` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.data.recipe;

import dev.anvilcraft.lib.v2.registrum.providers.RegistrumRecipeProvider;

public class RecipeHandler {
    public static void init(RegistrumRecipeProvider provider) {
        new StoneCutterRecipeLoader(provider);
        new ShapedRecipeLoader(provider);

        BlockCrushRecipeLoader.init(provider);
        ItemCrushRecipeLoader.init(provider);
        UnpackRecipeLoader.init(provider);
        BlockCompressRecipeLoader.init(provider);
        ItemCompressRecipeLoader.init(provider);
        MeshRecipeLoader.init(provider);
        StampingRecipeLoader.init(provider);
        SuperHeatingRecipeLoader.init(provider);
        NeutronIrradiationRecipeLoader.init(provider);
        TimeWarpRecipeLoader.init(provider);
        BlockSmearRecipeLoader.init(provider);
        FastCookingRecipeLoader.init(provider);
        SolidLiquidRecipeLoader.init(provider);
        FluidMixingRecipeLoader.init(provider);
        ItemInjectRecipeLoader.init(provider);
        MassInjectRecipeLoader.init(provider);
        SqueezingRecipeLoader.init(provider);
        MultiBlockRecipeLoader.init(provider);
        MultiBlockConversionRecipeLoader.init(provider);
        MobTransformRecipeLoader.init(provider);
        MobTransformWithItemRecipeLoader.init(provider);
        ConcreteRecipeLoader.init(provider);
        MineralFountainRecipeLoader.init(provider);
        LaserHitRecipeLoader.init(provider);
        VanillaRecipesLoader.init(provider);
        JewelCraftingRecipeLoader.init(provider);
        SpecialCraftingRecipeLoader.init(provider);
        ChargerChargingRecipeLoader.init(provider);
        AnvilCollisionCraftRecipeLoader.init(provider);
        MultipleToOneSmithingRecipeLoader.init(provider);
        PermutationRecipeLoader.init(provider);
        DeformationRecipeLoader.init(provider);
        EnergyWeaponMakeRecipeLoader.init(provider);
        PortalConversionRecipeLoader.init(provider);
        ProceduralProcessRecipeLoader.init(provider);
        PlanetResourceRecipeLoader.init(provider);
        TempleDemandRecipeLoader.init(provider);
        SpecialCelestialBodyRecipeLoader.init(provider);
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java)

- [`ChargerBlockEntity` · 第 115 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargerBlockEntity.java#L115)
- [`DischargerBlockEntity` · 第 115 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/DischargerBlockEntity.java#L115)
- [`ModRecipeTypes` · 第 229 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTypes.java#L229)
- [`AnvilCraftJeiPlugin` · 第 178 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L178)
- [`ChargerChargingCategory` · 第 30 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/ChargerChargingCategory.java#L30)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `ChargerChargingRecipe` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-recipe-1#chargerchargingrecipe) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java) |
| `ChargerChargingRecipeLoader` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-data-recipe-1#chargerchargingrecipeloader) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java) |
