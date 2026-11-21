# dev.dubhe.anvilcraft.api.totem.handler



## AmuletBoxHandler

` public class AmuletBoxHandler implements TotemHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/AmuletBoxHandler.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean canExecute(DamageSource damageSource, LivingEntity entity, ItemStack totemItem) ` | 末尾返回 ` !totemItem.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY).totems().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/AmuletBoxHandler.java#L15) |
| ` @Override public boolean execute(DamageSource damageSource, LivingEntity entity, ItemStack totemItem) ` | 末尾返回 ` false `<br>实现调用 ` TotemManager.INSTANCE.getTotemMap() `<br>实现调用 ` totemItem.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY).totems() `<br>实现调用 ` totemItem.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY) `<br>实现调用 ` totems.isEmpty() `<br>分支 ` (!totems.isEmpty()) ` 内调用 ` totemMap.keySet() `<br>分支 ` (!totems.isEmpty()) ` 内调用 ` totems.getFirst().is(item) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/AmuletBoxHandler.java#L20) |
| ` @SuppressWarnings("DataFlowIssue") @Override public void shrink(ItemStack totemItem) ` | 实现调用 ` totemItem.get(ModComponents.BOX_CONTENTS) `<br>实现调用 ` boxContents.mutable() `<br>实现调用 ` mutable.popTotem() `<br>实现调用 ` totemItem.set(ModComponents.BOX_CONTENTS, mutable.immutable()) `<br>实现调用 ` mutable.immutable() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/AmuletBoxHandler.java#L34) |
| ` public AmuletBoxHandler() ` | Java 提供的无参构造器。<br>[调用处 TotemManager.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java#L26) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/AmuletBoxHandler.java#L14) |

## TotemHandler

` public interface TotemHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemHandler.java#L10)

图腾触发时的事件

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default boolean canExecute(DamageSource damageSource, LivingEntity entity, ItemStack totemItem) ` | 判断图腾是否可触发<br>参数 ` damageSource ` 伤害来源<br>参数 ` entity ` 持有图腾的实体<br>参数 ` totemItem ` 图腾物品<br>返回 是否执行成功<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemHandler.java#L19) |
| ` boolean execute(DamageSource damageSource, LivingEntity entity, ItemStack totemItem) ` | 图腾触发时执行<br>参数 ` damageSource ` 伤害来源<br>参数 ` entity ` 持有图腾的实体<br>参数 ` totemItem ` 图腾物品<br>返回 是否执行成功 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemHandler.java#L31) |
| ` void shrink(ItemStack totemItem) ` | 减少图腾物品数量<br>参数 ` totemItem ` 图腾物品 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemHandler.java#L38) |

## TotemOfRageHandler

` public class TotemOfRageHandler implements TotemHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRageHandler.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean execute(DamageSource damageSource, LivingEntity entity, ItemStack totemItem) ` | 末尾返回 ` false `<br>实现调用 ` damageSource.is(DamageTypeTags.BYPASSES_INVULNERABILITY) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` player.getFoodData().setFoodLevel(20) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` player.getFoodData() `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` CriteriaTriggers.USED_TOTEM.trigger(player, ModItems.TOTEM_OF_RAGE.asStack()) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` ModItems.TOTEM_OF_RAGE.asStack() `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` entity.gameEvent(GameEvent.ITEM_INTERACT_FINISH) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRageHandler.java#L16) |
| ` @Override public void shrink(ItemStack totemItem) ` | 执行 ` totemItem.shrink(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRageHandler.java#L38) |
| ` public TotemOfRageHandler() ` | Java 提供的无参构造器。<br>[调用处 TotemManager.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java#L29) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRageHandler.java#L15) |

## TotemOfRecoveryHandler

` public class TotemOfRecoveryHandler implements TotemHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRecoveryHandler.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean execute(DamageSource damageSource, LivingEntity entity, ItemStack totemItem) ` | 末尾返回 ` false `<br>实现调用 ` damageSource.is(DamageTypes.GENERIC_KILL) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` player.awardStat(Stats.ITEM_USED.get(ModItems.TOTEM_OF_RECOVERY.get()), 1) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` Stats.ITEM_USED.get(ModItems.TOTEM_OF_RECOVERY.get()) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` ModItems.TOTEM_OF_RECOVERY.get() `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` CriteriaTriggers.USED_TOTEM.trigger(player, ModItems.TOTEM_OF_RECOVERY.asStack()) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` ModItems.TOTEM_OF_RECOVERY.asStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRecoveryHandler.java#L24) |
| ` @Override public void shrink(ItemStack totemItem) ` | 执行 ` totemItem.shrink(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRecoveryHandler.java#L64) |
| ` public TotemOfRecoveryHandler() ` | Java 提供的无参构造器。<br>[调用处 TotemManager.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java#L28) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfRecoveryHandler.java#L23) |

## TotemOfUndyingHandler

` public class TotemOfUndyingHandler implements TotemHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfUndyingHandler.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean execute(DamageSource damageSource, LivingEntity entity, ItemStack totemItem) ` | 末尾返回 ` false `<br>实现调用 ` damageSource.is(DamageTypeTags.BYPASSES_INVULNERABILITY) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` player.awardStat(Stats.ITEM_USED.get(Items.TOTEM_OF_UNDYING), 1) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` Stats.ITEM_USED.get(Items.TOTEM_OF_UNDYING) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` CriteriaTriggers.USED_TOTEM.trigger(player, Items.TOTEM_OF_UNDYING.getDefaultInstance()) `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` Items.TOTEM_OF_UNDYING.getDefaultInstance() `<br>分支 ` (entity instanceof ServerPlayer player) ` 内调用 ` entity.gameEvent(GameEvent.ITEM_INTERACT_FINISH) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfUndyingHandler.java#L17) |
| ` @Override public void shrink(ItemStack totemItem) ` | 执行 ` totemItem.shrink(1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfUndyingHandler.java#L36) |
| ` public TotemOfUndyingHandler() ` | Java 提供的无参构造器。<br>[调用处 TotemManager.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java#L27) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/handler/TotemOfUndyingHandler.java#L16) |
