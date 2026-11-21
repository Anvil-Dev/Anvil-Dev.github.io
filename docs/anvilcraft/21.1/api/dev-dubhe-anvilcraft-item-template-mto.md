# dev.dubhe.anvilcraft.item.template.mto



## BaseMultipleToOneTemplateItem

` public abstract class BaseMultipleToOneTemplateItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/BaseMultipleToOneTemplateItem.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BaseMultipleToOneTemplateItem(Properties properties, int size) ` | 实现调用 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/BaseMultipleToOneTemplateItem.java#L14) |
| ` public abstract Component getMaterialTooltip() ` | 返回 ` Component ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/BaseMultipleToOneTemplateItem.java#L19) |
| ` public abstract List<ResourceLocation> getEmptySlotTextures() ` | 返回 ` List<ResourceLocation> ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/BaseMultipleToOneTemplateItem.java#L21) |
| ` public int getSize() ` | 末尾返回 ` this.size `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/BaseMultipleToOneTemplateItem.java#L10) |

## EightToOneTemplateItem

` public class EightToOneTemplateItem extends BaseMultipleToOneTemplateItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/EightToOneTemplateItem.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component MISSING_TOOLTIP ` | 初值 ` Component.translatable( "screen.anvilcraft.ember_smithing.eight.missing") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/EightToOneTemplateItem.java#L66) |
| ` public static final List<ResourceLocation> EMPTY_SLOT_TEXTURES ` | 初值 ` List.of( ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/EightToOneTemplateItem.java#L68) |
| ` public EightToOneTemplateItem(Properties properties) ` | 执行 ` super(properties, 8) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/EightToOneTemplateItem.java#L71) |
| ` @Override public Component getMaterialTooltip() ` | 末尾返回 ` MISSING_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/EightToOneTemplateItem.java#L75) |
| ` @Override public List<ResourceLocation> getEmptySlotTextures() ` | 末尾返回 ` EMPTY_SLOT_TEXTURES ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/EightToOneTemplateItem.java#L80) |
| ` @Override public void onDestroyed(ItemEntity itemEntity, DamageSource damageSource) ` | 实现调用 ` itemEntity.level() `<br>实现调用 ` itemEntity.getItem() `<br>实现调用 ` itemStack.is(ModItems.EIGHT_TO_ONE_SMITHING_TEMPLATE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/EightToOneTemplateItem.java#L85) |

## FourToOneTemplateItem

` public class FourToOneTemplateItem extends BaseMultipleToOneTemplateItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/FourToOneTemplateItem.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component MISSING_TOOLTIP ` | 初值 ` Component.translatable( "screen.anvilcraft.ember_smithing.four.missing") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/FourToOneTemplateItem.java#L10) |
| ` public static final List<ResourceLocation> EMPTY_SLOT_TEXTURES ` | 初值 ` List.of( AnvilCraft.of("item/empty_slot_multiphase_matter"), AnvilCraft.of("item/empty_slot_block") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/FourToOneTemplateItem.java#L12) |
| ` public FourToOneTemplateItem(Properties properties) ` | 执行 ` super(properties, 4) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/FourToOneTemplateItem.java#L17) |
| ` @Override public Component getMaterialTooltip() ` | 末尾返回 ` MISSING_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/FourToOneTemplateItem.java#L21) |
| ` @Override public List<ResourceLocation> getEmptySlotTextures() ` | 末尾返回 ` EMPTY_SLOT_TEXTURES ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/FourToOneTemplateItem.java#L26) |

## TwoToOneTemplateItem

` public class TwoToOneTemplateItem extends BaseMultipleToOneTemplateItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/TwoToOneTemplateItem.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component MISSING_TOOLTIP ` | 初值 ` Component.translatable( "screen.anvilcraft.ember_smithing.two.missing") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/TwoToOneTemplateItem.java#L10) |
| ` public static final List<ResourceLocation> EMPTY_SLOT_TEXTURES ` | 初值 ` List.of( AnvilCraft.of("item/empty_slot_multiphase_matter") ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/TwoToOneTemplateItem.java#L12) |
| ` public TwoToOneTemplateItem(Properties properties) ` | 执行 ` super(properties, 2) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/TwoToOneTemplateItem.java#L16) |
| ` @Override public Component getMaterialTooltip() ` | 末尾返回 ` MISSING_TOOLTIP ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/TwoToOneTemplateItem.java#L20) |
| ` @Override public List<ResourceLocation> getEmptySlotTextures() ` | 末尾返回 ` EMPTY_SLOT_TEXTURES ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/template/mto/TwoToOneTemplateItem.java#L25) |
