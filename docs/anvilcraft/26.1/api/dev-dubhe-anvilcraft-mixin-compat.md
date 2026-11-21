# dev.dubhe.anvilcraft.mixin.compat



## CerbonNewBeaconMenuMixin

` public abstract class CerbonNewBeaconMenuMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/CerbonNewBeaconMenuMixin.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CerbonNewBeaconMenuMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/CerbonNewBeaconMenuMixin.java#L25) |

## CreateContraptionMixin

` public abstract class CreateContraptionMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/CreateContraptionMixin.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreateContraptionMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/CreateContraptionMixin.java#L13) |

## IrisHandRendererAccessor

` public interface IrisHandRendererAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/IrisHandRendererAccessor.java#L8)

类型注解 ` @Mixin(value = HandRenderer.class, remap = false) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("submitNodeCollector") SubmitNodeStorage anvilcraft$getSubmitNodeCollector() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/IrisHandRendererAccessor.java#L10) |

## IrisStellarMixin

` public abstract class IrisStellarMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/IrisStellarMixin.java#L10)

类型注解 ` @Mixin(IrisRenderingPipeline.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public IrisStellarMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/IrisStellarMixin.java#L10) |

## SophisticatedItemInventoryMixin

` public interface SophisticatedItemInventoryMixin extends TerminalItemInventory `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/SophisticatedItemInventoryMixin.java#L7)

类型注解 ` @Pseudo `、` @Mixin(targets = "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemResourceHandler", remap = false) `


## SophisticatedJeiRecipeTransferMixin

` public abstract class SophisticatedJeiRecipeTransferMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/SophisticatedJeiRecipeTransferMixin.java#L27)

类型注解 ` @Pseudo `、` @Mixin(targets = "net.p3pp3rf1y.sophisticatedcore.compat.recipeviewers.jei.JeiCraftingContainerRecipeTransferHandlerBase", remap = false) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SophisticatedJeiRecipeTransferMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/SophisticatedJeiRecipeTransferMixin.java#L27) |

## XaeroMinimapHighlighterRegistryMixin

` public abstract class XaeroMinimapHighlighterRegistryMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroMinimapHighlighterRegistryMixin.java#L13)

类型注解 ` @Pseudo `、` @Mixin(value = HighlighterRegistry.class, remap = false) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Shadow public abstract void register(AbstractHighlighter highlighter) ` | [调用处 XaeroMinimapHighlighterRegistryMixin.anvilcraft$registerOverseers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroMinimapHighlighterRegistryMixin.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroMinimapHighlighterRegistryMixin.java#L16) |
| ` public XaeroMinimapHighlighterRegistryMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroMinimapHighlighterRegistryMixin.java#L13) |

## XaeroWorldMapGuiMixin

` public abstract class XaeroWorldMapGuiMixin implements IRightClickableElement `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroWorldMapGuiMixin.java#L20)

类型注解 ` @Pseudo `、` @Mixin(value = GuiMap.class, remap = false) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public XaeroWorldMapGuiMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroWorldMapGuiMixin.java#L20) |

## XaeroWorldMapHighlighterRegistryMixin

` public abstract class XaeroWorldMapHighlighterRegistryMixin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroWorldMapHighlighterRegistryMixin.java#L13)

类型注解 ` @Pseudo `、` @Mixin(value = HighlighterRegistry.class, remap = false) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Shadow public abstract void register(AbstractHighlighter highlighter) ` | [调用处 XaeroWorldMapHighlighterRegistryMixin.anvilcraft$registerOverseers](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroWorldMapHighlighterRegistryMixin.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroWorldMapHighlighterRegistryMixin.java#L16) |
| ` public XaeroWorldMapHighlighterRegistryMixin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/compat/XaeroWorldMapHighlighterRegistryMixin.java#L13) |
