# dev.dubhe.anvilcraft.api.amulet.effect（ActAsScarecrowAmuletEffect 至 ImmuneMobEffectAmuletEffect）



## ActAsScarecrowAmuletEffect

` public record ActAsScarecrowAmuletEffect<T extends LivingEntity>(IImpersonator<T> impersonator) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void clear() ` | 执行 ` ActAsScarecrowAmuletEffect.CACHE.clear() `<br>[调用处 ServerReloadEventListener.onServerReload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L16) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L22) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.LIVING_ENTITY_CLASS).orElse(null) `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.LIVING_ENTITY_CLASS) `<br>分支 ` (mask != null) ` 内调用 ` this.impersonator().isValidMask(mask) `<br>分支 ` (mask != null) ` 内调用 ` this.impersonator() `<br>分支 ` (mask != null) ` 内调用 ` ctx.set(ModAmuletEffectContextKeys.MASK_VALID, true) `<br>分支 ` (mask != null) ` 内调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.SIMULATE, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L26) |
| ` public ActAsScarecrowAmuletEffect(IImpersonator<T> impersonator) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |
| ` public IImpersonator<T> impersonator() ` | 读取 record 分量 ` impersonator `<br>[调用处 ActAsScarecrowAmuletEffect.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |

## AttributeAmuletEffect

` public record AttributeAmuletEffect(Holder<Attribute> attribute, ResourceLocation id, double amount, AttributeModifier.Operation operation) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.ENABLED) `<br>实现调用 ` enabled.isEmpty() `<br>实现调用 ` entity.getAttribute(this.attribute) `<br>实现调用 ` enabled.get() `<br>分支 ` (enabled.get()) ` 内调用 ` instance.hasModifier(this.id) `<br>分支 ` (!instance.hasModifier(this.id)) ` 内调用 ` instance.addTransientModifier(new AttributeModifier(this.id, this.amount, this.operation)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L22) |
| ` public AttributeAmuletEffect(Holder<Attribute> attribute, ResourceLocation id, double amount, AttributeModifier.Operation operation) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16) |
| ` public Holder<Attribute> attribute() ` | 读取 record 分量 ` attribute ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L17) |
| ` public ResourceLocation id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L18) |
| ` public double amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L19) |
| ` public AttributeModifier.Operation operation() ` | 读取 record 分量 ` operation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16) |

## DiscountAmuletEffect

` public record DiscountAmuletEffect(float rate) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.DISCOUNT_RATE, 0F) `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.DISCOUNT_RATE, current + this.rate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L11) |
| ` public DiscountAmuletEffect(float rate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |
| ` public float rate() ` | 读取 record 分量 ` rate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |

## GiveMobEffectAmuletEffect

` public record GiveMobEffectAmuletEffect(Optional<EntityPredicate> predicate, List<Entry> effects) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String VAR_CURRENT ` | 初值 ` "current" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L34) |
| ` public static final String VAR_EXTRA ` | 初值 ` "extra" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L36) |
| ` public static final IExpression DEFAULT_DURATION ` | 初值 ` LibBuiltInFunctions.ADD.call( IExpression.ref(VAR_CURRENT), IExpression.ref(VAR_EXTRA) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L38) |
| ` public static final IExpression REFRESH_DURATION ` | 初值 ` IExpression.ref(VAR_EXTRA) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L43) |
| ` public static GiveMobEffectAmuletEffect notInWater(MobEffectInstance effect, MinMaxBounds.Ints bounds) ` | 末尾返回 ` new GiveMobEffectAmuletEffect( Optional.of(GiveMobEffectAmuletEffect.subPredicate(new NotInWaterPredicate())), List.of(Entry.of(effect, bounds)) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L47) |
| ` public static GiveMobEffectAmuletEffect notInLava(MobEffectInstance effect, MinMaxBounds.Ints bounds) ` | 末尾返回 ` new GiveMobEffectAmuletEffect( Optional.of(GiveMobEffectAmuletEffect.subPredicate(new NotInLavaPredicate())), List.of(Entry.of(effect, bounds)) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L55) |
| ` public static GiveMobEffectAmuletEffect always(Holder<MobEffect> effect, int amplifier) ` | 末尾返回 ` new GiveMobEffectAmuletEffect( Optional.empty(), List.of(Entry.refresh(GiveMobEffectAmuletEffect.refreshInstance(effect, amplifier))) ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L63) |
| ` public static GiveMobEffectAmuletEffect onFire(Holder<MobEffect> effect, int amplifier) ` | 末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.flags(flags -> flags.setOnFire(true)), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L71) |
| ` public static GiveMobEffectAmuletEffect notOnFire(Holder<MobEffect> effect, int amplifier) ` | 末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.flags(flags -> flags.setOnFire(false)), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L80) |
| ` public static GiveMobEffectAmuletEffect sneaking(Holder<MobEffect> effect, int amplifier) ` | 末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.flags(flags -> flags.setCrouching(true)), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L89) |
| ` public static GiveMobEffectAmuletEffect notSneaking(Holder<MobEffect> effect, int amplifier) ` | 末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.flags(flags -> flags.setCrouching(false)), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L98) |
| ` public static GiveMobEffectAmuletEffect inWaterOrBreathing(Holder<MobEffect> effect, int amplifier) ` | 末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.subPredicate(new InWaterOrBreathingPredicate()), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L107) |
| ` public static GiveMobEffectAmuletEffect refresh(EntityPredicate predicate, Holder<MobEffect> effect, int amplifier) ` | 末尾返回 ` new GiveMobEffectAmuletEffect( Optional.of(predicate), List.of(Entry.refresh(GiveMobEffectAmuletEffect.refreshInstance(effect, amplifier))) ) `<br>[调用处 GiveMobEffectAmuletEffect.onFire](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L116) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` entity.level() `<br>实现调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.ENABLED, false) `<br>实现调用 ` this.predicate.isPresent() `<br>实现调用 ` this.predicate.get().matches(level, entity.position(), entity) `<br>实现调用 ` this.predicate.get() `<br>实现调用 ` entity.position() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L144) |
| ` public GiveMobEffectAmuletEffect(Optional<EntityPredicate> predicate, List<Entry> effects) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29) |
| ` public Optional<EntityPredicate> predicate() ` | 读取 record 分量 ` predicate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L30) |
| ` public List<Entry> effects() ` | 读取 record 分量 ` effects ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29) |

## GiveMobEffectAmuletEffect.Entry

` public record Entry(MobEffectInstance effect, Optional<MinMaxBounds.Ints> bounds, IExpression duration) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L215)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Entry of(MobEffectInstance effect, MinMaxBounds.Ints bounds) ` | 末尾返回 ` new Entry(effect, Optional.of(bounds), GiveMobEffectAmuletEffect.DEFAULT_DURATION) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L217) |
| ` public static Entry refresh(MobEffectInstance effect) ` | 末尾返回 ` new Entry(effect, Optional.empty(), GiveMobEffectAmuletEffect.REFRESH_DURATION) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L222) |
| ` public Entry(MobEffectInstance effect, Optional<MinMaxBounds.Ints> bounds, IExpression duration) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L215) |
| ` public MobEffectInstance effect() ` | 读取 record 分量 ` effect ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L215) |
| ` public Optional<MinMaxBounds.Ints> bounds() ` | 读取 record 分量 ` bounds ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L215) |
| ` public IExpression duration() ` | 读取 record 分量 ` duration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L215) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L215) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L215) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L215) |

## IAmuletEffect

` public interface IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IAmuletEffect.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IAmuletEffect.java#L25) |
| ` default boolean shouldIgnoreRepetition(LivingEntity entity, ItemStack amulet) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IAmuletEffect.java#L34) |
| ` default @Unmodifiable Set<IAmuletEffect> flatten() ` | 末尾返回 ` ImmutableSet.of(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IAmuletEffect.java#L44) |

## IImmuneDamageAmuletEffect

` public interface IImmuneDamageAmuletEffect extends IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IImmuneDamageAmuletEffect.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.DAMAGE_SOURCE) `<br>实现调用 ` sourceOp.isEmpty() `<br>实现调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.IMMUNE_DAMAGE, false) `<br>实现调用 ` this.shouldImmune(entity, amulet, sourceOp.get(), ctx) `<br>实现调用 ` sourceOp.get() `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.IMMUNE_DAMAGE, immune) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IImmuneDamageAmuletEffect.java#L14) |
| ` boolean shouldImmune(LivingEntity entity, ItemStack amulet, DamageSource source, AmuletEffectContext ctx) ` | [调用处 IImmuneDamageAmuletEffect.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IImmuneDamageAmuletEffect.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IImmuneDamageAmuletEffect.java#L25) |

## IgnoreGravityAmuletEffect

` public record IgnoreGravityAmuletEffect() implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final IgnoreGravityAmuletEffect INSTANCE ` | 初值 ` new IgnoreGravityAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L10) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 执行 ` ctx.set(ModAmuletEffectContextKeys.IGNORE_GRAVITY, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L12) |
| ` public IgnoreGravityAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9) |

