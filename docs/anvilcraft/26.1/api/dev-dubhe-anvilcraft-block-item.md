# dev.dubhe.anvilcraft.block.item



## CheckValveItem

` public class CheckValveItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/CheckValveItem.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CheckValveItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/CheckValveItem.java#L7) |

## RedstoneWireBlockItem

` public class RedstoneWireBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/RedstoneWireBlockItem.java#L15)

放置红石导线，并支持用同一物品调整已有导线的附着面和局部端口。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RedstoneWireBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/RedstoneWireBlockItem.java#L16) |
| ` @Override public InteractionResult place(BlockPlaceContext context) ` | ` (hitState.getBlock() instanceof RedstoneWireBlock wire) ` 成立时提前返回 ` this.editWire(context, hitPos, hitState, wire, false, true) `<br>` (placementState.getBlock() instanceof RedstoneWireBlock wire) ` 成立时提前返回 ` this.editWire(context, placementPos, placementState, wire, true, false) `<br>末尾返回 ` super.place(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/RedstoneWireBlockItem.java#L20) |

## SmartBlockPlacerBlockItem

` public class SmartBlockPlacerBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/SmartBlockPlacerBlockItem.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SmartBlockPlacerBlockItem(Block block, Properties properties) ` | 实现调用 ` Equippable.builder(EquipmentSlot.HEAD) .setEquipSound(ArmorMaterials.IRON.equipSound()).build() `<br>实现调用 ` Equippable.builder(EquipmentSlot.HEAD) .setEquipSound(ArmorMaterials.IRON.equipSound()) `<br>实现调用 ` Equippable.builder(EquipmentSlot.HEAD) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/SmartBlockPlacerBlockItem.java#L23) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand hand) ` | ` (!player.canUseSlot(EquipmentSlot.HEAD) \|\| !player.getItemBySlot(EquipmentSlot.HEAD).isEmpty()) ` 成立时提前返回 ` InteractionResult.FAIL `<br>末尾返回 ` level.isClientSide() ? InteractionResult.SUCCESS : InteractionResult.SUCCESS_SERVER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/SmartBlockPlacerBlockItem.java#L34) |

## TradingStationBlockItem

` public class TradingStationBlockItem extends FlexibleMultiPartBlockItem<DirectionVertical2PartHalf, EnumProperty<Direction>, Direction> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/TradingStationBlockItem.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TradingStationBlockItem(TradingStationBlock block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/item/TradingStationBlockItem.java#L24) |
