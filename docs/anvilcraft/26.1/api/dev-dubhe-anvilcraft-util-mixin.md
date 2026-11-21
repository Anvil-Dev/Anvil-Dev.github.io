# dev.dubhe.anvilcraft.util.mixin



## ModifiedSelector

` public interface ModifiedSelector extends TargetingConditions.Selector `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/ModifiedSelector.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` static ModifiedSelector toModified( TargetingConditions.Selector selector, @Nullable Supplier<BiPredicate<LivingEntity, ServerLevel>> extra ) ` | ` (selector instanceof ModifiedSelector modified) ` 成立时提前返回 ` modified `<br>` (extra == null) ` 成立时提前返回 ` selector::test ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/ModifiedSelector.java#L13) |
| ` static ModifiedSelector toModified( TargetingConditions.Selector selector, @Nullable UnaryOperator<TargetingConditions.Selector> extra ) ` | ` (selector instanceof ModifiedSelector modified) ` 成立时提前返回 ` modified `<br>` (extra == null) ` 成立时提前返回 ` selector::test ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/ModifiedSelector.java#L25) |

## PoachFix

` public final class PoachFix `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/PoachFix.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean shouldItPoach() ` | 末尾返回 ` true `<br>[调用处 ItemEntityEventListener.poachFix](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/ItemEntityEventListener.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/PoachFix.java#L9) |

## ProvidenceRef

` public class ProvidenceRef `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/ProvidenceRef.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void shouldTrigger() ` | 执行 ` ProvidenceRef.SHOULD_TRIGGER.set(true) `<br>[调用处 EnchantmentHelperMixin.checkShouldTriggerProvidence](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EnchantmentHelperMixin.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/ProvidenceRef.java#L6) |
| ` public static boolean shouldItTrigger() ` | 末尾返回 ` ProvidenceRef.SHOULD_TRIGGER.get() `<br>[调用处 DamageEntityMixin.randomMultipleForProvidence](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/providence/DamageEntityMixin.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/ProvidenceRef.java#L10) |
| ` public static void reset() ` | 执行 ` ProvidenceRef.SHOULD_TRIGGER.remove() `<br>[调用处 EnchantmentHelperMixin.checkShouldTriggerProvidence](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/EnchantmentHelperMixin.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/ProvidenceRef.java#L14) |
| ` public ProvidenceRef() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/mixin/ProvidenceRef.java#L3) |
