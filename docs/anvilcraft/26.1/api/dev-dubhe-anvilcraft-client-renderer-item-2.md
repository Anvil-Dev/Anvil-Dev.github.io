# dev.dubhe.anvilcraft.client.renderer.item（EnergyWeaponReloadPose 至 RuinsBlockItemRenderer.Argument）



## EnergyWeaponReloadPose

` public final class EnergyWeaponReloadPose `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Matrix4f drawing(float lowered, float side) ` | 末尾返回 ` new Matrix4f().translation(side * 0.16F * amount, -1.25F * amount, 0) .rotateZ(radians(side * 12 * amount)) .rotateX(radians(-10 * amount)) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderHand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L17) |
| ` public static Matrix4f holding(Vector3f muzzle, Vector3f target, float muzzleZ, float roll) ` | 实现调用 ` new Matrix4f().translation(muzzle) `<br>实现调用 ` new Quaternionf().rotationTo(new Vector3f(0, 0, -1), new Vector3f(target).sub(muzzle).normalize()) `<br>实现调用 ` new Vector3f(target).sub(muzzle).normalize() `<br>[调用处 EnergyWeaponFirstPersonRenderer.holdingPose](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L194) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L24) |
| ` public static Matrix4f weapon(float elapsed, float side) ` | 末尾返回 ` weapon(holding(new Vector3f(side * 0.28F, -0.2F, -1.1F), new Vector3f(0, 0, -64), -5, 0), elapsed, side) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L32) |
| ` public static Matrix4f weapon(Matrix4f holding, float elapsed, float side) ` | 末尾返回 ` blend(holding, charging, lift) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L36) |
| ` public static Matrix4f weapon(Matrix4f holding, Matrix4f attacking, float elapsed, float side, float attackBlend) ` | 末尾返回 ` blend(weapon(holding, elapsed, side), attacking, attackBlend) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L230) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L47) |
| ` public static float attackMuzzleDepth(float elapsed) ` | 末尾返回 ` 1.1F + 0.25F * lift(elapsed) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L225) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L51) |
| ` public static float approachAttack(float current, boolean attacking, float milliseconds) ` | 末尾返回 ` target + (current - target) * (float) Math.exp(-Math.clamp(milliseconds, 0, 100) / duration) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L215) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L55) |
| ` public static Vector3f capacitorGrip(Matrix4f capacitor, float side) ` | 末尾返回 ` capacitor.transformPosition(new Vector3f(-side * 0.65F, 0.35F, 1.25F)) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L239) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L61) |
| ` public static Vector3f weaponGrip(Matrix4f weapon, float side) ` | 末尾返回 ` weapon.transformPosition(new Vector3f(0, -5.0F / 16, 3.0F / 16)).add(side * 0.045F, -0.045F, 0) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderWeapon](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L258) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L65) |
| ` public static boolean showsCapacitor(float elapsed) ` | 末尾返回 ` elapsed >= 8 && elapsed < 34 `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L232) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L69) |
| ` public static Matrix4f capacitor(float elapsed, float side, boolean regular) ` | 实现调用 ` smooth((elapsed - 4) / 11) `<br>实现调用 ` smooth((elapsed - 29) / 9) `<br>实现调用 ` smooth((elapsed - 15) / 3) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L73) |
| ` public static Matrix4f capacitor(float elapsed, float side, boolean regular, float attackBlend) ` | 末尾返回 ` blend(capacitor(elapsed, side, regular), attacking, attackBlend) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L89) |
| ` public static Matrix4f capacitor( Matrix4f holding, Matrix4f attacking, float elapsed, float side, boolean regular, float attackBlend ) ` | ` (contact <= 0) ` 成立时提前返回 ` free `<br>末尾返回 ` blend(free, attached, contact) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L234) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L103) |
| ` public static Matrix4f arm(Vector3f grip, float side) ` | 末尾返回 ` new Matrix4f().translation(grip) .rotate(new Quaternionf().rotationTo(new Vector3f(0, -1, 0), towardShoulder.normalize())) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderArm](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L265) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L117) |

## EquipmentPoweredProperty

` public final class EquipmentPoweredProperty implements ConditionalItemModelProperty `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L23)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EquipmentPoweredProperty INSTANCE ` | 初值 ` new EquipmentPoweredProperty() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L25) |
| ` public static final MapCodec<EquipmentPoweredProperty> CODEC ` | 初值 ` MapCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L26) |
| ` public static final ContextKey<Boolean> IN_GRID ` | 初值 ` new ContextKey<>(AnvilCraft.of("equipment_in_grid")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L27) |
| ` @Override public boolean get(ItemStack stack, @Nullable ClientLevel level, @Nullable LivingEntity owner, int seed, ItemDisplayContext context) ` | ` (stack.getItem() instanceof WeatherproofChestplateItem) ` 成立时提前返回 ` WeatherproofChestplateItem.getEnergyStored(stack) > 0 `<br>末尾返回 ` owner != null && owner.getData(ModDataAttachments.IN_POWER_GRID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L29) |
| ` @Override public MapCodec<? extends ConditionalItemModelProperty> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L35) |
| ` @SubscribeEvent public static void register(RegisterConditionalItemModelPropertyEvent event) ` | 事件总线派发 ` RegisterConditionalItemModelPropertyEvent ` 时调用。<br>执行 ` event.register(AnvilCraft.of("equipment_powered"), CODEC) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L40) |
| ` @SubscribeEvent public static void renderState(RegisterRenderStateModifiersEvent event) ` | 事件总线派发 ` RegisterRenderStateModifiersEvent ` 时调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L45) |
| ` public EquipmentPoweredProperty() ` | Java 提供的无参构造器。<br>[调用处 EquipmentPoweredProperty](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L25) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EquipmentPoweredProperty.java#L23) |

