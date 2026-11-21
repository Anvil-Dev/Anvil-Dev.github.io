# dev.dubhe.anvilcraft.block.cfa.item



## CelestialForgingAnvilAmplifierBlockItem

` public class CelestialForgingAnvilAmplifierBlockItem extends FlexibleMultiPartBlockItem<DirectionCube232PartHalf, DirectionProperty, Direction> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilAmplifierBlockItem.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilAmplifierBlockItem( FlexibleMultiPartBlock<DirectionCube232PartHalf, DirectionProperty, Direction> block, Properties properties ) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilAmplifierBlockItem.java#L17) |
| ` @Override public InteractionResult place(BlockPlaceContext context) ` | 末尾返回 ` super.place(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilAmplifierBlockItem.java#L28) |

## CelestialForgingAnvilBlockItem

` public class CelestialForgingAnvilBlockItem extends SimpleMultiPartBlockItem<Cube323PartHalf> implements Equipable, CreativeVariantPickerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String ITEM_RENDER_DATA ` | 初值 ` "itemRenderData" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L39) |
| ` public CelestialForgingAnvilBlockItem( SimpleMultiPartBlock<Cube323PartHalf> block, Properties properties ) ` | 实现调用 ` super(block, properties) `<br>实现调用 ` AnvilCraft.of("celestial_forging_anvil_helmet") `<br>实现调用 ` ItemAttributeModifiers.builder() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L42) |
| ` @Override public List<ItemStack> createCreativePickerVariants(ItemStack source) ` | ` (FMLLoader.getDist() != Dist.CLIENT) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` ModCreativeVariantGroups.celestialPresets() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L60) |
| ` @Override public EquipmentSlot getEquipmentSlot() ` | 末尾返回 ` EquipmentSlot.HEAD ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L91) |
| ` @Override public Holder<SoundEvent> getEquipSound() ` | 末尾返回 ` ArmorMaterials.NETHERITE.value().equipSound() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L96) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand hand) ` | 末尾返回 ` this.swapWithEquipmentSlot(this, level, player, hand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L101) |
| ` @Override public ItemAttributeModifiers getDefaultAttributeModifiers(ItemStack stack) ` | 末尾返回 ` this.armorModifiers ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L106) |
| ` @Override public boolean isEnchantable(ItemStack stack) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L111) |
| ` @Override public int getEnchantmentValue(ItemStack stack) ` | 末尾返回 ` ArmorMaterials.NETHERITE.value().enchantmentValue() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L116) |
| ` public static void saveRenderData(CompoundTag blockEntityTag, long gameTime) ` | 实现调用 ` blockEntityTag.getAllKeys() `<br>实现调用 ` key.startsWith("activeMegastructure") `<br>实现调用 ` key.startsWith("stellar") `<br>[调用处 CelestialForgingAnvilBlock.saveBlockEntityDataToDrop](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/CelestialForgingAnvilBlock.java#L310) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilBlockItem.java#L121) |

## CelestialForgingAnvilInterfaceBlockItem

` public class CelestialForgingAnvilInterfaceBlockItem extends BlockItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilInterfaceBlockItem.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilInterfaceBlockItem(Block block, Properties properties) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilInterfaceBlockItem.java#L25) |

## CelestialForgingAnvilPortalBlockItem

` public class CelestialForgingAnvilPortalBlockItem extends FlexibleMultiPartBlockItem<DirectionGate331PartHalf, DirectionProperty, Direction> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilPortalBlockItem.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilPortalBlockItem( FlexibleMultiPartBlock<DirectionGate331PartHalf, DirectionProperty, Direction> block, Properties properties ) ` | 执行 ` super(block, properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/cfa/item/CelestialForgingAnvilPortalBlockItem.java#L11) |
