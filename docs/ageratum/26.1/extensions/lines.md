# 在自己的预览器中解析整行

如果附属自带机器状态预览器，可以在已有的 Markdown 中允许一行 `@state ...` 来显示状态。给预览器自己的 `MarkdownParser` 注册行解析函数；没有匹配时返回 null，让后面的标题等规则继续判断。Ageratum 的资源重载会另外构造解析器，实例上的规则只会影响通过这个对象解析的内容。需要所有资源包手册识别的语法应使用[块组件工厂](blocks)。

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
