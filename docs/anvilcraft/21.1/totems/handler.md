# 注册只能抵挡火焰的图腾

余烬符只在火焰造成致命伤害时恢复 4 点生命，其他致死原因留给下一候选图腾。可以在附属模组的构造函数调用 `EmberWard.register(modBus)`。示例使用的命名空间为 `workshop`。物品用 NeoForge 注册，处理器等公共设置阶段再绑定，这时物品和 AnvilCraft 自带图腾都可取值。

```java
package dev.example.workshop;

import dev.dubhe.anvilcraft.api.totem.TotemManager;
import dev.dubhe.anvilcraft.api.totem.handler.TotemHandler;
import net.minecraft.tags.DamageTypeTags;
import net.minecraft.world.damagesource.DamageSource;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent;
import net.neoforged.neoforge.registries.DeferredItem;
import net.neoforged.neoforge.registries.DeferredRegister;

public final class EmberWard implements TotemHandler {
    private static final DeferredRegister.Items ITEMS = DeferredRegister.createItems("workshop");
    public static final DeferredItem<Item> WARD = ITEMS.registerSimpleItem(
        "ember_ward", new Item.Properties().stacksTo(1)
    );

    public static void register(IEventBus bus) {
        ITEMS.register(bus);
        bus.addListener(EmberWard::setup);
    }

    private static void setup(FMLCommonSetupEvent event) {
        event.enqueueWork(() -> TotemManager.INSTANCE.registerTotem(WARD.get(), new EmberWard()));
    }

    @Override
    public boolean canExecute(DamageSource source, LivingEntity holder, ItemStack stack) {
        return source.is(DamageTypeTags.IS_FIRE);
    }

    @Override
    public boolean execute(DamageSource source, LivingEntity holder, ItemStack stack) {
        if (!canExecute(source, holder, stack)) return false;
        holder.setHealth(Math.min(4.0F, holder.getMaxHealth()));
        return true;
    }

    @Override
    public void shrink(ItemStack stack) {
        stack.shrink(1);
    }
}
```

| 调用 | 输入、返回与边界 |
| --- | --- |
| `registerTotem(Item, TotemHandler)` | 返回 `void`。按物品实例存一个处理器，对同一物品重复调用会覆盖原值。物品注册前访问 `INSTANCE` 会提前解析内置物品。 |
| `canExecute(DamageSource, LivingEntity, ItemStack)` | 默认返回 `true`。判断当前伤害、持有者和手中的实际栈。返回 `false` 后继续扫描后面的候选。保持无副作用，因为之后的 NeoForge 图腾钩子也可能否决。 |
| `execute(DamageSource, LivingEntity, ItemStack)` | 返回是否免死。选中一个候选后只调用一次，返回 `false` 就结束此次检查。盒内委托直接进入此方法，所以有条件的图腾要在此复核。成功前应实际恢复生命。 |
| `shrink(ItemStack)` | 返回 `void`，外层处理器仅在成功后调用。手持图腾在这里扣数量，盒内图腾由盒子弹出。 |
| `getTotemMap()` | 返回注册表正在使用的可变 `Map<Item, TotemHandler>`。运行中的致死检查会遍历它，注册工作应在初始化阶段完成。 |

[注册表](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java) · [处理器契约](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemHandler.java) · [死亡保护分派](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java)
