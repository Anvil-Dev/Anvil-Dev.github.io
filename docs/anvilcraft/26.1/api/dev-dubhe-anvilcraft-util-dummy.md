# dev.dubhe.anvilcraft.util.dummy



## DummyArmadillo

` public class DummyArmadillo extends Armadillo `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DummyArmadillo(Level level) ` | 执行 ` super(EntityType.ARMADILLO, level) `<br>[调用处 DummyArmadillo.fromEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L35) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L22) |
| ` public static @Nullable DummyArmadillo fromEntity(@Nullable LivingEntity entity) ` | ` (entity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` cache ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L26) |
| ` public static void clear(Level level) ` | 执行 ` CACHE.values().removeIf(dummy -> dummy.level() == level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L41) |
| ` public static void clear(Entity entity) ` | 执行 ` DummyArmadillo.CACHE.remove(entity.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L45) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L54) |
| ` @Override public boolean shouldRenderAtSqrDistance(double distance) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L59) |
| ` @Override public boolean shouldBeSaved() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L64) |
| ` @Override public boolean shouldShowName() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L69) |
| ` @Override public boolean hurtServer(ServerLevel level, DamageSource source, float damage) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L74) |
| ` @Override public boolean mayInteract(ServerLevel level, BlockPos pos) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L79) |
| ` @Override public boolean mayBeLeashed() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L84) |

## DummyCat

` public class DummyCat extends Cat `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DummyCat(Level level) ` | 执行 ` super(EntityType.CAT, level) `<br>[调用处 DummyCat.fromEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L35) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L22) |
| ` public static @Nullable DummyCat fromEntity(@Nullable LivingEntity entity) ` | ` (entity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` cache ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L26) |
| ` public static void clear(Level level) ` | 执行 ` CACHE.values().removeIf(dummy -> dummy.level() == level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L41) |
| ` public static void clear(Entity entity) ` | 执行 ` DummyCat.CACHE.remove(entity.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L45) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L54) |
| ` @Override public boolean shouldRenderAtSqrDistance(double distance) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L59) |
| ` @Override public boolean shouldBeSaved() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L64) |
| ` @Override public boolean shouldShowName() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L69) |
| ` @Override public boolean hurtServer(ServerLevel level, DamageSource source, float damage) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L74) |
| ` @Override public boolean mayInteract(ServerLevel level, BlockPos pos) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L79) |
| ` @Override public boolean mayBeLeashed() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L84) |

## DummyHolder

` public class DummyHolder<T> extends Holder.Reference<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyHolder.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DummyHolder(HolderLookup.RegistryLookup<T> owner, ResourceKey<T> key) ` | 实现调用 ` super(Type.STAND_ALONE, owner, key, null) `<br>[调用处 ModItems.enchanted](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModItems.java#L1603) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyHolder.java#L15) |
| ` public DummyHolder(ResourceKey<T> key) ` | 实现调用 ` super(Type.STAND_ALONE, new HolderOwner<>() {}, key, null) `<br>[调用处 BeheadingLootSubProvider.generatePool](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/loot/BeheadingLootSubProvider.java#L130) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyHolder.java#L20) |
| ` @Override public boolean canSerializeIn(HolderOwner<T> context) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyHolder.java#L25) |
| ` @Override public boolean is(TagKey<T> tag) ` | 末尾返回 ` this.boundTags().contains(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyHolder.java#L30) |

## DummyWolf

` public class DummyWolf extends Wolf `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DummyWolf(Level level) ` | 执行 ` super(EntityType.WOLF, level) `<br>[调用处 DummyWolf.fromEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L35) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L22) |
| ` public static @Nullable DummyWolf fromEntity(@Nullable LivingEntity entity) ` | ` (entity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` cache ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L26) |
| ` public static void clear(Level level) ` | 执行 ` CACHE.values().removeIf(dummy -> dummy.level() == level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L41) |
| ` public static void clear(Entity entity) ` | 执行 ` DummyWolf.CACHE.remove(entity.getUUID()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L45) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L54) |
| ` @Override public boolean shouldRenderAtSqrDistance(double distance) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L59) |
| ` @Override public boolean shouldBeSaved() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L64) |
| ` @Override public boolean shouldShowName() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L69) |
| ` @Override public boolean hurtServer(ServerLevel level, DamageSource source, float damage) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L74) |
| ` @Override public boolean mayInteract(ServerLevel level, BlockPos pos) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L79) |
| ` @Override public boolean mayBeLeashed() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L84) |
