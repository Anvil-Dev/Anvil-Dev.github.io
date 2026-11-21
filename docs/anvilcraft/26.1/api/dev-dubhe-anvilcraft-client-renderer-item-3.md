# dev.dubhe.anvilcraft.client.renderer.item（RuinsBlockItemRenderer.Unbaked 至 StoredEnergyEmptyProperty）



## RuinsBlockItemRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L38)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L39) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L40) |
| ` @Override public RuinsBlockItemRenderer bake(BakingContext context) ` | 末尾返回 ` new RuinsBlockItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L42) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L47) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L38) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L38) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L38) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/RuinsBlockItemRenderer.java#L38) |

## SmartBlockPlacerItemModel

` public final class SmartBlockPlacerItemModel implements ItemModel `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L53)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void register(RegisterItemModelsEvent event) ` | 事件总线派发 ` RegisterItemModelsEvent ` 时调用。<br>执行 ` event.register(AnvilCraft.of("smart_block_placer"), Unbaked.CODEC) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L67) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (minecraft.level == null) ` 内调用 ` ANIMATIONS.clear() `<br>实现调用 ` ANIMATIONS.keySet() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L72) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>执行 ` ANIMATIONS.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L88) |
| ` @Override public void update( ItemStackRenderState output, ItemStack stack, ItemModelResolver resolver, ItemDisplayContext context, @Nullable ClientLevel level, @Nullable ItemOwner owner, int seed ) ` | 分支 ` (context != ItemDisplayContext.HEAD) ` 内调用 ` this.ordinaryModel.update(output, stack, resolver, context, level, owner, seed) `<br>实现调用 ` owner.asLivingEntity() `<br>实现调用 ` hasPower(wearer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L97) |

## SmartBlockPlacerItemModel.Unbaked

` public record Unbaked(Identifier model) implements ItemModel.Unbaked `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L201)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` Identifier.CODEC.fieldOf("model").xmap(Unbaked::new, Unbaked::model) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L202) |
| ` @Override public void resolveDependencies(ResolvableModel.Resolver resolver) ` | 执行 ` resolver.markDependency(this.model) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L204) |
| ` @Override public ItemModel bake(ItemModel.BakingContext context, Matrix4fc transformation) ` | 实现调用 ` context.blockModelBaker() `<br>实现调用 ` baker.getModel(this.model) `<br>实现调用 ` ItemModelUtils.plainModel(this.model).bake(context, transformation) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L209) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L219) |
| ` public Unbaked(Identifier model) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L201) |
| ` public Identifier model() ` | 读取 record 分量 ` model ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L201) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L201) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L201) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SmartBlockPlacerItemModel.java#L201) |

## SpectralSlingshotRenderer

` public class SpectralSlingshotRenderer implements SpecialModelRenderer<SpectralRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpectralSlingshotRenderer(ItemModelResolver resolver) ` | 执行 ` this.resolver = resolver `<br>[调用处 SpectralSlingshotRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L23) |
| ` @Override public @Nullable SpectralRenderState extractArgument(ItemStack stack) ` | ` (!stack.is(ModItems.SPECTRAL_SLINGSHOT)) ` 成立时提前返回 ` null `<br>` (chargedProjectiles == null \|\| chargedProjectiles.itemCopies().isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` new SpectralRenderState(chargedProjectiles.itemCopies().getFirst(), this.resolver) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L27) |
| ` @Override public void submit( @Nullable SpectralRenderState argument, PoseStack pose, SubmitNodeCollector collector, int lightCoords, int overlayCoords, boolean hasFoil, int outlineColor ) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(0F, 0.7F, 0.50F) `<br>实现调用 ` pose.mulPose(Axis.YP.rotationDegrees(90)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L35) |
| ` @Override public void getExtents(Consumer<Vector3fc> output) ` | 实现调用 ` pose.translate(0F, 0.7F, 0.50F) `<br>实现调用 ` pose.mulPose(Axis.YP.rotationDegrees(90)) `<br>实现调用 ` Axis.YP.rotationDegrees(90) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L62) |

## SpectralSlingshotRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<SpectralRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L70)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L71) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(Unbaked.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L72) |
| ` @Override public SpectralSlingshotRenderer bake(BakingContext context) ` | 末尾返回 ` new SpectralSlingshotRenderer(Minecraft.getInstance().getItemModelResolver()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L74) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` Unbaked.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L79) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L70) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L70) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L70) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralSlingshotRenderer.java#L70) |

## SpectralWeaponLauncherRenderer

` public class SpectralWeaponLauncherRenderer implements SpecialModelRenderer<SpectralRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpectralWeaponLauncherRenderer(ItemModelResolver resolver) ` | 执行 ` this.resolver = resolver `<br>[调用处 SpectralWeaponLauncherRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L23) |
| ` @Override public @Nullable SpectralRenderState extractArgument(ItemStack stack) ` | ` (!stack.is(ModItems.SPECTRAL_WEAPON_LAUNCHER)) ` 成立时提前返回 ` null `<br>` (chargedProjectiles == null \|\| chargedProjectiles.itemCopies().isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` new SpectralRenderState(chargedProjectiles.itemCopies().getFirst(), this.resolver) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L27) |
| ` @Override public void submit( @Nullable SpectralRenderState argument, PoseStack pose, SubmitNodeCollector collector, int lightCoords, int overlayCoords, boolean hasFoil, int outlineColor ) ` | 实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(0F, 7F / 16F, 7F / 8F) `<br>实现调用 ` pose.mulPose(Axis.YP.rotationDegrees(90)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L35) |
| ` @Override public void getExtents(Consumer<Vector3fc> output) ` | 实现调用 ` pose.translate(0F, 7F / 16F, 7F / 8F) `<br>实现调用 ` pose.mulPose(Axis.YP.rotationDegrees(90)) `<br>实现调用 ` Axis.YP.rotationDegrees(90) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L62) |

## SpectralWeaponLauncherRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<SpectralRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L70)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L71) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(Unbaked.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L72) |
| ` @Override public SpectralWeaponLauncherRenderer bake(BakingContext context) ` | 末尾返回 ` new SpectralWeaponLauncherRenderer(Minecraft.getInstance().getItemModelResolver()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L74) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` Unbaked.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L79) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L70) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L70) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L70) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/SpectralWeaponLauncherRenderer.java#L70) |

## StorageFluidPortItemRenderer

` public class StorageFluidPortItemRenderer implements SpecialModelRenderer<StorageFluidPortItemRenderer.Contents> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L24)

组合模型负责外壳；此层只绘制窗口里的液面或气体。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public @Nullable Contents extractArgument(ItemStack stack) ` | ` (data == null) ` 成立时提前返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L30) |
| ` @Override public void submit(@Nullable Contents contents, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, boolean hasFoil, int outlineColor) ` | 实现调用 ` contents.fluid().getFluidType().isLighterThanAir() `<br>实现调用 ` contents.fluid().getFluidType() `<br>实现调用 ` contents.fluid() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L42) |
| ` @Override public void getExtents(Consumer<Vector3fc> output) ` | 实现调用 ` output.accept(new Vector3f(x, y, z)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L54) |
| ` public StorageFluidPortItemRenderer() ` | Java 提供的无参构造器。<br>[调用处 StorageFluidPortItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L69) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L24) |

## StorageFluidPortItemRenderer.Contents

` public record Contents(FluidResource fluid, float fill, TextureAtlasSprite sprite, int color, Object animationKey) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Contents(FluidResource fluid, float fill, TextureAtlasSprite sprite, int color, Object animationKey) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27) |
| ` public FluidResource fluid() ` | 读取 record 分量 ` fluid ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27) |
| ` public float fill() ` | 读取 record 分量 ` fill ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27) |
| ` public TextureAtlasSprite sprite() ` | 读取 record 分量 ` sprite ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27) |
| ` public int color() ` | 读取 record 分量 ` color ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27) |
| ` public Object animationKey() ` | 读取 record 分量 ` animationKey ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L27) |

## StorageFluidPortItemRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<Contents> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L63)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L64) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L65) |
| ` @Override public StorageFluidPortItemRenderer bake(BakingContext context) ` | 末尾返回 ` new StorageFluidPortItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L67) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L72) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L63) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L63) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L63) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L63) |

