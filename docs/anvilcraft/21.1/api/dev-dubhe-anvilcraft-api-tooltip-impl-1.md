# dev.dubhe.anvilcraft.api.tooltip.impl（AffectRangeProviderImpl 至 RedstoneWireTooltipProvider）



## AffectRangeProviderImpl

` public class AffectRangeProviderImpl implements IAffectRangeProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof IHasAffectRange ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L11) |
| ` @Override public VoxelShape affectRange(BlockEntity entity) ` | ` (entity instanceof IHasAffectRange har && har.shape() instanceof AABB shape) ` 成立时提前返回 ` Shapes.create(shape) `<br>末尾返回 ` null `<br>实现调用 ` har.shape() `<br>分支 ` (entity instanceof IHasAffectRange har && har.shape() instanceof AABB shape) ` 内调用 ` Shapes.create(shape) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L16) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L25) |
| ` public AffectRangeProviderImpl() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L72) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L10) |

## BurningHeaterTooltipProvider

` public class BurningHeaterTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof BurningHeaterBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L16) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` (!(value instanceof BurningHeaterBlockEntity be)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(value instanceof BurningHeaterBlockEntity be)) ` 内调用 ` List.of() `<br>实现调用 ` be.getBlockState() `<br>实现调用 ` state.getBlock() `<br>分支 ` (state.getBlock() instanceof BurningHeaterBlock) ` 内调用 ` state.getValue(BurningHeaterBlock.LEVEL) `<br>分支 ` !(state.getBlock() instanceof BurningHeaterBlock) ` 内调用 ` be.getBurnTime() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.burning_heater.state_name") .withStyle(ChatFormatting.BLUE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L21) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L79) |
| ` public BurningHeaterTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L77) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L15) |

## CfaFluidInterfaceTooltipProvider

` public class CfaFluidInterfaceTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaFluidInterfaceTooltipProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof CelestialForgingAnvilFluidInterfaceBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaFluidInterfaceTooltipProvider.java#L14) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` (!(value instanceof CelestialForgingAnvilFluidInterfaceBlockEntity fluid)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(value instanceof CelestialForgingAnvilFluidInterfaceBlockEntity fluid)) ` 内调用 ` List.of() `<br>实现调用 ` fluid.getTanks() `<br>实现调用 ` tank.getFluid() `<br>实现调用 ` fluidStack.isEmpty() `<br>分支 ` (!fluidStack.isEmpty()) ` 内调用 ` Component.literal(" · ") .append(fluidStack.getHoverName()) `<br>分支 ` (!fluidStack.isEmpty()) ` 内调用 ` Component.literal(" · ") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaFluidInterfaceTooltipProvider.java#L19) |
| ` @Override public ItemStack icon(BlockEntity value) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaFluidInterfaceTooltipProvider.java#L43) |
| ` @Override public int priority() ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaFluidInterfaceTooltipProvider.java#L48) |
| ` public CfaFluidInterfaceTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L91) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaFluidInterfaceTooltipProvider.java#L13) |

## CfaLaserInterfaceTooltipProvider

` public class CfaLaserInterfaceTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLaserInterfaceTooltipProvider.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof CelestialForgingAnvilLaserInterfaceBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLaserInterfaceTooltipProvider.java#L15) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` (!(value instanceof CelestialForgingAnvilLaserInterfaceBlockEntity laser)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(value instanceof CelestialForgingAnvilLaserInterfaceBlockEntity laser)) ` 内调用 ` List.of() `<br>实现调用 ` laser.getReceivedLaserLevel() `<br>实现调用 ` laser.getRequiredLaserLevel() `<br>实现调用 ` laser.isRequiredGamma() `<br>实现调用 ` laser.isLaserValid() `<br>实现调用 ` laser.isEmittingGamma() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLaserInterfaceTooltipProvider.java#L20) |
| ` @Override public ItemStack icon(BlockEntity value) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLaserInterfaceTooltipProvider.java#L78) |
| ` @Override public int priority() ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLaserInterfaceTooltipProvider.java#L83) |
| ` public CfaLaserInterfaceTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L92) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLaserInterfaceTooltipProvider.java#L14) |

## CfaLogisticsInterfaceTooltipProvider

` public class CfaLogisticsInterfaceTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L22)

