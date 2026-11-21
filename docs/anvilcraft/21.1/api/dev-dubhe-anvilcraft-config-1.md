# dev.dubhe.anvilcraft.config（AnvilCraftClientConfig 至 AnvilCraftClientConfig.UISettings）



## AnvilCraftClientConfig

` public class AnvilCraftClientConfig `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L12)

类型注解 ` @Config(name = AnvilCraft.MOD_ID, type = ModConfig.Type.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SerializedName("Graphics & Rendering") @Comment("Adjusts settings related to sky, lighting, models, and world rendering") @CollapsibleObject public GraphicsSettings graphics ` | 初值 ` new GraphicsSettings() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L14) |
| ` @SerializedName("Effects & Sounds") @Comment("Adjusts settings related to particles, sound effects, and audio-visual feedback") @CollapsibleObject public EffectsSettings effects ` | 初值 ` new EffectsSettings() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L175) |
| ` @SerializedName("UI & HUD") @Comment("Adjusts settings related to the interface, HUD elements, and tooltips") @CollapsibleObject public UISettings ui ` | 初值 ` new UISettings() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L282) |
| ` @SerializedName("Controls & Interaction") @Comment("Adjusts settings related to key inversion, interaction methods, and control habits") @CollapsibleObject public ControlsSettings controls ` | 初值 ` new ControlsSettings() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L424) |
| ` public AnvilCraftClientConfig() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L12) |

## AnvilCraftClientConfig.ControlsSettings

` public static class ControlsSettings `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L429)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SerializedName("Keep Charged Jump Charge") @Comment("Whether the Charged Jump keeps its progress after releasing sneak. When disabled, releasing sneak clears the charge immediately") public boolean keepChargedJumpCharge ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L430) |
| ` @Comment("Controls whether to swap insert/collect to left-click and keep extract/place on right-click (Left Collect, Right Place)") public boolean invertMouseOverrideActions ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L437) |
| ` @Comment("Controls whether to swap the Storage Fluid Port bucket actions so that left-click stores and right-click pours") public boolean invertFluidPortBucketActions ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L440) |
| ` @SerializedName("Storage Bulk Action Key") @Comment("Controls the key for storing matching items, taking eight stacks or buckets, and crafting eight stacks. Defaults to Alt; Space or both keys can also be enabled") public StorageBulkActionKey storageBulkActionKey ` | 初值 ` StorageBulkActionKey.ALT ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L445) |
| ` @Comment("Controls the mouse sensitivity when rotating 3D structure previews") @BoundedDiscrete(min = 0.1, max = 2.0) public double previewRotationSensitivity ` | 初值 ` 0.5 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L450) |
| ` @SerializedName("Building Rod Blueprint Key Set Type") @Comment("Controls the key set type used by the Building Rod blueprint mode") public BuildingRodKeySetType buildingRodKeySet ` | 初值 ` BuildingRodKeySetType.OPTIMIZED ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L454) |
| ` public ControlsSettings() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L429) |

## AnvilCraftClientConfig.ControlsSettings.BuildingRodKeySetType

` public enum BuildingRodKeySetType implements TranslatableEnum `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L475)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` TRADITIONAL ` | 声明于枚举 ` AnvilCraftClientConfig.ControlsSettings.BuildingRodKeySetType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L476) |
| ` OPTIMIZED ` | 声明于枚举 ` AnvilCraftClientConfig.ControlsSettings.BuildingRodKeySetType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L478) |
| ` public boolean isTraditional() ` | 末尾返回 ` this == BuildingRodKeySetType.TRADITIONAL ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L482) |
| ` public static BuildingRodKeySetType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L475) |
| ` public static BuildingRodKeySetType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L475) |

## AnvilCraftClientConfig.ControlsSettings.StorageBulkActionKey

