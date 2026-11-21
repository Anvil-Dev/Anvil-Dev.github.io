# dev.dubhe.anvilcraft.block.cfa.item



## CelestialForgingAnvilAmplifierBlockItem

` public class CelestialForgingAnvilAmplifierBlockItem extends FlexibleMultiPartBlockItem<DirectionCube232PartHalf, EnumProperty<Direction>, Direction> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilAmplifierBlockItem.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilAmplifierBlockItem( FlexibleMultiPartBlock<DirectionCube232PartHalf, EnumProperty<Direction>, Direction> block, Properties properties ) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilAmplifierBlockItem.java#L17) |
| ` @Override public InteractionResult place(BlockPlaceContext context) ` | 增幅器占地 2x2，主块(BOTTOM\_PART)固定在东南角。玩家点击 2x2 内任意一格时， 将点击位置吸附到主块所在格，使四格中的任一位置都能直接放置增幅器。 在 place 中吸附而非 useOn：useOn 拿到的 UseOnContext.getClickedPos() 是被点方块， 而实际放置格是 BlockPlaceContext 沿点击面偏移后的格子，两者差一个方向。<br>末尾返回 ` super.place(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilAmplifierBlockItem.java#L28) |

## CelestialForgingAnvilBlockItem

` public class CelestialForgingAnvilBlockItem extends SimpleMultiPartBlockItem<Cube323PartHalf> implements CreativeVariantPickerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String ITEM_RENDER_DATA ` | 初值 ` "itemRenderData" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L36) |
| ` public CelestialForgingAnvilBlockItem(SimpleMultiPartBlock<Cube323PartHalf> block, Properties properties) ` | 执行 ` super(block, equipment(properties)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L38) |
| ` @Override public List<ItemStack> createCreativePickerVariants(ItemStack source) ` | ` (FMLLoader.getCurrent().getDist() != Dist.CLIENT) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` ModCreativeVariantGroups.celestialPresets() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L42) |
| ` public static void saveRenderData(CompoundTag blockEntityTag, long gameTime) ` | 实现调用 ` blockEntityTag.keySet() `<br>实现调用 ` key.startsWith("activeMegastructure") `<br>实现调用 ` key.startsWith("stellar") `<br>[调用处 CelestialForgingAnvilBlock.saveBlockEntityDataToDrop](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/CelestialForgingAnvilBlock.java#L270) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L87) |

## CelestialForgingAnvilInterfaceBlockItem

` public class CelestialForgingAnvilInterfaceBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilInterfaceBlockItem.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilInterfaceBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilInterfaceBlockItem.java#L25) |

## CelestialForgingAnvilPortalBlockItem

` public class CelestialForgingAnvilPortalBlockItem extends FlexibleMultiPartBlockItem<DirectionGate331PartHalf, EnumProperty<Direction>, Direction> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilPortalBlockItem.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilPortalBlockItem( FlexibleMultiPartBlock<DirectionGate331PartHalf, EnumProperty<Direction>, Direction> block, Properties properties ) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilPortalBlockItem.java#L11) |
