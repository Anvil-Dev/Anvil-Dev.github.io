# dev.dubhe.anvilcraft.integration.jade.provider（AutoEnchantingTableProvider 至 SpaceOvercompressorProvider）



## AutoEnchantingTableProvider

` public enum AutoEnchantingTableProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` AutoEnchantingTableProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L11) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>实现调用 ` blockEntity.getCooldownTicks() `<br>分支 ` (cooldownTicks <= 0 \|\| cooldownTicks >= totalTicks) ` 内调用 ` tag.putInt("auto_enchanting_table_cooldown_ticks", 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L13) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("auto_enchanting_table_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L28) |
| ` public static AutoEnchantingTableProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L10) |
| ` public static AutoEnchantingTableProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/AutoEnchantingTableProvider.java#L10) |

## BurningHeaterProvider

` public enum BurningHeaterProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` BurningHeaterProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L11) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof BurningHeaterBlockEntity entity) ` 内调用 ` tag.putInt("burnTime", entity.getBurnTime()) `<br>分支 ` (accessor.getBlockEntity() instanceof BurningHeaterBlockEntity entity) ` 内调用 ` entity.getBurnTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L13) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("burning_heater_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L20) |
| ` public static BurningHeaterProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L10) |
| ` public static BurningHeaterProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/BurningHeaterProvider.java#L10) |

## ChargerProvider

` public enum ChargerProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` ChargerProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L11) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof ChargerBlockEntity charger) ` 内调用 ` tag.putInt("charger_timeLeft", charger.getTimeLeft()) `<br>分支 ` (accessor.getBlockEntity() instanceof ChargerBlockEntity charger) ` 内调用 ` charger.getTimeLeft() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L13) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("charger_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L22) |
| ` public static ChargerProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L10) |
| ` public static ChargerProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ChargerProvider.java#L10) |

## CrabTrapBlockStateProvider

` public enum CrabTrapBlockStateProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CrabTrapBlockStateProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L13) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("crab_trap") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L15) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockState() `<br>实现调用 ` blockState.is(ModBlocks.CRAB_TRAP) `<br>分支 ` (blockState.is(ModBlocks.CRAB_TRAP)) ` 内调用 ` blockState.getValue(CrabTrapBlock.FISHING) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L17) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` CrabTrapBlockStateProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L26) |
| ` public static CrabTrapBlockStateProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L12) |
| ` public static CrabTrapBlockStateProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CrabTrapBlockStateProvider.java#L12) |

## CreativeCrateProvider

` public enum CreativeCrateProvider implements IServerExtensionProvider<ItemStack> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CreativeCrateProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L16) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("creative_crate") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L17) |
| ` @Override public @Nullable List<ViewGroup<ItemStack>> getGroups(Accessor<?> accessor) ` | ` (!(accessor instanceof BlockAccessor blockAccessor)) ` 成立时提前返回 ` null `<br>末尾返回 ` List.of(new ViewGroup<>(List.of(stack))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L19) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` CreativeCrateProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L30) |
| ` public static CreativeCrateProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L15) |
| ` public static CreativeCrateProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeCrateProvider.java#L15) |

## CreativeFluidTankProvider

` public enum CreativeFluidTankProvider implements IServerExtensionProvider<FluidView.Data> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CreativeFluidTankProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L19) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("creative_fluid_tank") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L20) |
| ` @Override public @Nullable List<ViewGroup<FluidView.Data>> getGroups(Accessor<?> accessor) ` | ` (!(accessor instanceof BlockAccessor blockAccessor)) ` 成立时提前返回 ` null `<br>` (handler == null) ` 成立时提前返回 ` null `<br>末尾返回 ` List.of(new ViewGroup<>(List.of(data))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L22) |
| ` @Override public boolean shouldRequestData(Accessor<?> accessor) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L43) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` CreativeFluidTankProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L48) |
| ` public static CreativeFluidTankProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L18) |
| ` public static CreativeFluidTankProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CreativeFluidTankProvider.java#L18) |

## CursedGoldEnchantPowerProvider

