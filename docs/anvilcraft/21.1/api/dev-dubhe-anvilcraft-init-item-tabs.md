# dev.dubhe.anvilcraft.init.item.tabs



## BuildingBlocks

` public class BuildingBlocks extends DisplayItemsGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/BuildingBlocks.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void accept() ` | 实现调用 ` this.plain(ModBlocks.ROYAL_STEEL_BLOCK) `<br>实现调用 ` this.plain(ModBlocks.SMOOTH_ROYAL_STEEL_BLOCK) `<br>实现调用 ` this.plain(ModBlocks.CUT_ROYAL_STEEL_BLOCK) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/BuildingBlocks.java#L7) |
| ` public BuildingBlocks() ` | Java 提供的无参构造器。<br>[调用处 ModItemGroups.registerLegacyTabs](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L154) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/BuildingBlocks.java#L6) |

## BuildingBlocksSections

` public class BuildingBlocksSections extends DisplayItemsGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/BuildingBlocksSections.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void accept() ` | 实现调用 ` CreativeTabSection.builder(BuildingBlocksSections.texture("materials")) `<br>实现调用 ` BuildingBlocksSections.texture("materials") `<br>实现调用 ` Component.translatable("anvilcraft.creative.section.building_blocks.materials") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/BuildingBlocksSections.java#L12) |
| ` public BuildingBlocksSections() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/BuildingBlocksSections.java#L11) |

## DisplayItemsGenerator

` public abstract class DisplayItemsGenerator implements CreativeModeTab.DisplayItemsGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/DisplayItemsGenerator.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void accept(CreativeModeTab.ItemDisplayParameters itemDisplayParameters, CreativeModeTab.Output output) ` | 实现调用 ` this.accept() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/DisplayItemsGenerator.java#L23) |
| ` public abstract void accept() ` | [调用处 DisplayItemsGenerator.accept](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/DisplayItemsGenerator.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/DisplayItemsGenerator.java#L30) |
| ` public void acceptFolded(CreativeModeTab.Output output, ItemLike item) ` | 实现调用 ` item.asItem().getDefaultInstance() `<br>实现调用 ` item.asItem() `<br>实现调用 ` CreativeVariantPickerRegistry.createVariants(stack).orElse(List.of()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/DisplayItemsGenerator.java#L32) |
| ` public void plain(ItemLike item) ` | 实现调用 ` this.output.accept(item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/DisplayItemsGenerator.java#L42) |
| ` public void enchanting(ItemLike item, ResourceKey<Enchantment> enchKey, int level) ` | 实现调用 ` this.output.accept(enchanting(this.itemDisplayParameters, item, enchKey, level)) `<br>实现调用 ` enchanting(this.itemDisplayParameters, item, enchKey, level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/DisplayItemsGenerator.java#L49) |
| ` public DisplayItemsGenerator() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/DisplayItemsGenerator.java#L19) |

## FunctionalBlocks

` public class FunctionalBlocks extends DisplayItemsGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/FunctionalBlocks.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void accept() ` | 实现调用 ` this.plain(ModBlocks.NEOFORGE) `<br>实现调用 ` this.plain(Items.ANVIL) `<br>实现调用 ` this.plain(Items.CHIPPED_ANVIL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/FunctionalBlocks.java#L8) |
| ` public FunctionalBlocks() ` | Java 提供的无参构造器。<br>[调用处 ModItemGroups.registerLegacyTabs](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L144) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/FunctionalBlocks.java#L7) |

## FunctionalBlocksSections

` public class FunctionalBlocksSections extends DisplayItemsGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/FunctionalBlocksSections.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void accept() ` | 实现调用 ` CreativeTabSection.builder(FunctionalBlocksSections.texture("forging")) `<br>实现调用 ` FunctionalBlocksSections.texture("forging") `<br>实现调用 ` Component.translatable("anvilcraft.creative.section.functional_blocks.forging") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/FunctionalBlocksSections.java#L12) |
| ` public FunctionalBlocksSections() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/FunctionalBlocksSections.java#L11) |

## Ingredients

` public class Ingredients extends DisplayItemsGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/Ingredients.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void accept() ` | 实现调用 ` this.plain(ModItems.SPONGE_GEMMULE) `<br>实现调用 ` this.plain(ModItems.AMBER) `<br>实现调用 ` this.plain(ModItems.RESIN) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/Ingredients.java#L7) |
| ` public Ingredients() ` | Java 提供的无参构造器。<br>[调用处 ModItemGroups.registerLegacyTabs](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L134) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/Ingredients.java#L6) |

## ItemsSections

` public class ItemsSections extends DisplayItemsGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/ItemsSections.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void accept() ` | 实现调用 ` CreativeTabSection.builder(ItemsSections.texture("tools")) `<br>实现调用 ` ItemsSections.texture("tools") `<br>实现调用 ` Component.translatable("anvilcraft.creative.section.items.tools") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/ItemsSections.java#L14) |
| ` public ItemsSections() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/ItemsSections.java#L13) |

## ToolsAndUtilities

` public class ToolsAndUtilities extends DisplayItemsGenerator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/ToolsAndUtilities.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void accept() ` | 实现调用 ` this.plain(ModItems.GUIDE_BOOK) `<br>实现调用 ` this.plain(ModItems.GEODE) `<br>实现调用 ` this.plain(ModItems.MAGNET) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/ToolsAndUtilities.java#L9) |
| ` public ToolsAndUtilities() ` | Java 提供的无参构造器。<br>[调用处 ModItemGroups.registerLegacyTabs](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModItemGroups.java#L120) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/tabs/ToolsAndUtilities.java#L8) |