## ExtraItemDisplayRenderer

` public class ExtraItemDisplayRenderer extends AbstractItemInHandRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ExtraItemDisplayRenderer.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void renderGuiExtra( Matrix3x2fStack pose, IGuiItemRenderer itemRenderer, LivingEntity entity, Level level, ItemStack stack, int x, int y, int seed, int recursion, int maxRecursion, Consumer<Integer> recursionSetter ) ` | 实现调用 ` stack.getItem() `<br>实现调用 ` item.getDisplayedItem(stack) `<br>实现调用 ` innerStack.isEmpty() `<br>[调用处 GuiGraphicsExtractorMixin.renderExtra](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/GuiGraphicsExtractorMixin.java#L92) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ExtraItemDisplayRenderer.java#L24) |
| ` @Override public boolean render( AbstractClientPlayer player, float partialTicks, float pitch, InteractionHand hand, float swingProgress, ItemStack stack, float equippedProgress, PoseStack poseStack, SubmitNodeCollector collector, int lightCoords ) ` | ` (!(stack.getItem() instanceof IExtraItemDisplay display)) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ExtraItemDisplayRenderer.java#L51) |

## FilterItemRenderer

` public class FilterItemRenderer implements SpecialModelRenderer<FilterItemRenderer.Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ItemStack selectDisplayed(@Nullable FilterContent content, long timeMillis) ` | ` (content == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (count == 0) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L21) |
| ` @Override public @Nullable Argument extractArgument(ItemStack stack) ` | ` (FittedItemRenderer.isRenderingPreview()) ` 成立时提前返回 ` null `<br>` (item.isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` new Argument(icon, barrier, item.hasFoil(), FittedItemRenderer.frontZ(stack), item.hasFoil() ? System.nanoTime() : 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L35) |
| ` @Override public void submit(@Nullable Argument argument, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, boolean hasFoil, int outlineColor) ` | 实现调用 ` FittedItemRenderer.isRenderingPreview() `<br>实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(0.5F, 0.5F, argument.frontZ + 0.01F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L46) |
| ` @Override public void getExtents(Consumer<Vector3fc> output) ` | 实现调用 ` output.accept(new Vector3f(0.25F, 0.25F, 8.5F / 16 + 0.01F)) `<br>实现调用 ` output.accept(new Vector3f(0.75F, 0.75F, 8.5F / 16 + 0.03F)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L60) |
| ` public FilterItemRenderer() ` | Java 提供的无参构造器。<br>[调用处 FilterItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L78) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L20) |

## FilterItemRenderer.Argument

` public record Argument(FittedItemRenderer.@Nullable Icon icon, FittedItemRenderer.@Nullable Icon barrier, boolean foil, float frontZ, long animationIdentity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L66)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Argument(FittedItemRenderer.@Nullable Icon icon, FittedItemRenderer.@Nullable Icon barrier, boolean foil, float frontZ, long animationIdentity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L66) |
| ` public FittedItemRenderer.@Nullable Icon icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L67) |
| ` public FittedItemRenderer.@Nullable Icon barrier() ` | 读取 record 分量 ` barrier ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L67) |
| ` public boolean foil() ` | 读取 record 分量 ` foil ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L68) |
| ` public float frontZ() ` | 读取 record 分量 ` frontZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L68) |
| ` public long animationIdentity() ` | 读取 record 分量 ` animationIdentity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L68) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L66) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L66) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L66) |

## FilterItemRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L72)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L73) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L74) |
| ` @Override public FilterItemRenderer bake(BakingContext context) ` | 末尾返回 ` new FilterItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L76) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L81) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L72) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L72) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L72) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L72) |

