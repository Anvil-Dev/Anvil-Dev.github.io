# dev.dubhe.anvilcraft.util（ModEnchantmentHelper 至 SegmentedActuator.Task.Result）



## ModEnchantmentHelper

` public class ModEnchantmentHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L27)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static int getEnchantmentLevelForLoot( LootContext context, Holder<Enchantment> enchantment, int originalLevel ) ` | ` (context.getParamOrNull(LootContextParams.DIRECT_ATTACKING_ENTITY) instanceof ThrownHeavyHalberdEntity heavyHalberd ) ` 成立时提前返回 ` heavyHalberd.getWeaponItem().getEnchantmentLevel(enchantment) `<br>末尾返回 ` originalLevel `<br>[调用处 LootItemRandomChanceWithEnchantedBonusConditionMixin.getThrownHeavyHalberdEnchantmentLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LootItemRandomChanceWithEnchantedBonusConditionMixin.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L28) |
| ` public static void onUseOnBlock( ServerLevel level, ItemStack stack, LivingEntity entity, EquipmentSlot slot, Vec3 pos, BlockState state ) ` | 执行 ` applyEntityEffects( level, stack, entity, slot, pos, state, ModLootContextParamSets.USE_ON_ITEM, ModEnchantmentEffectComponents.USE_ON_BLOCK ) `<br>[调用处 UseOnBlockEventListener.onUseOnBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/UseOnBlockEventListener.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L39) |
| ` public static void onPostBreakBlock( ServerLevel level, ItemStack stack, LivingEntity entity, EquipmentSlot slot, Vec3 pos, BlockState state ) ` | 执行 ` applyEntityEffects( level, stack, entity, slot, pos, state, ModLootContextParamSets.POST_BREAK_BLOCK, ModEnchantmentEffectComponents.POST_BREAK_BLOCK ) `<br>[调用处 BreakBlockEventListener.onBlockRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/BreakBlockEventListener.java#L74) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L96) |
| ` public ModEnchantmentHelper() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEnchantmentHelper.java#L27) |

## ModEventUtil

` public class ModEventUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean hasGuideBook() ` | 末尾返回 ` NeoForge.EVENT_BUS.post(new GuideBookEvent.HasGuideBookEvent()).isHasGuideBook() `<br>[调用处 GuideBookItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GuideBookItem.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L13) |
| ` public static void openGuideBook(Level level, ServerPlayer player, InteractionHand usedHand) ` | 执行 ` NeoForge.EVENT_BUS.post(new GuideBookEvent.OpenGuideBookEvent(level, player, usedHand)) `<br>[调用处 GuideBookItem.use](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/GuideBookItem.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L17) |
| ` public static IntegrationUtil.LoadStatus checkIntegration(String id, boolean hasExtra) ` | ` (!loaded) ` 成立时提前返回 ` IntegrationUtil.LoadStatus.NOT_FOUND `<br>` (!hasExtra) ` 成立时提前返回 ` IntegrationUtil.LoadStatus.LOADED `<br>末尾返回 ` event.isLoaded() ? IntegrationUtil.LoadStatus.LOADED : IntegrationUtil.LoadStatus.NOT_LOADED `<br>[调用处 IntegrationScreen.BaseIntegrationEntry.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IntegrationScreen.java#L136) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L21) |
| ` public ModEventUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L12) |

## ModInteractionMap

` public class ModInteractionMap `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final CauldronInteraction.InteractionMap LAYERED_LAVA ` | 初值 ` CauldronInteraction.newInteractionMap("layered_lava") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L30) |
| ` public static final CauldronInteraction.InteractionMap EXP_FLUID ` | 初值 ` CauldronInteraction.newInteractionMap("exp_fluid") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L31) |
| ` public static final CauldronInteraction.InteractionMap OIL ` | 初值 ` CauldronInteraction.newInteractionMap("oil") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L32) |
| ` public static final CauldronInteraction.InteractionMap CEMENT ` | 初值 ` CauldronInteraction.newInteractionMap("cement") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L33) |
| ` public static final CauldronInteraction.InteractionMap HONEY ` | 初值 ` CauldronInteraction.newInteractionMap("honey") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L34) |
| ` public static final CauldronInteraction.InteractionMap MILK ` | 初值 ` CauldronInteraction.newInteractionMap("milk") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L35) |
| ` public static final CauldronInteraction.InteractionMap MELT_GEM ` | 初值 ` CauldronInteraction.newInteractionMap("melt_gem") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L36) |
| ` public static final CauldronInteraction.InteractionMap FISH_TANK ` | 初值 ` CauldronInteraction.newInteractionMap("fish_tank") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L37) |
| ` public static void initInteractionMap() ` | 实现调用 ` EXP_FLUID.map() `<br>实现调用 ` OIL.map() `<br>实现调用 ` ModItems.MULTITOOL_ITEM.asItem() `<br>[调用处 AnvilCraft.loadComplete](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L217) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L39) |
| ` public ModInteractionMap() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModInteractionMap.java#L29) |

