# 把结构放进客户端预览

把模板投影到世界中，可以让玩家边看蓝图边搭建。固定投影使用给定原点，浮动投影每次客户端 tick 将原点跟到视线前五格。手册结构卡片的投影按钮会先取准星命中面的相邻方块；没有命中方块时改用相机所在方块上方，再启动浮动投影并关闭屏幕。[结构卡片按钮](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L292) · [浮动位置更新](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L166)

下面的按钮处理器把模板交给沙盒渲染器。返回 true 时可以关闭当前界面。示例给了指南针作为移动工具，因此按住 Ctrl 并滚动鼠标时，玩家任一只手持有指南针即可微调。浮动模式下使用键或攻击键会固定原点；固定后再用滚轮移动，下一 tick 就不会被视线位置覆盖。

```java
package dev.example.blueprint;

import dev.anvilcraft.resource.ageratum.client.feat.structure.AgeratumStructureTemplateManager;
import dev.anvilcraft.resource.ageratum.client.feat.structure.StructureProjectionApi;
import net.minecraft.core.BlockPos;
import net.minecraft.resources.Identifier;
import net.minecraft.world.item.Items;
import java.util.List;

public final class BlueprintPlacement {
    public static boolean preview(Identifier blueprint, BlockPos anchor) {
        return AgeratumStructureTemplateManager.get(blueprint)
            .map(template -> StructureProjectionApi.showFloating(template, anchor, List.of(Items.COMPASS)))
            .orElse(false);
    }

    public static void dismiss() {
        StructureProjectionApi.clear();
    }
}
```

| API | 参数与结果 | 边界 |
| --- | --- | --- |
| `show(template, origin)`、`showFloating(template, origin)` | `StructureTemplate` 与世界坐标；返回是否成功创建投影 | 都使用默认指南物品作为 Ctrl 滚轮工具。前者保持指定位置，后者跟随视线直至固定。 |
| `show(template, origin, moveControlItems)`、`showFloating(template, origin, moveControlItems)` | 工具集合元素为 `Item`。传空集合会回退到默认指南物品 | 没有客户端世界、沙盒无法创建或沙盒没有内容时返回 false。成功创建沙盒后才清除旧投影。 |
| `hasActiveProjection()`、`clear()` | 查询或清除当前唯一投影 | `clear` 会释放渲染器。客户端 tick 发现当前世界或玩家为空、投影所在维度发生变化时也会清理。 |

投影只渲染到客户端。滚轮移动要求关闭 GUI、按下 Ctrl、手持允许物品，移动成功时消费滚轮以避免切换快捷栏；层数键可以逐层查看。 [输入处理与清理](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L99)
