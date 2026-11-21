# dev.dubhe.anvilcraft.advancements.criterion（AnvilHammerChangeBlockTrigger 至 CelestialEvolutionTrigger）



## AnvilHammerChangeBlockTrigger

` public class AnvilHammerChangeBlockTrigger extends SimpleCriterionTrigger<AnvilHammerChangeBlockTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L17) |
| ` public void trigger(ServerPlayer player, BlockState oldState, BlockState newState) ` | 执行 ` this.trigger(player, instance -> instance.matches(oldState, newState)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L22) |
| ` public AnvilHammerChangeBlockTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L16) |

## AnvilHammerChangeBlockTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<BlockStatePredicate> oldState, Optional<BlockStatePredicate> newState) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L31) |
| ` public static Criterion<TriggerInstance> change(BlockStatePredicate oldState, BlockStatePredicate newState) ` | 末尾返回 ` ModCriterionTriggers.ANVIL_HAMMER_CHANGE_BLOCK.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.of(oldState), Optional.of(newState)) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L37) |
| ` public static Criterion<TriggerInstance> change(BlockStatePredicate.Builder oldBuilder, BlockStatePredicate.Builder newBuilder) ` | 末尾返回 ` TriggerInstance.change(oldBuilder.build(), newBuilder.build()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L43) |
| ` public boolean matches(BlockState oldState, BlockState newState) ` | 末尾返回 ` (this.oldState.isEmpty() \|\| this.oldState.get().testWithoutEntity(oldState)) && (this.newState.isEmpty() \|\| this.newState.get().testWithoutEntity(newState)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L47) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<BlockStatePredicate> oldState, Optional<BlockStatePredicate> newState) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L26) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L27) |
| ` public Optional<BlockStatePredicate> oldState() ` | 读取 record 分量 ` oldState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L28) |
| ` public Optional<BlockStatePredicate> newState() ` | 读取 record 分量 ` newState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L29) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L26) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L26) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerChangeBlockTrigger.java#L26) |

## AnvilHammerClickBlockTrigger

` public class AnvilHammerClickBlockTrigger extends SimpleCriterionTrigger<AnvilHammerClickBlockTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L15) |
| ` public void trigger(ServerPlayer player, String type) ` | 执行 ` this.trigger(player, instance -> instance.matches(type)) `<br>[调用处 AnvilHammerClickBlockTrigger.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L20) |
| ` public AnvilHammerClickBlockTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L14) |

## AnvilHammerClickBlockTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<String> type) implements SimpleCriterionTrigger.SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L28) |
| ` public static Criterion<TriggerInstance> leftClickBlock() ` | 末尾返回 ` ModCriterionTriggers.ANVIL_HAMMER_CLICK_BLOCK.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.of("left_click")) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.hammerLeftClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L382) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L33) |
| ` public static Criterion<TriggerInstance> rightClickBlock() ` | 末尾返回 ` ModCriterionTriggers.ANVIL_HAMMER_CLICK_BLOCK.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.of("right_click")) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.hammerRightClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L386) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L39) |
| ` public static Criterion<TriggerInstance> shiftRightClickBlock() ` | 末尾返回 ` ModCriterionTriggers.ANVIL_HAMMER_CLICK_BLOCK.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.of("shift_right_click")) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.hammerShiftRightClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L390) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L45) |
| ` public boolean matches(String type) ` | 末尾返回 ` this.type.isPresent() && this.type.get().equals(type) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L51) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<String> type) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L25) |
| ` public Optional<String> type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L26) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerClickBlockTrigger.java#L24) |

## AnvilHammerHurtEntityTrigger

` public class AnvilHammerHurtEntityTrigger extends SimpleCriterionTrigger<AnvilHammerHurtEntityTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L19) |
| ` public void trigger(ServerPlayer player, Float damage) ` | 执行 ` this.trigger(player, damage, Items.AIR) `<br>[调用处 AnvilHammerHurtEntityTrigger.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L24) |
| ` public void trigger(ServerPlayer player, Float damage, Item item) ` | 执行 ` this.trigger(player, (instance) -> instance.matches(damage, item)) `<br>[调用处 AnvilHammerHurtEntityTrigger.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L28) |
| ` public AnvilHammerHurtEntityTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L18) |

## AnvilHammerHurtEntityTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<Float> damage, Optional<ItemPredicate> item) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L37) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<Float> damage) ` | 执行 ` this(player, damage, Optional.empty()) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L43) |
| ` public static Criterion<TriggerInstance> hurtEntity() ` | 末尾返回 ` ModCriterionTriggers.ANVIL_HAMMER_HURT_ENTITY.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.hammerHurt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L398) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L47) |
| ` public static Criterion<TriggerInstance> hurtEntity(float damage) ` | 末尾返回 ` ModCriterionTriggers.ANVIL_HAMMER_HURT_ENTITY.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.of(damage)) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.hammerHurt](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L402) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L53) |
| ` public static Criterion<TriggerInstance> hurtEntity(HolderGetter<Item> items, float damage, Item item) ` | 实现调用 ` ModCriterionTriggers.ANVIL_HAMMER_HURT_ENTITY.get() `<br>实现调用 ` Optional.empty() `<br>实现调用 ` Optional.of(damage) `<br>[调用处 ModAdvancementsHandler.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/advancement/ModAdvancementsHandler.java#L306) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L59) |
| ` public boolean matches(Float damage) ` | 末尾返回 ` this.matches(damage, Items.AIR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L66) |
| ` public boolean matches(Float damage, Item item) ` | 末尾返回 ` (this.damage.isEmpty() \|\| damage >= this.damage.get()) && (this.item.isEmpty() \|\| this.item.get().test(item.getDefaultInstance())) `<br>[调用处 AnvilHammerHurtEntityTrigger.TriggerInstance.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L70) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L33) |
| ` public Optional<Float> damage() ` | 读取 record 分量 ` damage ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L34) |
| ` public Optional<ItemPredicate> item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L35) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L32) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L32) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHammerHurtEntityTrigger.java#L32) |

