# dev.dubhe.anvilcraft.api.amulet.effect（ImmuneMurdererDamageAmuletEffect 至 WrapOtherAmuletEffect）



## ImmuneMurdererDamageAmuletEffect

` public record ImmuneMurdererDamageAmuletEffect(List<TagPredicate<EntityType<?>>> source, List<TagPredicate<EntityType<?>>> direct) implements IImmuneDamageAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMurdererDamageAmuletEffect.java#L15)

免疫指定实体造成的伤害的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean shouldImmune(LivingEntity entity, ItemStack amulet, DamageSource source, AmuletEffectContext ctx) ` | 末尾返回 ` true `<br>实现调用 ` source.getEntity() `<br>分支 ` (indirect != null) ` 内调用 ` this.source.isEmpty() `<br>分支 ` (indirect != null) ` 内调用 ` immune.matches(BuiltInRegistries.ENTITY_TYPE.wrapAsHolder(indirect.getType())) `<br>分支 ` (indirect != null) ` 内调用 ` BuiltInRegistries.ENTITY_TYPE.wrapAsHolder(indirect.getType()) `<br>分支 ` (indirect != null) ` 内调用 ` indirect.getType() `<br>实现调用 ` source.getDirectEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMurdererDamageAmuletEffect.java#L19) |
| ` public ImmuneMurdererDamageAmuletEffect(List<TagPredicate<EntityType<?>>> source, List<TagPredicate<EntityType<?>>> direct) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMurdererDamageAmuletEffect.java#L15) |
| ` public List<TagPredicate<EntityType<?>>> source() ` | 读取 record 分量 ` source ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMurdererDamageAmuletEffect.java#L16) |
| ` public List<TagPredicate<EntityType<?>>> direct() ` | 读取 record 分量 ` direct ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMurdererDamageAmuletEffect.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMurdererDamageAmuletEffect.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMurdererDamageAmuletEffect.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneMurdererDamageAmuletEffect.java#L15) |

## ImmuneTypedDamageAmuletEffect

` public record ImmuneTypedDamageAmuletEffect(List<TagPredicate<DamageType>> immune) implements IImmuneDamageAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneTypedDamageAmuletEffect.java#L15)

免疫指定类型伤害的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SafeVarargs public static ImmuneTypedDamageAmuletEffect of(TagKey<DamageType>... tags) ` | 末尾返回 ` new ImmuneTypedDamageAmuletEffect(builder.build()) `<br>实现调用 ` ImmutableList.builder() `<br>实现调用 ` builder.add(TagPredicate.is(tag)) `<br>实现调用 ` TagPredicate.is(tag) `<br>实现调用 ` builder.build() `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L81) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneTypedDamageAmuletEffect.java#L16) |
| ` @Override public boolean shouldImmune(LivingEntity entity, ItemStack amulet, DamageSource source, AmuletEffectContext ctx) ` | 末尾返回 ` false `<br>实现调用 ` immune.matches(source.typeHolder()) `<br>实现调用 ` source.typeHolder() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneTypedDamageAmuletEffect.java#L25) |
| ` public ImmuneTypedDamageAmuletEffect(List<TagPredicate<DamageType>> immune) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneTypedDamageAmuletEffect.java#L15) |
| ` public List<TagPredicate<DamageType>> immune() ` | 读取 record 分量 ` immune ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneTypedDamageAmuletEffect.java#L15) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneTypedDamageAmuletEffect.java#L15) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneTypedDamageAmuletEffect.java#L15) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneTypedDamageAmuletEffect.java#L15) |

## ImmuneVibrationAmuletEffect

` public record ImmuneVibrationAmuletEffect() implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneVibrationAmuletEffect.java#L9)

