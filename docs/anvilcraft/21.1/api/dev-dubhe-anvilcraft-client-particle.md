# dev.dubhe.anvilcraft.client.particle



## IonocraftBackpackExhaustParticle

` public class IonocraftBackpackExhaustParticle extends TextureSheetParticle `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/IonocraftBackpackExhaustParticle.java#L16)

飘升机背包引擎白烟粒子 — 模拟喷气背包排气烟雾效果。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ParticleRenderType getRenderType() ` | 末尾返回 ` ParticleRenderType.PARTICLE_SHEET_TRANSLUCENT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/IonocraftBackpackExhaustParticle.java#L39) |
| ` @Override public void tick() ` | 实现调用 ` super.tick() `<br>实现调用 ` this.setSpriteFromAge(this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/IonocraftBackpackExhaustParticle.java#L44) |

## IonocraftBackpackExhaustParticle.Provider

` public static class Provider implements ParticleProvider<SimpleParticleType> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/IonocraftBackpackExhaustParticle.java#L55)

类型注解 ` @OnlyIn(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Provider(SpriteSet sprites) ` | 执行 ` this.sprites = sprites ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/IonocraftBackpackExhaustParticle.java#L59) |
| ` @Override public Particle createParticle( SimpleParticleType type, ClientLevel level, double x, double y, double z, double speedX, double speedY, double speedZ ) ` | 末尾返回 ` new IonocraftBackpackExhaustParticle( level, x, y, z, speedX, speedY, speedZ, this.sprites ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/IonocraftBackpackExhaustParticle.java#L63) |

## OverseerTrailParticle

` public class OverseerTrailParticle extends TextureSheetParticle `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ParticleRenderType getRenderType() ` | 末尾返回 ` ParticleRenderType.PARTICLE_SHEET_TRANSLUCENT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L43) |
| ` @Override public int getLightColor(float partialTick) ` | 末尾返回 ` 0xF000F0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L48) |
| ` @Override public void tick() ` | 实现调用 ` super.tick() `<br>实现调用 ` this.setSpriteFromAge(this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L53) |

## OverseerTrailParticle.Provider

` public static class Provider implements ParticleProvider<SimpleParticleType> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L62)

类型注解 ` @OnlyIn(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Provider(SpriteSet sprites) ` | 执行 ` this.sprites = sprites ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L66) |
| ` @Override public Particle createParticle( SimpleParticleType type, ClientLevel level, double x, double y, double z, double speedX, double speedY, double speedZ ) ` | 末尾返回 ` new OverseerTrailParticle(level, x, y, z, speedX, speedY, speedZ, this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/OverseerTrailParticle.java#L70) |

## PlasmaJetsParticle

` public class PlasmaJetsParticle extends TextureSheetParticle `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public ParticleRenderType getRenderType() ` | 末尾返回 ` ParticleRenderType.PARTICLE_SHEET_TRANSLUCENT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L35) |
| ` @Override public void tick() ` | 实现调用 ` super.tick() `<br>实现调用 ` this.setAlpha(1) `<br>实现调用 ` this.setSpriteFromAge(this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L40) |

## PlasmaJetsParticle.Provider

` public static class Provider implements ParticleProvider<SimpleParticleType> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L66)

类型注解 ` @OnlyIn(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Provider(SpriteSet sprites) ` | 执行 ` this.sprites = sprites ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L70) |
| ` public Particle createParticle( SimpleParticleType type, ClientLevel level, double x, double y, double z, double speedX, double speedY, double speedZ ) ` | 末尾返回 ` new PlasmaJetsParticle(level, x, y, z, speedX, speedY, speedZ, this.sprites) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/particle/PlasmaJetsParticle.java#L74) |
