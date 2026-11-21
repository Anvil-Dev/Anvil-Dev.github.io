# dev.dubhe.anvilcraft.client.gui.component（CelestialMapsGuideWidget 至 TeslaTowerButton）



## CelestialMapsGuideWidget

` public final class CelestialMapsGuideWidget extends AbstractWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier TEX_CELESTIAL_MAPS ` | 初值 ` SharedTextures.texture("block/celestial_maps") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L22) |
| ` public static final int MAP_SIZE ` | 初值 ` 160 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L23) |
| ` public static final int COLOR_TIME ` | 初值 ` 0xBF_A0FFA0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L25) |
| ` public static final int COLOR_SPACE ` | 初值 ` 0xBF_00FFFF ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L27) |
| ` public static final int COLOR_MASS ` | 初值 ` 0xBF_FFFFA0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L29) |
| ` public static final int COLOR_ENERGY ` | 初值 ` 0xBF_FF8080 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L31) |
| ` public static final int X1 ` | 初值 ` 11 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L32) |
| ` public static final int X2 ` | 初值 ` 91 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L33) |
| ` public static final int Y1 ` | 初值 ` 12 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L34) |
| ` public static final int Y2 ` | 初值 ` 92 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L35) |
| ` public static void renderCelestialMapsGuide( GuiGraphicsExtractor guiGraphics, Font font, int time, int space, int mass, int energy ) ` | 分支 ` (time > 0) ` 内调用 ` Math.round((time - 1) * 64f / 63f) `<br>分支 ` (time > 0) ` 内调用 ` guiGraphics.fill(x, 0, x + 2, MAP_SIZE, COLOR_TIME) `<br>分支 ` (time > 0) ` 内调用 ` String.valueOf(time) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L41) |
| ` public CelestialMapsGuideWidget(IntList anvilCounts) ` | 实现调用 ` super(0, 0, 1, 1, Component.empty()) `<br>实现调用 ` Component.empty() `<br>[调用处 CelestialForgingAnvilScreen.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L210) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L142) |
| ` public Font getFont() ` | 末尾返回 ` Minecraft.getInstance().font `<br>[调用处 CelestialMapsGuideWidget.extractWidgetRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L159) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L147) |
| ` @Override public boolean isMouseOver(double mouseX, double mouseY) ` | ` (!super.isMouseOver(mouseX, mouseY) \|\| !(Minecraft.getInstance().screen instanceof CelestialForgingAnvilScreen)) ` 成立时提前返回 ` false `<br>末尾返回 ` isIn(x0, y0) \|\| isIn(x0 - 80, y0) \|\| isIn(x0, y0 - 80) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L168) |
| ` @Override public void onClick(MouseButtonEvent event, boolean doubleClick) ` | 实现调用 ` event.x() `<br>实现调用 ` event.y() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L180) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (!this.visible \|\| !this.active) ` 成立时提前返回 ` false `<br>` (interactor == null \|\| player == null \|\| !(Minecraft.getInstance().screen instanceof CelestialForgingAnvilScreen screen)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L208) |
| ` @Override public void playDownSound(SoundManager handler) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L254) |

## CommandEntry

` public class CommandEntry extends TexturedButton `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CommandEntry(int x, int y, int width, int height, Component text, OnPress onPress) ` | 实现调用 ` super(x, y, width, height, AnvilCraft.of(""), 0, 0, 0, btn -> { }) `<br>实现调用 ` AnvilCraft.of("") `<br>实现调用 ` text.copy() `<br>[调用处 SpacetimeSupercomputerScreen.fillAvailableCommandList](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L163) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L21) |
| ` public CommandEntry(int x, int y, int width, int height, Component text, OnPress onPress, Component message) ` | 实现调用 ` super(x, y, width, height, AnvilCraft.of(""), 0, 0, 0, btn -> { }, message) `<br>实现调用 ` AnvilCraft.of("") `<br>实现调用 ` text.copy() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L30) |
| ` @Override public void playDownSound(SoundManager soundManager) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L84) |
| ` @Override public void onPress(InputWithModifiers input) ` | 执行 ` this.onPress.onPress(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L89) |
| ` public MutableComponent getText() ` | 末尾返回 ` this.text `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L16) |

## CommandEntry.OnPress

` public interface OnPress `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L94)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void onPress(CommandEntry button) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L95) |

