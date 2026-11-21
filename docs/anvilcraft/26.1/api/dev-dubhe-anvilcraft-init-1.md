# dev.dubhe.anvilcraft.init（ModAnvilBehaviors 至 ModMegastructures）



## ModAnvilBehaviors

` public class ModAnvilBehaviors `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L36)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void register(AnvilBehaviorRegisterEvent event) ` | 事件总线派发 ` AnvilBehaviorRegisterEvent ` 时调用。<br>实现调用 ` event.registerBehavior(ModBlocks.STAMPING_PLATFORM.get(), new ItemStampingBehavior()) `<br>实现调用 ` ModBlocks.STAMPING_PLATFORM.get() `<br>实现调用 ` event.registerBehavior(state -> state.is(Blocks.REDSTONE_BLOCK), new RedstoneEMPBehavior()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L38) |
| ` public ModAnvilBehaviors() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAnvilBehaviors.java#L36) |

## ModAttachments

` public class ModAttachments `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAttachments.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Supplier<AttachmentType<DfuMetadata>> DFU ` | 初值 ` ModAttachments.ATTACHMENT_TYPES.register( "dfu_metadata", () -> AttachmentType.builder(() -> DfuMetadata.DEFAULT).serialize(DfuMetadata.CODEC.fieldOf("value")).build() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAttachments.java#L17) |
| ` public static void register(IEventBus eventBus) ` | 执行 ` ModAttachments.ATTACHMENT_TYPES.register(eventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAttachments.java#L21) |
| ` public ModAttachments() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModAttachments.java#L12) |

## ModBiomeSources

` public final class ModBiomeSources `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBiomeSources.java#L14)

Registers codec types used by AnvilCraft's built-in dimensions.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Supplier<MapCodec<? extends BiomeSource>> VANILLA_OVERWORLD ` | 初值 ` REGISTER.register( "vanilla_overworld", () -> VanillaOverworldBiomeSource.CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBiomeSources.java#L19) |
| ` public static void register(IEventBus modEventBus) ` | 执行 ` REGISTER.register(modEventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L108) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBiomeSources.java#L26) |

## ModBlockPlacementFallbacks

` public final class ModBlockPlacementFallbacks `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBlockPlacementFallbacks.java#L13)

注册代码层的放置规则 Fallback 类，用于数据包中不存在对应规则的方块。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register() ` | 实现调用 ` BlockPlacementRules.registerFallback(LensBlockPlacementRule.INSTANCE) `<br>实现调用 ` BlockPlacementRules.registerFallback(SlabBlockPlacementRule.INSTANCE) `<br>实现调用 ` BlockPlacementRules.registerFallback(StairBlockPlacementRule.INSTANCE) `<br>[调用处 AnvilCraft.loadComplete](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L192) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBlockPlacementFallbacks.java#L17) |

## ModBuiltinPacks

` public class ModBuiltinPacks `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBuiltinPacks.java#L15)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final PackSource BUILT_IN ` | 初值 ` PackSource.create(ModBuiltinPacks.decorateWithSource("pack.source.builtin"), false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBuiltinPacks.java#L17) |
| ` @SubscribeEvent public static void packSetup(AddPackFindersEvent event) ` | 事件总线派发 ` AddPackFindersEvent ` 时调用。<br>实现调用 ` AnvilCraft.of("resourcepacks/transparent_cauldron") `<br>实现调用 ` Component.translatable("pack.anvilcraft.builtin_pack") `<br>实现调用 ` AnvilCraft.of("resourcepacks/old_resonator_heavy_halberd") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBuiltinPacks.java#L19) |
| ` public ModBuiltinPacks() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModBuiltinPacks.java#L15) |

## ModCapabilities

` public class ModCapabilities `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCapabilities.java#L59)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void registerCapabilities(final RegisterCapabilitiesEvent event) ` | 事件总线派发 ` RegisterCapabilitiesEvent ` 时调用。<br>实现调用 ` ModBlockEntities.AUTO_ENCHANTING_TABLE.get() `<br>实现调用 ` ModBlockEntities.BATCH_CRAFTER.get() `<br>实现调用 ` event.registerBlockEntity(Capabilities.Item.BLOCK, ModBlockEntities.BATCH_CUTTER.get(), ModCapabilities::item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCapabilities.java#L61) |
| ` public ModCapabilities() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCapabilities.java#L59) |

## ModColorHandlers

` public class ModColorHandlers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L27)

类型注解 ` @EventBusSubscriber `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier PILL ` | 初值 ` AnvilCraft.of("pill") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L29) |
| ` @SubscribeEvent public static void registerBlockColorHandlersEvent(RegisterColorHandlersEvent.BlockTintSources event) ` | 事件总线派发 ` RegisterColorHandlersEvent.BlockTintSources ` 时调用。<br>执行 ` event.register(List.of(new RedstoneWireTintSource()), ModBlocks.REDSTONE_WIRE.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L31) |
| ` @SubscribeEvent public static void registerItemColorHandlersEvent(RegisterColorHandlersEvent.ItemTintSources event) ` | 事件总线派发 ` RegisterColorHandlersEvent.ItemTintSources ` 时调用。<br>执行 ` event.register(ModColorHandlers.PILL, Pill.MAP_CODEC) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L37) |
| ` public ModColorHandlers() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L27) |