` public enum StorageBulkActionKey implements TranslatableEnum `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L458)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ALT ` | 声明于枚举 ` AnvilCraftClientConfig.ControlsSettings.StorageBulkActionKey ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L459) |
| ` SPACE ` | 声明于枚举 ` AnvilCraftClientConfig.ControlsSettings.StorageBulkActionKey ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L461) |
| ` ALT_OR_SPACE ` | 声明于枚举 ` AnvilCraftClientConfig.ControlsSettings.StorageBulkActionKey ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L463) |
| ` public boolean usesAlt() ` | 末尾返回 ` this != StorageBulkActionKey.SPACE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L466) |
| ` public boolean usesSpace() ` | 末尾返回 ` this != StorageBulkActionKey.ALT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L470) |
| ` public static StorageBulkActionKey[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L458) |
| ` public static StorageBulkActionKey valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L458) |

## AnvilCraftClientConfig.EffectsSettings

` public static class EffectsSettings `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L180)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SerializedName("Render Power Transmission Line Bloom") @Comment("Controls whether to apply the bloom effect to Lasers and power transmission lines") public boolean renderBloomEffect ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L181) |
| ` @Comment("Controls whether to apply the Scanline post-processing effect to 3D structure previews") public boolean renderScanPreviewExtraEffect ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L185) |
| ` @Comment("Controls whether to display the Ascending Block animation") public boolean displayAnvilAnimation ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L188) |
| ` @Comment("Controls whether to display block bounce animation in the Giant Anvil\'s Shock") public boolean displayGiantAnvilShockBlockBounceAnimation ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L191) |
| ` @Comment("Controls whether to display particles in the Giant Anvil\'s Shock") public boolean displayGiantAnvilShockParticles ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L194) |
| ` @Comment("Controls the number of particles spawned per block by the Giant Anvil\'s Shock") @BoundedDiscrete(min = 0, max = 5) public int giantAnvilShockParticlesCount ` | 初值 ` 1 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L197) |
| ` @Comment("Controls the probability that each block spawns particles from the Giant Anvil\'s Shock (0.0-1.0)") @BoundedDiscrete(min = 0, max = 1) public double giantAnvilShockParticlesChance ` | 初值 ` 0.8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L201) |
| ` @Comment("Controls the duration of the block bounce animation in the Giant Anvil\'s Shock (in ticks)") @BoundedDiscrete(min = 1, max = 100) public int giantAnvilShockBounceDurationTicks ` | 初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L205) |
| ` @Comment("Controls the maximum bounce height of blocks in the Giant Anvil\'s Shock (in blocks)") @BoundedDiscrete(min = 0.0, max = 2.0) public double giantAnvilShockBounceAmplitude ` | 初值 ` 0.85 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L209) |
| ` @Comment("Controls whether to play sounds when the Giant Anvil triggers its Shock") public boolean playGiantAnvilShockSound ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L213) |
| ` @SerializedName("Display Redstone EMP Particles") @Comment("Controls whether to display particles in the Redstone EMP") public boolean displayRedstoneEmpParticles ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L216) |
| ` @SerializedName("Redstone EMP Max Ring Particles") @Comment("Controls the maximum number of particles per ring in the Redstone EMP") @BoundedDiscrete(min = 8, max = 64) public int redstoneEmpMaxRingParticles ` | 初值 ` 48 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L220) |
| ` @Comment("Controls whether to display exhaust particles when flying with the Ionocraft Backpack") public boolean displayIonocraftBackpackExhaustParticles ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L225) |
| ` @Comment("Controls the preview mode when placing multipart blocks (Giant Anvil, Large Crate, etc.)") public MultiPartPreviewMode multiPartPreviewMode ` | 初值 ` MultiPartPreviewMode.OUTLINE ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L228) |
| ` @Comment("Controls the opacity of the ghost (solid) preview when placing multipart blocks") @BoundedDiscrete(min = 0.0, max = 1.0) public double multiPartPreviewGhostOpacity ` | 初值 ` 0.3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L253) |
| ` @Comment("Controls the opacity of the outline preview when placing multipart blocks") @BoundedDiscrete(min = 0.0, max = 1.0) public double multiPartPreviewOutlineOpacity ` | 初值 ` 0.5 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L257) |
| ` @Comment("Controls the volume of Energy Weapons\' firing sounds (multiplier)") @BoundedDiscrete(min = 0.0, max = 2.0) public double energyWeaponSoundVolume ` | 初值 ` 1.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L261) |
| ` @Comment("Controls the shortest silence before the first Mun music track (in seconds)") @BoundedDiscrete(min = 0, max = 3600) public int munMusicFirstSilenceMinSeconds ` | 初值 ` 30 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L265) |
| ` @Comment("Controls the longest silence before the first Mun music track (in seconds)") @BoundedDiscrete(min = 0, max = 3600) public int munMusicFirstSilenceMaxSeconds ` | 初值 ` 90 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L269) |
| ` @Comment("Controls the shortest silence between Mun music tracks (in seconds)") @BoundedDiscrete(min = 0, max = 3600) public int munMusicNextSilenceMinSeconds ` | 初值 ` 60 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L273) |
| ` @Comment("Controls the longest silence between Mun music tracks (in seconds)") @BoundedDiscrete(min = 0, max = 3600) public int munMusicNextSilenceMaxSeconds ` | 初值 ` 180 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L277) |
| ` public EffectsSettings() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L180) |

