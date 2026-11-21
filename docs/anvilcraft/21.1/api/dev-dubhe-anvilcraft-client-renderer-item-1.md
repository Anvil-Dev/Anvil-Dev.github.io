# dev.dubhe.anvilcraft.client.renderer.item（AbstractItemInHandRenderer 至 SpectralWeaponLauncherRenderer）



## AbstractItemInHandRenderer

` public abstract class AbstractItemInHandRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void renderItem( LivingEntity entity, ItemStack itemStack, ItemDisplayContext displayContext, boolean leftHand, PoseStack poseStack, MultiBufferSource buffer, int seed ) ` | 执行 ` this.renderer.renderItem(entity, itemStack, displayContext, leftHand, poseStack, buffer, seed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L26) |
| ` public abstract void render( AbstractClientPlayer player, float partialTicks, float pitch, InteractionHand hand, float swingProgress, ItemStack stack, float equippedProgress, PoseStack poseStack, MultiBufferSource buffer, int combinedLight, CallbackInfo ci ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L38) |
| ` public void setOffHandItem(final ItemStack offHandItem) ` | 执行 ` this.offHandItem = offHandItem `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L14) |
| ` public void setMainHandItem(final ItemStack mainHandItem) ` | 执行 ` this.mainHandItem = mainHandItem `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L14) |

## CelestialForgingAnvilItemRenderer

` public class CelestialForgingAnvilItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L50)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>执行 ` clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L69) |
| ` @SubscribeEvent public static void modelsBaked(ModelEvent.BakingCompleted event) ` | 事件总线派发 ` ModelEvent.BakingCompleted ` 时调用。<br>执行 ` clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L74) |
| ` @SubscribeEvent public static void recipesUpdated(RecipesUpdatedEvent event) ` | 事件总线派发 ` RecipesUpdatedEvent ` 时调用。<br>执行 ` clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L79) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` poseStack.pushPose() `<br>分支 ` (displayContext != ItemDisplayContext.GUI) ` 内调用 ` poseStack.translate(0, 1, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L90) |

## CelestialForgingAnvilItemRenderer.ItemExtensions

` public static class ItemExtensions implements IClientItemExtensions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L163)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public BlockEntityWithoutLevelRenderer getCustomRenderer() ` | 末尾返回 ` this.renderer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L166) |
| ` @Override public boolean applyForgeHandTransform( PoseStack poseStack, LocalPlayer player, HumanoidArm arm, ItemStack stack, float partialTick, float equipProgress, float swingProgress ) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L172) |
| ` public ItemExtensions() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftClient.registerClientExtensions](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L118) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L163) |

## CrabClawItemInHandRenderer

` public class CrabClawItemInHandRenderer extends AbstractItemInHandRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void render( AbstractClientPlayer player, float partialTicks, float pitch, InteractionHand hand, float swingProgress, ItemStack stack, float equippedProgress, PoseStack poseStack, MultiBufferSource buffer, int combinedLight, CallbackInfo ci ) ` | 分支 ` (hand == InteractionHand.OFF_HAND) ` 内调用 ` poseStack.popPose() `<br>分支 ` (hand == InteractionHand.OFF_HAND) ` 内调用 ` ci.cancel() `<br>实现调用 ` player.getMainArm() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L208) |

## CreativeCrateItemRenderer

` public class CreativeCrateItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CreativeCrateItemRenderer getInstance() ` | 末尾返回 ` instance `<br>[调用处 CreativeCrateBlockItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeCrateBlockItem.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L41) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` stack.is(ModBlocks.CREATIVE_CRATE.asItem()) `<br>实现调用 ` ModBlocks.CREATIVE_CRATE.asItem() `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L52) |

## CreativeFluidTankItemRenderer

` public class CreativeFluidTankItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CreativeFluidTankItemRenderer getInstance() ` | 末尾返回 ` instance `<br>[调用处 CreativeFluidTankBlockItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeFluidTankBlockItem.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L39) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` stack.is(ModBlocks.CREATIVE_FLUID_TANK.asItem()) `<br>实现调用 ` ModBlocks.CREATIVE_FLUID_TANK.asItem() `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L50) |

## CustomRenderItemClientExtension

` public class CustomRenderItemClientExtension implements IClientItemExtensions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CustomRenderItemClientExtension.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static CustomRenderItemClientExtension of(BlockEntityWithoutLevelRenderer renderer) ` | 末尾返回 ` new CustomRenderItemClientExtension(renderer) `<br>[调用处 CreativeCrateBlockItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/CreativeCrateBlockItem.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CustomRenderItemClientExtension.java#L13) |
| ` @Override public BlockEntityWithoutLevelRenderer getCustomRenderer() ` | 末尾返回 ` this.renderer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CustomRenderItemClientExtension.java#L17) |

