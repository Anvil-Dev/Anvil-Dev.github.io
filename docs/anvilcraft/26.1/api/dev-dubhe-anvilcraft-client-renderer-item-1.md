# dev.dubhe.anvilcraft.client.renderer.item（AbstractItemInHandRenderer 至 EnergyWeaponFirstPersonRenderer）



## AbstractItemInHandRenderer

` public abstract class AbstractItemInHandRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void renderItem( LivingEntity entity, ItemStack itemStack, ItemDisplayContext displayContext, PoseStack poseStack, SubmitNodeCollector collector, int lightCoords ) ` | 执行 ` this.renderer.renderItem(entity, itemStack, displayContext, poseStack, collector, lightCoords) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L25) |
| ` public abstract boolean render( AbstractClientPlayer player, float partialTicks, float pitch, InteractionHand hand, float swingProgress, ItemStack stack, float equippedProgress, PoseStack poseStack, SubmitNodeCollector collector, int lightCoords ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L36) |
| ` public void setOffHandItem(final ItemStack offHandItem) ` | 执行 ` this.offHandItem = offHandItem `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L13) |
| ` public void setMainHandItem(final ItemStack mainHandItem) ` | 执行 ` this.mainHandItem = mainHandItem `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/AbstractItemInHandRenderer.java#L13) |

## CelestialAnvilItemExtensions

` public final class CelestialAnvilItemExtensions implements IClientItemExtensions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialAnvilItemExtensions.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean applyForgeHandTransform(PoseStack pose, LocalPlayer player, HumanoidArm arm, ItemStack stack, float partialTick, float equipProgress, float swingProgress) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialAnvilItemExtensions.java#L16) |
| ` public CelestialAnvilItemExtensions() ` | Java 提供的无参构造器。<br>[调用处 AnvilCraftClient.registerClientExtensions](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/AnvilCraftClient.java#L123) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialAnvilItemExtensions.java#L15) |

## CelestialForgingAnvilItemRenderer

` public final class CelestialForgingAnvilItemRenderer implements SpecialModelRenderer<CelestialForgingAnvilItemRenderer.Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L46)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CelestialForgingAnvilItemRenderer(boolean head) ` | 执行 ` this.head = head `<br>[调用处 CelestialForgingAnvilItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L204) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L52) |
| ` @SubscribeEvent public static void reload(ModelEvent.BakingCompleted event) ` | 事件总线派发 ` ModelEvent.BakingCompleted ` 时调用。<br>执行 ` clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L56) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>执行 ` clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L61) |
| ` @SubscribeEvent public static void recipesReceived(RecipesReceivedEvent event) ` | 事件总线派发 ` RecipesReceivedEvent ` 时调用。<br>执行 ` clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L66) |
| ` @Override public @Nullable Argument extractArgument(ItemStack stack) ` | ` (client.level == null) ` 成立时提前返回 ` null `<br>` (!(candidate instanceof CFARenderer renderer)) ` 成立时提前返回 ` null `<br>末尾返回 ` new Argument(renderer, state, this.head ? preview.parts() : List.of(), bounds(state), preview.entity.getBodySeed(), key) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L77) |
| ` @Override public void submit(@Nullable Argument argument, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, boolean foil, int outlineColor) ` | 分支 ` (this.head) ` 内调用 ` argument.parts() `<br>分支 ` (this.head) ` 内调用 ` pose.pushPose() `<br>分支 ` (this.head) ` 内调用 ` pose.translate(part.offset().getX(), part.offset().getY(), part.offset().getZ()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L127) |
| ` @Override public void getExtents(Consumer<Vector3fc> output) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L144) |

## CelestialForgingAnvilItemRenderer.Argument

` public record Argument(CFARenderer renderer, CFARenderState state, List<Part> parts, AABB bounds, long seed, Object identity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L182)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Argument(CFARenderer renderer, CFARenderState state, List<Part> parts, AABB bounds, long seed) ` | 执行 ` this(renderer, state, parts, bounds, seed, state) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L183) |
| ` @Override public boolean equals(Object other) ` | 实现调用 ` this.identity.equals(argument.identity) `<br>实现调用 ` this.parts.equals(argument.parts) `<br>实现调用 ` this.bounds.equals(argument.bounds) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L187) |
| ` @Override public int hashCode() ` | 末尾返回 ` Objects.hash(this.renderer, this.identity, this.parts, this.bounds, this.seed) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L193) |
| ` public CFARenderer renderer() ` | 读取 record 分量 ` renderer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L182) |
| ` public CFARenderState state() ` | 读取 record 分量 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L182) |
| ` public List<Part> parts() ` | 读取 record 分量 ` parts ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L182) |
| ` public AABB bounds() ` | 读取 record 分量 ` bounds ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L182) |
| ` public long seed() ` | 读取 record 分量 ` seed ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L182) |
| ` public Object identity() ` | 读取 record 分量 ` identity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L182) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L182) |

## CelestialForgingAnvilItemRenderer.Part

` public record Part(BlockPos offset, BlockModelRenderState model) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L179)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Part(BlockPos offset, BlockModelRenderState model) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L179) |
| ` public BlockPos offset() ` | 读取 record 分量 ` offset ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L179) |
| ` public BlockModelRenderState model() ` | 读取 record 分量 ` model ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L179) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L179) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L179) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L179) |

