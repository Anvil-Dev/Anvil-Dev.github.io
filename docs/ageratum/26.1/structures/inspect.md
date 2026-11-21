# 在手册中检查预览方块

结构卡片可以用来解释多方块机器中某个端口的位置。玩家先调节可见层数，再单击预览模型：左键选择方块并显示提示；右键尝试在指南屏幕中打开该方块的 GUI 预览。这里读取的是客户端预览世界中的方块，服务端机器的容器不会被打开。[拾取和 GUI 预览入口](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L345)

组件在鼠标释放时判断这次操作是点击还是拖拽。只有在预览区域内、移动距离不超过点击阈值、按键与起始按键一致，且没有命中控制按钮时，才会按相机、平移量和可见层范围执行拾取。把曾经选中的方块隐藏在层范围外时，组件会清掉旧提示。右键命中但没有可显示菜单时，会切换为“没有 GUI”的提示。[点击边界](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L345) · [提示更新](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L165)

附属组件已经持有模板、选中的模板内坐标和屏幕锚点时，可复用指南的 GUI 预览。下面的桥接方法接收实现了该入口所需的所属组件对象；传入同一对象可让预览记录其所属者。返回值用于选择显示菜单还是回退到提示文本。

```java
package dev.example.blueprint;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.MDNBTStructureComponent;
import dev.anvilcraft.resource.ageratum.client.gui.GuideScreen;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate;

public final class BlueprintInspection {
    public static boolean open(GuideScreen screen, MDNBTStructureComponent owner,
                               StructureTemplate template, BlockPos selected,
                               float anchorX, float anchorY) {
        return screen.structureGuiPreview().open(owner, template, selected, anchorX, anchorY);
    }
}
```

| 参数或接口 | 作用 | 使用时机 |
| --- | --- | --- |
| `GuideScreen.structureGuiPreview()` | 获取屏幕持有的预览控制器 | 使用正在显示的指南实例。该屏幕每帧调用控制器的 `beginFrame` 和 `render`，并优先分派预览覆盖区域的输入。 |
| `owner`、`template`、`selected` | 所属组件、完整模板、被选中的模板方块 | 使用同一次拾取对应的模板和坐标。右键没有命中时，原组件跳过打开操作。 |
| `anchorX`、`anchorY` | 鼠标所选方块中心的屏幕锚点 | 原组件通过投影变换将方块中心转换到屏幕坐标后再打开；两值不应使用世界坐标。 |

[GuideScreen 的预览控制器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java#L230) · [组件的右键调用](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L365)

同一组件还公开了 `renderExportButton(MDRenderContext)`，供集成模块绘制 16 × 16 的主题按钮和悬停提示。其左上角为 `(context.maxX() - 21, 25)`。点击处理和导出操作由集成模块提供。本分支的 Ageratum 注册了打开指南、打开 GitHub 指南和分享指南三种载荷。[按钮绘制](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L198) · [网络注册](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/AgeratumNetwork.java#L26)