## FluidTankItemRenderer

` public class FluidTankItemRenderer extends BaseBlockItemRenderer<FluidTankItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L19)

在物品形态的流体储罐里额外渲染出内部流体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankItemRenderer() ` | 执行 ` super(ModBlocks.FLUID_TANK.get().defaultBlockState(), 0.0F, 1.0F) `<br>[调用处 FluidTankItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L66) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L20) |
| ` @Override public @Nullable FluidTankItemRenderState extractArgument(ItemStack stack) ` | ` (!stack.is(ModBlocks.FLUID_TANK.asItem())) ` 成立时提前返回 ` null `<br>` (data == null \|\| data.fluid().isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L24) |
| ` @Override public void submit( @Nullable FluidTankItemRenderState argument, PoseStack poseStack, SubmitNodeCollector collector, int lightCoords, int overlayCoords, boolean hasFoil, int outlineColor ) ` | 实现调用 ` this.submitShell(poseStack, collector, lightCoords, overlayCoords, hasFoil, outlineColor) `<br>实现调用 ` argument.getResource() `<br>实现调用 ` resource.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L42) |

## FluidTankItemRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<FluidTankItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L60)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L61) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(Unbaked.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L62) |
| ` @Override public FluidTankItemRenderer bake(BakingContext context) ` | 末尾返回 ` new FluidTankItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L64) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` Unbaked.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L69) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L60) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L60) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L60) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L60) |

## HasMobBlockItemRenderer

` public final class HasMobBlockItemRenderer extends BaseBlockItemRenderer<EntityRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public @Nullable EntityRenderState extractArgument(ItemStack stack) ` | ` (minecraft.level == null \|\| !(stack.getItem() instanceof HasMobBlockItem)) ` 成立时提前返回 ` null `<br>` (entity == null) ` 成立时提前返回 ` null `<br>末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L25) |
| ` @Override public void submit( @Nullable EntityRenderState argument, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, boolean foil, int outlineColor ) ` | 分支 ` (argument != null) ` 内调用 ` pose.pushPose() `<br>分支 ` (argument != null) ` 内调用 ` pose.translate(0.5F, 0.196F, 0.5F) `<br>分支 ` (argument != null) ` 内调用 ` Math.max(argument.boundingBoxWidth, argument.boundingBoxHeight) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L41) |

## HasMobBlockItemRenderer.Unbaked

` public record Unbaked(Block block) implements SpecialModelRenderer.Unbaked<EntityRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L59)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` BuiltInRegistries.BLOCK.byNameCodec().fieldOf("block") .xmap(Unbaked::new, Unbaked::block) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L60) |
| ` @Override public HasMobBlockItemRenderer bake(BakingContext context) ` | 末尾返回 ` new HasMobBlockItemRenderer(this.block) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L63) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L68) |
| ` public Unbaked(Block block) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L59) |
| ` public Block block() ` | 读取 record 分量 ` block ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L59) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L59) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L59) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L59) |