## CelestialForgingAnvilItemRenderer.Unbaked

` public record Unbaked(boolean head) implements SpecialModelRenderer.Unbaked<Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L199)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` Codec.BOOL.optionalFieldOf("head", false).xmap(Unbaked::new, Unbaked::head) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L200) |
| ` @Override public CelestialForgingAnvilItemRenderer bake(BakingContext context) ` | 末尾返回 ` new CelestialForgingAnvilItemRenderer(this.head) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L202) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L207) |
| ` public Unbaked(boolean head) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L199) |
| ` public boolean head() ` | 读取 record 分量 ` head ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L199) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L199) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L199) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CelestialForgingAnvilItemRenderer.java#L199) |

## CrabClawItemInHandRenderer

` public class CrabClawItemInHandRenderer extends AbstractItemInHandRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L41)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final StandaloneModelKey<HoldingModel> HOLDING_ITEM ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: Crab Claw Item") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L42) |
| ` public static final StandaloneModelKey<HoldingModel> HOLDING_BLOCK ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: Crab Claw Block") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L43) |
| ` public static final StandaloneModelKey<HoldingModel> HOLDING_BLOCK_SLAB ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: Crab Claw Slab") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L44) |
| ` public static final StandaloneModelKey<HoldingModel> HOLDING_BLOCK_PANEL ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: Crab Claw Panel") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L45) |
| ` public static void registerModels(ModelEvent.RegisterStandalone event) ` | 实现调用 ` registerModel(event, HOLDING_ITEM, "crab_claw_holding_item") `<br>实现调用 ` registerModel(event, HOLDING_BLOCK, "crab_claw_holding_block") `<br>实现调用 ` registerModel(event, HOLDING_BLOCK_SLAB, "crab_claw_holding_block_slab") `<br>[调用处 RegisterAdditionalEventListener.registerModels](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L81) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L93) |
| ` @Override public boolean render( AbstractClientPlayer player, float partialTicks, float pitch, InteractionHand hand, float swingProgress, ItemStack stack, float equippedProgress, PoseStack pose, SubmitNodeCollector collector, int light ) ` | ` (stack.getItem() instanceof EnergyWeaponItem \|\| stack.is(ModBlocks.CELESTIAL_FORGING_ANVIL.asItem())) ` 成立时提前返回 ` false `<br>` (stack.getItem() instanceof FishingRodItem) ` 成立时提前返回 ` false `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L176) |

## CrabClawItemInHandRenderer.HoldingModel

` public record HoldingModel(List<BakedQuad> quads, ItemTransforms transforms) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L263)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HoldingModel(List<BakedQuad> quads, ItemTransforms transforms) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L263) |
| ` public List<BakedQuad> quads() ` | 读取 record 分量 ` quads ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L263) |
| ` public ItemTransforms transforms() ` | 读取 record 分量 ` transforms ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L263) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L263) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L263) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CrabClawItemInHandRenderer.java#L263) |

## CreativeCrateItemRenderer

` public class CreativeCrateItemRenderer extends BaseBlockItemRenderer<ItemStackRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeCrateItemRenderer() ` | 执行 ` super(ModBlocks.CREATIVE_CRATE.getDefaultState(), 0, 1) `<br>[调用处 CreativeCrateItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L60) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L24) |
| ` @Override public @Nullable ItemStackRenderState extractArgument(ItemStack stack) ` | ` (stored == null \|\| stored.stored().isEmpty()) ` 成立时提前返回 ` null `<br>` (!extracting.add(stack)) ` 成立时提前返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L28) |
| ` @Override public void submit( @Nullable ItemStackRenderState item, PoseStack pose, SubmitNodeCollector collector, int lightCoords, int overlayCoords, boolean hasFoil, int outlineColor ) ` | 实现调用 ` this.submitShell(pose, collector, lightCoords, overlayCoords, hasFoil, outlineColor) `<br>分支 ` (item != null) ` 内调用 ` CreativeCrateRenderUtil.submit(item, pose, collector, lightCoords, overlayCoords, outlineColor) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L45) |

## CreativeCrateItemRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<ItemStackRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L54)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L55) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L56) |
| ` @Override public CreativeCrateItemRenderer bake(BakingContext context) ` | 末尾返回 ` new CreativeCrateItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L58) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L63) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L54) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L54) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L54) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeCrateItemRenderer.java#L54) |

