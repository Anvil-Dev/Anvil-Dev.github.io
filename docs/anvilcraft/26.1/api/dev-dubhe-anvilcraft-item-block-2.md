# dev.dubhe.anvilcraft.item.block（StoragePortBlockItem 至 TeslaTowerItem）



## StoragePortBlockItem

` public class StoragePortBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/StoragePortBlockItem.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoragePortBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/StoragePortBlockItem.java#L12) |
| ` @Override public Optional<TooltipComponent> getTooltipImage(ItemStack stack) ` | 末尾返回 ` StoragePortItemTooltip.storagePortTooltipImage(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/StoragePortBlockItem.java#L16) |

## SuperHeavyBlockItem

` public class SuperHeavyBlockItem extends BlockItem implements ISuperHeavy `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/SuperHeavyBlockItem.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SuperHeavyBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/SuperHeavyBlockItem.java#L13) |
| ` @Override public void inventoryTick(ItemStack itemStack, ServerLevel level, Entity owner, @Nullable EquipmentSlot slot) ` | 实现调用 ` super.inventoryTick(itemStack, level, owner, slot) `<br>实现调用 ` ISuperHeavy.super.inventoryTick(itemStack, level, owner, slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/SuperHeavyBlockItem.java#L17) |

## TeslaTowerItem

` public class TeslaTowerItem extends SimpleMultiPartBlockItem<Vertical4PartHalf> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/TeslaTowerItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TeslaTowerItem(SimpleMultiPartBlock<Vertical4PartHalf> block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/TeslaTowerItem.java#L14) |
