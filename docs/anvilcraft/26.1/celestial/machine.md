# 让机器和终端读取演化进度

演化加速器建成后，铸星砧才会建立运行状态。`CfaMegastructureManager` 会把建成通知交给对应的 handler；`AcceleratorHandler.onBuild` 在服务端确认当前是恒星、没有正在进行的演化、且能选中轨道后，记录下初始质量、能量、大小、演化种子和游戏时间，并把阶段配置存成运行快照。如果你想扩展显示面板，直接读取铸星砧提供的查询方法就行。[建成通知](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CfaMegastructureManager.java#L221) · [建立快照](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L456)

每次服务端 tick，铸星砧都会调用巨构管理器。演化还没完成时如果拆掉增幅器，进度会冻结；恢复增幅器后，暂停的时长会加回时间线。处理器在执行到期事件和结算终局前，都会先标上“已应用”。爆发的闪光和摄像机震动属于阶段事件，残骸生成或天体解体则是在终局分派时执行的，所以终端不能靠“刚刚震动过”来判断残骸已经生成。[推进、暂停与事件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L410) · [结算残骸](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L589)

下面的代码给调试终端生成一次只读快照：面板刷新时调用 `read`，返回 `Optional.empty()` 表示暂时没有轨道。游戏自带终端也是在本地更新剩余秒数，同时用服务端同步的数据来校准显示。[原版面板的读取位置](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L645)

```java
package dev.example.celestial;

import dev.dubhe.anvilcraft.block.entity.CelestialForgingAnvilBlockEntity;
import java.util.Optional;

public record EvolutionReadout(String track, String outcome, boolean paused,
                               int remainingTicks, float totalProgress) {
    public static Optional<EvolutionReadout> read(CelestialForgingAnvilBlockEntity anvil,
                                                  float partialTick) {
        if (anvil.getStellarEvolutionState() == null) return Optional.empty();
        return Optional.of(new EvolutionReadout(anvil.getStellarTrackId(),
            anvil.getStellarTerminalOutcomeId(), anvil.isAcceleratorPaused(),
            anvil.getAcceleratorTicksRemaining(), anvil.getStellarTotalProgress(partialTick)));
    }
}
```

| 查询 | 含义 | 边界 |
| --- | --- | --- |
| `getStellarEvolutionState()`、`getEvolutionTrack()` | 获取演化状态、当前解析的轨道 | 两者都允许 null。终端应给空闲机器留出显示状态。 |
| `getStellarTrackId()`、`getStellarTerminalOutcomeId()` | 轨道 ID、配置的终局 ID | 无对应状态或轨道时可能为空字符串。终局 ID 表示预期结果。 |
| `getStellarTotalProgress(float partialTick)`、`getStellarPhaseProgress()` | 整段时间线、当前阶段的进度 | 绘制连续动画时将渲染插值传给前者；显示静态数值可传 0。 |
| `isAcceleratorPaused()`、`getAcceleratorTicksRemaining()` | 暂停标志、剩余 tick | 终端显示秒数时以 20 tick 换算。世界变化和进度结算由服务端执行。 |
| `StellarTerminal.Kind` | `white_dwarf`、`neutron_star`、`black_hole` 产生相应残骸，`disruption` 清除天体，`keep` 保留天体 | 对解体结果要求 `massAnvils`、`solarMass` 均为 0。其余残骸的铁砧坐标和太阳质量要与质量表对应。 |

[终局数据约束](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/StellarTerminal.java#L35) · [铸星砧的公开查询](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L260)
