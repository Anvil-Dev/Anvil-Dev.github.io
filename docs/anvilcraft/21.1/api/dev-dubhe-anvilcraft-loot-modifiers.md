# dev.dubhe.anvilcraft.loot.modifiers



## DisintegrationLootModifier

` public class DisintegrationLootModifier extends LootModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/DisintegrationLootModifier.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<DisintegrationLootModifier> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec( inst -> LootModifier.codecStart(inst).apply(inst, DisintegrationLootModifier::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/DisintegrationLootModifier.java#L22) |
| ` public DisintegrationLootModifier(LootItemCondition[] conditionsIn) ` | 执行 ` super(conditionsIn) `<br>[调用处 ModLootModifierProvider.start](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootModifierProvider.java#L27) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/DisintegrationLootModifier.java#L26) |
| ` @Override public MapCodec<? extends IGlobalLootModifier> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/DisintegrationLootModifier.java#L52) |

## SmeltingLootModifier

` public class SmeltingLootModifier extends LootModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/SmeltingLootModifier.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<SmeltingLootModifier> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec( inst -> LootModifier.codecStart(inst).apply(inst, SmeltingLootModifier::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/SmeltingLootModifier.java#L33) |
| ` public SmeltingLootModifier(LootItemCondition[] conditions) ` | 执行 ` super(conditions) `<br>[调用处 ModLootModifierProvider.start](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootModifierProvider.java#L22) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/SmeltingLootModifier.java#L37) |
| ` @Override public MapCodec<? extends IGlobalLootModifier> codec() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/SmeltingLootModifier.java#L106) |
