# dev.anvilcraft.resource.ageratum.client.constants（AgeratumConstants 至 AgeratumConstants.Structure.Render）



## AgeratumConstants

` public interface AgeratumConstants `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L8)


## AgeratumConstants.Guide

` interface Guide `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` String ROOT_FOLDER ` | 文档根目录（assets/&lt;namespace&gt;/ 下）。<br>初值 ` Ageratum.MOD_ID ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L13) |
| ` String MARKDOWN_EXTENSION ` | 文档文件扩展名。<br>初值 ` ".md" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L18) |
| ` String INDEX_FILE ` | 默认首页文件名（不含扩展名）。<br>初值 ` "index" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L23) |

## AgeratumConstants.GuideScreenUI

` interface GuideScreenUI `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L192)


## AgeratumConstants.GuideScreenUI.Colors

` interface Colors `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L248)

颜色相关常量。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int LINK_COLOR ` | 链接颜色（蓝色）<br>初值 ` 0x075D7F ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L252) |
| ` int BROKEN_LINK_COLOR ` | 断链颜色（红色），用于标记指向不存在文档的引用/链接。<br>初值 ` 0xFFA50C1E ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L256) |
| ` int LABEL_TEXT_ACTIVE ` | 标签活跃状态文本颜色（棕色）<br>初值 ` 0xFF8B5A2B ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L260) |
| ` int LABEL_TEXT_CLICKABLE ` | 标签可点击状态文本颜色（深棕色）<br>初值 ` 0xFF5D4630 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L264) |
| ` int LABEL_TEXT_DISABLED ` | 标签不可点击状态文本颜色（灰色）<br>初值 ` 0xFF3f3f3f ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L268) |
| ` int BOOKMARK_TEXT ` | 书签文本颜色（深棕色）<br>初值 ` 0xFF5D4630 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L272) |
| ` int BACKGROUND_GRADIENT_1 ` | 背景梯度色1<br>初值 ` 0xC0101010 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L276) |
| ` int BACKGROUND_GRADIENT_2 ` | 背景梯度色2<br>初值 ` 0xD0101010 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L280) |
| ` int LAYER_INDICATOR_BG ` | 层指示器背景色（半透明黑色）<br>初值 ` 0x88000000 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L284) |
| ` int LAYER_INDICATOR_TEXT ` | 层指示器文本色（白色）<br>初值 ` 0xFFFFFFFF ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L288) |

## AgeratumConstants.GuideScreenUI.Interaction

` interface Interaction `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L240)

滚动与交互参数。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` float SCROLL_STEP ` | 初值 ` 16.0f ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L241) |
| ` long PREVIEW_REFRESH_INTERVAL_MS ` | 初值 ` 500L ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L242) |

## AgeratumConstants.GuideScreenUI.Layout

` interface Layout `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L226)

布局与间距（屏幕像素）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int CLOSE_BUTTON_X_OFFSET ` | 初值 ` -5 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L227) |
| ` int BOOKMARK_HOVER_SHIFT ` | 初值 ` 5 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L228) |
| ` int MIN_HORIZONTAL_MARGIN ` | 初值 ` 32 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L229) |
| ` int MIN_VERTICAL_MARGIN ` | 初值 ` 10 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L230) |
| ` int MIN_LABEL_ROW_MARGIN ` | 初值 ` 2 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L231) |
| ` int LABEL_LEVEL2_INDENT ` | 初值 ` 10 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L232) |
| ` int LABEL_HOVER_SHIFT ` | 初值 ` 5 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L233) |
| ` int CONTENT_ROWS_MARGIN ` | 初值 ` 5 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L234) |

## AgeratumConstants.GuideScreenUI.Positions

` interface Positions `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L294)

位置与尺寸相关常量。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int LABEL_BASE_X ` | 标签基础 X 坐标偏移，书页外显示标签宽度的一半<br>初值 ` -TextureSizes.LABEL_IMAGE_WIDTH / 2 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L298) |
| ` int CONTENT_START_X_OFFSET ` | 内容区域 X 坐标起始偏移（相对于背景左边界）<br>初值 ` 15 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L302) |
| ` int CONTENT_START_Y_OFFSET ` | 内容区域 Y 坐标起始偏移（相对于背景上边界）<br>初值 ` 18 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L306) |
| ` int LABEL_TEXT_PADDING_LEFT ` | 标签文本左内边距<br>初值 ` 10 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L310) |
| ` int LABEL_TEXT_PADDING_LEFT_LEVEL2 ` | 标签文本左内边距（二级）<br>初值 ` 5 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L314) |
| ` int LABEL_TEXT_PADDING_VERTICAL ` | 标签文本上下内边距<br>初值 ` 4 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L318) |
| ` int LABEL_TEXT_MAX_WIDTH_PADDING ` | 标签宽度限制的内边距<br>初值 ` 6 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L322) |
| ` int BOOKMARK_TEXT_BASE_X ` | 书签文本右对齐位置，距标签右边缘 10 像素<br>初值 ` TextureSizes.LABEL_IMAGE_WIDTH - 10 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L326) |
| ` int BACKGROUND_EXTRA_PADDING ` | 背景图像下方额外绘制范围<br>初值 ` 10 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L330) |
| ` int BUTTON_SPACING ` | 按钮间距<br>初值 ` 10 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L334) |
| ` int STRUCTURE_BUTTON_RIGHT_MARGIN ` | 结构预览按钮右边距<br>初值 ` 21 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L338) |
| ` int STRUCTURE_BUTTON_TOP_MARGIN ` | 结构预览按钮上边距<br>初值 ` 5 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L342) |
| ` int STRUCTURE_BUTTON_WIDTH ` | 结构预览按钮宽度<br>初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L346) |
| ` int STRUCTURE_BUTTON_HEIGHT ` | 结构预览按钮高度<br>初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L350) |
| ` int LAYER_INDICATOR_PADDING ` | 层指示器内边距<br>初值 ` 3 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L354) |
| ` int SCREEN_THRESHOLD_WIDTH ` | 屏幕尺寸阈值 - 宽度<br>初值 ` 1920 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L358) |
| ` int SCREEN_THRESHOLD_HEIGHT ` | 屏幕尺寸阈值 - 高度<br>初值 ` 1080 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L362) |
| ` int INVALID_BUTTON ` | 无效鼠标按钮代码<br>初值 ` -1 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L366) |

