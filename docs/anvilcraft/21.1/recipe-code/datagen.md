# 在数据生成入口写出第一条铁砧配方

目标是在构建附属模组时生成一条方块粉碎配方。铁砧砸中圆石后会把它变成沙砾。配方归属 `sandstone_press`，即便其他模组也把圆石用作原料，文件 ID 仍由自己的命名空间控制。

把以下类保存为 `dev/example/press/PressRecipeProvider.java`。模组数据生成事件提供输出目录和注册表查询；`buildRecipes` 每次被调用时，为本次输出创建新的构建器。

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

在[快速开始](../getting-started/gradle)的 `build.gradle` 末尾加入数据生成运行配置，并把生成目录交给资源处理任务。

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

执行 `./gradlew runData`，打开 `src/generated/resources/data/sandstone_press/recipe/crush/cobblestone.json`。打包前确认 `type` 为 `anvilcraft:block_crush`。手写和生成资源若使用同一路径，先选择保留哪一份，再执行 `processResources`。

| 入口或参数 | 使用时机与约束 |
| --- | --- |
| `GatherDataEvent` | 数据生成启动时注册提供器。用 `includeServer()` 限定这批服务端数据。 |
| `RecipeOutput` | 单次生成所用的写入目标，由提供器传入。配方构建结束时再交给 `save`。 |
| `input(Block)`、`result(Block)` | 传入已注册的方块。本例匹配圆石，成功后写入沙砾。 |
| `ResourceLocation` | 指定配方文件相对路径。同一次生成中重复提交一个配方 ID 会报错。 |

[方块粉碎的 JSON 字段](../packs/impact/block_crush) · [其他配方的构建器](../builders/) · [上游的数据生成配置](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/gradle/scripts/moddevgradle.gradle)