## ModColorHandlers.Pill

` public static class Pill implements ItemTintSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L55)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final MapCodec<? extends ItemTintSource> MAP_CODEC ` | 初值 ` MapCodec.unit(new Pill()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L56) |
| ` @Override public int calculate(ItemStack itemStack, @Nullable ClientLevel level, @Nullable LivingEntity owner) ` | ` (potionContents.potion().isEmpty()) ` 成立时提前返回 ` -1 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L58) |
| ` @Override public MapCodec<? extends ItemTintSource> type() ` | 末尾返回 ` Pill.MAP_CODEC ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L68) |
| ` public Pill() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L55) |

## ModColorHandlers.RedstoneWireTintSource

` public static class RedstoneWireTintSource implements BlockTintSource `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L43)

复用原版红石粉的强度到颜色映射，功率取自 RedstoneWireClientPowerCache

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public int color(BlockState state) ` | 末尾返回 ` RedStoneWireBlock.getColorForPower(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L44) |
| ` @Override public int colorInWorld(BlockState state, BlockAndTintGetter level, BlockPos pos) ` | 末尾返回 ` RedStoneWireBlock.getColorForPower(RedstoneWireClientPowerCache.getCurrent(pos)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L49) |
| ` public RedstoneWireTintSource() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModColorHandlers.java#L43) |

## ModCriterionTriggers