## AnvilCraftClientConfig.EffectsSettings.MultiPartPreviewMode

` public enum MultiPartPreviewMode implements TranslatableEnum `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L231)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` GHOST ` | 声明于枚举 ` AnvilCraftClientConfig.EffectsSettings.MultiPartPreviewMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L232) |
| ` OUTLINE ` | 声明于枚举 ` AnvilCraftClientConfig.EffectsSettings.MultiPartPreviewMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L234) |
| ` OFF ` | 声明于枚举 ` AnvilCraftClientConfig.EffectsSettings.MultiPartPreviewMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L236) |
| ` public boolean isEnabled() ` | 末尾返回 ` this != MultiPartPreviewMode.OFF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L240) |
| ` public boolean isGhost() ` | 末尾返回 ` this == MultiPartPreviewMode.GHOST ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L244) |
| ` public boolean isOutline() ` | 末尾返回 ` this == MultiPartPreviewMode.OUTLINE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L248) |
| ` public static MultiPartPreviewMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L231) |
| ` public static MultiPartPreviewMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L231) |

## AnvilCraftClientConfig.GraphicsSettings

` public static class GraphicsSettings `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SerializedName("Overworld Celestial Rendering") @Comment("Controls the appearance of Overworld celestial bodies. Vanilla uses the original sun and moon textures; Special uses modeled bodies. Celestial motion and lunar travel are controlled by the server.") public OverworldCelestialStyle overworldCelestialStyle ` | 初值 ` OverworldCelestialStyle.VANILLA ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L20) |
| ` @Comment("Controls the maximum render distance of the Heliostats\' BER (in blocks)") @BoundedDiscrete(min = 32, max = 512) public int heliostatsRenderDistance ` | 初值 ` 128 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L32) |
| ` @Comment("Show a fading beam at the block illuminated by a working Heliostat") public boolean heliostatsBeam ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L36) |
| ` @Comment("Controls whether to render the sunflower head model for Heliostats in the Sunflower Plains biome") public boolean heliostatsSunflowerModel ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L39) |
| ` @Comment("Controls whether to render lines between Transmission Poles") public boolean renderPowerTransmitterLines ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L42) |
| ` @Comment("Controls whether to render the shared orbital rings in the Overworld-Like dimension") public boolean renderOverworldLikeSkyRings ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L45) |
| ` @Comment("Controls the sky darkening at the peak of a visual eclipse") @BoundedDiscrete(min = 0.0, max = 1.0) public double overworldLikeEclipseDarken ` | 初值 ` 0.72 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L48) |
| ` @Comment("Controls the scale of the shared orbital rings in the Overworld-Like dimension") @BoundedDiscrete(min = 100.0, max = 10000.0) public double overworldLikeSkyRingScale ` | 初值 ` 1200.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L52) |
| ` @Comment("Controls the quality of Mun lighting\n\"Potato\" uses Standard lighting and ambient occlusion without custom shadows, retaining vanilla entity shadows\n\"Standard\" adds terrain, animated entity, and colored translucent shadows\n\"Vanilla\" uses the vanilla rendering pipeline without Mun shaders, retaining the cloudless Mun sky, Overworld and moving stars\nRendering failures will fall-back this setting to \"Vanilla\"\nShadow range is limited by render distance") public MunLightingQuality munLightingQuality ` | 初值 ` MunLightingQuality.STANDARD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L56) |
| ` @SerializedName("Stellar Emission Rendering") @Comment("Controls the render mode of stellar emission\n\"Vanilla\" restores the original stellar surface and layered halos\n\"Standard\" enables temperature-based emission and smooth halos\nOn rendering failure, it falls back to \"Vanilla\" without changing this setting until resources are reloaded\nChanges take effect immediately") public CelestialRenderMode stellarRenderMode ` | 初值 ` CelestialRenderMode.STANDARD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L81) |
| ` @Comment("Controls the maximum brightness of stellar coronas") @BoundedDiscrete(min = 1.0, max = 64.0) public double stellarMaxExposure ` | 初值 ` 24.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L92) |
| ` @SerializedName("Planet Atmosphere Rendering") @Comment("Controls the render mode of the planet atmosphere\n\"Vanilla\" restores the original translucent atmosphere shell\n\"Standard\" enables a thicker volume atmosphere\nOn rendering failure, it falls back to \"Vanilla\" without changing this setting until resources are reloaded\nChanges take effect immediately") public CelestialRenderMode planetAtmosphereRenderMode ` | 初值 ` CelestialRenderMode.STANDARD ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L96) |
| ` @SerializedName("Render Gravitational Lensing Effects") @Comment("Adjusts settings related to the gravitational lensing effect of Black/White Holes") @CollapsibleObject public GravitationalLens gravitationalLens ` | 初值 ` new GravitationalLens() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L114) |
| ` @SerializedName("Enlarged Block Rendering in Sifting/Unpacking Tables") @Comment("Controls whether to render block-state items in Sifting Tables and Unpacking Tables\nWith the enlarged block model pick instead of regular scattered item rendering") public boolean renderBlockModelInSiftingAndUnpacking ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L159) |
| ` @Comment("Controls whether to always display items vertically in Item Frames on horizontal surfaces") public boolean renderVerticalModelsInHorizontalItemFrame ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L167) |
| ` @Comment("Controls the time the Affect Range outline stays visible after looking away (in ticks)") @BoundedDiscrete(min = 0, max = 600) public int affectRangeOutlinePersistTicks ` | 初值 ` 100 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L170) |
| ` public GraphicsSettings() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L19) |

