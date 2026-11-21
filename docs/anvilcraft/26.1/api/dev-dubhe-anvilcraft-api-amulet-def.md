# dev.dubhe.anvilcraft.api.amulet.def



## AmuletDefinition

` public record AmuletDefinition(ItemStackTemplate amulet, List<DamageSourcePredicate> obtains, boolean or) implements IAmuletDefinition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmuletDefinition(ItemLike amulet, DataComponentPatch components, List<DamageSourcePredicate> obtains, boolean or) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem(), components), obtains, or) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L44) |
| ` public AmuletDefinition(ItemLike amulet, DataComponentPatch components, DamageSourcePredicate obtain, boolean or) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem(), components), Collections.singletonList(obtain), or) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L48) |
| ` public AmuletDefinition(ItemLike amulet, List<DamageSourcePredicate> obtains, boolean or) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem()), obtains, or) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L52) |
| ` public AmuletDefinition(ItemLike amulet, DamageSourcePredicate obtain, boolean or) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem()), Collections.singletonList(obtain), or) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L56) |
| ` public AmuletDefinition(ItemLike amulet, DataComponentPatch components, boolean or) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem(), components), List.of(), or) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L60) |
| ` public AmuletDefinition(ItemLike amulet, boolean or) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem()), List.of(), or) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L64) |
| ` public AmuletDefinition(ItemLike amulet, DataComponentPatch components, List<DamageSourcePredicate> obtains) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem(), components), obtains, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L68) |
| ` public AmuletDefinition(ItemLike amulet, DataComponentPatch components, DamageSourcePredicate obtain) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem(), components), Collections.singletonList(obtain), true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L72) |
| ` public AmuletDefinition(ItemLike amulet, List<DamageSourcePredicate> obtains) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem()), obtains, true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L76) |
| ` public AmuletDefinition(ItemLike amulet, DamageSourcePredicate obtain) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem()), Collections.singletonList(obtain), true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L80) |
| ` public AmuletDefinition(ItemLike amulet, DataComponentPatch components) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem(), components), List.of(), true) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L84) |
| ` public AmuletDefinition(ItemLike amulet) ` | 执行 ` this(new ItemStackTemplate(amulet.asItem()), List.of(), true) `<br>[调用处 ModAmuletDefinitions.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitions.java#L126) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L88) |
| ` public static Builder builder(ItemLike amulet) ` | 末尾返回 ` new Builder(amulet) `<br>[调用处 ModAmuletDefinitions.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitions.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L92) |
| ` @Override public ItemStack create() ` | 末尾返回 ` this.amulet.withCount(1).create() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L96) |
| ` @Override public boolean mayObtain(ServerPlayer victim, DamageSource source) ` | 末尾返回 ` !this.or `<br>实现调用 ` predicate.matches(victim, source) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L101) |
| ` @Override public Type getType() ` | 末尾返回 ` ModAmuletDefinitionTypes.NORMAL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L111) |
| ` public ItemStackTemplate amulet() ` | 读取 record 分量 ` amulet ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L40) |
| ` public List<DamageSourcePredicate> obtains() ` | 读取 record 分量 ` obtains ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L41) |
| ` public boolean or() ` | 读取 record 分量 ` or ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L42) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L39) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L39) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L39) |

## AmuletDefinition.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L149)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder(ItemLike amulet) ` | 执行 ` this.amulet = amulet ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L156) |
| ` public <T> Builder component(DataComponentType<T> type, T value) ` | 返回当前实例，可继续链式调用。<br>分支 ` (this.components == null) ` 内调用 ` DataComponentPatch.builder() `<br>实现调用 ` this.components.set(type, value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L160) |
| ` public <T> Builder component(TypedDataComponent<T> component) ` | 返回当前实例，可继续链式调用。<br>分支 ` (this.components == null) ` 内调用 ` DataComponentPatch.builder() `<br>实现调用 ` this.components.set(component) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L168) |
| ` public Builder component(Iterable<TypedDataComponent<?>> components) ` | 返回当前实例，可继续链式调用。<br>分支 ` (this.components == null) ` 内调用 ` DataComponentPatch.builder() `<br>实现调用 ` this.components.set(components) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L176) |
| ` public Builder obtainEnd() ` | ` (this.obtain == null) ` 成立时抛出 ` new IllegalStateException("Unexpected end when not started") `<br>返回当前实例，可继续链式调用。<br>实现调用 ` this.obtains.add(this.obtain.build()) `<br>实现调用 ` this.obtain.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L184) |
| ` public Builder obtain(TagPredicate<DamageType> types) ` | 返回当前实例，可继续链式调用。<br>分支 ` (this.obtain == null) ` 内调用 ` DamageSourcePredicate.Builder.damageType() `<br>实现调用 ` this.obtain.tag(types) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L193) |
| ` public Builder obtain(TagKey<DamageType> types) ` | 末尾返回 ` this.obtain(TagPredicate.is(types)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L201) |
| ` public Builder obtainNot(TagKey<DamageType> types) ` | 末尾返回 ` this.obtain(TagPredicate.isNot(types)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L205) |
| ` public Builder obtain(TagKey<DamageType> types, boolean expected) ` | 末尾返回 ` this.obtain(new TagPredicate<>(types, expected)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L210) |
| ` public Builder obtain(Consumer<EntityPredicate.Builder> source) ` | 返回当前实例，可继续链式调用。<br>分支 ` (this.obtain == null) ` 内调用 ` DamageSourcePredicate.Builder.damageType() `<br>实现调用 ` EntityPredicate.Builder.entity() `<br>实现调用 ` source.accept(builder) `<br>实现调用 ` this.obtain.source(builder) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L214) |
| ` public Builder obtain(HolderGetter<EntityType<?>> lookup, EntityType<?> type) ` | 末尾返回 ` this.obtain(builder -> builder.entityType(EntityTypePredicate.of(lookup, type))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L224) |
| ` public Builder obtain(HolderGetter<EntityType<?>> lookup, TagKey<EntityType<?>> types) ` | 末尾返回 ` this.obtain(builder -> builder.entityType(EntityTypePredicate.of(lookup, types))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L228) |
| ` public Builder obtain(EntitySubPredicate sub) ` | 末尾返回 ` this.obtain(builder -> builder.subPredicate(sub)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L232) |
| ` public Builder obtain(Map<SlotRange, ItemPredicate> slots) ` | 末尾返回 ` this.obtain(builder -> builder.slots(new SlotsPredicate(slots))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L236) |
| ` public Builder obtain(SlotRange slot, ItemPredicate.Builder item) ` | 末尾返回 ` this.obtain(builder -> builder.slots(new SlotsPredicate(Map.of(slot, item.build())))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L240) |
| ` public Builder obtainDirect(Consumer<EntityPredicate.Builder> direct) ` | 返回当前实例，可继续链式调用。<br>分支 ` (this.obtain == null) ` 内调用 ` DamageSourcePredicate.Builder.damageType() `<br>实现调用 ` EntityPredicate.Builder.entity() `<br>实现调用 ` direct.accept(builder) `<br>实现调用 ` this.obtain.direct(builder) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L244) |
| ` public Builder obtainDirect(HolderGetter<EntityType<?>> lookup, EntityType<?> type) ` | 末尾返回 ` this.obtainDirect(builder -> builder.entityType(EntityTypePredicate.of(lookup, type))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L254) |
| ` public Builder obtainDirect(HolderGetter<EntityType<?>> lookup, TagKey<EntityType<?>> types) ` | 末尾返回 ` this.obtainDirect(builder -> builder.entityType(EntityTypePredicate.of(lookup, types))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L258) |
| ` public Builder obtainDirect(EntitySubPredicate sub) ` | 末尾返回 ` this.obtainDirect(builder -> builder.subPredicate(sub)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L262) |
| ` public Builder obtainDirect(Map<SlotRange, ItemPredicate> slots) ` | 末尾返回 ` this.obtainDirect(builder -> builder.slots(new SlotsPredicate(slots))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L266) |
| ` public Builder obtainDirect(SlotRange slot, ItemPredicate.Builder item) ` | 末尾返回 ` this.obtainDirect(builder -> builder.slots(new SlotsPredicate(Map.of(slot, item.build())))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L270) |
| ` public Builder and() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L274) |
| ` public AmuletDefinition build() ` | ` (this.components == null) ` 成立时提前返回 ` new AmuletDefinition(this.amulet, this.obtains.build(), this.or) `<br>分支 ` (this.obtain != null) ` 内调用 ` this.obtains.add(this.obtain.build()) `<br>分支 ` (this.obtain != null) ` 内调用 ` this.obtain.build() `<br>分支 ` (this.components == null) ` 内调用 ` this.obtains.build() `<br>分支 ` !(this.components == null) ` 内调用 ` this.components.build() `<br>分支 ` !(this.components == null) ` 内调用 ` this.obtains.build() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L279) |

## AmuletDefinition.Type

` public static class Type implements IAmuletDefinition.Type<AmuletDefinition> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L116)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<AmuletDefinition> CODEC ` | 由 ` CodecUtil.mapCodec ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L117) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AmuletDefinition> STREAM_CODEC ` | 由 ` StreamCodec.composite ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L128) |
| ` @Override public MapCodec<AmuletDefinition> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L138) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, AmuletDefinition> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L143) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/AmuletDefinition.java#L116) |

## IAmuletDefinition

` public interface IAmuletDefinition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Codec<IAmuletDefinition> DIRECT_CODEC ` | 初值 ` ModRegistries.AMULET_DEF_TYPE .byNameCodec() .dispatch(IAmuletDefinition::getType, Type::codec) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L15) |
| ` Codec<Holder<IAmuletDefinition>> CODEC ` | 初值 ` RegistryFileCodec.create(ModRegistryKeys.AMULET_DEF, IAmuletDefinition.DIRECT_CODEC) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L18) |
| ` Codec<IAmuletDefinition> HOLDER_HELPER_CODEC ` | 初值 ` IAmuletDefinition.CODEC.xmap( HolderHolder::new, value -> value instanceof HolderHolder(Holder<IAmuletDefinition> def) ? def : Holder.direct(value) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L19) |
| ` ItemStack create() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L24) |
| ` boolean mayObtain(ServerPlayer victim, DamageSource source) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L26) |
| ` Type<? extends IAmuletDefinition> getType() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L28) |

## IAmuletDefinition.HolderHolder

` record HolderHolder(Holder<IAmuletDefinition> def) implements IAmuletDefinition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L33)

类型注解 ` @VisibleForDebug `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ItemStack create() ` | 末尾返回 ` this.def.value().create() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L35) |
| ` @Override public boolean mayObtain(ServerPlayer victim, DamageSource source) ` | 末尾返回 ` this.def.value().mayObtain(victim, source) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L40) |
| ` @Override public Type<? extends IAmuletDefinition> getType() ` | 末尾返回 ` this.def.value().getType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L45) |
| ` public HolderHolder(Holder<IAmuletDefinition> def) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L33) |
| ` public Holder<IAmuletDefinition> def() ` | 读取 record 分量 ` def ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L34) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L33) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L33) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L33) |

## IAmuletDefinition.Type

` interface Type<T extends IAmuletDefinition> extends ISerializer<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/amulet/def/IAmuletDefinition.java#L30)
