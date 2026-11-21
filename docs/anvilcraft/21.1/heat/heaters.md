# 登记加热器和受热方块

`HeaterInfo` 描述哪种设备仍在产热、热量送到哪里、每个目标贡献几档。`HeaterManager` 保存这个维度当前有哪些产热设备。只注册规则，并不会让管理器逐格寻找世界里的设备。

下例把已点燃高炉正上方一格设成受热位置。初始化阶段加载这条规则；服务端方块加载或点火时调用 `lit`，熄灭、卸载或替换时调用 `removed`。使用同一个静态规则对象保证能删除原登记。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.heat.HeatRecorder;
import dev.dubhe.anvilcraft.api.heat.HeatTier;
import dev.dubhe.anvilcraft.api.heat.HeatTierLine;
import dev.dubhe.anvilcraft.api.heat.HeaterInfo;
import dev.dubhe.anvilcraft.api.heat.HeaterManager;
import dev.dubhe.anvilcraft.util.BlockInfo;
import net.minecraft.core.BlockPos;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.level.block.Blocks;
import net.minecraft.world.level.block.state.properties.BlockStateProperties;
import java.util.Set;

public final class FurnaceHeat {
    public static final HeaterInfo<BlockInfo> RULE = HeatRecorder.registerProducerInfo(
        HeaterInfo.blockState(Blocks.BLAST_FURNACE, BlockStateProperties.LIT, true,
            info -> Set.of(info.pos().above()), HeatTierLine.always(HeatTier.HEATED, 40)));

    public static void lit(ServerLevel level, BlockPos pos) {
        HeaterManager.addProducer(pos, level, RULE);
    }

    public static void removed(ServerLevel level, BlockPos pos) {
        HeaterManager.removeProducer(pos, level, RULE);
    }
}
```

受热材料按家族注册。用自己的资源名调用 `HeatRecorder.registerHeatables(id)`，从 `normal` 到 `overheated` 逐档加入已注册方块。各档位还需加入方块标签 `anvilcraft:heatable_blocks`，否则管理器会跳过。升温使用目标方块的默认状态，原有朝向、属性和方块实体数据都需要在设计材料时考虑。需要持续时间与冷却逻辑的高温档，应提供相应的 `HeatableBlockEntity`。

| 入口 | 参数与调用约定 |
| --- | --- |
| `HeaterInfo.blockState(block 或 tag, property, expectValue, posesGetter, line[, countGetter])` | 在已加载的位置检查方块与属性值，获取目标坐标集合。缺省计数为 1。单方块简式调用 `getValue`，传入的属性必须存在于该方块。 |
| `HeaterInfo.blockEntity(type, posesGetter, line)` | 按实体类型读取已加载方块实体。带 `countGetter` 的重载允许一台设备贡献多份数量；带 `tierOffsetGetter` 的重载按目标位置衰减。 |
| `new HeaterInfo<>(getter, posesGetter, tierOffsetGetter, line, countGetter)` | 自定义全部取值时用规范构造器。getter 返回空代表当前位置已无有效生产者。 |
| `HeaterManager.addHeatableBlock(pos, level)` | 将受热位置加入后续处理，热方块实体的服务端加载事件已经做此登记。 |
| `RegisterHelper.normal / heated / redhot / glowing / incandescent / overheated` | 每档支持实例、Supplier 以及额外的三参数世界谓词。Supplier 会在调用时立即取值，须等方块已经注册。 |
| `customTier(tier, block[, predicate])` | 级别、默认变换目标、可选世界判定。返回当前辅助对象。应每档登记一次且保持连续，部分查找按枚举序号取列表。 |
| `HeatRecorder.getEntry(id, tier)`、`getHeatableBlock(id, tier)` | 查已登记家族的一档。该家族内缺档时返回空；直接传入完全未知的家族 ID 可能触发空指针，应先用当前状态的 `getId` 查家族。 |