## CycleFilterModeButton

` public class CycleFilterModeButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CycleFilterModeButton(int x, int y, OnPress onPress, Supplier<Mode> filterMode) ` | 实现调用 ` super(x, y, 16, 16, CycleFilterModeButton.DEFAULT_MESSAGE, onPress, Button.DEFAULT_NARRATION) `<br>[调用处 ItemDetectorScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L80) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L22) |
| ` @Override public Component getMessage() ` | 实现调用 ` this.filterMode.get().name().toLowerCase(Locale.ROOT) `<br>实现调用 ` this.filterMode.get().name() `<br>实现调用 ` this.filterMode.get() `<br>[调用处 CycleFilterModeButton.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L53) |
| ` public void renderTexture( GuiGraphicsExtractor graphics, Identifier texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>[调用处 CycleFilterModeButton.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L59) |
| ` public Mode cycle() ` | 末尾返回 ` this.filterMode.get().cycle() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L79) |

## EnableFilterButton

` public class EnableFilterButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnableFilterButton(int x, int y, OnPress onPress, Supplier<Boolean> filterEnabled) ` | 实现调用 ` super(x, y, 16, 16, EnableFilterButton.defaultMessage, onPress, var -> EnableFilterButton.defaultMessage) `<br>[调用处 IFilterScreen.getEnableFilterButtonSupplier](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L108) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L20) |
| ` public void flush() ` | 刷新<br>实现调用 ` Component.translatable("screen.anvilcraft.button." + (this.getFilterEnabled().get() ? "on" : "off")) `<br>实现调用 ` this.getFilterEnabled().get() `<br>实现调用 ` this.getFilterEnabled() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L35) |
| ` public void renderTexture( GuiGraphicsExtractor graphics, Identifier texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>[调用处 EnableFilterButton.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L31) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L42) |
| ` public boolean next() ` | 末尾返回 ` !this.filterEnabled.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L62) |
| ` public Supplier<Boolean> getFilterEnabled() ` | 末尾返回 ` this.filterEnabled `<br>由 Lombok 生成。<br>[调用处 EnableFilterButton.flush](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L14) |

## FluidDisplayWidget

` public class FluidDisplayWidget extends AbstractWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidDisplayWidget(int x, int y, int width, int height, ResourceHandler<FluidResource> handler, Runnable onClick) ` | 实现调用 ` super(x, y, width, height, Component.empty()) `<br>实现调用 ` Component.empty() `<br>[调用处 AutoEnchantingTableScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L130) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L23) |
| ` @Override public void onClick(MouseButtonEvent event, boolean doubleClick) ` | 执行 ` this.onClick.run() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L64) |

## FluidRateSlider

