# dev.dubhe.anvilcraft.api.injection.tooltip



## ITooltipProviderExtension

` public interface ITooltipProviderExtension `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/injection/tooltip/ITooltipProviderExtension.java#L11)

头戴铁砧锤时需要显示tooltip，用于接口注入至原版内容

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default List<Component> anvilcraft$getTooltip() ` | 获取需要渲染的tooltip 此方法用于BlockEntity及其它类<br>返回 一个按顺序存储了所有需要渲染的tooltip的List<br>参见 ITooltipProviderExtension#anvilcraft$getTooltip(BlockState) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/injection/tooltip/ITooltipProviderExtension.java#L17) |
| ` default List<Component> anvilcraft$getTooltip(BlockState state) ` | 获取需要渲染的tooltip 此方法用于Block类<br>返回 一个按顺序存储了所有需要渲染的tooltip的List<br>参见 ITooltipProviderExtension#anvilcraft$getTooltip() | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/injection/tooltip/ITooltipProviderExtension.java#L26) |
