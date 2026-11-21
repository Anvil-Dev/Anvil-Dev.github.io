# 为方块注册撞击行为

下面的附属模组让下落至少两格的铁砧把砂岩压成平滑砂岩。监听器要在模组构造时装到游戏事件总线。AnvilCraft 第一次处理 `AnvilEvent.OnLand` 时才发布注册事件，错过这次事件后，新处理器不会出现在匹配表里。

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.event.AnvilBehaviorRegisterEvent;
import net.minecraft.world.level.block.Blocks;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.common.NeoForge;

@Mod("sandstone_press")
public final class SandstonePress {
    public SandstonePress() {
        NeoForge.EVENT_BUS.addListener(SandstonePress::register);
    }

    private static void register(AnvilBehaviorRegisterEvent event) {
        event.registerBehavior(Blocks.SANDSTONE, (level, hitPos, state, distance, landing) -> {
            if (distance < 2.0F) return false;
            return level.setBlockAndUpdate(hitPos, Blocks.SMOOTH_SANDSTONE.defaultBlockState());
        });
    }
}
```

| 签名或参数 | 约定 |
| --- | --- |
| `registerBehavior(Block, IAnvilBehavior)` | 匹配这个方块的全部状态。 |
| `registerBehavior(Predicate<BlockState>, IAnvilBehavior)` | 需要检查朝向、是否点燃或方块标签时使用。匹配结果按完整状态缓存，谓词应只依赖方块状态和可重载的标签。 |
| `handle(Level, BlockPos, BlockState, float, AnvilEvent.OnLand)` | `hitPos` 是铁砧落点下方的坐标，`state` 是该坐标匹配时的状态，`distance` 是下落距离。落点本身取 `landing.getPos()`。 |
| `handle` 的返回值 | 返回 `true` 时结束这一轮行为遍历。返回 `false` 时后续匹配项仍有机会运行。 |
| `priority()` | 默认值 100。该提交中的落地遍历按注册表迭代顺序执行，没有按这个数值排序。 |

同一个方块可以匹配多个行为。使用注册入口会清空匹配缓存，直接写入 `BEHAVIORS` 会绕过这一步。下方有切石机时，破坏分支可以提前返回。通常世界内配方在行为之前运行，行为返回值不能撤销已经产生的配方结果。

[行为接口](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java) · [落地调用点](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java)
