# dev.dubhe.anvilcraft.event.anvil



## AnvilEventListener

` public class AnvilEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L55)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLand(AnvilEvent.OnLand event) ` | 侦听铁砧落地事件<br>事件总线派发 ` AnvilEvent.OnLand ` 时调用。<br>参数 ` event ` 铁砧落地事件<br>分支 ` (!behaviorRegistered) ` 内调用 ` IAnvilBehavior.register() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` level.getServer() `<br>实现调用 ` TriggerUtil.anvilOnGround(level, pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L65) |
| ` public static void handleNeoAnvilRecipe(AnvilEvent.OnLand event) ` | 实现调用 ` event.getLevel() `<br>实现调用 ` NeoForge.EVENT_BUS.post(new AnvilEvent.BeforeInWorldRecipe(event)) `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` level.getRecipeManager().anvillib$getInWorldRecipeManager() `<br>实现调用 ` level.getRecipeManager() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L122) |
| ` @SubscribeEvent public static void onAnvilHurtEntity(AnvilEvent.HurtEntity event) ` | 侦听铁砧伤害实体事件<br>事件总线派发 ` AnvilEvent.HurtEntity ` 时调用。<br>参数 ` event ` 铁砧伤害实体事件<br>实现调用 ` event.getHurtedEntity() `<br>实现调用 ` entity.isBaby() `<br>实现调用 ` hurtedEntity.level() `<br>实现调用 ` entity.isAlive() `<br>实现调用 ` entity.isDeadOrDying() `<br>实现调用 ` event.getDamage() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L222) |
| ` public AnvilEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L55) |

## AnvilHitPiezoelectricCrystalBlockEventListener

` public class AnvilHitPiezoelectricCrystalBlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHitPiezoelectricCrystalBlockEventListener.java#L13)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLand(AnvilEvent.OnLand event) ` | 侦听铁砧落地事件 用于检测压电晶体<br>事件总线派发 ` AnvilEvent.OnLand ` 时调用。<br>参数 ` event ` 铁砧落地事件<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` level.getBlockState(anvilPos.below()).getBlock() `<br>实现调用 ` level.getBlockState(anvilPos.below()) `<br>实现调用 ` anvilPos.below() `<br>实现调用 ` event.getEntity().blockState.is(ModBlocks.GIANT_ANVIL.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHitPiezoelectricCrystalBlockEventListener.java#L21) |
| ` @SubscribeEvent public static void onLand(AnvilEvent.GiantOnLand event) ` | 侦听大铁砧落地事件 用于检测大铁砧底下3\*3的范围内有没有压电晶体<br>事件总线派发 ` AnvilEvent.GiantOnLand ` 时调用。<br>参数 ` event ` 大铁砧落地事件<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos().below(2) `<br>实现调用 ` event.getPos() `<br>实现调用 ` anvilPos.getX() `<br>实现调用 ` anvilPos.getY() `<br>实现调用 ` anvilPos.getZ() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHitPiezoelectricCrystalBlockEventListener.java#L38) |
| ` public AnvilHitPiezoelectricCrystalBlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHitPiezoelectricCrystalBlockEventListener.java#L13) |

## AnvilHurtVillagerEventListener

` public class AnvilHurtVillagerEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHurtVillagerEventListener.java#L24)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onAnvilHurtEntity(AnvilEvent.HurtEntity event) ` | 侦听铁砧击中村民事件<br>事件总线派发 ` AnvilEvent.HurtEntity ` 时调用。<br>参数 ` event ` 铁砧伤害实体事件<br>实现调用 ` event.getHurtedEntity() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` level.isClientSide() `<br>分支 ` (entity instanceof Villager villager) ` 内调用 ` villager.releasePoi(MemoryModuleType.HOME) `<br>分支 ` (entity instanceof Villager villager) ` 内调用 ` villager.releasePoi(MemoryModuleType.JOB_SITE) `<br>分支 ` (entity instanceof Villager villager) ` 内调用 ` villager.releasePoi(MemoryModuleType.POTENTIAL_JOB_SITE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHurtVillagerEventListener.java#L31) |
| ` public AnvilHurtVillagerEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHurtVillagerEventListener.java#L24) |
