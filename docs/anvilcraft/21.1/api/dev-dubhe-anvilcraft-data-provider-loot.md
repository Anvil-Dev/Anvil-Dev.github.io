# dev.dubhe.anvilcraft.data.provider.loot



## AdvancementLootSubProvider

` public class AdvancementLootSubProvider implements LootTableSubProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/AdvancementLootSubProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AdvancementLootSubProvider(HolderLookup.Provider provider) ` | 执行 ` this.provider = provider ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/AdvancementLootSubProvider.java#L18) |
| ` @Override public void generate(BiConsumer<ResourceKey<LootTable>, LootTable.Builder> consumer) ` | 实现调用 ` LootTable.lootTable() `<br>实现调用 ` LootPool.lootPool() .setRolls(ConstantValue.exactly(1)) .add(LootItem.lootTableItem(ModItems.GUIDE_BOOK)) `<br>实现调用 ` LootPool.lootPool() .setRolls(ConstantValue.exactly(1)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/AdvancementLootSubProvider.java#L22) |

## BeheadingLootSubProvider

` public class BeheadingLootSubProvider implements LootTableSubProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/BeheadingLootSubProvider.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BeheadingLootSubProvider(HolderLookup.Provider provider) ` | 执行 ` this.provider = provider ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/BeheadingLootSubProvider.java#L36) |
| ` @Override public void generate(BiConsumer<ResourceKey<LootTable>, LootTable.Builder> consumer) ` | 实现调用 ` this.generateBeheading(consumer, ModLootTables.BEHEADING_ZOMBIE, Items.ZOMBIE_HEAD, 0.01f, 0.01f ) `<br>实现调用 ` this.generateBeheading(consumer, ModLootTables.BEHEADING_SKELETON, Items.SKELETON_SKULL, 0.01f, 0.01f ) `<br>实现调用 ` this.generateBeheading(consumer, ModLootTables.BEHEADING_CREEPER, Items.CREEPER_HEAD, 0.01f, 0.01f ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/BeheadingLootSubProvider.java#L40) |
| ` public void generateBeheading( BiConsumer<ResourceKey<LootTable>, LootTable.Builder> consumer, ResourceKey<LootTable> lootTableKey, ItemLike headItem, float baseChance, float bonusChancePerLevel ) ` | 实现调用 ` LootTable.lootTable() .withPool(this.generatePool(headItem, baseChance, bonusChancePerLevel)) `<br>实现调用 ` LootTable.lootTable() `<br>实现调用 ` this.generatePool(headItem, baseChance, bonusChancePerLevel) `<br>[调用处 BeheadingLootSubProvider.generate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/BeheadingLootSubProvider.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/BeheadingLootSubProvider.java#L87) |
| ` public void generateBeheading( BiConsumer<ResourceKey<LootTable>, LootTable.Builder> consumer, ResourceKey<LootTable> lootTableKey, ItemLike headItem, float baseChance, float bonusChancePerLevel, LootItemFunction.Builder extraFunction ) ` | 实现调用 ` LootTable.lootTable() .withPool(this.generatePool(headItem, baseChance, bonusChancePerLevel, extraFunction)) `<br>实现调用 ` LootTable.lootTable() `<br>实现调用 ` this.generatePool(headItem, baseChance, bonusChancePerLevel, extraFunction) `<br>[调用处 BeheadingLootSubProvider.generate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/BeheadingLootSubProvider.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/BeheadingLootSubProvider.java#L105) |

## CrabTrapLootSubProvider

` public class CrabTrapLootSubProvider implements LootTableSubProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/CrabTrapLootSubProvider.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CrabTrapLootSubProvider(HolderLookup.Provider provider) ` | 执行 ` this.provider = provider ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/CrabTrapLootSubProvider.java#L26) |
| ` @Override public void generate(BiConsumer<ResourceKey<LootTable>, LootTable.Builder> consumer) ` | 实现调用 ` this.provider.lookupOrThrow(Registries.BIOME) `<br>实现调用 ` LootTable.lootTable() `<br>实现调用 ` LootPool.lootPool() .setRolls(ConstantValue.exactly(1.0f)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/CrabTrapLootSubProvider.java#L30) |