## CreativeFluidTankItemRenderer

` public class CreativeFluidTankItemRenderer extends BaseBlockItemRenderer<FluidTankItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L17)

在物品形态的流体储罐里额外渲染出内部流体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeFluidTankItemRenderer() ` | 执行 ` super(ModBlocks.CREATIVE_FLUID_TANK.get().defaultBlockState(), 0.0F, 1.0F) `<br>[调用处 CreativeFluidTankItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L18) |
| ` @Override public @Nullable FluidTankItemRenderState extractArgument(ItemStack stack) ` | ` (!stack.is(ModBlocks.CREATIVE_FLUID_TANK.asItem())) ` 成立时提前返回 ` null `<br>` (fluid.isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L22) |
| ` @Override public void submit( @Nullable FluidTankItemRenderState argument, PoseStack poseStack, SubmitNodeCollector collector, int lightCoords, int overlayCoords, boolean hasFoil, int outlineColor ) ` | 实现调用 ` this.submitShell(poseStack, collector, lightCoords, overlayCoords, hasFoil, outlineColor) `<br>实现调用 ` argument.getResource() `<br>实现调用 ` resource.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L37) |

## CreativeFluidTankItemRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<FluidTankItemRenderState> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L55)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L56) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(Unbaked.INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L57) |
| ` @Override public CreativeFluidTankItemRenderer bake(BakingContext context) ` | 末尾返回 ` new CreativeFluidTankItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L59) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` Unbaked.CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L64) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L55) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L55) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L55) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/CreativeFluidTankItemRenderer.java#L55) |

## DiskItemRenderer

` public class DiskItemRenderer implements SpecialModelRenderer<DiskItemRenderer.Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public @Nullable Argument extractArgument(ItemStack stack) ` | ` (FittedItemRenderer.isRenderingPreview()) ` 成立时提前返回 ` null `<br>末尾返回 ` icon == null ? null : new Argument(icon, FittedItemRenderer.frontZ(stack), stack.is(ModItems.STRUCTURE_DISK)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L18) |
| ` @Override public void submit(@Nullable Argument argument, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, boolean hasFoil, int outlineColor) ` | 实现调用 ` FittedItemRenderer.isRenderingPreview() `<br>实现调用 ` pose.pushPose() `<br>实现调用 ` pose.translate(0.5F, argument.structureDisk ? 0.5F : 6F / 16, argument.frontZ + 0.01F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L27) |
| ` @Override public void getExtents(Consumer<Vector3fc> output) ` | 实现调用 ` output.accept(new Vector3f(4F / 16, 3F / 16, 8.5F / 16 + 0.01F)) `<br>实现调用 ` output.accept(new Vector3f(12F / 16, 12F / 16, 8.5F / 16 + 0.01F)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L40) |
| ` public DiskItemRenderer() ` | Java 提供的无参构造器。<br>[调用处 DiskItemRenderer.Unbaked.bake](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L55) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L17) |

## DiskItemRenderer.Argument

` public record Argument(FittedItemRenderer.Icon icon, float frontZ, boolean structureDisk) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L46)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Argument(FittedItemRenderer.Icon icon, float frontZ, boolean structureDisk) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L46) |
| ` public FittedItemRenderer.Icon icon() ` | 读取 record 分量 ` icon ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L46) |
| ` public float frontZ() ` | 读取 record 分量 ` frontZ ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L46) |
| ` public boolean structureDisk() ` | 读取 record 分量 ` structureDisk ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L46) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L46) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L46) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L46) |

## DiskItemRenderer.Unbaked

` public record Unbaked() implements SpecialModelRenderer.Unbaked<Argument> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Unbaked INSTANCE ` | 初值 ` new Unbaked() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L50) |
| ` public static final MapCodec<Unbaked> CODEC ` | 初值 ` MapCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L51) |
| ` @Override public DiskItemRenderer bake(BakingContext context) ` | 末尾返回 ` new DiskItemRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L53) |
| ` @Override public MapCodec<Unbaked> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L58) |
| ` public Unbaked() ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L49) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L49) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L49) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L49) |

## EnergyWeaponArmRenderer

` public final class EnergyWeaponArmRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponArmRenderer.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void render( PoseStack pose, SubmitNodeCollector buffer, int light, AbstractClientPlayer player, HumanoidArm arm, Matrix4f transform ) ` | 实现调用 ` player.getSkin().model() `<br>实现调用 ` player.getSkin() `<br>实现调用 ` player.isModelPartShown(left ? PlayerModelPart.LEFT_SLEEVE : PlayerModelPart.RIGHT_SLEEVE) `<br>[调用处 EnergyWeaponFirstPersonRenderer.renderArm](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L264) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponArmRenderer.java#L25) |

## EnergyWeaponDrawAnimation

