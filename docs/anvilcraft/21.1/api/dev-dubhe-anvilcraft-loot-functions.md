# dev.dubhe.anvilcraft.loot.functions



## CurseLootItemFunction

` public class CurseLootItemFunction extends LootItemConditionalFunction `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/functions/CurseLootItemFunction.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CurseLootItemFunction> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec( ins -> commonFields(ins).apply(ins, CurseLootItemFunction::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/functions/CurseLootItemFunction.java#L19) |
| ` public CurseLootItemFunction(List<LootItemCondition> predicates) ` | 执行 ` super(predicates) `<br>[调用处 LootTableEventListener.lootTable](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/LootTableEventListener.java#L73) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/functions/CurseLootItemFunction.java#L23) |
| ` @Override public LootItemFunctionType<? extends LootItemConditionalFunction> getType() ` | 末尾返回 ` ModLootItemFunctions.CURSE_LOOT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/functions/CurseLootItemFunction.java#L27) |
