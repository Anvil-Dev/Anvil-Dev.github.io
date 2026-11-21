# dev.dubhe.anvilcraft.mixin.piglin



## PiglinAiMixin

` public abstract class PiglinAiMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinAiMixin.java#L27)

类型注解 ` @Mixin(PiglinAi.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PiglinAiMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinAiMixin.java#L27) |

## PiglinBruteAiMixin

` public abstract class PiglinBruteAiMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinBruteAiMixin.java#L18)

类型注解 ` @Mixin(PiglinBruteAi.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PiglinBruteAiMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinBruteAiMixin.java#L18) |

## PiglinMixin

` public abstract class PiglinMixin extends AbstractPiglin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinMixin.java#L16)

类型注解 ` @Mixin(Piglin.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean isConverting() ` | ` (this.getData(ModDataAttachments.ZOMBIFICATED_BY_CURSE)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.isConverting() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinMixin.java#L39) |
