# dev.dubhe.anvilcraft.util（LiquidEnchantmentClientFluidTypeExtension 至 ResentmentUtil）



## LiquidEnchantmentClientFluidTypeExtension

` public class LiquidEnchantmentClientFluidTypeExtension extends ModClientFluidTypeExtensionImpl `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LiquidEnchantmentClientFluidTypeExtension() ` | 执行 ` super() `<br>[调用处 ClientModFluidModels.registerFluidModel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ClientModFluidModels.java#L22) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L14) |
| ` public int[] getLayerColors(FluidStack stack) ` | 原贴图、魔咒色与诅咒红色按顺序作为独立渲染层。<br>` (enchantment.isEmpty()) ` 成立时提前返回 ` BASE_LAYER `<br>末尾返回 ` new int[]{0xFFFFFFFF, enchantmentLayer} `<br>[调用处 LiquidEnchantmentClientFluidTypeExtension.getTintColor](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L19) |
| ` public int getTintColor(FluidStack stack) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L30) |

## LiquidEnchantmentUtil

` public final class LiquidEnchantmentUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static FluidStack fromBook(ItemStack stack) ` | ` (!stack.is(Items.BOOK) && !stack.is(Items.ENCHANTED_BOOK)) ` 成立时提前返回 ` FluidStack.EMPTY `<br>末尾返回 ` fluid `<br>[调用处 CreativeFluidTankBlockEntity.onPlayerUse](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CreativeFluidTankBlockEntity.java#L105) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L25) |
| ` public static Optional<Holder<Enchantment>> getEnchantment(FluidStack stack) ` | ` (!stack.is(ModFluids.LIQUID_ENCHANTMENT.get())) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.ofNullable(stack.get(ModComponents.LIQUID_ENCHANTMENT)) `<br>[调用处 AutoEnchantingTableBlockEntity.canPerformWork](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/AutoEnchantingTableBlockEntity.java#L389) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L36) |
| ` public static boolean isBlank(FluidStack stack) ` | 末尾返回 ` stack.is(ModFluids.LIQUID_ENCHANTMENT.get()) && LiquidEnchantmentUtil.getEnchantment(stack).isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L41) |
| ` public static boolean isEnchanted(FluidStack stack) ` | 末尾返回 ` LiquidEnchantmentUtil.getEnchantment(stack).isPresent() `<br>[调用处 AutoEnchantingTableBlockEntity.isValid](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/AutoEnchantingTableBlockEntity.java#L165) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L45) |
| ` public static boolean isCursed(FluidStack stack) ` | 末尾返回 ` LiquidEnchantmentUtil.getEnchantment(stack).filter(enchantment -> enchantment.is(EnchantmentTags.CURSE)).isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L49) |
| ` public static int getColor(Holder<Enchantment> enchantment) ` | 根据魔咒完整注册名计算跨存档稳定的 24 位 FNV-1a 颜色。<br>末尾返回 ` hash & 0xFFFFFF `<br>[调用处 LiquidEnchantmentClientFluidTypeExtension.getLayerColors](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L54) |
| ` public static int curseLayer(Holder<Enchantment> enchantment) ` | 返回诅咒液态魔咒专用的渲染覆盖层颜色；消失诅咒偏橙红、绑定诅咒偏玫红，其余诅咒回退通用深红。<br>` (path.equals("vanishing_curse")) ` 成立时提前返回 ` 0xF0E83400 `<br>` (path.equals("binding_curse")) ` 成立时提前返回 ` 0xF0C01050 `<br>末尾返回 ` 0xE8990000 `<br>[调用处 LiquidEnchantmentClientFluidTypeExtension.getLayerColors](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentClientFluidTypeExtension.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L67) |
| ` public static long amountForLevel(int level) ` | ` (level <= 0) ` 成立时提前返回 ` 0 `<br>` (level >= Long.SIZE) ` 成立时提前返回 ` Long.MAX_VALUE `<br>末尾返回 ` 1L << (level - 1) `<br>[调用处 AutoEnchantingTableBlockEntity.canPerformWork](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/AutoEnchantingTableBlockEntity.java#L396) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L77) |
| ` public static int levelForAmount(long amount) ` | 末尾返回 ` amount <= 0 ? 0 : Long.SIZE - Long.numberOfLeadingZeros(amount) `<br>[调用处 AutoEnchantingTableBlockEntity.computeLiquidMaxLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/AutoEnchantingTableBlockEntity.java#L552) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/LiquidEnchantmentUtil.java#L83) |

## MagnetUtil

` public abstract class MagnetUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L47)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void animateAnvilFromMagnet(Level level, Vec3 start, BlockState state, BlockPos magnet, int... removedEntities) ` | 执行 ` sendAnimation(level, start, state, magnet.below(), true, removedEntities) `<br>[调用处 MagnetBlock.attract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/storage/MagnetBlock.java#L143) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L51) |
| ` public static void animateAscendingBlock(Level level, Vec3 start, BlockState state, BlockPos end) ` | 执行 ` sendAnimation(level, start, state, end, false, new int[0]) `<br>[调用处 GunpowderBlockBehavior.handle](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/anvil/GunpowderBlockBehavior.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L55) |
| ` @SubscribeEvent public static void onLevelTick(LevelTickEvent.Post event) ` | 事件总线派发 ` LevelTickEvent.Post ` 时调用。<br>实现调用 ` event.getLevel() `<br>实现调用 ` PENDING_ANIMATIONS.remove(level) `<br>实现调用 ` animation.send(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L72) |
| ` @SubscribeEvent public static void onLevelUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ServerLevel level) ` 内调用 ` PENDING_ANIMATIONS.remove(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L81) |
| ` public static boolean hasMagnetism(Level level, BlockPos pos) ` | 末尾返回 ` (state.is(ModBlockTags.MAGNET) \|\| state.getBlock() instanceof MagnetBlock) && state.hasProperty(MagnetBlock.LIT) && !state.getValue(MagnetBlock.LIT) `<br>[调用处 SpectralAnvilBlock.neighborChanged](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/workstation/SpectralAnvilBlock.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L104) |
| ` public static InteractionResult placeMagnetizedNode(UseOnContext context) ` | ` (player == null) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (!player.isShiftKeyDown()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (blockState.isAir()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (!Double.isFinite(maxY)) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` Util.sidedSuccess(level) `<br>[调用处 MultitoolItem.useOnAsMagnet](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/MultitoolItem.java#L341) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L112) |
| ` public static InteractionResult magnetizeItems( Level level, Player player, InteractionHand usedHand ) ` | ` (player.isShiftKeyDown()) ` 成立时提前返回 ` InteractionResult.PASS `<br>` (event.isCanceled()) ` 成立时提前返回 ` InteractionResult.PASS `<br>末尾返回 ` Util.sidedSuccess(level) `<br>[调用处 MultitoolItem.useAsMagnet](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/MultitoolItem.java#L187) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L157) |
| ` public MagnetUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L47) |

## ModClientFluidTypeExtensionImpl

` public class ModClientFluidTypeExtensionImpl implements IClientFluidTypeExtensions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final boolean noFog ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L12) |
| ` public final int fogColor ` | 字段类型为 ` int ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L13) |
| ` public final float fogDistance ` | 字段类型为 ` float ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L14) |
| ` public ModClientFluidTypeExtensionImpl( int fogColor, float fogDistance ) ` | [调用处 ModFluids.onRegisterFluidType](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L371) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L16) |
| ` public ModClientFluidTypeExtensionImpl() ` | [调用处 ModFluids.onRegisterFluidType](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/block/ModFluids.java#L395) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L25) |
| ` @Override public void modifyFogColor( Camera camera, float partialTick, ClientLevel level, int renderDistance, float darkenWorldAmount, Vector4f fluidFogColor ) ` | 实现调用 ` fluidFogColor.set(fogRed, fogGreen, fogBlue) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L31) |
| ` @Override public void modifyFogRender( Camera camera, @Nullable FogEnvironment environment, float renderDistance, float partialTick, FogData fogData ) ` | 实现调用 ` camera.entity() `<br>实现调用 ` entity.isSpectator() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModClientFluidTypeExtensionImpl.java#L47) |

## ModEnchantmentHelper

` public class ModEnchantmentHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int getEnchantmentLevelForLoot( LootContext context, Holder<Enchantment> enchantment, int originalLevel ) ` | ` (context.getOptionalParameter(LootContextParams.DIRECT_ATTACKING_ENTITY) instanceof ThrownHeavyHalberdEntity heavyHalberd ) ` 成立时提前返回 ` heavyHalberd.getWeaponItem().getEnchantmentLevel(enchantment) `<br>末尾返回 ` originalLevel `<br>[调用处 LootItemRandomChanceWithEnchantedBonusConditionMixin.getThrownHeavyHalberdEnchantmentLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LootItemRandomChanceWithEnchantedBonusConditionMixin.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L28) |
| ` public static void onUseOnBlock( ServerLevel level, ItemStack stack, LivingEntity entity, EquipmentSlot slot, Vec3 pos, BlockState state ) ` | [调用处 UseOnBlockEventListener.onUseOnBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/UseOnBlockEventListener.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L39) |
| ` public static void onPostBreakBlock( ServerLevel level, ItemStack stack, LivingEntity entity, EquipmentSlot slot, Vec3 pos, BlockState state ) ` | [调用处 BreakBlockEventListener.onBlockRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L96) |
| ` public ModEnchantmentHelper() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L27) |

