# dev.dubhe.anvilcraft.mixin.piglin



## PiglinAiMixin

` public abstract class PiglinAiMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinAiMixin.java#L26)

类型注解 ` @Mixin(PiglinAi.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PiglinAiMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinAiMixin.java#L26) |

## PiglinBruteAiMixin

` public abstract class PiglinBruteAiMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinBruteAiMixin.java#L17)

类型注解 ` @Mixin(PiglinBruteAi.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PiglinBruteAiMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinBruteAiMixin.java#L17) |

## PiglinMixin

` public abstract class PiglinMixin extends AbstractPiglin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinMixin.java#L16)

类型注解 ` @Mixin(Piglin.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public boolean isConverting() ` | ` (this.getData(ModDataAttachments.ZOMBIFICATED_BY_CURSE)) ` 成立时提前返回 ` true `<br>末尾返回 ` super.isConverting() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/piglin/PiglinMixin.java#L39) |
