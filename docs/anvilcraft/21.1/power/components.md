# 让方块实体接入电网

让已注册的机器方块实体实现 `IPowerConsumer`。AnvilCraft 会监听 `BlockEntityEvent.ServerLoad`，把它排进当前维度的电网队列，卸载时再调用 `removeComponent`。注意，加载回调刚结束时 `getGrid()` 仍可能为空；真正需要用电的逻辑要放进 `gridTick()` 里，先检查 `isGridWorking()` 再消耗材料。

下面这个例子是一个耗电 4 的检测器。只要在方块状态定义里加上 `IPowerComponent.OVERLOAD`，就能在模型里区分过载和正常两种状态。构建自己的 `BlockEntityType` 时，把注册好的类型、位置和状态传进构造器即可。

```java
package dev.example.addon;

import dev.dubhe.anvilcraft.api.power.IPowerConsumer;
import dev.dubhe.anvilcraft.api.power.PowerGrid;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;
import org.jetbrains.annotations.Nullable;

public final class GridProbe extends BlockEntity implements IPowerConsumer {
    private @Nullable PowerGrid grid;

    public GridProbe(BlockEntityType<?> type, BlockPos pos, BlockState state) {
        super(type, pos, state);
    }

    @Override public int getInputPower() { return 4; }
    @Override public BlockPos getPos() { return getBlockPos(); }
    @Override public @Nullable Level getCurrentLevel() { return getLevel(); }
    @Override public @Nullable PowerGrid getGrid() { return grid; }
    @Override public void setGrid(@Nullable PowerGrid newGrid) { grid = newGrid; }

    @Override
    public void gridTick() {
        if (level != null) flushState(level, getPos());
    }
}
```

| 签名 | 调用时机与约定 |
| --- | --- |
| `getInputPower(): int`、`getOutputPower(): int` | 分别由消费者、生产者实现，默认都是 0。返回本次结算的需求或供应量；这里只报数，不扣库存。 |
| `getCurrentLevel(): Level`、`getPos(): BlockPos` | 管理器用两者选择维度、匹配范围。实体尚未附着世界时允许返回空世界。 |
| `getRange(): int`、`getShape(): AABB` | 默认以方块中心为原点，每轴边长为半径的两倍加一。普通机器半径为 0，中继器从机器配置读取半径。 |
| `getGrid()`、`setGrid(@Nullable PowerGrid)` | 保存运行时引用，拆网、合网、卸载都能改变它。无需持久化到方块实体存档。 |
| `flushState(Level, BlockPos): void` | 状态含 `OVERLOAD` 才会写回。没有电网或电网供不应求时设为 true。 |
| `getComponentType()` | 由 `IPowerConsumer`、`IPowerProducer`、`IPowerStorage`、`IPowerTransmitter` 各自给出默认值。 |
| `ConnectivityChecker.register(checker)` | 初始化时注册附加的范围判定。任一 `FALSE` 都会拒绝连接；至少一个 `TRUE` 且其余均未拒绝才接入。所有判定返回 `DEFAULT` 时拒绝。 |
