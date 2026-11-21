# dev.dubhe.anvilcraft.api.tooltip.impl（RubyPrismTooltipProvider 至 StoragePortTooltipProvider）



## RubyPrismTooltipProvider

` public class RubyPrismTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RubyPrismTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L73) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L11) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof RubyPrismBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L14) |
| ` @Override public List<Component> tooltip(BlockEntity e) ` | ` (e instanceof RubyPrismBlockEntity rubyPrismBlockEntity) ` 成立时提前返回 ` List.of(Component.translatable("tooltip.anvilcraft.jade.ruby_prism.power", rubyPrismBlockEntity.getLaserLevel())) `<br>末尾返回 ` null `<br>分支 ` (e instanceof RubyPrismBlockEntity rubyPrismBlockEntity) ` 内调用 ` Component.translatable("tooltip.anvilcraft.jade.ruby_prism.power", rubyPrismBlockEntity.getLaserLevel()) `<br>分支 ` (e instanceof RubyPrismBlockEntity rubyPrismBlockEntity) ` 内调用 ` rubyPrismBlockEntity.getLaserLevel() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L19) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/RubyPrismTooltipProvider.java#L27) |

## ShulkerContainerTooltipProvider

` public class ShulkerContainerTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity value) ` | ` ( Minecraft.getInstance().player == null \|\| !Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) && !Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) ) ` 成立时提前返回 ` false `<br>末尾返回 ` value instanceof ShulkerContainerBlockEntity `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem() `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L29) |
| ` @Override public List<Component> tooltip(BlockEntity value) ` | ` ( Minecraft.getInstance().player == null \|\| !Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) && !Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) ) ` 成立时提前返回 ` ImmutableList.of() `<br>末尾返回 ` builder.build() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getMainHandItem() `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` Minecraft.getInstance().player.getOffhandItem() `<br>实现调用 ` ImmutableList.of() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L41) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L109) |
| ` public ShulkerContainerTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L89) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/ShulkerContainerTooltipProvider.java#L18) |

## SpaceOvercompressorTooltipProvider

` public class SpaceOvercompressorTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SpaceOvercompressorTooltipProvider() ` | 当前实现的方法体为空。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L76) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L11) |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof SpaceOvercompressorBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L14) |
| ` @Override public List<Component> tooltip(BlockEntity e) ` | ` (!(e instanceof SpaceOvercompressorBlockEntity compressor)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` List.of(Component.translatable("tooltip.anvilcraft.space_overcompressor.stored_mass", compressor.displayStoredMass())) `<br>分支 ` (!(e instanceof SpaceOvercompressorBlockEntity compressor)) ` 内调用 ` List.of() `<br>实现调用 ` Component.translatable("tooltip.anvilcraft.space_overcompressor.stored_mass", compressor.displayStoredMass()) `<br>实现调用 ` compressor.displayStoredMass() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L19) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/SpaceOvercompressorTooltipProvider.java#L25) |

## StoragePortTooltipProvider

` public final class StoragePortTooltipProvider extends ITooltipProvider.BlockEntityTooltipProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L24)

显示仓储端口标记物品的可用总量，并在标记或查看目标改变时重新获取计数。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean accepts(BlockEntity entity) ` | 末尾返回 ` entity instanceof StoragePortBlockEntity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L32) |
| ` @Override public List<Component> tooltip(BlockEntity entity) ` | 末尾返回 ` List.of(entity.getBlockState().getBlock().getName()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L37) |
| ` public List<ClientTooltipComponent> components(BlockEntity entity) ` | ` (!(entity instanceof StoragePortBlockEntity port)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` result `<br>分支 ` (!(entity instanceof StoragePortBlockEntity port)) ` 内调用 ` List.of() `<br>实现调用 ` port.getMarkedItem() `<br>实现调用 ` marked.isEmpty() `<br>分支 ` (marked.isEmpty()) ` 内调用 ` this.resetClientState() `<br>分支 ` !(marked.isEmpty()) ` 内调用 ` this.refresh(port, marked) `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L42) |
| ` @Override public void resetClientState() ` | 分支 ` (this.pending != null) ` 内调用 ` this.pending.cancel(false) `<br>实现调用 ` this.target.clear() `<br>[调用处 StoragePortTooltipProvider.components](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L113) |
| ` @Override public int priority() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L125) |
| ` public StoragePortTooltipProvider() ` | Java 提供的无参构造器。<br>[调用处 HudTooltipManager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/HudTooltipManager.java#L86) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/impl/StoragePortTooltipProvider.java#L24) |