` public final class EnergyWeaponDrawAnimation `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void observe(ItemStack held, int selectedSlot) ` | 实现调用 ` held.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L16) |
| ` public float render(ItemStack shown, float vanillaEquip, long now, boolean paused) ` | ` (shown.getItem() != this.item) ` 成立时提前返回 ` vanillaEquip `<br>末尾返回 ` this.lowered ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L25) |
| ` public boolean isReady(ItemStack weapon) ` | 末尾返回 ` !this.waiting && this.item == weapon.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L38) |
| ` public float lowered() ` | 末尾返回 ` this.lowered ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L42) |
| ` public void reset() ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L46) |
| ` public EnergyWeaponDrawAnimation() ` | Java 提供的无参构造器。<br>[调用处 EnergyWeaponFirstPersonRenderer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L48) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponDrawAnimation.java#L7) |

## EnergyWeaponExhaustedProperty

` public final class EnergyWeaponExhaustedProperty implements ConditionalItemModelProperty `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponExhaustedProperty.java#L18)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final EnergyWeaponExhaustedProperty INSTANCE ` | 初值 ` new EnergyWeaponExhaustedProperty() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponExhaustedProperty.java#L20) |
| ` public static final MapCodec<EnergyWeaponExhaustedProperty> CODEC ` | 初值 ` MapCodec.unit(INSTANCE) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponExhaustedProperty.java#L21) |
| ` @Override public boolean get(ItemStack stack, @Nullable ClientLevel level, @Nullable LivingEntity owner, int seed, ItemDisplayContext context) ` | 末尾返回 ` !data.floats().isEmpty() && data.floats().getFirst() >= 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponExhaustedProperty.java#L23) |
| ` @Override public MapCodec<? extends ConditionalItemModelProperty> type() ` | 末尾返回 ` CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponExhaustedProperty.java#L29) |
| ` @SubscribeEvent public static void register(RegisterConditionalItemModelPropertyEvent event) ` | 事件总线派发 ` RegisterConditionalItemModelPropertyEvent ` 时调用。<br>执行 ` event.register(AnvilCraft.of("energy_weapon_exhausted"), CODEC) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponExhaustedProperty.java#L34) |
| ` public EnergyWeaponExhaustedProperty() ` | Java 提供的无参构造器。<br>[调用处 EnergyWeaponExhaustedProperty](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponExhaustedProperty.java#L20) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponExhaustedProperty.java#L18) |

## EnergyWeaponFirstPersonRenderer

` public final class EnergyWeaponFirstPersonRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L37)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void updateReload(ItemStack weapon, ItemStack capacitor, int ticks, int slot) ` | 实现调用 ` reloadWeapon.isEmpty() `<br>实现调用 ` Util.getMillis() `<br>分支 ` (starting) ` 内调用 ` Minecraft.getInstance() `<br>[调用处 EnergyWeaponReloadPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/EnergyWeaponReloadPacket.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L64) |
| ` public static void captureBeam(PoseStack poseStack, Vec3 end, float partialTick) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` new Matrix4f(WORLD_PROJECTION) .mul(WORLD_VIEW).mul(poseStack.last().pose()) `<br>实现调用 ` new Matrix4f(WORLD_PROJECTION) .mul(WORLD_VIEW) `<br>[调用处 WeaponBeamRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/entity/WeaponBeamRenderer.java#L121) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L79) |
| ` public static void worldProjection(Matrix4fc projection) ` | 实现调用 ` WORLD_PROJECTION.set(projection) `<br>实现调用 ` Minecraft.getInstance().gameRenderer.getGameRenderState() `<br>实现调用 ` Minecraft.getInstance() `<br>[调用处 EnergyWeaponProjectionMixin.anvilcraft$captureWorldProjection](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EnergyWeaponProjectionMixin.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L90) |
| ` public static void beginHand(CameraRenderState camera, Matrix4fc handProjection, Matrix4fc view) ` | 实现调用 ` HAND_PROJECTION.set(handProjection) `<br>实现调用 ` HAND_VIEW.set(view) `<br>实现调用 ` Minecraft.getInstance() `<br>[调用处 EnergyWeaponProjectionMixin.anvilcraft$captureHandProjection](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EnergyWeaponProjectionMixin.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L95) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` animation.reset() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L117) |
| ` public static boolean hasHoldingAnimation(ItemStack stack) ` | 末尾返回 ` stack.getItem() instanceof LaserGunItem \|\| stack.getItem() instanceof CorruptedBeaconActivatorItem \|\| stack.getItem() instanceof TeslaGunItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L126) |
| ` @SubscribeEvent public static void renderHand(RenderHandEvent event) ` | 事件总线派发 ` RenderHandEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isAlive() `<br>实现调用 ` player.isScoping() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/EnergyWeaponFirstPersonRenderer.java#L131) |