Displays a server snapshot of the logistics interface without block-entity sync spam.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof CelestialForgingAnvilLogisticsInterfaceBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L30) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` (!(value instanceof CelestialForgingAnvilLogisticsInterfaceBlockEntity logistics)) ` 成立时提前返回 ` List.of() `<br>` (snapshot == null) ` 成立时提前返回 ` List.of(Component.literal("...").withStyle(ChatFormatting.DARK_GRAY)) `<br>末尾返回 ` lines `<br>实现调用 ` List.of() `<br>实现调用 ` this.refreshData(logistics) `<br>分支 ` (snapshot == null) ` 内调用 ` List.of(Component.literal("...").withStyle(ChatFormatting.DARK_GRAY)) `<br>分支 ` (snapshot == null) ` 内调用 ` Component.literal("...").withStyle(ChatFormatting.DARK_GRAY) `<br>分支 ` (snapshot == null) ` 内调用 ` Component.literal("...") `<br>实现调用 ` snapshot.templeDemandItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L35) |
| ` @Override public void resetClientState() ` | 分支 ` (this.pendingData != null) ` 内调用 ` this.pendingData.cancel(false) `<br>[调用处 CfaLogisticsInterfaceTooltipProvider.refreshData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L130) |
| ` @Override public ItemStack icon(BlockEntity value) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L140) |
| ` @Override public int priority() ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L145) |
| ` public CfaLogisticsInterfaceTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L90) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L22) |

## ChargerTooltipProvider

` public class ChargerTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof ChargerBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L22) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` (!(value instanceof ChargerBlockEntity charger)) ` 成立时提前返回 ` List.of() `<br>` (powerGrids.isEmpty()) ` 成立时提前返回 ` List.of() `<br>` (optional.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(value instanceof ChargerBlockEntity charger)) ` 内调用 ` List.of() `<br>实现调用 ` charger.getBlockPos() `<br>实现调用 ` value.getBlockState().hasProperty(IPowerComponent.OVERLOAD) `<br>实现调用 ` value.getBlockState() `<br>分支 ` (value.getBlockState().hasProperty(IPowerComponent.OVERLOAD)) ` 内调用 ` value.getBlockState().getValues().getOrDefault(IPowerComponent.OVERLOAD, true).equals(Boolean.TRUE) `<br>分支 ` (value.getBlockState().hasProperty(IPowerComponent.OVERLOAD)) ` 内调用 ` value.getBlockState().getValues().getOrDefault(IPowerComponent.OVERLOAD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L27) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L94) |
| ` public ChargerTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L68) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L21) |

## CrabTrapTooltipProvider

` public class CrabTrapTooltipProvider extends ITooltipProvider.BlockTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` state.is(ModBlocks.CRAB_TRAP) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L16) |
| ` @Override public List<Component> tooltip(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` lines `<br>实现调用 ` state.getValue(CrabTrapBlock.FISHING) `<br>实现调用 ` lines.add(Component.translatable("tooltip.anvilcraft.crab_trap.state_name").withStyle(ChatFormatting.BLUE)) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.crab_trap.state_name").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.crab_trap.state_name") `<br>实现调用 ` Component.literal(" ").append(Component.translatable("tooltip.anvilcraft.crab_trap.jade.fishing", fishing)) `<br>实现调用 ` Component.literal(" ") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L21) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L30) |
| ` public CrabTrapTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L96) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L15) |

## CreativeCrateTooltipProvider