` public class FluidRateSlider extends AbstractWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier SLIDER ` | 初值 ` SharedTextures.textureGui("misc/slider_like/slider") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L16) |
| ` public static final int STEP ` | 初值 ` 50 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L18) |
| ` public FluidRateSlider(int x, int y, int length, Callback<Integer> callback) ` | 实现调用 ` super(x, y, length, 8, Component.literal("FluidRateSlider")) `<br>实现调用 ` Component.literal("FluidRateSlider") `<br>[调用处 ControlValveScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L90) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L28) |
| ` public void setValue(int value) ` | 执行 ` this.value = FluidRateSlider.clampSnap(value) `<br>[调用处 FluidRateSlider.setValueWithUpdate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L36) |
| ` public void setExactValue(int value) ` | 执行 ` this.value = Math.clamp(value, 0, FluidPipeNetwork.maxSpeed()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L40) |
| ` public void setValueWithUpdate(int value) ` | 实现调用 ` this.setValue(value) `<br>实现调用 ` this.update() `<br>[调用处 FluidRateSlider.step](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L44) |
| ` public void step(int direction) ` | 实现调用 ` FluidPipeNetwork.maxSpeed() `<br>实现调用 ` this.setValueWithUpdate(this.value - this.value % STEP) `<br>实现调用 ` this.setValueWithUpdate(this.value + STEP * direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L49) |
| ` @Override public void onClick(MouseButtonEvent event, boolean doubleClick) ` | 实现调用 ` super.onClick(event, doubleClick) `<br>实现调用 ` event.button() `<br>实现调用 ` this.isInTrack(event.x(), event.y()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L86) |
| ` @Override public void onDrag(MouseButtonEvent event, double dx, double dy) ` | 实现调用 ` super.onDrag(event, dx, dy) `<br>实现调用 ` this.applyMouse(event.x()) `<br>实现调用 ` event.x() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L94) |
| ` public void onReleased() ` | 执行 ` this.scrolling = false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L101) |
| ` public int getValue() ` | 末尾返回 ` this.value `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L15) |

## ItemCollectorButton

` public class ItemCollectorButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ItemCollectorButton.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemCollectorButton(int x, int y, String variant, OnPress onPress) ` | 物品收集器 screen 的加减按钮<br>实现调用 ` super(x, y, 10, 10, Component.literal(""), onPress, var -> Component.literal(variant)) `<br>实现调用 ` Component.literal("") `<br>实现调用 ` SharedTextures.textureGui("machine/item_collector/button_%s".formatted(variant)) `<br>[调用处 ExpCollectorScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ExpCollectorScreen.java#L58) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ItemCollectorButton.java#L15) |
| ` public void renderTexture( GuiGraphicsExtractor graphics, Identifier texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>[调用处 ItemCollectorButton.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ItemCollectorButton.java#L22) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/ItemCollectorButton.java#L25) |

## OutputDirectionButton

` public class OutputDirectionButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OutputDirectionButton(int x, int y, OnPress onPress, Direction direction) ` | [调用处 BaseMachineScreen.getDirectionButtonSupplier](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L64) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L22) |
| ` @SuppressWarnings("UnusedReturnValue") public OutputDirectionButton skip(Direction direction) ` | 跳过某个方向<br>参数 ` direction ` 方向<br>返回 方向按钮<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L31) |
| ` public void setDirection(Direction direction) ` | 设置方向<br>参数 ` direction ` 方向<br>实现调用 ` Component.translatable("screen.anvilcraft.button.direction." + this.direction.getName()) `<br>实现调用 ` this.direction.getName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L60) |
| ` public void renderTexture( GuiGraphicsExtractor graphics, Identifier texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>[调用处 OutputDirectionButton.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L67) |
| ` public Direction next() ` | 末尾返回 ` this.next(this.direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L87) |
| ` public Direction next(Direction direction) ` | 下一个方向<br>参数 ` direction ` 方向<br>返回 方向<br>末尾返回 ` this.skip.contains(direction1) ? this.next(direction1) : direction1 `<br>[调用处 OutputDirectionButton.next](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L95) |

## PocketEffectLayout

` public final class PocketEffectLayout `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isEnabled(AbstractContainerScreen<?> screen) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` PocketInventory.capacity(player) `<br>实现调用 ` creative.isInventoryOpen() `<br>[调用处 JeiPocketEffectAreaMixin.anvilcraft$effectsAbovePockets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/JeiPocketEffectAreaMixin.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L20) |
| ` public static boolean isHiddenByRecipeBook(AbstractContainerScreen<?> screen) ` | 末尾返回 ` screen instanceof InventoryScreen && screen instanceof PocketRecipeScreenAccessor book && book.anvilcraft$isWidthTooNarrow() && book.anvilcraft$getRecipeBookComponent().isVisible() `<br>[调用处 PocketEffectScreenMixin.anvilcraft$effectsAbovePockets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/PocketEffectScreenMixin.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L27) |
| ` public static List<MobEffectInstance> visibleEffects() ` | 末尾返回 ` player == null ? List.of() : player.getActiveEffects().stream() .filter(ClientHooks::shouldRenderEffect).sorted().toList() `<br>[调用处 JeiPocketEffectAreaMixin.anvilcraft$effectsAbovePockets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/JeiPocketEffectAreaMixin.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L32) |
| ` public static List<Rect2i> areas(AbstractContainerScreen<?> screen, int count) ` | ` (isHiddenByRecipeBook(screen)) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` areas(screen.width, screen.getLeftPos(), screen.getTopPos(), screen.getImageWidth(), screen instanceof CreativeModeInventoryScreen, count) `<br>[调用处 JeiPocketEffectAreaMixin.anvilcraft$effectsAbovePockets](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/JeiPocketEffectAreaMixin.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L38) |
| ` public static List<Rect2i> areas(int screenWidth, int left, int top, int imageWidth, boolean creative, int count) ` | ` (count == 0) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` areas ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L44) |

## RecipeCycleButton

