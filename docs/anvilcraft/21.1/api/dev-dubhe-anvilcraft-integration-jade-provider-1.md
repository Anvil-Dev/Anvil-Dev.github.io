# dev.dubhe.anvilcraft.integration.jade.provider（AutoEnchantingTableProvider 至 PulseGeneratorProvider）



## AutoEnchantingTableProvider

` public enum AutoEnchantingTableProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` AutoEnchantingTableProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L18) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` data.contains("auto_enchanting_table_cooldown_ticks") `<br>实现调用 ` data.getInt("auto_enchanting_table_cooldown_ticks") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L22) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>实现调用 ` blockEntity.getCooldownTicks() `<br>分支 ` (cooldownTicks <= 0 \|\| cooldownTicks >= totalTicks) ` 内调用 ` tag.putInt("auto_enchanting_table_cooldown_ticks", 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L49) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("auto_enchanting_table_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L64) |
| ` public static AutoEnchantingTableProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L17) |
| ` public static AutoEnchantingTableProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L17) |

## BurningHeaterProvider

` public enum BurningHeaterProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` BurningHeaterProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L19) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockState() `<br>实现调用 ` state.getBlock() `<br>实现调用 ` state.getValue(BurningHeaterBlock.LEVEL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L21) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof BurningHeaterBlockEntity entity) ` 内调用 ` tag.putInt("burnTime", entity.getBurnTime()) `<br>分支 ` (accessor.getBlockEntity() instanceof BurningHeaterBlockEntity entity) ` 内调用 ` entity.getBurnTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L62) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("burning_heater_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L69) |
| ` public static BurningHeaterProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L18) |
| ` public static BurningHeaterProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L18) |

## ChargerProvider

` public enum ChargerProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` ChargerProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L20) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` data.contains("charger_timeLeft") `<br>实现调用 ` data.contains("charger_timeTotalCache") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L24) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof ChargerBlockEntity charger) ` 内调用 ` tag.putInt("charger_timeLeft", charger.getTimeLeft()) `<br>分支 ` (accessor.getBlockEntity() instanceof ChargerBlockEntity charger) ` 内调用 ` charger.getTimeLeft() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L65) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("charger_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L74) |
| ` public static ChargerProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L19) |
| ` public static ChargerProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L19) |

## CollectorProvider

` public enum CollectorProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CollectorProvider.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CollectorProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CollectorProvider.java#L15) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof ItemCollectorBlockEntity itemCollector) ` 内调用 ` itemCollector.getRangeRadius() `<br>分支 ` (accessor.getBlockEntity() instanceof ItemCollectorBlockEntity itemCollector) ` 内调用 ` itemCollector.getCooldown() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CollectorProvider.java#L17) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("collector") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CollectorProvider.java#L34) |
| ` public static CollectorProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CollectorProvider.java#L14) |
| ` public static CollectorProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CollectorProvider.java#L14) |

## ControlValveProvider

` public enum ControlValveProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ControlValveProvider.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` ControlValveProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ControlValveProvider.java#L18) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockEntity() `<br>实现调用 ` IElementHelper.get() `<br>实现调用 ` valve.getFilteredFluids() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ControlValveProvider.java#L20) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("control_valve") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ControlValveProvider.java#L53) |
| ` public static ControlValveProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ControlValveProvider.java#L17) |
| ` public static ControlValveProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ControlValveProvider.java#L17) |

## CrabTrapBlockStateProvider

` public enum CrabTrapBlockStateProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CrabTrapBlockStateProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L17) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor blockAccessor, IPluginConfig pluginConfig) ` | 实现调用 ` blockAccessor.getServerData() `<br>实现调用 ` serverData.contains("fishing") `<br>分支 ` (serverData.contains("fishing")) ` 内调用 ` serverData.getInt("fishing") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L19) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockState() `<br>实现调用 ` blockState.is(ModBlocks.CRAB_TRAP) `<br>分支 ` (blockState.is(ModBlocks.CRAB_TRAP)) ` 内调用 ` blockState.getValue(CrabTrapBlock.FISHING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L28) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("crab_trap") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L37) |
| ` public static CrabTrapBlockStateProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L16) |
| ` public static CrabTrapBlockStateProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L16) |

## CrateProvider

` public class CrateProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrateProvider.java#L17)

板条箱的 Jade 显示名：相邻虚空物质（dispose=true）时显示 「溢出销毁板条箱」，否则保留 Jade 核心按方块名渲染的默认名称行。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final CrateProvider INSTANCE ` | 初值 ` new CrateProvider() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrateProvider.java#L18) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockState().getBlock() `<br>实现调用 ` accessor.getBlockState() `<br>实现调用 ` accessor.getBlockState().getValue(CrateBlock.DISPOSE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrateProvider.java#L23) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("crate") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrateProvider.java#L34) |

## CreativeCrateProvider

