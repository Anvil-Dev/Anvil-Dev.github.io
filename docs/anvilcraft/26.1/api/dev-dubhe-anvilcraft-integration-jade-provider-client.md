# dev.dubhe.anvilcraft.integration.jade.provider.client



## AutoEnchantingTableClientProvider

` public enum AutoEnchantingTableClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/AutoEnchantingTableClientProvider.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` AutoEnchantingTableClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/AutoEnchantingTableClientProvider.java#L17) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` data.getIntOr("auto_enchanting_table_total_ticks", 0) `<br>实现调用 ` data.getIntOr("auto_enchanting_table_cooldown_ticks", 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/AutoEnchantingTableClientProvider.java#L19) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("auto_enchanting_table_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/AutoEnchantingTableClientProvider.java#L29) |
| ` public static AutoEnchantingTableClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/AutoEnchantingTableClientProvider.java#L16) |
| ` public static AutoEnchantingTableClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/AutoEnchantingTableClientProvider.java#L16) |

## BurningHeaterClientProvider

` public enum BurningHeaterClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/BurningHeaterClientProvider.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` BurningHeaterClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/BurningHeaterClientProvider.java#L17) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockState() `<br>实现调用 ` state.getBlock() `<br>实现调用 ` state.getValue(BurningHeaterBlock.LEVEL) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/BurningHeaterClientProvider.java#L19) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("burning_heater_client_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/BurningHeaterClientProvider.java#L57) |
| ` public static BurningHeaterClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/BurningHeaterClientProvider.java#L16) |
| ` public static BurningHeaterClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/BurningHeaterClientProvider.java#L16) |

## ChargerClientProvider

` public enum ChargerClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ChargerClientProvider.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` ChargerClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ChargerClientProvider.java#L18) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` data.contains("charger_timeLeft") `<br>实现调用 ` data.contains("charger_timeTotalCache") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ChargerClientProvider.java#L20) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("charger_client_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ChargerClientProvider.java#L54) |
| ` public static ChargerClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ChargerClientProvider.java#L17) |
| ` public static ChargerClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ChargerClientProvider.java#L17) |

## ControlValveClientProvider

` public enum ControlValveClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ControlValveClientProvider.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` ControlValveClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ControlValveClientProvider.java#L19) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockEntity() `<br>实现调用 ` valve.getFilteredFluids() `<br>实现调用 ` JadeFluidObject.of(filter.getFluid(), filter.getAmount(), filter.getComponentsPatch()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ControlValveClientProvider.java#L21) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("control_valve") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ControlValveClientProvider.java#L38) |
| ` public static ControlValveClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ControlValveClientProvider.java#L18) |
| ` public static ControlValveClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ControlValveClientProvider.java#L18) |

## CrabTrapBlockStateClientProvider

` public enum CrabTrapBlockStateClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrabTrapBlockStateClientProvider.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CrabTrapBlockStateClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrabTrapBlockStateClientProvider.java#L13) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor blockAccessor, IPluginConfig pluginConfig) ` | 实现调用 ` blockAccessor.getServerData() `<br>实现调用 ` serverData.contains("fishing") `<br>分支 ` (serverData.contains("fishing")) ` 内调用 ` serverData.getIntOr("fishing", 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrabTrapBlockStateClientProvider.java#L15) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` CrabTrapBlockStateProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrabTrapBlockStateClientProvider.java#L24) |
| ` public static CrabTrapBlockStateClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrabTrapBlockStateClientProvider.java#L12) |
| ` public static CrabTrapBlockStateClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrabTrapBlockStateClientProvider.java#L12) |

## CrateClientProvider

