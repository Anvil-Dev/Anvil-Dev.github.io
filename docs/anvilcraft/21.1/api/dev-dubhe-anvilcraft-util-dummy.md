# dev.dubhe.anvilcraft.util.dummy



## DummyArmadillo

` public class DummyArmadillo extends Armadillo `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DummyArmadillo(Level level) ` | 执行 ` super(EntityType.ARMADILLO, level) `<br>[调用处 DummyArmadillo.fromEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L33) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L20) |
| ` public static @Nullable DummyArmadillo fromEntity(@Nullable LivingEntity entity) ` | ` (entity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` cache ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L24) |
| ` public static void clear(Entity entity) ` | 执行 ` DummyArmadillo.CACHE.remove(entity.getUUID()) `<br>[调用处 EntityEventListener.onLeaveLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L39) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L48) |
| ` @Override public boolean shouldRenderAtSqrDistance(double distance) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L53) |
| ` @Override public boolean shouldBeSaved() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L58) |
| ` @Override public boolean shouldShowName() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L63) |
| ` @Override public boolean mayInteract(Level level, BlockPos pos) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L68) |
| ` @Override public boolean mayBeLeashed() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyArmadillo.java#L73) |

## DummyCat

` public class DummyCat extends Cat `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DummyCat(Level level) ` | 执行 ` super(EntityType.CAT, level) `<br>[调用处 DummyCat.fromEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L33) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L20) |
| ` public static @Nullable DummyCat fromEntity(@Nullable LivingEntity entity) ` | ` (entity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` cache ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L24) |
| ` public static void clear(Entity entity) ` | 执行 ` DummyCat.CACHE.remove(entity.getUUID()) `<br>[调用处 EntityEventListener.onLeaveLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L39) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L48) |
| ` @Override public boolean shouldRenderAtSqrDistance(double distance) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L53) |
| ` @Override public boolean shouldBeSaved() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L58) |
| ` @Override public boolean shouldShowName() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L63) |
| ` @Override public boolean mayInteract(Level level, BlockPos pos) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L68) |
| ` @Override public boolean mayBeLeashed() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyCat.java#L73) |

## DummyWolf

` public class DummyWolf extends Wolf `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DummyWolf(Level level) ` | 执行 ` super(EntityType.WOLF, level) `<br>[调用处 DummyWolf.fromEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L33) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L20) |
| ` public static @Nullable DummyWolf fromEntity(@Nullable LivingEntity entity) ` | ` (entity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` cache ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L24) |
| ` public static void clear(Entity entity) ` | 执行 ` DummyWolf.CACHE.remove(entity.getUUID()) `<br>[调用处 EntityEventListener.onLeaveLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/EntityEventListener.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L39) |
| ` @Override public boolean shouldRender(double x, double y, double z) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L48) |
| ` @Override public boolean shouldRenderAtSqrDistance(double distance) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L53) |
| ` @Override public boolean shouldBeSaved() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L58) |
| ` @Override public boolean shouldShowName() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L63) |
| ` @Override public boolean mayInteract(Level level, BlockPos pos) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L68) |
| ` @Override public boolean mayBeLeashed() ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/dummy/DummyWolf.java#L73) |
