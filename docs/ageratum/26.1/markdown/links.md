# 跨页链接和锚点

站内链接使用逻辑页名。写 `field_guide:furnace` 后，同一链接可用于英语和中文。要直接指定某个翻译文件，可写完整资源 ID。标题后附锚点能让读者直接到达该步骤。

```markdown
# Furnace

[Jump to fuel](#fuel)

## Fuel

[Return to the guide](field_guide:index)
```

| 链接目标 | 解析方式 |
| --- | --- |
| `#fuel` | 在当前书页查找标题并滚动。 |
| `field_guide:index` | 按命名空间、当前语言与回退语言寻找首页。 |
| `field_guide:ageratum/en_us/index.md` | 直接定位明确的资源，适合固定语言的引用。 |
| `https://example.org/` | 走外链处理流程。 |

读者点击链接跳到另一页时，导航历史可以保存原页位置。同一页只更改锚点时，无须再次创建书页。调试手册先从命令打开逻辑路径，再检查锚点是否与实际标题一致。

[链接分派、历史与锚点](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java)
