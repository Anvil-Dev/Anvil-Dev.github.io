# dev.dubhe.anvilcraft.api.tooltip.impl



## AffectRangeProviderImpl

` public class AffectRangeProviderImpl implements IAffectRangeProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof IHasAffectRange ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L11) |
| ` @Override public VoxelShape affectRange(BlockEntity entity) ` | ` (entity instanceof IHasAffectRange har && har.shape() instanceof AABB shape) ` 成立时提前返回 ` Shapes.create(shape) `<br>末尾返回 ` Shapes.empty() `<br>实现调用 ` har.shape() `<br>分支 ` (entity instanceof IHasAffectRange har && har.shape() instanceof AABB shape) ` 内调用 ` Shapes.create(shape) `<br>实现调用 ` Shapes.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L16) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L25) |
| ` public AffectRangeProviderImpl() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L70) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/AffectRangeProviderImpl.java#L10) |

## BurningHeaterTooltipProvider

` public class BurningHeaterTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof BurningHeaterBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L18) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` (!(value instanceof BurningHeaterBlockEntity be)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(value instanceof BurningHeaterBlockEntity be)) ` 内调用 ` List.of() `<br>实现调用 ` be.getBlockState() `<br>实现调用 ` state.getBlock() `<br>分支 ` (state.getBlock() instanceof BurningHeaterBlock) ` 内调用 ` state.getValue(BurningHeaterBlock.LEVEL) `<br>分支 ` !(state.getBlock() instanceof BurningHeaterBlock) ` 内调用 ` be.getBurnTime() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.burning_heater.state_name") .withStyle(ChatFormatting.BLUE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L23) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L91) |
| ` public BurningHeaterTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L79) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/BurningHeaterTooltipProvider.java#L17) |

## CfaFluidInterfaceTooltipProvider

` public class CfaFluidInterfaceTooltipProvider extends CfaInterfaceTooltipProvider<CelestialForgingAnvilFluidInterfaceBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaFluidInterfaceTooltipProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CfaFluidInterfaceTooltipProvider() ` | 执行 ` super(CelestialForgingAnvilFluidInterfaceBlockEntity.class) `<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L85) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaFluidInterfaceTooltipProvider.java#L15) |

## CfaLaserInterfaceTooltipProvider

` public class CfaLaserInterfaceTooltipProvider extends CfaInterfaceTooltipProvider<CelestialForgingAnvilLaserInterfaceBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLaserInterfaceTooltipProvider.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CfaLaserInterfaceTooltipProvider() ` | 执行 ` super(CelestialForgingAnvilLaserInterfaceBlockEntity.class) `<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L84) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLaserInterfaceTooltipProvider.java#L13) |

## CfaLogisticsInterfaceTooltipProvider

` public class CfaLogisticsInterfaceTooltipProvider extends CfaInterfaceTooltipProvider<CelestialForgingAnvilLogisticsInterfaceBlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CfaLogisticsInterfaceTooltipProvider() ` | 执行 ` super(CelestialForgingAnvilLogisticsInterfaceBlockEntity.class) `<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L83) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L29) |
| ` @Override public ItemStack icon(BlockEntity value) ` | 末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CfaLogisticsInterfaceTooltipProvider.java#L138) |

## ChargerTooltipProvider

