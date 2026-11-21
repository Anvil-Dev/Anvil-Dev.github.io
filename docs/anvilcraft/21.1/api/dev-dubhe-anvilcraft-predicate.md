# dev.dubhe.anvilcraft.predicate



## FallingBlockPredicate

` public record FallingBlockPredicate(BlockStatePredicate block) implements EntitySubPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<FallingBlockPredicate> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group( BlockStatePredicate.CODEC .fieldOf("block") .forGetter(FallingBlockPredicate::block) ).apply(inst, FallingBlockPredicate::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L16) |
| ` @Override public MapCodec<FallingBlockPredicate> codec() ` | 末尾返回 ` ModEntitySubPredicates.FALLING_BLOCK.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L22) |
| ` @Override public boolean matches(Entity entity, ServerLevel level, @Nullable Vec3 position) ` | ` (!(entity instanceof FallingBlockEntity fallingBlock)) ` 成立时提前返回 ` false `<br>末尾返回 ` this.block().testWithoutEntity(fallingBlock.getBlockState()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L27) |
| ` public FallingBlockPredicate(BlockStatePredicate block) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L15) |
| ` public BlockStatePredicate block() ` | 读取 record 分量 ` block `<br>[调用处 FallingBlockPredicate.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/FallingBlockPredicate.java#L15) |

## InWaterOrBreathingPredicate

` public record InWaterOrBreathingPredicate() implements EntitySubPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<InWaterOrBreathingPredicate> CODEC ` | 初值 ` MapCodec.unit(InWaterOrBreathingPredicate::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java#L16) |
| ` @Override public MapCodec<InWaterOrBreathingPredicate> codec() ` | 末尾返回 ` ModEntitySubPredicates.IN_WATER_OR_BREATHING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java#L18) |
| ` @Override public boolean matches(Entity entity, ServerLevel level, @Nullable Vec3 position) ` | 末尾返回 ` entity.isInWater() \|\| (entity instanceof LivingEntity living && EquipmentAbilities.canBreathe(living)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java#L23) |
| ` public InWaterOrBreathingPredicate() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/InWaterOrBreathingPredicate.java#L15) |

## NotInLavaPredicate

` public record NotInLavaPredicate() implements EntitySubPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<NotInLavaPredicate> CODEC ` | 初值 ` MapCodec.unit(NotInLavaPredicate::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java#L14) |
| ` @Override public MapCodec<NotInLavaPredicate> codec() ` | 末尾返回 ` ModEntitySubPredicates.NOT_IN_LAVA.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java#L16) |
| ` @Override public boolean matches(Entity entity, ServerLevel level, @Nullable Vec3 position) ` | 末尾返回 ` !entity.isInLava() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java#L21) |
| ` public NotInLavaPredicate() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInLavaPredicate.java#L13) |

## NotInWaterPredicate

` public record NotInWaterPredicate() implements EntitySubPredicate `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<NotInWaterPredicate> CODEC ` | 初值 ` MapCodec.unit(NotInWaterPredicate::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java#L14) |
| ` @Override public MapCodec<NotInWaterPredicate> codec() ` | 末尾返回 ` ModEntitySubPredicates.NOT_IN_WATER.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java#L16) |
| ` @Override public boolean matches(Entity entity, ServerLevel level, @Nullable Vec3 position) ` | 末尾返回 ` !entity.isInWater() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java#L21) |
| ` public NotInWaterPredicate() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java#L13) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java#L13) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java#L13) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/predicate/NotInWaterPredicate.java#L13) |
