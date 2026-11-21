# 添加一个行星测绘站巨构

附属模组可向 `ModRegistryKeys.MEGASTRUCTURE` 注册定义。下面的测绘站只出现在无增幅的岩质行星上。它使用内置一环模型，建造消耗八个铜块；运行后每五秒发出一组定位粒子。在模组构造函数调用 `SurveyStation.register(modBus)` 即可注册。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.block.entity.CelestialForgingAnvilBlockEntity;
import dev.dubhe.anvilcraft.block.entity.celestial.Megastructure;
import dev.dubhe.anvilcraft.block.entity.celestial.RockyPlanetData;
import dev.dubhe.anvilcraft.block.entity.megastructure.BaseMegastructureHandler;
import dev.dubhe.anvilcraft.init.registry.ModRegistryKeys;
import net.minecraft.core.BlockPos;
import net.minecraft.core.particles.ParticleTypes;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.block.Blocks;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;

public final class SurveyStation {
    private static final DeferredRegister<Megastructure> DEFINITIONS =
        DeferredRegister.create(ModRegistryKeys.MEGASTRUCTURE, "workshop");

    public static void register(IEventBus bus) {
        DEFINITIONS.register("survey_station", id -> Megastructure.builder(id, "survey_station")
            .displayName("screen.workshop.survey_station")
            .prerequisite(ctx -> !ctx.amplified() && ctx.body() instanceof RockyPlanetData)
            .ring(1)
            .model(1, ResourceLocation.fromNamespaceAndPath("anvilcraft", "block/celestial_forging_anvil_ring_1_excavator"))
            .material(Blocks.COPPER_BLOCK, 8)
            .handler(Handler::new)
            .build());
        DEFINITIONS.register(bus);
    }

    private static final class Handler extends BaseMegastructureHandler {
        @Override
        public String name() {
            return "survey_station";
        }

        @Override
        public void serverTick(CelestialForgingAnvilBlockEntity anvil) {
            if (!(anvil.getLevel() instanceof ServerLevel level) || level.getGameTime() % 100L != 0) return;
            BlockPos pos = anvil.getBlockPos();
            level.sendParticles(ParticleTypes.END_ROD, pos.getX() + 0.5, pos.getY() + 2.0,
                pos.getZ() + 0.5, 3, 0.12, 0.02, 0.12, 0.01);
        }
    }
}
```

在 `assets/workshop/lang/zh_cn.json` 中声明显示名。

```json
{"screen.workshop.survey_station":"行星测绘站"}
```

| 构建器方法 | 参数与边界 |
| --- | --- |
| `builder(id, name)`、`displayName(key)` | `id` 与注册 ID 保持一致，供存档恢复；`name` 保留给旧存档和处理器。显示名缺省时取 `screen.anvilcraft.cfa.megastructure.<name>`。 |
| `prerequisite(predicate)`、`ring(int)`、`ring(function)` | `Context` 带当前天体、增幅标志和允许为 `null` 的资源集合。缺省前提为真，环函数必须指定。新建时还会过滤此增幅状态不支持的环。 |
| `model(ring, location)` | 每个可用环都要提供模型。重复添加同一环立即抛异常，读取尚未定义的环模型也会抛异常。 |
| `rotation(function)` | 接受天体、环号、基础旋转、天体旋转的上下文，返回该环旋转角。默认沿用基础旋转。 |
| `material(item, count)` | 指定单次建造的材料和数量。数量必须为正；没有配置材料时 `material()` 返回空栈。 |
| `handler(supplier)`、`build()` | 工厂每次创建独立处理器实例。缺少环函数、处理器工厂时构建失败。 |
| `auxiliary()` | 标成可与主巨构并存的辅助巨构。处理器应实现 `isAuxiliaryActive`，并把占环状态写入存档与客户端同步数据。 |

`onBuild` 与 `onClear` 对应建成和清除。`serverTick` 执行已启用的处理器。区块卸载时 `onUnload` 用于撤销运行时注册，应保留持久化状态。需要传递自己的运行进度时，分开实现 `saveAdditional/loadAdditional` 与 `writeUpdateTag/readUpdateTag`。查看已建巨构时按稳定 ID 调 `getOption`，它可以在天体演化后继续还原建筑；建造菜单使用 `getOptions` 重新应用前提。[巨构构建器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/Megastructure.java) · [处理器生命周期](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java) · [注册与恢复](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialRefactorRegistry.java)
