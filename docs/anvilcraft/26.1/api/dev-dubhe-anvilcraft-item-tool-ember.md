# dev.dubhe.anvilcraft.item.tool.ember



## EmberAnvilHammerItem

` public class EmberAnvilHammerItem extends AnvilHammerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberAnvilHammerItem.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberAnvilHammerItem(Properties properties) ` | 初始化铁砧锤<br>参数 ` properties ` 物品属性<br>执行 ` super( properties.fireResistant() .component(ModComponents.FIRE_REFORGING, Unit.INSTANCE) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberAnvilHammerItem.java#L13) |
| ` @Override public Block getAnvil() ` | 末尾返回 ` ModBlocks.EMBER_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberAnvilHammerItem.java#L25) |

## EmberMetalAxeItem

` public class EmberMetalAxeItem extends AxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalAxeItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalAxeItem(Properties properties) ` | 执行 ` super(ModToolMaterials.EMBER_METAL, 6, -3F, properties.fireResistant().component(ModComponents.FIRE_REFORGING, Unit.INSTANCE)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalAxeItem.java#L9) |

## EmberMetalHeavyHalberdItem

` public class EmberMetalHeavyHalberdItem extends HeavyHalberdItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalHeavyHalberdItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalHeavyHalberdItem(Properties properties) ` | 执行 ` super(ModToolMaterials.EMBER_METAL, 10, -2.4F, properties.fireResistant().component(ModComponents.FIRE_REFORGING, Unit.INSTANCE)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalHeavyHalberdItem.java#L14) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownEmberMetalHeavyHalberdEntity(level, shooter, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalHeavyHalberdItem.java#L18) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownEmberMetalHeavyHalberdEntity(level, x, y, z, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalHeavyHalberdItem.java#L23) |

## EmberMetalHoeItem

` public class EmberMetalHoeItem extends HoeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalHoeItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalHoeItem(Properties properties) ` | 执行 ` super(ModToolMaterials.EMBER_METAL, -3, 0, properties.fireResistant().component(ModComponents.FIRE_REFORGING, Unit.INSTANCE)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalHoeItem.java#L9) |

## EmberMetalPickaxeItem

` public class EmberMetalPickaxeItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalPickaxeItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalPickaxeItem(Properties properties) ` | 执行 ` super( properties .fireResistant() .pickaxe(ModToolMaterials.EMBER_METAL, 2, -2.8F) .component(ModComponents.FIRE_REFORGING, Unit.INSTANCE) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalPickaxeItem.java#L9) |

## EmberMetalResonatorItem

` public class EmberMetalResonatorItem extends ResonatorItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalResonatorItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalResonatorItem(Properties properties) ` | 执行 ` super( ModToolMaterials.EMBER_METAL, 10, -3F, properties.fireResistant().component(ModComponents.FIRE_REFORGING, Unit.INSTANCE) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalResonatorItem.java#L9) |

## EmberMetalShovelItem

` public class EmberMetalShovelItem extends ShovelItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalShovelItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalShovelItem(Properties properties) ` | 执行 ` super( ModToolMaterials.EMBER_METAL, 3, -3F, properties.fireResistant().component(ModComponents.FIRE_REFORGING, Unit.INSTANCE) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalShovelItem.java#L9) |

## EmberMetalSwordItem

` public class EmberMetalSwordItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalSwordItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EmberMetalSwordItem(Properties properties) ` | 执行 ` super( properties.fireResistant() .sword(ModToolMaterials.EMBER_METAL, 4, -2.4F) .component(ModComponents.FIRE_REFORGING, Unit.INSTANCE) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/ember/EmberMetalSwordItem.java#L9) |
