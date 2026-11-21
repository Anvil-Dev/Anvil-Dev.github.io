# dev.dubhe.anvilcraft.api.event（GuideBookEvent.OpenGuideBookEvent 至 UseMagnetEvent）



## GuideBookEvent.OpenGuideBookEvent

` public static class OpenGuideBookEvent extends GuideBookEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OpenGuideBookEvent(Level level, ServerPlayer player, InteractionHand usedHand) ` | [调用处 ModEventUtil.openGuideBook](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L18) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L29) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L23) |
| ` public ServerPlayer getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L23) |
| ` public InteractionHand getUsedHand() ` | 末尾返回 ` this.usedHand `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java#L23) |

## HammerChangeBlockEvent

` public class HammerChangeBlockEvent extends BlockEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HammerChangeBlockEvent( LevelAccessor level, Player player, BlockPos pos, BlockState state, BlockState oldState, boolean isVerified ) ` | 实现调用 ` super(level, pos, state) `<br>[调用处 HammerChangeBlockEvent.invoke](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L43) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L21) |
| ` public static boolean invoke( LevelAccessor level, Player player, BlockPos pos, BlockState state, BlockState oldState, boolean isVerified ) ` | 末尾返回 ` event.isVerified() `<br>实现调用 ` NeoForge.EVENT_BUS.post(event) `<br>实现调用 ` event.isVerified() `<br>[调用处 HammerChangeBlockPacket.handleOnServer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/HammerChangeBlockPacket.java#L64) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L35) |
| ` public Player getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L12) |
| ` public BlockState getOldState() ` | 末尾返回 ` this.oldState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L12) |
| ` public boolean isVerified() ` | 末尾返回 ` this.isVerified `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L12) |
| ` public void setVerified(final boolean isVerified) ` | 执行 ` this.isVerified = isVerified `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/HammerChangeBlockEvent.java#L12) |

## ItemEntityEvent

` public class ItemEntityEvent extends EntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemEntityEvent(Level level, ItemEntity entity) ` | 实现调用 ` super(entity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java#L15) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java#L10) |
| ` public ItemEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java#L10) |

## ItemEntityEvent.InToBlock

` public static class InToBlock extends ItemEntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InToBlock(Level level, ItemEntity entity, BlockPos blockPos, Vec3 pos, Vec3 motion) ` | 实现调用 ` super(level, entity) `<br>[调用处 ItemEntityMixin.tickReturn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemEntityMixin.java#L89) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java#L27) |
| ` public BlockPos getBlockPos() ` | 末尾返回 ` this.blockPos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java#L21) |
| ` public Vec3 getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java#L21) |
| ` public Vec3 getMotion() ` | 末尾返回 ` this.motion `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/ItemEntityEvent.java#L21) |

## LargeCauldronEvent

` public class LargeCauldronEvent extends Event `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L23)

大型炼药锅扩展点。服务器事件仅在服务器线程发布；UseItem 可能在两侧调用。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LargeCauldronEvent(Level level, BlockPos pos) ` | 构造 ` LargeCauldronEvent ` 实例。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L28) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L23) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L23) |

## LargeCauldronEvent.EntityInside

