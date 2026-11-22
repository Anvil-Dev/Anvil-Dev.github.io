# 加载轨道和选择起始节点

附属机器要预览一颗恒星能否参加演化，先用质量档位、当前表面分类和特殊红矮星标记选择轨道。质量单位是天体菜单使用的铁砧坐标，整数 49 对应内置太阳轨道 `mass_49`。一次选择不会启动、预支或保存演化进度。[轨道选择实现](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L65)

服务端重载时，监听器在资源准备屏障之后读取 `anvilcraft:stellar_tracks.json`、`anvilcraft:stellar_event_profiles.json` 和 `anvilcraft:stellar_track_coverage.json`。每个缺失资源回退到内置文件。三张表一起解码；事件引用、初始表面分类入口、终局节点、24 个质量档及覆盖关系全部校验成功才替换当前库。修改任意一张表导致校验失败时，日志会记录原因，已有库继续可用。已经启动的机器从自己的轨道和事件快照推进。[重载入口](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ReloadEventListener.java#L15) · [库的发布边界](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTrackLibrary.java#L225) · [数据包字段](../packs/stars/)

下面的预览器可在校验附属机器输入或生成调试报表时调用。无有效轨道返回空结果。报告中的索引可以直接用于读取这条轨道的 `phaseNodes()`。

```java
package dev.example.celestial;

import dev.dubhe.anvilcraft.block.entity.celestial.CelestialBodyClass;
import dev.dubhe.anvilcraft.block.entity.celestial.StellarTrack;
import dev.dubhe.anvilcraft.block.entity.celestial.StellarTrackLibrary;
import java.util.Optional;

public final class StellarPreview {
    public record Start(String track, int node, String terminal) {}

    public static Optional<Start> inspect(int mass, CelestialBodyClass surface,
                                          boolean specialRedDwarf, long bodySeed) {
        StellarTrack track = StellarTrackLibrary.select(mass, surface, specialRedDwarf, bodySeed);
        if (track == null) return Optional.empty();
        int node = StellarTrackLibrary.startingPhaseIndex(track, surface);
        return Optional.of(new Start(track.trackId(), node, track.definition().terminal().kind().id()));
    }
}
```

| 接口 | 参数与返回 | 使用边界 |
| --- | --- | --- |
| `canStart(mass, surfaceClass, specialRedDwarf)` | 返回该组合是否有入口 | 特殊红矮星返回 false；41 档只接受棕矮星；42–64 档只接受库列出的主序、巨星和超巨星表面分类。 |
| `select(initialMass, surfaceClass, specialRedDwarf, seed)` | 返回轨道或 null | 实现按档位精确选择，传不同 seed 不会把同一质量换为另一条轨道。省略特殊红矮星参数的重载采用 false。 |
| `track(id)`、`forMass(initialMassAnvils)` | 前者按 ID 查询并允许 null，后者按 `mass_<档位>` 查询 | `forMass` 找不到档位时抛 `IllegalArgumentException`。 |
| `startingPhaseIndex(track, surfaceClass)` | 返回该分类的起始节点序号 | 读取 `definition().startingNodes()`，遗漏入口会抛异常。 |
| `replaceTracks(tracks)`、`replaceTracksFromJson(json)` | 用现有事件表重新验证完整轨道集合 | Java 入口把异常交给调用者，JSON 入口记录错误并返回 false；两者均要求完整的质量档位集合。 |