` public class ChargerTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof ChargerBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L22) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` (!(value instanceof ChargerBlockEntity charger)) ` 成立时提前返回 ` List.of() `<br>` (powerGrids.isEmpty()) ` 成立时提前返回 ` List.of() `<br>` (optional.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(value instanceof ChargerBlockEntity charger)) ` 内调用 ` List.of() `<br>实现调用 ` charger.getBlockPos() `<br>实现调用 ` charger.getBlockState().hasProperty(IPowerComponent.OVERLOAD) `<br>实现调用 ` charger.getBlockState() `<br>分支 ` (charger.getBlockState().hasProperty(IPowerComponent.OVERLOAD)) ` 内调用 ` charger.getBlockState().getValueOrElse(IPowerComponent.OVERLOAD, true).equals(Boolean.TRUE) `<br>分支 ` (charger.getBlockState().hasProperty(IPowerComponent.OVERLOAD)) ` 内调用 ` charger.getBlockState().getValueOrElse(IPowerComponent.OVERLOAD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L27) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L94) |
| ` public ChargerTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L64) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ChargerTooltipProvider.java#L21) |

## CrabTrapTooltipProvider

` public class CrabTrapTooltipProvider extends ITooltipProvider.BlockTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` state.is(ModBlocks.CRAB_TRAP) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L16) |
| ` @Override public List<Component> tooltip(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` lines `<br>实现调用 ` state.getValue(CrabTrapBlock.FISHING) `<br>实现调用 ` lines.add(Component.translatable("tooltip.anvilcraft.crab_trap.state_name").withStyle(ChatFormatting.BLUE)) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.crab_trap.state_name").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.crab_trap.state_name") `<br>实现调用 ` Component.literal(" ").append(Component.translatable("tooltip.anvilcraft.crab_trap.jade.fishing", fishing)) `<br>实现调用 ` Component.literal(" ") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L21) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L30) |
| ` public CrabTrapTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L88) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/CrabTrapTooltipProvider.java#L15) |

## DeflectionRingTooltipProvider

` public class DeflectionRingTooltipProvider extends PowerComponentTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof DeflectionRingBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L17) |
| ` @Override public int priority() ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L22) |
| ` @Override public List<Component> tooltip(BlockEntity blockEntity) ` | ` (!(blockEntity.getBlockState().getBlock() instanceof DeflectionRingBlock deflectionRingBlock)) ` 成立时提前返回 ` lines `<br>` (level == null) ` 成立时提前返回 ` lines `<br>` (!(level.getBlockEntity(center) instanceof DeflectionRingBlockEntity deflectionRingBlockEntity)) ` 成立时提前返回 ` lines `<br>末尾返回 ` lines `<br>实现调用 ` super.tooltip(blockEntity) `<br>实现调用 ` blockEntity.getBlockState().getBlock() `<br>实现调用 ` blockEntity.getBlockState() `<br>实现调用 ` deflectionRingBlock.getMainPartPos(blockEntity.getBlockPos(), blockEntity.getBlockState()) `<br>实现调用 ` blockEntity.getBlockPos() `<br>实现调用 ` blockEntity.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L27) |
| ` public DeflectionRingTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L80) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DeflectionRingTooltipProvider.java#L15) |

## DischargerTooltipProvider

` public class DischargerTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof DischargerBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L22) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` (!(value instanceof DischargerBlockEntity discharger)) ` 成立时提前返回 ` List.of() `<br>` (powerGrids.isEmpty()) ` 成立时提前返回 ` List.of() `<br>` (optional.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(value instanceof DischargerBlockEntity discharger)) ` 内调用 ` List.of() `<br>实现调用 ` discharger.getBlockPos() `<br>实现调用 ` discharger.getBlockState().hasProperty(IPowerComponent.OVERLOAD) `<br>实现调用 ` discharger.getBlockState() `<br>分支 ` (discharger.getBlockState().hasProperty(IPowerComponent.OVERLOAD)) ` 内调用 ` discharger.getBlockState().getValueOrElse(IPowerComponent.OVERLOAD, true).equals(Boolean.TRUE) `<br>分支 ` (discharger.getBlockState().hasProperty(IPowerComponent.OVERLOAD)) ` 内调用 ` discharger.getBlockState().getValueOrElse(IPowerComponent.OVERLOAD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L27) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L98) |
| ` public DischargerTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L65) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/DischargerTooltipProvider.java#L21) |

## FluidTankTooltipProvider

` public class FluidTankTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof FluidTankBlockEntity \|\| value instanceof LargeFluidTankBlockEntity \|\| value instanceof FishTankBlockEntity \|\| value instanceof StorageFluidPortBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L26) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | 末尾返回 ` lines `<br>分支 ` (value instanceof IFluidResourceHandlerHolder tank) ` 内调用 ` Minecraft.getInstance() `<br>分支 ` (value instanceof IFluidResourceHandlerHolder tank) ` 内调用 ` player.isShiftKeyDown() `<br>分支 ` (value instanceof IFluidResourceHandlerHolder tank) ` 内调用 ` tank.getFluidHandler() `<br>分支 ` (value instanceof IFluidResourceHandlerHolder tank) ` 内调用 ` handler.size() `<br>分支 ` (value instanceof IFluidResourceHandlerHolder tank) ` 内调用 ` handler.getResource(i).toStack(handler.getAmountAsInt(i)) `<br>分支 ` (value instanceof IFluidResourceHandlerHolder tank) ` 内调用 ` handler.getResource(i) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L32) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L96) |
| ` public FluidTankTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L66) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/FluidTankTooltipProvider.java#L23) |