` public class CreativeCrateTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeCrateTooltipProvider.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity be) ` | 末尾返回 ` be instanceof CreativeCrateBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeCrateTooltipProvider.java#L17) |
| ` @Override public List<Component> tooltip(BlockEntity be) ` | 末尾返回 ` lines `<br>分支 ` (be instanceof IItemHandlerHolder itemHandlerHolder) ` 内调用 ` itemHandlerHolder.getItemHandler() `<br>分支 ` (be instanceof IItemHandlerHolder itemHandlerHolder) ` 内调用 ` itemHandler.getStackInSlot(0) `<br>分支 ` (be instanceof IItemHandlerHolder itemHandlerHolder) ` 内调用 ` stackInSlot.isEmpty() `<br>分支 ` (!stackInSlot.isEmpty()) ` 内调用 ` Component.translatable("entity.minecraft.item") .setStyle(Style.EMPTY.applyFormat(ChatFormatting.BLUE)) `<br>分支 ` (!stackInSlot.isEmpty()) ` 内调用 ` Component.translatable("entity.minecraft.item") `<br>分支 ` (!stackInSlot.isEmpty()) ` 内调用 ` Style.EMPTY.applyFormat(ChatFormatting.BLUE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeCrateTooltipProvider.java#L22) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeCrateTooltipProvider.java#L40) |
| ` public CreativeCrateTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L94) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeCrateTooltipProvider.java#L16) |

## CreativeFluidTankTooltipProvider

` public class CreativeFluidTankTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeFluidTankTooltipProvider.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity be) ` | 末尾返回 ` be instanceof CreativeFluidTankBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeFluidTankTooltipProvider.java#L17) |
| ` @Override public List<Component> tooltip(BlockEntity be) ` | 末尾返回 ` lines `<br>分支 ` (be instanceof IFluidHandlerHolder tank) ` 内调用 ` tank.getFluidHandler() `<br>分支 ` (be instanceof IFluidHandlerHolder tank) ` 内调用 ` fluidHandler.getFluidInTank(0) `<br>分支 ` (be instanceof IFluidHandlerHolder tank) ` 内调用 ` fluidInTank.isEmpty() `<br>分支 ` (!fluidInTank.isEmpty()) ` 内调用 ` Component.translatable("tooltip.anvilcraft.fluid_tank.fluid") `<br>分支 ` (!fluidInTank.isEmpty()) ` 内调用 ` Style.EMPTY.applyFormat(ChatFormatting.BLUE) `<br>分支 ` (!fluidInTank.isEmpty()) ` 内调用 ` Component.literal(" ").append(tank.getFluidHandler().getFluidInTank(0).getHoverName()) .append(" × ") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeFluidTankTooltipProvider.java#L22) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeFluidTankTooltipProvider.java#L40) |
| ` public CreativeFluidTankTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L93) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CreativeFluidTankTooltipProvider.java#L16) |

## DeflectionRingTooltipProvider

` public class DeflectionRingTooltipProvider extends PowerComponentTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof DeflectionRingBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L17) |
| ` @Override public int priority() ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L22) |
| ` @Override public List<Component> tooltip(BlockEntity blockEntity) ` | ` (!(blockEntity.getBlockState().getBlock() instanceof DeflectionRingBlock deflectionRingBlock)) ` 成立时提前返回 ` lines `<br>` (level == null) ` 成立时提前返回 ` lines `<br>` (!(level.getBlockEntity(center) instanceof DeflectionRingBlockEntity deflectionRingBlockEntity)) ` 成立时提前返回 ` lines `<br>末尾返回 ` lines `<br>实现调用 ` super.tooltip(blockEntity) `<br>实现调用 ` blockEntity.getBlockState().getBlock() `<br>实现调用 ` blockEntity.getBlockState() `<br>实现调用 ` deflectionRingBlock.getMainPartPos(blockEntity.getBlockPos(), blockEntity.getBlockState()) `<br>实现调用 ` blockEntity.getBlockPos() `<br>实现调用 ` blockEntity.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L27) |
| ` public DeflectionRingTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L83) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L15) |

## DischargerTooltipProvider

