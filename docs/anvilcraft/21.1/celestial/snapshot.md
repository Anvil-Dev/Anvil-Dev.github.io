# 复制天体快照到磁盘或奇点水晶

需要保存已经找到的天体时，从砧体的 `storeDiskData` 取它定义的快照，再用 `CelestialSnapshotCodec` 写回合法载体。这里提供一个物品预览方法，返回新的物品栈，原槽位内容留给调用方在服务端确认后替换。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.block.entity.CelestialForgingAnvilBlockEntity;
import dev.dubhe.anvilcraft.block.entity.celestial.CelestialSnapshotCodec;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.item.ItemStack;
import java.util.Optional;

public final class CelestialArchive {
    public static Optional<ItemStack> copyIntoEmptyCarrier(
        CelestialForgingAnvilBlockEntity anvil, ItemStack carrier
    ) {
        if (carrier.isEmpty() || CelestialSnapshotCodec.load(carrier) != null) return Optional.empty();
        CompoundTag snapshot = new CompoundTag();
        anvil.storeDiskData(snapshot);
        if (!snapshot.contains("celestialBody")) return Optional.empty();
        ItemStack copy = carrier.copyWithCount(1);
        CelestialSnapshotCodec.save(copy, snapshot);
        return CelestialSnapshotCodec.load(copy) == null ? Optional.empty() : Optional.of(copy);
    }
}
```

| 调用 | 载体、返回与边界 |
| --- | --- |
| `storeDiskData(CompoundTag out)` | 把当前天体、种子、年龄砧数、恒星质量、砧数和有关状态写入参数。无天体时不会写入 `celestialBody`。 |
| `extract(ItemStack)`、`load(ItemStack)` | 两者读取同样的载体。磁盘读 `DISK_DATA` 根对象，奇点水晶从 `CUSTOM_DATA.celestialSnapshot` 取。缺少 `celestialBody` 或物品不匹配返回 `null`。成功时返回副本。 |
| `save(ItemStack, CompoundTag)` | 返回 `void`。磁盘数据与旧根对象合并。包含黑洞或中子星的快照跳过磁盘写入。奇点水晶复制旧 `CUSTOM_DATA` 后替换其中的快照，其他类型的物品跳过。 |

上例事先要求载体没有已有天体，因而可以用回读结果判断写入是否成功。若允许覆盖，旧快照仍在时，单凭 `load(...) != null` 无法判断本次写入的结果。用于存档迁移时保留快照原有字段，可以继续使用砧体正常导入流程。[快照编码器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/celestial/CelestialSnapshotCodec.java) · [砧体读写入口](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java)