## AgeratumConstants.GuideScreenUI.TextureSizes

` interface TextureSizes `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L212)

纹理尺寸（原始像素）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int GUIDE_IMAGE_SIZE ` | 初值 ` 256 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L213) |
| ` int GUIDE_IMAGE_WIDTH ` | 初值 ` 256 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L214) |
| ` int GUIDE_IMAGE_HEIGHT ` | 初值 ` 232 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L215) |
| ` int LABEL_IMAGE_WIDTH ` | 初值 ` 128 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L216) |
| ` int LABEL_IMAGE_HEIGHT ` | 初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L217) |
| ` int BUTTON_IMAGE_SIZE ` | 初值 ` 32 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L218) |
| ` int BUTTON_IMAGE_WIDTH ` | 初值 ` 32 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L219) |
| ` int BUTTON_IMAGE_HEIGHT ` | 初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L220) |

## AgeratumConstants.GuideScreenUI.Textures

` interface Textures `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L196)

背景纹理资源位置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ResourceLocation GUIDE ` | 初值 ` Ageratum.location("textures/gui/guide/guide.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L197) |
| ` ResourceLocation LABEL_PRIMARY ` | 初值 ` Ageratum.location("textures/gui/guide/label_primary.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L198) |
| ` ResourceLocation LABEL_SECONDARY ` | 初值 ` Ageratum.location("textures/gui/guide/label_secondary.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L199) |
| ` ResourceLocation BUTTON_DOWN ` | 初值 ` Ageratum.location("textures/gui/guide/button_down.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L200) |
| ` ResourceLocation BUTTON_UP ` | 初值 ` Ageratum.location("textures/gui/guide/button_up.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L201) |
| ` ResourceLocation BUTTON_CLOSE ` | 初值 ` Ageratum.location("textures/gui/guide/button_close.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L202) |
| ` ResourceLocation BUTTON_SHARE ` | 初值 ` Ageratum.location("textures/gui/guide/button_share.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L203) |
| ` ResourceLocation BUTTON_RETURN ` | 初值 ` Ageratum.location("textures/gui/guide/button_back.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L204) |
| ` ResourceLocation BUTTON_ADD ` | 初值 ` Ageratum.location("textures/gui/guide/button_add.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L205) |
| ` ResourceLocation LABEL_BOOKMARK ` | 初值 ` Ageratum.location("textures/gui/guide/label_bookmark.png") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L206) |

## AgeratumConstants.I18n

` interface I18n `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L26)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` String DEFAULT_LANGUAGE_CODE ` | 默认语言代码。<br>初值 ` "en_us" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L30) |

## AgeratumConstants.Image

` interface Image `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L498)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int DEFAULT_PLACEHOLDER_WIDTH ` | 默认占位图像尺寸（像素）。<br>初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L502) |
| ` int DEFAULT_PLACEHOLDER_HEIGHT ` | 默认占位图像尺寸（像素）。<br>初值 ` 16 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L506) |

## AgeratumConstants.ItemBinding

` interface ItemBinding `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L40)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` long HOLD_DURATION_MS ` | 长按持续时间（毫秒）。<br>初值 ` 1_500L ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L44) |
| ` long HOVER_STALE_MS ` | 悬停状态过期时间（毫秒）。<br>初值 ` 200L ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L49) |

## AgeratumConstants.LaTeX

` interface LaTeX `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L370)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` String LATEX_API_URL ` | LaTeX API 地址。<br>初值 ` "https://latex.codecogs.com/png.latex?" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L374) |
| ` int MIN_LATEX_HEIGHT ` | 最小 LaTeX 高度（像素）。<br>初值 ` 11 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L379) |

## AgeratumConstants.LaTeX.Dpi

` interface Dpi `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L402)

LaTeX DPI 设置。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int DEFAULT ` | 默认 DPI<br>初值 ` 150 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L406) |
| ` int MIN ` | 最小 DPI<br>初值 ` 72 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L410) |
| ` int MAX ` | 最大 DPI<br>初值 ` 600 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L414) |

## AgeratumConstants.LaTeX.Network

` interface Network `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L420)

网络连接参数。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int CONNECT_TIMEOUT_MS ` | 连接超时（毫秒）<br>初值 ` 5000 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L424) |
| ` int READ_TIMEOUT_MS ` | 读取超时（毫秒）<br>初值 ` 10000 ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L428) |

