# 生成充放电配方

在配方数据生成器里指定原料、产物、功率和持续 tick。负功率走充电器，正功率走放电器。功率为零或时间非正会使构建器校验失败。使用独立的配方 ID 以免与其他生成器覆盖同一路径。

## 从 RecipeProvider 写入文件

在数据生成阶段传入注册表的 `HolderGetter<Item>` 及 `RecipeOutput`；使用标签原料时，构建器在该注册表视图中查询标签。这台充电器用 40 tick、4 kW 把铁粒变成金粒。显式指定配方 ID，避免无参 `save` 用产物名称产生重复文件。

```java
package dev.example.press;

import dev.dubhe.anvilcraft.recipe.ChargerChargingRecipe;
import net.minecraft.data.recipes.RecipeOutput;
import net.minecraft.core.HolderGetter;
import net.minecraft.resources.Identifier;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Items;

public final class PressRecipes {
    public static void generate(HolderGetter<Item> items, RecipeOutput output) {
        ChargerChargingRecipe.builder(items)
            .requires(Items.IRON_NUGGET)
            .result(Items.GOLD_NUGGET)
            .power(-4)
            .time(40)
            .save(output, Identifier.fromNamespaceAndPath("sandstone_press", "charged_nugget"));
    }
}
```

## 源码中的用例

以本分支的 `RecipeHandler` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.data.recipe;

import dev.anvilcraft.lib.v2.registrum.providers.generators.RegistrumRecipeProvider;

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
        LaserHitRecipeLoader.init(provider);
        ItemInjectRecipeLoader.init(provider);
        MassInjectRecipeLoader.init(provider);
        SqueezingRecipeLoader.init(provider);
        MultiBlockRecipeLoader.init(provider);
        MultiBlockConversionRecipeLoader.init(provider);
        MobTransformRecipeLoader.init(provider);
        MobTransformWithItemRecipeLoader.init(provider);
        ConcreteRecipeLoader.init(provider);
        MineralFountainRecipeLoader.init(provider);
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
        PlanetResourceRecipeLoader.init(provider);
        SpecialCelestialBodyRecipeLoader.init(provider);
        TempleDemandRecipeLoader.init(provider);
        ProceduralProcessRecipeLoader.init(provider);
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/RecipeHandler.java)

- [`ChargerBlockEntity` · 第 117 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/ChargerBlockEntity.java#L117)
- [`DischargerBlockEntity` · 第 120 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/DischargerBlockEntity.java#L120)
- [`ModRecipeSerializers` · 第 198 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeSerializers.java#L198)
- [`ModRecipeTypes` · 第 103 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/recipe/ModRecipeTypes.java#L103)
- [`AnvilCraftJeiPlugin` · 第 177 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/AnvilCraftJeiPlugin.java#L177)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `ChargerChargingRecipe` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/ChargerChargingRecipe.java) |
| `ChargerChargingRecipeLoader` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/recipe/ChargerChargingRecipeLoader.java) |

<!-- source-guide -->