` public class CreativeCrateProvider extends FluidStorageProvider.ForBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final CreativeCrateProvider INSTANCE ` | 初值 ` new CreativeCrateProvider() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L17) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof CreativeCrateBlockEntity blockEntity) ` 内调用 ` tooltip.clear() `<br>分支 ` (accessor.getBlockEntity() instanceof CreativeCrateBlockEntity blockEntity) ` 内调用 ` tooltip.add(Component.translatable("block.anvilcraft.creative_crate").withStyle(ChatFormatting.WHITE)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L22) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("creative_crate") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L43) |

## CreativeFluidTankProvider

` public class CreativeFluidTankProvider extends FluidStorageProvider.ForBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final CreativeFluidTankProvider INSTANCE ` | 初值 ` new CreativeFluidTankProvider() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L18) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof CreativeFluidTankBlockEntity blockEntity) ` 内调用 ` tooltip.clear() `<br>分支 ` (accessor.getBlockEntity() instanceof CreativeFluidTankBlockEntity blockEntity) ` 内调用 ` tooltip.add(Component.translatable("block.anvilcraft.creative_fluid_tank").withStyle(ChatFormatting.WHITE)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L23) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("creative_fluid_tank") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L59) |

## CursedGoldEnchantPowerProvider

` public enum CursedGoldEnchantPowerProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CursedGoldEnchantPowerProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L15) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockState().getEnchantPowerBonus(accessor.getLevel(), accessor.getPosition()) `<br>实现调用 ` accessor.getBlockState() `<br>实现调用 ` accessor.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L19) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("cursed_gold_enchant_power") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L25) |
| ` public static CursedGoldEnchantPowerProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L14) |
| ` public static CursedGoldEnchantPowerProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L14) |

## DischargerProvider

` public enum DischargerProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` DischargerProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L20) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` data.contains("discharger_timeLeft") `<br>实现调用 ` data.contains("discharger_timeTotalCache") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L24) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof DischargerBlockEntity discharger) ` 内调用 ` tag.putInt("discharger_timeLeft", discharger.getTimeLeft()) `<br>分支 ` (accessor.getBlockEntity() instanceof DischargerBlockEntity discharger) ` 内调用 ` discharger.getTimeLeft() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L66) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("discharger_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L75) |
| ` public static DischargerProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L19) |
| ` public static DischargerProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L19) |

## FluidTankProvider

` public class FluidTankProvider implements IServerExtensionProvider<CompoundTag> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidTankProvider INSTANCE ` | 初值 ` new FluidTankProvider() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L24) |
| ` public static final ResourceLocation UID ` | 初值 ` AnvilCraft.of("fluid_tank") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L25) |
| ` public static final String LARGE_TANK_GROUP ` | 初值 ` "large_tank" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L27) |
| ` public static final String FLUID_TANK_GROUP ` | 初值 ` "fluid_tank" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L28) |
| ` public static final String FLUID_PORT_GROUP ` | 初值 ` "fluid_port" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L29) |
| ` public static final String FLUID_CONSOLIDATOR_GROUP ` | 初值 ` "fluid_consolidator" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L30) |
| ` public static final String TOTAL_KEY ` | 初值 ` "Total" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L31) |
| ` public static final String CAPACITY_KEY ` | 初值 ` "Capacity" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L32) |
| ` public static final String ENHANCED_KEY ` | 初值 ` "Enhanced" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L33) |
| ` public static final String INFINITE_KEY ` | 初值 ` "Infinite" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L34) |
| ` @Override public @Nullable List<ViewGroup<CompoundTag>> getGroups(Accessor<?> accessor) ` | ` (!(accessor instanceof BlockAccessor blockAccessor)) ` 成立时提前返回 ` null `<br>` (blockAccessor.getBlockEntity() instanceof StoragePortConsolidatorBlockEntity consolidator) ` 成立时提前返回 ` consolidatorGroups(consolidator) `<br>` (!(blockAccessor.getBlockEntity() instanceof LargeFluidTankBlockEntity tank)) ` 成立时提前返回 ` null `<br>末尾返回 ` List.of(group) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L39) |
| ` @Override public int getDefaultPriority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L187) |
| ` @Override public boolean shouldRequestData(Accessor<?> accessor) ` | 末尾返回 ` accessor instanceof BlockAccessor ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L193) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` FluidTankProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/FluidTankProvider.java#L198) |

## HeatableBlockProvider

