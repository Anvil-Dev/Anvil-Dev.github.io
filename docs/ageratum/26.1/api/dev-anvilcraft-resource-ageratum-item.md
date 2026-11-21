# dev.anvilcraft.resource.ageratum.item



## GuideBookItem

` public class GuideBookItem extends Item `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/GuideBookItem.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GuideBookItem(Properties properties) ` | 执行 ` super(properties) ` | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/GuideBookItem.java#L18) |
| ` @Override public InteractionResult use(Level level, Player player, InteractionHand hand) ` | ` (!(player instanceof ServerPlayer serverPlayer)) ` 成立时提前返回 ` InteractionResult.SUCCESS `<br>末尾返回 ` InteractionResult.SUCCESS_SERVER ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/GuideBookItem.java#L22) |