` public class RecipeCycleButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/RecipeCycleButton.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RecipeCycleButton(int x, int y, OnPress onPress) ` | 执行 ` super( x, y, 18, 18, Component.translatable("screen.anvilcraft.batch_crafter.switch_recipe"), onPress, Button.DEFAULT_NARRATION ) `<br>[调用处 BatchCrafterScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L47) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/RecipeCycleButton.java#L10) |

## RenderableWidgetAdder

` public interface RenderableWidgetAdder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/RenderableWidgetAdder.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` <T extends GuiEventListener & Renderable & NarratableEntry> T addRenderableWidget(T widget) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/RenderableWidgetAdder.java#L8) |

## SapcetimeSupercomputerCommandSuggestions

` public class SapcetimeSupercomputerCommandSuggestions extends CommandSuggestions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SapcetimeSupercomputerCommandSuggestions.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SapcetimeSupercomputerCommandSuggestions( Minecraft minecraft, Screen screen, EditBox input, Font font, boolean commandsOnly, boolean onlyShowIfCursorPastError, int lineStartOffset, int suggestionLineLimit, boolean anchorToBottom, int fillColor, BiConsumer<CommandDispatcher<ClientSuggestionProvider>, CommandBuildContext> commandFactory ) ` | [调用处 SpacetimeSupercomputerScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L227) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SapcetimeSupercomputerCommandSuggestions.java#L28) |
| ` @Override public void updateCommandInfo() ` | 实现调用 ` this.input.getValue() `<br>实现调用 ` this.currentParse.getReader().getString().equals(command) `<br>实现调用 ` this.currentParse.getReader().getString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SapcetimeSupercomputerCommandSuggestions.java#L72) |
| ` @Override public void extractUsage(GuiGraphicsExtractor graphics) ` | 实现调用 ` graphics.text(this.font, formattedcharsequence, this.commandUsagePosition, j + 2, -1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SapcetimeSupercomputerCommandSuggestions.java#L140) |

## SilencerButton

` public class SilencerButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SilencerButton( int x, int y, int index, int variant, OnPress onPress, ActiveSilencerScreen parent, String textureVariant ) ` | 主动静音器 screen 的按钮<br>实现调用 ` super(x, y, 10, 10, Component.literal(""), onPress, _ -> parent.getSoundTextAt(index, variant).copy()) `<br>实现调用 ` Component.literal("") `<br>实现调用 ` SharedTextures.textureGui("machine/active_silencer/button_%s".formatted(textureVariant)) `<br>[调用处 ActiveSilencerScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L263) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L29) |
| ` public void renderTexture( GuiGraphicsExtractor graphics, Identifier texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>[调用处 SilencerButton.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L60) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L114) |
| ` public int getIndex() ` | 末尾返回 ` this.index `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L19) |

## SimpleIconButton

` public class SimpleIconButton extends TexturedButton `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SimpleIconButton.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SimpleIconButton(int x, int y, String variant, OnPress onPress) ` | 执行 ` super(x, y, 10, 10, SharedTextures.textureGui("machine/button_%s".formatted(variant)), 10, 10, 20, onPress) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SimpleIconButton.java#L6) |

## SliderWidget

` public class SliderWidget extends AbstractWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier SLIDER ` | 初值 ` SharedTextures.textureGui("misc/slider_like/slider") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L18) |
| ` public final Callback<Integer> callback ` | 字段类型为 ` Callback<Integer> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L34) |
| ` public static boolean scrolling ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L36) |
| ` public SliderWidget( int x, int y, int min, int max, int length, Function<Double, Double> valueFunction, Function<Integer, Double> argFunction, Callback<Integer> callback ) ` | 构建一个Slider<br>参数 ` x ` X<br>参数 ` y ` Y<br>参数 ` min ` 最小值<br>参数 ` max ` 最大值<br>参数 ` length ` 长度<br>参数 ` callback ` 更新回调<br>实现调用 ` super(x, y, length, 8, Component.literal("Slider")) `<br>实现调用 ` Component.literal("Slider") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L46) |
| ` public SliderWidget( int x, int y, int min, int max, int length, Callback<Integer> callback ) ` | 执行 ` this(x, y, min, max, length, i -> SliderWidget.defaultValueFunction(i, min, max), i -> SliderWidget.defaultArgFunction(i, min, max), callback) `<br>[调用处 SliderScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L44) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L67) |
| ` public double getProportion() ` | 末尾返回 ` Math.clamp(this.proportion, 0.0, 1.0) `<br>[调用处 SliderWidget.isInSlider](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L161) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L87) |
| ` public void setProportion(double proportion) ` | 执行 ` this.proportion = Math.clamp(proportion, 0.0, 1.0) `<br>[调用处 SliderWidget.onDrag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L149) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L91) |
| ` public static double defaultValueFunction(double proportion, int min, int max) ` | 末尾返回 ` (max - min) * proportion + min `<br>[调用处 CreativeLaserScreen.LinearSlider.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L274) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L95) |
| ` public static double defaultArgFunction(int value, int min, int max) ` | ` (value == 0) ` 成立时提前返回 ` Math.clamp(((double) value - min) / (max - min), 0.0, 1.0) `<br>末尾返回 ` Math.clamp(((value >= 0 ? v : -v) - min) / (max - min), 0.0, 1.0) `<br>[调用处 SliderWidget.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L99) |
| ` public void setValue(int value) ` | 执行 ` this.proportion = this.argFunction.apply(value) `<br>[调用处 SliderWidget.setValueWithUpdate](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L122) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L105) |
| ` public int getValue() ` | ` (v == 0) ` 成立时提前返回 ` 0 `<br>末尾返回 ` v > 0 ? (int) Math.pow(2, Math.abs(v - 1)) : -(int) Math.pow(2, Math.abs(v + 1)) `<br>[调用处 SliderWidget.update](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L127) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L109) |
| ` public int getAddValue(int value) ` | ` (Math.abs(value) < 4) ` 成立时提前返回 ` 1 `<br>末尾返回 ` (int) Math.pow(2, Math.floor(Math.log(Math.abs(value)) / Math.log(2)) - 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L115) |
| ` public void setValueWithUpdate(int value) ` | 设置 Value 并更新<br>实现调用 ` this.setValue(value) `<br>实现调用 ` this.update() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L121) |
| ` @Override public void onClick(MouseButtonEvent event, boolean doubleClick) ` | 实现调用 ` super.onClick(event, doubleClick) `<br>实现调用 ` this.isInSlider(event.x(), event.y()) `<br>实现调用 ` event.x() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L130) |
| ` @Override public void onDrag(MouseButtonEvent event, double dx, double dy) ` | 实现调用 ` super.onDrag(event, dx, dy) `<br>分支 ` (SliderWidget.scrolling \|\| this.scroll) ` 内调用 ` event.x() `<br>分支 ` (SliderWidget.scrolling \|\| this.scroll) ` 内调用 ` this.setProportion(offset) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L140) |
| ` public void onReleased() ` | 分支 ` (this.scroll) ` 内调用 ` this.update() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L154) |
| ` public void setMin(final int min) ` | 执行 ` this.min = min `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L17) |
| ` public int getMin() ` | 末尾返回 ` this.min `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L17) |
| ` public void setMax(final int max) ` | 执行 ` this.max = max `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L17) |
| ` public int getMax() ` | 末尾返回 ` this.max `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SliderWidget.java#L17) |