` public class DischargerTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof DischargerBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L22) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` (!(value instanceof DischargerBlockEntity discharger)) ` 成立时提前返回 ` List.of() `<br>` (powerGrids.isEmpty()) ` 成立时提前返回 ` List.of() `<br>` (optional.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(value instanceof DischargerBlockEntity discharger)) ` 内调用 ` List.of() `<br>实现调用 ` discharger.getBlockPos() `<br>实现调用 ` value.getBlockState().hasProperty(IPowerComponent.OVERLOAD) `<br>实现调用 ` value.getBlockState() `<br>分支 ` (value.getBlockState().hasProperty(IPowerComponent.OVERLOAD)) ` 内调用 ` value.getBlockState().getValues().getOrDefault(IPowerComponent.OVERLOAD, true).equals(Boolean.TRUE) `<br>分支 ` (value.getBlockState().hasProperty(IPowerComponent.OVERLOAD)) ` 内调用 ` value.getBlockState().getValues().getOrDefault(IPowerComponent.OVERLOAD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L27) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L99) |
| ` public DischargerTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L69) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L21) |

## FluidTankTooltipProvider

` public class FluidTankTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof FluidTankBlockEntity \|\| value instanceof LargeFluidTankBlockEntity \|\| value instanceof FishTankBlockEntity \|\| value instanceof StorageFluidPortBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L23) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | 末尾返回 ` lines `<br>分支 ` (value instanceof IFluidHandlerHolder tank) ` 内调用 ` Minecraft.getInstance() `<br>分支 ` (value instanceof IFluidHandlerHolder tank) ` 内调用 ` player.isShiftKeyDown() `<br>分支 ` (value instanceof IFluidHandlerHolder tank) ` 内调用 ` tank.getFluidHandler() `<br>分支 ` (value instanceof IFluidHandlerHolder tank) ` 内调用 ` handler.getTanks() `<br>分支 ` (value instanceof IFluidHandlerHolder tank) ` 内调用 ` handler.getFluidInTank(i) `<br>分支 ` (value instanceof IFluidHandlerHolder tank) ` 内调用 ` fluid.isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L29) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L91) |
| ` public FluidTankTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L85) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L22) |

## HeatCollectorTooltipProvider

` public class HeatCollectorTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeatCollectorTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L70) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L24) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof HeatCollectorBlockEntity \|\| entity instanceof InfiniteCollectorBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L27) |
| ` @Override public List<Component> tooltip(BlockEntity e) ` | ` (!working) ` 成立时提前返回 ` List.of( Component.translatable("tooltip.anvilcraft.heat_collector.not_work").withStyle(ChatFormatting.RED), Component.translatable(result) ) `<br>` (powerGrids.isEmpty()) ` 成立时提前返回 ` List.of() `<br>` (optional.isEmpty()) ` 成立时提前返回 ` null `<br>末尾返回 ` lines `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isShiftKeyDown() `<br>分支 ` (e instanceof HeatCollectorBlockEntity collector) ` 内调用 ` collector.isWorking() `<br>分支 ` (e instanceof HeatCollectorBlockEntity collector) ` 内调用 ` collector.getResult().getTranslateKey() `<br>分支 ` (e instanceof HeatCollectorBlockEntity collector) ` 内调用 ` collector.getResult() `<br>分支 ` (e instanceof InfiniteCollectorBlockEntity collector) ` 内调用 ` collector.isWorking() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L32) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L112) |

## HeatableBlockTooltipProvider

` public class HeatableBlockTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof HeatableBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L27) |
| ` @Override public List<Component> tooltip(BlockEntity entity) ` | ` (level == null) ` 成立时提前返回 ` components `<br>末尾返回 ` components `<br>实现调用 ` entity.getLevel() `<br>实现调用 ` HeatRecorder.getTier(level, entity.getBlockPos(), entity.getBlockState()) `<br>实现调用 ` entity.getBlockPos() `<br>实现调用 ` entity.getBlockState() `<br>实现调用 ` this.refreshDuration(entity) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.waiting") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L32) |
| ` @Override public void resetClientState() ` | 分支 ` (this.pendingDuration != null) ` 内调用 ` this.pendingDuration.cancel(false) `<br>[调用处 HeatableBlockTooltipProvider.refreshDuration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L73) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L82) |
| ` public HeatableBlockTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L82) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L20) |

## HeliostatsTooltip

