# dev.dubhe.anvilcraft.api.amulet.effect（ActAsScarecrowAmuletEffect 至 ImmuneMobEffectAmuletEffect）



## ActAsScarecrowAmuletEffect

` public record ActAsScarecrowAmuletEffect<T extends LivingEntity>(IImpersonator<T> impersonator) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void clear() ` | 执行 ` ActAsScarecrowAmuletEffect.CACHE.clear() `<br>[调用处 ServerReloadEventListener.onServerReload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerReloadEventListener.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L22) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.LIVING_ENTITY_CLASS).orElse(null) `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.LIVING_ENTITY_CLASS) `<br>分支 ` (mask != null) ` 内调用 ` this.impersonator().isValidMask(mask) `<br>分支 ` (mask != null) ` 内调用 ` this.impersonator() `<br>分支 ` (mask != null) ` 内调用 ` ctx.set(ModAmuletEffectContextKeys.MASK_VALID, true) `<br>分支 ` (mask != null) ` 内调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.SIMULATE, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L26) |
| ` public ActAsScarecrowAmuletEffect(IImpersonator<T> impersonator) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |
| ` public IImpersonator<T> impersonator() ` | 读取 record 分量 ` impersonator `<br>[调用处 ActAsScarecrowAmuletEffect.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ActAsScarecrowAmuletEffect.java#L17) |

## AttributeAmuletEffect

` public record AttributeAmuletEffect(Holder<Attribute> attribute, Identifier id, double amount, AttributeModifier.Operation operation) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16)

在护符启用时给予佩戴者属性修饰符的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.ENABLED) `<br>实现调用 ` enabled.isEmpty() `<br>实现调用 ` entity.getAttribute(this.attribute) `<br>实现调用 ` enabled.get() `<br>分支 ` (enabled.get()) ` 内调用 ` instance.hasModifier(this.id) `<br>分支 ` (!instance.hasModifier(this.id)) ` 内调用 ` instance.addTransientModifier(new AttributeModifier(this.id, this.amount, this.operation)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L22) |
| ` public AttributeAmuletEffect(Holder<Attribute> attribute, Identifier id, double amount, AttributeModifier.Operation operation) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16) |
| ` public Holder<Attribute> attribute() ` | 读取 record 分量 ` attribute ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L17) |
| ` public Identifier id() ` | 读取 record 分量 ` id ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L18) |
| ` public double amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L19) |
| ` public AttributeModifier.Operation operation() ` | 读取 record 分量 ` operation ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/AttributeAmuletEffect.java#L16) |

## DiscountAmuletEffect

` public record DiscountAmuletEffect(float rate) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10)

提供村民交易折扣的护符效果。 多个此效果同时生效会将折扣率相加。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.DISCOUNT_RATE, 0F) `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.DISCOUNT_RATE, current + this.rate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L11) |
| ` public DiscountAmuletEffect(float rate) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |
| ` public float rate() ` | 读取 record 分量 ` rate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/DiscountAmuletEffect.java#L10) |

## GiveMobEffectAmuletEffect

` public record GiveMobEffectAmuletEffect(Optional<EntityPredicate> predicate, List<Entry> effects) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29)