## StoragePortItemRenderer

` public class StoragePortItemRenderer implements SpecialModelRenderer<StoragePortItemRenderer.Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L22)

外壳由组合模型中的普通模型绘制，此层仅添加六面标记。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public @Nullable Argument extractArgument(ItemStack stack) ` | ` (marked.isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` new Argument(state, state.isAnimated() ? new Object() : state.getModelIdentity()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L23) |
| ` @Override public void submit( @Nullable Argument argument, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, boolean hasFoil, int outlineColor ) ` | 实现调用 ` Direction.values() `<br>实现调用 ` pose.pushPose() `<br>实现调用 ` direction.getStepX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L34) |
| ` @Override public void getExtents(Consumer<Vector3fc> output) ` | 实现调用 ` output.accept(new Vector3f(x, y, z)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L55) |
| ` public StoragePortItemRenderer() ` | Java 提供的无参构造器。<br>[调用处 StoragePortItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L83) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L22) |

## StoragePortItemRenderer.Argument

` public record Argument(TrackingItemStackRenderState item, Object identity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L65)

静态标记复用原生模型身份，动画标记每帧刷新，避免图集缓存冻结动画。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean equals(@Nullable Object other) ` | 末尾返回 ` other instanceof Argument argument && this.identity.equals(argument.identity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L66) |
| ` @Override public int hashCode() ` | 末尾返回 ` this.identity.hashCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L71) |
| ` public Argument(TrackingItemStackRenderState item, Object identity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L65) |
| ` public TrackingItemStackRenderState item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L65) |
| ` public Object identity() ` | 读取 record 分量 ` identity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L65) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L65) |

## StoragePortItemRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L77)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L78) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L79) |
| ` @Override public StoragePortItemRenderer bake(BakingContext context) ` | 末尾返回 ` new StoragePortItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L81) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L86) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L77) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L77) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L77) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoragePortItemRenderer.java#L77) |

## StoredEnergyEmptyProperty

` public final class StoredEnergyEmptyProperty implements ConditionalItemModelProperty `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoredEnergyEmptyProperty.java#L18)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StoredEnergyEmptyProperty INSTANCE ` | 初值 ` new StoredEnergyEmptyProperty() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoredEnergyEmptyProperty.java#L20) |
| ` public static final MapCodec<StoredEnergyEmptyProperty> CODEC ` | 初值 ` MapCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoredEnergyEmptyProperty.java#L21) |
| ` @Override public boolean get(ItemStack stack, @Nullable ClientLevel level, @Nullable LivingEntity owner, int seed, ItemDisplayContext context) ` | 末尾返回 ` stack.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY).value() == 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoredEnergyEmptyProperty.java#L23) |
| ` @Override public MapCodec<? extends ConditionalItemModelProperty> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoredEnergyEmptyProperty.java#L28) |
| ` @SubscribeEvent public static void register(RegisterConditionalItemModelPropertyEvent event) ` | 事件总线派发 ` RegisterConditionalItemModelPropertyEvent ` 时调用。<br>执行 ` event.register(AnvilCraft.of("stored_energy_empty"), CODEC) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoredEnergyEmptyProperty.java#L33) |
| ` public StoredEnergyEmptyProperty() ` | Java 提供的无参构造器。<br>[调用处 StoredEnergyEmptyProperty](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoredEnergyEmptyProperty.java#L20) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StoredEnergyEmptyProperty.java#L18) |