## HeatCollectorTooltipProvider

` public class HeatCollectorTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeatCollectorTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L68) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L24) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof HeatCollectorBlockEntity \|\| entity instanceof InfiniteCollectorBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L27) |
| ` @Override public List<Component> tooltip(BlockEntity e) ` | ` (!working) ` 成立时提前返回 ` List.of( Component.translatable("tooltip.anvilcraft.heat_collector.not_work").withStyle(ChatFormatting.RED), Component.translatable(result) ) `<br>` (powerGrids.isEmpty()) ` 成立时提前返回 ` List.of() `<br>` (optional.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isShiftKeyDown() `<br>分支 ` (e instanceof HeatCollectorBlockEntity collector) ` 内调用 ` collector.isWorking() `<br>分支 ` (e instanceof HeatCollectorBlockEntity collector) ` 内调用 ` collector.getResult().getTranslateKey() `<br>分支 ` (e instanceof HeatCollectorBlockEntity collector) ` 内调用 ` collector.getResult() `<br>分支 ` (e instanceof InfiniteCollectorBlockEntity collector) ` 内调用 ` collector.isWorking() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L32) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatCollectorTooltipProvider.java#L112) |

## HeatableBlockTooltipProvider

` public class HeatableBlockTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof HeatableBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L29) |
| ` @Override public List<Component> tooltip(BlockEntity entity) ` | ` (entity.getLevel() == null) ` 成立时提前返回 ` components `<br>末尾返回 ` components `<br>实现调用 ` entity.getLevel() `<br>实现调用 ` HeatRecorder.getTier( entity.getLevel(), entity.getBlockPos(), entity.getBlockState() ) `<br>实现调用 ` entity.getBlockPos() `<br>实现调用 ` entity.getBlockState() `<br>实现调用 ` this.refreshDuration(entity) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.waiting") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L34) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L83) |
| ` public HeatableBlockTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L78) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeatableBlockTooltipProvider.java#L22) |

## HeliostatsTooltip

` public class HeliostatsTooltip implements IHandHeldItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(ItemStack itemStack) ` | 末尾返回 ` itemStack.is(ModBlocks.HELIOSTATS.asItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L17) |
| ` @Override public void render( PoseStack poseStack, VertexConsumer consumer, ItemStack itemStack, double camX, double camY, double camZ ) ` | 实现调用 ` HeliostatsItem.hasDataStored(itemStack) `<br>分支 ` (HeliostatsItem.hasDataStored(itemStack)) ` 内调用 ` HeliostatsItem.getData(itemStack) `<br>分支 ` (HeliostatsItem.hasDataStored(itemStack)) ` 内调用 ` Shapes.create(aabb) `<br>分支 ` (HeliostatsItem.hasDataStored(itemStack)) ` 内调用 ` TooltipRenderHelper.renderOutline(poseStack, consumer, camX, camY, camZ, BlockPos.ZERO, shape, 0xFF66CCFF) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L22) |
| ` @Override public void renderTooltip(GuiGraphicsExtractor graphics, int screenWidth, int screenHeight) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L39) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L43) |
| ` public HeliostatsTooltip() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L72) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltip.java#L16) |

## HeliostatsTooltipProvider

` public class HeliostatsTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public HeliostatsTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L73) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L12) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof HeliostatsBlockEntity heliostatsBlockEntity && !heliostatsBlockEntity.getWorkResult().isWorking() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L15) |
| ` @Override public List<Component> tooltip(BlockEntity e) ` | ` (!(e instanceof HeliostatsBlockEntity heliostatsBlockEntity)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(e instanceof HeliostatsBlockEntity heliostatsBlockEntity)) ` 内调用 ` List.of() `<br>实现调用 ` lines.add(Component.translatable("tooltip.anvilcraft.heliostats.not_work")) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.heliostats.not_work") `<br>实现调用 ` lines.add(Component.translatable(heliostatsBlockEntity.getWorkResult().getTranslateKey())) `<br>实现调用 ` Component.translatable(heliostatsBlockEntity.getWorkResult().getTranslateKey()) `<br>实现调用 ` heliostatsBlockEntity.getWorkResult().getTranslateKey() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L21) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/HeliostatsTooltipProvider.java#L30) |

## InjectedBlockEntityTooltipProvider

` public class InjectedBlockEntityTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InjectedBlockEntityTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L77) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L12) |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` this.cast(value).isPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L27) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | 末尾返回 ` this.cast(value).map(ITooltipProviderExtension::anvilcraft$getTooltip).orElse(List.of()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L32) |
| ` @Override public int priority() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockEntityTooltipProvider.java#L37) |

## InjectedBlockTooltipProvider

` public class InjectedBlockTooltipProvider extends ITooltipProvider.BlockTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public InjectedBlockTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L14) |
| ` @Override public boolean accepts(Level level, BlockPos pos, BlockState value) ` | 末尾返回 ` Util.instanceOfAny(value.getBlock(), ITooltipProviderExtension.class) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L17) |
| ` @Override public List<Component> tooltip(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` Util.castSafely(state.getBlock(), ITooltipProviderExtension.class) .map(provider -> provider.anvilcraft$getTooltip(state)) .orElse(List.of()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L22) |
| ` @Override public int priority() ` | 末尾返回 ` 1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/InjectedBlockTooltipProvider.java#L29) |

## LargeCauldronTooltipProvider

` public class LargeCauldronTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | 末尾返回 ` value instanceof LargeCauldronBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L21) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | 末尾返回 ` lines `<br>实现调用 ` ((LargeCauldronBlockEntity) value).getMainPart() `<br>实现调用 ` cauldron.getRecipePreviews() `<br>实现调用 ` lines.add(LargeCauldronTooltipProvider.heading("tooltip.anvilcraft.large_cauldron.inputs")) `<br>实现调用 ` LargeCauldronTooltipProvider.heading("tooltip.anvilcraft.large_cauldron.inputs") `<br>实现调用 ` cauldron.getInputHandler().size() `<br>实现调用 ` cauldron.getInputHandler() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L26) |
| ` @Override public int priority() ` | 末尾返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L173) |
| ` public LargeCauldronTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L82) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCauldronTooltipProvider.java#L20) |