` public class ModCriterionTriggers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L42)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<CriterionTrigger<?>, PlacerPlaceTrigger> PLACER_PLACE_BLOCK ` | 初值 ` ModCriterionTriggers.REGISTER.register( "placer_place_block", PlacerPlaceTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L46) |
| ` public static final DeferredHolder<CriterionTrigger<?>, PlacerShuttleTrigger> PLACER_SHUTTLE ` | 初值 ` ModCriterionTriggers.REGISTER.register( "placer_shuttle", PlacerShuttleTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L51) |
| ` public static final DeferredHolder<CriterionTrigger<?>, DevourerDevourTrigger> DEVOURER_DEVOUR_BLOCK ` | 初值 ` ModCriterionTriggers.REGISTER.register( "devourer_devour_block", DevourerDevourTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L56) |
| ` public static final DeferredHolder<CriterionTrigger<?>, MagnetLiftingAnvilTrigger> LIFTING_ANVIL ` | 初值 ` ModCriterionTriggers.REGISTER.register( "lifting_anvil", MagnetLiftingAnvilTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L62) |
| ` public static final DeferredHolder<CriterionTrigger<?>, AnvilOnGroundTrigger> ANVIL_ON_GROUND ` | 初值 ` ModCriterionTriggers.REGISTER.register( "anvil_on_ground", AnvilOnGroundTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L68) |
| ` public static final DeferredHolder<CriterionTrigger<?>, MilkTrigger> MILK ` | 初值 ` ModCriterionTriggers.REGISTER.register("milk", MilkTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L73) |
| ` public static final DeferredHolder<CriterionTrigger<?>, AnvilLootingTrigger> ANVIL_LOOTING ` | 初值 ` ModCriterionTriggers.REGISTER.register( "anvil_looting", AnvilLootingTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L76) |
| ` public static final DeferredHolder<CriterionTrigger<?>, DispenserRepairIronGolem> REPAIR_IRON_GOLEM ` | 初值 ` ModCriterionTriggers.REGISTER.register( "repair_iron_golem", DispenserRepairIronGolem::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L81) |
| ` public static final DeferredHolder<CriterionTrigger<?>, InWorldRecipeTrigger> IN_WORLD_RECIPE ` | 初值 ` ModCriterionTriggers.REGISTER.register( "in_world_recipe", InWorldRecipeTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L87) |
| ` public static final DeferredHolder<CriterionTrigger<?>, AnvilHammerClickBlockTrigger> ANVIL_HAMMER_CLICK_BLOCK ` | 初值 ` ModCriterionTriggers.REGISTER.register( "anvil_hammer_click_block", AnvilHammerClickBlockTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L92) |
| ` public static final DeferredHolder<CriterionTrigger<?>, AnvilHammerChangeBlockTrigger> ANVIL_HAMMER_CHANGE_BLOCK ` | 初值 ` ModCriterionTriggers.REGISTER.register( "anvil_hammer_change_block", AnvilHammerChangeBlockTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L98) |
| ` public static final DeferredHolder<CriterionTrigger<?>, AnvilHammerHurtEntityTrigger> ANVIL_HAMMER_HURT_ENTITY ` | 初值 ` ModCriterionTriggers.REGISTER.register( "anvil_hammer_hurt_entity", AnvilHammerHurtEntityTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L104) |
| ` public static final DeferredHolder<CriterionTrigger<?>, PlayerKilledEntityByAnvilHammerTrigger> PLAYER_KILLED_ENTITY_BY_ANVIL_HAMMER ` | 初值 ` ModCriterionTriggers.REGISTER.register("player_killed_entity_by_anvil_hammer", PlayerKilledEntityByAnvilHammerTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L110) |
| ` public static final DeferredHolder<CriterionTrigger<?>, AnvilHitPiezoelectricCrystalTrigger> ANVIL_HIT_PIEZOELECTRIC_CRYSTAL ` | 初值 ` ModCriterionTriggers.REGISTER.register("anvil_hit_piezoelectric_crystal", AnvilHitPiezoelectricCrystalTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L113) |
| ` public static final DeferredHolder<CriterionTrigger<?>, EnterPowerGridTrigger> ENTER_POWER_GRID ` | 初值 ` ModCriterionTriggers.REGISTER.register( "enter_power_grid", EnterPowerGridTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L116) |
| ` public static final DeferredHolder<CriterionTrigger<?>, ConvertBeaconTrigger> CONVERT_BEACON ` | 初值 ` ModCriterionTriggers.REGISTER.register( "convert_beacon", ConvertBeaconTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L122) |
| ` public static final DeferredHolder<CriterionTrigger<?>, FireReforgeTrigger> FIRE_REFORGE ` | 初值 ` ModCriterionTriggers.REGISTER.register( "fire_reforge", FireReforgeTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L127) |
| ` public static final DeferredHolder<CriterionTrigger<?>, ElectricAllergyTrigger> ELECTRIC_ALLERGY ` | 初值 ` ModCriterionTriggers.REGISTER.register( "electric_allergy", ElectricAllergyTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L132) |
| ` public static final DeferredHolder<CriterionTrigger<?>, ConnectFluidContainersTrigger> CONNECT_FLUID_CONTAINERS ` | 初值 ` ModCriterionTriggers.REGISTER.register( "connect_fluid_containers", ConnectFluidContainersTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L138) |
| ` public static final DeferredHolder<CriterionTrigger<?>, HeatCollectorTrigger> HEAT_COLLECTOR_COLLECT ` | 初值 ` ModCriterionTriggers.REGISTER.register( "heat_collector_collect", HeatCollectorTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L144) |
| ` public static final DeferredHolder<CriterionTrigger<?>, VoidCollectorTrigger> VOID_COLLECTOR_COLLECT ` | 初值 ` ModCriterionTriggers.REGISTER.register( "void_collector_collect", VoidCollectorTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L150) |
| ` public static final DeferredHolder<CriterionTrigger<?>, MineralFountainCreateTrigger> MINERAL_FOUNTAIN_CREATE ` | 初值 ` ModCriterionTriggers.REGISTER.register( "mineral_fountain_crate", MineralFountainCreateTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L156) |
| ` public static final DeferredHolder<CriterionTrigger<?>, UseItemTrigger> USE_ITEM ` | 初值 ` ModCriterionTriggers.REGISTER.register( "use_item", UseItemTrigger::new ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L162) |
| ` public static final DeferredHolder<CriterionTrigger<?>, BlockComparatorTurnOverTrigger> BLOCK_COMPARATOR_TURN_OVER ` | 初值 ` ModCriterionTriggers.REGISTER.register("block_comparator_turn_over", BlockComparatorTurnOverTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L167) |
| ` public static final DeferredHolder<CriterionTrigger<?>, MultiBlockFormTrigger> MULTI_BLOCK_FORM ` | 初值 ` ModCriterionTriggers.REGISTER.register("multi_block_form", MultiBlockFormTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L170) |
| ` public static final DeferredHolder<CriterionTrigger<?>, PlayerWearAnvilHammerTrigger> PLAYER_WEAR_ANVIL_HAMMER ` | 初值 ` ModCriterionTriggers.REGISTER.register("player_wear_anvil_hammer", PlayerWearAnvilHammerTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L173) |
| ` public static final DeferredHolder<CriterionTrigger<?>, PipeConnectContainersTrigger> PIPE_CONNECT_CONTAINERS ` | 初值 ` ModCriterionTriggers.REGISTER.register("pipe_connect_containers", PipeConnectContainersTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L176) |
| ` public static final DeferredHolder<CriterionTrigger<?>, VoidEnergyCollectorWorkingTrigger> VOID_ENERGY_COLLECTOR_WORKING ` | 初值 ` ModCriterionTriggers.REGISTER.register("void_energy_collector_working", VoidEnergyCollectorWorkingTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L179) |
| ` public static final DeferredHolder<CriterionTrigger<?>, CelestialEvolutionTrigger> CELESTIAL_EVOLUTION ` | 初值 ` REGISTER.register("celestial_evolution", CelestialEvolutionTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L182) |
| ` public static final DeferredHolder<CriterionTrigger<?>, PlanetDetonationTrigger> PLANET_DETONATION ` | 初值 ` REGISTER.register("planet_detonation", PlanetDetonationTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L185) |
| ` public static final DeferredHolder<CriterionTrigger<?>, PlanetaryCollapseDeathTrigger> PLANETARY_COLLAPSE_DEATH ` | 初值 ` REGISTER.register("planetary_collapse_death", PlanetaryCollapseDeathTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L188) |
| ` public static final DeferredHolder<CriterionTrigger<?>, StarContactDeathTrigger> STAR_CONTACT_DEATH ` | 初值 ` REGISTER.register("star_contact_death", StarContactDeathTrigger::new) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L191) |
| ` public static void register(IEventBus eventBus) ` | 执行 ` ModCriterionTriggers.REGISTER.register(eventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L123) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L194) |
| ` public ModCriterionTriggers() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCriterionTriggers.java#L42) |

