# dev.dubhe.anvilcraft.item.property.consume



## PreventShrinkingConsumeEffect

` public class PreventShrinkingConsumeEffect implements ConsumeEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/PreventShrinkingConsumeEffect.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ThreadLocal<@Nullable InteractionHand> USED_HAND ` | 初值 ` new ThreadLocal<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/PreventShrinkingConsumeEffect.java#L15) |
| ` public static final PreventShrinkingConsumeEffect INSTANCE ` | 初值 ` new PreventShrinkingConsumeEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/PreventShrinkingConsumeEffect.java#L16) |
| ` public static final MapCodec<PreventShrinkingConsumeEffect> CODEC ` | 初值 ` MapCodec.unit(PreventShrinkingConsumeEffect.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/PreventShrinkingConsumeEffect.java#L17) |
| ` public static final StreamCodec<ByteBuf, PreventShrinkingConsumeEffect> STREAM_CODEC ` | 初值 ` StreamCodec.unit( PreventShrinkingConsumeEffect.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/PreventShrinkingConsumeEffect.java#L18) |
| ` @Override public Type<? extends ConsumeEffect> getType() ` | 末尾返回 ` ModConsumeEffects.PREVENT_SHRINKING.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/PreventShrinkingConsumeEffect.java#L21) |
| ` @Override public boolean apply(Level level, ItemStack stack, LivingEntity user) ` | ` (hand == null) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/PreventShrinkingConsumeEffect.java#L26) |
| ` public PreventShrinkingConsumeEffect() ` | Java 提供的无参构造器。<br>[调用处 PreventShrinkingConsumeEffect](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/PreventShrinkingConsumeEffect.java#L16) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/PreventShrinkingConsumeEffect.java#L14) |

## SetFoodLevelConsumeEffect

` public record SetFoodLevelConsumeEffect(int level) implements ConsumeEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<SetFoodLevelConsumeEffect> CODEC ` | 初值 ` RecordCodecBuilder.mapCodec(inst -> inst.group( Codec.INT .fieldOf("level") .forGetter(SetFoodLevelConsumeEffect::level) ).apply(inst, SetFoodLevelConsumeEffect::new)) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L17) |
| ` public static final StreamCodec<ByteBuf, SetFoodLevelConsumeEffect> STREAM_CODEC ` | 初值 ` StreamCodec.composite( ByteBufCodecs.VAR_INT, SetFoodLevelConsumeEffect::level, SetFoodLevelConsumeEffect::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L22) |
| ` @Override public Type<SetFoodLevelConsumeEffect> getType() ` | 末尾返回 ` ModConsumeEffects.SET_FOOD_LEVEL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L28) |
| ` @Override public boolean apply(Level level, ItemStack stack, LivingEntity user) ` | ` (!(user instanceof ServerPlayer player)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L33) |
| ` public SetFoodLevelConsumeEffect(int level) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L16) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L16) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetFoodLevelConsumeEffect.java#L16) |

## SetRagedConsumeEffect

` public class SetRagedConsumeEffect implements ConsumeEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetRagedConsumeEffect.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final SetRagedConsumeEffect INSTANCE ` | 初值 ` new SetRagedConsumeEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetRagedConsumeEffect.java#L13) |
| ` public static final MapCodec<SetRagedConsumeEffect> CODEC ` | 初值 ` MapCodec.unit(SetRagedConsumeEffect.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetRagedConsumeEffect.java#L14) |
| ` public static final StreamCodec<ByteBuf, SetRagedConsumeEffect> STREAM_CODEC ` | 初值 ` StreamCodec.unit(SetRagedConsumeEffect.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetRagedConsumeEffect.java#L15) |
| ` @Override public Type<? extends ConsumeEffect> getType() ` | 末尾返回 ` ModConsumeEffects.SET_RAGED.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetRagedConsumeEffect.java#L17) |
| ` @Override public boolean apply(Level level, ItemStack stack, LivingEntity user) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetRagedConsumeEffect.java#L22) |
| ` public SetRagedConsumeEffect() ` | Java 提供的无参构造器。<br>[调用处 SetRagedConsumeEffect](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetRagedConsumeEffect.java#L13) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/SetRagedConsumeEffect.java#L12) |

## TeleportToRespawnPointConsumeEffect

` public class TeleportToRespawnPointConsumeEffect implements ConsumeEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final TeleportToRespawnPointConsumeEffect INSTANCE ` | 初值 ` new TeleportToRespawnPointConsumeEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L28) |
| ` public static final MapCodec<TeleportToRespawnPointConsumeEffect> CODEC ` | 初值 ` MapCodec.unit(TeleportToRespawnPointConsumeEffect.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L29) |
| ` public static final StreamCodec<ByteBuf, TeleportToRespawnPointConsumeEffect> STREAM_CODEC ` | 初值 ` StreamCodec.unit( TeleportToRespawnPointConsumeEffect.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L30) |
| ` @Override public Type<TeleportToRespawnPointConsumeEffect> getType() ` | 末尾返回 ` ModConsumeEffects.TP_TO_RESPAWN.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L33) |
| ` @Override public boolean apply(Level level, ItemStack stack, LivingEntity user) ` | ` (!(user instanceof ServerPlayer player)) ` 成立时提前返回 ` true `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L38) |
| ` public static void crossDimensionTeleportTo(ResourceKey<Level> dimension, Player player, BlockPos pos) ` | 实现调用 ` player.level() `<br>实现调用 ` level.getServer() `<br>分支 ` (server != null) ` 内调用 ` server.getLevel(dimension) `<br>[调用处 TeleportToRespawnPointConsumeEffect.apply](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L72) |
| ` public TeleportToRespawnPointConsumeEffect() ` | Java 提供的无参构造器。<br>[调用处 TeleportToRespawnPointConsumeEffect](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TeleportToRespawnPointConsumeEffect.java#L27) |

## TryTotemsInBoxConsumeEffect

` public class TryTotemsInBoxConsumeEffect implements ConsumeEffect `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TryTotemsInBoxConsumeEffect.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final TryTotemsInBoxConsumeEffect INSTANCE ` | 初值 ` new TryTotemsInBoxConsumeEffect() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TryTotemsInBoxConsumeEffect.java#L16) |
| ` public static final MapCodec<TryTotemsInBoxConsumeEffect> CODEC ` | 初值 ` MapCodec.unit(TryTotemsInBoxConsumeEffect.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TryTotemsInBoxConsumeEffect.java#L17) |
| ` public static final StreamCodec<ByteBuf, TryTotemsInBoxConsumeEffect> STREAM_CODEC ` | 初值 ` StreamCodec.unit( TryTotemsInBoxConsumeEffect.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TryTotemsInBoxConsumeEffect.java#L18) |
| ` @Override public Type<? extends ConsumeEffect> getType() ` | 末尾返回 ` ModConsumeEffects.TRY_TOTEMS_IN_BOX.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TryTotemsInBoxConsumeEffect.java#L21) |
| ` @Override public boolean apply(Level level, ItemStack stack, LivingEntity user) ` | ` (!stack.has(ModComponents.BOX_CONTENTS)) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TryTotemsInBoxConsumeEffect.java#L26) |
| ` public TryTotemsInBoxConsumeEffect() ` | Java 提供的无参构造器。<br>[调用处 TryTotemsInBoxConsumeEffect](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TryTotemsInBoxConsumeEffect.java#L16) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/consume/TryTotemsInBoxConsumeEffect.java#L15) |
