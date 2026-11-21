# 从数据生成事件写出方块粉碎配方

让铁砧把末地石砸成方解石，可以交给方块粉碎序列化器处理。下面新增 `sandstone_press:crush/end_stone`。数据生成时，NeoForge 先创建输出目录和注册表查询，Minecraft 的 `RecipeProvider.Runner` 等注册表就绪后才创建具体提供器。

在附属模组的主源集中加入 `dev/example/press/PressRecipeProvider.java`。这里采用 `clientData()` 启动数据生成，订阅与它匹配的 `GatherDataEvent.Client`。这次运行同样可以生成放在 `data/` 下的服务端配方。

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

在[快速开始](../getting-started/gradle)的 `build.gradle` 末尾加入运行配置。生成文件还需进入主资源源集，打包时才会随附属模组发布。

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

运行 `./gradlew runData`，检查 `src/generated/resources/data/sandstone_press/recipe/crush/end_stone.json`。文件顶层的 `type` 应为 `anvilcraft:block_crush`。如果构建报同名 ID，查看是否有第二个生成器重复保存了这条配方。

| 入口或参数 | 含义和使用边界 |
| --- | --- |
| `GatherDataEvent.Client` | 由当前 Gradle 的客户端数据生成运行触发。在这里向 `DataGenerator` 提交服务端 JSON 提供器。 |
| `Runner.createRecipeProvider(registries, output)` | 保存好这轮输出和注册表。需要查询物品标签的其他构建器可从当前 `registries` 获取查询器。 |
| `buildRecipes()` | 本轮生成实际运行时调用。服务端加载配方或玩家触发铁砧时不会执行这段 Java。 |
| `input(Block)`、`result(Block)` | 分别给出待匹配方块及转换结果。 |
| `save(output, id)` | 将一条配方交给本次输出。ID 中的命名空间和路径决定数据文件的位置。 |

[方块粉碎的字段与示例](../packs/impact/block_crush) · [本分支的配方构建器](../builders/) · [数据运行的 Gradle 配置](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/gradle/scripts/moddevgradle.gradle)
