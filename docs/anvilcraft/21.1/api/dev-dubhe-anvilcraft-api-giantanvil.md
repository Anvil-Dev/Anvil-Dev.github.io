# dev.dubhe.anvilcraft.api.giantanvil



## IShockEntity

` public interface IShockEntity `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java#L8)

提供实体参与巨型铁砧撼地行为的可选能力。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default double anvilcraft$getShockBounceHeightMultiplier() ` | 返回弹性模式下的弹起高度倍率。零表示实体不参与弹起，二表示目标高度为普通铁砧的两倍。<br>末尾返回 ` 0.0D ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java#L12) |
| ` default Optional<ShockAnvilBehavior> anvilcraft$getShockAnvilBehavior() ` | 返回实体在破坏模式下代表的边框铁砧行为。<br>末尾返回 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java#L17) |
| ` default Optional<BlockState> anvilcraft$getShockBaseState() ` | 返回实体在弹性模式下代表的底座方块状态。<br>末尾返回 ` Optional.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockEntity.java#L22) |

## IShockFixedBlock

` public interface IShockFixedBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockFixedBlock.java#L9)

树脂撼地弹跳铁砧时，被标记为固定的方块保持为方块、不生成下落实体。 在服务器线程、撼地行为树执行期间调用。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean anvilcraft$isFixedDuringShockBounce(BlockState state) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/IShockFixedBlock.java#L10) |

## ShockAnvilBehavior

` public record ShockAnvilBehavior(BlockMiningEffect miningEffect, ShockDropBehavior dropBehavior) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L8)

描述一个边框铁砧在撼地破坏模式中的挖掘与掉落行为。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ShockAnvilBehavior NORMAL ` | 初值 ` new ShockAnvilBehavior(BlockMiningEffect.NORMAL) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L9) |
| ` public ShockAnvilBehavior(BlockMiningEffect miningEffect, ShockDropBehavior dropBehavior) ` | 实现调用 ` Objects.requireNonNull(miningEffect, "miningEffect") `<br>实现调用 ` Objects.requireNonNull(dropBehavior, "dropBehavior") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L11) |
| ` public ShockAnvilBehavior(BlockMiningEffect miningEffect) ` | 执行 ` this(miningEffect, ShockDropBehavior.DEFAULT) `<br>[调用处 ShockAnvilBehavior](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L9) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L16) |
| ` public static ShockAnvilBehavior fromMiningEffect(BlockMiningEffect effect) ` | 将本体方块铁砧的挖掘效果转换为默认掉落行为。<br>` (effect.equals(BlockMiningEffect.NORMAL)) ` 成立时提前返回 ` NORMAL `<br>末尾返回 ` new ShockAnvilBehavior(effect) `<br>实现调用 ` effect.equals(BlockMiningEffect.NORMAL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L21) |
| ` public boolean isCompatibleWith(ShockAnvilBehavior other) ` | 判断两个边框位置是否可以组成同一套撼地破坏结构。<br>末尾返回 ` other != null && this.miningEffect.equals(other.miningEffect) && this.dropBehavior.id().equals(other.dropBehavior.id()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L27) |
| ` public BlockMiningEffect miningEffect() ` | 读取 record 分量 ` miningEffect ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L8) |
| ` public ShockDropBehavior dropBehavior() ` | 读取 record 分量 ` dropBehavior ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L8) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L8) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L8) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockAnvilBehavior.java#L8) |

## ShockDropBehavior

` public interface ShockDropBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockDropBehavior.java#L10)

定义撼地破坏模式生成单个掉落物的方式。

类型注解 ` @FunctionalInterface `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ResourceLocation DEFAULT_ID ` | 初值 ` ResourceLocation.fromNamespaceAndPath("anvilcraft", "default_shock_drop") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockDropBehavior.java#L12) |
| ` ShockDropBehavior DEFAULT ` | 不改变原版掉落物随机抛出的默认处理器。<br>初值 ` (context, pos, stack) -> Block.popResource(context.level(), pos, stack) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockDropBehavior.java#L15) |
| ` default ResourceLocation id() ` | 返回行为标识。四个边框位置只有标识一致时才会组成同一种撼地配方；自定义处理器应覆盖此方法。<br>末尾返回 ` DEFAULT_ID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockDropBehavior.java#L20) |
| ` void drop(ShockContext context, BlockPos pos, ItemStack stack) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/giantanvil/ShockDropBehavior.java#L24) |
