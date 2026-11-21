# dev.dubhe.anvilcraft.item.tool.frost



## FrostAnvilHammerItem

` public class FrostAnvilHammerItem extends AnvilHammerItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostAnvilHammerItem.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostAnvilHammerItem(Properties properties) ` | 执行 ` super(properties.component(ModComponents.MERCILESS, Merciless.DEFAULT)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostAnvilHammerItem.java#L10) |
| ` @Override public Block getAnvil() ` | 末尾返回 ` ModBlocks.FROST_ANVIL.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostAnvilHammerItem.java#L19) |

## FrostMetalAxeItem

` public class FrostMetalAxeItem extends AxeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalAxeItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalAxeItem(Properties properties) ` | 执行 ` super(ModToolMaterials.FROST_METAL, 9, -3F, properties.component(ModComponents.MERCILESS, Merciless.DEFAULT)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalAxeItem.java#L9) |

## FrostMetalHeavyHalberdItem

` public class FrostMetalHeavyHalberdItem extends HeavyHalberdItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalHeavyHalberdItem.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalHeavyHalberdItem(Properties properties) ` | 执行 ` super(ModToolMaterials.FROST_METAL, 13, -2.4F, properties.component(ModComponents.MERCILESS, Merciless.DEFAULT)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalHeavyHalberdItem.java#L14) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, LivingEntity shooter, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownFrostMetalHeavyHalberdEntity(level, shooter, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalHeavyHalberdItem.java#L18) |
| ` @Override public ThrownHeavyHalberdEntity createThrown(Level level, double x, double y, double z, ItemStack pickupItemStack) ` | 末尾返回 ` new ThrownFrostMetalHeavyHalberdEntity(level, x, y, z, pickupItemStack) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalHeavyHalberdItem.java#L23) |

## FrostMetalHoeItem

` public class FrostMetalHoeItem extends HoeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalHoeItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalHoeItem(Properties properties) ` | 执行 ` super(ModToolMaterials.FROST_METAL, 1, 0, properties.component(ModComponents.MERCILESS, Merciless.DEFAULT)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalHoeItem.java#L9) |

## FrostMetalPickaxeItem

` public class FrostMetalPickaxeItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalPickaxeItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalPickaxeItem(Properties properties) ` | 执行 ` super(properties.pickaxe(ModToolMaterials.FROST_METAL, 4, -2.8F).component(ModComponents.MERCILESS, Merciless.DEFAULT)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalPickaxeItem.java#L9) |

## FrostMetalResonatorItem

` public class FrostMetalResonatorItem extends ResonatorItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalResonatorItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalResonatorItem(Properties properties) ` | 执行 ` super(ModToolMaterials.FROST_METAL, 13, -3F, properties.component(ModComponents.MERCILESS, Merciless.DEFAULT)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalResonatorItem.java#L9) |

## FrostMetalShovelItem

` public class FrostMetalShovelItem extends ShovelItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalShovelItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalShovelItem(Properties properties) ` | 执行 ` super( ModToolMaterials.FROST_METAL, 5, -3F, properties.component(ModComponents.MERCILESS, Merciless.DEFAULT) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalShovelItem.java#L9) |

## FrostMetalSwordItem

` public class FrostMetalSwordItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalSwordItem.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FrostMetalSwordItem(Properties properties) ` | 执行 ` super( properties.sword(ModToolMaterials.FROST_METAL, 7, -2.4F) .component(ModComponents.MERCILESS, Merciless.DEFAULT) ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/tool/frost/FrostMetalSwordItem.java#L9) |
