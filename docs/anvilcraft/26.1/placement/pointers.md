# 为放置器提供目标

目标指针同时需要持久化和网络表示。指针使用前要检验是否仍然有效；带目标状态的 applyToPos 还会核对位置最终实际放下的方块类型。

## 源码中的用例

以本分支的 `ModTargetPointers` 为例。该类在上游工程及其包名下编译。

::: details 查看完整 Java 类

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

[原始文件](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModTargetPointers.java)

- [`ModTargetPointers` · 第 16 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModTargetPointers.java#L16)
- [`ModRegistries` · 第 45 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistries.java#L45)
- [`ModRegistryKeys` · 第 34 行](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/registry/ModRegistryKeys.java#L34)

## 接口和参数

| 类型 | 本分支参考 | 声明 |
| --- | --- | --- |
| `ITargetPointer` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-pointer#itargetpointer) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/ITargetPointer.java) |
| `BlockPointer` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-pointer#blockpointer) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockPointer.java) |
| `BlockItemHandlerPointer` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-pointer#blockitemhandlerpointer) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/BlockItemHandlerPointer.java) |
| `ItemEntityPointer` | [签名、参数与返回值](../api/dev-dubhe-anvilcraft-api-pointer#itementitypointer) | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/pointer/ItemEntityPointer.java) |

<!-- source-guide -->
