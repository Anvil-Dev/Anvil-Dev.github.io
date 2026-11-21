# dev.dubhe.anvilcraft.loot.functions



## CurseLootItemFunction

` public class CurseLootItemFunction extends LootItemConditionalFunction `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/functions/CurseLootItemFunction.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<CurseLootItemFunction> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec( ins -> LootItemConditionalFunction.commonFields(ins).apply(ins, CurseLootItemFunction::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/functions/CurseLootItemFunction.java#L17) |
| ` public CurseLootItemFunction(List<LootItemCondition> predicates) ` | 执行 ` super(predicates) `<br>[调用处 LootTableEventListener.lootTable](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LootTableEventListener.java#L72) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/functions/CurseLootItemFunction.java#L21) |
| ` @Override public MapCodec<? extends LootItemConditionalFunction> codec() ` | 末尾返回 ` CurseLootItemFunction.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/functions/CurseLootItemFunction.java#L25) |
