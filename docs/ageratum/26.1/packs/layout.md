# 从空资源包打开手册

先做只有一篇正文的包。将 `field-guide/` 放入客户端的 `resourcepacks/`，在资源包界面启用它。这个包给命名空间 `workshop` 添加一篇砧台维护说明。

```text
field-guide/
  pack.mcmeta
  assets/
    workshop/
      ageratum/
        en_us/
          index.md
        zh_cn/
          index.md
```

根目录的 `pack.mcmeta` 使用 Minecraft 26.1.2 的客户端资源包格式 84.0。

```json
{
  "pack": {
    "min_format": [84, 0],
    "max_format": [84, 0],
    "description": "砧台维护手册"
  }
}
```

在 `zh_cn/index.md` 写入下列完整内容。英文页可以使用同样的结构，换成英文标题和正文。

```markdown
---
navigation:
  title: 砧台维护
guide:
  items:
    - "minecraft:anvil"
---
# 砧台维护

将铁砧放在坚固方块上。悬空的铁砧会下落。

<item id="minecraft:anvil" showText="true"/>
```

在世界内执行 `/ageratum workshop`。直接打开子页可用 `/ageratum workshop "maintenance/repair"`，引用的文件为 `maintenance/repair.md`。没有文件参数时使用 `index.md`。客户端先查当前语言，再查 `en_us`。某语言的条目可以只翻译一部分。语言代码会转成小写并把连字符换成下划线。修改后按 F3+T 让客户端重新建立正文与绑定索引。[路径处理](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentLoader.java) · [命令注册](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java)

## 写作时实时预览

在客户端配置中将 `enablePreview` 改为 `true`。把 `index.md` 直接放入游戏目录下的 `ageratum_preview/`，再执行 `/ageratum preview`。`previewPath` 可指定其他根目录。预览用的是单独的文件系统工作区，交付资源包时仍需使用上面的 `assets` 布局。[客户端配置](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java) · [预览路径](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClient.java)