在满足给定谓词时给予佩戴者药水效果，没有谓词则一直给予。 效果时长由 Entry#duration 依传入值算出，并由 MinMaxBounds.Ints 时长上下界 限制。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String VAR_CURRENT ` | 求值 Entry#duration 时按名字绑上的传入值：既有药水效果的剩余时长，也就是表达式里的 $(current)。<br>初值 ` "current" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L34) |
| ` public static final String VAR_EXTRA ` | 求值 Entry#duration 时按名字绑上的传入值：本次要给予的效果自身时长，也就是表达式里的 $(extra)。<br>初值 ` "extra" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L36) |
| ` public static final IExpression DEFAULT_DURATION ` | Entry#duration 缺省时使用的表达式：在既有剩余时长上再叠一份效果自身时长，即 $(current)+$(extra)。<br>初值 ` LibBuiltInFunctions.ADD.call( IExpression.ref(VAR_CURRENT), IExpression.ref(VAR_EXTRA) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L38) |
| ` public static final IExpression REFRESH_DURATION ` | 条件刷新用的时长表达式：只取效果自身时长，把剩余时长重置回该值，即 $(extra)。<br>初值 ` IExpression.ref(VAR_EXTRA) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L43) |
| ` public static GiveMobEffectAmuletEffect notInWater(MobEffectInstance effect, MinMaxBounds.Ints bounds) ` | 佩戴者不在水里时给予，时长按上下界累加<br>末尾返回 ` new GiveMobEffectAmuletEffect( Optional.of(GiveMobEffectAmuletEffect.subPredicate(new NotInWaterPredicate())), List.of(Entry.of(effect, bounds)) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L47) |
| ` public static GiveMobEffectAmuletEffect notInLava(MobEffectInstance effect, MinMaxBounds.Ints bounds) ` | 佩戴者不在岩浆里时给予，时长按上下界累加<br>末尾返回 ` new GiveMobEffectAmuletEffect( Optional.of(GiveMobEffectAmuletEffect.subPredicate(new NotInLavaPredicate())), List.of(Entry.of(effect, bounds)) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L55) |
| ` public static GiveMobEffectAmuletEffect always(Holder<MobEffect> effect, int amplifier) ` | 无条件持续刷新该效果<br>末尾返回 ` new GiveMobEffectAmuletEffect( Optional.empty(), List.of(Entry.refresh(GiveMobEffectAmuletEffect.refreshInstance(effect, amplifier))) ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L63) |
| ` public static GiveMobEffectAmuletEffect onFire(Holder<MobEffect> effect, int amplifier) ` | 佩戴者着火时持续刷新该效果<br>末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.flags(flags -> flags.setOnFire(true)), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L71) |
| ` public static GiveMobEffectAmuletEffect notOnFire(Holder<MobEffect> effect, int amplifier) ` | 佩戴者没着火时持续刷新该效果<br>末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.flags(flags -> flags.setOnFire(false)), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L80) |
| ` public static GiveMobEffectAmuletEffect sneaking(Holder<MobEffect> effect, int amplifier) ` | 佩戴者潜行时持续刷新该效果<br>末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.flags(flags -> flags.setCrouching(true)), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L110) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L89) |
| ` public static GiveMobEffectAmuletEffect notSneaking(Holder<MobEffect> effect, int amplifier) ` | 佩戴者没潜行时持续刷新该效果<br>末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.flags(flags -> flags.setCrouching(false)), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L98) |
| ` public static GiveMobEffectAmuletEffect inWaterOrBreathing(Holder<MobEffect> effect, int amplifier) ` | 佩戴者在水里或戴着能呼吸的头盔时持续刷新该效果<br>末尾返回 ` GiveMobEffectAmuletEffect.refresh( GiveMobEffectAmuletEffect.subPredicate(new InWaterOrBreathingPredicate()), effect, amplifier ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L107) |
| ` public static GiveMobEffectAmuletEffect refresh(EntityPredicate predicate, Holder<MobEffect> effect, int amplifier) ` | 在给定谓词成立时持续刷新该效果<br>末尾返回 ` new GiveMobEffectAmuletEffect( Optional.of(predicate), List.of(Entry.refresh(GiveMobEffectAmuletEffect.refreshInstance(effect, amplifier))) ) `<br>[调用处 GiveMobEffectAmuletEffect.onFire](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L72) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L116) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` entity.level() `<br>实现调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.ENABLED, false) `<br>实现调用 ` this.predicate.isPresent() `<br>实现调用 ` this.predicate.get().matches(level, entity.position(), entity) `<br>实现调用 ` this.predicate.get() `<br>实现调用 ` entity.position() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L144) |
| ` public GiveMobEffectAmuletEffect(Optional<EntityPredicate> predicate, List<Entry> effects) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29) |
| ` public Optional<EntityPredicate> predicate() ` | 读取 record 分量 ` predicate ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L30) |
| ` public List<Entry> effects() ` | 读取 record 分量 ` effects ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L31) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L29) |