` public class HeliostatsTooltip implements IHandHeldItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(ItemStack itemStack) ` | 末尾返回 ` itemStack.is(ModBlocks.HELIOSTATS.asItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L17) |
| ` @Override public void render( PoseStack poseStack, VertexConsumer consumer, ItemStack itemStack, double camX, double camY, double camZ ) ` | 实现调用 ` HeliostatsItem.hasDataStored(itemStack) `<br>分支 ` (HeliostatsItem.hasDataStored(itemStack)) ` 内调用 ` HeliostatsItem.getData(itemStack) `<br>分支 ` (HeliostatsItem.hasDataStored(itemStack)) ` 内调用 ` Shapes.create(aabb) `<br>分支 ` (HeliostatsItem.hasDataStored(itemStack)) ` 内调用 ` TooltipRenderHelper.renderOutline(poseStack, consumer, camX, camY, camZ, BlockPos.ZERO, shape, 0xFF66CCFF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L22) |
| ` @Override public void renderTooltip(GuiGraphics guiGraphics, int screenWidth, int screenHeight) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L39) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L43) |
| ` public HeliostatsTooltip() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L74) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L16) |

## HeliostatsTooltipProvider

` public class HeliostatsTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeliostatsTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L75) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L12) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof HeliostatsBlockEntity heliostatsBlockEntity && !heliostatsBlockEntity.getWorkResult().isWorking() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L15) |
| ` @Override public List<Component> tooltip(BlockEntity e) ` | ` (!(e instanceof HeliostatsBlockEntity heliostatsBlockEntity)) ` 成立时提前返回 ` null `<br>末尾返回 ` lines `<br>实现调用 ` lines.add(Component.translatable("tooltip.anvilcraft.heliostats.not_work")) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.heliostats.not_work") `<br>实现调用 ` lines.add(Component.translatable(heliostatsBlockEntity.getWorkResult().getTranslateKey())) `<br>实现调用 ` Component.translatable(heliostatsBlockEntity.getWorkResult().getTranslateKey()) `<br>实现调用 ` heliostatsBlockEntity.getWorkResult().getTranslateKey() `<br>实现调用 ` heliostatsBlockEntity.getWorkResult() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L21) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L30) |

## InjectedBlockEntityTooltipProvider

` public class InjectedBlockEntityTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InjectedBlockEntityTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L81) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L12) |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` this.cast(value).isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L27) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | 末尾返回 ` this.cast(value).map(ITooltipProviderExtension::anvilcraft$getTooltip).orElse(List.of()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L32) |
| ` @Override public int priority() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L37) |

## InjectedBlockTooltipProvider

` public class InjectedBlockTooltipProvider extends ITooltipProvider.BlockTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InjectedBlockTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L79) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L14) |
| ` @Override public boolean accepts(Level level, BlockPos pos, BlockState value) ` | 末尾返回 ` Util.instanceOfAny(value.getBlock(), ITooltipProviderExtension.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L17) |
| ` @Override public List<Component> tooltip(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` Util.castSafely(state.getBlock(), ITooltipProviderExtension.class) .map(provider -> provider.anvilcraft$getTooltip(state)) .orElse(List.of()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L22) |
| ` @Override public int priority() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L29) |

## LargeCauldronTooltipProvider

` public class LargeCauldronTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof LargeCauldronBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L20) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | 末尾返回 ` lines `<br>实现调用 ` ((LargeCauldronBlockEntity) value).getMainPart() `<br>实现调用 ` cauldron.getRecipePreviews() `<br>实现调用 ` lines.add(heading("tooltip.anvilcraft.large_cauldron.inputs")) `<br>实现调用 ` heading("tooltip.anvilcraft.large_cauldron.inputs") `<br>实现调用 ` cauldron.getInputHandler().getSlots() `<br>实现调用 ` cauldron.getInputHandler() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L25) |
| ` @Override public int priority() ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L160) |
| ` public LargeCauldronTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L87) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L19) |

## LargeCrateTooltipProvider

` public class LargeCrateTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | ` ( Minecraft.getInstance().player == null \|\| !Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) && !Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) ) ` 成立时提前返回 ` false `<br>末尾返回 ` value instanceof LargeCrateBlockEntity `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem() `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L14) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` ( Minecraft.getInstance().player == null \|\| !Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) && !Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) ) ` 成立时提前返回 ` ImmutableList.of() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem() `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem() `<br>实现调用 ` ImmutableList.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L26) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L43) |
| ` public LargeCrateTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L88) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L13) |

## PowerComponentTooltipProvider