## IgnoreMobTargetAmuletEffect

` public record IgnoreMobTargetAmuletEffect(List<EntityTypePredicate> mobs) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.TARGETING_MOB) `<br>实现调用 ` target.isEmpty() `<br>实现调用 ` mob.matches(target.get().getType()) `<br>实现调用 ` target.get().getType() `<br>实现调用 ` target.get() `<br>分支 ` (mob.matches(target.get().getType())) ` 内调用 ` ctx.set(ModAmuletEffectContextKeys.IGNORE_MOB, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L15) |
| ` public IgnoreMobTargetAmuletEffect(List<EntityTypePredicate> mobs) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |
| ` public List<EntityTypePredicate> mobs() ` | 读取 record 分量 ` mobs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |

## ImmuneAbnormalItemAmuletEffect

` public record ImmuneAbnormalItemAmuletEffect() implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmuneAbnormalItemAmuletEffect INSTANCE ` | 初值 ` new ImmuneAbnormalItemAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L10) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 执行 ` ctx.set(ModAmuletEffectContextKeys.IMMUNE_ABNORMAL_ITEM, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L12) |
| ` public ImmuneAbnormalItemAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9) |

## ImmuneEatEffectAmuletEffect

` public record ImmuneEatEffectAmuletEffect(MobEffectCategory category) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.CONSUMING_FOOD, false) `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.MOB_EFFECT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L11) |
| ` public ImmuneEatEffectAmuletEffect(MobEffectCategory category) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |
| ` public MobEffectCategory category() ` | 读取 record 分量 ` category `<br>[调用处 ImmuneEatEffectAmuletEffect.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |

## ImmuneEntityAnvilDamageAmuletEffect

` public record ImmuneEntityAnvilDamageAmuletEffect() implements IImmuneDamageAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmuneEntityAnvilDamageAmuletEffect INSTANCE ` | 初值 ` new ImmuneEntityAnvilDamageAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L21) |
| ` @Override public boolean shouldImmune(LivingEntity entity, ItemStack amulet, DamageSource source, AmuletEffectContext ctx) ` | ` (!(source.getEntity() instanceof FallingBlockEntity falling)) ` 成立时提前返回 ` true `<br>末尾返回 ` state.is(BlockTags.ANVIL) \|\| state.is(ModBlockTags.GIANT_ANVIL) `<br>实现调用 ` source.getDirectEntity() `<br>实现调用 ` BuiltInRegistries.ENTITY_TYPE.getOrCreateTag(ModEntityTypeTags.ANVIL_AMULET_VALID) `<br>实现调用 ` direct.getType().is(valid) `<br>实现调用 ` direct.getType() `<br>分支 ` (direct == null \|\| !direct.getType().is(valid)) ` 内调用 ` source.getWeaponItem() `<br>分支 ` (direct == null \|\| !direct.getType().is(valid)) ` 内调用 ` weapon.is(ModItemTags.ANVIL_HAMMER) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L23) |
| ` public ImmuneEntityAnvilDamageAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L20) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L20) |

