# Projecting Templates from Body Text or Commands

To project the same structure with the client command, place the compressed binary template at `assets/workshop/ageratum/stands/basic.nbt`. After pressing F3+T, run the following command in-game:

```text
/ageratum structure workshop:stands/basic ~ ~ ~
```

The command index only scans `.nbt` files under `ageratum/`, stripping the folder prefix and extension to form the template ID. This differs from the direct resource path used by the `structure` tag in body text. The template manager receives raw NBT during client reload and loads it into a `StructureTemplate` using the current world's block registry when an actual projection request arrives. Templates cannot be instantiated before entering a world. [Template registration & lazy loading](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java) · [Projection command](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java)

## Getting a Projection from the Preview Card

Open a page containing `<structure>` and click the project button. The component passes the current template to `StructureProjectionApi.showFloating`, displaying a floating projection in front of the local player. In this branch, no server disk-write is triggered here and there is no guide-specific export directory. To distribute structures, place existing NBT files directly at the resource path above. [Page button](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java) · [Projection API](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java)
