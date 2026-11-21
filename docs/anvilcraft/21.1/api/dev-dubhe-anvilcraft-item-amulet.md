# dev.dubhe.anvilcraft.item.amulet



## AmuletBoxItem

` public class AmuletBoxItem extends BundleLikeItem `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L30)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AmuletBoxItem(Properties properties) ` | 执行 ` super(properties.component(ModComponents.BOX_CONTENTS, BoxContents.EMPTY)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L34) |
| ` @Override public void appendHoverText(ItemStack stack, TooltipContext context, List<Component> tooltip, TooltipFlag flag) ` | 实现调用 ` super.appendHoverText(stack, context, tooltip, flag) `<br>实现调用 ` stack.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY) `<br>实现调用 ` tooltip.add(Component.empty()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L38) |
| ` @Override public InteractionResultHolder<ItemStack> use(Level level, Player player, InteractionHand usedHand) ` | 末尾返回 ` super.use(level, player, usedHand) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L74) |
| ` @Override public boolean isBarVisible(ItemStack itemStack) ` | 末尾返回 ` contents.usage() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L110) |
| ` @Override public int getBarWidth(ItemStack itemStack) ` | 末尾返回 ` (int) (Math.clamp(contents.usage() / (float) AnvilCraft.CONFIG.equipment.amuletBoxCapacity, 0f, 1f) * 13) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L116) |
| ` @Override public int getBarColor(ItemStack itemStack) ` | 末尾返回 ` ColorUtil.lerpColor(contents.usage() / (float) AnvilCraft.CONFIG.equipment.amuletBoxCapacity, BAR_COLOR, FULL_BAR_COLOR) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L122) |
| ` @Override public UseAnim getUseAnimation(ItemStack itemStack) ` | 末尾返回 ` UseAnim.NONE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L128) |
| ` @Override public void onDestroyed(ItemEntity itemEntity, DamageSource source) ` | 实现调用 ` itemEntity.getItem().get(ModComponents.BOX_CONTENTS) `<br>实现调用 ` itemEntity.getItem() `<br>分支 ` (contents != null) ` 内调用 ` itemEntity.getItem().set(ModComponents.BOX_CONTENTS, BoxContents.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/AmuletBoxItem.java#L133) |

## ComradeAmuletItem

` public class ComradeAmuletItem extends Item `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/ComradeAmuletItem.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ComradeAmuletItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/ComradeAmuletItem.java#L19) |
| ` @Override public void appendHoverText(ItemStack stack, TooltipContext context, List<Component> tooltipComponents, TooltipFlag flag) ` | 实现调用 ` super.appendHoverText(stack, context, tooltipComponents, flag) `<br>实现调用 ` stack.get(ModComponents.COMRADES) `<br>实现调用 ` Component.translatable("item.anvilcraft.comrade_amulet.tooltip").withStyle(ChatFormatting.GRAY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/item/amulet/ComradeAmuletItem.java#L23) |