## DiskItemRenderer

` public class DiskItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static DiskItemRenderer getInstance() ` | 末尾返回 ` Holder.INSTANCE `<br>[调用处 DiskItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/DiskItem.java#L50) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L21) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext context, PoseStack pose, MultiBufferSource buffers, int light, int overlay ) ` | 实现调用 ` stack.is(ModItems.DISK) `<br>实现调用 ` stack.is(ModItems.STRUCTURE_DISK) `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L25) |

## EnergyWeaponArmRenderer

` public final class EnergyWeaponArmRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponArmRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render( PoseStack pose, MultiBufferSource buffer, int light, AbstractClientPlayer player, HumanoidArm arm, Matrix4f transform ) ` | 实现调用 ` player.getSkin().model() `<br>实现调用 ` player.getSkin() `<br>实现调用 ` player.isModelPartShown(left ? PlayerModelPart.LEFT_SLEEVE : PlayerModelPart.RIGHT_SLEEVE) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderArm](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L255) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponArmRenderer.java#L25) |

## EnergyWeaponDrawAnimation

` public final class EnergyWeaponDrawAnimation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void observe(ItemStack held, int selectedSlot) ` | 实现调用 ` held.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L16) |
| ` public float render(ItemStack shown, float vanillaEquip, long now, boolean paused) ` | ` (shown.getItem() != this.item) ` 成立时提前返回 ` vanillaEquip `<br>末尾返回 ` this.lowered ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L25) |
| ` public boolean isReady(ItemStack weapon) ` | 末尾返回 ` !this.waiting && this.item == weapon.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L38) |
| ` public float lowered() ` | 末尾返回 ` this.lowered ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L42) |
| ` public void reset() ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L46) |
| ` public EnergyWeaponDrawAnimation() ` | Java 提供的无参构造器。<br>[调用处 EnergyWeaponFirstPersonRenderer](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L42) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L7) |

## EnergyWeaponFirstPersonRenderer

` public final class EnergyWeaponFirstPersonRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L35)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void updateReload(ItemStack weapon, ItemStack capacitor, int ticks, int slot) ` | 实现调用 ` reloadWeapon.isEmpty() `<br>实现调用 ` Util.getMillis() `<br>分支 ` (starting) ` 内调用 ` Minecraft.getInstance() `<br>[调用处 EnergyWeaponReloadPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L58) |
| ` public static void captureBeam(PoseStack poseStack, Vec3 end, float partialTick) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` new Matrix4f(RenderSystem.getProjectionMatrix()) .mul(RenderSystem.getModelViewMatrix()) `<br>实现调用 ` RenderSystem.getProjectionMatrix() `<br>[调用处 WeaponBeamRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L69) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L73) |
| ` @SubscribeEvent public static void captureHoldingProjection(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.options.getCameraType().isFirstPerson() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L84) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` animation.reset() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L108) |
| ` public static boolean hasHoldingAnimation(ItemStack stack) ` | 末尾返回 ` stack.getItem() instanceof LaserGunItem \|\| stack.getItem() instanceof CorruptedBeaconActivatorItem \|\| stack.getItem() instanceof TeslaGunItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L117) |
| ` @SubscribeEvent public static void renderHand(RenderHandEvent event) ` | 事件总线派发 ` RenderHandEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isAlive() `<br>实现调用 ` player.isScoping() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L122) |

## EnergyWeaponReloadPose

` public final class EnergyWeaponReloadPose `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Matrix4f drawing(float lowered, float side) ` | 末尾返回 ` new Matrix4f().translation(side * 0.16F * amount, -1.25F * amount, 0) .rotateZ(radians(side * 12 * amount)) .rotateX(radians(-10 * amount)) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderHand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L150) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L17) |
| ` public static Matrix4f holding(Vector3f muzzle, Vector3f target, float muzzleZ, float roll) ` | 实现调用 ` new Matrix4f().translation(muzzle) `<br>实现调用 ` new Quaternionf().rotationTo(new Vector3f(0, 0, -1), new Vector3f(target).sub(muzzle).normalize()) `<br>实现调用 ` new Vector3f(target).sub(muzzle).normalize() `<br>[调用处 EnergyWeaponFirstPersonRenderer.holdingPose](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L185) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L24) |
| ` public static Matrix4f weapon(float elapsed, float side) ` | 末尾返回 ` weapon(holding(new Vector3f(side * 0.28F, -0.2F, -1.1F), new Vector3f(0, 0, -64), -5, 0), elapsed, side) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L32) |
| ` public static Matrix4f weapon(Matrix4f holding, float elapsed, float side) ` | 末尾返回 ` blend(holding, charging, lift) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L36) |
| ` public static Matrix4f weapon(Matrix4f holding, Matrix4f attacking, float elapsed, float side, float attackBlend) ` | 末尾返回 ` blend(weapon(holding, elapsed, side), attacking, attackBlend) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L221) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L47) |
| ` public static float attackMuzzleDepth(float elapsed) ` | 末尾返回 ` 1.1F + 0.25F * lift(elapsed) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L216) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L51) |
| ` public static float approachAttack(float current, boolean attacking, float milliseconds) ` | 末尾返回 ` target + (current - target) * (float) Math.exp(-Math.clamp(milliseconds, 0, 100) / duration) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L206) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L55) |
| ` public static Vector3f capacitorGrip(Matrix4f capacitor, float side) ` | 末尾返回 ` capacitor.transformPosition(new Vector3f(-side * 0.65F, 0.35F, 1.25F)) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L230) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L61) |
| ` public static Vector3f weaponGrip(Matrix4f weapon, float side) ` | 末尾返回 ` weapon.transformPosition(new Vector3f(0, -5.0F / 16, 3.0F / 16)).add(side * 0.045F, -0.045F, 0) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderWeapon](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L249) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L65) |
| ` public static boolean showsCapacitor(float elapsed) ` | 末尾返回 ` elapsed >= 8 && elapsed < 34 `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L223) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L69) |
| ` public static Matrix4f capacitor(float elapsed, float side, boolean regular) ` | 实现调用 ` smooth((elapsed - 4) / 11) `<br>实现调用 ` smooth((elapsed - 29) / 9) `<br>实现调用 ` smooth((elapsed - 15) / 3) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L73) |
| ` public static Matrix4f capacitor(float elapsed, float side, boolean regular, float attackBlend) ` | 末尾返回 ` blend(capacitor(elapsed, side, regular), attacking, attackBlend) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L89) |
| ` public static Matrix4f capacitor( Matrix4f holding, Matrix4f attacking, float elapsed, float side, boolean regular, float attackBlend ) ` | ` (contact <= 0) ` 成立时提前返回 ` free `<br>末尾返回 ` blend(free, attached, contact) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderReload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L225) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L103) |
| ` public static Matrix4f arm(Vector3f grip, float side) ` | 末尾返回 ` new Matrix4f().translation(grip) .rotate(new Quaternionf().rotationTo(new Vector3f(0, -1, 0), towardShoulder.normalize())) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderArm](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L256) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponReloadPose.java#L117) |

## FilterItemRenderer

` public class FilterItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static FilterItemRenderer getInstance() ` | 末尾返回 ` instance `<br>[调用处 FilterItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/FilterItem.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L49) |
| ` public static void withBodyOnly(Runnable action) ` | 只渲染过滤器本体，跳过内容物与黑名单屏障。 供需要自行控制覆盖层顺序的调用方使用（如控制阀过滤格：先画流体图标、再画屏障）。<br>参数 ` action ` 需要在此期间执行的渲染操作<br>实现调用 ` action.run() `<br>[调用处 ControlValveScreen.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L401) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L67) |
| ` public static boolean isDenyList(ItemStack stack) ` | 过滤器是否为黑名单（决定是否需要在其上叠加屏障）。<br>参数 ` stack ` 过滤器物品<br>返回 黑名单时返回 true<br>末尾返回 ` FilterItemRenderer.readDisplaying(stack).denyList() `<br>[调用处 ControlValveScreen.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L405) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L82) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` stack.is(ModItems.FILTER) `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FilterItemRenderer.java#L86) |

## FluidTankItemRenderer