` public enum HeatableBlockProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` HeatableBlockProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L17) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` HeatRecorder.getTier(accessor.getLevel(), accessor.getPosition(), accessor.getBlockState()) `<br>实现调用 ` accessor.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L19) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof HeatableBlockEntity entity) ` 内调用 ` tag.putInt("duration", entity.getDuration()) `<br>分支 ` (accessor.getBlockEntity() instanceof HeatableBlockEntity entity) ` 内调用 ` entity.getDuration() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L31) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("heatable_block_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L38) |
| ` public static HeatableBlockProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L16) |
| ` public static HeatableBlockProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L16) |

## ItemDetectorProvider

` public enum ItemDetectorProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` ItemDetectorProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L22) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor blockAccessor, IPluginConfig pluginConfig) ` | 实现调用 ` Optional.ofNullable(Minecraft.getInstance().player) .map(LocalPlayer::isShiftKeyDown) .orElse(false) `<br>实现调用 ` Optional.ofNullable(Minecraft.getInstance().player) .map(LocalPlayer::isShiftKeyDown) `<br>实现调用 ` Optional.ofNullable(Minecraft.getInstance().player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L24) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockEntity() `<br>分支 ` (blockAccessor.getBlockEntity() instanceof ItemDetectorBlockEntity blockEntity) ` 内调用 ` compoundTag.putInt("Range", blockEntity.getRange()) `<br>分支 ` (blockAccessor.getBlockEntity() instanceof ItemDetectorBlockEntity blockEntity) ` 内调用 ` blockEntity.getRange() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L46) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("item_detector") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L54) |
| ` public static ItemDetectorProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L21) |
| ` public static ItemDetectorProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L21) |

## LoadMonitorProvider

` public enum LoadMonitorProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LoadMonitorProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` LoadMonitorProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LoadMonitorProvider.java#L16) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` serverData.contains("generate") `<br>实现调用 ` serverData.contains("consume") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LoadMonitorProvider.java#L18) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof LoadMonitorBlockEntity entity) ` 内调用 ` entity.getGrid() `<br>分支 ` (accessor.getBlockEntity() instanceof LoadMonitorBlockEntity entity) ` 内调用 ` tag.putInt("generate", grid.getGenerate()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LoadMonitorProvider.java#L30) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("load_monitor") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LoadMonitorProvider.java#L40) |
| ` public static LoadMonitorProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LoadMonitorProvider.java#L15) |
| ` public static LoadMonitorProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LoadMonitorProvider.java#L15) |

## MengerSpongeProvider

` public class MengerSpongeProvider extends FluidStorageProvider.ForBlock `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeProvider.java#L18)

门格海绵的 Jade 提示：流体容量显示为无限（只进不出的虚空容器）， 而非默认提供器读取容量上限时显示的 2.14B。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MengerSpongeProvider INSTANCE ` | 初值 ` new MengerSpongeProvider() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeProvider.java#L19) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` IElementHelper.get() `<br>实现调用 ` tooltip.clear() `<br>实现调用 ` tooltip.add(Component.translatable("block.anvilcraft.menger_sponge").withStyle(ChatFormatting.WHITE)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeProvider.java#L24) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("menger_sponge") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeProvider.java#L38) |

## MultiPartPowerBlockProvider

` public enum MultiPartPowerBlockProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` MultiPartPowerBlockProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L18) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockState() `<br>实现调用 ` state.getBlock() `<br>实现调用 ` findPowerGrid(multiPartBlock, accessor.getLevel(), accessor.getPosition(), state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L20) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("multipart_power") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L57) |
| ` public static MultiPartPowerBlockProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L17) |
| ` public static MultiPartPowerBlockProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L17) |

## OverflowDisposalTankProvider

` public class OverflowDisposalTankProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/OverflowDisposalTankProvider.java#L17)

流体储罐的 Jade 显示名：相邻门格海绵（溢出销毁模式）时显示「过量销毁储罐」， 否则保留 Jade 核心按方块名渲染的默认名称行。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final OverflowDisposalTankProvider INSTANCE ` | 初值 ` new OverflowDisposalTankProvider() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/OverflowDisposalTankProvider.java#L18) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockState().getBlock() `<br>实现调用 ` accessor.getBlockState() `<br>实现调用 ` FluidTankBlock.hasAdjacentMengerSponge(accessor.getLevel(), accessor.getPosition()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/OverflowDisposalTankProvider.java#L23) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("overflow_disposal_fluid_tank") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/OverflowDisposalTankProvider.java#L39) |

## PowerBlockProvider

` public enum PowerBlockProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` PowerBlockProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L22) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isShiftKeyDown() `<br>实现调用 ` accessor.getServerData() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L25) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockEntity() `<br>分支 ` (blockAccessor.getBlockEntity() instanceof IPowerComponent blockEntity) ` 内调用 ` blockEntity.getGrid() `<br>分支 ` (blockAccessor.getBlockEntity() instanceof IPowerComponent blockEntity) ` 内调用 ` compoundTag.putInt("generate", powerGrid.getGenerate()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L63) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("power_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L76) |
| ` public static PowerBlockProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L21) |
| ` public static PowerBlockProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L21) |

## PulseGeneratorProvider

` public enum PulseGeneratorProvider implements IBlockComponentProvider, IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PulseGeneratorProvider.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` PulseGeneratorProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PulseGeneratorProvider.java#L20) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` data.contains("pulse_generator_mode") `<br>实现调用 ` data.getString("pulse_generator_mode") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PulseGeneratorProvider.java#L24) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>实现调用 ` pulseGenerator.getStartMode() `<br>实现调用 ` tag.putString("pulse_generator_mode", mode) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PulseGeneratorProvider.java#L77) |
| ` @Override public ResourceLocation getUid() ` | 末尾返回 ` AnvilCraft.of("pulse_generator") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PulseGeneratorProvider.java#L103) |
| ` public static PulseGeneratorProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PulseGeneratorProvider.java#L19) |
| ` public static PulseGeneratorProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PulseGeneratorProvider.java#L19) |
