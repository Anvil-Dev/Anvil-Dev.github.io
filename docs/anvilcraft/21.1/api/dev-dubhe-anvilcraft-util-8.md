# dev.dubhe.anvilcraft.util（UnitUtil 至 WeaponRaycastUtil.Ray）



## UnitUtil

` public class UnitUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/UnitUtil.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final String INFINITE_POWER ` | 初值 ` "∞" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/UnitUtil.java#L8) |
| ` public static Component energyUnit(int energy, boolean original) ` | ` (original) ` 成立时提前返回 ` Component.literal(String.valueOf(energy)).withStyle(ChatFormatting.GOLD) .append(Component.literal(" FE").withStyle(ChatFormatting.GRAY)) `<br>` (energy < 1000) ` 成立时提前返回 ` Component.literal(String.valueOf(energy)).withStyle(ChatFormatting.GOLD) .append(Component.literal(" FE").withStyle(ChatFormatting.GRAY)) `<br>[调用处 ItemTooltipManager.addTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/ItemTooltipManager.java#L1329) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/UnitUtil.java#L10) |
| ` public static String electricityUnit(int amount, boolean original, boolean infinite) ` | ` (infinite) ` 成立时提前返回 ` INFINITE_POWER `<br>` (original) ` 成立时提前返回 ` amount + " kW" `<br>` (amount < 1000) ` 成立时提前返回 ` String.format("%d kW", amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/UnitUtil.java#L35) |
| ` public static String electricityUnit(int consume, int generate, boolean original) ` | ` (original) ` 成立时提前返回 ` consume + "/" + generate + " kW" `<br>` (generate < 1000) ` 成立时提前返回 ` String.format("%d/%d kW", consume, generate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/UnitUtil.java#L63) |
| ` public static String fluidUnit(int amount, boolean original) ` | 末尾返回 ` fluidUnit((long) amount, original) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/UnitUtil.java#L95) |
| ` public static String fluidUnit(long amount, boolean original) ` | ` (original) ` 成立时提前返回 ` amount + " mB" `<br>` (amount < 1000) ` 成立时提前返回 ` String.format("%d mB", amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/UnitUtil.java#L99) |
| ` public UnitUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/UnitUtil.java#L7) |

## Util

` public class Util `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Util.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String generateUniqueRecipeSuffix() ` | 末尾返回 ` "_generated_" + generateRandomString(8, true, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Util.java#L24) |
| ` public static String generateRandomString(int len) ` | 末尾返回 ` generateRandomString(len, true, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Util.java#L28) |
| ` public static String generateRandomString(int len, boolean hasInteger, boolean hasUpperLetter) ` | 末尾返回 ` stringBuffer.toString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Util.java#L32) |
| ` @Nullable public static GameProfileCache clientCache ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Util.java#L44) |
| ` @SuppressWarnings("Convert2Lambda") public static GameProfileCache findProfileCache(Level level) ` | 实现调用 ` FMLLoader.getDist() `<br>分支 ` (FMLLoader.getDist() == Dist.CLIENT) ` 内调用 ` ref.get() `<br>分支 ` !(FMLLoader.getDist() == Dist.CLIENT) ` 内调用 ` ((MinecraftServerAccessor) Objects.requireNonNull(level.getServer())).getServices().profileCache() `<br>[调用处 ComradeAmuletItem.appendHoverText](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/ComradeAmuletItem.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Util.java#L46) |
| ` public static <K, V> Collector<Map.Entry<K, V>, ?, Map<K, V>> toMapCollector() ` | 末尾返回 ` Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/Util.java#L65) |

## VanillaConstants

` public class VanillaConstants `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VanillaConstants.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ImmutableList<ConcretePowderBlock> CONCRETE_POWDERS ` | 由 ` ImmutableList.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VanillaConstants.java#L9) |
| ` public static final ImmutableList<WeatheringCopper> WEATHERING_COPPERS ` | 由 ` ImmutableList.of ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VanillaConstants.java#L28) |
| ` public VanillaConstants() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VanillaConstants.java#L8) |

## VertexConsumerWithPose

` public class VertexConsumerWithPose implements VertexConsumer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VertexConsumerWithPose.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public VertexConsumerWithPose(VertexConsumer parent, PoseStack.Pose pose, BlockPos originPos) ` | [调用处 AnvilHammerScreen.renderRotatedBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AnvilHammerScreen.java#L257) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VertexConsumerWithPose.java#L12) |
| ` @Override public VertexConsumer addVertex(float x, float y, float z) ` | 末尾返回 ` this.parent.addVertex(this.pose, x - dx, y - dy, z - dz) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VertexConsumerWithPose.java#L18) |
| ` @Override public VertexConsumer setColor(int r, int g, int b, int a) ` | 末尾返回 ` this.parent.setColor(r, g, b, a) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VertexConsumerWithPose.java#L26) |
| ` @Override public VertexConsumer setUv(float u, float v) ` | 末尾返回 ` this.parent.setUv(u, v) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VertexConsumerWithPose.java#L31) |
| ` @Override public VertexConsumer setUv1(int u, int v) ` | 末尾返回 ` this.parent.setUv1(u, v) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VertexConsumerWithPose.java#L36) |
| ` @Override public VertexConsumer setOverlay(int uv) ` | 末尾返回 ` this.parent.setUv1(uv & 65535, uv >> 16 & 65535) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VertexConsumerWithPose.java#L41) |
| ` @Override public VertexConsumer setUv2(int u, int v) ` | 末尾返回 ` this.parent.setUv2(u, v) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VertexConsumerWithPose.java#L46) |
| ` @Override public VertexConsumer setNormal(float x, float y, float z) ` | 末尾返回 ` this.parent.setNormal(this.pose, x, y, z) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VertexConsumerWithPose.java#L51) |

## VirtualThreadFactoryImpl

` public class VirtualThreadFactoryImpl implements ThreadFactory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VirtualThreadFactoryImpl.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public VirtualThreadFactoryImpl() ` | 执行 ` this.namePrefix = "AnvilCraftWorker-" + poolNumber.getAndIncrement() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VirtualThreadFactoryImpl.java#L10) |
| ` @Override public Thread newThread(Runnable runnable) ` | 末尾返回 ` Thread.ofVirtual() .name(this.namePrefix) .unstarted(runnable) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/VirtualThreadFactoryImpl.java#L14) |

## WatchableCyclingValue

` public class WatchableCyclingValue<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final T[] values ` | 字段类型为 ` T[] ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L10) |
| ` @SafeVarargs public WatchableCyclingValue(String name, Consumer<WatchableCyclingValue<T>> onChangedCallback, T... values) ` | 可监听的循环值选择器 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L20) |
| ` public int count() ` | 末尾返回 ` this.values.length ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L31) |
| ` public WatchableCyclingValue<T> fromIndex(int index) ` | 设置当前index<br>返回 this<br>` (index >= this.values.length) ` 成立时抛出 ` new IndexOutOfBoundsException(index) `<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L40) |
| ` public int index() ` | 末尾返回 ` this.index ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L49) |
| ` public T get() ` | 末尾返回 ` this.values[this.index] ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L53) |
| ` public T next() ` | 下一个<br>末尾返回 ` this.values[this.index++] ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L60) |
| ` public T previous() ` | 上一个<br>末尾返回 ` this.values[this.index--] ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L72) |
| ` public void notifyServer() ` | 执行 ` PacketDistributor.sendToServer(new CyclingValueSyncPacket(this.index, this.name)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L81) |
| ` public String getName() ` | 末尾返回 ` this.name `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchableCyclingValue.java#L9) |