## MultiPartBlockUtil

` public class MultiPartBlockUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MultiPartBlockUtil.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlockPos getMainPartPos(Level level, BlockPos pos) ` | 末尾返回 ` pos `<br>[调用处 InfiniteFluidTankBreakProtection.findProtectedTarget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/InfiniteFluidTankBreakProtection.java#L115) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MultiPartBlockUtil.java#L17) |
| ` public static BlockPos getChainableMainPartPos(Level level, BlockPos pos) ` | 获取主方块位置，只包含可“连锁破坏”的多方块<br>末尾返回 ` getMainPartPos(level, pos) `<br>[调用处 DevourUtil.getDevourPosList](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/DevourUtil.java#L80) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MultiPartBlockUtil.java#L44) |
| ` public MultiPartBlockUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/MultiPartBlockUtil.java#L16) |

## NbtUtil

` public class NbtUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static String toConstructString(CompoundTag tag, State state) ` | 末尾返回 ` builder.toString() `<br>[调用处 Multiblock4DRecipe.toDatagen](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java#L233) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L39) |
| ` public NbtUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L23) |

## NbtUtil.State

` public static class State `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public int increaseTotal() ` | 末尾返回 ` ++this.totalCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L294) |
| ` public int increaseList() ` | 末尾返回 ` ++this.listCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L298) |
| ` public int increaseCompound() ` | 末尾返回 ` ++this.compoundCount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L302) |
| ` public State() ` | 当前实现的方法体为空。<br>[调用处 Multiblock4DRecipe.toDatagen](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/multiblock/Multiblock4DRecipe.java#L206) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public int getTotalCount() ` | 末尾返回 ` this.totalCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public int getListCount() ` | 末尾返回 ` this.listCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public int getCompoundCount() ` | 末尾返回 ` this.compoundCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public void setTotalCount(final int totalCount) ` | 执行 ` this.totalCount = totalCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public void setListCount(final int listCount) ` | 执行 ` this.listCount = listCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` public void setCompoundCount(final int compoundCount) ` | 执行 ` this.compoundCount = compoundCount `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` @Override public boolean equals(final Object o) ` | ` (o == this) ` 成立时提前返回 ` true `<br>` (!(o instanceof NbtUtil.State)) ` 成立时提前返回 ` false `<br>` (!other.canEqual((Object) this)) ` 成立时提前返回 ` false `<br>` (this.getTotalCount() != other.getTotalCount()) ` 成立时提前返回 ` false `<br>` (this.getListCount() != other.getListCount()) ` 成立时提前返回 ` false `<br>` (this.getCompoundCount() != other.getCompoundCount()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` @Override public int hashCode() ` | 末尾返回 ` result `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |
| ` @Override public String toString() ` | 末尾返回 ` "NbtUtil.State(totalCount=" + this.getTotalCount() + ", listCount=" + this.getListCount() + ", compoundCount=" + this.getCompoundCount() + ")" `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/NbtUtil.java#L288) |

## OrbitalIntegrator

` public final class OrbitalIntegrator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L9)

Subdivides one tick without invoking entity movement or collision code.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static @Nullable Step integrate( Vec3 position, Vec3 velocity, int substeps, BiFunction<Vec3, Vec3, Vec3> acceleration ) ` | Fourth-order PEFRL splitting preserves central-force angular momentum with four force samples per substep. Coefficients: Omelyan et al., Phys. Rev. E 65, 056706 (2002).<br>` (substeps < 2 \|\| substeps > 64 \|\| !isFinite(position) \|\| !isFinite(velocity)) ` 成立时提前返回 ` null `<br>末尾返回 ` new Step(displacement, velocity) `<br>[调用处 GravityManager.applyMovementEffects](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L305) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L23) |
| ` public static double relativisticFactor(Vec3 offset, Vec3 velocity, double inverseLightSpeedSquared) ` | Schwarzschild orbit correction, with h = r cross v and a gameplay cap on the extra attraction.<br>` (radiusSquared < 1 \|\| inverseLightSpeedSquared <= 0) ` 成立时提前返回 ` 1 `<br>末尾返回 ` 1 + Math.min(0.01, 3 * angularMomentumSquared * inverseLightSpeedSquared / radiusSquared) `<br>[调用处 GravityManager.GravitySourceManager.calculateOrbitalGravity](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/GravityManager.java#L640) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L46) |

## OrbitalIntegrator.Step

` public record Step(Vec3 movement, Vec3 velocity) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Step(Vec3 movement, Vec3 velocity) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public Vec3 movement() ` | 读取 record 分量 ` movement ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public Vec3 velocity() ` | 读取 record 分量 ` velocity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OrbitalIntegrator.java#L57) |

## OverseerUtil

` public class OverseerUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void onLoadOverseer(Level level, OverseerBlockEntity overseerBlockEntity) ` | 实现调用 ` shouldTrack(level, overseerBlockEntity) `<br>实现调用 ` placedOverseers .computeIfAbsent(level.dimension(), dim -> ConcurrentHashMap.newKeySet()) `<br>实现调用 ` level.dimension() `<br>[调用处 ServerBlockEntityEventListener.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L21) |
| ` public static void onUnloadOverseer(Level level, OverseerBlockEntity overseerBlockEntity) ` | 实现调用 ` shouldTrack(level, overseerBlockEntity) `<br>实现调用 ` placedOverseers.get(level.dimension()) `<br>实现调用 ` level.dimension() `<br>[调用处 ServerBlockEntityEventListener.onUnload](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/ServerBlockEntityEventListener.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L28) |
| ` public static Set<BlockPos> getPlacedOverseers(ResourceKey<Level> dimension) ` | 末尾返回 ` OverseerUtil.placedOverseers.getOrDefault(dimension, Set.of()) `<br>[调用处 OverseerCommand.listOverseersInternal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/command/OverseerCommand.java#L68) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L38) |
| ` public OverseerUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/OverseerUtil.java#L17) |

## PistonMoveGuard

` public final class PistonMoveGuard `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Scope begin(Level level) ` | 末尾返回 ` new Scope(reservation) `<br>[调用处 PropelPistonBlock.triggerEvent](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/PropelPistonBlock.java#L197) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L18) |
| ` public static void reserve(Level level, List<BlockPos> toPush, List<BlockPos> toDestroy) ` | 实现调用 ` ACTIVE_RESERVATIONS.get() `<br>实现调用 ` reservations.isEmpty() `<br>实现调用 ` reservations.peek() `<br>[调用处 ISlidingRail.moveBlocks](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/sliding/ISlidingRail.java#L127) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L29) |
| ` public static boolean isReserved(Level level, BlockPos pos) ` | ` (reservations == null) ` 成立时提前返回 ` false `<br>末尾返回 ` false `<br>[调用处 BlockDevourerBlock.devourSingleBlockInternalLogic](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/BlockDevourerBlock.java#L226) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L38) |

## PistonMoveGuard.Scope

` public static final class Scope implements AutoCloseable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L56)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void close() ` | 实现调用 ` ACTIVE_RESERVATIONS.get() `<br>实现调用 ` reservations.removeFirstOccurrence(this.reservation) `<br>实现调用 ` reservations.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PistonMoveGuard.java#L64) |