## ModDataAttachments

` public class ModDataAttachments `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Supplier<AttachmentType<AmuletRaffleProbability>> AMULET_RAFFLE_PROBABILITY ` | 由 ` ModDataAttachments.ATTACHMENT_TYPES.register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L21) |
| ` public static final Supplier<AttachmentType<Boolean>> ENCHANTED_GOLD_BARTER ` | 初值 ` ATTACHMENT_TYPES.register( "enchanted_gold_barter", () -> AttachmentType.builder(() -> false).build()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L30) |
| ` public static final Supplier<AttachmentType<Boolean>> ZOMBIFICATED_BY_CURSE ` | 初值 ` ModDataAttachments.ATTACHMENT_TYPES.register( "zombificated_by_curse", () -> AttachmentType.builder(() -> false) .serialize(Codec.BOOL.fieldOf("zombificated_by_curse")) .build() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L33) |
| ` public static final Supplier<AttachmentType<SmithingTemplateAdditions>> SMITHING_TEMPLATE_ADDITIONS ` | 初值 ` ATTACHMENT_TYPES.register("smithing_template_additions", () -> AttachmentType.builder(() -> SmithingTemplateAdditions.EMPTY) .serialize(SmithingTemplateAdditions.CODEC).copyOnDeath().build()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L40) |
| ` public static final Supplier<AttachmentType<SmithingTemplateFavorites>> SMITHING_TEMPLATE_FAVORITES ` | 由 ` ModDataAttachments.ATTACHMENT_TYPES.register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L45) |
| ` public static final Supplier<AttachmentType<PocketInventory>> POCKETS ` | 由 ` ATTACHMENT_TYPES.register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L54) |
| ` public static final Supplier<AttachmentType<Boolean>> IN_POWER_GRID ` | 初值 ` ATTACHMENT_TYPES.register( "in_power_grid", () -> AttachmentType.builder(() -> false).sync(ByteBufCodecs.BOOL).build()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L58) |
| ` public static final Supplier<AttachmentType<Boolean>> POWER_GRID_OVERLOADED ` | 初值 ` ATTACHMENT_TYPES.register( "power_grid_overloaded", () -> AttachmentType.builder(() -> false).sync(ByteBufCodecs.BOOL).build()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L61) |
| ` public static final Supplier<AttachmentType<Boolean>> IONOCRAFT_DESCENT_AVAILABLE ` | 初值 ` ATTACHMENT_TYPES.register( "ionocraft_descent_available", () -> AttachmentType.builder(() -> false) .sync((holder, player) -> holder == player, ByteBufCodecs.BOOL).build()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L64) |
| ` public static void register(IEventBus eventBus) ` | 执行 ` ModDataAttachments.ATTACHMENT_TYPES.register(eventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L68) |
| ` public ModDataAttachments() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDataAttachments.java#L17) |