` public class CrateClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrateClientProvider.java#L17)

板条箱的 Jade 显示名：相邻虚空物质（dispose=true）时显示 「溢出销毁板条箱」，否则保留 Jade 核心按方块名渲染的默认名称行。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final CrateClientProvider INSTANCE ` | 初值 ` new CrateClientProvider() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrateClientProvider.java#L18) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockState().getBlock() `<br>实现调用 ` accessor.getBlockState() `<br>实现调用 ` accessor.getBlockState().getValue(CrateBlock.DISPOSE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrateClientProvider.java#L23) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("crate") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CrateClientProvider.java#L34) |

## CreativeCrateClientProvider

` public enum CreativeCrateClientProvider implements IClientExtensionProvider<ItemStack, ItemView> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeCrateClientProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CreativeCrateClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeCrateClientProvider.java#L16) |
| ` @Override public List<ClientViewGroup<ItemView>> getClientGroups(Accessor<?> accessor, List<ViewGroup<ItemStack>> groups) ` | 末尾返回 ` list ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeCrateClientProvider.java#L18) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` CreativeCrateProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeCrateClientProvider.java#L33) |
| ` public static CreativeCrateClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeCrateClientProvider.java#L15) |
| ` public static CreativeCrateClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeCrateClientProvider.java#L15) |

## CreativeFluidTankClientProvider