## LargeCrateTooltipProvider

` public class LargeCrateTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | ` ( Minecraft.getInstance().player == null \|\| !Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) && !Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) ) ` 成立时提前返回 ` false `<br>末尾返回 ` value instanceof LargeCrateBlockEntity `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem() `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L14) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` ( Minecraft.getInstance().player == null \|\| !Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) && !Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) ) ` 成立时提前返回 ` ImmutableList.of() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem() `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem() `<br>实现调用 ` ImmutableList.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L26) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L43) |
| ` public LargeCrateTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L89) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/LargeCrateTooltipProvider.java#L13) |

## PowerComponentTooltipProvider

` public class PowerComponentTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PowerComponentTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L69) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L26) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof IPowerComponent ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L29) |
| ` @Override public List<Component> tooltip(BlockEntity e) ` | ` (powerGrids.isEmpty()) ` 成立时提前返回 ` List.of() `<br>` (optional.isEmpty()) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isShiftKeyDown() `<br>实现调用 ` e.getBlockState() `<br>实现调用 ` blockState.getBlock() `<br>分支 ` (blockState.getBlock() instanceof AbstractMultiPartBlock<?> multiPartBlock) ` 内调用 ` multiPartBlock.getMainPartPos(e.getBlockPos(), e.getBlockState()) `<br>分支 ` (blockState.getBlock() instanceof AbstractMultiPartBlock<?> multiPartBlock) ` 内调用 ` e.getBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L34) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PowerComponentTooltipProvider.java#L111) |

## PropelPistonTooltipProvider

` public class PropelPistonTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity blockEntity) ` | 末尾返回 ` blockEntity instanceof PropelPistonBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L20) |
| ` @Override public List<Component> tooltip(BlockEntity blockEntity) ` | 末尾返回 ` tooltips `<br>实现调用 ` blockEntity.getLevel() `<br>实现调用 ` blockEntity.getBlockPos() `<br>分支 ` (level != null) ` 内调用 ` level.getBlockState(pos) `<br>分支 ` (level != null) ` 内调用 ` state.getValue(PropelPistonBlock.MOVING) `<br>分支 ` (state.getValue(PropelPistonBlock.MOVING)) ` 内调用 ` List.of() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L25) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L54) |
| ` public PropelPistonTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L81) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PropelPistonTooltipProvider.java#L19) |

