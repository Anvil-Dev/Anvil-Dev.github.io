# 行内组件与样式解析器

想在句子里显示温度时，可以把数值直接变成带单位的游戏文本；想强调一整段文字，则可以用样式解析器修改外层样式。下面这两个扩展可以一起注册，注册后作者就能直接写成 `预热至 <example:temperature value="350"/>，[[hot]]戴上护目镜[[/hot]]。`

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDInlineComponentFactory;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.MDInlineStyleParser;
import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.minecraft.network.chat.Component;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;
import java.util.regex.Pattern;

public final class FurnaceText {
    public static void register(IEventBus bus) {
        DeferredRegister<MDInlineComponentFactory> components =
            DeferredRegister.create(AgeratumRegistries.INLINE_COMPONENT_FACTORY_REGISTRY_KEY, "example");
        components.register("temperature", () -> ctx ->
            Component.literal(ctx.params().getOrDefault("value", "?") + " °C").setStyle(ctx.baseStyle()));
        components.register(bus);

        DeferredRegister<MDInlineStyleParser> styles =
            DeferredRegister.create(AgeratumRegistries.INLINE_STYLE_PARSER_REGISTRY_KEY, "example");
        styles.register("hot", () -> MDInlineStyleParser.create(
            20, Pattern.compile(Pattern.quote("[[hot]]")), "[[/hot]]",
            (style, match) -> style.withColor(0xCE5228).withBold(true)));
        styles.register(bus);
    }
}
```

| 签名 | 解析顺序与参数 |
| --- | --- |
| `MDInlineComponentFactory.create(MDInlineComponentContext): FormattedText` | 自闭合行内标签按注册 ID 定位工厂；无命名空间默认解析为 ageratum。附属标签需要写完整名。 |
| `id()`、`rawParams()`、`params()`、`baseStyle()` | 标签名、原始属性串、解析后的字符串映射、父样式。示例缺少 value 时显示问号，并继承外层样式。 |
| `MDInlineStyleParser.create(priority, openTagPattern, closeTag, styleFactory)` | 开始标记用正则，结束标记是字面字符串，二参回调取得父样式和开始位置的 Matcher，返回子样式。 |
| `create(priority, openTagPattern, closeTag, textFactory)` | 三参回调拿到内部原文、父样式、Matcher，可直接返回 FormattedText。 |
| `parse(String text, int pos): InlineStyleMatch`、`priority(): int` | 从指定偏移向后找，未命中返回 null。先比起始位置，位置相同选较小优先级；再相同按注册 ID 排序。表达式应消耗字符，避免以空串作为标记。 |