` public enum CursedGoldEnchantPowerProvider implements IBlockComponentProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` CursedGoldEnchantPowerProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L15) |
| ` @Override public void appendTooltip(ITooltip tooltip, BlockAccessor accessor, IPluginConfig config) ` | 实现调用 ` accessor.getBlockState().getEnchantPowerBonus(accessor.getLevel(), accessor.getPosition()) `<br>实现调用 ` accessor.getBlockState() `<br>实现调用 ` accessor.getLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L19) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("cursed_gold_enchant_power") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L25) |
| ` public static CursedGoldEnchantPowerProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L14) |
| ` public static CursedGoldEnchantPowerProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/CursedGoldEnchantPowerProvider.java#L14) |

## DischargerProvider

` public enum DischargerProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` DischargerProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L11) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof DischargerBlockEntity discharger) ` 内调用 ` tag.putInt("discharger_timeLeft", discharger.getTimeLeft()) `<br>分支 ` (accessor.getBlockEntity() instanceof DischargerBlockEntity discharger) ` 内调用 ` discharger.getTimeLeft() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L13) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("discharger_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L22) |
| ` public static DischargerProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L10) |
| ` public static DischargerProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/DischargerProvider.java#L10) |

## HeatableBlockProvider

` public enum HeatableBlockProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` HeatableBlockProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L11) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("heatable_block_provider") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L13) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockEntity() `<br>分支 ` (accessor.getBlockEntity() instanceof HeatableBlockEntity entity) ` 内调用 ` tag.putInt("duration", entity.getDuration()) `<br>分支 ` (accessor.getBlockEntity() instanceof HeatableBlockEntity entity) ` 内调用 ` entity.getDuration() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L15) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` HeatableBlockProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L22) |
| ` public static HeatableBlockProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L10) |
| ` public static HeatableBlockProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/HeatableBlockProvider.java#L10) |

## ItemDetectorProvider

` public enum ItemDetectorProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` ItemDetectorProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L11) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("item_detector") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L13) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockEntity() `<br>分支 ` (blockAccessor.getBlockEntity() instanceof ItemDetectorBlockEntity blockEntity) ` 内调用 ` compoundTag.putInt("Range", blockEntity.getRange()) `<br>分支 ` (blockAccessor.getBlockEntity() instanceof ItemDetectorBlockEntity blockEntity) ` 内调用 ` blockEntity.getRange() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L15) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` ItemDetectorProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L23) |
| ` public static ItemDetectorProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L10) |
| ` public static ItemDetectorProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/ItemDetectorProvider.java#L10) |

## LargeFluidTankProvider

` public enum LargeFluidTankProvider implements IServerExtensionProvider<FluidView.Data> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` LargeFluidTankProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L25) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("large_fluid_tank") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L26) |
| ` public static final String LARGE_TANK_GROUP ` | 大型储罐的流体组标识，客户端据此生成共享存量标题<br>初值 ` "large_tank" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L28) |
| ` public static final String FLUID_TANK_GROUP ` | 单流体容器的组标识：小储罐与仓储流体端口复用同一套总存量标题<br>初值 ` "fluid_tank" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L30) |
| ` public static final String FLUID_PORT_GROUP ` | 初值 ` "fluid_port" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L31) |
| ` public static final String FLUID_CONSOLIDATOR_GROUP ` | 仓储端口整合器的流体组：逐端口列出，不显示总存量标题<br>初值 ` "fluid_consolidator" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L33) |
| ` public static final String TOTAL_KEY ` | 初值 ` "Total" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L34) |
| ` public static final String CAPACITY_KEY ` | 初值 ` "Capacity" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L35) |
| ` public static final String ENHANCED_KEY ` | 初值 ` "Enhanced" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L36) |
| ` public static final String INFINITE_KEY ` | 初值 ` "Infinite" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L37) |
| ` @Override public @Nullable List<ViewGroup<FluidView.Data>> getGroups(Accessor<?> accessor) ` | ` (!(accessor instanceof BlockAccessor blockAccessor)) ` 成立时提前返回 ` null `<br>` (blockAccessor.getBlockEntity() instanceof StoragePortConsolidatorBlockEntity consolidator) ` 成立时提前返回 ` consolidatorGroups(consolidator) `<br>` (!(blockAccessor.getBlockEntity() instanceof LargeFluidTankBlockEntity tank)) ` 成立时提前返回 ` null `<br>末尾返回 ` List.of(group) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L39) |
| ` @Override public boolean shouldRequestData(Accessor<?> accessor) ` | 末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L196) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` LargeFluidTankProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L201) |
| ` public static LargeFluidTankProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L24) |
| ` public static LargeFluidTankProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/LargeFluidTankProvider.java#L24) |

## MengerSpongeFluidProvider

` public enum MengerSpongeFluidProvider implements IServerExtensionProvider<FluidView.Data> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeFluidProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` MengerSpongeFluidProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeFluidProvider.java#L14) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("menger_sponge_fluid") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeFluidProvider.java#L16) |
| ` @Override public @Nullable List<ViewGroup<FluidView.Data>> getGroups(Accessor<?> accessor) ` | 末尾返回 ` List.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeFluidProvider.java#L18) |
| ` @Override public boolean shouldRequestData(Accessor<?> accessor) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeFluidProvider.java#L23) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeFluidProvider.java#L28) |
| ` public static MengerSpongeFluidProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeFluidProvider.java#L13) |
| ` public static MengerSpongeFluidProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MengerSpongeFluidProvider.java#L13) |

## MultiPartPowerBlockProvider

` public enum MultiPartPowerBlockProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` MultiPartPowerBlockProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L18) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 实现调用 ` accessor.getBlockState() `<br>实现调用 ` state.getBlock() `<br>实现调用 ` MultiPartPowerBlockProvider.findPowerGrid(multiPartBlock, accessor.getLevel(), accessor.getPosition(), state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L20) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("multipart_power") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L57) |
| ` public static MultiPartPowerBlockProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L17) |
| ` public static MultiPartPowerBlockProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/MultiPartPowerBlockProvider.java#L17) |