## AnvilCraftClientConfig.GraphicsSettings.CelestialRenderMode

` public enum CelestialRenderMode implements TranslatableEnum `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L107)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` VANILLA ` | 声明于枚举 ` AnvilCraftClientConfig.GraphicsSettings.CelestialRenderMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L108) |
| ` STANDARD ` | 声明于枚举 ` AnvilCraftClientConfig.GraphicsSettings.CelestialRenderMode ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L110) |
| ` public static CelestialRenderMode[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L107) |
| ` public static CelestialRenderMode valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L107) |

## AnvilCraftClientConfig.GraphicsSettings.GravitationalLens

` public static class GravitationalLens `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L119)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Comment("Controls whether to render the gravitational lensing post-processing effect near Black/White Holes") public boolean enabled ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L120) |
| ` @SerializedName("Max Render Count") @Comment("Controls the maximum number of Black/White Holes rendered (2-256)\nHigher values render more effects, lower values improve performance") @BoundedDiscrete(min = 2, max = 256) public int maxHoleCount ` | 初值 ` 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L123) |
| ` @Comment("Controls the maximum distance at which Black/White Holes render gravitational lensing (in blocks)") @BoundedDiscrete(min = 16, max = 512) public int maxDistance ` | 初值 ` 256 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L132) |
| ` @Comment("Controls the lens distortion strength around Black/White Holes (higher values distort light more; default: 0.002)") public double strength ` | 初值 ` 1.0 / 512.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L136) |
| ` @Comment("Controls the event horizon radius of Black/White Holes in screen UV units (default: 0.083)") public double eventHorizonRadius ` | 初值 ` 1.0 / 12.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L139) |
| ` @Comment("Controls the reference distance for perspective scaling (in blocks)\nAt this distance, effect = config size\nCloser = bigger") public double perspectiveScale ` | 初值 ` 10.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L142) |
| ` @Comment("Controls the lens direction\n>0 = convex (gravitational pull toward center), <0 = concave (push away)\nMagnitude scales strength") public double direction ` | 初值 ` 1.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L150) |
| ` public GravitationalLens() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L119) |

## AnvilCraftClientConfig.GraphicsSettings.MunLightingQuality

` public enum MunLightingQuality implements TranslatableEnum `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L67)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` POTATO ` | 声明于枚举 ` AnvilCraftClientConfig.GraphicsSettings.MunLightingQuality ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L68) |
| ` STANDARD ` | 声明于枚举 ` AnvilCraftClientConfig.GraphicsSettings.MunLightingQuality ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L70) |
| ` OFF ` | 声明于枚举 ` AnvilCraftClientConfig.GraphicsSettings.MunLightingQuality ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L72) |
| ` public boolean isEnabled() ` | 末尾返回 ` this != MunLightingQuality.OFF ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L76) |
| ` public static MunLightingQuality[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L67) |
| ` public static MunLightingQuality valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L67) |

## AnvilCraftClientConfig.GraphicsSettings.OverworldCelestialStyle

` public enum OverworldCelestialStyle implements TranslatableEnum `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` VANILLA ` | 声明于枚举 ` AnvilCraftClientConfig.GraphicsSettings.OverworldCelestialStyle ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L26) |
| ` SPECIAL ` | 声明于枚举 ` AnvilCraftClientConfig.GraphicsSettings.OverworldCelestialStyle ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L28) |
| ` public static OverworldCelestialStyle[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L25) |
| ` public static OverworldCelestialStyle valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L25) |

## AnvilCraftClientConfig.UISettings

` public static class UISettings `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L287)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Comment("Controls whether to show Overseer loaded chunks on Xaero\'s World Map and Minimap") public volatile boolean showOverseerMapHighlights ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L288) |
| ` @Comment("Controls the Goggle info activation mode") public GoggleInfoActivationMode goggleInfoActivationMode ` | 初值 ` GoggleInfoActivationMode.WEARING_OR_HOLDING_HAMMER ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L291) |
| ` @Comment("Controls whether to render Goggle tooltips when Jade is present") public boolean showGoggleTooltipWhenJadePresent ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L307) |
| ` @Comment("Controls the scale of the Anvil Hammer wheel") @BoundedDiscrete(min = 0.5, max = 2.0) public double anvilHammerWheelScale ` | 初值 ` 1.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L310) |
| ` @SerializedName("Show Storage Stored ID") @Comment("Controls whether to add a tooltip line that shows the stored Storage ID") public boolean showStorageStoredId ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L314) |
| ` @SerializedName("Use Legacy Creative Inventory") @Comment("Controls whether to use the legacy flat creative inventory layout instead of the sectioned layout with banners\nRequires restart to take effect") public boolean useLegacyCreativeTab ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L318) |
| ` @SerializedName("Fold Colored Item Variants") @Comment("Controls whether to fold 16-color item families into one representative item with a right-click variant picker\nApplies to both creative inventory layouts (requires restart)") public boolean enableCreativeVariantPicker ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L326) |
| ` @Comment("Controls the maximum liquid enchantment level (included) displayed as Roman numerals in Auto Enchanting Table\'s Liquid Enchantment mode") @BoundedDiscrete(min = 0, max = 255) public int liquidEnchantmentLevelRomanNumeralLimit ` | 初值 ` 10 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L334) |
| ` @SerializedName("Display Capacitor Count in HUD") @Comment("Controls whether to display charged Capacitor counts in HUD") public boolean displayCapacitorCountInHud ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L338) |
| ` @Comment("Controls the display cycle of recipe preview animations (in milliseconds)") @BoundedDiscrete(min = 200, max = 10000) public int recipePreviewCycleMillis ` | 初值 ` 1500 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L342) |
| ` @Comment("Controls the time the Storage Screen\'s missing workbench flyout stays visible (in ticks)") @BoundedDiscrete(min = 0, max = 100) public int storageFlyoutHoldTicks ` | 初值 ` 25 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L346) |
| ` @Comment("Controls the fade-in time of the Storage Screen\'s flyout (in ticks)") @BoundedDiscrete(min = 0, max = 10) public int storageFlyoutFadeInTicks ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L350) |
| ` @Comment("Controls the fade-out time of the Storage Screen\'s flyout (in ticks)") @BoundedDiscrete(min = 0, max = 10) public int storageFlyoutFadeOutTicks ` | 初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L354) |
| ` @Comment("Controls the speed at which the Filter item cycles through its stored items (in milliseconds)") @BoundedDiscrete(min = 100, max = 5000) public int filterItemDisplayIntervalMillis ` | 初值 ` 1000 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L358) |
| ` @Comment("Controls the number of item types a storage\'s tooltip shows at once") @BoundedDiscrete(min = 1, max = 64) public int storageTooltipMaxVisibleTypes ` | 初值 ` 9 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L362) |
| ` @Comment("Controls whether the Storage Screen\'s JEI crafting transfer fills the crafting grid with the materials that are actually available when the recipe cannot be fully satisfied") public boolean storageJeiIncompleteFill ` | 初值 ` true ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L366) |
| ` @Comment("Controls the number of fluids the Fluid Tank tooltip shows at once") @BoundedDiscrete(min = 1, max = 64) public int fluidTankTooltipMaxVisibleFluids ` | 初值 ` 5 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L372) |
| ` @Comment("Controls the speed at which 3D Building Rod previews follow the player view") @BoundedDiscrete(min = 1.0, max = 100.0) public double buildingRodPreviewFollowRate ` | 初值 ` 18.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L376) |
| ` @Comment("Controls the maximum time a Thought tooltip stays visible (in seconds)") @BoundedDiscrete(min = 0.1, max = 10.0) public double thoughtMaxSeconds ` | 初值 ` 1.0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L380) |
| ` @SerializedName("Apply Changes When Closing Category Settings") @Comment("Controls the action when a category settings screen is closed\n\"Apply Changes\" saves the changes, \"Discard Changes\" reverts them") public ExitBehaviourMode exitCategorySettingBehaviour ` | 初值 ` ExitBehaviourMode.CANCEL ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L384) |
| ` @SerializedName("Weatherproof Chestplate HUD") @Comment("Adjusts settings related to the Weatherproof Chestplate HUD") @CollapsibleObject public WeatherproofChestplateHud weatherproofChestplateHud ` | 初值 ` new WeatherproofChestplateHud() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L400) |
| ` public UISettings() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/config/AnvilCraftClientConfig.java#L287) |