## IGuiItemRenderer

` public interface IGuiItemRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IGuiItemRenderer.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void renderItem( @Nullable LivingEntity entity, @Nullable Level level, ItemStack stack, int x, int y, int seed ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IGuiItemRenderer.java#L9) |

## IItemRenderer

` public interface IItemRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IItemRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void renderItem( LivingEntity entity, ItemStack itemStack, ItemDisplayContext displayContext, PoseStack poseStack, SubmitNodeCollector collector, int lightCoords ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IItemRenderer.java#L10) |

## ItemInHandRendererManager

` public class ItemInHandRendererManager extends AbstractItemInHandRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final CrabClawItemInHandRenderer crabClawItemRenderer ` | 字段类型为 ` CrabClawItemInHandRenderer ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L18) |
| ` public final ExtraItemDisplayRenderer extraItemRenderer ` | 字段类型为 ` ExtraItemDisplayRenderer ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L19) |
| ` public ItemInHandRendererManager(ItemModelResolver resolver, IItemRenderer renderer) ` | 实现调用 ` super(resolver, renderer) `<br>实现调用 ` this.renderers.add(this.crabClawItemRenderer) `<br>实现调用 ` this.renderers.add(this.extraItemRenderer) `<br>[调用处 ItemInHandRendererMixin.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemInHandRendererMixin.java#L80) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L21) |
| ` @Override public void setMainHandItem(ItemStack mainHandItem) ` | 实现调用 ` this.renderers.forEach(renderer -> renderer.setMainHandItem(mainHandItem)) `<br>实现调用 ` super.setMainHandItem(mainHandItem) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L29) |
| ` @Override public void setOffHandItem(ItemStack offHandItem) ` | 实现调用 ` this.renderers.forEach(renderer -> renderer.setOffHandItem(offHandItem)) `<br>实现调用 ` super.setOffHandItem(offHandItem) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L35) |
| ` public boolean render( AbstractClientPlayer player, float partialTicks, float pitch, InteractionHand hand, float swingProgress, ItemStack stack, float equippedProgress, PoseStack poseStack, SubmitNodeCollector collector, int lightCoords ) ` | ` (stack.getItem() instanceof IExtraItemDisplay) ` 成立时提前返回 ` this.extraItemRenderer.render( player, partialTicks, pitch, hand, swingProgress, stack, equippedProgress, poseStack, collector, lightCoords ) `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L41) |

## ItemUseAnimationTransform

` public final class ItemUseAnimationTransform `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemUseAnimationTransform.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean applyCrossbowCharge( PoseStack poseStack, LocalPlayer player, HumanoidArm arm, ItemStack stack, float partialTick, float equipProgress, int chargeTicks ) ` | ` (!ItemUseAnimationTransform.isUsingArm(player, arm)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 AnvilCraftClient.ResonatorExtensionImpl.applyForgeHandTransform](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L288) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemUseAnimationTransform.java#L15) |
| ` public static boolean applySwordBlock( PoseStack poseStack, LocalPlayer player, HumanoidArm arm, float equipProgress ) ` | ` (!ItemUseAnimationTransform.isUsingArm(player, arm)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 AnvilCraftClient.HeavyHalberdExtensionImpl.applyForgeHandTransform](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L273) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemUseAnimationTransform.java#L48) |

## LargeFluidTankItemRenderer

` public class LargeFluidTankItemRenderer extends BaseBlockItemRenderer<FluidTankItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L18)

