# dev.dubhe.anvilcraft.item.tool.trascendence



## TranscendenceAnvilHammerItem

` public class TranscendenceAnvilHammerItem extends AnvilHammerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceAnvilHammerItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component NAME ` | 初值 ` Component.translatable("item.anvilcraft.transcendence_anvil_hammer") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceAnvilHammerItem.java#L14) |
| ` public TranscendenceAnvilHammerItem(Properties properties) ` | 初始化铁砧锤<br>参数 ` properties ` 物品属性<br>实现调用 ` properties.fireResistant() .component(ModComponents.MULTIPHASE, Multiphase.create()) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` Multiphase.create() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceAnvilHammerItem.java#L19) |
| ` @Override public Block getAnvil() ` | 末尾返回 ` ModBlocks.TRANSCENDENCE_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceAnvilHammerItem.java#L33) |

## TranscendenceHeavyHalberdItem

` public class TranscendenceHeavyHalberdItem extends HeavyHalberdItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceHeavyHalberdItem.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component NAME ` | 初值 ` Component.translatable("item.anvilcraft.transcendence_heavy_halberd") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceHeavyHalberdItem.java#L19) |
| ` public TranscendenceHeavyHalberdItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .component(ModComponents.MULTIPHASE, Multiphase.create()) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` Multiphase.create() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceHeavyHalberdItem.java#L21) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownTranscendenceHeavyHalberdEntity(level, shooter, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceHeavyHalberdItem.java#L35) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownTranscendenceHeavyHalberdEntity(level, x, y, z, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceHeavyHalberdItem.java#L40) |

## TranscendenceResonatorItem

` public class TranscendenceResonatorItem extends ResonatorItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceResonatorItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Component NAME ` | 初值 ` Component.translatable("item.anvilcraft.transcendence_resonator") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceResonatorItem.java#L14) |
| ` public static final int RESONANCE_MINING_TICKS ` | 初值 ` 10 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceResonatorItem.java#L15) |
| ` public TranscendenceResonatorItem(Properties properties) ` | 实现调用 ` properties.fireResistant() .component(ModComponents.MULTIPHASE, Multiphase.create()) `<br>实现调用 ` properties.fireResistant() `<br>实现调用 ` Multiphase.create() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceResonatorItem.java#L17) |
| ` @Override public int resonanceMiningTicks() ` | 末尾返回 ` RESONANCE_MINING_TICKS ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/trascendence/TranscendenceResonatorItem.java#L31) |
