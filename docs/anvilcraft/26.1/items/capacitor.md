# 用电容器给物品充能

让物品实现 `ICapacitorChargeable` 之前，得先给该物品栈提供 `Capabilities.Energy.ITEM`。默认的 `getEnergyStorage` 会通过 `ItemAccess.forStack(stack)` 去查能力，找不到就会抛出带物品名的异常。下面这个例子只接受普通整份充电，允许充电后还会继续走默认容量和模拟插入检查。

```java
package dev.example.press;

import dev.dubhe.anvilcraft.api.item.ICapacitorChargeable;
import dev.dubhe.anvilcraft.api.item.IFullCapacitor;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;

public final class PressCell extends Item implements ICapacitorChargeable {
    public PressCell(Properties properties) {
        super(properties);
    }

    @Override
    public boolean canAccept(ItemStack stack, IFullCapacitor capacitor, ItemStack capacitorStack, boolean force) {
        return !force && stack.getCount() == 1;
    }
}
```

| 方法 | 调用约定 |
| --- | --- |
| `canAccept(stack, capacitor, capacitorStack, force)` | 限制目标物品与电容的组合。这里还拒绝强制充能以及成组物品栈。 |
| `canBeCharged(stack, storage, capacitor, capacitorStack)` | 打开事务试插待用能量，以实际接收量大于零为可充条件。该查询不会提交事务。 |
| `charge(stack, capacitor, capacitorStack)` | 要求电容中的全部能量都能写入。存量为零、容量不足或实际插入量不符都会返回 false。 |
| `chargeForce(stack, capacitor, capacitorStack)` | 取电容能量与剩余容量两者中的较小值。仅当这一部分完整插入时提交事务。 |

这两个充电方法写入的是目标物品的储能。调用方仍需按自己的交互流程处理电容器物品与槽位变化。修改目标数据时，要区分容量检查、模拟插入和已经提交的转移。

[充电接口与事务边界](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/item/ICapacitorChargeable.java)