` public class PowerComponentTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L29)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PowerComponentTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L71) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L30) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof IPowerComponent ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L33) |
| ` @SuppressWarnings("checkstyle:VariableDeclarationUsageDistance") @Override public List<Component> tooltip(BlockEntity e) ` | ` (powerGrids.isEmpty()) ` 成立时提前返回 ` List.of() `<br>` (optional.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isShiftKeyDown() `<br>实现调用 ` e.getBlockState() `<br>实现调用 ` blockState.getBlock() `<br>分支 ` (blockState.getBlock() instanceof AbstractMultiPartBlock<?> multiPartBlock) ` 内调用 ` multiPartBlock.getMainPartPos(e.getBlockPos(), e.getBlockState()) `<br>分支 ` (blockState.getBlock() instanceof AbstractMultiPartBlock<?> multiPartBlock) ` 内调用 ` e.getBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L38) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L139) |

## PropelPistonTooltipProvider

` public class PropelPistonTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity blockEntity) ` | 末尾返回 ` blockEntity instanceof PropelPistonBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L20) |
| ` @Override public List<Component> tooltip(BlockEntity blockEntity) ` | 末尾返回 ` tooltips `<br>实现调用 ` blockEntity.getLevel() `<br>实现调用 ` blockEntity.getBlockPos() `<br>分支 ` (level != null) ` 内调用 ` level.getBlockState(pos) `<br>分支 ` (level != null) ` 内调用 ` state.getValue(PropelPistonBlock.MOVING) `<br>分支 ` (state.getValue(PropelPistonBlock.MOVING)) ` 内调用 ` List.of() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L25) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L54) |
| ` public PropelPistonTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L84) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L19) |

## PulseGeneratorTooltipProvider

` public class PulseGeneratorTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof PulseGeneratorBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L14) |
| ` @Override public List<Component> tooltip(BlockEntity entity) ` | ` (!(entity instanceof PulseGeneratorBlockEntity pulseGenerator)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(entity instanceof PulseGeneratorBlockEntity pulseGenerator)) ` 内调用 ` List.of() `<br>实现调用 ` pulseGenerator.getStartMode() `<br>实现调用 ` pulseGenerator.isOutputInvert() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.pulse_generator.title").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.pulse_generator.title") `<br>实现调用 ` ITooltipProvider.withIndentAndMerge(Component.translatable(modeKey).withStyle(ChatFormatting.GRAY)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L19) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L52) |
| ` public PulseGeneratorTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L95) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L13) |

## RedstoneWireTooltipProvider

` public class RedstoneWireTooltipProvider extends ITooltipProvider.BlockTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L25)

为自定义红石导线提供铁砧锤 HUD 信息。 整网功率由服务端网络管理器同步到客户端缓存；防反馈使用的非红石粉输入强度按需查询， 两者都不需要为每根导线创建方块实体。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(Level level, BlockPos pos, BlockState value) ` | 末尾返回 ` value.getBlock() instanceof RedstoneWireBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L41) |
| ` @Override public List<Component> tooltip(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` lines `<br>实现调用 ` ensureLevel(level) `<br>实现调用 ` pos.asLong() `<br>实现调用 ` level.getGameTime() `<br>实现调用 ` LAST_REQUEST.get(packedPos) `<br>分支 ` (lastRequest == Long.MIN_VALUE \|\| gameTime - lastRequest >= REQUEST_INTERVAL) ` 内调用 ` LAST_REQUEST.put(packedPos, gameTime) `<br>分支 ` (lastRequest == Long.MIN_VALUE \|\| gameTime - lastRequest >= REQUEST_INTERVAL) ` 内调用 ` PacketDistributor.sendToServer(new RedstoneWirePowerRequestPacket(pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L46) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L73) |
| ` public static void receive(Level level, BlockPos pos, int nonDustPower) ` | 接收服务端返回的非红石粉输入强度并更新当前位置缓存。<br>实现调用 ` ensureLevel(level) `<br>实现调用 ` NON_DUST_POWER.put(pos.asLong(), nonDustPower) `<br>实现调用 ` pos.asLong() `<br>[调用处 RedstoneWirePowerResponsePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L79) |
| ` public RedstoneWireTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L80) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L25) |
