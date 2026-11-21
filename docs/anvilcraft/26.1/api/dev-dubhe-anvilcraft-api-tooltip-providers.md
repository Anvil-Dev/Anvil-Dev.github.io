# dev.dubhe.anvilcraft.api.tooltip.providers



## IAffectRangeProvider

` public interface IAffectRangeProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IAffectRangeProvider.java#L7)

作用范围提供器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean accepts(BlockEntity entity) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IAffectRangeProvider.java#L8) |
| ` VoxelShape affectRange(BlockEntity entity) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IAffectRangeProvider.java#L10) |
| ` int priority() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IAffectRangeProvider.java#L12) |

## IHandHeldItemTooltipProvider

` public interface IHandHeldItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L9)

手持物品的tooltip

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` boolean accepts(ItemStack itemStack) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L10) |
| ` void render( PoseStack poseStack, VertexConsumer consumer, ItemStack itemStack, double camX, double camY, double camZ ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L12) |
| ` void renderTooltip(GuiGraphicsExtractor graphics, int screenWidth, int screenHeight) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L21) |
| ` int priority() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHandHeldItemTooltipProvider.java#L23) |

## IHasAffectRange

` public interface IHasAffectRange `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHasAffectRange.java#L7)

拥有作用范围的方块实体

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable AABB shape() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IHasAffectRange.java#L8) |

## IItemTooltipProvider

` public interface IItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IItemTooltipProvider.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void appendItemTooltip( ItemStack stack, Item.TooltipContext context, TooltipDisplay display, Consumer<Component> builder, TooltipFlag tooltipFlag ) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/IItemTooltipProvider.java#L12) |

## ITooltipProvider

` public interface ITooltipProvider<T> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L17)

头戴铁砧锤时显示的tooltip

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` MutableComponent INDENTATION ` | 初值 ` Component.literal(" ") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L18) |
| ` boolean accepts(T value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L20) |
| ` List<Component> tooltip(T value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L22) |
| ` ItemStack icon(T value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L24) |
| ` int priority() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L26) |
| ` static Component withIndentAndMerge(Component... components) ` | 末尾返回 ` indentation `<br>实现调用 ` ITooltipProvider.INDENTATION.copy() `<br>实现调用 ` indentation.append(component) `<br>[调用处 HeatableBlockTooltipProvider.tooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L76) |

## ITooltipProvider.BlockEntityTooltipProvider

` abstract class BlockEntityTooltipProvider implements ITooltipProvider<BlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L60)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockEntityTooltipProvider() ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L61) |
| ` public abstract boolean accepts(BlockEntity value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L64) |
| ` public abstract List<Component> tooltip(BlockEntity value) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L66) |
| ` @Override public ItemStack icon(BlockEntity value) ` | 末尾返回 ` value.getBlockState().getBlock().asItem().getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L68) |
| ` public abstract int priority() ` | 返回 ` int ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L73) |

## ITooltipProvider.BlockTooltipProvider

` abstract class BlockTooltipProvider implements ITooltipProvider<Triple<Level, BlockPos, BlockState>> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public BlockTooltipProvider() ` | 当前实现的方法体为空。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L29) |
| ` @ApiStatus.OverrideOnly public abstract boolean accepts(Level level, BlockPos pos, BlockState value) ` | [调用处 ITooltipProvider.BlockTooltipProvider.accepts](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L32) |
| ` public boolean accepts(Triple<Level, BlockPos, BlockState> value) ` | 末尾返回 ` this.accepts(value.getLeft(), value.getMiddle(), value.getRight()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L35) |
| ` @DoNotCall @Override public List<Component> tooltip(Triple<Level, BlockPos, BlockState> value) ` | 末尾返回 ` this.tooltip(value.getLeft(), value.getMiddle(), value.getRight()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L39) |
| ` public abstract List<Component> tooltip(Level level, BlockPos pos, BlockState value) ` | [调用处 ITooltipProvider.BlockTooltipProvider.tooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L45) |
| ` @DoNotCall @Override public ItemStack icon(Triple<Level, BlockPos, BlockState> value) ` | 末尾返回 ` this.icon(value.getLeft(), value.getMiddle(), value.getRight()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L47) |
| ` public ItemStack icon(Level level, BlockPos pos, BlockState value) ` | 末尾返回 ` value.getBlock().asItem().getDefaultInstance() `<br>[调用处 ITooltipProvider.BlockTooltipProvider.icon](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L50) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L53) |
| ` public abstract int priority() ` | 返回 ` int ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/providers/ITooltipProvider.java#L57) |