## GiveMobEffectAmuletEffect.Entry

` public record Entry(MobEffectInstance effect, Optional<MinMaxBounds.Ints> bounds, IExpression duration) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L206)

一条要给予的药水效果<br>参数 ` effect ` 效果自身，其中的时长是 #duration 里的 $(extra)<br>参数 ` bounds ` 既有剩余时长的上下界，不满足时不叠加时长<br>参数 ` duration ` 剩余时长的计算方式，见 GiveMobEffectAmuletEffect#DEFAULT\_DURATION

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Entry of(MobEffectInstance effect, MinMaxBounds.Ints bounds) ` | 时长按上下界累加<br>末尾返回 ` new Entry(effect, Optional.of(bounds), GiveMobEffectAmuletEffect.DEFAULT_DURATION) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L208) |
| ` public static Entry refresh(MobEffectInstance effect) ` | 每 tick 把剩余时长重置回效果自身时长<br>末尾返回 ` new Entry(effect, Optional.empty(), GiveMobEffectAmuletEffect.REFRESH_DURATION) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L213) |
| ` public Entry(MobEffectInstance effect, Optional<MinMaxBounds.Ints> bounds, IExpression duration) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L206) |
| ` public MobEffectInstance effect() ` | 读取 record 分量 ` effect ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L206) |
| ` public Optional<MinMaxBounds.Ints> bounds() ` | 读取 record 分量 ` bounds ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L206) |
| ` public IExpression duration() ` | 读取 record 分量 ` duration ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L206) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L206) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L206) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/GiveMobEffectAmuletEffect.java#L206) |

## IAmuletEffect

` public interface IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IAmuletEffect.java#L18)

护符效果。 由 dev.dubhe.anvilcraft.api.amulet.AmuletManager 护符管理器 在护符生命周期的各个阶段触发， 需要处理的阶段由 AmuletEffectContext 中已存在的上下文键决定，处理结果同样以上下文键的形式写回。 触发分两类：生命周期触发每 tick 进行一次，上下文里必有 dev.dubhe.anvilcraft.init.item.ModAmuletEffectContextKeys#ENABLED 键；查询触发的上下文只带该次查询 相关的键、用完即弃。因此只有需要在佩戴/脱下时增删状态的副作用效果（属性修饰符、药水效果等）才需要依据 ENABLED 决定是否执行，只写回结果键的效果不必关心它。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 触发该效果。<br>参数 ` entity ` 佩戴护符的实体<br>参数 ` amulet ` 提供该效果的护符物品堆，未启用时为 ItemStack#EMPTY<br>参数 ` ctx ` 本次触发的上下文 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IAmuletEffect.java#L24) |
| ` default boolean shouldIgnoreRepetition(LivingEntity entity, ItemStack amulet) ` | 是否应当忽略重复。 在 dev.dubhe.anvilcraft.api.amulet.AmuletManager#getActiveEffects(LivingEntity) 内非第一次找到该效果时调用。<br>参数 ` entity ` 佩戴护符的实体<br>参数 ` amulet ` 提供该效果的护符物品堆<br>返回 需要忽略重复（将该效果的护符物品堆加入结果）时返回 \`true\`<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IAmuletEffect.java#L33) |
| ` default Set<IAmuletEffect> flatten() ` | 获取该效果展开后的效果，包含其包覆的其它护符的效果。 护符注册在静态注册表里，展开时不需要注册表访问器。<br>返回 该效果展开后的效果<br>使用约定 由于此方法实现上可能有缓存机制，不允许在注册完成前调用！<br>末尾返回 ` ImmutableSet.of(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IAmuletEffect.java#L43) |

## IImmuneDamageAmuletEffect

` public interface IImmuneDamageAmuletEffect extends IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IImmuneDamageAmuletEffect.java#L13)

免疫伤害的护符效果。 同一护符上的多个免疫效果之间为“或”关系。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.DAMAGE_SOURCE) `<br>实现调用 ` sourceOp.isEmpty() `<br>实现调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.IMMUNE_DAMAGE, false) `<br>实现调用 ` this.shouldImmune(entity, amulet, sourceOp.get(), ctx) `<br>实现调用 ` sourceOp.get() `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.IMMUNE_DAMAGE, immune) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IImmuneDamageAmuletEffect.java#L14) |
| ` boolean shouldImmune(LivingEntity entity, ItemStack amulet, DamageSource source, AmuletEffectContext ctx) ` | [调用处 IImmuneDamageAmuletEffect.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IImmuneDamageAmuletEffect.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IImmuneDamageAmuletEffect.java#L25) |

## IgnoreGravityAmuletEffect

` public record IgnoreGravityAmuletEffect() implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9)