` public class FluidTankItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static FluidTankItemRenderer getInstance() ` | 末尾返回 ` instance `<br>[调用处 FluidTankBlockItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FluidTankBlockItem.java#L50) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L39) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` stack.is(ModBlocks.FLUID_TANK.asItem()) `<br>实现调用 ` ModBlocks.FLUID_TANK.asItem() `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/FluidTankItemRenderer.java#L50) |

## HasMobBlockItemRenderer

` public class HasMobBlockItemRenderer extends AbstractItemInHandRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void renderGuiItem( GuiGraphics guiGraphics, ItemStack stack, int x, int y, int guiOffset ) ` | 实现调用 ` HasMobBlockItemRenderer.getMobFromItem(stack) `<br>实现调用 ` guiGraphics.pose() `<br>实现调用 ` pose.pushPose() `<br>[调用处 GuiGraphicsMixin.renderExtra](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GuiGraphicsMixin.java#L96) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L25) |
| ` @Override public void render( AbstractClientPlayer player, float partialTicks, float pitch, InteractionHand hand, float swingProgress, ItemStack stack, float equippedProgress, PoseStack poseStack, MultiBufferSource buffer, int combinedLight, CallbackInfo ci ) ` | 实现调用 ` HasMobBlockItemRenderer.getMobFromItem(stack) `<br>实现调用 ` poseStack.translate(0.0f, 0.14f, 0.0f) `<br>实现调用 ` poseStack.pushPose() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L63) |
| ` public static @Nullable Entity getMobFromItem(ItemStack stack) ` | ` (!(stack.getItem() instanceof HasMobBlockItem)) ` 成立时提前返回 ` null `<br>` (Minecraft.getInstance().level == null) ` 成立时提前返回 ` null `<br>末尾返回 ` HasMobBlockItem.getMobFromItem(Minecraft.getInstance().level, stack) `<br>[调用处 HasMobBlockItemRenderer.renderGuiItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/HasMobBlockItemRenderer.java#L107) |

## IExtraItemDisplayRenderer

` public class IExtraItemDisplayRenderer extends AbstractItemInHandRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IExtraItemDisplayRenderer.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void renderGuiExtra( PoseStack pose, IGuiItemRenderer itemRenderer, LivingEntity entity, Level level, ItemStack stack, int x, int y, int seed, int guiOffset, int recursion, int maxRecursion, Consumer<Integer> recursionSetter ) ` | 实现调用 ` stack.getItem() `<br>实现调用 ` item.getDisplayedItem(stack) `<br>实现调用 ` innerStack.isEmpty() `<br>[调用处 GuiGraphicsMixin.renderExtra](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GuiGraphicsMixin.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IExtraItemDisplayRenderer.java#L23) |
| ` @Override public void render( AbstractClientPlayer player, float partialTicks, float pitch, InteractionHand hand, float swingProgress, ItemStack stack, float equippedProgress, PoseStack poseStack, MultiBufferSource buffer, int combinedLight, CallbackInfo ci ) ` | 实现调用 ` stack.getItem() `<br>实现调用 ` player.getMainArm() `<br>实现调用 ` player.getMainArm().getOpposite() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IExtraItemDisplayRenderer.java#L51) |

## IGuiItemRenderer

` public interface IGuiItemRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IGuiItemRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void renderItem( @Nullable LivingEntity entity, @Nullable Level level, ItemStack stack, int x, int y, int seed, int guiOffset ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IGuiItemRenderer.java#L10) |

## IItemRenderer

` public interface IItemRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IItemRenderer.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void renderItem( LivingEntity entity, ItemStack itemStack, ItemDisplayContext displayContext, boolean leftHand, PoseStack poseStack, MultiBufferSource buffer, int seed ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/IItemRenderer.java#L10) |

## ItemInHandRendererManager

` public class ItemInHandRendererManager extends AbstractItemInHandRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final CrabClawItemInHandRenderer crabClawItemRenderer ` | 字段类型为 ` CrabClawItemInHandRenderer ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L20) |
| ` public final IExtraItemDisplayRenderer extraItemRenderer ` | 字段类型为 ` IExtraItemDisplayRenderer ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L21) |
| ` public final HasMobBlockItemRenderer hasMobBlockItemRenderer ` | 字段类型为 ` HasMobBlockItemRenderer ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L22) |
| ` public ItemInHandRendererManager(ItemRenderer itemRenderer, IItemRenderer renderer) ` | 实现调用 ` super(itemRenderer, renderer) `<br>实现调用 ` this.renderers.add(this.crabClawItemRenderer) `<br>实现调用 ` this.renderers.add(this.extraItemRenderer) `<br>[调用处 ItemInHandRendererMixin.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemInHandRendererMixin.java#L93) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L24) |
| ` @Override public void setMainHandItem(ItemStack mainHandItem) ` | 实现调用 ` this.renderers.forEach(renderer -> renderer.setMainHandItem(mainHandItem)) `<br>实现调用 ` super.setMainHandItem(mainHandItem) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L34) |
| ` @Override public void setOffHandItem(ItemStack offHandItem) ` | 实现调用 ` this.renderers.forEach(renderer -> renderer.setOffHandItem(offHandItem)) `<br>实现调用 ` super.setOffHandItem(offHandItem) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L40) |
| ` public void render( AbstractClientPlayer player, float partialTicks, float pitch, InteractionHand hand, float swingProgress, ItemStack stack, float equippedProgress, PoseStack poseStack, MultiBufferSource buffer, int combinedLight, CallbackInfo ci ) ` | 实现调用 ` BuildingRodItemRenderer.usesToolClaw(player) `<br>实现调用 ` this.crabClawItemRenderer.setOffHandItem(ModItems.CRAB_CLAW.asStack()) `<br>实现调用 ` ModItems.CRAB_CLAW.asStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemInHandRendererManager.java#L46) |

## ItemSlotClipping

` public class ItemSlotClipping `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemSlotClipping.java#L25)

物品栏裁剪：把渲染尺寸超过物品格子的物品模型裁剪到格子范围内。 通过 #register(Item...) 或 #register(Predicate) 配置需要裁剪的物品； 渲染时把绘制限制在以物品实际屏幕位置为左上角、边长 &#123;@value #SLOT\_SIZE&#125; 的物品格内， 超出部分被裁掉。 物品的 (x, y) 可能是 姿态局部坐标 （如容器屏把姿态平移了 leftPos/topPos 后才渲染槽位），因此开启裁剪时用姿态矩阵把坐标换算到 绝对屏幕坐标 ，否则裁剪窗口会与物品实际位置错位。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int SLOT_SIZE ` | 标准物品格边长（px）。<br>初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemSlotClipping.java#L27) |
| ` public static void register(Item... items) ` | 注册需要裁剪到物品格内的物品。<br>实现调用 ` CLIPPED_ITEMS.add(item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemSlotClipping.java#L37) |
| ` public static void register(Predicate<ItemStack> predicate) ` | 注册需要裁剪的自定义判定（例如按物品标签、物品类型等）。<br>执行 ` CLIPPED_PREDICATES.add(predicate) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemSlotClipping.java#L44) |
| ` public static boolean shouldClip(ItemStack stack) ` | 该物品堆当前是否会被物品格裁剪。<br>` (CLIPPING_DISABLED.get()) ` 成立时提前返回 ` false `<br>` (stack.isEmpty()) ` 成立时提前返回 ` false `<br>` (CLIPPED_ITEMS.contains(stack.getItem())) ` 成立时提前返回 ` true `<br>末尾返回 ` false `<br>[调用处 GuiGraphicsMixin.renderExtra](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GuiGraphicsMixin.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemSlotClipping.java#L49) |
| ` public static void runWithoutClip(Runnable render) ` | 在 render 执行期间临时禁用物品格裁剪， 用于轮盘等不以物品格为边界的渲染场景。<br>实现调用 ` CLIPPING_DISABLED.get() `<br>实现调用 ` CLIPPING_DISABLED.set(true) `<br>实现调用 ` render.run() `<br>[调用处 WheelLifecycleEventListener.renderWheelItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/WheelLifecycleEventListener.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemSlotClipping.java#L71) |
| ` public static void enableClip(GuiGraphics guiGraphics, ItemStack stack, int x, int y) ` | 开启对 (x, y) 处物品的裁剪（姿态局部坐标 → 绝对屏幕坐标换算）。 需与 #disableClip 配对调用。<br>实现调用 ` shouldClip(stack) `<br>实现调用 ` guiGraphics.pose().last().pose().transformPosition(x, y, 0.0f, screenPos) `<br>实现调用 ` guiGraphics.pose().last().pose() `<br>[调用处 GuiGraphicsMixin.clipItem](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GuiGraphicsMixin.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemSlotClipping.java#L85) |
| ` public static void disableClip(GuiGraphics guiGraphics) ` | 关闭由 #enableClip 开启的裁剪。<br>执行 ` guiGraphics.disableScissor() `<br>[调用处 GuiGraphicsMixin.renderExtra](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/GuiGraphicsMixin.java#L99) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemSlotClipping.java#L97) |
| ` public static void clip(GuiGraphics guiGraphics, ItemStack stack, int x, int y, Runnable render) ` | 包裹一次物品渲染：仅当 stack 已注册裁剪时，把 render 的绘制限制在 物品格范围内；否则原样执行。<br>实现调用 ` shouldClip(stack) `<br>分支 ` (!shouldClip(stack)) ` 内调用 ` render.run() `<br>实现调用 ` enableClip(guiGraphics, stack, x, y) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemSlotClipping.java#L105) |

## ItemUseAnimationTransform

` public final class ItemUseAnimationTransform `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemUseAnimationTransform.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean applyCrossbowCharge( PoseStack poseStack, LocalPlayer player, HumanoidArm arm, ItemStack stack, float partialTick, float equipProgress, int chargeTicks ) ` | ` (!isUsingArm(player, arm)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 ResonatorItem.applyForgeHandTransform](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/ResonatorItem.java#L106) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemUseAnimationTransform.java#L15) |
| ` public static boolean applySwordBlock( PoseStack poseStack, LocalPlayer player, HumanoidArm arm, float equipProgress ) ` | ` (!isUsingArm(player, arm)) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 HeavyHalberdItem.applyForgeHandTransform](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/HeavyHalberdItem.java#L245) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/ItemUseAnimationTransform.java#L48) |

## LargeFluidTankItemRenderer

` public class LargeFluidTankItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L31)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static LargeFluidTankItemRenderer getInstance() ` | 末尾返回 ` instance `<br>[调用处 LargeFluidTankBlockItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/LargeFluidTankBlockItem.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L46) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` stack.is(ModBlocks.LARGE_FLUID_TANK.asItem()) `<br>实现调用 ` ModBlocks.LARGE_FLUID_TANK.asItem() `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/LargeFluidTankItemRenderer.java#L57) |

## NegativeShapeItemModel

` public final class NegativeShapeItemModel extends BakedModelWrapper<BakedModel> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/NegativeShapeItemModel.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public NegativeShapeItemModel(BakedModel original) ` | 实现调用 ` super(original) `<br>实现调用 ` List.of(Direction.values()) `<br>实现调用 ` Direction.values() `<br>[调用处 NegativeShapeItemModelMixin.anvilcraft$lightNegativeShape](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/client/NegativeShapeItemModelMixin.java#L23) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/NegativeShapeItemModel.java#L26) |
| ` @Override public BakedModel applyTransform(ItemDisplayContext context, PoseStack pose, boolean leftHand) ` | 末尾返回 ` transformed == this.originalModel ? this : transformed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/NegativeShapeItemModel.java#L55) |
| ` @Override public List<BakedModel> getRenderPasses(ItemStack stack, boolean fabulous) ` | 末尾返回 ` this.passes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/NegativeShapeItemModel.java#L61) |

## RuinsBlockItemRenderer

` public class RuinsBlockItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext context, PoseStack pose, MultiBufferSource buffers, int light, int overlay ) ` | 执行 ` CelestialBodyRenderer.renderEndGatewayBody(pose, buffers) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L19) |

## RuinsBlockItemRenderer.ItemExtensions

` public static class ItemExtensions implements IClientItemExtensions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public BlockEntityWithoutLevelRenderer getCustomRenderer() ` | 末尾返回 ` this.renderer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L30) |
| ` public ItemExtensions() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftClient.registerClientExtensions](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L117) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L26) |

## SmartBlockPlacerItemRenderer

` public class SmartBlockPlacerItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemRenderer.java#L31)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void withWearer(LivingEntity wearer, Runnable render) ` | 实现调用 ` render.run() `<br>[调用处 ItemInHandRendererMixin.anvilcraft$renderSmartPlacerHelmet](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemInHandRendererMixin.java#L62) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemRenderer.java#L44) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (minecraft.level == null) ` 内调用 ` ANIMATIONS.clear() `<br>实现调用 ` ANIMATIONS.keySet() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemRenderer.java#L54) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext context, PoseStack pose, MultiBufferSource buffer, int light, int overlay ) ` | 实现调用 ` Minecraft.getInstance() `<br>分支 ` (context != ItemDisplayContext.HEAD) ` 内调用 ` minecraft.getItemRenderer() `<br>分支 ` (context != ItemDisplayContext.HEAD) ` 内调用 ` renderer.getItemModelShaper().getItemModel(stack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemRenderer.java#L74) |

## SmartBlockPlacerItemRenderer.ItemExtensions

` public static class ItemExtensions implements IClientItemExtensions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemRenderer.java#L117)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public BlockEntityWithoutLevelRenderer getCustomRenderer() ` | 末尾返回 ` this.renderer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemRenderer.java#L120) |
| ` public ItemExtensions() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftClient.registerClientExtensions](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L119) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemRenderer.java#L117) |

## SpectralSlingshotRenderer

` public class SpectralSlingshotRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static SpectralSlingshotRenderer getInstance() ` | 末尾返回 ` instance `<br>[调用处 SpectralSlingshotItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L35) |
| ` public SpectralSlingshotRenderer(BlockEntityRenderDispatcher blockEntityRenderDispatcher, EntityModelSet entityModelSet) ` | 执行 ` super(blockEntityRenderDispatcher, entityModelSet) `<br>[调用处 SpectralSlingshotRenderer.getInstance](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L37) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L45) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` super.renderByItem(stack, displayContext, poseStack, buffer, packedLight, packedOverlay) `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L49) |
| ` public static void renderItemAtCurrentPoseStack( ItemRenderer itemRenderer, ItemStack itemStack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource bufferSource, int combinedLight, int combinedOverlay, BakedModel model ) ` | 实现调用 ` displayContext.firstPerson() `<br>分支 ` (displayContext != ItemDisplayContext.GUI && !displayContext.firstPerson()) ` 内调用 ` itemStack.getItem() `<br>分支 ` (var12 instanceof BlockItem blockitem) ` 内调用 ` blockitem.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L102) |

## SpectralSlingshotRenderer.SpectralSlingshotExtensions

` public static class SpectralSlingshotExtensions extends CustomRenderItemClientExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L143)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static SpectralSlingshotExtensions of(BlockEntityWithoutLevelRenderer renderer) ` | 末尾返回 ` new SpectralSlingshotExtensions(renderer) `<br>[调用处 SpectralSlingshotItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/SpectralSlingshotItem.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L148) |
| ` @Nullable @Override public HumanoidModel.ArmPose getArmPose(LivingEntity entityLiving, InteractionHand hand, ItemStack itemStack) ` | ` (itemStack.is(ModItems.SPECTRAL_SLINGSHOT) && SpectralSlingshotItem.isCharged(itemStack)) ` 成立时提前返回 ` HumanoidModel.ArmPose.CROSSBOW_HOLD `<br>末尾返回 ` super.getArmPose(entityLiving, hand, itemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L152) |