## ModEventUtil

` public class ModEventUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean hasGuideBook() ` | 末尾返回 ` NeoForge.EVENT_BUS.post(new GuideBookEvent.HasGuideBookEvent()).isHasGuideBook() `<br>[调用处 GuideBookItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L37) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L13) |
| ` public static void openGuideBook(Level level, ServerPlayer player, InteractionHand usedHand) ` | 执行 ` NeoForge.EVENT_BUS.post(new GuideBookEvent.OpenGuideBookEvent(level, player, usedHand)) `<br>[调用处 GuideBookItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/utility/GuideBookItem.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L17) |
| ` public static IntegrationUtil.LoadStatus checkIntegration(String id, boolean hasExtra) ` | ` (!loaded) ` 成立时提前返回 ` IntegrationUtil.LoadStatus.NOT_FOUND `<br>` (!hasExtra) ` 成立时提前返回 ` IntegrationUtil.LoadStatus.LOADED `<br>末尾返回 ` event.isLoaded() ? IntegrationUtil.LoadStatus.LOADED : IntegrationUtil.LoadStatus.NOT_LOADED `<br>[调用处 IntegrationScreen.BaseIntegrationEntry.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L130) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L21) |
| ` public ModEventUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L12) |

## ModInteractionMap

` public class ModInteractionMap `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L33)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final CauldronInteraction.Dispatcher LAVA ` | 初值 ` new CauldronInteraction.Dispatcher() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L35) |
| ` public static final CauldronInteraction.Dispatcher EXP_FLUID ` | 初值 ` new CauldronInteraction.Dispatcher() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L36) |
| ` public static final CauldronInteraction.Dispatcher OIL ` | 初值 ` new CauldronInteraction.Dispatcher() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L37) |
| ` public static final CauldronInteraction.Dispatcher CEMENT ` | 初值 ` new CauldronInteraction.Dispatcher() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L38) |
| ` public static final CauldronInteraction.Dispatcher HONEY ` | 初值 ` new CauldronInteraction.Dispatcher() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L39) |
| ` public static final CauldronInteraction.Dispatcher MILK ` | 初值 ` new CauldronInteraction.Dispatcher() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L40) |
| ` public static final CauldronInteraction.Dispatcher MELT_GEM ` | 初值 ` new CauldronInteraction.Dispatcher() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L41) |
| ` public static final CauldronInteraction.Dispatcher FISH_TANK ` | 初值 ` new CauldronInteraction.Dispatcher() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L42) |
| ` public static final CauldronInteraction.Dispatcher OBSIDIAN ` | 初值 ` new CauldronInteraction.Dispatcher() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L43) |
| ` @SubscribeEvent public static void registerDispatchers(RegisterCauldronInteractionEvent.Dispatcher event) ` | 事件总线派发 ` RegisterCauldronInteractionEvent.Dispatcher ` 时调用。<br>实现调用 ` event.register(AnvilCraft.of("lava"), ModInteractionMap.LAVA) `<br>实现调用 ` AnvilCraft.of("lava") `<br>实现调用 ` event.register(AnvilCraft.of("exp_fluid"), ModInteractionMap.EXP_FLUID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L45) |
| ` @SubscribeEvent public static void registerInteractions(RegisterCauldronInteractionEvent.Interaction event) ` | 事件总线派发 ` RegisterCauldronInteractionEvent.Interaction ` 时调用。<br>实现调用 ` AnvilCraft.of("lava") `<br>实现调用 ` AnvilCraft.of("exp_fluid") `<br>实现调用 ` AnvilCraft.of("oil") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L58) |
| ` public ModInteractionMap() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L33) |

