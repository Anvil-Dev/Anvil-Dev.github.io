# Providing Targets for Placers

Target pointers require both persistence and network representation. Verify that a pointer is still valid before using it; `applyToPos` with a target state also verifies the block type actually placed at that position.

## Example in Source

Take `ModTargetPointers` from this branch as an example. This class compiles under the upstream project and its package name.

::: details View full Java class

```java
package dev.dubhe.anvilcraft.init;

import dev.dubhe.anvilcraft.AnvilCraft;
import dev.dubhe.anvilcraft.api.item.IBlockItem;
import dev.dubhe.anvilcraft.api.pointer.BlockItemHandlerPointer;
import dev.dubhe.anvilcraft.api.pointer.BlockPointer;
import dev.dubhe.anvilcraft.api.pointer.ITargetPointer;
import dev.dubhe.anvilcraft.api.pointer.ItemEntityPointer;
import dev.dubhe.anvilcraft.init.registry.ModRegistryKeys;
import net.minecraft.world.item.BlockItem;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ModTargetPointers {
    private static final DeferredRegister<ITargetPointer.Type<?>> REGISTER = DeferredRegister.create(
        ModRegistryKeys.TARGET_POINTER_TYPE,
        AnvilCraft.MOD_ID
    );

    public static final DeferredHolder<ITargetPointer.Type<?>, ItemEntityPointer.Type> ITEM_ENTITY = REGISTER.register(
        "item_entity",
        () -> new ItemEntityPointer.Type()
    );
    public static final DeferredHolder<ITargetPointer.Type<?>, ItemEntityPointer.Type> ITEM_ENTITY_ONLY_BLOCK_ITEM = REGISTER.register(
        "item_entity_only_block_item",
        () -> new ItemEntityPointer.Type(stack -> stack.getItem() instanceof BlockItem || stack.getItem() instanceof IBlockItem)
    );
    public static final DeferredHolder<ITargetPointer.Type<?>, BlockItemHandlerPointer.Type> BLOCK_ITEM_HANDLER = REGISTER.register(
        "block_item_handler",
        () -> new BlockItemHandlerPointer.Type(stack -> !stack.isEmpty())
    );
    public static final DeferredHolder<ITargetPointer.Type<?>, BlockItemHandlerPointer.Type> BLOCK_ITEM_HANDLER_ONLY_BLOCK_ITEM =
        REGISTER.register(
            "block_item_handler_only_block_item",
            () -> new BlockItemHandlerPointer.Type(stack -> stack.getItem() instanceof BlockItem || stack.getItem() instanceof IBlockItem)
        );
    public static final DeferredHolder<ITargetPointer.Type<?>, BlockPointer.Type> BLOCK = REGISTER.register(
        "block",
        BlockPointer.Type::new
    );

    public static void register(IEventBus modEventBus) {
        REGISTER.register(modEventBus);
    }
}
```

:::

[Source file](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModTargetPointers.java)

- [`ModTargetPointers` · Line 16](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModTargetPointers.java#L16)
- [`ModRegistries` · Line 44](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L44)
- [`ModRegistryKeys` · Line 34](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L34)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `ITargetPointer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/ITargetPointer.java) |
| `BlockPointer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java) |
| `BlockItemHandlerPointer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java) |
| `ItemEntityPointer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/pointer/ItemEntityPointer.java) |