## ModDensityFunctionTypes

` public final class ModDensityFunctionTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDensityFunctionTypes.java#L14)

Registers density function types used by AnvilCraft's built-in dimensions.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Supplier<MapCodec<? extends DensityFunction>> CRATER ` | 初值 ` REGISTER.register( "crater", () -> CraterDensityFunction.MAP_CODEC ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDensityFunctionTypes.java#L19) |
| ` public static void register(IEventBus modEventBus) ` | 执行 ` REGISTER.register(modEventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDensityFunctionTypes.java#L26) |

## ModDispenserBehavior

` public class ModDispenserBehavior `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L49)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final UUID ANVILCRAFT_DISPENSER ` | 初值 ` new UUID(0x976850D40E652AB5L, 0x83D24BBA75A6B114L) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L54) |
| ` public static void register() ` | 实现调用 ` DispenserBlock.registerBehavior(Items.IRON_INGOT, ModDispenserBehavior::ironIngot) `<br>实现调用 ` DispenserBlock.registerBehavior(Items.BOWL, ModDispenserBehavior::bowl) `<br>实现调用 ` DispenserBlock.registerBehavior(Items.GOLDEN_APPLE, ModDispenserBehavior::goldenApple) `<br>[调用处 AnvilCraft.loadComplete](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L191) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L143) |
| ` public ModDispenserBehavior() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModDispenserBehavior.java#L49) |

## ModHammerInits

` public class ModHammerInits `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHammerInits.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void init() ` | 初始化铁砧锤处理器<br>实现调用 ` BuiltInRegistries.BLOCK.wrapAsHolder(block).is(ModBlockTags.HAMMER_CHANGEABLE) `<br>实现调用 ` BuiltInRegistries.BLOCK.wrapAsHolder(block) `<br>实现调用 ` HammerManager.registerChange(() -> block, HammerRotateBehavior.DEFAULT) `<br>[调用处 ServerLifecycleEventListener.onServerStarted](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ServerLifecycleEventListener.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHammerInits.java#L11) |
| ` public ModHammerInits() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHammerInits.java#L9) |

## ModHeaterInfos

` public class ModHeaterInfos `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final HeaterInfo<HeliostatsBlockEntity> HELIOSTATS ` | 由 ` HeatRecorder.registerProducerInfo ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L25) |
| ` public static final HeaterInfo<BlockInfo> HEATER ` | 初值 ` HeatRecorder.registerProducerInfo( HeaterInfo.blockState( ModBlocks.HEATER.get(), HeaterBlock.OVERLOAD, false, heater -> Set.of(heater.pos().above()), HeatTierLine.always(HeatTier.HEATED, 2) ) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L44) |
| ` public static final HeaterInfo<BlockInfo> BURNING_HEATER ` | 由 ` HeatRecorder.registerProducerInfo ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L53) |
| ` public static HeaterInfo<MineralFountainBlockEntity> mineralFountain(MineralFountainHeat heat) ` | [调用处 MineralFountainBlockEntity.setHeat](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/MineralFountainBlockEntity.java#L170) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L65) |
| ` public static final HeaterInfo<BaseLaserBlockEntity> LASER_EMITTER ` | 由 ` HeatRecorder.registerProducerInfo ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L76) |
| ` public static final HeaterInfo<PlasmaJetsBlockEntity> NO_MAGNET_PLASMA_JETS ` | 初值 ` HeatRecorder.registerProducerInfo( HeaterInfo.blockEntity( ModBlockEntities.PLASMA_JETS, plasmaJets -> plasmaJets.getHeatingPoses().getFirst(), HeatTierLine.always(HeatTier.GLOWING, 2)) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L95) |
| ` public static final HeaterInfo<PlasmaJetsBlockEntity> MAGNET_PLASMA_JETS ` | 初值 ` HeatRecorder.registerProducerInfo( HeaterInfo.blockEntity( ModBlockEntities.PLASMA_JETS, plasmaJets -> plasmaJets.getHeatingPoses().getSecond(), HeatTierLine.always(HeatTier.GLOWING, 20)) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L101) |
| ` public ModHeaterInfos() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModHeaterInfos.java#L24) |

## ModInspections

` public class ModInspections `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModInspections.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ModInspections INSTANCE ` | 初值 ` new ModInspections() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModInspections.java#L22) |
| ` public static void initialize() ` | 执行 ` ModInspections.INSTANCE.registerActionServer(AnvilCraft.of("silencer")) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L120) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModInspections.java#L25) |
| ` public void registerActionServer(Identifier id) ` | 注册检查项 检查项需同时在ModInspections和InspectionSupport中注册 对于InspectionSupport，使用InspectionSupport#registerActionClient 注册检查项<br>参见 InspectionSupport<br>执行 ` ModInspections.INSTANCE.inspectionOptions.add(id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModInspections.java#L36) |
| ` public void registerCommand(LiteralArgumentBuilder<CommandSourceStack> parent) ` | 实现调用 ` literal("inspection") `<br>实现调用 ` literal(option.toString()) `<br>实现调用 ` option.toString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModInspections.java#L45) |
| ` public ModInspections() ` | Java 提供的无参构造器。<br>[调用处 ModInspections](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModInspections.java#L22) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModInspections.java#L20) |

## ModLevelKeys

` public final class ModLevelKeys `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModLevelKeys.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceKey<Level> MUN ` | 初值 ` ResourceKey.create(Registries.DIMENSION, AnvilCraft.of("mun")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModLevelKeys.java#L9) |
| ` public static final ResourceKey<Level> VOID_PLANET ` | 初值 ` ResourceKey.create(Registries.DIMENSION, AnvilCraft.of("void_planet")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModLevelKeys.java#L10) |

## ModMegastructures

` public final class ModMegastructures `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L38)