## PulseGeneratorTooltipProvider

` public class PulseGeneratorTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof PulseGeneratorBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L14) |
| ` @Override public List<Component> tooltip(BlockEntity entity) ` | ` (!(entity instanceof PulseGeneratorBlockEntity pulseGenerator)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` lines `<br>分支 ` (!(entity instanceof PulseGeneratorBlockEntity pulseGenerator)) ` 内调用 ` List.of() `<br>实现调用 ` pulseGenerator.getStartMode() `<br>实现调用 ` pulseGenerator.isOutputInvert() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.pulse_generator.title").withStyle(ChatFormatting.BLUE) `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.pulse_generator.title") `<br>实现调用 ` ITooltipProvider.withIndentAndMerge(Component.translatable(modeKey).withStyle(ChatFormatting.GRAY)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L19) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L52) |
| ` public PulseGeneratorTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L86) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/PulseGeneratorTooltipProvider.java#L13) |

## RedstoneWireTooltipProvider

` public class RedstoneWireTooltipProvider extends ITooltipProvider.BlockTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L26)

为自定义红石导线提供铁砧锤 HUD 信息。 整网功率由服务端网络管理器同步到客户端缓存；防反馈使用的非红石粉输入强度按需查询， 两者都不需要为每根导线创建方块实体。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(Level level, BlockPos pos, BlockState value) ` | 末尾返回 ` value.getBlock() instanceof RedstoneWireBlock ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L42) |
| ` @Override public List<Component> tooltip(Level level, BlockPos pos, BlockState state) ` | 末尾返回 ` lines `<br>实现调用 ` RedstoneWireTooltipProvider.ensureLevel(level) `<br>实现调用 ` pos.asLong() `<br>实现调用 ` level.getGameTime() `<br>实现调用 ` RedstoneWireTooltipProvider.LAST_REQUEST.get(packedPos) `<br>实现调用 ` RedstoneWireTooltipProvider.LAST_REQUEST.put(packedPos, gameTime) `<br>实现调用 ` ClientPacketDistributor.sendToServer(new RedstoneWirePowerRequestPacket(pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L47) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L75) |
| ` public static void receive(Level level, BlockPos pos, int nonDustPower) ` | 接收服务端返回的非红石粉输入强度并更新当前位置缓存。<br>实现调用 ` RedstoneWireTooltipProvider.ensureLevel(level) `<br>实现调用 ` RedstoneWireTooltipProvider.NON_DUST_POWER.put(pos.asLong(), nonDustPower) `<br>实现调用 ` pos.asLong() `<br>[调用处 RedstoneWirePowerResponsePacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneWirePowerResponsePacket.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L81) |
| ` public RedstoneWireTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L87) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RedstoneWireTooltipProvider.java#L26) |

