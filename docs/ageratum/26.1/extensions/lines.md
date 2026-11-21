# 在自己的预览器中解析整行

如果你的附属模组自带机器状态预览器，想在 Markdown 里加一行 `@state ...` 来显示状态，可以给预览器自己的 `MarkdownParser` 注册一条行解析规则。规则没匹配上时返回 null，好让后面的标题等规则继续往下判。注意，Ageratum 重载资源时会另外创建解析器，所以你往这个实例上加的规则，只对通过它解析的内容有效。如果想让所有资源包手册都认这套语法，请改用[块组件工厂](blocks)。

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDDocument;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.MarkdownParser;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.MDTextComponent;
import net.minecraft.resources.Identifier;

public final class MachinePagePreview {
    private final MarkdownParser parser = new MarkdownParser();

    public MachinePagePreview() {
        parser.registerComponentParser(-5, (source, line) -> {
            if (!line.startsWith("@state ")) return null;
            return new MDTextComponent("机器状态：" + line.substring(7).strip());
        });
    }

    public MDDocument read(Identifier location, String markdown) {
        return parser.parseDocument(location, markdown);
    }
}
```

| 签名 | 调用顺序与结果 |
| --- | --- |
| `registerComponentParser(int priority, MDComponentParser parser)` | 给本实例加入行规则，数值小的先调用。内置图像、旧公式、标题分别是 -10、-9、0。选择不同优先级以明确先后。 |
| `parseComponent(Identifier source, String line): MDComponent` | 顺序询问行规则，取第一个非空结果。所有规则放弃时返回 null。 |
| `parse(Identifier, String): List<MDComponent>` | 传入文档资源位置和整份 Markdown，取得排版组件列表。 |
| `parseDocument(Identifier, String): MDDocument` | 同时保留资源位置、front matter 和组件列表，适合需要生成预览标题或导航的编辑器。 |
