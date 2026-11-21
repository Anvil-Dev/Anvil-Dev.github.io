# dev.dubhe.anvilcraft.loot.modifiers



## DisintegrationLootModifier

` public class DisintegrationLootModifier extends LootModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/DisintegrationLootModifier.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<DisintegrationLootModifier> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec( inst -> LootModifier.codecStart(inst).apply(inst, DisintegrationLootModifier::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/DisintegrationLootModifier.java#L22) |
| ` public DisintegrationLootModifier(LootItemCondition[] conditionsIn, int priority) ` | 执行 ` super(conditionsIn, priority) `<br>[调用处 ModLootModifierProvider.start](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootModifierProvider.java#L27) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/DisintegrationLootModifier.java#L26) |
| ` @Override public MapCodec<? extends IGlobalLootModifier> codec() ` | 末尾返回 ` DisintegrationLootModifier.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/DisintegrationLootModifier.java#L52) |

## SmeltingLootModifier

` public class SmeltingLootModifier extends LootModifier `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/SmeltingLootModifier.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<SmeltingLootModifier> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec( inst -> LootModifier.codecStart(inst).apply(inst, SmeltingLootModifier::new) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/SmeltingLootModifier.java#L33) |
| ` public SmeltingLootModifier(LootItemCondition[] conditions, int priority) ` | 执行 ` super(conditions, priority) `<br>[调用处 ModLootModifierProvider.start](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootModifierProvider.java#L22) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/SmeltingLootModifier.java#L37) |
| ` @Override public MapCodec<? extends IGlobalLootModifier> codec() ` | 末尾返回 ` SmeltingLootModifier.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/modifiers/SmeltingLootModifier.java#L106) |
