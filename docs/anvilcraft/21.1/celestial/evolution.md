# 查找恒星演化的起始阶段

星图界面需要显示某种恒星会从哪一段演化开始时，先用质量与表面类型筛选，再读取轨道中的入口节点。下面的方法适用于玩家选中一个候选天体之后，也适合在数据重载成功后重新生成预览。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.block.entity.celestial.CelestialBodyClass;
import dev.dubhe.anvilcraft.block.entity.celestial.StellarTrack;
import dev.dubhe.anvilcraft.block.entity.celestial.StellarTrackLibrary;
import java.util.Optional;

public final class EvolutionPreview {
    public record Entry(String trackId, int startingNode) {}

    public static Optional<Entry> find(int mass, CelestialBodyClass surface, boolean specialRedDwarf) {
        if (!StellarTrackLibrary.canStart(mass, surface, specialRedDwarf)) return Optional.empty();
        StellarTrack track = StellarTrackLibrary.track("mass_" + mass);
        if (track == null) return Optional.empty();
        int node = StellarTrackLibrary.startingPhaseIndex(track, surface);
        return Optional.of(new Entry(track.trackId(), node));
    }
}
```

| 签名 | 语义与边界 |
| --- | --- |
| `canStart(mass, surface, specialRedDwarf)` | 特殊红矮星直接返回 `false`。质量 41 只接受 `BROWN_DWARF`。42 至 64 接受可演化的主序、巨星、超巨星类型。 |
| `track(id)`、`forMass(int)` | 前者缺失时返回 `null`，后者按 `mass_N` 取记录且缺失抛 `IllegalArgumentException`。`tracks()` 按质量升序列出当前轨道。 |
| `select(mass, surface, specialRedDwarf, seed)` | 不符合起始条件时返回 `null`，否则委托 `forMass`。签名保留种子，该选择路径以质量决定轨道。 |
| `startingPhaseIndex(track, surface)` | 取轨道定义的 `startingNodes` 再查询节点索引。缺少该类的入口或已引用的节点不存在时抛出异常。 |
| `track.resolve(coordinate, surface)` | 返回按金属丰度坐标解析后的轨道。坐标必须有限且在 -1 到 1 之间。 |
| `eventProfiles()`、`eventProfile(id)` | 前者获取当前事件定义，后者取指定 ID，未知 ID 抛出异常。 |

服务端的资源重载在准备屏障之后调用 `StellarTrackLibrary.reload`。轨道、事件和覆盖矩阵都校验成功才替换整套库，失败时保留上一套数据。长期缓存时保存稳定的轨道 ID，在下次使用时重新查表。`replaceTracksFromJson` 适合一次替换整套轨道，失败返回 `false`；`validateTracks()` 返回空字符串表示通过。[轨道库与校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java) · [节点解析](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrack.java) · [重载顺序](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java)
