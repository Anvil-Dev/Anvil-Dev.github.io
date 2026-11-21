# dev.dubhe.anvilcraft.advancements.criterion（PlanetaryCollapseDeathTrigger.TriggerInstance 至 VoidEnergyCollectorWorkingTrigger.TriggerInstance）



## PlanetaryCollapseDeathTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> died() ` | 末尾返回 ` ModCriterionTriggers.PLANETARY_COLLAPSE_DEATH.get().createCriterion( new TriggerInstance(Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.planetaryCollapseDeath](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L502) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L35) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L24) |

## PlayerKilledEntityByAnvilHammerTrigger

` public class PlayerKilledEntityByAnvilHammerTrigger extends SimpleCriterionTrigger<PlayerKilledEntityByAnvilHammerTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L19) |
| ` public void trigger(ServerPlayer player, Entity entity) ` | 实现调用 ` EntityPredicate.createContext(player, entity) `<br>实现调用 ` this.trigger(player, instance -> instance.matches(context)) `<br>[调用处 PlayerKilledEntityByAnvilHammerTrigger.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L24) |
| ` public PlayerKilledEntityByAnvilHammerTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L18) |

## PlayerKilledEntityByAnvilHammerTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<ContextAwarePredicate> entity) implements SimpleCriterionTrigger.SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L32) |
| ` public static Criterion<TriggerInstance> killedEntity(HolderGetter<EntityType<?>> lookup, EntityType<?> type) ` | 实现调用 ` ModCriterionTriggers.PLAYER_KILLED_ENTITY_BY_ANVIL_HAMMER.get() `<br>实现调用 ` Optional.empty() `<br>实现调用 ` Optional.of(EntityPredicate.wrap( EntityPredicate.Builder.entity().of(lookup, type) )) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.hammerKill](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L406) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L37) |
| ` public boolean matches(LootContext context) ` | 末尾返回 ` this.entity.isEmpty() \|\| this.entity.get().matches(context) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L45) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<ContextAwarePredicate> entity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L29) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L30) |
| ` public Optional<ContextAwarePredicate> entity() ` | 读取 record 分量 ` entity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L30) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L29) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L29) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerKilledEntityByAnvilHammerTrigger.java#L29) |

## PlayerWearAnvilHammerTrigger

` public class PlayerWearAnvilHammerTrigger extends SimpleCriterionTrigger<PlayerWearAnvilHammerTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L20) |
| ` public PlayerWearAnvilHammerTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L14) |

## PlayerWearAnvilHammerTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> wear() ` | 末尾返回 ` ModCriterionTriggers.PLAYER_WEAR_ANVIL_HAMMER.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.playerWearAnvilHammer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L268) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlayerWearAnvilHammerTrigger.java#L24) |

## StarContactDeathTrigger

` public class StarContactDeathTrigger extends SimpleCriterionTrigger<StarContactDeathTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L20) |
| ` public StarContactDeathTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L14) |

## StarContactDeathTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> died() ` | 末尾返回 ` ModCriterionTriggers.STAR_CONTACT_DEATH.get().createCriterion( new TriggerInstance(Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.starContactDeath](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L506) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L35) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/StarContactDeathTrigger.java#L24) |

## UseItemTrigger

` public class UseItemTrigger extends SimpleCriterionTrigger<UseItemTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L18) |
| ` public void trigger(ServerPlayer player, Item item) ` | 执行 ` this.trigger(player, (instance) -> instance.matches(item)) `<br>[调用处 UseItemTrigger.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L23) |
| ` public UseItemTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L17) |

## UseItemTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<ItemPredicate> item) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L28) |
| ` public static Criterion<TriggerInstance> useItem() ` | 末尾返回 ` ModCriterionTriggers.USE_ITEM.get().createCriterion(new TriggerInstance(Optional.empty(), Optional.empty())) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L33) |
| ` public static Criterion<TriggerInstance> useItem(HolderGetter<Item> items, Item item) ` | 末尾返回 ` ModCriterionTriggers.USE_ITEM.get().createCriterion(new TriggerInstance( Optional.empty(), Optional.of(ItemPredicate.Builder.item().of(items, item).build()))) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.useItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L280) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L37) |
| ` public boolean matches(Item item) ` | 末尾返回 ` this.item.isEmpty() \|\| this.item.get().test(item.getDefaultInstance()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L42) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<ItemPredicate> item) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L27) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L27) |
| ` public Optional<ItemPredicate> item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L27) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L27) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L27) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/UseItemTrigger.java#L27) |

## VoidCollectorTrigger

` public class VoidCollectorTrigger extends SimpleCriterionTrigger<VoidCollectorTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` super.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L20) |
| ` public VoidCollectorTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L14) |

## VoidCollectorTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create(instance -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L27) |
| ` public static Criterion<TriggerInstance> work() ` | 末尾返回 ` ModCriterionTriggers.VOID_COLLECTOR_COLLECT.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.voidCollectorWork](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L474) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L31) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L35) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L25) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidCollectorTrigger.java#L24) |

## VoidEnergyCollectorWorkingTrigger

` public class VoidEnergyCollectorWorkingTrigger extends SimpleCriterionTrigger<VoidEnergyCollectorWorkingTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L20) |
| ` public VoidEnergyCollectorWorkingTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L14) |

## VoidEnergyCollectorWorkingTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> collect() ` | 末尾返回 ` ModCriterionTriggers.VOID_ENERGY_COLLECTOR_WORKING.get().createCriterion( new TriggerInstance(Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.voidEnergyCollectorWorking](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L276) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L35) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/VoidEnergyCollectorWorkingTrigger.java#L24) |
