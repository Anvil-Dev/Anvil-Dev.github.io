# dev.dubhe.anvilcraft.api.teslatower



## HasCustomNameFilter

` public class HasCustomNameFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/HasCustomNameFilter.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` entity.getCustomName() != null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/HasCustomNameFilter.java#L11) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.has_custom_name") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/HasCustomNameFilter.java#L16) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/HasCustomNameFilter.java#L7) |
| ` public HasCustomNameFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/HasCustomNameFilter.java#L7) |

## IsBabyFriendlyFilter

` public class IsBabyFriendlyFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsBabyFriendlyFilter.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` entity.getType().getCategory().isFriendly() && entity instanceof AgeableMob ageable && ageable.isBaby() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsBabyFriendlyFilter.java#L12) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_baby_friendly") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsBabyFriendlyFilter.java#L17) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsBabyFriendlyFilter.java#L8) |
| ` public IsBabyFriendlyFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L75) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsBabyFriendlyFilter.java#L8) |

## IsEntityIdFilter

` public class IsEntityIdFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` BuiltInRegistries.ENTITY_TYPE.getKey(entity.getType()).toString().equals(arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java#L13) |
| ` @Override public boolean needArg() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java#L18) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_entity_id") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java#L23) |
| ` @Override public Component getTitle(String arg) ` | ` (colonIndex < 0 \|\| colonIndex >= arg.length() - 1) ` 成立时提前返回 ` Component.literal(arg) `<br>末尾返回 ` BuiltInRegistries.ENTITY_TYPE.get(identifier).map(ref -> Component.translatable(ref.value().getDescriptionId())).orElse(Component.literal(arg)) `<br>实现调用 ` arg.indexOf(':') `<br>实现调用 ` arg.length() `<br>分支 ` (colonIndex < 0 \|\| colonIndex >= arg.length() - 1) ` 内调用 ` Component.literal(arg) `<br>实现调用 ` Identifier.fromNamespaceAndPath(arg.substring(0, colonIndex), arg.substring(colonIndex + 1)) `<br>实现调用 ` arg.substring(0, colonIndex) `<br>实现调用 ` arg.substring(colonIndex + 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java#L28) |
| ` @Override public String tooltip(String arg) ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_entity_id").getString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java#L43) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java#L9) |
| ` public IsEntityIdFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L74) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsEntityIdFilter.java#L9) |

## IsFriendlyFilter

` public class IsFriendlyFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsFriendlyFilter.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` entity.getType().getCategory().isFriendly() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsFriendlyFilter.java#L11) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_friendly") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsFriendlyFilter.java#L16) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsFriendlyFilter.java#L7) |
| ` public IsFriendlyFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L71) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsFriendlyFilter.java#L7) |

## IsHostileFilter

` public class IsHostileFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsHostileFilter.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` entity.getType().getCategory() == MobCategory.MONSTER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsHostileFilter.java#L12) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_hostile") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsHostileFilter.java#L17) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsHostileFilter.java#L8) |
| ` public IsHostileFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L72) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsHostileFilter.java#L8) |

## IsNeutralFilter

` public class IsNeutralFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsNeutralFilter.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` entity instanceof NeutralMob ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsNeutralFilter.java#L12) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_neutral") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsNeutralFilter.java#L17) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsNeutralFilter.java#L8) |
| ` public IsNeutralFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L73) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsNeutralFilter.java#L8) |

## IsOnVehicleFilter

` public class IsOnVehicleFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsOnVehicleFilter.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` entity.getVehicle() != null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsOnVehicleFilter.java#L11) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_on_vehicle") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsOnVehicleFilter.java#L16) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsOnVehicleFilter.java#L7) |
| ` public IsOnVehicleFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L70) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsOnVehicleFilter.java#L7) |

## IsPetFilter

` public class IsPetFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPetFilter.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` entity instanceof TamableAnimal tamableAnimal && tamableAnimal.getOwner() != null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPetFilter.java#L12) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_pet") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPetFilter.java#L17) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPetFilter.java#L8) |
| ` public IsPetFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L69) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPetFilter.java#L8) |

## IsPlayerFilter

` public class IsPlayerFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerFilter.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` entity instanceof Player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerFilter.java#L12) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_player") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerFilter.java#L17) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerFilter.java#L8) |
| ` public IsPlayerFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L67) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerFilter.java#L8) |

## IsPlayerIdFilter

` public class IsPlayerIdFilter extends TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean match(LivingEntity entity, String arg) ` | 末尾返回 ` entity instanceof Player player && player.getName().getString().equals(arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java#L12) |
| ` @Override public boolean needArg() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java#L17) |
| ` @Override public Component title() ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_player_id") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java#L22) |
| ` @Override public Component getTitle(String arg) ` | 末尾返回 ` Component.literal(arg) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java#L27) |
| ` @Override public String tooltip(String arg) ` | 末尾返回 ` Component.translatable("screen.anvilcraft.tesla_tower.filter.is_player_id").getString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java#L32) |
| ` public String getId() ` | 末尾返回 ` this.id `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java#L8) |
| ` public IsPlayerIdFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L68) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/IsPlayerIdFilter.java#L8) |

## TeslaFilter

` public abstract class TeslaFilter `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StreamCodec<ByteBuf, TeslaFilter> STREAM_CODEC ` | 初值 ` ByteBufCodecs.STRING_UTF8.map( TeslaFilter::getFilter, TeslaFilter::getId ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L13) |
| ` public static void register(TeslaFilter filter) ` | 执行 ` TeslaFilter.FILTER_MAP.put(filter.getId(), filter) `<br>[调用处 TeslaFilter.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L35) |
| ` public static TeslaFilter getFilter(String id) ` | 末尾返回 ` TeslaFilter.FILTER_MAP.getOrDefault(id, TeslaFilter.emptyFilter) `<br>[调用处 TeslaTowerBlockEntity.loadAdditional](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L169) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L39) |
| ` public static Collection<TeslaFilter> all() ` | 末尾返回 ` TeslaFilter.FILTER_MAP.values() `<br>[调用处 TeslaTowerScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/TeslaTowerScreen.java#L241) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L43) |
| ` public abstract String getId() ` | 返回 ` String ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L47) |
| ` public abstract boolean match(LivingEntity entity, String arg) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L49) |
| ` public boolean needArg() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L51) |
| ` public abstract Component title() ` | [调用处 TeslaFilter.getTitle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L55) |
| ` public Component getTitle(String arg) ` | 末尾返回 ` this.title() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L57) |
| ` public String tooltip(String arg) ` | 末尾返回 ` "" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L61) |
| ` public static void init() ` | 实现调用 ` TeslaFilter.FILTER_MAP.clear() `<br>实现调用 ` TeslaFilter.register(new IsPlayerFilter()) `<br>实现调用 ` TeslaFilter.register(new IsPlayerIdFilter()) `<br>实现调用 ` TeslaFilter.register(new IsPetFilter()) `<br>实现调用 ` TeslaFilter.register(new IsOnVehicleFilter()) `<br>实现调用 ` TeslaFilter.register(new IsFriendlyFilter()) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L129) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L65) |
| ` public TeslaFilter() ` | Java 提供的无参构造器。<br>[调用处 TeslaFilter](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L17) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/teslatower/TeslaFilter.java#L12) |
