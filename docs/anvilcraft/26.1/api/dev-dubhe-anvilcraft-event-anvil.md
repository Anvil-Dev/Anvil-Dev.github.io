# dev.dubhe.anvilcraft.event.anvil



## AnvilEventListener

` public class AnvilEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L54)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLand(AnvilEvent.OnLand event) ` | 侦听铁砧落地事件<br>事件总线派发 ` AnvilEvent.OnLand ` 时调用。<br>参数 ` event ` 铁砧落地事件<br>分支 ` (!AnvilEventListener.behaviorRegistered) ` 内调用 ` IAnvilBehavior.register() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` level.getBlockState(pos) `<br>实现调用 ` TriggerUtil.anvilOnGround(level, pos) `<br>实现调用 ` pos.below() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L62) |
| ` public static void handleNeoAnvilRecipe(AnvilEvent.OnLand event) ` | 实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getEntity() `<br>实现调用 ` level.recipeAccess().anvillib$getInWorldRecipeManager() `<br>实现调用 ` level.recipeAccess() `<br>实现调用 ` pos.getCenter().subtract(0.0, 0.5, 0.0) `<br>[调用处 AnvilEventListener.onLand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L93) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L117) |
| ` @SubscribeEvent public static void onAnvilHurtEntity(AnvilEvent.HurtEntity event) ` | 侦听铁砧伤害实体事件<br>事件总线派发 ` AnvilEvent.HurtEntity ` 时调用。<br>参数 ` event ` 铁砧伤害实体事件<br>实现调用 ` event.getHurtedEntity() `<br>实现调用 ` entity.isBaby() `<br>实现调用 ` hurtedEntity.level() `<br>实现调用 ` entity.isAlive() `<br>实现调用 ` entity.isDeadOrDying() `<br>实现调用 ` event.getDamage() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L206) |
| ` public AnvilEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L54) |

## AnvilHitPiezoelectricCrystalBlockEventListener

` public class AnvilHitPiezoelectricCrystalBlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHitPiezoelectricCrystalBlockEventListener.java#L13)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onLand(AnvilEvent.OnLand event) ` | 侦听铁砧落地事件 用于检测压电晶体<br>事件总线派发 ` AnvilEvent.OnLand ` 时调用。<br>参数 ` event ` 铁砧落地事件<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` level.getBlockState(anvilPos.below()).getBlock() `<br>实现调用 ` level.getBlockState(anvilPos.below()) `<br>实现调用 ` anvilPos.below() `<br>实现调用 ` event.getEntity().blockState.is(ModBlocks.GIANT_ANVIL.get()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHitPiezoelectricCrystalBlockEventListener.java#L19) |
| ` @SubscribeEvent public static void onLand(AnvilEvent.GiantOnLand event) ` | 侦听大铁砧落地事件 用于检测大铁砧底下3\*3的范围内有没有压电晶体<br>事件总线派发 ` AnvilEvent.GiantOnLand ` 时调用。<br>参数 ` event ` 大铁砧落地事件<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getPos().below(2) `<br>实现调用 ` event.getPos() `<br>实现调用 ` anvilPos.getX() `<br>实现调用 ` anvilPos.getY() `<br>实现调用 ` anvilPos.getZ() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHitPiezoelectricCrystalBlockEventListener.java#L34) |
| ` public AnvilHitPiezoelectricCrystalBlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHitPiezoelectricCrystalBlockEventListener.java#L13) |

## AnvilHurtVillagerEventListener

` public class AnvilHurtVillagerEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHurtVillagerEventListener.java#L24)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onAnvilHurtEntity(AnvilEvent.HurtEntity event) ` | 侦听铁砧击中村民事件<br>事件总线派发 ` AnvilEvent.HurtEntity ` 时调用。<br>参数 ` event ` 铁砧伤害实体事件<br>实现调用 ` event.getHurtedEntity() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` level.isClientSide() `<br>分支 ` (entity instanceof Villager villager) ` 内调用 ` level.getRandom() `<br>分支 ` (entity instanceof Villager villager) ` 内调用 ` villager.releasePoi(MemoryModuleType.HOME) `<br>分支 ` (entity instanceof Villager villager) ` 内调用 ` villager.releasePoi(MemoryModuleType.JOB_SITE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHurtVillagerEventListener.java#L29) |
| ` public AnvilHurtVillagerEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilHurtVillagerEventListener.java#L24) |