无视天体引力的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final IgnoreGravityAmuletEffect INSTANCE ` | 初值 ` new IgnoreGravityAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L10) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 执行 ` ctx.set(ModAmuletEffectContextKeys.IGNORE_GRAVITY, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L12) |
| ` public IgnoreGravityAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreGravityAmuletEffect.java#L9) |

## IgnoreMobTargetAmuletEffect

` public record IgnoreMobTargetAmuletEffect(List<EntityTypePredicate> mobs) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14)

使指定生物无视佩戴者的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.TARGETING_MOB) `<br>实现调用 ` target.isEmpty() `<br>实现调用 ` mob.matches(target.get().getType().builtInRegistryHolder()) `<br>实现调用 ` target.get().getType().builtInRegistryHolder() `<br>实现调用 ` target.get().getType() `<br>实现调用 ` target.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L15) |
| ` public IgnoreMobTargetAmuletEffect(List<EntityTypePredicate> mobs) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |
| ` public List<EntityTypePredicate> mobs() ` | 读取 record 分量 ` mobs ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/IgnoreMobTargetAmuletEffect.java#L14) |

## ImmuneAbnormalItemAmuletEffect

` public record ImmuneAbnormalItemAmuletEffect() implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9)

免疫异常物品带来的负面效果的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmuneAbnormalItemAmuletEffect INSTANCE ` | 初值 ` new ImmuneAbnormalItemAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L10) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 执行 ` ctx.set(ModAmuletEffectContextKeys.IMMUNE_ABNORMAL_ITEM, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L12) |
| ` public ImmuneAbnormalItemAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneAbnormalItemAmuletEffect.java#L9) |

## ImmuneEatEffectAmuletEffect

` public record ImmuneEatEffectAmuletEffect(MobEffectCategory category) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10)

进食时免疫负面药水效果的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.getOrDefault(ModAmuletEffectContextKeys.CONSUMING_FOOD, false) `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.MOB_EFFECT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L11) |
| ` public ImmuneEatEffectAmuletEffect(MobEffectCategory category) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |
| ` public MobEffectCategory category() ` | 读取 record 分量 ` category `<br>[调用处 ImmuneEatEffectAmuletEffect.trigger](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L17) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEatEffectAmuletEffect.java#L10) |

## ImmuneEntityAnvilDamageAmuletEffect

` public record ImmuneEntityAnvilDamageAmuletEffect() implements IImmuneDamageAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L17)

免疫铁砧实体或铁砧锤相关伤害的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmuneEntityAnvilDamageAmuletEffect INSTANCE ` | 初值 ` new ImmuneEntityAnvilDamageAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L18) |
| ` @Override public boolean shouldImmune(LivingEntity entity, ItemStack amulet, DamageSource source, AmuletEffectContext ctx) ` | ` (!(source.getEntity() instanceof FallingBlockEntity falling)) ` 成立时提前返回 ` true `<br>末尾返回 ` state.is(BlockTags.ANVIL) \|\| state.is(ModBlockTags.GIANT_ANVIL) `<br>实现调用 ` source.getDirectEntity() `<br>实现调用 ` direct.is(ModEntityTypeTags.ANVIL_AMULET_VALID) `<br>分支 ` (direct == null \|\| !direct.is(ModEntityTypeTags.ANVIL_AMULET_VALID)) ` 内调用 ` source.getWeaponItem() `<br>分支 ` (direct == null \|\| !direct.is(ModEntityTypeTags.ANVIL_AMULET_VALID)) ` 内调用 ` weapon.is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` source.getEntity() `<br>实现调用 ` falling.getBlockState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L20) |
| ` public ImmuneEntityAnvilDamageAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneEntityAnvilDamageAmuletEffect.java#L17) |

## ImmuneFriendlyDamageAmuletEffect

` public record ImmuneFriendlyDamageAmuletEffect() implements IImmuneDamageAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15)