免疫振动的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmuneVibrationAmuletEffect INSTANCE ` | 初值 ` new ImmuneVibrationAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneVibrationAmuletEffect.java#L10) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 执行 ` ctx.set(ModAmuletEffectContextKeys.IMMUNE_VIBRATION, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneVibrationAmuletEffect.java#L12) |
| ` public ImmuneVibrationAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneVibrationAmuletEffect.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneVibrationAmuletEffect.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneVibrationAmuletEffect.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ImmuneVibrationAmuletEffect.java#L9) |

## ScarePhantomAmuletEffect

` public record ScarePhantomAmuletEffect() implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ScarePhantomAmuletEffect.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ScarePhantomAmuletEffect INSTANCE ` | 初值 ` new ScarePhantomAmuletEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ScarePhantomAmuletEffect.java#L10) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.TARGETING_MOB).orElse(null) `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.TARGETING_MOB) `<br>实现调用 ` ctx.set(ModAmuletEffectContextKeys.IGNORE_MOB, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ScarePhantomAmuletEffect.java#L12) |
| ` public ScarePhantomAmuletEffect() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ScarePhantomAmuletEffect.java#L9) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ScarePhantomAmuletEffect.java#L9) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ScarePhantomAmuletEffect.java#L9) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/ScarePhantomAmuletEffect.java#L9) |

## TameAnimalAmuletEffect

` public record TameAnimalAmuletEffect(List<EntityTypePredicate> animals) implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/TameAnimalAmuletEffect.java#L17)

交互时驯服指定动物的护符效果

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 实现调用 ` ctx.get(ModAmuletEffectContextKeys.INTERACT_TARGET).orElse(null) `<br>实现调用 ` ctx.get(ModAmuletEffectContextKeys.INTERACT_TARGET) `<br>实现调用 ` animal.isTame() `<br>实现调用 ` predicate.matches(animal.getType().builtInRegistryHolder()) `<br>实现调用 ` animal.getType().builtInRegistryHolder() `<br>实现调用 ` animal.getType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/TameAnimalAmuletEffect.java#L18) |
| ` public TameAnimalAmuletEffect(List<EntityTypePredicate> animals) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/TameAnimalAmuletEffect.java#L17) |
| ` public List<EntityTypePredicate> animals() ` | 读取 record 分量 ` animals ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/TameAnimalAmuletEffect.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/TameAnimalAmuletEffect.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/TameAnimalAmuletEffect.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/TameAnimalAmuletEffect.java#L17) |

## WrapOtherAmuletEffect

` public final class WrapOtherAmuletEffect implements IAmuletEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/WrapOtherAmuletEffect.java#L19)

包覆其它护符的护符效果。 该效果自身不产生任何作用，仅将其包覆的护符的效果展开后一并生效。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WrapOtherAmuletEffect(List<ResourceKey<Amulet>> others) ` | 执行 ` this.others = others `<br>[调用处 ModAmulets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmulets.java#L144) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/WrapOtherAmuletEffect.java#L23) |
| ` @Override public void trigger(LivingEntity entity, ItemStack amulet, AmuletEffectContext ctx) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/WrapOtherAmuletEffect.java#L27) |
| ` @Override public Set<IAmuletEffect> flatten() ` | 末尾返回 ` this.getFlattenEffects() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/WrapOtherAmuletEffect.java#L32) |
| ` public List<ResourceKey<Amulet>> others() ` | 末尾返回 ` this.others ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/WrapOtherAmuletEffect.java#L57) |
| ` @Override public boolean equals(Object obj) ` | ` (obj == this) ` 成立时提前返回 ` true `<br>` (obj == null \|\| obj.getClass() != this.getClass()) ` 成立时提前返回 ` false `<br>末尾返回 ` Objects.equals(this.others, that.others) `<br>实现调用 ` obj.getClass() `<br>实现调用 ` this.getClass() `<br>实现调用 ` Util.cast(obj) `<br>实现调用 ` Objects.equals(this.others, that.others) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/WrapOtherAmuletEffect.java#L61) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hash(this.others) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/WrapOtherAmuletEffect.java#L69) |
| ` @Override public String toString() ` | 末尾返回 ` "WrapOtherAmuletEffect[others=" + this.others + ']' ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/effect/WrapOtherAmuletEffect.java#L74) |
