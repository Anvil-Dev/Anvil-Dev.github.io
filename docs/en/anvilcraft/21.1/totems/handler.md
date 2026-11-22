# Registering a Fire-Only Totem

The Ember Ward restores 4 health only when fire deals lethal damage, leaving other lethal causes to the next candidate totem. Call `EmberWard.register(modBus)` in your add-on mod's constructor. The example uses the `workshop` namespace. Items are registered via NeoForge, while the handler is bound during common setup when both your item and AnvilCraft's built-in totems are available.

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

| Call | Input, Return & Boundaries |
| --- | --- |
| `registerTotem(Item, TotemHandler)` | Returns `void`. Stores one handler per item instance; calling again for the same item overwrites the previous entry. Accessing `INSTANCE` before item registration resolves built-in items prematurely. |
| `canExecute(DamageSource, LivingEntity, ItemStack)` | Defaults to `true`. Evaluates the current damage, holder, and actual held stack. Returning `false` continues scanning subsequent candidates. Keep side-effect-free, as subsequent NeoForge totem hooks may still cancel. |
| `execute(DamageSource, LivingEntity, ItemStack)` | Returns whether death was prevented. Called only once after a candidate is selected; returning `false` ends this check. In-box delegation enters this method directly, so conditional totems must re-check here. Actually restore health before returning `true`. |
| `shrink(ItemStack)` | Returns `void`; called by the outer handler only after success. Handheld totems decrement stack count here; in-box totems are popped by the box. |
| `getTotemMap()` | Returns the mutable `Map<Item, TotemHandler>` used by the registry. Active lethal checks iterate over it, so registration should finish during initialization. |

[Registry](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java) · [Handler contract](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemHandler.java) · [Death protection dispatch](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java)
