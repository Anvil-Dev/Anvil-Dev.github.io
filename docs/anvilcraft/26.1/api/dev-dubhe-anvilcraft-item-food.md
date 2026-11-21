# dev.dubhe.anvilcraft.item.food



## CannedFoodItem

` public class CannedFoodItem extends Item implements IExtraItemDisplay, IItemTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CannedFoodItem.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CannedFoodItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CannedFoodItem.java#L21) |
| ` @Override public ItemStack getDisplayedItem(ItemStack stack) ` | 末尾返回 ` displayItem != null ? displayItem.stored() : ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CannedFoodItem.java#L25) |
| ` public ItemStack setFood(ItemStack canStack, ItemStack foodStack) ` | 末尾返回 ` canStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CannedFoodItem.java#L31) |
| ` @Override public void appendItemTooltip( ItemStack stack, TooltipContext context, TooltipDisplay display, Consumer<Component> builder, TooltipFlag flag ) ` | 执行 ` stack.addToTooltip(ModComponents.DISPLAY_ITEM, context, display, builder, flag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CannedFoodItem.java#L58) |
| ` @Override public int offsetX(ItemStack stack) ` | 末尾返回 ` 5 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CannedFoodItem.java#L65) |
| ` @Override public int offsetY(ItemStack stack) ` | 末尾返回 ` 2 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CannedFoodItem.java#L70) |
| ` @Override public float scale(ItemStack stack) ` | 末尾返回 ` 0.5F ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CannedFoodItem.java#L75) |

## CursedGoldenAppleItem

` public class CursedGoldenAppleItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CursedGoldenAppleItem.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CursedGoldenAppleItem(Properties properties) ` | 执行 ` super(properties) `<br>[调用处 ModFoodItems](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/item/ModFoodItems.java#L25) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CursedGoldenAppleItem.java#L24) |
| ` @Override public ItemStack finishUsingItem(ItemStack stack, Level level, LivingEntity livingEntity) ` | 末尾返回 ` super.finishUsingItem(stack, level, livingEntity) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/CursedGoldenAppleItem.java#L28) |

## UtusanItem

` public class UtusanItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/UtusanItem.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public UtusanItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/UtusanItem.java#L26) |
| ` @Override public ItemStack finishUsingItem( ItemStack itemStack, Level level, LivingEntity livingEntity) ` | ` (!(livingEntity instanceof Player player)) ` 成立时提前返回 ` itemStack `<br>` (PlayerUtil.isFakePlayer(player)) ` 成立时提前返回 ` itemStack `<br>末尾返回 ` itemStack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/UtusanItem.java#L30) |
| ` public static void removeHarmfulEffects(LivingEntity livingEntity) ` | 移除负面效果<br>参数 ` livingEntity ` 生物<br>实现调用 ` livingEntity.level().isClientSide() `<br>实现调用 ` livingEntity.level() `<br>实现调用 ` livingEntity.getActiveEffects() `<br>[调用处 UtusanItem.finishUsingItem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/UtusanItem.java#L41) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/UtusanItem.java#L49) |
| ` @Override public int getUseDuration(ItemStack stack, LivingEntity entity) ` | 末尾返回 ` 10 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/UtusanItem.java#L65) |
| ` @Override public ItemUseAnimation getUseAnimation(ItemStack itemStack) ` | 末尾返回 ` ItemUseAnimation.EAT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/UtusanItem.java#L70) |
| ` @Override public InteractionResult use( Level level, Player player, InteractionHand interactionHand) ` | 末尾返回 ` ItemUtils.startUsingInstantly(level, player, interactionHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/food/UtusanItem.java#L75) |
