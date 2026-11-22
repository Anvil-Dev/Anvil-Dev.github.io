# 对指定维度催熟或抑制生成

催熟状态按维度管理，重复触发同一位置可能命中当刻的去重逻辑。电感灯的抑制区域由已登记的方块实体快照维护。

## 源码中的用例

以本分支的 `LevelEventListener` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

```java
package dev.dubhe.anvilcraft.event;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.SpawningManager;
import dev.dubhe.anvilcraft.api.chargecollector.ChargeCollectorManager;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeBlockPlacer;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeDestroyer;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakeKiller;
import dev.dubhe.anvilcraft.api.entity.fakeplayer.AnvilCraftFakePlayers;
import dev.dubhe.anvilcraft.api.world.load.LevelLoadManager;
import dev.dubhe.anvilcraft.block.RedstoneWireClientPowerCache;
import dev.dubhe.anvilcraft.block.RedstoneWireNetworkManager;
import dev.dubhe.anvilcraft.block.entity.AccelerationRingBlockEntity;
import dev.dubhe.anvilcraft.block.entity.DeflectionRingBlockEntity;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.Level;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.fml.common.EventBusSubscriber;
import net.neoforged.neoforge.event.level.ChunkEvent;
import net.neoforged.neoforge.event.level.LevelEvent;

@EventBusSubscriber(modid = AnvilCraft.MOD_ID)
public class LevelEventListener {

    @SubscribeEvent
    public static void onChunkLoad(ChunkEvent.Load event) {
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            // 网络缓存不持久化，区块进入服务端内存时必须用其中的导线作为重建种子。
            RedstoneWireNetworkManager.chunkLoaded(serverLevel, event.getChunk());
        }
    }

    @SubscribeEvent
    public static void onChunkUnload(ChunkEvent.Unload event) {
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            // 主动拆除跨区块缓存，避免网络继续引用已卸载节点或从其读取幽灵信号。
            RedstoneWireNetworkManager.chunkUnloaded(serverLevel, event.getChunk().getPos());
        } else if (event.getLevel() instanceof Level level) {
            RedstoneWireClientPowerCache.clearChunk(level, event.getChunk().getPos());
        }
    }

    /**
     * 世界加载事件
     */
    @SubscribeEvent
    public static void onLevelLoad(LevelEvent.Load event) {
        if (event.getLevel() instanceof ServerLevel) {
            AnvilCraftFakePlayers.blockPlacer = new AnvilCraftFakeBlockPlacer();
            AnvilCraftFakePlayers.killer = new AnvilCraftFakeKiller();
            AnvilCraftFakePlayers.destroyer = new AnvilCraftFakeDestroyer();
        }
    }

    /**
     * 世界卸载事件
     */
    @SubscribeEvent
    public static void onLevelUnload(LevelEvent.Unload event) {
        if (event.getLevel() instanceof Level level) {
            AccelerationRingBlockEntity.clear(level);
            ChargeCollectorManager.clear(level);
            DeflectionRingBlockEntity.clear(level);
            SpawningManager.clear(level);
            RedstoneWireClientPowerCache.clear(level);
        }
        if (event.getLevel() instanceof ServerLevel serverLevel) {
            AnvilCraftFakePlayers.clear(serverLevel);
            LevelLoadManager.removeAll(serverLevel);
            // LEVELS 按 ServerLevel 对象持有强引用，世界卸载时清理才能释放整张拓扑缓存。
            RedstoneWireNetworkManager.clear(serverLevel);
        }
    }
}
```

:::

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java)

- [`InductionLightBlockEntity` · 第 51 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/InductionLightBlockEntity.java#L51)
- [`LevelEventListener` · 第 64 行](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L64)

## 接口和参数

| 类型 | 声明 |
| --- | --- |
| `RipeningManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/RipeningManager.java) |
| `SpawningManager` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/SpawningManager.java) |
