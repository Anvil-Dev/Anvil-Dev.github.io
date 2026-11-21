# dev.dubhe.anvilcraft.loot.conditions



## MatchDataComponent

` public record MatchDataComponent(Optional<DataComponentPredicate> predicate) implements LootItemCondition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<MatchDataComponent> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group( DataComponentPredicate.CODEC.optionalFieldOf("predicate").forGetter(MatchDataComponent::predicate) ).apply(inst, MatchDataComponent::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L16) |
| ` @Override public LootItemConditionType getType() ` | 末尾返回 ` ModLootItemConditions.MATCH_DATA_COMPONENT.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L20) |
| ` @Override public boolean test(LootContext context) ` | 末尾返回 ` tool != null && (this.predicate.isEmpty() \|\| this.predicate.get().test(tool)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L25) |
| ` public static LootItemCondition.Builder component(DataComponentPredicate.Builder componentBuilder) ` | 末尾返回 ` () -> new MatchDataComponent(Optional.of(componentBuilder.build())) `<br>[调用处 BeheadingLootSubProvider.generatePool](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/BeheadingLootSubProvider.java#L133) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L41) |
| ` public MatchDataComponent(Optional<DataComponentPredicate> predicate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L15) |
| ` public Optional<DataComponentPredicate> predicate() ` | 读取 record 分量 ` predicate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L15) |

## RandomChanceWithFortuneCondition

` public record RandomChanceWithFortuneCondition(float unenchantedChance, LevelBasedValue enchantedChance, Holder<Enchantment> enchantment) implements LootItemCondition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<RandomChanceWithFortuneCondition> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L23) |
| ` @Override public LootItemConditionType getType() ` | 末尾返回 ` ModLootItemConditions.RANDOM_CHANCE_WITH_FORTUNE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L31) |
| ` @Override public boolean test(LootContext context) ` | 末尾返回 ` context.getRandom().nextFloat() < f ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L36) |
| ` public RandomChanceWithFortuneCondition(float unenchantedChance, LevelBasedValue enchantedChance, Holder<Enchantment> enchantment) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L17) |
| ` public float unenchantedChance() ` | 读取 record 分量 ` unenchantedChance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L18) |
| ` public LevelBasedValue enchantedChance() ` | 读取 record 分量 ` enchantedChance ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L19) |
| ` public Holder<Enchantment> enchantment() ` | 读取 record 分量 ` enchantment ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/loot/conditions/RandomChanceWithFortuneCondition.java#L17) |
