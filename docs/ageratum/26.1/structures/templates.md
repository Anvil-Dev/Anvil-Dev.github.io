# 从资源包查找模板

把压缩的原版结构 NBT 放进 `assets/example/ageratum/foundry/frame.nbt`，它的客户端模板 ID 就是 `example:foundry/frame`。Ageratum 在资源重载时只扫这个目录下以 `.nbt` 结尾的文件；虽然手册里的结构组件也能单独解析 SNBT，但这些文本文件不会自动出现在模板管理器的目录里。[资源扫描](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java#L128) · [组件读取器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L503)

客户端重载分两步：准备阶段读取 NBT，应用阶段一次性替换原始标签映射并清空编译缓存。第一次调用 `get` 时，需要用客户端世界的方块注册表把标签编译成 `StructureTemplate`。所以就算在标题画面能成功列出 ID，这时候首次编译也还是可能返回空。如果工具需要在重载后记住用户选了哪个模板，请保存它的 ID，等要用的时候再重新取一次。[模组注册监听器的位置](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L93) · [客户端命令的实际用法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L198)

```java
package dev.example.blueprint;

import dev.anvilcraft.resource.ageratum.client.feat.structure.AgeratumStructureTemplateManager;
import net.minecraft.resources.Identifier;
import net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate;
import java.util.List;
import java.util.Optional;

public final class BlueprintCatalog {
    public static List<Identifier> foundryTemplates() {
        return AgeratumStructureTemplateManager.listAll().stream()
            .filter(id -> id.getNamespace().equals("example") && id.getPath().startsWith("foundry/"))
            .sorted().toList();
    }

    public static Optional<StructureTemplate> frame() {
        return AgeratumStructureTemplateManager.get(
            Identifier.fromNamespaceAndPath("example", "foundry/frame"));
    }
}
```

| API | 使用时机 | 返回与边界 |
| --- | --- | --- |
| `listAll()` | 创建选单、命令补全 | 返回资源重载时发现的模板 ID 集合，不可修改。 |
| `get(Identifier location)` | 客户端按钮、投影命令需要可用模板时 | 先查已编译缓存。ID 不存在、首次编译尚无世界、编译失败均返回 `Optional.empty()`。 |
| `reloadListener()` | 注册客户端资源监听器 | 返回管理器持有的监听器实例。Ageratum 的客户端入口已注册一次。 |
| `ASSET_FOLDER` | 自行计算资源包内模板目录 | 对应 `ageratum` 根目录。键不含根目录与文件扩展名。 |
