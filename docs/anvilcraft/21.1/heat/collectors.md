# 添加收集器热源

要让收集器从附属模组的方块取热，在公共初始化时向 `HeatCollectorManager` 注册一条热源规则。下例让一块点亮的红石灯在结算时提供 3 点热量。灯是否点亮由方块状态决定，收集不会熄灯。将 `register` 放进公共初始化事件的主线程工作队列，并且只调用一次。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.heat.collector.HeatCollectorManager;
import dev.dubhe.anvilcraft.api.heat.collector.HeatSourceEntry;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;

public final class LampHeatSource {
    public static void register() {
        HeatCollectorManager.registerEntry(HeatSourceEntry.predicateAlways(3, state ->
            state.is(Blocks.REDSTONE_LAMP) && state.getValue(BlockStateProperties.LIT)));
    }
}
```

| 签名 | 参数、返回值和调用时机 |
| --- | --- |
| `simple(int charge, Block input, Block output)` | 匹配输入方块，每次取热给出 charge；到达状态变换时机后，换成输出方块的默认状态。 |
| `predicate(charge, predicate, transformer)` | 用谓词判定状态，返回新的状态用于变换。可通过转换器保留方向等属性。 |
| `predicateAlways(charge, predicate)`、`forever(charge, block)` | 前者的变换保留原状态；后者匹配指定方块，变换周期为整数上限。 |
| `accepts(BlockState): int`、`getEntry(BlockState): Optional<HeatSourceEntry>` | 收集器按登记顺序选择第一个正热量规则。应避免宽泛规则抢先匹配更具体的状态。 |
| `timeToTransform(): int`、`transform(BlockState): BlockState` | 默认周期 40 游戏刻，变换取决于世界时间是否整除周期，且当刻必须运行收集结算。自定义周期必须为正。 |
| `IHeatCollector.inputHeat(int): int` | 返回本收集器未接纳的余量，交给下一个收集器。0 表示本次热量已分完。 |
| `addHeatCollector / removeHeatCollector`、`addInfiniteCollector / removeInfiniteCollector` | 参数依次为位置与世界。管理器会按这两种内置方块实体类型复核位置，仅实现接口不能自动成为其扫描对象。 |
