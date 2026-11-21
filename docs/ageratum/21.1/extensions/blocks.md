# 注册块组件工厂

比方说，你想给机器的输入条件做一个警示框：作者在文档里写 `<example:requirement>` 和结束标签，解析器处理后，框里的列表和链接依然保持原来的组件结构。只要在模组的客户端初始化入口里调用一次下面的 `register(modEventBus)` 就行。附属模组用自己的命名空间建注册器，键指向 Ageratum 已经建好的注册表。

```java
package dev.example.guide;

import dev.anvilcraft.resource.ageratum.client.feat.markdown.MDExtensionComponentFactory;
import dev.anvilcraft.resource.ageratum.client.feat.markdown.component.extend.MDNoticeBoxComponent;
import dev.anvilcraft.resource.ageratum.client.registries.AgeratumRegistries;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.registries.DeferredRegister;

public final class RequirementBoxes {
    private static final DeferredRegister<MDExtensionComponentFactory> BOXES =
        DeferredRegister.create(AgeratumRegistries.EXTENSION_COMPONENT_FACTORY_REGISTRY_KEY, "example");

    public static void register(IEventBus bus) {
        BOXES.register("requirement", () -> ctx -> new MDNoticeBoxComponent(
            "optional".equals(ctx.params().get("kind"))
                ? MDNoticeBoxComponent.NoticeType.TIP : MDNoticeBoxComponent.NoticeType.WARNING,
            ctx.renderedContent()));
        BOXES.register(bus);
    }
}
```

手册正文可以这样写。下面的 `kind` 是示例扩展自己定义的可选字符串；缺省显示警告框，`optional` 显示提示框。

```markdown
<example:requirement kind="optional">
- 放一只储罐在泵的上方。
- 用控制阀隔开冲洗水和原料。
</example:requirement>
```

| 成员 | 工厂收到什么 |
| --- | --- |
| `MDExtensionComponentFactory.create(MDExtensionContext): MDComponent` | 文档解析时创建组件，会在资源重载期间执行。需要游戏世界的操作延后到渲染。 |
| `sourceLocation()`、`id()` | 分别是当前文档的位置和组件注册名。解析相对路径用前者，区分工厂参数用后者。 |
| `params()`、`rawParams()` | 标签属性解析成字符串映射；原始参数保留语法内容。兼容冒号块语法时按需要读原始参数。 |
| `renderedContent()`、`rawContent()` | 需要复合布局时复用子组件，需要原始源码、公式或预格式化文本时读原文。 |
