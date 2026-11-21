# 把结构放进客户端预览

把模板投影到世界里，玩家就能照着蓝图边看边搭。固定投影会停在指定原点，浮动投影则会在每个客户端 tick 把原点拉到视线前方五格。玩家点击手册结构卡片上的投影按钮时，程序会先取准星命中面的相邻方块；如果没指到方块，就改用相机所在方块的上方，接着开启浮动投影并关掉手册界面。[结构卡片按钮](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L329) · [浮动位置更新](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L175)

下面这个按钮处理器会把模板交给沙盒渲染器，返回 `true` 时顺便关闭当前界面。示例把指南针设成了移动工具，所以只要玩家任一只手拿着指南针，按住 Ctrl 滚动鼠标滚轮就能微调位置。浮动模式下按一下使用键或攻击键可以把原点固定住；固定后再用滚轮微调，下一 tick 就不会被视线位置拉跑。

```java
package dev.example.blueprint;

import dev.anvilcraft.resource.ageratum.client.feat.structure.AgeratumStructureTemplateManager;
import dev.anvilcraft.resource.ageratum.client.feat.structure.StructureProjectionApi;
import net.minecraft.core.BlockPos;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.item.Items;
import java.util.List;

public final class BlueprintPlacement {
    public static boolean preview(ResourceLocation blueprint, BlockPos anchor) {
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
| `hasActiveProjection()`、`clear()` | 查询或清除当前唯一投影 | `clear` 会释放渲染器。客户端卸载世界、切换维度、玩家消失时管理器也会清理。 |

投影只渲染到客户端。滚轮移动要求关闭 GUI、按下 Ctrl、手持允许物品，移动成功时消费滚轮以避免切换快捷栏；层数键可以逐层查看。 [输入处理与清理](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionManager.java#L108)
