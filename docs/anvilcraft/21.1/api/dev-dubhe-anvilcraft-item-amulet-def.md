# dev.dubhe.anvilcraft.item.amulet.def



## AbnormalAmuletDefinition

` public record AbnormalAmuletDefinition(ItemStack item) implements IAmuletDefinition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AbnormalAmuletDefinition(ItemLike item) ` | 执行 ` this(new ItemStack(item.asItem())) `<br>[调用处 ModAmuletDefinitions.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitions.java#L114) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L21) |
| ` @Override public ItemStack create() ` | 末尾返回 ` this.item.copyWithCount(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L25) |
| ` @Override public boolean mayObtain(ServerPlayer victim, DamageSource source) ` | ` (!source.is(ModDamageTypeTags.ABNORMAL_AMULET_VALID)) ` 成立时提前返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L30) |
| ` @Override public Type getType() ` | 末尾返回 ` ModAmuletDefinitionTypes.ABNORMAL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L41) |
| ` public ItemStack item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L20) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L20) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L20) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L20) |

## AbnormalAmuletDefinition.Type

` public static class Type implements IAmuletDefinition.Type<AbnormalAmuletDefinition> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L46)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<AbnormalAmuletDefinition> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group( ItemStack.CODEC .fieldOf("item") .forGetter(AbnormalAmuletDefinition::item) ).apply(inst, AbnormalAmuletDefinition::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L47) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, AbnormalAmuletDefinition> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ItemStack.STREAM_CODEC, AbnormalAmuletDefinition::item, AbnormalAmuletDefinition::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L52) |
| ` @Override public MapCodec<AbnormalAmuletDefinition> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L58) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, AbnormalAmuletDefinition> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L63) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/AbnormalAmuletDefinition.java#L46) |

## ComradeAmuletDefinition

` public record ComradeAmuletDefinition(ItemStack item) implements IAmuletDefinition `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ComradeAmuletDefinition(ItemLike item) ` | 执行 ` this(new ItemStack(item.asItem())) `<br>[调用处 ModAmuletDefinitions.bootstrap](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/item/ModAmuletDefinitions.java#L80) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L17) |
| ` @Override public ItemStack create() ` | 末尾返回 ` this.item.copyWithCount(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L21) |
| ` @Override public boolean mayObtain(ServerPlayer victim, DamageSource source) ` | ` (murder == null) ` 成立时提前返回 ` false `<br>末尾返回 ` victimTeam == null ? murderTeam == null : victimTeam.isAlliedTo(murderTeam) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L26) |
| ` @Override public Type getType() ` | 末尾返回 ` ModAmuletDefinitionTypes.COMRADE.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L35) |
| ` public ItemStack item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L16) |

## ComradeAmuletDefinition.Type

` public static class Type implements IAmuletDefinition.Type<ComradeAmuletDefinition> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<ComradeAmuletDefinition> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group( ItemStack.CODEC .fieldOf("item") .forGetter(ComradeAmuletDefinition::item) ).apply(inst, ComradeAmuletDefinition::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L41) |
| ` public static final StreamCodec<RegistryFriendlyByteBuf, ComradeAmuletDefinition> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ItemStack.STREAM_CODEC, ComradeAmuletDefinition::item, ComradeAmuletDefinition::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L46) |
| ` @Override public MapCodec<ComradeAmuletDefinition> codec() ` | 末尾返回 ` Type.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L52) |
| ` @Override public StreamCodec<RegistryFriendlyByteBuf, ComradeAmuletDefinition> streamCodec() ` | 末尾返回 ` Type.STREAM_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L57) |
| ` public Type() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/def/ComradeAmuletDefinition.java#L40) |
