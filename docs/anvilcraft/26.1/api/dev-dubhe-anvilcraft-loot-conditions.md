# dev.dubhe.anvilcraft.loot.conditions



## MatchDataComponent

` public record MatchDataComponent(Map<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates) implements LootItemCondition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<MatchDataComponent> CODEC ` | 由 ` RecordCodecBuilder.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L15) |
| ` @Override public MapCodec<? extends LootItemCondition> codec() ` | 末尾返回 ` MatchDataComponent.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L21) |
| ` @Override public boolean test(LootContext context) ` | ` (tool == null) ` 成立时提前返回 ` false `<br>` (this.predicates.isEmpty()) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L26) |
| ` public static LootItemCondition.Builder component(DataComponentPredicate.Type<?> type, DataComponentPredicate predicate) ` | 末尾返回 ` () -> new MatchDataComponent(new HashMap<>(Map.of(type, predicate))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L46) |
| ` public static LootItemCondition.Builder component(Map<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates) ` | 末尾返回 ` () -> new MatchDataComponent(new HashMap<>(predicates)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L50) |
| ` public MatchDataComponent(Map<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L14) |
| ` public Map<DataComponentPredicate.Type<?>, DataComponentPredicate> predicates() ` | 读取 record 分量 ` predicates ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/loot/conditions/MatchDataComponent.java#L14) |
