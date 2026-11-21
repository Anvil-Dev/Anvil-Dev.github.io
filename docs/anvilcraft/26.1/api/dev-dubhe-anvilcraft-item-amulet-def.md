# dev.dubhe.anvilcraft.item.amulet.def



## AbnormalAmuletDefinition

` public record AbnormalAmuletDefinition(ItemStackTemplate item) implements IAmuletDefinition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AbnormalAmuletDefinition(ItemLike item) ` | 执行 ` this(new ItemStackTemplate(item.asItem())) `<br>[调用处 ModAmuletDefinitions.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitions.java#L122) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L22) |
| ` @Override public ItemStack create() ` | 末尾返回 ` this.item.withCount(1).create() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L26) |
| ` @Override public boolean mayObtain(ServerPlayer victim, DamageSource source) ` | ` (!source.is(ModDamageTypeTags.ABNORMAL_AMULET_VALID)) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L31) |
| ` @Override public Type getType() ` | 末尾返回 ` ModAmuletDefinitionTypes.ABNORMAL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L42) |
| ` public ItemStackTemplate item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L21) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L21) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L21) |

## AbnormalAmuletDefinition.Type

` public static class Type implements IAmuletDefinition.Type<AbnormalAmuletDefinition> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L47)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<AbnormalAmuletDefinition> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group( ItemStackTemplate.CODEC .fieldOf("item") .forGetter(AbnormalAmuletDefinition::item) ).apply(inst, AbnormalAmuletDefinition::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L48) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AbnormalAmuletDefinition> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ItemStackTemplate.STREAM_CODEC, AbnormalAmuletDefinition::item, AbnormalAmuletDefinition::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L53) |
| ` @Override public MapCodec<AbnormalAmuletDefinition> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L59) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, AbnormalAmuletDefinition> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L64) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L47) |

## ComradeAmuletDefinition

` public record ComradeAmuletDefinition(ItemStackTemplate item) implements IAmuletDefinition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ComradeAmuletDefinition(ItemLike item) ` | 执行 ` this(new ItemStackTemplate(item.asItem())) `<br>[调用处 ModAmuletDefinitions.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitions.java#L88) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L18) |
| ` @Override public ItemStack create() ` | 末尾返回 ` this.item.withCount(1).create() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L22) |
| ` @Override public boolean mayObtain(ServerPlayer victim, DamageSource source) ` | ` (murder == null) ` 成立时提前返回 ` false `<br>末尾返回 ` victimTeam == null ? murderTeam == null : victimTeam.isAlliedTo(murderTeam) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L27) |
| ` @Override public Type getType() ` | 末尾返回 ` ModAmuletDefinitionTypes.COMRADE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L36) |
| ` public ItemStackTemplate item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L17) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L17) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L17) |

## ComradeAmuletDefinition.Type

` public static class Type implements IAmuletDefinition.Type<ComradeAmuletDefinition> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ComradeAmuletDefinition> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group( ItemStackTemplate.CODEC .fieldOf("item") .forGetter(ComradeAmuletDefinition::item) ).apply(inst, ComradeAmuletDefinition::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L42) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ComradeAmuletDefinition> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ItemStackTemplate.STREAM_CODEC, ComradeAmuletDefinition::item, ComradeAmuletDefinition::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L47) |
| ` @Override public MapCodec<ComradeAmuletDefinition> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L53) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ComradeAmuletDefinition> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L58) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L41) |