` public static class EntityInside extends LargeCauldronEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L45)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EntityInside(Level level, BlockPos pos, BlockState state, Entity entity) ` | 实现调用 ` super(level, pos) `<br>[调用处 LargeCauldronBlock.entityInside](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L372) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L50) |
| ` public BlockState getState() ` | 末尾返回 ` this.state `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L45) |
| ` public Entity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L45) |

## LargeCauldronEvent.FluidDamage

` public static class FluidDamage extends LargeCauldronEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L105)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidDamage(LargeCauldronBlockEntity cauldron, FluidStack fluid, float damage) ` | 实现调用 ` super(cauldron.getLevel(), cauldron.getBlockPos()) `<br>实现调用 ` cauldron.getLevel() `<br>实现调用 ` cauldron.getBlockPos() `<br>[调用处 LargeCauldronBlockEntity.applyFluidEffects](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L1360) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L112) |
| ` public LargeCauldronBlockEntity getCauldron() ` | 末尾返回 ` this.cauldron `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L105) |
| ` public FluidStack getFluid() ` | 末尾返回 ` this.fluid `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L105) |
| ` public float getDamage() ` | 末尾返回 ` this.damage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L105) |
| ` public void setDamage(final float damage) ` | 执行 ` this.damage = damage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L105) |

## LargeCauldronEvent.GiantAnvilImpact

` public static class GiantAnvilImpact extends LargeCauldronEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L85)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GiantAnvilImpact( Level level, AnvilEvent.OnLand landing, LargeCauldronBlockEntity cauldron, BlockState landedAnvilState ) ` | 实现调用 ` super(level, landing.getPos()) `<br>实现调用 ` landing.getPos() `<br>[调用处 LargeCauldronBlockEntity.handleGiantAnvilImpact](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L557) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L92) |
| ` public AnvilEvent.OnLand getLanding() ` | 末尾返回 ` this.landing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L85) |
| ` public LargeCauldronBlockEntity getCauldron() ` | 末尾返回 ` this.cauldron `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L85) |
| ` public BlockState getLandedAnvilState() ` | 末尾返回 ` this.landedAnvilState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L85) |
| ` public void setLandedAnvilState(final BlockState landedAnvilState) ` | 执行 ` this.landedAnvilState = landedAnvilState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L85) |

## LargeCauldronEvent.MixingOutput

` public static class MixingOutput extends LargeCauldronEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L120)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MixingOutput(LargeCauldronBlockEntity cauldron, ItemStack result) ` | 实现调用 ` super(cauldron.getLevel(), cauldron.getBlockPos()) `<br>实现调用 ` cauldron.getLevel() `<br>实现调用 ` cauldron.getBlockPos() `<br>[调用处 LargeCauldronBlockEntity.tryProcessFluidMixingRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L738) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L126) |
| ` public LargeCauldronBlockEntity getCauldron() ` | 末尾返回 ` this.cauldron `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L120) |
| ` public ItemStack getResult() ` | 末尾返回 ` this.result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L120) |
| ` public void setResult(final ItemStack result) ` | 执行 ` this.result = result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L120) |

## LargeCauldronEvent.ServerTick

` public static class ServerTick extends LargeCauldronEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ServerTick(ServerLevel level, LargeCauldronBlockEntity cauldron) ` | 实现调用 ` super(level, cauldron.getBlockPos()) `<br>实现调用 ` cauldron.getBlockPos() `<br>[调用处 LargeCauldronBlockEntity.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/LargeCauldronBlockEntity.java#L210) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L38) |
| ` public ServerLevel getServerLevel() ` | 末尾返回 ` this.serverLevel `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L33) |
| ` public LargeCauldronBlockEntity getCauldron() ` | 末尾返回 ` this.cauldron `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L33) |

## LargeCauldronEvent.UseItem

` public static class UseItem extends LargeCauldronEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L57)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UseItem( Level level, BlockPos pos, BlockState state, Player player, InteractionHand hand, BlockHitResult hit, ItemStack stack ) ` | 实现调用 ` super(level, pos) `<br>[调用处 LargeCauldronBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/LargeCauldronBlock.java#L278) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L67) |
| ` public BlockState getState() ` | 末尾返回 ` this.state `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L57) |
| ` public Player getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L57) |
| ` public InteractionHand getHand() ` | 末尾返回 ` this.hand `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L57) |
| ` public BlockHitResult getHit() ` | 末尾返回 ` this.hit `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L57) |
| ` public ItemStack getStack() ` | 末尾返回 ` this.stack `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L57) |
| ` public InteractionResult getResult() ` | 末尾返回 ` this.result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L57) |
| ` public void setResult(final InteractionResult result) ` | 执行 ` this.result = result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LargeCauldronEvent.java#L57) |

## LightningBoltStrikeEvent

` public class LightningBoltStrikeEvent extends EntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LightningBoltStrikeEvent.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LightningBoltStrikeEvent(LightningBolt entity, Level level, BlockPos pos) ` | 雷击事件<br>参数 ` entity ` 闪电<br>参数 ` level ` 世界<br>参数 ` pos ` 位置<br>实现调用 ` super(entity) `<br>[调用处 LightningBoltMixin.powerLightningRod](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LightningBoltMixin.java#L22) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LightningBoltStrikeEvent.java#L20) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LightningBoltStrikeEvent.java#L9) |
| ` public BlockPos getPos() ` | 末尾返回 ` this.pos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LightningBoltStrikeEvent.java#L9) |
| ` public LightningBolt getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/LightningBoltStrikeEvent.java#L9) |

## PrimerEnchantmentsEvent

` public class PrimerEnchantmentsEvent extends Event implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java#L20)

