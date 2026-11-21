# dev.dubhe.anvilcraft.client.markdown.recipe



## MDAnvilCollisionCraftRecipeComponent

` public class MDAnvilCollisionCraftRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int ANVIL_X ` | 初值 ` 30 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L22) |
| ` public static final int ANVIL_Y ` | 初值 ` 50 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L23) |
| ` public static final int MOVING_ANVIL_X ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.ANVIL_X + 36 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L24) |
| ` public static final int MOVING_ANVIL_X_DELTA ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L25) |
| ` public static final int MOVING_ANVIL_Y ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.ANVIL_Y ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L26) |
| ` public static final int HIT_BLOCK_X ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.MOVING_ANVIL_X + 24 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L28) |
| ` public static final int HIT_BLOCK_Y ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.MOVING_ANVIL_Y ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L29) |
| ` public static final int EXPLOSION_X ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.HIT_BLOCK_X - 6 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L30) |
| ` public static final int EXPLOSION_Y ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.HIT_BLOCK_Y - 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L31) |
| ` public static final int OUTPUT_ITEM_X ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.HIT_BLOCK_X + 80 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L33) |
| ` public static final int OUTPUT_ITEM_Y ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.HIT_BLOCK_Y ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L34) |
| ` public static final int OUTPUT_ARROW_X ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.HIT_BLOCK_X + 24 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L35) |
| ` public static final int OUTPUT_ARROW_Y ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.HIT_BLOCK_Y - 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L36) |
| ` public static final int TRANSFORM_X ` | 初值 ` 160 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L38) |
| ` public static final int TRANSFORM_ARROW_X ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.TRANSFORM_X - 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L39) |
| ` public static final int TRANSFORM_INPUT_Y ` | 初值 ` 26 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L40) |
| ` public static final int TRANSFORM_ARROW_Y ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.TRANSFORM_INPUT_Y + 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L41) |
| ` public static final int TRANSFORM_OUTPUT_Y ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.TRANSFORM_INPUT_Y + 54 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L42) |
| ` public static final int TRANSFORM_INFO_X ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.TRANSFORM_X - 16 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L43) |
| ` public static final int TRANSFORM_INFO_Y ` | 初值 ` MDAnvilCollisionCraftRecipeComponent.TRANSFORM_OUTPUT_Y + 20 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L44) |
| ` public static final int INFO_X ` | 初值 ` 12 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L46) |
| ` public static final int INFO_Y ` | 初值 ` 100 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L47) |
| ` public static final int INFO_Y_OFFSET ` | 初值 ` 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L48) |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/256back.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L50) |
| ` public static final Identifier EXPLOSION ` | 初值 ` AnvilCraft.of("textures/gui/jei/explosion.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L51) |
| ` public MDAnvilCollisionCraftRecipeComponent(AnvilCollisionCraftRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(MDAnvilCollisionCraftRecipeComponent.TEXTURE, 256, 128, enableAlignCenter) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDAnvilCollisionCraftRecipeComponent.java#L55) |

## MDChargerChargingRecipeComponent

` public class MDChargerChargingRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDChargerChargingRecipeComponent.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/128back.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDChargerChargingRecipeComponent.java#L15) |
| ` public static final String KEY_CATEGORY ` | 初值 ` "gui.anvilcraft.category.charger_charging" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDChargerChargingRecipeComponent.java#L17) |
| ` public static final String KEY_POWER_CONSUME ` | 初值 ` MDChargerChargingRecipeComponent.KEY_CATEGORY + ".power_consume" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDChargerChargingRecipeComponent.java#L18) |
| ` public static final String KEY_POWER_PRODUCE ` | 初值 ` MDChargerChargingRecipeComponent.KEY_CATEGORY + ".power_produce" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDChargerChargingRecipeComponent.java#L19) |
| ` public static final String KEY_TIME ` | 初值 ` MDChargerChargingRecipeComponent.KEY_CATEGORY + ".time" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDChargerChargingRecipeComponent.java#L20) |
| ` public MDChargerChargingRecipeComponent(ChargerChargingRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(MDChargerChargingRecipeComponent.TEXTURE, 128, 64, enableAlignCenter) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDChargerChargingRecipeComponent.java#L24) |

## MDEnergyWeaponMakeRecipeComponent

` public class MDEnergyWeaponMakeRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDEnergyWeaponMakeRecipeComponent.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/128back.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDEnergyWeaponMakeRecipeComponent.java#L12) |
| ` public MDEnergyWeaponMakeRecipeComponent(EnergyWeaponMakeRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(MDEnergyWeaponMakeRecipeComponent.TEXTURE, 128, 64, enableAlignCenter) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDEnergyWeaponMakeRecipeComponent.java#L16) |

## MDJewelCraftingRecipeComponent

` public class MDJewelCraftingRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDJewelCraftingRecipeComponent.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/jewelcrafting_table.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDJewelCraftingRecipeComponent.java#L16) |
| ` public MDJewelCraftingRecipeComponent(JewelCraftingRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(MDJewelCraftingRecipeComponent.TEXTURE, 142, 62, enableAlignCenter) `<br>实现调用 ` recipe.result() `<br>实现调用 ` recipe.mergedIngredients() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDJewelCraftingRecipeComponent.java#L21) |

## MDMineralFountainRecipeComponent

` public class MDMineralFountainRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/128back.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L37) |
| ` public static final int WIDTH ` | 初值 ` 128 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L38) |
| ` public static final int HEIGHT ` | 初值 ` 64 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L39) |
| ` public MDMineralFountainRecipeComponent(MineralFountainActiveRecipe recipe, boolean enableAlignCenter) ` | 执行 ` this( recipe.getFromBlock(), recipe.getToBlock(), aroundBlocks(recipe), recipe.getDimension().orElse(null), enableAlignCenter ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L56) |
| ` public MDMineralFountainRecipeComponent(MineralFountainPassiveRecipe recipe, boolean enableAlignCenter) ` | 执行 ` this( recipe.getFromBlock(), recipe.getToBlock(), List.of(), recipe.getDimension().orElse(null), enableAlignCenter ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L66) |
| ` public MDMineralFountainRecipeComponent(MineralFountainReplacementRecipe recipe, boolean enableAlignCenter) ` | 执行 ` this( recipe.getFromBlock(), recipe.getToBlock(), replacementAround(recipe), recipe.getDimension().orElse(null), recipe.getReplaceChance(), enableAlignCenter ) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L76) |

## MDMultipleToOneSmithingRecipeComponent

` public class MDMultipleToOneSmithingRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final int TEMPLATE_X ` | 初值 ` 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L12) |
| ` public static final int Y ` | 初值 ` 28 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L13) |
| ` public static final int CENTER_INPUT_X ` | 初值 ` 71 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L14) |
| ` public static final int OUTPUT_X ` | 初值 ` 146 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L15) |
| ` public static final int[] INPUT_X ` | 初值 ` {0, 0, -1, 1, -1, 1, -1, 1} ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L16) |
| ` public static final int[] INPUT_Y ` | 初值 ` {-1, 1, 0, 0, -1, -1, 1, 1} ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L17) |
| ` public static final int INPUT_SIZE ` | 初值 ` 19 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L18) |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/ember_smithing_table.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L19) |
| ` public MDMultipleToOneSmithingRecipeComponent(BaseMultipleToOneSmithingRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(TEXTURE, 170, 72, enableAlignCenter) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMultipleToOneSmithingRecipeComponent.java#L22) |

## MDPortalConversionRecipeComponent

` public class MDPortalConversionRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDPortalConversionRecipeComponent.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/128back.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDPortalConversionRecipeComponent.java#L16) |
| ` public static final String FALL_THROUGH ` | 初值 ` "gui.anvilcraft.category.portal_conversion.fall_through" ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDPortalConversionRecipeComponent.java#L17) |
| ` public MDPortalConversionRecipeComponent(PortalConversionRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(MDPortalConversionRecipeComponent.TEXTURE, 128, 64, enableAlignCenter) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDPortalConversionRecipeComponent.java#L20) |

## MDProceduralProcessRecipeComponent

` public class MDProceduralProcessRecipeComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEXTURE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/procedural_process.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L22) |
| ` public static final Identifier CYCLE ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/cycle.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L23) |
| ` public static final Identifier ARROW_LONG ` | 初值 ` AnvilCraft.of("textures/gui/ageratum/arrow_long.png") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L24) |
| ` public static final int WIDTH ` | 初值 ` 384 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L25) |
| ` public static final int HEIGHT ` | 初值 ` 110 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L26) |
| ` public static final int STEPS_LENGTH ` | 初值 ` 210 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L27) |
| ` public static final int STEP_X ` | 初值 ` (WIDTH - STEPS_LENGTH) / 2 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L28) |
| ` public static final int STEP_LENGTH ` | 初值 ` 30 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L29) |
| ` public static final int ANVIL_Y ` | 初值 ` 18 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L30) |
| ` public static final int BLOCK_ROW ` | 初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L31) |
| ` public static final int FLOW_Y ` | 初值 ` 90 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L32) |
| ` public static final int ITEM_Y_OFFSET ` | 初值 ` 8 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L33) |
| ` public static final int ARROW_LONG_LENGTH ` | 初值 ` 64 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L34) |
| ` public MDProceduralProcessRecipeComponent(ProceduralProcessRecipe recipe, boolean enableAlignCenter) ` | 实现调用 ` super(TEXTURE, WIDTH, HEIGHT, enableAlignCenter) `<br>实现调用 ` recipe.initialBlock() `<br>实现调用 ` recipe.steps().size() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L42) |
| ` public static void renderArrowLong(GuiGraphicsExtractor graphics, int x, int y) ` | 执行 ` graphics.blit(RenderPipelines.GUI_TEXTURED, ARROW_LONG, x, y, 0, 0, ARROW_LONG_LENGTH, 14, ARROW_LONG_LENGTH, 14) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDProceduralProcessRecipeComponent.java#L76) |

## MDVanillaCraftingComponent

` public final class MDVanillaCraftingComponent extends MDRecipeComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDVanillaCraftingComponent.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public MDVanillaCraftingComponent(CraftingRecipe recipe, boolean center) ` | 实现调用 ` super(MDCraftingTableRecipeComponent.CRAFTING_TABLE_COMPONENT_TEXTURE, 128, 72, center) `<br>实现调用 ` Collections.nCopies(9, Optional.empty()) `<br>实现调用 ` Optional.empty() `<br>[调用处 HandbookRecipeMixin.anvilcraft$crafting](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookRecipeMixin.java#L46) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDVanillaCraftingComponent.java#L23) |
| ` public List<Optional<Ingredient>> getIngredients() ` | 末尾返回 ` this.ingredients ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDVanillaCraftingComponent.java#L61) |
| ` public ItemStack getResultItem() ` | 末尾返回 ` this.resultItem ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDVanillaCraftingComponent.java#L65) |