` public enum CreativeFluidTankClientProvider implements IClientExtensionProvider<FluidView.Data, FluidView> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeFluidTankClientProvider.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CreativeFluidTankClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeFluidTankClientProvider.java#L21) |
| ` @Override public List<ClientViewGroup<FluidView>> getClientGroups(Accessor<?> accessor, List<ViewGroup<FluidView.Data>> groups) ` | 末尾返回 ` Collections.singletonList(new ClientViewGroup<>(Collections.singletonList(view))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeFluidTankClientProvider.java#L23) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` CreativeFluidTankProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeFluidTankClientProvider.java#L40) |
| ` public static CreativeFluidTankClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeFluidTankClientProvider.java#L20) |
| ` public static CreativeFluidTankClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/CreativeFluidTankClientProvider.java#L20) |

## DischargerClientProvider

` public enum DischargerClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/DischargerClientProvider.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` DischargerClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/DischargerClientProvider.java#L18) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` data.contains("discharger_timeLeft") `<br>实现调用 ` data.contains("discharger_timeTotalCache") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/DischargerClientProvider.java#L20) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("discharger_client_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/DischargerClientProvider.java#L53) |
| ` public static DischargerClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/DischargerClientProvider.java#L17) |
| ` public static DischargerClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/DischargerClientProvider.java#L17) |

## HeatableBlockClientProvider

` public enum HeatableBlockClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/HeatableBlockClientProvider.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` HeatableBlockClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/HeatableBlockClientProvider.java#L15) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` HeatRecorder.getTier(accessor.getLevel(), accessor.getPosition(), accessor.getBlockState()) `<br>实现调用 ` accessor.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/HeatableBlockClientProvider.java#L17) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` HeatableBlockProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/HeatableBlockClientProvider.java#L29) |
| ` public static HeatableBlockClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/HeatableBlockClientProvider.java#L14) |
| ` public static HeatableBlockClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/HeatableBlockClientProvider.java#L14) |

## ItemDetectorClientProvider

` public enum ItemDetectorClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ItemDetectorClientProvider.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` ItemDetectorClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ItemDetectorClientProvider.java#L19) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor blockAccessor, IPluginConfig pluginConfig) ` | 实现调用 ` Optional.ofNullable(Minecraft.getInstance().player) .map(LocalPlayer::isShiftKeyDown) .orElse(false) `<br>实现调用 ` Optional.ofNullable(Minecraft.getInstance().player) .map(LocalPlayer::isShiftKeyDown) `<br>实现调用 ` Optional.ofNullable(Minecraft.getInstance().player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ItemDetectorClientProvider.java#L21) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` ItemDetectorProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ItemDetectorClientProvider.java#L43) |
| ` public static ItemDetectorClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ItemDetectorClientProvider.java#L18) |
| ` public static ItemDetectorClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/ItemDetectorClientProvider.java#L18) |

## LargeFluidTankClientProvider

` public enum LargeFluidTankClientProvider implements IClientExtensionProvider<FluidView.Data, FluidView> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/LargeFluidTankClientProvider.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` LargeFluidTankClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/LargeFluidTankClientProvider.java#L27) |
| ` @Override public List<ClientViewGroup<FluidView>> getClientGroups(Accessor<?> accessor, List<ViewGroup<FluidView.Data>> groups) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/LargeFluidTankClientProvider.java#L29) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` LargeFluidTankProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/LargeFluidTankClientProvider.java#L269) |
| ` public static LargeFluidTankClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/LargeFluidTankClientProvider.java#L26) |
| ` public static LargeFluidTankClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/LargeFluidTankClientProvider.java#L26) |

## MengerSpongeClientProvider

` public enum MengerSpongeClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/MengerSpongeClientProvider.java#L19)

门格海绵的 Jade 提示：流体容量显示为无限（只进不出的虚空容器）， 而非默认流体提供器读取容量上限时显示的 2.14B。纯客户端，无需服务端数据。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` MengerSpongeClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/MengerSpongeClientProvider.java#L20) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` tooltip.clear() `<br>实现调用 ` tooltip.add(accessor.getBlock().getName().copy().withStyle(ChatFormatting.WHITE)) `<br>实现调用 ` accessor.getBlock().getName().copy().withStyle(ChatFormatting.WHITE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/MengerSpongeClientProvider.java#L22) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("menger_sponge_client_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/MengerSpongeClientProvider.java#L40) |
| ` public static MengerSpongeClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/MengerSpongeClientProvider.java#L19) |
| ` public static MengerSpongeClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/MengerSpongeClientProvider.java#L19) |

## OverflowDisposalTankClientProvider

` public class OverflowDisposalTankClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/OverflowDisposalTankClientProvider.java#L17)

流体储罐的 Jade 显示名：相邻门格海绵（溢出销毁模式）时显示「过量销毁储罐」， 否则保留 Jade 核心按方块名渲染的默认名称行。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final OverflowDisposalTankClientProvider INSTANCE ` | 初值 ` new OverflowDisposalTankClientProvider() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/OverflowDisposalTankClientProvider.java#L18) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockState().getBlock() `<br>实现调用 ` accessor.getBlockState() `<br>实现调用 ` FluidTankBlock.hasAdjacentMengerSponge(accessor.getLevel(), accessor.getPosition()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/OverflowDisposalTankClientProvider.java#L23) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("overflow_disposal_fluid_tank") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/OverflowDisposalTankClientProvider.java#L39) |

## PowerBlockClientProvider

` public enum PowerBlockClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/PowerBlockClientProvider.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` PowerBlockClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/PowerBlockClientProvider.java#L24) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isShiftKeyDown() `<br>实现调用 ` accessor.getServerData() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/PowerBlockClientProvider.java#L27) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` PowerBlockProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/PowerBlockClientProvider.java#L65) |
| ` public static PowerBlockClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/PowerBlockClientProvider.java#L23) |
| ` public static PowerBlockClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/PowerBlockClientProvider.java#L23) |

## RedstoneWirePowerClientProvider

` public enum RedstoneWirePowerClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RedstoneWirePowerClientProvider.java#L19)

在 Jade 中显示红石导线当前的红石强度。 红石导线的强度由网络管理器同步到客户端缓存，不在方块状态里， 因此无法复用原版红石粉那套读取 BlockStateProperties#POWER 的 Jade 插件，需要单独提供。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` RedstoneWirePowerClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RedstoneWirePowerClientProvider.java#L20) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` RedstoneWireNetworkManager.getPower(accessor.getLevel(), accessor.getPosition()) `<br>实现调用 ` accessor.getLevel() `<br>实现调用 ` accessor.getPosition() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RedstoneWirePowerClientProvider.java#L22) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("redstone_wire_power") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RedstoneWirePowerClientProvider.java#L28) |
| ` public static RedstoneWirePowerClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RedstoneWirePowerClientProvider.java#L19) |
| ` public static RedstoneWirePowerClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RedstoneWirePowerClientProvider.java#L19) |

## RubyPrismClientProvider

` public enum RubyPrismClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RubyPrismClientProvider.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` RubyPrismClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RubyPrismClientProvider.java#L13) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor blockAccessor, IPluginConfig pluginConfig) ` | 实现调用 ` blockAccessor.getServerData() `<br>实现调用 ` serverData.contains("laser_level") `<br>分支 ` (serverData.contains("laser_level")) ` 内调用 ` serverData.getIntOr("laser_level", 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RubyPrismClientProvider.java#L15) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` RubyPrismProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RubyPrismClientProvider.java#L24) |
| ` public static RubyPrismClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RubyPrismClientProvider.java#L12) |
| ` public static RubyPrismClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/RubyPrismClientProvider.java#L12) |

## SmartBlockPlacerClientProvider

` public enum SmartBlockPlacerClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SmartBlockPlacerClientProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` SmartBlockPlacerClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SmartBlockPlacerClientProvider.java#L14) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockEntity() `<br>实现调用 ` be.hasBlueprint() `<br>实现调用 ` Component.translatable(modeKey).withStyle(modeColor) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SmartBlockPlacerClientProvider.java#L16) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("smart_block_placer_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SmartBlockPlacerClientProvider.java#L60) |
| ` public static SmartBlockPlacerClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SmartBlockPlacerClientProvider.java#L13) |
| ` public static SmartBlockPlacerClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SmartBlockPlacerClientProvider.java#L13) |

## SpaceOvercompressorClientProvider

` public enum SpaceOvercompressorClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SpaceOvercompressorClientProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` SpaceOvercompressorClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SpaceOvercompressorClientProvider.java#L14) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor blockAccessor, IPluginConfig pluginConfig) ` | 实现调用 ` blockAccessor.getServerData() `<br>实现调用 ` serverData.contains("storedMass") `<br>分支 ` (serverData.contains("storedMass")) ` 内调用 ` serverData.getLongOr("storedMass", 0L) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SpaceOvercompressorClientProvider.java#L16) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` SpaceOvercompressorProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SpaceOvercompressorClientProvider.java#L26) |
| ` public static SpaceOvercompressorClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SpaceOvercompressorClientProvider.java#L13) |
| ` public static SpaceOvercompressorClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/SpaceOvercompressorClientProvider.java#L13) |

## StoragePortClientProvider

` public enum StoragePortClientProvider implements IClientExtensionProvider<ItemStack, ItemView> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L18)

保留缓存与标记仓储物品的完整计数，并沿用 Jade 的物品布局和显示数量设置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` StoragePortClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L19) |
| ` @Override public List<ClientViewGroup<ItemView>> getClientGroups(Accessor<?> accessor, List<ViewGroup<ItemStack>> groups) ` | 末尾返回 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L21) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` StoragePortProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L41) |
| ` public static StoragePortClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L18) |
| ` public static StoragePortClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/StoragePortClientProvider.java#L18) |

## WipBlockClientProvider

` public enum WipBlockClientProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/WipBlockClientProvider.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` WipBlockClientProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/WipBlockClientProvider.java#L15) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getServerData() `<br>实现调用 ` serverData.contains("stepCount") `<br>分支 ` (serverData.contains("stepCount")) ` 内调用 ` Component.translatable( "tooltip.anvilcraft.wip_block.jade.step_count", serverData.getIntOr("stepCount", 0) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/WipBlockClientProvider.java#L17) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("wip_block") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/WipBlockClientProvider.java#L42) |
| ` public static WipBlockClientProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/WipBlockClientProvider.java#L14) |
| ` public static WipBlockClientProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/client/WipBlockClientProvider.java#L14) |