免疫友军伤害的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmuneFriendlyDamageAmuletEffect INSTANCE ` | 初值 ` new ImmuneFriendlyDamageAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L16) |
| ` @Override public boolean shouldImmune(LivingEntity entity, ItemStack amulet, DamageSource source, AmuletEffectContext ctx) ` | 末尾返回 ` ImmuneFriendlyDamageAmuletEffect.isMurdererComrade(amulet, source, comrades) `<br>实现调用 ` amulet.getOrDefault(ModComponents.COMRADES, Comrades.EMPTY) `<br>实现调用 ` ImmuneFriendlyDamageAmuletEffect.isMurdererComrade(amulet, source, comrades) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L18) |
| ` @Override public boolean shouldIgnoreRepetition(LivingEntity entity, ItemStack amulet) ` | 末尾返回 ` amulet.has(ModComponents.COMRADES) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L24) |
| ` public ImmuneFriendlyDamageAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneFriendlyDamageAmuletEffect.java#L15) |

## ImmuneKnockbackAmuletEffect

` public record ImmuneKnockbackAmuletEffect() implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9)

免疫击退的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmuneKnockbackAmuletEffect INSTANCE ` | 初值 ` new ImmuneKnockbackAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L10) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 执行 ` ctx.set(ModAmuletEffectContextKeys.IMMUNE_KNOCKBACK, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L12) |
| ` public ImmuneKnockbackAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneKnockbackAmuletEffect.java#L9) |

## ImmuneMobEffectAmuletEffect

` public record ImmuneMobEffectAmuletEffect(HolderSet<MobEffect> immune, Optional<EntityPredicate> condition) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18)

在满足给定谓词时免疫并移除指定药水效果的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ImmuneMobEffectAmuletEffect of(Holder<MobEffect> effect) ` | 佩戴即免疫<br>末尾返回 ` new ImmuneMobEffectAmuletEffect(HolderSet.direct(effect), Optional.empty()) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L83) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L23) |
| ` public static ImmuneMobEffectAmuletEffect of(Holder<MobEffect> effect, EntityPredicate condition) ` | 在给定谓词成立时免疫<br>末尾返回 ` new ImmuneMobEffectAmuletEffect(HolderSet.direct(effect), Optional.of(condition)) `<br>[调用处 ImmuneMobEffectAmuletEffect.whileSneaking](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L28) |
| ` public static ImmuneMobEffectAmuletEffect whileSneaking(Holder<MobEffect> effect) ` | 佩戴者潜行时免疫<br>末尾返回 ` ImmuneMobEffectAmuletEffect.of( effect, EntityPredicate.Builder.entity() .flags(EntityFlagsPredicate.Builder.flags().setCrouching(true)) .build() ) `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L102) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L33) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` entity.level() `<br>实现调用 ` this.matches(level, entity) `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.MOB_EFFECT) `<br>实现调用 ` instance.isPresent() `<br>分支 ` (instance.isPresent()) ` 内调用 ` this.immune.contains(instance.get().getEffect()) `<br>分支 ` (instance.isPresent()) ` 内调用 ` instance.get().getEffect() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L42) |
| ` public ImmuneMobEffectAmuletEffect(HolderSet<MobEffect> immune, Optional<EntityPredicate> condition) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18) |
| ` public HolderSet<MobEffect> immune() ` | 读取 record 分量 ` immune ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L19) |
| ` public Optional<EntityPredicate> condition() ` | 读取 record 分量 ` condition ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMobEffectAmuletEffect.java#L18) |