从引物获取自选附魔事件。 取消事件则引物不提供任何附魔。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PrimerEnchantmentsEvent(Level level, ItemStack primer) ` | [调用处 AutoEnchantingTableMenu.refreshEnchantments](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/inventory/AutoEnchantingTableMenu.java#L125) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java#L26) |
| ` public void addEnchantment(Holder<Enchantment> enchantment) ` | 实现调用 ` this.enchantments.contains(enchantment) `<br>分支 ` (!this.enchantments.contains(enchantment)) ` 内调用 ` this.enchantments.add(enchantment) `<br>[调用处 PrimerEnchantmentsEvent.addEnchantments](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java#L31) |
| ` public void addEnchantments(Collection<Holder<Enchantment>> enchantments) ` | 实现调用 ` this.addEnchantment(enchantment) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java#L37) |
| ` public List<Holder<Enchantment>> getEnchantments() ` | 末尾返回 ` Collections.unmodifiableList(this.enchantments) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java#L43) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java#L20) |
| ` public ItemStack getPrimer() ` | 末尾返回 ` this.primer `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/PrimerEnchantmentsEvent.java#L20) |

## SlidingBlockEvent

` public class SlidingBlockEvent extends EntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L19)

滑轨滑动实体的生命周期。Start 在带结构数据的构造器完成时发布，方块移除时机由调用者决定； Stop 在结构写回世界之后发布。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SlidingBlockEvent(SlidingBlockEntity entity) ` | 实现调用 ` super(entity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L23) |
| ` public SlidingBlockEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L19) |

## SlidingBlockEvent.Start

` public static class Start extends SlidingBlockEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Start( SlidingBlockEntity entity, Level level, BlockPos origin, Direction movement, Iterable<Triple<BlockPos, BlockState, Optional<BlockEntity>>> blocks ) ` | 实现调用 ` super(entity) `<br>[调用处 SlidingBlockEntity.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L75) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L35) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L28) |
| ` public BlockPos getOrigin() ` | 末尾返回 ` this.origin `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L28) |
| ` public Direction getMovement() ` | 末尾返回 ` this.movement `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L28) |
| ` public Iterable<Triple<BlockPos, BlockState, Optional<BlockEntity>>> getBlocks() ` | 末尾返回 ` this.blocks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L28) |

## SlidingBlockEvent.Stop

` public static class Stop extends SlidingBlockEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L50)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Stop(SlidingBlockEntity entity) ` | 实现调用 ` super(entity) `<br>实现调用 ` entity.level() `<br>[调用处 SlidingBlockEntity.stop](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/SlidingBlockEntity.java#L165) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L54) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SlidingBlockEvent.java#L50) |

## SmartBlockPlacerFindPointerEvent

` public class SmartBlockPlacerFindPointerEvent extends Event implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SmartBlockPlacerFindPointerEvent( ServerLevel level, BlockPos sourcePos, Direction facing, OperationMode operation, TargetMode target, ExecutionPhase phase, @Nullable BlockState requiredState ) ` | [调用处 SmartBlockPlacerBlockEntity.findPointer](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/SmartBlockPlacerBlockEntity.java#L284) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L29) |
| ` public ServerLevel getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17) |
| ` public BlockPos getSourcePos() ` | 末尾返回 ` this.sourcePos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17) |
| ` public Direction getFacing() ` | 末尾返回 ` this.facing `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17) |
| ` public OperationMode getOperation() ` | 末尾返回 ` this.operation `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17) |
| ` public TargetMode getTarget() ` | 末尾返回 ` this.target `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17) |
| ` public ExecutionPhase getPhase() ` | 末尾返回 ` this.phase `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17) |
| ` @Nullable public BlockState getRequiredState() ` | 末尾返回 ` this.requiredState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17) |
| ` @Nullable public ITargetPointer getPointer() ` | 末尾返回 ` this.pointer `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17) |
| ` public void setPointer(@Nullable final ITargetPointer pointer) ` | 执行 ` this.pointer = pointer `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/SmartBlockPlacerFindPointerEvent.java#L17) |

## StorageUnlockCraftingEvent

` public class StorageUnlockCraftingEvent extends Event implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/StorageUnlockCraftingEvent.java#L21)