## PowerBlockProvider

` public enum PowerBlockProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` PowerBlockProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L16) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("power_provider") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L18) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getLevel() `<br>实现调用 ` blockAccessor.getHitResult().getBlockPos() `<br>实现调用 ` blockAccessor.getHitResult() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L20) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` PowerBlockProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L39) |
| ` public static PowerBlockProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L15) |
| ` public static PowerBlockProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/PowerBlockProvider.java#L15) |

## RubyPrismProvider

` public enum RubyPrismProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` RubyPrismProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L11) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("ruby_prism") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L13) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockEntity() `<br>分支 ` (blockAccessor.getBlockEntity() instanceof RubyPrismBlockEntity blockEntity) ` 内调用 ` compoundTag.putInt("laser_level", blockEntity.getLaserLevel()) `<br>分支 ` (blockAccessor.getBlockEntity() instanceof RubyPrismBlockEntity blockEntity) ` 内调用 ` blockEntity.getLaserLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L15) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` RubyPrismProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L22) |
| ` public static RubyPrismProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L10) |
| ` public static RubyPrismProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/RubyPrismProvider.java#L10) |

## SmartBlockPlacerProvider

` public enum SmartBlockPlacerProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` SmartBlockPlacerProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L10) |
| ` @Override public void appendServerData(CompoundTag tag, BlockAccessor accessor) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L12) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` AnvilCraft.of("smart_block_placer_provider") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L16) |
| ` public static SmartBlockPlacerProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L9) |
| ` public static SmartBlockPlacerProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SmartBlockPlacerProvider.java#L9) |

## SpaceOvercompressorProvider

` public enum SpaceOvercompressorProvider implements IServerDataProvider<BlockAccessor> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INSTANCE ` | 声明于枚举 ` SpaceOvercompressorProvider ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L11) |
| ` public static final Identifier UID ` | 初值 ` AnvilCraft.of("space_overcompressor") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L13) |
| ` @Override public void appendServerData(CompoundTag compoundTag, BlockAccessor blockAccessor) ` | 实现调用 ` blockAccessor.getBlockEntity() `<br>实现调用 ` compoundTag.putLong("storedMass", blockEntity.getStoredMass()) `<br>实现调用 ` blockEntity.getStoredMass() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L15) |
| ` @Override public Identifier getUid() ` | 末尾返回 ` SpaceOvercompressorProvider.UID ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L22) |
| ` public static SpaceOvercompressorProvider[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L10) |
| ` public static SpaceOvercompressorProvider valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jade/provider/SpaceOvercompressorProvider.java#L10) |