## PlacementInteractions

` public final class PlacementInteractions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PlacementInteractions.java#L29)

只读判断交互优先级，预览阶段不能调用 use 方法打开界面或改变世界。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean allowsPlacement(UseOnContext context) ` | ` (player == null \|\| player.isSpectator()) ` 成立时提前返回 ` false `<br>` (BuildingRodItem.isHeld(player)) ` 成立时提前返回 ` true `<br>` (context.getHand() == InteractionHand.OFF_HAND && player.getMainHandItem().getUseAnimation() != UseAnim.NONE) ` 成立时提前返回 ` false `<br>` (context.getItemInHand().getItem() instanceof ChuteBlockItem && ChuteBlockItem.isStorageInteraction(context)) ` 成立时提前返回 ` false `<br>` (player.isSecondaryUseActive()) ` 成立时提前返回 ` true `<br>` (context.getHand() == InteractionHand.MAIN_HAND && context.getItemInHand().getItem() instanceof ChuteBlockItem && (context.getLevel().getBlockEntity(context.getClickedPos()) instanceof IItemHandlerHolder \|\| context.getLevel().getCapability( Capabilities.ItemHandler.BLOCK, context.getClickedPos(), context.getClickedFace() ) != null)) ` 成立时提前返回 ` true `<br>` (state.getMenuProvider(context.getLevel(), menuPos) != null \|\| entity instanceof MenuProvider \|\| entity instanceof StorageBlockEntity) ` 成立时提前返回 ` false `<br>[调用处 LargeBlockPlacePreviewEventListener.updatePreview](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L197) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PlacementInteractions.java#L33) |

