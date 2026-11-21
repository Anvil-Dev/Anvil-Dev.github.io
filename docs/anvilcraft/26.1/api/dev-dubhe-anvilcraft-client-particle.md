# dev.dubhe.anvilcraft.client.particle



## IonoCraftBackpackExhaustParticle

` public class IonoCraftBackpackExhaustParticle extends SingleQuadParticle `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/IonoCraftBackpackExhaustParticle.java#L15)

飘升机背包引擎白烟粒子 — 模拟喷气背包排气烟雾效果。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void tick() ` | 实现调用 ` super.tick() `<br>实现调用 ` this.setSpriteFromAge(this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/IonoCraftBackpackExhaustParticle.java#L43) |

## IonoCraftBackpackExhaustParticle.Provider

` public static class Provider implements ParticleProvider<SimpleParticleType> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/IonoCraftBackpackExhaustParticle.java#L54)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Provider(SpriteSet sprites) ` | 执行 ` this.sprites = sprites ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/IonoCraftBackpackExhaustParticle.java#L57) |
| ` @Override public @Nullable Particle createParticle( SimpleParticleType type, ClientLevel level, double x, double y, double z, double speedX, double speedY, double speedZ, RandomSource random ) ` | 末尾返回 ` new IonoCraftBackpackExhaustParticle( level, x, y, z, speedX, speedY, speedZ, this.sprites ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/IonoCraftBackpackExhaustParticle.java#L61) |

## OverseerTrailParticle

` public class OverseerTrailParticle extends SingleQuadParticle `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void tick() ` | 实现调用 ` super.tick() `<br>实现调用 ` this.setSpriteFromAge(this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L51) |

## OverseerTrailParticle.Provider

` public static class Provider implements ParticleProvider<SimpleParticleType> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L60)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Provider(SpriteSet sprites) ` | 执行 ` this.sprites = sprites ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L63) |
| ` @Override public Particle createParticle( SimpleParticleType type, ClientLevel level, double x, double y, double z, double speedX, double speedY, double speedZ, RandomSource random ) ` | 末尾返回 ` new OverseerTrailParticle(level, x, y, z, speedX, speedY, speedZ, this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L67) |

## PlasmaJetsParticle

` public class PlasmaJetsParticle extends SingleQuadParticle `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void tick() ` | 实现调用 ` super.tick() `<br>实现调用 ` this.setAlpha(1) `<br>实现调用 ` this.setSpriteFromAge(this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L45) |

## PlasmaJetsParticle.Provider

` public static class Provider implements ParticleProvider<SimpleParticleType> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L71)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Provider(SpriteSet sprites) ` | 执行 ` this.sprites = sprites ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L74) |
| ` @Override public @Nullable Particle createParticle( SimpleParticleType options, ClientLevel level, double x, double y, double z, double auxX, double auxY, double auxZ, RandomSource random ) ` | 末尾返回 ` new PlasmaJetsParticle(level, x, y, z, auxX, auxY, auxZ, this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L78) |