## AgeratumConstants.LaTeX.Scale

` interface Scale `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L384)

LaTeX 缩放因子。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` float DEFAULT ` | 默认缩放<br>初值 ` 0.1f ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L388) |
| ` float MIN ` | 最小缩放<br>初值 ` 0.5f ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L392) |
| ` float MAX ` | 最大缩放<br>初值 ` 2.0f ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L396) |

## AgeratumConstants.Network

` interface Network `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L491)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` String PROTOCOL_VERSION ` | 网络协议版本。<br>初值 ` "1" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L495) |

## AgeratumConstants.Patterns

` interface Patterns `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L52)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Pattern COLOR_TAG_PATTERN ` | 颜色标签。<br>初值 ` Pattern.compile("<color=(#?[0-9a-zA-Z_]+)>") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L56) |
| ` Pattern HEADER_PATTERN ` | Markdown 标题模式（ATX形式）。<br>初值 ` Pattern.compile("^\\s{0,3}(#{1,6})\\s+(.+?)\\s*#*\\s*$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L61) |
| ` Pattern ORDERED_LIST_PATTERN ` | 有序列表模式。<br>初值 ` Pattern.compile("^(\\s*)(\\d+)\\.\\s+(.+)$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L66) |
| ` Pattern TASK_LIST_PATTERN ` | 任务列表模式。<br>初值 ` Pattern.compile("^(\\s*)[-+*]\\s+\\[([ xX])]\\s+(.+)$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L71) |
| ` Pattern UNORDERED_LIST_PATTERN ` | 无序列表模式。<br>初值 ` Pattern.compile("^(\\s*)[-+*]\\s+(.+)$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L76) |
| ` Pattern BLOCKQUOTE_PATTERN ` | 块引用模式。<br>初值 ` Pattern.compile("^\\s*((?:>\\s*)+)(.*)$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L81) |
| ` Pattern HORIZONTAL_RULE_PATTERN ` | 水平分隔线模式。<br>初值 ` Pattern.compile("^\\s*([-*_])(?:\\s*\\1){2,}\\s*$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L86) |
| ` Pattern SETEXT_H1_PATTERN ` | Setext标题1模式。<br>初值 ` Pattern.compile("^=+\\s*$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L91) |
| ` Pattern SETEXT_H2_PATTERN ` | Setext标题2模式。<br>初值 ` Pattern.compile("^-+\\s*$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L96) |
| ` Pattern CODE_FENCE_PATTERN ` | 代码块围栏模式。<br>初值 `` Pattern.compile("^(`{3,}\|~{3,})(.*)$") `` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L101) |
| ` Pattern INDENTED_CODE_PATTERN ` | 缩进代码模式。<br>初值 ` Pattern.compile("^(?: {4}\|\\t)(.*)$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L106) |
| ` Pattern TABLE_ROW_PATTERN ` | 表格行模式。<br>初值 ` Pattern.compile("^\\\|.*\\\|\\s*$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L111) |
| ` Pattern LINK_REF_DEF_PATTERN ` | 链接参考定义模式。<br>初值 ` Pattern.compile( "^\\s{0,3}\\[([^]]+)]:\\s*(\\S+)(?:\\s+(?:\"[^\"]*\"\|'[^']*'\|\\([^)]*\\)))?\\s*$" ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L116) |
| ` Pattern LINK_REF_FULL_PATTERN ` | 完整链接参考模式。<br>初值 ` Pattern.compile("\\[([^]]+)]\\[([^]]*)]") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L123) |
| ` Pattern LINK_REF_SHORT_PATTERN ` | 简短链接参考模式。<br>初值 ` Pattern.compile("\\[([^]\\[]+)](?![\\[(])") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L128) |
| ` Pattern EXTENSION_COLON_OPEN_PATTERN ` | 冒号形式扩展标签打开模式。<br>初值 ` Pattern.compile( "^:::\\s+((?:[a-z0-9_.-]+:)?[a-z0-9_./-]+)(?:\\s+(.*))?$", Pattern.CASE_INSENSITIVE ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L133) |
| ` Pattern EXTENSION_TAG_OPEN_PATTERN ` | 尖括号形式扩展标签打开模式。<br>初值 ` Pattern.compile( "^<\\s*((?:[a-z0-9_.-]+:)?[a-z0-9_./-]+)(?:\\s+([^>]*?))?\\s*(/?)>\\s*$", Pattern.CASE_INSENSITIVE ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L141) |
| ` Pattern IMAGE_PATTERN ` | 图片模式。<br>初值 ` Pattern.compile("^\\s*!\\[[^]]*]\\(([^):]+):([^)]+)\\)\\s*$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L149) |
| ` Pattern FALLBACK_IMAGE_PATTERN ` | 图片后备模式（仅路径）。<br>初值 ` Pattern.compile("^\\s*!\\[[^]]*]\\(([^)]+)\\)\\s*$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L154) |
| ` Pattern OBFUSCATED_TAG_PATTERN ` | 内联样式解析器：模糊标签模式。<br>初值 ` Pattern.compile("<o>") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L159) |
| ` Pattern HOVER_TAG_PATTERN ` | 内联样式解析器：悬停标签模式。<br>初值 ` Pattern.compile("<hover\\b([^>]*)>", Pattern.CASE_INSENSITIVE) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L164) |
| ` Pattern CLICK_TAG_PATTERN ` | 内联样式解析器：点击标签模式。<br>初值 ` Pattern.compile("<click\\b([^>]*)>", Pattern.CASE_INSENSITIVE) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L169) |
| ` Pattern GRADIENT_TAG_PATTERN ` | 内联样式解析器：渐变标签模式。<br>初值 ` Pattern.compile("<gradient\\b([^>]*)>", Pattern.CASE_INSENSITIVE) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L174) |
| ` Pattern TAG_ATTRIBUTE_PATTERN ` | 标签属性模式。<br>初值 ` Pattern.compile("([a-zA-Z_:][-a-zA-Z0-9_:.]*)\\s*=\\s*\"([^\"]*)\"") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L179) |
| ` Pattern PARAM_PAIR_PATTERN ` | 扩展参数对模式。<br>初值 ` Pattern.compile("([a-zA-Z0-9_.-]+)=(\"[^\"]*\"\|'[^']*'\|\\S+)") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L184) |
| ` Pattern LEGACY_LATEX_LINE_PATTERN ` | LaTeX 旧版本格式模式。<br>初值 ` Pattern.compile("^\\s*\\[(?:tex\|latex\|formula)([:;,!+])([^]]+)]\\s*$") ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L189) |

## AgeratumConstants.Preview

` interface Preview `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` String NAMESPACE ` | 预览命名空间。<br>初值 ` "ageratum_review" ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L37) |

## AgeratumConstants.Structure

` interface Structure `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L432)


## AgeratumConstants.Structure.Camera

` interface Camera `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L443)

相机缩放参数。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` float MIN_ZOOM ` | 最小缩放<br>初值 ` 0.2f ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L447) |
| ` float MAX_ZOOM ` | 最大缩放<br>初值 ` 8.0f ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L451) |

## AgeratumConstants.Structure.Render

` interface Render `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L475)

结构渲染参数。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` float SCREEN_WIDTH_SCALE ` | 屏幕宽度缩放因子<br>初值 ` 330.0f ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L479) |
| ` double CONTENT_HEIGHT_FACTOR ` | 内容高度计算系数<br>初值 ` 20.0d ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L483) |
| ` double BOTTOM_HEIGHT_FACTOR ` | 底部高度计算系数<br>初值 ` 18.0d ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/constants/AgeratumConstants.java#L487) |