## PlayerUtil

` public class PlayerUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PlayerUtil.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isFakePlayer(Player player) ` | 末尾返回 ` player instanceof FakePlayer ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PlayerUtil.java#L22) |
| ` public static boolean isClient(Player player) ` | 末尾返回 ` result.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PlayerUtil.java#L26) |
| ` public static EquipmentSlot handToSlot(InteractionHand hand) ` | 末尾返回 ` hand == InteractionHand.MAIN_HAND ? EquipmentSlot.MAINHAND : EquipmentSlot.OFFHAND `<br>[调用处 AbstractCakeBlock.useItemOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/AbstractCakeBlock.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PlayerUtil.java#L32) |
| ` public static List<ServerPlayer> searchPlayerByPos(Level level, BlockPos pos, int radius) ` | 搜索切比雪夫距离内的玩家们<br>参数 ` level ` 世界<br>参数 ` pos ` 搜索起点<br>参数 ` radius ` 距离<br>返回 玩家列表<br>末尾返回 ` List.of() `<br>[调用处 ModDispenserBehavior.ironIngot](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L248) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/PlayerUtil.java#L44) |

## RecipeUtil

` public class RecipeUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L37)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ItemIngredientPredicate EMPTY_ITEM_INGREDIENT ` | 初值 ` ItemIngredientPredicate.Builder.item().build() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L39) |
| ` @OnlyIn(Dist.CLIENT) public static void registerLevelLikeCustomizer(LevelLikeCustomizer customizer) ` | 在 JEI 假世界构建完成后调用。仅客户端。不得把预览数据写回真实世界。<br>执行 ` LEVEL_LIKE_CUSTOMIZERS.add(customizer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L45) |
| ` public static LootContext emptyLootContext(ServerLevel level) ` | 末尾返回 ` new LootContext.Builder(new LootParams(level, Map.of(), Map.of(), 0)).create(Optional.empty()) `<br>[调用处 ItemStampingBehavior.processItemHandler](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/anvil/ItemStampingBehavior.java#L78) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L55) |
| ` public static boolean isIngredientsEqual(Ingredient first, Ingredient second) ` | ` (first == second) ` 成立时提前返回 ` true `<br>末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L59) |
| ` public static List<Object2IntMap.Entry<Ingredient>> mergeIngredient(List<Ingredient> ingredients) ` | 末尾返回 ` new ArrayList<>(margeIngredients.object2IntEntrySet()) `<br>[调用处 JewelCraftingRecipe.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L122) |
| ` public static int getMaxCraftTime(IItemsInput input, List<Ingredient> ingredients) ` | 实现调用 ` ingredientFlags.put(ingredient, false) `<br>实现调用 ` input.items() `<br>实现调用 ` stack.isEmpty() `<br>[调用处 JewelCraftingRecipe.matches](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/JewelCraftingRecipe.java#L106) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L139) |
| ` @OnlyIn(Dist.CLIENT) public static LevelLike asLevelLike(MultiblockDefinition definition) ` | 末尾返回 ` levelLike `<br>[调用处 MultiBlockConversionCategory.setRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/multiblock/MultiBlockConversionCategory.java#L176) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L174) |
| ` @OnlyIn(Dist.CLIENT) public static List<TagRenderSlot> getTagRenderSlots(MultiblockDefinition definition) ` | 收集模式中所有标签谓词的位置及其可用方块列表。<br>末尾返回 ` slots `<br>[调用处 MultiBlockConversionCategory.setRecipe](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/multiblock/MultiBlockConversionCategory.java#L184) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L197) |
| ` @OnlyIn(Dist.CLIENT) public static void cycleTagBlocks(LevelLike level, List<TagRenderSlot> slots, int variantIndex) ` | 根据变体索引更新 LevelLike 中所有标签槽位的方块状态。<br>实现调用 ` slots.isEmpty() `<br>实现调用 ` slot.blocks().size() `<br>实现调用 ` slot.blocks() `<br>[调用处 MultiBlockConversionCategory.draw](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/multiblock/MultiBlockConversionCategory.java#L261) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L212) |

## RecipeUtil.LevelLikeCustomizer

` public interface LevelLikeCustomizer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L50)

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void accept(MultiblockDefinition definition, LevelLike level) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L52) |

## RecipeUtil.TagRenderSlot

` public record TagRenderSlot(BlockPos pos, HolderSet<Block> blocks) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L192)

标签渲染槽位：记录需要动态切换方块的模式位置及其可用方块列表。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TagRenderSlot(BlockPos pos, HolderSet<Block> blocks) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L192) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L192) |
| ` public HolderSet<Block> blocks() ` | 读取 record 分量 ` blocks ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L192) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L192) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L192) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RecipeUtil.java#L192) |

## RegistryUtil

` public class RegistryUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RegistryUtil.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static <T> Codec<Holder.Reference<T>> referenceHolderWithLifecycle(Codec<ResourceLocation> idCodec, Registry<T> registry) ` | 末尾返回 ` ExtraCodecs.overrideLifecycle( codec, ref -> registry.registrationInfo(ref.key()).map(RegistrationInfo::lifecycle).orElse(Lifecycle.experimental()) ) `<br>[调用处 IStorageType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RegistryUtil.java#L14) |
| ` public static <T> DataResult<Holder.Reference<T>> safeCastToReference(ResourceKey<Registry<T>> key, Holder<T> value) ` | 末尾返回 ` value.getDelegate() instanceof Holder.Reference<T> reference ? DataResult.success(reference) : DataResult.error(() -> "Unregistered holder in " + key + ": " + value) `<br>[调用处 IStorageType](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/saved/storage/IStorageType.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RegistryUtil.java#L27) |
| ` public RegistryUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/RegistryUtil.java#L13) |

## ResentmentUtil

` public final class ResentmentUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void initializeBaseResentment(Mob mob) ` | 实现调用 ` mob.getPersistentData() `<br>实现调用 ` data.contains(BASE_RESENTMENT_TAG, Tag.TAG_ANY_NUMERIC) `<br>实现调用 ` mob.getUUID().getMostSignificantBits() `<br>[调用处 SavedEntity.fromMob](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/property/component/SavedEntity.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L21) |
| ` public static void setForcedResentment(Mob mob, int resentment) ` | 实现调用 ` initializeBaseResentment(mob) `<br>实现调用 ` mob.getPersistentData().putInt(FORCED_RESENTMENT_TAG, Mth.clamp(resentment, 0, 100)) `<br>实现调用 ` mob.getPersistentData() `<br>[调用处 ResinBlockItem.captureSpawner](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/ResinBlockItem.java#L71) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L28) |
| ` public static int getResentment(SavedEntity savedEntity, Level level) ` | ` (!savedEntity.isMonster()) ` 成立时提前返回 ` 0 `<br>` (!(entity instanceof LivingEntity livingEntity)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` getResentment(livingEntity) `<br>[调用处 ResentmentAmberOutcome.accept](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/recipe/anvil/outcome/ResentmentAmberOutcome.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L33) |
| ` public static int getResentment(LivingEntity entity) ` | ` (data.contains(FORCED_RESENTMENT_TAG, Tag.TAG_ANY_NUMERIC)) ` 成立时提前返回 ` Mth.clamp(data.getInt(FORCED_RESENTMENT_TAG), 0, 100) `<br>末尾返回 ` Mth.clamp(base + (int) harmfulEffectCount * 5 + healthBonus, 0, 100) `<br>[调用处 HasMobBlockItem.appendHoverText](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/HasMobBlockItem.java#L87) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResentmentUtil.java#L40) |

## ResourceLocationUtil

` public class ResourceLocationUtil `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<ResourceLocation> ANC_CODEC ` | 初值 ` Codec.STRING .comapFlatMap(ResourceLocationUtil::readWithAncAsDefault, ResourceLocationUtil::toShortStringWithAncAsDefault) .stable() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L13) |
| ` public static final StreamCodec<ByteBuf, ResourceLocation> ANC_STREAM_CODEC ` | 初值 ` ByteBufCodecs.STRING_UTF8 .map(ResourceLocationUtil::parseWithAncAsDefault, ResourceLocationUtil::toShortStringWithAncAsDefault) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L16) |
| ` public static ResourceLocation parseWithAncAsDefault(String raw) ` | 末尾返回 ` ResourceLocationUtil.parseWithDefault(raw, AnvilCraft.MOD_ID) `<br>[调用处 ResourceLocationUtil.readWithAncAsDefault](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L27) |
| ` public static ResourceLocation parseWithDefault(String raw, String defaultNamespace) ` | 实现调用 ` raw.indexOf(':') `<br>分支 ` (sep >= 0) ` 内调用 ` raw.substring(sep + 1) `<br>分支 ` (sep != 0) ` 内调用 ` raw.substring(0, sep) `<br>[调用处 ResourceLocationUtil.parseWithAncAsDefault](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L31) |
| ` public static String toShortStringWithAncAsDefault(ResourceLocation location) ` | 末尾返回 ` ResourceLocationUtil.toShortStringWithDefault(location, AnvilCraft.MOD_ID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L46) |
| ` public static String toShortStringWithDefault(ResourceLocation location, String defaultNamespace) ` | 末尾返回 ` location.getNamespace().equals(defaultNamespace) ? location.getPath() : location.toString() `<br>[调用处 ResourceLocationUtil.toShortStringWithAncAsDefault](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L47) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L50) |
| ` public ResourceLocationUtil() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ResourceLocationUtil.java#L12) |

## SegmentedActuator

` public class SegmentedActuator `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SegmentedActuator(Runnable finallyRunnable, Task... tasks) ` | 实现调用 ` this(tasks) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L44) |
| ` public SegmentedActuator(Task... tasks) ` | 实现调用 ` List.of(tasks) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L49) |
| ` public void execute() ` | 实现调用 ` this.tasks.size() `<br>分支 ` (this.index >= this.tasks.size()) ` 内调用 ` this.reset() `<br>分支 ` (this.index >= this.tasks.size()) ` 内调用 ` this.finallyRunnable.run() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L54) |
| ` public void reset() ` | 实现调用 ` task.reset() `<br>[调用处 SegmentedActuator.execute](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L67) |
| ` public List<Task> getTasks() ` | 末尾返回 ` this.tasks `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L7) |
| ` public int getIndex() ` | 末尾返回 ` this.index `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L7) |
| ` public Runnable getFinallyRunnable() ` | 末尾返回 ` this.finallyRunnable `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L7) |

## SegmentedActuator.Task

` public static class Task `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Task(int tick, Runnable runnable) ` | [调用处 LargeBlockPlacePreviewEventListener](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L84) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L16) |
| ` public Result execute() ` | ` (this.count >= this.tick) ` 成立时提前返回 ` Result.NEXT `<br>末尾返回 ` Result.CURRENT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L21) |
| ` public void reset() ` | 执行 ` this.count = 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L30) |
| ` public int getTick() ` | 末尾返回 ` this.tick `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L9) |
| ` public Runnable getRunnable() ` | 末尾返回 ` this.runnable `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L9) |
| ` public int getCount() ` | 末尾返回 ` this.count `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L9) |

## SegmentedActuator.Task.Result

` public enum Result `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L34)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` CURRENT ` | 声明于枚举 ` SegmentedActuator.Task.Result ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L35) |
| ` NEXT ` | 声明于枚举 ` SegmentedActuator.Task.Result ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L36) |
| ` public static Result[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L34) |
| ` public static Result valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/SegmentedActuator.java#L34) |
