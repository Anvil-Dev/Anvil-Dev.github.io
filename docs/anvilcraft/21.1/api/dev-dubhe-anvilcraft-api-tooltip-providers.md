# dev.dubhe.anvilcraft.api.tooltip.providers



## IAffectRangeProvider

` public interface IAffectRangeProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IAffectRangeProvider.java#L9)

作用范围提供器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean accepts(BlockEntity entity) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IAffectRangeProvider.java#L10) |
| ` VoxelShape affectRange(BlockEntity entity) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IAffectRangeProvider.java#L12) |
| ` int priority() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IAffectRangeProvider.java#L14) |

## IHandHeldItemTooltipProvider

` public interface IHandHeldItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L11)

手持物品的tooltip

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean accepts(ItemStack itemStack) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L12) |
| ` void render( PoseStack poseStack, VertexConsumer consumer, ItemStack itemStack, double camX, double camY, double camZ ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L14) |
| ` void renderTooltip(GuiGraphics guiGraphics, int screenWidth, int screenHeight) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L23) |
| ` int priority() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L25) |

## IHasAffectRange

` public interface IHasAffectRange `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHasAffectRange.java#L10)

拥有作用范围的方块实体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable AABB shape() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHasAffectRange.java#L11) |

## ITooltipProvider

` public interface ITooltipProvider<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L19)

头戴铁砧锤时显示的tooltip

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` MutableComponent INDENTATION ` | 初值 ` Component.literal(" ") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L20) |
| ` boolean accepts(T value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L22) |
| ` List<Component> tooltip(T value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L24) |
| ` ItemStack icon(T value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L26) |
| ` int priority() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L28) |
| ` static Component withIndentAndMerge(Component... components) ` | 末尾返回 ` indentation `<br>实现调用 ` INDENTATION.copy() `<br>实现调用 ` indentation.append(component) `<br>[调用处 HeatableBlockTooltipProvider.tooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L82) |

## ITooltipProvider.BlockEntityTooltipProvider

` abstract class BlockEntityTooltipProvider implements ITooltipProvider<BlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L62)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockEntityTooltipProvider() ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L63) |
| ` public abstract boolean accepts(BlockEntity value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L66) |
| ` public abstract List<Component> tooltip(BlockEntity value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L68) |
| ` @Override public ItemStack icon(BlockEntity value) ` | 末尾返回 ` value.getBlockState().getBlock().asItem().getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L70) |
| ` public abstract int priority() ` | 返回 ` int ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L75) |
| ` public void resetClientState() ` | Releases client-world state retained by a long-lived provider instance.<br>当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L78) |

## ITooltipProvider.BlockTooltipProvider

` abstract class BlockTooltipProvider implements ITooltipProvider<Triple<Level, BlockPos, BlockState>> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockTooltipProvider() ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L31) |
| ` @ApiStatus.OverrideOnly public abstract boolean accepts(Level level, BlockPos pos, BlockState value) ` | [调用处 ITooltipProvider.BlockTooltipProvider.accepts](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L34) |
| ` public boolean accepts(Triple<Level, BlockPos, BlockState> value) ` | 末尾返回 ` this.accepts(value.getLeft(), value.getMiddle(), value.getRight()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L37) |
| ` @DoNotCall @Override public List<Component> tooltip(Triple<Level, BlockPos, BlockState> value) ` | 末尾返回 ` this.tooltip(value.getLeft(), value.getMiddle(), value.getRight()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L41) |
| ` public abstract List<Component> tooltip(Level level, BlockPos pos, BlockState value) ` | [调用处 ITooltipProvider.BlockTooltipProvider.tooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L47) |
| ` @DoNotCall @Override public ItemStack icon(Triple<Level, BlockPos, BlockState> value) ` | 末尾返回 ` this.icon(value.getLeft(), value.getMiddle(), value.getRight()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L49) |
| ` public ItemStack icon(Level level, BlockPos pos, BlockState value) ` | 末尾返回 ` value.getBlock().asItem().getDefaultInstance() `<br>[调用处 ITooltipProvider.BlockTooltipProvider.icon](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L55) |
| ` public abstract int priority() ` | 返回 ` int ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L59) |
