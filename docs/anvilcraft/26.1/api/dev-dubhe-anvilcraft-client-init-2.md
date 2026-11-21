# dev.dubhe.anvilcraft.client.init（ModRenderTypes 至 ModTooltipComponents）



## ModRenderTypes

` public class ModRenderTypes `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final RenderType GEODE_HIGHLIGHT ` | 初值 ` RenderType.create( "anvilcraft:geode_highlight", RenderSetup.builder(ModRenderPipelines.GEODE_HIGHLIGHT).createRenderSetup() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L23) |
| ` public static final RenderType FISH_TANK_FLUID ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L28) |
| ` public static void registerBuffers(RegisterRenderBuffersEvent event) ` | 执行 ` event.registerRenderBuffer(ModRenderTypes.FISH_TANK_FLUID) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L38) |
| ` public static final RenderType TRANSLUCENT_COLORED_OVERLAY ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L42) |
| ` public static final RenderType HYPERCUBE ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L51) |
| ` public static final RenderType OVERWORLD_LIKE_SKY_RING ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L61) |
| ` public static final RenderType PLACEMENT_GHOST ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L70) |
| ` public static final RenderType LINE_BLOOM ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L79) |
| ` public static final RenderType LASER_TRANSLUCENT ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L87) |
| ` public static final RenderType LASER_TRANSLUCENT_BLOOM ` | 初值 ` ALRRenderTypeExtension.copyWithBloom(ModRenderTypes.LASER_TRANSLUCENT) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L96) |
| ` public static final RenderType LASER_SOLID ` | 初值 ` RenderType.create( "anvilcraft:laser_solid", RenderSetup.builder(ModRenderPipelines.LASER_SOLID) .useLightmap() .withTexture("Sampler0", ModTextureAtlases.LOCATION_LASER) .createRenderSetup() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L98) |
| ` public static final RenderType LIGHTNING ` | 初值 ` RenderType.create( "anvilcraft:lightning", RenderSetup.builder(ModRenderPipelines.LIGHTNING) .affectsCrumbling() .useLightmap() .createRenderSetup() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L106) |
| ` public static final RenderType SUPERNOVA_BEAM ` | 初值 ` RenderType.create( "anvilcraft:supernova_beam", RenderSetup.builder(ModRenderPipelines.SUPERNOVA_BEAM) .useLightmap() .withTexture("Sampler0", ModTextureAtlases.LOCATION_LASER) .createRenderSetup() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L114) |
| ` public static final RenderType HELIOSTATS_BEAM ` | 初值 ` RenderType.create( "anvilcraft:heliostats_beam", RenderSetup.builder(RenderPipelines.DEBUG_FILLED_BOX).sortOnUpload().createRenderSetup() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L122) |
| ` public static final RenderType STELLAR_BEAM ` | 初值 ` RenderType.create( "anvilcraft:stellar_beam", RenderSetup.builder(ModRenderPipelines.STELLAR_BEAM) .sortOnUpload() .createRenderSetup() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L127) |
| ` public static final RenderType BEACON_GLASS ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L134) |
| ` public static final RenderType CORRUPTED_BEACON_BEAM_CORE ` | 初值 ` RenderType.create( "anvilcraft:corrupted_beacon_beam_core", RenderSetup.builder(ModRenderPipelines.CORRUPTED_BEACON_BEAM_CORE).createRenderSetup() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L145) |
| ` public static final RenderType CORRUPTED_BEACON_BEAM ` | 初值 ` RenderType.create( "anvilcraft:corrupted_beacon_beam", RenderSetup.builder(ModRenderPipelines.CORRUPTED_BEACON_BEAM).createRenderSetup() ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L150) |
| ` public static final RenderType STAR_COLOR_OVERLAY ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L157) |
| ` public static final RenderType CELESTIAL_ATMOSPHERE ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L166) |
| ` public static final Function<Identifier, RenderType> STAR_CUTOUT ` | 由 ` Util.memoize ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L176) |
| ` public static final Function<Identifier, RenderType> CELESTIAL_RING ` | 天体环使用独立的方块半透明管线，以保持与 1.21 相同的深度和混合行为。 环的正反面使用贴图中的不同象限，因此保持双面渲染。<br>由 ` Util.memoize ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L185) |
| ` public static final Function<Identifier, RenderType> SUPERNOVA_FLASH ` | 由 ` Util.memoize ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L197) |
| ` public static final Function<Identifier, RenderType> CUTOUT_NO_LIGHTING ` | 初值 ` Util.memoize( tex -> RenderType.create( "anvilcraft:cutout_no_lighting", RenderSetup.builder(RenderPipelines.CUTOUT_BLOCK) .withTexture("Sampler0", tex) .useLightmap() .createRenderSetup() ) ) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L208) |
| ` public static final Function<Identifier, RenderType> TRANSLUCENT_NO_LIGHTING ` | 由 ` Util.memoize ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L218) |
| ` public static final RenderType ENCHANTED_GOLD_GLINT ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L229) |
| ` public static final RenderType GLASS_PIPE_FLUID ` | 由 ` RenderType.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L238) |
| ` public static final RenderType CUTOUT_BLOCK ` | 初值 ` ModRenderTypes.CUTOUT_NO_LIGHTING.apply(Sheets.BLOCKS_MAPPER.sheet()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L247) |
| ` public static final RenderType TRANSLUCENT_BLOCK ` | 初值 ` ModRenderTypes.TRANSLUCENT_NO_LIGHTING.apply(Sheets.BLOCKS_MAPPER.sheet()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L248) |
| ` public ModRenderTypes() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModRenderTypes.java#L22) |

## ModTextureAtlases

` public class ModTextureAtlases `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModTextureAtlases.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier LOCATION_LASER ` | 初值 ` AnvilCraft.of("textures/atlas/laser.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModTextureAtlases.java#L7) |
| ` public ModTextureAtlases() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModTextureAtlases.java#L6) |

## ModTooltipComponents

` public class ModTooltipComponents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModTooltipComponents.java#L21)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void register(RegisterClientTooltipComponentFactoriesEvent event) ` | 事件总线派发 ` RegisterClientTooltipComponentFactoriesEvent ` 时调用。<br>实现调用 ` event.register(FilterTooltip.class, ClientFilterTooltip::new) `<br>实现调用 ` event.register(ConfinementChamberTooltip.class, ClientConfinementChamberTooltip::new) `<br>实现调用 ` event.register(CreativeContainerTooltip.class, ClientCreativeContainerTooltip::new) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModTooltipComponents.java#L24) |
| ` public ModTooltipComponents() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/init/ModTooltipComponents.java#L21) |