## WatchablePropertyDelegate

` public class WatchablePropertyDelegate<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchablePropertyDelegate.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public WatchablePropertyDelegate(T value) ` | 执行 ` this.value = value ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchablePropertyDelegate.java#L7) |
| ` public WatchablePropertyDelegate() ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchablePropertyDelegate.java#L11) |
| ` public T get() ` | 末尾返回 ` this.value ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchablePropertyDelegate.java#L17) |
| ` public void set(T newValue) ` | 分支 ` (this.value != newValue) ` 内调用 ` this.onChanged(this.value, newValue) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WatchablePropertyDelegate.java#L21) |

## WeaponRaycastUtil

` public final class WeaponRaycastUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final double MUZZLE_FORWARD_OFFSET ` | 初值 ` 0.8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L28) |
| ` public static final double MUZZLE_RIGHT_OFFSET ` | 初值 ` 0.22 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L29) |
| ` public static final double MUZZLE_DOWN_OFFSET ` | 初值 ` 0.16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L30) |
| ` public static Ray ray(Player player, double range) ` | 末尾返回 ` new Ray(start, start.add(player.getViewVector(1.0F).scale(range))) `<br>[调用处 CorruptedBeaconActivatorItem.onUseTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/weapon/CorruptedBeaconActivatorItem.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L35) |
| ` public static Vec3 visualStart(Player player, double rightOffset) ` | 末尾返回 ` visualStart(player, 1.0F, rightOffset) `<br>[调用处 CorruptedBeaconActivatorItem.onUseTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/weapon/CorruptedBeaconActivatorItem.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L40) |
| ` public static Vec3 visualStart(Player player, float partialTick, double rightOffset) ` | 末尾返回 ` visualStart(player, player.getEyePosition(partialTick), partialTick, rightOffset) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L44) |
| ` public static Vec3 visualStart(Player player, Vec3 eyePosition, float partialTick, double rightOffset) ` | 末尾返回 ` eyePosition .add(look.scale(MUZZLE_FORWARD_OFFSET)) .add(right.scale(rightOffset * side)) .add(up.scale(-MUZZLE_DOWN_OFFSET)) `<br>[调用处 WeaponBeamRenderer.resolveLiveBeam](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L48) |
| ` public static Vec3 blockEnd(Level level, Entity source, Ray ray) ` | 末尾返回 ` hit.getType() == HitResult.Type.MISS ? ray.end() : hit.getLocation() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L66) |
| ` public static BlockHitResult laserBlockHit(Level level, Entity source, Ray ray) ` | 实现调用 ` ray.start() `<br>实现调用 ` ray.end() `<br>[调用处 WeaponBeamRenderer.resolveLiveBeam](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L154) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L72) |
| ` @Nullable public static EntityHitResult firstEntity(Level level, Entity source, Ray ray, Predicate<Entity> predicate) ` | 实现调用 ` blockEnd(level, source, ray) `<br>实现调用 ` ray.start() `<br>实现调用 ` source.getBoundingBox().expandTowards(end.subtract(ray.start())).inflate(1.0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L93) |
| ` public static List<LivingEntity> livingEntities(Level level, Entity source, Ray ray, int limit) ` | 末尾返回 ` livingEntitiesToEnd(level, source, new Ray(ray.start(), end), limit) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L106) |
| ` public static List<LivingEntity> livingEntitiesToEnd(Level level, Entity source, Ray ray, int limit) ` | 末尾返回 ` result.size() > limit ? new ArrayList<>(result.subList(0, limit)) : result `<br>[调用处 CorruptedBeaconActivatorItem.onUseTick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/weapon/CorruptedBeaconActivatorItem.java#L64) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L111) |

## WeaponRaycastUtil.Ray

` public record Ray(Vec3 start, Vec3 end) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L126)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Ray(Vec3 start, Vec3 end) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L126) |
| ` public Vec3 start() ` | 读取 record 分量 ` start ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L126) |
| ` public Vec3 end() ` | 读取 record 分量 ` end ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L126) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L126) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L126) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/WeaponRaycastUtil.java#L126) |