## SpectralWeaponLauncherRenderer

` public class SpectralWeaponLauncherRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static SpectralWeaponLauncherRenderer getInstance() ` | 末尾返回 ` instance `<br>[调用处 SpectralWeaponLauncherItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/weapon/SpectralWeaponLauncherItem.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L35) |
| ` public SpectralWeaponLauncherRenderer(BlockEntityRenderDispatcher blockEntityRenderDispatcher, EntityModelSet entityModelSet) ` | 执行 ` super(blockEntityRenderDispatcher, entityModelSet) `<br>[调用处 SpectralWeaponLauncherRenderer.getInstance](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L37) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L45) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` super.renderByItem(stack, displayContext, poseStack, buffer, packedLight, packedOverlay) `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L49) |
| ` public static void renderItemAtCurrentPoseStack( ItemRenderer itemRenderer, ItemStack itemStack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource bufferSource, int combinedLight, int combinedOverlay, BakedModel model ) ` | 实现调用 ` displayContext.firstPerson() `<br>分支 ` (displayContext != ItemDisplayContext.GUI && !displayContext.firstPerson()) ` 内调用 ` itemStack.getItem() `<br>分支 ` (var12 instanceof BlockItem blockitem) ` 内调用 ` blockitem.getBlock() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L113) |
