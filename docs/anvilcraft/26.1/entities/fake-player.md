# 为机器建立玩家操作上下文

机器需要以玩家语义调用放置、挖掘或攻击逻辑时，按操作选择假玩家实现。查对应工厂的调用点，确定目标服务器世界和物品栈。

## 源码中的用例

以本分支的 `LevelEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.StorageComparatorManager;
import dev.dubhe.anvilcraft.api.TerminalSourceManager;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeBlockPlacer;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeDestroyer;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeKiller;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakePlayers;
import dev.dubhe.anvilcraft.api.heat.collector.HeatCollectorManager;
import dev.dubhe.anvilcraft.api.world.load.LevelLoadManager;
import dev.dubhe.anvilcraft.block.RedstoneWireClientPowerCache;
import dev.dubhe.anvilcraft.block.RedstoneWireNetworkManager;
import dev.dubhe.anvilcraft.block.entity.AccelerationRingBlockEntity;
import dev.dubhe.anvilcraft.block.entity.DeflectionRingBlockEntity;
import dev.dubhe.anvilcraft.util.dummy.DummyArmadillo;
import dev.dubhe.anvilcraft.util.dummy.DummyCat;
import dev.dubhe.anvilcraft.util.dummy.DummyWolf;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.LevelAccessor;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.level.ChunkEvent;
import net.neoforged.neoforge.event.level.LevelEvent;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class LevelEventListener {

    @SubscribeEvent
    public static void onChunkLoad(ChunkEvent.Load event) {
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            RedstoneWireNetworkManager.chunkLoaded(serverLevel, event.getChunk());
        }
    }

    @SubscribeEvent
    public static void onChunkUnload(ChunkEvent.Unload event) {
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            RedstoneWireNetworkManager.chunkUnloaded(serverLevel, event.getChunk().getPos());
        } else if (event.getLevel() instanceof Level level) {
            RedstoneWireClientPowerCache.clearChunk(level, event.getChunk().getPos());
        }
    }

    /// 世界加载事件
    @SubscribeEvent
    public static void onLevelLoad(LevelEvent.Load event) {
        if (event.getLevel() instanceof ServerLevel) {
            AnvilCraftFakePlayers.blockPlacer = new AnvilCraftFakeBlockPlacer();
            AnvilCraftFakePlayers.killer = new AnvilCraftFakeKiller();
            AnvilCraftFakePlayers.destroyer = new AnvilCraftFakeDestroyer();
        }
    }

    /// 世界卸载事件
    @SubscribeEvent
    public static void onLevelUnload(LevelEvent.Unload event) {
        LevelAccessor accessor = event.getLevel();
        if (accessor instanceof Level level) {
            AccelerationRingBlockEntity.clear(level);
            DeflectionRingBlockEntity.clear(level);
            RedstoneWireClientPowerCache.clear(level);
            HeatCollectorManager.remove(level);
            DummyArmadillo.clear(level);
            DummyCat.clear(level);
            DummyWolf.clear(level);
        }
        if (accessor instanceof ServerLevel serverLevel) {
            AnvilCraftFakePlayers.clear(serverLevel);
            LevelLoadManager.removeAll(serverLevel);
            // LEVELS 按 ServerLevel 对象持有强引用，世界卸载时清理才能释放整张拓扑缓存。
            RedstoneWireNetworkManager.clear(serverLevel);
            TerminalSourceManager.clear(serverLevel);
            StorageComparatorManager.clear(serverLevel);
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java)

- [`AnvilCraftFakeKiller` · 第 85 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L85)
- [`HeliostatsBlockEntity` · 第 137 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/HeliostatsBlockEntity.java#L137)
- [`CompositeBlockPlacement` · 第 159 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/placement/CompositeBlockPlacement.java#L159)
- [`BlockDevourerBlock` · 第 288 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L288)
- [`BlockPlacerBlock` · 第 293 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockPlacerBlock.java#L293)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `AnvilCraftFakePlayers` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-entity-fakeplayer#anvilcraftfakeplayers) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java) |
| `AnvilCraftFakeBlockPlacer` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-entity-fakeplayer#anvilcraftfakeblockplacer) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java) |
| `AnvilCraftFakeDestroyer` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-entity-fakeplayer#anvilcraftfakedestroyer) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java) |

<!-- source-guide -->
