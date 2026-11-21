# dev.dubhe.anvilcraft.entity.ai.goal



## GenericZombieAttackGoal

` public class GenericZombieAttackGoal<T extends PathfinderMob> extends MeleeAttackGoal `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ai/goal/GenericZombieAttackGoal.java#L6)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public GenericZombieAttackGoal(T zombie, double speedModifier, boolean followingTargetEvenIfNotSeen) ` | 实现调用 ` super(zombie, speedModifier, followingTargetEvenIfNotSeen) `<br>[调用处 LivingEntityEventListener.onJoinLevel](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LivingEntityEventListener.java#L68) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ai/goal/GenericZombieAttackGoal.java#L10) |
| ` public void start() ` | 实现调用 ` super.start() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ai/goal/GenericZombieAttackGoal.java#L15) |
| ` public void stop() ` | 实现调用 ` super.stop() `<br>实现调用 ` this.zombie.setAggressive(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ai/goal/GenericZombieAttackGoal.java#L20) |
| ` public void tick() ` | 实现调用 ` super.tick() `<br>实现调用 ` this.getTicksUntilNextAttack() `<br>实现调用 ` this.getAttackInterval() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/ai/goal/GenericZombieAttackGoal.java#L25) |