## StructureScannerButtonState

` public final class StructureScannerButtonState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L4)

成型舱式三段/五段按钮及六段文件按钮状态；只有有效的松开操作才提交动作。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureScannerButtonState(int frames) ` | ` (frames != 3 && frames != 5 && frames != 6) ` 成立时抛出 ` new IllegalArgumentException("Expected three, five or six frames") `<br>[调用处 SmartBlockPlacerScreen.ModeButton.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L351) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L8) |
| ` public boolean press(int input, boolean enabled) ` | ` (!enabled \|\| input < 0 \|\| this.pressedInput != -1) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L13) |
| ` public boolean release(int input, boolean enabled, boolean inside) ` | ` (!this.pressedBy(input)) ` 成立时提前返回 ` false `<br>末尾返回 ` enabled && inside ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L19) |
| ` public boolean pressedBy(int input) ` | 末尾返回 ` input >= 0 && this.pressedInput == input `<br>[调用处 StructureScannerButtonState.release](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L25) |
| ` public boolean keyboardPressed() ` | 末尾返回 ` this.pressedInput > 0 `<br>[调用处 StructureScannerButtonState.frame](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L29) |
| ` public void cancel() ` | 执行 ` this.pressedInput = -1 `<br>[调用处 StructureScannerButtonState.release](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L33) |
| ` public int frame(boolean enabled, boolean hovered, boolean selected) ` | ` (this.pressedInput != -1 && (this.frames == 5 \|\| hovered \|\| this.keyboardPressed())) ` 成立时提前返回 ` 2 `<br>` (this.frames == 5 && selected) ` 成立时提前返回 ` hovered ? 4 : 3 `<br>末尾返回 ` hovered ? 1 : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L37) |

## SwitchableButton

` public class SwitchableButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SwitchableButton( int x, int y, int width, int height, List<Identifier> textures, int texYDiff, int textureWidth, int textureHeight, OnPress onPress ) ` | 执行 ` this(x, y, width, height, textures, texYDiff, textureWidth, textureHeight, onPress, List.of()) `<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L346) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L29) |
| ` public SwitchableButton( int x, int y, int width, int height, List<Identifier> textures, int texYDiff, int textureWidth, int textureHeight, OnPress onPress, List<Component> message ) ` | 实现调用 ` super(x, y, width, height, Component.empty(), onPress, Button.DEFAULT_NARRATION) `<br>实现调用 ` Component.empty() `<br>[调用处 AdvancedComparatorScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L71) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L43) |
| ` @Override public void onClick(MouseButtonEvent event, boolean doubleClick) ` | 实现调用 ` event.button() `<br>分支 ` (event.button() == 0) ` 内调用 ` this.switchToNext() `<br>分支 ` !(event.button() == 0) ` 内调用 ` event.button() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L95) |
| ` @Override public Component getMessage() ` | ` (this.message.isEmpty()) ` 成立时提前返回 ` Component.empty() `<br>末尾返回 ` this.message.get(this.getCurrent()) `<br>[调用处 SwitchableButton.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L109) |
| ` public void switchToNext() ` | 实现调用 ` this.textures.size() `<br>实现调用 ` ((OnPress) this.onPress).onPress(this, this.current) `<br>[调用处 SwitchableButton.onClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L98) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L117) |
| ` public void switchToPrev() ` | 分支 ` (this.current < 0) ` 内调用 ` this.textures.size() `<br>实现调用 ` ((OnPress) this.onPress).onPress(this, this.current) `<br>[调用处 SwitchableButton.onClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L100) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L125) |
| ` public int getCurrent() ` | 末尾返回 ` this.current `<br>由 Lombok 生成。<br>[调用处 SwitchableButton.getMessage](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L19) |
| ` public void setCurrent(final int current) ` | 执行 ` this.current = current `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L19) |

