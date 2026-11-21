# dev.dubhe.anvilcraft.client.renderer.item（SpectralWeaponLauncherRenderer.SpectralWeaponLauncherExtensions 至 WrappingItemCustomRenderedModels.CustomRenderedModelWrapper）



## SpectralWeaponLauncherRenderer.SpectralWeaponLauncherExtensions

` public static class SpectralWeaponLauncherExtensions extends CustomRenderItemClientExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L154)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static SpectralWeaponLauncherExtensions of(BlockEntityWithoutLevelRenderer renderer) ` | 末尾返回 ` new SpectralWeaponLauncherExtensions(renderer) `<br>[调用处 SpectralWeaponLauncherItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/weapon/SpectralWeaponLauncherItem.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L159) |
| ` @Nullable @Override public HumanoidModel.ArmPose getArmPose(LivingEntity entityLiving, InteractionHand hand, ItemStack itemStack) ` | ` (itemStack.is(ModItems.SPECTRAL_WEAPON_LAUNCHER) && SpectralWeaponLauncherItem.isCharged(itemStack)) ` 成立时提前返回 ` HumanoidModel.ArmPose.CROSSBOW_HOLD `<br>末尾返回 ` super.getArmPose(entityLiving, hand, itemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L163) |

## StorageFluidPortItemRenderer

` public class StorageFluidPortItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L34)

仓储流体端口物品渲染器：先画方块模型，再在其玻璃窗口内画内部流体，与流体储罐物品一致。 窗口内缩沿用 StorageFluidPortBlockEntityRenderer#WINDOW\_INSET\_PIXELS， 保证物品栏 / 手中看到的水位与放置在世界中时一致。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static StorageFluidPortItemRenderer getInstance() ` | 末尾返回 ` instance `<br>[调用处 StorageFluidPortBlockItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StorageFluidPortBlockItem.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L48) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` stack.is(ModBlocks.STORAGE_FLUID_PORT.asItem()) `<br>实现调用 ` ModBlocks.STORAGE_FLUID_PORT.asItem() `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L59) |

## StoragePortItemRenderer

` public class StoragePortItemRenderer extends BlockEntityWithoutLevelRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L29)

仓储端口物品渲染器：与创造板条箱一致，在物品模型的六个面上渲染标记物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static StoragePortItemRenderer getInstance() ` | 末尾返回 ` instance `<br>[调用处 StoragePortBlockItem.initializeClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/StoragePortBlockItem.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L42) |
| ` @Override public void renderByItem( ItemStack stack, ItemDisplayContext displayContext, PoseStack poseStack, MultiBufferSource buffer, int packedLight, int packedOverlay ) ` | 实现调用 ` stack.is(ModBlocks.STORAGE_PORT.asItem()) `<br>实现调用 ` ModBlocks.STORAGE_PORT.asItem() `<br>实现调用 ` Minecraft.getInstance().getItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L53) |

## WrappingItemCustomRenderedModels

` public class WrappingItemCustomRenderedModels `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L17)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation FLUID_TANK ` | 初值 ` AnvilCraft.of("fluid_tank") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L19) |
| ` public static final ResourceLocation LARGE_FLUID_TANK ` | 初值 ` AnvilCraft.of("large_fluid_tank") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L20) |
| ` public static final ResourceLocation CREATIVE_FLUID_TANK ` | 初值 ` AnvilCraft.of("creative_fluid_tank") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L21) |
| ` public static final ResourceLocation CREATIVE_CRATE ` | 初值 ` AnvilCraft.of("creative_crate") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L22) |
| ` public static final ResourceLocation STORAGE_PORT ` | 初值 ` AnvilCraft.of("storage_port") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L23) |
| ` public static final ResourceLocation STORAGE_FLUID_PORT ` | 初值 ` AnvilCraft.of("storage_fluid_port") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L24) |
| ` public static final ResourceLocation SPECTRAL_WEAPON_LAUNCHER ` | 初值 ` AnvilCraft.of("spectral_weapon_launcher") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L25) |
| ` public static final ResourceLocation SPECTRAL_WEAPON_LAUNCHER_EXHAUSTED ` | 初值 ` AnvilCraft.of("spectral_weapon_launcher_exhausted") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L26) |
| ` public static final ResourceLocation FILTER ` | 初值 ` AnvilCraft.of("filter") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L27) |
| ` @SubscribeEvent public static void onModelBake(ModelEvent.ModifyBakingResult event) ` | 事件总线派发 ` ModelEvent.ModifyBakingResult ` 时调用。<br>实现调用 ` event.getModels() `<br>实现调用 ` swapModels(modelRegistry, ModelResourceLocation.inventory(FLUID_TANK)) `<br>实现调用 ` ModelResourceLocation.inventory(FLUID_TANK) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L29) |
| ` public static void swapModels(Map<ModelResourceLocation, BakedModel> modelRegistry, ModelResourceLocation modelLocation) ` | 实现调用 ` modelRegistry.get(modelLocation) `<br>实现调用 ` modelRegistry.put(modelLocation, wrapper) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L48) |
| ` public WrappingItemCustomRenderedModels() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L17) |

## WrappingItemCustomRenderedModels.CustomRenderedModelWrapper

` public static class CustomRenderedModelWrapper extends BakedModelWrapper<BakedModel> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L55)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CustomRenderedModelWrapper(BakedModel originalModel) ` | 执行 ` super(originalModel) `<br>[调用处 ItemOverridesMixin.wrapSpecific](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemOverridesMixin.java#L42) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L56) |
| ` @Override public boolean isCustomRenderer() ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L60) |
| ` @Override public BakedModel applyTransform( ItemDisplayContext cameraItemDisplayContext, PoseStack mat, boolean leftHand ) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/WrappingItemCustomRenderedModels.java#L67) |