在物品形态的大型储罐里按高度分层渲染多种流体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeFluidTankItemRenderer() ` | 执行 ` super( ModBlocks.LARGE_FLUID_TANK.get().defaultBlockState() .setValue(LargeFluidTankBlock.HALF, Cube3x3PartHalf.MID_CENTER), -1.0F, 2.0F ) `<br>[调用处 LargeFluidTankItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L67) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L19) |
| ` @Override public @Nullable FluidTankItemRenderState extractArgument(ItemStack stack) ` | ` (!stack.is(ModBlocks.LARGE_FLUID_TANK.asItem())) ` 成立时提前返回 ` null `<br>` (registries == null) ` 成立时提前返回 ` null `<br>` (layers.isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L28) |
| ` @Override public void submit( @Nullable FluidTankItemRenderState argument, PoseStack poseStack, SubmitNodeCollector collector, int lightCoords, int overlayCoords, boolean hasFoil, int outlineColor ) ` | 实现调用 ` this.submitShell(poseStack, collector, lightCoords, overlayCoords, hasFoil, outlineColor) `<br>实现调用 ` argument.getLayers() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L44) |

## LargeFluidTankItemRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<FluidTankItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L61)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L62) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(Unbaked.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L63) |
| ` @Override public LargeFluidTankItemRenderer bake(BakingContext context) ` | 末尾返回 ` new LargeFluidTankItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L65) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` Unbaked.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L70) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L61) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L61) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L61) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L61) |

## MonolithItemRenderer

` public final class MonolithItemRenderer extends BaseBlockItemRenderer<MonolithItemRenderer.Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Argument extractArgument(ItemStack stack) ` | 末尾返回 ` Argument.INSTANCE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L27) |
| ` @Override public void submit(@Nullable Argument argument, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, boolean foil, int outlineColor) ` | 实现调用 ` this.submitShell(pose, collector, light, overlay, foil, outlineColor) `<br>实现调用 ` MonolithSurfaceRenderer.submitFaces(pose, collector, MonolithSurfaceRenderer.faces(this.state)) `<br>实现调用 ` MonolithSurfaceRenderer.faces(this.state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L32) |

## MonolithItemRenderer.Argument

` public enum Argument `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` MonolithItemRenderer.Argument ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L20) |
| ` public static Argument[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L20) |
| ` public static Argument valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L20) |

## MonolithItemRenderer.Unbaked

` public record Unbaked(Block block) implements SpecialModelRenderer.Unbaked<Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L39)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` BuiltInRegistries.BLOCK.byNameCodec().fieldOf("block") .xmap(Unbaked::new, Unbaked::block) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L40) |
| ` @Override public MonolithItemRenderer bake(BakingContext context) ` | 末尾返回 ` new MonolithItemRenderer(state, giant) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L43) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L54) |
| ` public Unbaked(Block block) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L39) |
| ` public Block block() ` | 读取 record 分量 ` block ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L39) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L39) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L39) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/MonolithItemRenderer.java#L39) |

## RuinsBlockItemRenderer

` public final class RuinsBlockItemRenderer implements SpecialModelRenderer<RuinsBlockItemRenderer.Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public Argument extractArgument(ItemStack stack) ` | 末尾返回 ` Argument.INSTANCE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L18) |
| ` @Override public void submit(@Nullable Argument argument, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, boolean foil, int outlineColor) ` | 执行 ` CelestialBodyRenderer.submitEndGatewayBody(pose, collector) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L23) |
| ` @Override public void getExtents(Consumer<Vector3fc> output) ` | 实现调用 ` output.accept(new Vector3f(x, y, z)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L29) |
| ` public RuinsBlockItemRenderer() ` | Java 提供的无参构造器。<br>[调用处 RuinsBlockItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L44) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L15) |

## RuinsBlockItemRenderer.Argument

` public enum Argument `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` RuinsBlockItemRenderer.Argument ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L16) |
| ` public static Argument[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L16) |
| ` public static Argument valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L16) |