Built-in Celestial Forging Anvil megastructures.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final DeferredHolder<Megastructure, Megastructure> PLANET_EXCAVATOR ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L44) |
| ` public static final DeferredHolder<Megastructure, Megastructure> PLANET_EXTRACTOR ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L54) |
| ` public static final DeferredHolder<Megastructure, Megastructure> ECO_STATION ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L64) |
| ` public static final DeferredHolder<Megastructure, Megastructure> TEMPLE ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L74) |
| ` public static final DeferredHolder<Megastructure, Megastructure> MONOLITH_DEPLOYER ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L85) |
| ` public static final DeferredHolder<Megastructure, Megastructure> GIANT_PLANET_EXTRACTOR ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L96) |
| ` public static final DeferredHolder<Megastructure, Megastructure> DYSON_SPHERE_BROWN_DWARF ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L106) |
| ` public static final DeferredHolder<Megastructure, Megastructure> STELLAR_RING_COLLIDER ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L117) |
| ` public static final DeferredHolder<Megastructure, Megastructure> DYSON_SPHERE_SMALL ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L129) |
| ` public static final DeferredHolder<Megastructure, Megastructure> DYSON_SPHERE_LARGE ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L140) |
| ` public static final DeferredHolder<Megastructure, Megastructure> MAGNETAR_COIL ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L151) |
| ` public static final DeferredHolder<Megastructure, Megastructure> PENROSE_SPHERE ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L162) |
| ` public static final DeferredHolder<Megastructure, Megastructure> MATTER_DECOMPRESSOR ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L173) |
| ` public static final DeferredHolder<Megastructure, Megastructure> WORMHOLE_STABILIZER ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L185) |
| ` public static final DeferredHolder<Megastructure, Megastructure> STELLAR_EVOLUTION_ACCELERATOR ` | 由 ` register ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L195) |
| ` public static void register(IEventBus eventBus) ` | 执行 ` ModMegastructures.REGISTER.register(eventBus) `<br>[调用处 AnvilCraft.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java#L107) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L215) |
