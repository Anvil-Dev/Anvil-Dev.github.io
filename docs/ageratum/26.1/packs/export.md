# 从正文或命令投影模板

要用客户端命令投影同一份结构，将压缩二进制模板放在 `assets/workshop/ageratum/stands/basic.nbt`。按 F3+T 后，在世界中输入下列命令。

```text
/ageratum structure workshop:stands/basic ~ ~ ~
```

命令索引只扫描 `ageratum/` 下的 `.nbt`，将文件夹前缀和扩展名去掉后作为模板 ID。它与正文 `structure` 标签的直接资源路径不同。模板管理器在客户端重载时接收原始 NBT，实际投影请求到来后再用当前世界的方块注册表装入 `StructureTemplate`。尚未进入世界时无法实例化模板。[模板注册与按需加载](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/AgeratumStructureTemplateManager.java) · [投影命令](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java)

## 从预览图拿到投影

打开有 `<structure>` 的页面，单击投影按钮。组件把当前模板交给 `StructureProjectionApi.showFloating`，在本地玩家面前显示浮动投影。该分支在这里没有发起服务器写盘操作，也没有手册专用的导出目录。要分发结构，直接把已有的 NBT 文件放入上述资源路径。[页面按钮](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDNBTStructureComponent.java) · [投影 API](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/structure/StructureProjectionApi.java)