## MonolithBlockPositions

` public final class MonolithBlockPositions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MonolithBlockPositions.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isMonolith(BlockState state) ` | 末尾返回 ` state.getBlock() instanceof MonolithBlock \|\| state.getBlock() instanceof MonolithLineBlock \|\| state.getBlock() instanceof GiantMonolithCoreBlock `<br>[调用处 MonolithSurfaceRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L93) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MonolithBlockPositions.java#L22) |
| ` public static void clear() ` | 执行 ` CHUNKS.clear() `<br>[调用处 ClientLevelMixin.onLevelLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MonolithBlockPositions.java#L27) |
| ` public static void onBlockChanged(BlockPos pos, BlockState oldState, BlockState newState) ` | 实现调用 ` isMonolith(oldState) `<br>实现调用 ` isMonolith(newState) `<br>实现调用 ` ChunkPos.pack(pos) `<br>[调用处 LevelChunkMixin.anvilcraft$trackEnchantedGold](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LevelChunkMixin.java#L200) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MonolithBlockPositions.java#L31) |
| ` public static void scanChunk(LevelChunk chunk) ` | 实现调用 ` chunk.getSections() `<br>实现调用 ` section.hasOnlyAir() `<br>实现调用 ` section.maybeHas(MonolithBlockPositions::isMonolith) `<br>[调用处 ClientLevelMixin.anvilcraft$scanEnchantedGold](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L95) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MonolithBlockPositions.java#L46) |
| ` public static void unload(ChunkPos chunk) ` | 执行 ` CHUNKS.remove(chunk.pack()) `<br>[调用处 ClientLevelMixin.anvilcraft$unloadEnchantedGold](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ClientLevelMixin.java#L101) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MonolithBlockPositions.java#L69) |
| ` public static Iterable<Set<BlockPos>> chunks() ` | 末尾返回 ` CHUNKS.values() `<br>[调用处 MonolithSurfaceRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MonolithBlockPositions.java#L73) |

## MultiPartBlockUtil

` public class MultiPartBlockUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MultiPartBlockUtil.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlockPos getMainPartPos(Level level, BlockPos pos) ` | 末尾返回 ` pos `<br>[调用处 InfiniteFluidTankBreakProtection.findProtectedTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MultiPartBlockUtil.java#L15) |
| ` public static BlockPos getChainableMainPartPos(Level level, BlockPos pos) ` | 获取主方块位置，只包含可“连锁破坏”的多方块<br>` (state.is(ModBlocks.LARGE_CAKE)) ` 成立时提前返回 ` pos `<br>末尾返回 ` MultiPartBlockUtil.getMainPartPos(level, pos) `<br>[调用处 AnvilHammerItem.breakBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/AnvilHammerItem.java#L123) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MultiPartBlockUtil.java#L40) |
| ` public MultiPartBlockUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MultiPartBlockUtil.java#L14) |

## NbtUtil

` public class NbtUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String toConstructString(CompoundTag tag, State state) ` | 末尾返回 ` builder.toString() `<br>[调用处 Multiblock4DRecipe.toDatagen](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java#L233) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L39) |
| ` public NbtUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L23) |

## NbtUtil.State

` public static class State `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public int increaseTotal() ` | 末尾返回 ` ++this.totalCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L294) |
| ` public int increaseList() ` | 末尾返回 ` ++this.listCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L298) |
| ` public int increaseCompound() ` | 末尾返回 ` ++this.compoundCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L302) |
| ` public State() ` | 当前实现的方法体为空。<br>[调用处 Multiblock4DRecipe.toDatagen](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java#L206) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public int getTotalCount() ` | 末尾返回 ` this.totalCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public int getListCount() ` | 末尾返回 ` this.listCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public int getCompoundCount() ` | 末尾返回 ` this.compoundCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public void setTotalCount(final int totalCount) ` | 执行 ` this.totalCount = totalCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public void setListCount(final int listCount) ` | 执行 ` this.listCount = listCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public void setCompoundCount(final int compoundCount) ` | 执行 ` this.compoundCount = compoundCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` @Override public boolean equals(final Object o) ` | ` (o == this) ` 成立时提前返回 ` true `<br>` (!(o instanceof NbtUtil.State)) ` 成立时提前返回 ` false `<br>` (!other.canEqual((Object) this)) ` 成立时提前返回 ` false `<br>` (this.getTotalCount() != other.getTotalCount()) ` 成立时提前返回 ` false `<br>` (this.getListCount() != other.getListCount()) ` 成立时提前返回 ` false `<br>` (this.getCompoundCount() != other.getCompoundCount()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` @Override public int hashCode() ` | 末尾返回 ` result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` @Override public String toString() ` | 末尾返回 ` "NbtUtil.State(totalCount=" + this.getTotalCount() + ", listCount=" + this.getListCount() + ", compoundCount=" + this.getCompoundCount() + ")" `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |

## OrbitalIntegrator

` public final class OrbitalIntegrator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L9)

Subdivides one tick without invoking entity movement or collision code.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable Step integrate( Vec3 position, Vec3 velocity, int substeps, BiFunction<Vec3, Vec3, Vec3> acceleration ) ` | Fourth-order PEFRL splitting preserves central-force angular momentum with four force samples per substep. Coefficients: Omelyan et al., Phys. Rev. E 65, 056706 (2002).<br>` (substeps < 2 \|\| substeps > 64 \|\| !isFinite(position) \|\| !isFinite(velocity)) ` 成立时提前返回 ` null `<br>末尾返回 ` new Step(displacement, velocity) `<br>[调用处 GravityManager.applyMovementEffects](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L295) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L23) |
| ` public static double relativisticFactor(Vec3 offset, Vec3 velocity, double inverseLightSpeedSquared) ` | Schwarzschild orbit correction, with h = r cross v and a gameplay cap on the extra attraction.<br>` (radiusSquared < 1 \|\| inverseLightSpeedSquared <= 0) ` 成立时提前返回 ` 1 `<br>末尾返回 ` 1 + Math.min(0.01, 3 * angularMomentumSquared * inverseLightSpeedSquared / radiusSquared) `<br>[调用处 GravityManager.GravitySourceManager.calculateOrbitalGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L630) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L46) |

## OrbitalIntegrator.Step

` public record Step(Vec3 movement, Vec3 velocity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Step(Vec3 movement, Vec3 velocity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public Vec3 movement() ` | 读取 record 分量 ` movement ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public Vec3 velocity() ` | 读取 record 分量 ` velocity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |

## OverseerUtil

` public class OverseerUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void onLoadOverseer(Level level, OverseerBlockEntity overseerBlockEntity) ` | 实现调用 ` shouldTrack(level, overseerBlockEntity) `<br>实现调用 ` placedOverseers .computeIfAbsent(level.dimension(), dim -> ConcurrentHashMap.newKeySet()) `<br>实现调用 ` level.dimension() `<br>[调用处 ServerBlockEntityEventListener.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L21) |
| ` public static void onUnloadOverseer(Level level, OverseerBlockEntity overseerBlockEntity) ` | 实现调用 ` shouldTrack(level, overseerBlockEntity) `<br>实现调用 ` placedOverseers.get(level.dimension()) `<br>实现调用 ` level.dimension() `<br>[调用处 ServerBlockEntityEventListener.onUnload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L28) |
| ` public static Set<BlockPos> getPlacedOverseers(ResourceKey<Level> dimension) ` | 末尾返回 ` OverseerUtil.placedOverseers.getOrDefault(dimension, Set.of()) `<br>[调用处 OverseerCommand.listOverseersInternal](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L38) |
| ` public OverseerUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L17) |

## PacketDistributingHelper

` public class PacketDistributingHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PacketDistributingHelper.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void sendToPlayersTrackingEntity(Entity entity, Packet<? super ClientGamePacketListener> packet) ` | ` (entity.level().isClientSide()) ` 成立时抛出 ` new IllegalStateException("Cannot send clientbound payloads on the client") `<br>[调用处 FloatingBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/FloatingBlockEntity.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PacketDistributingHelper.java#L9) |
| ` public PacketDistributingHelper() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PacketDistributingHelper.java#L8) |

## PistonMoveGuard

` public final class PistonMoveGuard `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Scope begin(Level level) ` | 末尾返回 ` new Scope(reservation) `<br>[调用处 PropelPistonBlock.triggerEvent](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/laser/PropelPistonBlock.java#L219) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L19) |
| ` public static void reserve(Level level, List<BlockPos> toPush, List<BlockPos> toDestroy) ` | 实现调用 ` PistonMoveGuard.ACTIVE_RESERVATIONS.get() `<br>实现调用 ` reservations.isEmpty() `<br>实现调用 ` reservations.peek() `<br>[调用处 ISlidingRail.moveBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/logistics/sliding/ISlidingRail.java#L119) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L30) |
| ` public static boolean isReserved(Level level, BlockPos pos) ` | ` (reservations == null) ` 成立时提前返回 ` false `<br>末尾返回 ` false `<br>[调用处 BlockDevourerBlock.devourSingleBlockInternalLogic](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/utility/BlockDevourerBlock.java#L239) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L39) |

## PistonMoveGuard.Scope

` public static final class Scope implements AutoCloseable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L57)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void close() ` | 实现调用 ` PistonMoveGuard.ACTIVE_RESERVATIONS.get() `<br>实现调用 ` reservations.removeFirstOccurrence(this.reservation) `<br>实现调用 ` reservations.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L65) |

## PlacementInteractions

` public final class PlacementInteractions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PlacementInteractions.java#L29)

只读判断交互优先级，预览阶段不能调用 use 方法打开界面或改变世界。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean allowsPlacement(UseOnContext context) ` | ` (player == null \|\| player.isSpectator()) ` 成立时提前返回 ` false `<br>` (BuildingRodItem.isHeld(player)) ` 成立时提前返回 ` true `<br>` (context.getHand() == InteractionHand.OFF_HAND && player.getMainHandItem().getUseAnimation() != ItemUseAnimation.NONE) ` 成立时提前返回 ` false `<br>` (context.getItemInHand().getItem() instanceof ChuteBlockItem && ChuteBlockItem.isStorageInteraction(context)) ` 成立时提前返回 ` false `<br>` (player.isSecondaryUseActive()) ` 成立时提前返回 ` true `<br>` (context.getHand() == InteractionHand.MAIN_HAND && context.getItemInHand().getItem() instanceof ChuteBlockItem && (context.getLevel().getBlockEntity(context.getClickedPos()) instanceof IItemResourceHandlerHolder \|\| context.getLevel().getCapability( Capabilities.Item.BLOCK, context.getClickedPos(), context.getClickedFace() ) != null)) ` 成立时提前返回 ` true `<br>` (state.getMenuProvider(context.getLevel(), menuPos) != null \|\| entity instanceof MenuProvider \|\| entity instanceof StorageBlockEntity) ` 成立时提前返回 ` false `<br>[调用处 LargeBlockPlacePreviewEventListener.updatePreview](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L221) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PlacementInteractions.java#L33) |

## PlayerUtil

` public class PlayerUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PlayerUtil.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isFakePlayer(Player player) ` | 末尾返回 ` player instanceof FakePlayer `<br>[调用处 UtusanItem.finishUsingItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/UtusanItem.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PlayerUtil.java#L20) |
| ` public static boolean isClient(Player player) ` | 末尾返回 ` result.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PlayerUtil.java#L24) |
| ` public static List<ServerPlayer> searchPlayerByPos(Level level, BlockPos pos, int radius) ` | 搜索切比雪夫距离内的玩家们<br>参数 ` level ` 世界<br>参数 ` pos ` 搜索起点<br>参数 ` radius ` 距离<br>返回 玩家列表<br>末尾返回 ` List.of() `<br>[调用处 ModDispenserBehavior.ironIngot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L220) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/PlayerUtil.java#L36) |

## RecipeUtil

` public class RecipeUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ItemIngredientPredicate EMPTY_ITEM_INGREDIENT ` | 初值 ` ItemIngredientPredicate.Builder.item().build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L32) |
| ` public static LootContext emptyLootContext(ServerLevel level) ` | 末尾返回 ` new LootContext.Builder(new LootParams.Builder(level).create(ContextKeySet.EMPTY)).create(Optional.empty()) `<br>[调用处 AbstractMineralFountainRecipe.chance](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/AbstractMineralFountainRecipe.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L34) |
| ` public static List<Object2IntMap.Entry<Ingredient>> mergeIngredient(List<Ingredient> ingredients) ` | 末尾返回 ` new ArrayList<>(margeIngredients.object2IntEntrySet()) `<br>[调用处 JewelCraftingRecipe.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L38) |
| ` public static int getMaxCraftTime(IItemsInput input, List<Ingredient> ingredients) ` | 实现调用 ` ingredientFlags.put(ingredient, false) `<br>实现调用 ` input.items() `<br>实现调用 ` stack.isEmpty() `<br>[调用处 JewelCraftingRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L103) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L55) |
| ` public static List<ItemStack> getItems(ItemIngredientPredicate predicate, HolderLookup<Item> items) ` | 末尾返回 ` RecipeUtil.INGREDIENT_CACHE.get(hash) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L92) |

## ResentmentUtil

` public final class ResentmentUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void initializeBaseResentment(Mob mob) ` | 实现调用 ` mob.getPersistentData() `<br>实现调用 ` data.contains(ResentmentUtil.BASE_RESENTMENT_TAG) `<br>实现调用 ` mob.getUUID().getMostSignificantBits() `<br>[调用处 SavedEntity.fromEntity](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L55) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L20) |
| ` public static void setForcedResentment(Mob mob, int resentment) ` | 实现调用 ` ResentmentUtil.initializeBaseResentment(mob) `<br>实现调用 ` mob.getPersistentData().putInt(ResentmentUtil.FORCED_RESENTMENT_TAG, Mth.clamp(resentment, 0, 100)) `<br>实现调用 ` mob.getPersistentData() `<br>[调用处 ResinBlockItem.captureSpawner](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/ResinBlockItem.java#L76) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L27) |
| ` public static int getResentment(SavedEntity savedEntity, Level level) ` | ` (!savedEntity.isMonster()) ` 成立时提前返回 ` 0 `<br>` (!(entity instanceof LivingEntity livingEntity)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` ResentmentUtil.getResentment(livingEntity) `<br>[调用处 ResentmentAmberOutcome.accept](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L32) |
| ` public static int getResentment(LivingEntity entity) ` | ` (data.contains(ResentmentUtil.FORCED_RESENTMENT_TAG)) ` 成立时提前返回 ` Mth.clamp(data.getIntOr(ResentmentUtil.FORCED_RESENTMENT_TAG, 0), 0, 100) `<br>末尾返回 ` Mth.clamp(base + (int) harmfulEffectCount * 5 + healthBonus, 0, 100) `<br>[调用处 HasMobBlockItem.appendItemTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/HasMobBlockItem.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L39) |
