# Looking Up Templates from Resource Packs

Place compressed vanilla structure NBT at `assets/example/ageratum/foundry/frame.nbt`, and its client template ID becomes `example:foundry/frame`. During resource reload, Ageratum only scans `.nbt` files under this directory; although the structure component in guides can also parse SNBT standalone, those text files do not automatically appear in the template manager's catalog. [Resource scanning](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java#L128) · [Component reader](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java#L597)

Client reload runs in two phases: the prepare phase reads NBT, and the apply phase atomically swaps the raw tag map and clears the compiled cache. On the first call to `get`, the tag must be compiled into a `StructureTemplate` using the client world's block registry. Therefore, even if IDs can be listed on the title screen, initial compilation can still return empty there. If a tool needs to remember which template the user selected across reloads, store its ID and fetch it again when needed. [Where the mod registers the listener](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java#L94) · [Client command usage](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java#L203)

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

| API | When to Use | Return & Boundaries |
| --- | --- | --- |
| `listAll()` | Building selection menus, command suggestions | Returns an unmodifiable collection of template IDs discovered during resource reload. |
| `get(ResourceLocation location)` | When client buttons or projection commands need a usable template | Checks the compiled cache first. Returns `Optional.empty()` if the ID is absent, no world is loaded for first compilation, or compilation fails. |
| `reloadListener()` | Registering client resource listeners | Returns the listener instance held by the manager. Ageratum's client entrypoint already registers it once. |
| `ASSET_FOLDER` | Computing the template directory inside resource packs | Corresponds to the `ageratum` root folder. Keys exclude the root folder and file extension. |
