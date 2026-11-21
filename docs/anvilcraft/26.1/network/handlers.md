# 校验菜单请求并同步画面

控制阀过滤菜单需要允许客户端选择过滤卡。玩家关闭菜单、进入旁观模式或在网络往返期间切换机器时，客户端提交的内容可能已经过期。服务端从发送者当前打开的菜单找方块实体，逐层检查过滤内容，再把机器实际保存的过滤卡发回；客户端只有在控制阀界面仍然打开时才更新显示。[界面发送](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L226) · [服务端和客户端处理](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L31)

附属界面已经绑定了铁砧工艺的 `ControlValveMenu` 时，可以重用此包。下面的方法从界面按钮处理器调用。它发送所选物品的副本，后续编辑本地光标物品不会影响这次请求。

```java
package dev.example.pressconsole.client;

import dev.dubhe.anvilcraft.inventory.ControlValveMenu;
import dev.dubhe.anvilcraft.network.ControlValveFilterItemPacket;
import net.minecraft.client.Minecraft;
import net.minecraft.world.item.ItemStack;
import net.neoforged.neoforge.client.network.ClientPacketDistributor;

public final class ValveFilterAction {
    public static boolean submit(ItemStack filter) {
        var player = Minecraft.getInstance().player;
        if (player == null || !(player.containerMenu instanceof ControlValveMenu)) return false;
        ClientPacketDistributor.sendToServer(new ControlValveFilterItemPacket(filter.copy()));
        return true;
    }
}
```

`submit` 返回 true 只说明请求已发出。服务端拒绝旁观者、错误菜单、无方块实体或已经失效的菜单。在有效菜单中，过滤卡必须为空或为指定过滤物品，嵌套层数最多两层，每层条目数不得超过默认过滤器容量。即便提交的物品不满足内容条件，也会把当前有效值的副本回给请求者。自定义界面需要处理这条回包：内置处理器明确检查 `ControlValveScreen`，其他屏幕类型不会收到它的界面更新。[过滤内容检查与回包](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ControlValveFilterItemPacket.java#L37)

| 场景 | 服务端 | 客户端 |
| --- | --- | --- |
| `MachineEnableFilterPacket(boolean filterEnabled)` | 检查旁观状态、容器和 `IFilterMenu`；写入开关并刷新。关闭过滤时回发非空的槽位条目，然后回发开关。 | 当前屏幕实现 `IFilterScreen` 才应用状态并刷新。载荷的真实 ID 是 `anvilcraft:machine_record_material`。 |
| `ControlValveFilterItemPacket(ItemStack filterItem)` | 以当前菜单定位机器、验证物品与嵌套内容，将权威值发送给当前玩家。 | 在 `ControlValveScreen` 更新过滤物品；编码使用带注册表上下文的 `ItemStack.OPTIONAL_STREAM_CODEC`，可表示空栈。 |
| `ScreenShakePacket.of(Vec3 center, float radius, ShakeType type)` | 恒星事件将效果包发给追踪铸星砧所在区块的玩家。 | 先检查类型序号范围，再将位置、半径和类型交给 `ScreenShakeManager`。震动只影响摄像机。 |

[机器开关](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/MachineEnableFilterPacket.java#L30) · [追踪区块的发送范围](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L555) · [震动处理器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/ScreenShakePacket.java#L72)
