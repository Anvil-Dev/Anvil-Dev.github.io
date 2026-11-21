# 同步药盒与护符盒的滚轮选中项

在附属界面滚动选中框时，界面先更新客户端组件，再把玩家**当前菜单的槽位序号**和选中项发给服务端。服务端从该槽重新读取真实物品栈，下一次取物才能命中相同的项。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.item.PillBoxItem;
import dev.dubhe.anvilcraft.item.amulet.AmuletBoxItem;
import dev.dubhe.anvilcraft.network.BoxSelectionSyncPacket;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.inventory.Slot;
import net.minecraft.world.item.Item;
import net.neoforged.neoforge.network.PacketDistributor;

public final class BoxWheelSync {
    public static boolean selectionChanged(Player player, Slot hoveredSlot, int selection) {
        if (!player.level().isClientSide()) return false;
        int menuIndex = player.containerMenu.slots.indexOf(hoveredSlot);
        if (menuIndex < 0) return false;
        Item item = hoveredSlot.getItem().getItem();
        if (!(item instanceof PillBoxItem || item instanceof AmuletBoxItem)) return false;
        PacketDistributor.sendToServer(new BoxSelectionSyncPacket(menuIndex, selection));
        return true;
    }
}
```

| 字段或调用 | 含义 |
| --- | --- |
| `slotIndex` | VarInt，当前 `containerMenu.slots` 列表下标。箱子和玩家背包并列时，玩家背包内部的下标与菜单下标不同。 |
| `selection` | VarInt。药盒对负值调用 `setDefaultIndex()`，还原“未选中”；非负调用 `setIndex`。护符盒把值夹进当前允许区间。 |
| `handleOnServer(Player)` | 槽位无效或物品类型不符就返回。有效时写回相应的 `PILL_BOX_CONTENTS` 或 `BOX_CONTENTS`，更新远端槽快照并将槽标为已变更。 |
| 示例的 `boolean` | 只表示已提交或跳过本地请求。服务器重新检查当前菜单，因此发送后立刻换菜单时，应以新菜单展示的数据为准。 |

协议没有物品列表字段。客户端已经显示选择结果，服务端用 `setRemoteSlot` 更新已同步快照，避免广播把客户端刚选中的栈换掉。[包定义与槽校验](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/BoxSelectionSyncPacket.java) · [护符盒选择器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java)
