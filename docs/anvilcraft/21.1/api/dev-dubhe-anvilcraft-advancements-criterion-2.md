# dev.dubhe.anvilcraft.advancements.criterion（ConvertBeaconTrigger.TriggerInstance 至 MilkTrigger）



## ConvertBeaconTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> convertBeacon() ` | 末尾返回 ` ModCriterionTriggers.CONVERT_BEACON.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.convertBeacon](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L624) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ConvertBeaconTrigger.java#L24) |

## DevourerDevourTrigger

` public class DevourerDevourTrigger extends SimpleCriterionTrigger<DevourerDevourTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L16) |
| ` public void trigger(ServerPlayer player, Block block) ` | 执行 ` this.trigger(player, (instance) -> instance.matches(block)) `<br>[调用处 DevourerDevourTrigger.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L21) |
| ` public DevourerDevourTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L15) |

## DevourerDevourTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<BlockPredicate> block) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L26) |
| ` public static Criterion<TriggerInstance> devourBlock(Block block) ` | 末尾返回 ` devourBlock(BlockPredicate.Builder.block().of(block)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L31) |
| ` public static Criterion<TriggerInstance> devourBlock(BlockPredicate.Builder block) ` | 末尾返回 ` ModCriterionTriggers.DEVOURER_DEVOUR_BLOCK.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.of(block.build())) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L35) |
| ` public boolean matches(Block block) ` | 末尾返回 ` this.block.isEmpty() \|\| this.block.get().test(block) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L41) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<BlockPredicate> block) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L25) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L25) |
| ` public Optional<BlockPredicate> block() ` | 读取 record 分量 ` block ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L25) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L25) |

## DispenserRepairIronGolem

` public class DispenserRepairIronGolem extends SimpleCriterionTrigger<DispenserRepairIronGolem.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L20) |
| ` public DispenserRepairIronGolem() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L14) |

## DispenserRepairIronGolem.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L25) |
| ` public static Criterion<TriggerInstance> repair() ` | 末尾返回 ` ModCriterionTriggers.REPAIR_IRON_GOLEM.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.repairIronGolem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L548) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DispenserRepairIronGolem.java#L24) |

## ElectricAllergyTrigger

` public class ElectricAllergyTrigger extends SimpleCriterionTrigger<ElectricAllergyTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L19) |
| ` public void trigger(ServerPlayer player, ItemStack changed) ` | 执行 ` super.trigger(player, instance -> instance.matches(player, changed)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L24) |
| ` public ElectricAllergyTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L18) |

## ElectricAllergyTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L29) |
| ` public static Criterion<TriggerInstance> of() ` | 末尾返回 ` ModCriterionTriggers.ELECTRIC_ALLERGY.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.electricAllergy](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L620) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L33) |
| ` public boolean matches(ServerPlayer player, ItemStack changed) ` | 实现调用 ` changed.is(ModBlocks.CELESTIAL_FORGING_ANVIL.asItem()) `<br>实现调用 ` ModBlocks.CELESTIAL_FORGING_ANVIL.asItem() `<br>实现调用 ` player.getStats().getValue(Stats.CUSTOM, ModStats.PLACE_POWER_COMPONENT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L37) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L28) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L28) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L28) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L28) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/ElectricAllergyTrigger.java#L28) |

## EnterPowerGridTrigger

` public class EnterPowerGridTrigger extends SimpleCriterionTrigger<EnterPowerGridTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L20) |
| ` public EnterPowerGridTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L14) |

## EnterPowerGridTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> enter() ` | 末尾返回 ` ModCriterionTriggers.ENTER_POWER_GRID.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.enterPowerGrid](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L616) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/EnterPowerGridTrigger.java#L24) |

## FireReforgeTrigger

` public class FireReforgeTrigger extends SimpleCriterionTrigger<FireReforgeTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` super.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L20) |
| ` public FireReforgeTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L14) |

## FireReforgeTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> fireReforge() ` | 末尾返回 ` ModCriterionTriggers.FIRE_REFORGE.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.fireReforge](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L656) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/FireReforgeTrigger.java#L24) |

## HeatCollectorTrigger

` public class HeatCollectorTrigger extends SimpleCriterionTrigger<HeatCollectorTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L21) |
| ` public void trigger(ServerPlayer player, BlockState state, @Nullable BlockEntity entity, int output) ` | 执行 ` super.trigger(player, t -> t.matches(player.level(), state, entity, output)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L26) |
| ` public HeatCollectorTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L20) |

## HeatCollectorTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<BlockStatePredicate> collecting, Optional<MinMaxBounds.Ints> output) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L35) |
| ` public static Criterion<TriggerInstance> collectOn(BlockStatePredicate.Builder builder) ` | 末尾返回 ` ModCriterionTriggers.HEAT_COLLECTOR_COLLECT.get().createCriterion(new TriggerInstance( Optional.empty(), Optional.of(builder.build()), Optional.empty() )) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L41) |
| ` public static Criterion<TriggerInstance> collectOn(BlockStatePredicate statePredicate) ` | 末尾返回 ` ModCriterionTriggers.HEAT_COLLECTOR_COLLECT.get().createCriterion(new TriggerInstance( Optional.empty(), Optional.of(statePredicate), Optional.empty() )) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L49) |
| ` public static Criterion<TriggerInstance> output(MinMaxBounds.Ints output) ` | 末尾返回 ` ModCriterionTriggers.HEAT_COLLECTOR_COLLECT.get().createCriterion(new TriggerInstance( Optional.empty(), Optional.empty(), Optional.of(output) )) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.heatCollectorOutput](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L664) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L57) |
| ` public boolean matches(Level level, BlockState state, @Nullable BlockEntity entity, int output) ` | ` (this.collecting.isPresent() && !this.collecting.get().test(level, state, entity)) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L65) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<BlockStatePredicate> collecting, Optional<MinMaxBounds.Ints> output) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L30) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L31) |
| ` public Optional<BlockStatePredicate> collecting() ` | 读取 record 分量 ` collecting ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L32) |
| ` public Optional<MinMaxBounds.Ints> output() ` | 读取 record 分量 ` output ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L33) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L30) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L30) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/HeatCollectorTrigger.java#L30) |

## InWorldRecipeTrigger

` public class InWorldRecipeTrigger extends SimpleCriterionTrigger<InWorldRecipeTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L16) |
| ` public void trigger(ServerPlayer player, ResourceLocation recipeType, ResourceLocation id) ` | 执行 ` this.trigger(player, (instance) -> instance.matches(recipeType, id)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L21) |
| ` public InWorldRecipeTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L15) |

## InWorldRecipeTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<ResourceLocation> recipeType, Optional<ResourceLocation> id) implements SimpleCriterionTrigger.SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L28) |
| ` public static Criterion<TriggerInstance> inWorldRecipe() ` | 末尾返回 ` ModCriterionTriggers.IN_WORLD_RECIPE.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.empty(), Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.inWorldRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L504) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L34) |
| ` public static Criterion<TriggerInstance> inWorldRecipe(ResourceLocation id) ` | 末尾返回 ` ModCriterionTriggers.IN_WORLD_RECIPE.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.empty(), Optional.of(id)) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.inWorldRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L508) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L40) |
| ` public static Criterion<TriggerInstance> inWorldRecipeType(ResourceLocation recipeType) ` | 末尾返回 ` ModCriterionTriggers.IN_WORLD_RECIPE.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.of(recipeType), Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.inWorldRecipeType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L522) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L46) |
| ` public boolean matches(ResourceLocation recipeType, ResourceLocation id) ` | ` (this.recipeType.isEmpty() && this.id.isEmpty()) ` 成立时提前返回 ` true `<br>` (this.recipeType.isPresent()) ` 成立时提前返回 ` this.recipeType.map(resourceLocation -> resourceLocation.equals(recipeType)).orElse(false) `<br>末尾返回 ` this.id.map(resourceLocation -> resourceLocation.equals(id)).orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L52) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<ResourceLocation> recipeType, Optional<ResourceLocation> id) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L26) |
| ` public Optional<ResourceLocation> recipeType() ` | 读取 record 分量 ` recipeType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L26) |
| ` public Optional<ResourceLocation> id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L26) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25) |

## MagnetLiftingAnvilTrigger

` public class MagnetLiftingAnvilTrigger extends SimpleCriterionTrigger<MagnetLiftingAnvilTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L20) |
| ` public MagnetLiftingAnvilTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L14) |

## MagnetLiftingAnvilTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> liftingAnvil() ` | 末尾返回 ` ModCriterionTriggers.LIFTING_ANVIL.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.liftingAnvil](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L576) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |

## MilkTrigger

` public class MilkTrigger extends SimpleCriterionTrigger<MilkTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L20) |
| ` public MilkTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L14) |