## AnvilHitPiezoelectricCrystalTrigger

` public class AnvilHitPiezoelectricCrystalTrigger extends SimpleCriterionTrigger<AnvilHitPiezoelectricCrystalTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L20) |
| ` public AnvilHitPiezoelectricCrystalTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L14) |

## AnvilHitPiezoelectricCrystalTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create(instance -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> hit() ` | 末尾返回 ` ModCriterionTriggers.ANVIL_HIT_PIEZOELECTRIC_CRYSTAL.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.hitPiezoelectricCrystal](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L410) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilHitPiezoelectricCrystalTrigger.java#L24) |

## AnvilLootingTrigger

` public class AnvilLootingTrigger extends SimpleCriterionTrigger<AnvilLootingTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L19) |
| ` public void trigger(ServerPlayer player, Entity entity) ` | 实现调用 ` EntityPredicate.createContext(player, entity) `<br>实现调用 ` this.trigger(player, instance -> instance.matches(context)) `<br>[调用处 AnvilLootingTrigger.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L24) |
| ` public AnvilLootingTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L18) |

## AnvilLootingTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<ContextAwarePredicate> entity) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L32) |
| ` public static Criterion<TriggerInstance> looting() ` | 末尾返回 ` ModCriterionTriggers.ANVIL_LOOTING.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.anvilLooting](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L338) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L37) |
| ` public static Criterion<TriggerInstance> looting(HolderGetter<EntityType<?>> lookup, EntityType<?> entityType) ` | 实现调用 ` ModCriterionTriggers.ANVIL_LOOTING.get() `<br>实现调用 ` Optional.empty() `<br>实现调用 ` Optional.of(EntityPredicate.wrap(EntityPredicate.Builder.entity().of(lookup, entityType).build())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.anvilLooting](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L342) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L43) |
| ` public boolean matches(LootContext lootContext) ` | 末尾返回 ` this.entity.map(contextAwarePredicate -> contextAwarePredicate.matches(lootContext)).orElse(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L51) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<ContextAwarePredicate> entity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L29) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L30) |
| ` public Optional<ContextAwarePredicate> entity() ` | 读取 record 分量 ` entity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L29) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L29) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilLootingTrigger.java#L29) |

## AnvilOnGroundTrigger

` public class AnvilOnGroundTrigger extends SimpleCriterionTrigger<AnvilOnGroundTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L20) |
| ` public AnvilOnGroundTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L14) |

## AnvilOnGroundTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create(instance -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> onGround() ` | 末尾返回 ` ModCriterionTriggers.ANVIL_ON_GROUND.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.anvilOnGround](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L378) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/AnvilOnGroundTrigger.java#L24) |

## BlockComparatorTurnOverTrigger

` public class BlockComparatorTurnOverTrigger extends SimpleCriterionTrigger<BlockComparatorTurnOverTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L20) |
| ` public BlockComparatorTurnOverTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L14) |

## BlockComparatorTurnOverTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> turnOver() ` | 末尾返回 ` ModCriterionTriggers.BLOCK_COMPARATOR_TURN_OVER.get().createCriterion( new TriggerInstance(Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.blockComparatorTurnOver](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L486) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L35) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockComparatorTurnOverTrigger.java#L24) |

## BlockPredicate

` public record BlockPredicate(Optional<HolderSet<Block>> block) implements Predicate<Block> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<BlockPredicate> CODEC ` | 初值 ` RecordCodecBuilder.create(instance -> instance.group( RegistryCodecs.homogeneousList(Registries.BLOCK).optionalFieldOf("block").forGetter(BlockPredicate::block) ).apply(instance, BlockPredicate::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L16) |
| ` @Override public boolean test(Block block) ` | 末尾返回 ` this.block.isEmpty() \|\| block.defaultBlockState().is(this.block.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L20) |
| ` public BlockPredicate(Optional<HolderSet<Block>> block) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L15) |
| ` public Optional<HolderSet<Block>> block() ` | 读取 record 分量 ` block ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L15) |

## BlockPredicate.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Builder block() ` | 末尾返回 ` new Builder() `<br>[调用处 DevourerDevourTrigger.TriggerInstance.devourBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/DevourerDevourTrigger.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L31) |
| ` @SuppressWarnings("deprecation") public Builder of(Block block) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` HolderSet.direct(b -> b.defaultBlockState().getBlock().builtInRegistryHolder(), block) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L35) |
| ` public Builder of(TagKey<Block> tag) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` BuiltInRegistries.BLOCK.getOrThrow(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L41) |
| ` public BlockPredicate build() ` | 末尾返回 ` new BlockPredicate(Optional.of(this.blocks)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/BlockPredicate.java#L46) |

## CelestialEvolutionTrigger

` public class CelestialEvolutionTrigger extends SimpleCriterionTrigger<CelestialEvolutionTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L17) |
| ` public void trigger(ServerPlayer player, int massAnvils, StellarTerminal.Kind terminal) ` | 执行 ` this.trigger(player, (instance) -> instance.matches(massAnvils, terminal)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L22) |
| ` public CelestialEvolutionTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/CelestialEvolutionTrigger.java#L16) |
