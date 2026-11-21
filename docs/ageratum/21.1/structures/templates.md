# 从资源包查找模板

把压缩的原版结构 NBT 放在 `assets/example/ageratum/foundry/frame.nbt`，客户端模板 ID 就是 `example:foundry/frame`。Ageratum 在资源重载时只扫描此目录下以 `.nbt` 结尾的文件；手册中的结构组件还可以单独解析 SNBT，此类文本文件不会因此出现在模板管理器的目录里。[资源扫描](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java#L128) · [组件读取器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L597)

客户端重载分两步。准备阶段读取 NBT；应用阶段一次替换原始标签映射，并清空编译缓存。第一次 `get` 需要客户端世界的方块注册表，将标签编译为 `StructureTemplate`。在标题画面枚举 ID 可以成功，此时首次编译仍可能返回空。资源工具若要跨重载记住选项，请保存 ID，在使用时重新取模板。[模组注册监听器的位置](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L94) · [客户端命令的实际用法](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L203)

```java
package dev.example.blueprint;

import dev.anvilcraft.resource.ageratum.client.feat.structure.AgeratumStructureTemplateManager;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate;
import java.util.List;
import java.util.Optional;

public final class BlueprintCatalog {
    public static List<ResourceLocation> foundryTemplates() {
        return AgeratumStructureTemplateManager.listAll().stream()
            .filter(id -> id.getNamespace().equals("example") && id.getPath().startsWith("foundry/"))
            .sorted().toList();
    }

    public static Optional<StructureTemplate> frame() {
        return AgeratumStructureTemplateManager.get(
            ResourceLocation.fromNamespaceAndPath("example", "foundry/frame"));
    }
}
```

| API | 使用时机 | 返回与边界 |
| --- | --- | --- |
| `listAll()` | 创建选单、命令补全 | 返回资源重载时发现的模板 ID 集合，不可修改。 |
| `get(ResourceLocation location)` | 客户端按钮、投影命令需要可用模板时 | 先查已编译缓存。ID 不存在、首次编译尚无世界、编译失败均返回 `Optional.empty()`。 |
| `reloadListener()` | 注册客户端资源监听器 | 返回管理器持有的监听器实例。Ageratum 的客户端入口已注册一次。 |
| `ASSET_FOLDER` | 自行计算资源包内模板目录 | 对应 `ageratum` 根目录。键不含根目录与文件扩展名。 |
