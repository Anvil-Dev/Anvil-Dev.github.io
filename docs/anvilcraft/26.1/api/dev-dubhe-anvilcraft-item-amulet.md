# dev.dubhe.anvilcraft.item.amulet



## AmuletBoxItem

` public class AmuletBoxItem extends BundleLikeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L35)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmuletBoxItem(Properties properties) ` | 执行 ` super(properties.component(ModComponents.BOX_CONTENTS, BoxContents.EMPTY)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L39) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L69) |
| ` @Override public boolean isBarVisible(ItemStack itemStack) ` | 末尾返回 ` contents.usage() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L105) |
| ` @Override public int getBarWidth(ItemStack itemStack) ` | 末尾返回 ` (int) (Math.clamp(contents.usage() / (float) AnvilCraft.CONFIG.equipment.amuletBoxCapacity, 0F, 1F) * 13) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L111) |
| ` @Override public int getBarColor(ItemStack itemStack) ` | 末尾返回 ` ColorUtil.lerpColor(contents.usage() / (float) AnvilCraft.CONFIG.equipment.amuletBoxCapacity, AmuletBoxItem.BAR_COLOR, AmuletBoxItem.FULL_BAR_COLOR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L117) |
| ` @Override public ItemUseAnimation getUseAnimation(ItemStack itemStack) ` | 末尾返回 ` ItemUseAnimation.NONE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L124) |
| ` @Override public void onDestroyed(ItemEntity itemEntity, DamageSource source) ` | 实现调用 ` itemEntity.getItem().get(ModComponents.BOX_CONTENTS) `<br>实现调用 ` itemEntity.getItem() `<br>分支 ` (contents != null) ` 内调用 ` itemEntity.getItem().set(ModComponents.BOX_CONTENTS, BoxContents.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L129) |
| ` public static boolean tryUsePocketTotem(ServerPlayer player, DamageSource damage) ` | ` (damage.is(DamageTypeTags.BYPASSES_INVULNERABILITY)) ` 成立时提前返回 ` false `<br>末尾返回 ` false `<br>[调用处 LivingEntityMixin.anvilcraft$usePocketTotem](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java#L258) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L149) |

## ComradeAmuletItem

` public class ComradeAmuletItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/ComradeAmuletItem.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ComradeAmuletItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/ComradeAmuletItem.java#L20) |
| ` @Override public void appendHoverText(ItemStack stack, TooltipContext context, TooltipDisplay display, Consumer<Component> tooltipComponents, TooltipFlag flag) ` | 实现调用 ` super.appendHoverText(stack, context, display, tooltipComponents, flag) `<br>实现调用 ` stack.get(ModComponents.COMRADES) `<br>实现调用 ` Component.translatable("item.anvilcraft.comrade_amulet.tooltip").withStyle(ChatFormatting.GRAY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/amulet/ComradeAmuletItem.java#L24) |