仓储解锁合成功能事件。 事件在扣除消耗品前发出，其它模组可通过 #addRecipeBaseSlot(int) 追加消耗槽位， 每个槽位从事件暴露的 BaseStorage 中消耗一个物品，并随工作台、切石机一起记入该存储的 消耗品记录；槽位下标非法或槽位为空时解锁失败且不消耗任何物品。 取消事件可阻止本次解锁，取消时不消耗任何物品。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StorageUnlockCraftingEvent(BaseStorage<?> storage) ` | 执行 ` this.storage = storage `<br>[调用处 BaseStorage.unlockCrafting](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/saved/storage/BaseStorage.java#L111) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/StorageUnlockCraftingEvent.java#L26) |
| ` public void addRecipeBaseSlot(int slot) ` | 追加一个解锁要消耗的槽位。<br>参数 ` slot ` 储物内容中的槽位下标，每个槽位消耗一个物品<br>执行 ` this.recipeBaseSlots.add(slot) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/StorageUnlockCraftingEvent.java#L35) |
| ` public List<Integer> getRecipeBaseSlots() ` | 本次解锁要消耗的槽位，包含工作台与切石机的槽位。<br>返回 槽位下标的不可修改视图<br>末尾返回 ` Collections.unmodifiableList(this.recipeBaseSlots) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/StorageUnlockCraftingEvent.java#L44) |
| ` public BaseStorage<?> getStorage() ` | 末尾返回 ` this.storage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/StorageUnlockCraftingEvent.java#L21) |

## TeslaStrikeEvent

` public abstract class TeslaStrikeEvent extends BlockEntityEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TeslaStrikeEvent(Level level, TeslaTowerBlockEntity entity) ` | 实现调用 ` super(level, entity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L15) |
| ` public TeslaTowerBlockEntity getEntity() ` | 末尾返回 ` this.entity `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L11) |

## TeslaStrikeEvent.TargetBlock

` public static class TargetBlock extends TeslaStrikeEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TargetBlock(Level level, TeslaTowerBlockEntity entity, BlockPos targetPos) ` | 实现调用 ` super(level, entity) `<br>实现调用 ` level.getBlockState(targetPos) `<br>[调用处 TeslaTowerBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L304) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L35) |
| ` public BlockPos getTargetPos() ` | 末尾返回 ` this.targetPos `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L30) |
| ` public BlockState getTargetState() ` | 末尾返回 ` this.targetState `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L30) |

## TeslaStrikeEvent.TargetEntity

` public static class TargetEntity extends TeslaStrikeEvent implements ICancellableEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TargetEntity(Level level, TeslaTowerBlockEntity entity, Entity target) ` | 实现调用 ` super(level, entity) `<br>[调用处 TeslaTowerBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/TeslaTowerBlockEntity.java#L278) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L24) |
| ` public Entity getTarget() ` | 末尾返回 ` this.target `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/TeslaStrikeEvent.java#L20) |

## UseMagnetEvent

` public class UseMagnetEvent extends Event implements ICancellableEvent, IModBusEvent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/UseMagnetEvent.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UseMagnetEvent(Level level, Player player, double attractRadius) ` | [调用处 MagnetUtil.magnetizeItems](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/MagnetUtil.java#L164) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/UseMagnetEvent.java#L20) |
| ` public Level getLevel() ` | 末尾返回 ` this.level `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/UseMagnetEvent.java#L11) |
| ` public double getAttractRadius() ` | 末尾返回 ` this.attractRadius `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/UseMagnetEvent.java#L11) |
| ` public Player getPlayer() ` | 末尾返回 ` this.player `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/UseMagnetEvent.java#L11) |
| ` public void setAttractRadius(final double attractRadius) ` | 执行 ` this.attractRadius = attractRadius `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/event/UseMagnetEvent.java#L11) |