## ImmuneFriendlyDamageAmuletEffect

` public record ImmuneFriendlyDamageAmuletEffect() implements IImmuneDamageAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmuneFriendlyDamageAmuletEffect INSTANCE ` | 初值 ` new ImmuneFriendlyDamageAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L16) |
| ` @Override public boolean shouldImmune(LivingEntity entity, ItemStack amulet, DamageSource source, AmuletEffectContext ctx) ` | 末尾返回 ` ImmuneFriendlyDamageAmuletEffect.isMurdererComrade(amulet, source, comrades) `<br>实现调用 ` amulet.getOrDefault(ModComponents.COMRADES, Comrades.EMPTY) `<br>实现调用 ` ImmuneFriendlyDamageAmuletEffect.isMurdererComrade(amulet, source, comrades) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L18) |
| ` @Override public boolean shouldIgnoreRepetition(LivingEntity entity, ItemStack amulet) ` | 末尾返回 ` amulet.has(ModComponents.COMRADES) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L24) |
| ` public ImmuneFriendlyDamageAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15) |

## ImmuneKnockbackAmuletEffect

` public record ImmuneKnockbackAmuletEffect() implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmuneKnockbackAmuletEffect INSTANCE ` | 初值 ` new ImmuneKnockbackAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L10) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 执行 ` ctx.set(ModAmuletEffectContextKeys.IMMUNE_KNOCKBACK, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L12) |
| ` public ImmuneKnockbackAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9) |

## ImmuneMobEffectAmuletEffect

` public record ImmuneMobEffectAmuletEffect(HolderSet<MobEffect> immune, Optional<EntityPredicate> condition) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ImmuneMobEffectAmuletEffect of(Holder<MobEffect> effect) ` | 末尾返回 ` new ImmuneMobEffectAmuletEffect(HolderSet.direct(effect), Optional.empty()) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L23) |
| ` public static ImmuneMobEffectAmuletEffect of(Holder<MobEffect> effect, EntityPredicate condition) ` | 末尾返回 ` new ImmuneMobEffectAmuletEffect(HolderSet.direct(effect), Optional.of(condition)) `<br>[调用处 ImmuneMobEffectAmuletEffect.whileSneaking](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L28) |
| ` public static ImmuneMobEffectAmuletEffect whileSneaking(Holder<MobEffect> effect) ` | 末尾返回 ` ImmuneMobEffectAmuletEffect.of( effect, EntityPredicate.Builder.entity() .flags(EntityFlagsPredicate.Builder.flags().setCrouching(true)) .build() ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L101) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L33) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` entity.level() `<br>实现调用 ` this.matches(level, entity) `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.MOB_EFFECT) `<br>实现调用 ` instance.isPresent() `<br>分支 ` (instance.isPresent()) ` 内调用 ` this.immune.contains(instance.get().getEffect()) `<br>分支 ` (instance.isPresent()) ` 内调用 ` instance.get().getEffect() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L42) |
| ` public ImmuneMobEffectAmuletEffect(HolderSet<MobEffect> immune, Optional<EntityPredicate> condition) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18) |
| ` public HolderSet<MobEffect> immune() ` | 读取 record 分量 ` immune ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L19) |
| ` public Optional<EntityPredicate> condition() ` | 读取 record 分量 ` condition ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18) |