## SwitchableButton.OnPress

` public interface OnPress extends Button.OnPress, Consumer<Button>, BiConsumer<Button, Integer> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L133)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void onPress(Button button, int index) ` | [调用处 SwitchableButton.OnPress.onPress](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L139) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L134) |
| ` @Override default void onPress(Button button) ` | 分支 ` (button instanceof SwitchableButton stButton) ` 内调用 ` this.onPress(stButton, stButton.current) `<br>[调用处 SwitchableButton.OnPress.accept](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L145) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L136) |
| ` @Override default void accept(Button button) ` | 执行 ` this.onPress(button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L143) |
| ` @Override default void accept(Button button, Integer index) ` | 执行 ` this.onPress(button, index) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L148) |

## TeslaTowerButton

` public class TeslaTowerButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public TeslaTowerButton( int x, int y, int index, int variant, OnPress onPress, TeslaTowerScreen parent, String textureVariant ) ` | 主动静音器 screen 的按钮<br>实现调用 ` super(x, y, 10, 10, Component.literal(""), onPress, _ -> parent.getFilterTitle(index, variant).copy()) `<br>实现调用 ` Component.literal("") `<br>实现调用 ` SharedTextures.textureGui("machine/active_silencer/button_%s".formatted(textureVariant)) `<br>[调用处 TeslaTowerScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/TeslaTowerScreen.java#L196) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L34) |
| ` public void renderTexture( GuiGraphicsExtractor graphics, Identifier texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight) ` | 实现调用 ` this.isHovered() `<br>[调用处 TeslaTowerButton.extractContents](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L65) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L126) |
| ` public int getIndex() ` | 末尾返回 ` this.index `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/TeslaTowerButton.java#L23) |
