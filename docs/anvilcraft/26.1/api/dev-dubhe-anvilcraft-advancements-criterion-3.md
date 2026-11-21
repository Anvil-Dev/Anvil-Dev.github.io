# dev.dubhe.anvilcraft.advancements.criterion（InWorldRecipeTrigger.TriggerInstance 至 PlanetaryCollapseDeathTrigger）



## InWorldRecipeTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<Identifier> recipeType, Optional<Identifier> id) implements SimpleCriterionTrigger.SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L28) |
| ` public static Criterion<TriggerInstance> inWorldRecipe() ` | 末尾返回 ` ModCriterionTriggers.IN_WORLD_RECIPE.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.empty(), Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.inWorldRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L302) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L34) |
| ` public static Criterion<TriggerInstance> inWorldRecipe(Identifier id) ` | 末尾返回 ` ModCriterionTriggers.IN_WORLD_RECIPE.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.empty(), Optional.of(id)) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.inWorldRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L306) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L40) |
| ` public static Criterion<TriggerInstance> inWorldRecipeType(Identifier recipeType) ` | 末尾返回 ` ModCriterionTriggers.IN_WORLD_RECIPE.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.of(recipeType), Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.inWorldRecipeType](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L320) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L46) |
| ` public boolean matches(Identifier recipeType, Identifier id) ` | ` (this.recipeType.isEmpty() && this.id.isEmpty()) ` 成立时提前返回 ` true `<br>` (this.recipeType.isPresent()) ` 成立时提前返回 ` this.recipeType.map(resourceLocation -> resourceLocation.equals(recipeType)).orElse(false) `<br>末尾返回 ` this.id.map(resourceLocation -> resourceLocation.equals(id)).orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L52) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<Identifier> recipeType, Optional<Identifier> id) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L26) |
| ` public Optional<Identifier> recipeType() ` | 读取 record 分量 ` recipeType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L26) |
| ` public Optional<Identifier> id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L26) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/InWorldRecipeTrigger.java#L25) |

## MagnetLiftingAnvilTrigger

` public class MagnetLiftingAnvilTrigger extends SimpleCriterionTrigger<MagnetLiftingAnvilTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L20) |
| ` public MagnetLiftingAnvilTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L14) |

## MagnetLiftingAnvilTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create(instance -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> liftingAnvil() ` | 末尾返回 ` ModCriterionTriggers.LIFTING_ANVIL.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.liftingAnvil](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L374) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MagnetLiftingAnvilTrigger.java#L24) |

## MilkTrigger

` public class MilkTrigger extends SimpleCriterionTrigger<MilkTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L20) |
| ` public MilkTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L14) |

## MilkTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create(instance -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> milk() ` | 末尾返回 ` ModCriterionTriggers.MILK.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.milk](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L334) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L33) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MilkTrigger.java#L24) |

## MineralFountainCreateTrigger

` public class MineralFountainCreateTrigger extends SimpleCriterionTrigger<MineralFountainCreateTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L14) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L19) |
| ` public MineralFountainCreateTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L13) |

## MineralFountainCreateTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( ContextAwarePredicate.CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(ins, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L24) |
| ` public static Criterion<TriggerInstance> create() ` | 末尾返回 ` ModCriterionTriggers.MINERAL_FOUNTAIN_CREATE.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.mineralFountainCreate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L478) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L28) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L32) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L23) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MineralFountainCreateTrigger.java#L23) |

## MultiBlockFormTrigger

` public class MultiBlockFormTrigger extends SimpleCriterionTrigger<MultiBlockFormTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L20) |
| ` public MultiBlockFormTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L14) |

## MultiBlockFormTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> form() ` | 末尾返回 ` ModCriterionTriggers.MULTI_BLOCK_FORM.get().createCriterion( new TriggerInstance(Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.multiBlockForm](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L264) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L35) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/MultiBlockFormTrigger.java#L24) |

## PipeConnectContainersTrigger

` public class PipeConnectContainersTrigger extends SimpleCriterionTrigger<PipeConnectContainersTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L20) |
| ` public PipeConnectContainersTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L14) |

## PipeConnectContainersTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> connect() ` | 末尾返回 ` ModCriterionTriggers.PIPE_CONNECT_CONTAINERS.get().createCriterion( new TriggerInstance(Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.pipeConnectContainers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L272) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L35) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PipeConnectContainersTrigger.java#L24) |

## PlacerPlaceTrigger

` public class PlacerPlaceTrigger extends SimpleCriterionTrigger<PlacerPlaceTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L16) |
| ` public void trigger(ServerPlayer player, Block block) ` | 执行 ` this.trigger(player, instance -> instance.matches(block)) `<br>[调用处 PlacerPlaceTrigger.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L21) |
| ` public PlacerPlaceTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L15) |

## PlacerPlaceTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player, Optional<BlockPredicate> block) implements SimpleCriterionTrigger.SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L28) |
| ` public static Criterion<TriggerInstance> placeBlock(Block block) ` | 末尾返回 ` TriggerInstance.placeBlock(BlockPredicate.Builder.block().of(block)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L33) |
| ` public static Criterion<TriggerInstance> placeBlock(BlockPredicate.Builder block) ` | 末尾返回 ` ModCriterionTriggers.PLACER_PLACE_BLOCK.get().createCriterion( new TriggerInstance(Optional.empty(), Optional.of(block.build())) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L37) |
| ` public boolean matches(Block block) ` | 末尾返回 ` this.block.isEmpty() \|\| this.block.get().test(block) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L43) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player, Optional<BlockPredicate> block) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L25) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L26) |
| ` public Optional<BlockPredicate> block() ` | 读取 record 分量 ` block ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L26) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L25) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L25) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerPlaceTrigger.java#L25) |

## PlacerShuttleTrigger

` public class PlacerShuttleTrigger extends SimpleCriterionTrigger<PlacerShuttleTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L14) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L19) |
| ` public PlacerShuttleTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L13) |

## PlacerShuttleTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create(ins -> ins.group( ContextAwarePredicate.CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(ins, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L24) |
| ` public static Criterion<TriggerInstance> create() ` | 末尾返回 ` ModCriterionTriggers.PLACER_SHUTTLE.get().createCriterion(new TriggerInstance(Optional.empty())) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.placerShuttle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L482) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L28) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L32) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L23) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L23) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L23) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L23) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlacerShuttleTrigger.java#L23) |

## PlanetDetonationTrigger

` public class PlanetDetonationTrigger extends SimpleCriterionTrigger<PlanetDetonationTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L20) |
| ` public PlanetDetonationTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L14) |

## PlanetDetonationTrigger.TriggerInstance

` public record TriggerInstance(Optional<ContextAwarePredicate> player) implements SimpleInstance `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<TriggerInstance> CODEC ` | 初值 ` RecordCodecBuilder.create((instance) -> instance.group( EntityPredicate.ADVANCEMENT_CODEC.optionalFieldOf("player").forGetter(TriggerInstance::player) ).apply(instance, TriggerInstance::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L25) |
| ` public static Criterion<TriggerInstance> detonated() ` | 末尾返回 ` ModCriterionTriggers.PLANET_DETONATION.get().createCriterion( new TriggerInstance(Optional.empty()) ) `<br>[调用处 AdvancementLineHelper.AdvancementHelper.planetDetonation](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/advancement/AdvancementLineHelper.java#L498) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L29) |
| ` public boolean matches() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L35) |
| ` public TriggerInstance(Optional<ContextAwarePredicate> player) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L24) |
| ` public Optional<ContextAwarePredicate> player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetDetonationTrigger.java#L24) |

## PlanetaryCollapseDeathTrigger

` public class PlanetaryCollapseDeathTrigger extends SimpleCriterionTrigger<PlanetaryCollapseDeathTrigger.TriggerInstance> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Codec<TriggerInstance> codec() ` | 末尾返回 ` TriggerInstance.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L15) |
| ` public void trigger(ServerPlayer player) ` | 执行 ` this.trigger(player, TriggerInstance::matches) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L20) |
| ` public PlanetaryCollapseDeathTrigger() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/advancements/criterion/PlanetaryCollapseDeathTrigger.java#L14) |