## RubyPrismTooltipProvider

` public class RubyPrismTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RubyPrismTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L71) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L11) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof RubyPrismBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L14) |
| ` @Override public List<Component> tooltip(BlockEntity e) ` | ` (e instanceof RubyPrismBlockEntity rubyPrismBlockEntity) ` 成立时提前返回 ` List.of(Component.translatable("tooltip.anvilcraft.jade.ruby_prism.power", rubyPrismBlockEntity.getLaserLevel())) `<br>末尾返回 ` List.of() `<br>分支 ` (e instanceof RubyPrismBlockEntity rubyPrismBlockEntity) ` 内调用 ` Component.translatable("tooltip.anvilcraft.jade.ruby_prism.power", rubyPrismBlockEntity.getLaserLevel()) `<br>分支 ` (e instanceof RubyPrismBlockEntity rubyPrismBlockEntity) ` 内调用 ` rubyPrismBlockEntity.getLaserLevel() `<br>实现调用 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L19) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L27) |

## ShulkerContainerTooltipProvider

` public class ShulkerContainerTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | ` ( Minecraft.getInstance().player == null \|\| !Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) && !Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) ) ` 成立时提前返回 ` false `<br>末尾返回 ` value instanceof ShulkerContainerBlockEntity `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem() `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L27) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` ( Minecraft.getInstance().player == null \|\| !Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) && !Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) ) ` 成立时提前返回 ` ImmutableList.of() `<br>末尾返回 ` builder.build() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem() `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem() `<br>实现调用 ` ImmutableList.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L39) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L107) |
| ` public ShulkerContainerTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L90) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L18) |

## SpaceOvercompressorTooltipProvider

` public class SpaceOvercompressorTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpaceOvercompressorTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L74) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L11) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof SpaceOvercompressorBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L14) |
| ` @Override public List<Component> tooltip(BlockEntity e) ` | ` (!(e instanceof SpaceOvercompressorBlockEntity compressor)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` List.of(Component.translatable("tooltip.anvilcraft.space_overcompressor.stored_mass", compressor.displayStoredMass())) `<br>分支 ` (!(e instanceof SpaceOvercompressorBlockEntity compressor)) ` 内调用 ` List.of() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.space_overcompressor.stored_mass", compressor.displayStoredMass()) `<br>实现调用 ` compressor.displayStoredMass() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L19) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L25) |

## StoragePortTooltipProvider

` public final class StoragePortTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L24)

显示仓储端口标记物品的可用总量，并在标记或查看目标改变时重新获取计数。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof StoragePortBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L32) |
| ` @Override public List<Component> tooltip(BlockEntity entity) ` | 末尾返回 ` List.of(entity.getBlockState().getBlock().getName()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L37) |
| ` public List<ClientTooltipComponent> components(BlockEntity entity) ` | ` (!(entity instanceof StoragePortBlockEntity port)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` result `<br>分支 ` (!(entity instanceof StoragePortBlockEntity port)) ` 内调用 ` List.of() `<br>实现调用 ` port.getMarkedItem() `<br>实现调用 ` marked.isEmpty() `<br>分支 ` (marked.isEmpty()) ` 内调用 ` this.resetClientState() `<br>分支 ` !(marked.isEmpty()) ` 内调用 ` this.refresh(port, marked) `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L42) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L124) |
| ` public StoragePortTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L67) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L24) |
