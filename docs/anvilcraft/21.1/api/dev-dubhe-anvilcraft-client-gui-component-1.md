# dev.dubhe.anvilcraft.client.gui.component（CelestialMapsGuideWidget 至 SwitchableButton）



## CelestialMapsGuideWidget

` public final class CelestialMapsGuideWidget extends AbstractWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L20)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation TEX_CELESTIAL_MAPS ` | 初值 ` SharedTextures.texture("block/celestial_maps") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L22) |
| ` public static final int MAP_SIZE ` | 初值 ` 160 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L23) |
| ` public static final int COLOR_TIME ` | 初值 ` 0xBF_A0FFA0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L25) |
| ` public static final int COLOR_SPACE ` | 初值 ` 0xBF_00FFFF ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L27) |
| ` public static final int COLOR_MASS ` | 初值 ` 0xBF_FFFFA0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L29) |
| ` public static final int COLOR_ENERGY ` | 初值 ` 0xBF_FF8080 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L31) |
| ` public static final int X1 ` | 初值 ` 11 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L32) |
| ` public static final int X2 ` | 初值 ` 91 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L33) |
| ` public static final int Y1 ` | 初值 ` 12 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L34) |
| ` public static final int Y2 ` | 初值 ` 92 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L35) |
| ` @SuppressWarnings("checkstyle:VariableDeclarationUsageDistance") @Contract(mutates = "param1") public static void renderCelestialMapsGuide( GuiGraphics guiGraphics, Font font, int time, int space, int mass, int energy ) ` | 实现调用 ` guiGraphics.blit(TEX_CELESTIAL_MAPS, 0, 0, 0, 0, MAP_SIZE, MAP_SIZE, MAP_SIZE, MAP_SIZE) `<br>分支 ` (time > 0) ` 内调用 ` Math.round((time - 1) * 64f / 63f) `<br>分支 ` (time > 0) ` 内调用 ` guiGraphics.fill(x, 0, x + 2, MAP_SIZE, COLOR_TIME) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L45) |
| ` public CelestialMapsGuideWidget(IntList anvilCounts) ` | 实现调用 ` super(0, 0, 1, 1, Component.empty()) `<br>实现调用 ` Component.empty() `<br>[调用处 CelestialForgingAnvilScreen.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CelestialForgingAnvilScreen.java#L234) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L165) |
| ` public Font getFont() ` | 末尾返回 ` Minecraft.getInstance().font `<br>[调用处 CelestialMapsGuideWidget.renderWidget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L182) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L170) |
| ` @Override public void onClick(double mouseX, double mouseY, int button) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` screen.getMenu() `<br>实现调用 ` getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L203) |
| ` @Override public boolean mouseScrolled(double mouseX, double mouseY, double scrollX, double scrollY) ` | ` (interactor == null \|\| player == null \|\| !(Minecraft.getInstance().screen instanceof CelestialForgingAnvilScreen screen)) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L229) |
| ` @Override public void playDownSound(SoundManager handler) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CelestialMapsGuideWidget.java#L274) |

## CommandEntry

` public class CommandEntry extends TexturedButton `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CommandEntry(int x, int y, int width, int height, Component text, OnPress onPress) ` | 实现调用 ` super(x, y, width, height, AnvilCraft.of(""), 0, 0, 0, btn -> { }) `<br>实现调用 ` AnvilCraft.of("") `<br>实现调用 ` text.copy() `<br>[调用处 SpacetimeSupercomputerScreen.fillAvailableCommandList](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L160) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L22) |
| ` @Override public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.isMouseOver(mouseX, mouseY) `<br>实现调用 ` this.isFocused() `<br>分支 ` (this.isFocused()) ` 内调用 ` graphics.hLine(this.getX(), this.getX() + width, this.getY(), -1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L31) |
| ` @Override public void playDownSound(SoundManager soundManager) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L84) |
| ` @Override public void onPress() ` | 执行 ` this.onPress.onPress(this) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L89) |
| ` public MutableComponent getText() ` | 末尾返回 ` this.text `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L17) |

## CommandEntry.OnPress

` public interface OnPress `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L94)

类型注解 ` @OnlyIn(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void onPress(CommandEntry button) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CommandEntry.java#L96) |

## CycleFilterModeButton

` public class CycleFilterModeButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CycleFilterModeButton(int x, int y, OnPress onPress, Supplier<Mode> filterMode) ` | 实现调用 ` super(x, y, 16, 16, DEFAULT_MESSAGE, onPress, Button.DEFAULT_NARRATION) `<br>[调用处 ItemDetectorScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ItemDetectorScreen.java#L71) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L24) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.isHovered() `<br>分支 ` (this.isHovered()) ` 内调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L29) |
| ` @Override public Component getMessage() ` | 实现调用 ` this.filterMode.get().name().toLowerCase(Locale.ROOT) `<br>实现调用 ` this.filterMode.get().name() `<br>实现调用 ` this.filterMode.get() `<br>[调用处 CycleFilterModeButton.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L40) |
| ` @Override public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.filterMode.get() `<br>实现调用 ` this.renderTexture(guiGraphics, location, this.getX(), this.getY(), 0, 0, 16, this.width, this.height, 16, 32) `<br>实现调用 ` this.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L46) |
| ` public void renderTexture( GuiGraphics guiGraphics, ResourceLocation texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>实现调用 ` RenderSystem.enableDepthTest() `<br>实现调用 ` guiGraphics.blit(texture, x, y, puOffset, i, width, height, textureWidth, textureHeight) `<br>[调用处 CycleFilterModeButton.renderWidget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L49) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L52) |
| ` public Mode cycle() ` | 末尾返回 ` this.filterMode.get().cycle() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/CycleFilterModeButton.java#L73) |

## EnableFilterButton

` public class EnableFilterButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public EnableFilterButton(int x, int y, OnPress onPress, Supplier<Boolean> filterEnabled) ` | 实现调用 ` super(x, y, 16, 16, defaultMessage, onPress, var -> defaultMessage) `<br>[调用处 IFilterScreen.getEnableFilterButtonSupplier](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/IFilterScreen.java#L130) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L22) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.isHovered() `<br>分支 ` (this.isHovered()) ` 内调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L27) |
| ` public void flush() ` | 刷新<br>实现调用 ` Component.translatable("screen.anvilcraft.button." + (this.getFilterEnabled().get() ? "on" : "off")) `<br>实现调用 ` this.getFilterEnabled().get() `<br>实现调用 ` this.getFilterEnabled() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L41) |
| ` @Override public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.filterEnabled.get() `<br>实现调用 ` this.renderTexture(guiGraphics, location, this.getX(), this.getY(), 0, 0, 16, this.width, this.height, 16, 32) `<br>实现调用 ` this.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L48) |
| ` public void renderTexture( GuiGraphics guiGraphics, ResourceLocation texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>实现调用 ` RenderSystem.enableDepthTest() `<br>实现调用 ` guiGraphics.blit(texture, x, y, puOffset, i, width, height, textureWidth, textureHeight) `<br>[调用处 EnableFilterButton.renderWidget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L51) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L54) |
| ` public boolean next() ` | 末尾返回 ` !this.filterEnabled.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L75) |
| ` public Supplier<Boolean> getFilterEnabled() ` | 末尾返回 ` this.filterEnabled `<br>由 Lombok 生成。<br>[调用处 EnableFilterButton.flush](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L45) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/EnableFilterButton.java#L16) |

## FluidDisplayWidget

` public class FluidDisplayWidget extends AbstractWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L32)

类型注解 ` @OnlyIn(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidDisplayWidget( int x, int y, int width, int height, IFluidHandler fluidHandler, TriConsumer<Double, Double, Integer> onClick ) ` | 实现调用 ` super(x, y, width, height, Component.empty()) `<br>实现调用 ` Component.empty() `<br>[调用处 AutoEnchantingTableScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AutoEnchantingTableScreen.java#L130) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L41) |
| ` @Override public boolean isValidClickButton(int button) ` | 末尾返回 ` button == 1 `<br>[调用处 FluidDisplayWidget.mouseClicked](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L158) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L150) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L155) |
| ` @Override public void onClick(double mouseX, double mouseY, int button) ` | 执行 ` this.onClick.accept(mouseX, mouseY, button) `<br>[调用处 FluidDisplayWidget.mouseClicked](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L161) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L169) |
| ` public IFluidHandler getFluidHandler() ` | 末尾返回 ` this.fluidHandler `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L32) |

## FluidRateSlider

` public class FluidRateSlider extends AbstractWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L19)

控制阀流速滑条：0 在最左、配置的管道流速上限在最右，每档 &#123;@value #STEP&#125; mB/tick，末档取流速上限。 交互仿创造发电机 Slider：按住左键可拖动；仅当鼠标悬停在 滑块 上时才变高亮贴图。 由屏幕在 mouseClicked/mouseDragged/mouseReleased 中显式转发到本组件。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation SLIDER ` | 初值 ` SharedTextures.textureGui("misc/slider_like/slider") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L20) |
| ` public static final int STEP ` | 初值 ` 50 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L22) |
| ` public FluidRateSlider(int x, int y, int length, Callback<Integer> callback) ` | 实现调用 ` super(x, y, length, 8, Component.literal("FluidRateSlider")) `<br>实现调用 ` Component.literal("FluidRateSlider") `<br>[调用处 ControlValveScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ControlValveScreen.java#L110) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L32) |
| ` public void setValue(int value) ` | 仅设置值（不回调）。<br>执行 ` this.value = clampSnap(value) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L41) |
| ` public void setExactValue(int value) ` | 执行 ` this.value = Math.clamp(value, 0, FluidPipeNetwork.maxSpeed()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L45) |
| ` public void setValueWithUpdate(int value) ` | 设置值并回调。<br>实现调用 ` clampSnap(value) `<br>实现调用 ` this.update() `<br>[调用处 FluidRateSlider.step](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L58) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L50) |
| ` public void step(int direction) ` | 在当前值基础上增减一档（±&#123;@value #STEP&#125;）。<br>实现调用 ` FluidPipeNetwork.maxSpeed() `<br>实现调用 ` this.setValueWithUpdate(this.value - this.value % STEP) `<br>实现调用 ` this.setValueWithUpdate(this.value + STEP * direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L56) |
| ` public void onClick(double mouseX, double mouseY) ` | 左键按下：命中滑块则进入拖动，同时按位置更新一次。<br>实现调用 ` this.isInKnob(mouseX, mouseY) `<br>实现调用 ` this.applyMouse(mouseX) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L94) |
| ` public void onDrag(double mouseX, double mouseY) ` | 分支 ` (this.scroll) ` 内调用 ` this.applyMouse(mouseX) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L102) |
| ` public void onReleased() ` | 执行 ` this.scroll = false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L108) |
| ` public int getValue() ` | 末尾返回 ` this.value `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidRateSlider.java#L19) |

## OutputDirectionButton

` public class OutputDirectionButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public OutputDirectionButton(int x, int y, OnPress onPress, Direction direction) ` | 实现调用 ` super(x, y, 16, 16, DEFAULT_MESSAGE, onPress, (var) -> DEFAULT_MESSAGE) `<br>[调用处 BaseMachineScreen.getDirectionButtonSupplier](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BaseMachineScreen.java#L70) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L23) |
| ` @SuppressWarnings("UnusedReturnValue") public OutputDirectionButton skip(Direction direction) ` | 跳过某个方向<br>参数 ` direction ` 方向<br>返回 方向按钮<br>返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L34) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.isHovered() `<br>分支 ` (this.isHovered()) ` 内调用 ` guiGraphics.renderTooltip(Minecraft.getInstance().font, components, Optional.empty(), mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L40) |
| ` public void setDirection(Direction direction) ` | 设置方向<br>参数 ` direction ` 方向<br>实现调用 ` Component.translatable("screen.anvilcraft.button.direction." + this.direction.getName()) `<br>实现调用 ` this.direction.getName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L58) |
| ` @Override public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.renderTexture(guiGraphics, location, this.getX(), this.getY(), 0, 0, 16, this.width, this.height, 16, 32) `<br>实现调用 ` this.getX() `<br>实现调用 ` this.getY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L65) |
| ` public void renderTexture( GuiGraphics guiGraphics, ResourceLocation texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>实现调用 ` RenderSystem.enableDepthTest() `<br>实现调用 ` guiGraphics.blit(texture, x, y, puOffset, i, width, height, textureWidth, textureHeight) `<br>[调用处 OutputDirectionButton.renderWidget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L78) |
| ` public Direction next() ` | 末尾返回 ` this.next(this.direction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L99) |
| ` public Direction next(Direction direction) ` | 下一个方向<br>参数 ` direction ` 方向<br>返回 方向<br>末尾返回 ` this.skip.contains(direction1) ? this.next(direction1) : direction1 `<br>[调用处 OutputDirectionButton.next](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L100) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/OutputDirectionButton.java#L109) |

## PocketEffectLayout

` public final class PocketEffectLayout `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isEnabled(AbstractContainerScreen<?> screen) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` PocketInventory.capacity(player) `<br>实现调用 ` creative.isInventoryOpen() `<br>[调用处 JeiPocketEffectAreaMixin.anvilcraft$effectsAbovePockets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiPocketEffectAreaMixin.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L19) |
| ` public static List<MobEffectInstance> visibleEffects() ` | 末尾返回 ` player == null ? List.of() : player.getActiveEffects().stream() .filter(ClientHooks::shouldRenderEffect).sorted().toList() `<br>[调用处 JeiPocketEffectAreaMixin.anvilcraft$effectsAbovePockets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiPocketEffectAreaMixin.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L26) |
| ` public static List<Rect2i> areas(AbstractContainerScreen<?> screen, int count) ` | 末尾返回 ` areas(screen.width, screen.getGuiLeft(), screen.getGuiTop(), screen.getXSize(), screen instanceof CreativeModeInventoryScreen, count) `<br>[调用处 JeiPocketEffectAreaMixin.anvilcraft$effectsAbovePockets](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/JeiPocketEffectAreaMixin.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L32) |
| ` public static List<Rect2i> areas(int screenWidth, int left, int top, int imageWidth, boolean creative, int count) ` | ` (count == 0) ` 成立时提前返回 ` List.of() `<br>末尾返回 ` areas ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/PocketEffectLayout.java#L37) |

## RecipeCycleButton

` public class RecipeCycleButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/RecipeCycleButton.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public RecipeCycleButton(int x, int y, OnPress onPress) ` | 执行 ` super( x, y, 18, 18, Component.translatable("screen.anvilcraft.batch_crafter.switch_recipe"), onPress, DEFAULT_NARRATION ) `<br>[调用处 BatchCrafterScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/BatchCrafterScreen.java#L48) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/RecipeCycleButton.java#L14) |
| ` @Override public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` super.render(graphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.isHovered() `<br>分支 ` (this.visible && this.isHovered()) ` 内调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/RecipeCycleButton.java#L26) |

## SapcetimeSupercomputerCommandSuggestions

` public class SapcetimeSupercomputerCommandSuggestions extends CommandSuggestions `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SapcetimeSupercomputerCommandSuggestions.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SapcetimeSupercomputerCommandSuggestions( Minecraft minecraft, Screen screen, EditBox input, Font font, boolean commandsOnly, boolean onlyShowIfCursorPastError, int lineStartOffset, int suggestionLineLimit, boolean anchorToBottom, int fillColor, BiConsumer<CommandDispatcher<SharedSuggestionProvider>, CommandBuildContext> commandFactory ) ` | [调用处 SpacetimeSupercomputerScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SpacetimeSupercomputerScreen.java#L224) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SapcetimeSupercomputerCommandSuggestions.java#L25) |
| ` @Override public void updateCommandInfo() ` | 实现调用 ` this.input.getValue() `<br>实现调用 ` this.currentParse.getReader().getString().equals(s) `<br>实现调用 ` this.currentParse.getReader().getString() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SapcetimeSupercomputerCommandSuggestions.java#L69) |
| ` @Override public void renderUsage(GuiGraphics guiGraphics) ` | 实现调用 ` guiGraphics.drawString(this.font, formattedcharsequence, this.commandUsagePosition, j + 2, -1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SapcetimeSupercomputerCommandSuggestions.java#L117) |

## SilencerButton

` public class SilencerButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L21)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SilencerButton( int x, int y, int index, int variant, OnPress onPress, ActiveSilencerScreen parent, String textureVariant ) ` | 主动静音器 screen 的按钮<br>实现调用 ` super(x, y, 10, 10, Component.literal(""), onPress, var -> parent.getSoundTextAt(index, variant).copy()) `<br>实现调用 ` Component.literal("") `<br>实现调用 ` SharedTextures.textureGui("machine/active_silencer/button_%s".formatted(textureVariant)) `<br>[调用处 ActiveSilencerScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/ActiveSilencerScreen.java#L269) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L33) |
| ` @Override public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.parent.getFilterText() `<br>实现调用 ` this.parent.getSoundIdAt(this.index, this.variant) `<br>实现调用 ` this.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L59) |
| ` public void renderTexture( GuiGraphics guiGraphics, ResourceLocation texture, int x, int y, int puOffset, int pvOffset, int textureDifference, int width, int height, int textureWidth, int textureHeight ) ` | 实现调用 ` this.isHovered() `<br>实现调用 ` RenderSystem.enableDepthTest() `<br>实现调用 ` guiGraphics.blit(texture, x, y, puOffset, i, width, height, textureWidth, textureHeight) `<br>[调用处 SilencerButton.renderWidget](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L64) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L107) |
| ` public int getIndex() ` | 末尾返回 ` this.index `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SilencerButton.java#L21) |

## SimpleIconButton

` public class SimpleIconButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SimpleIconButton.java#L13)

简单的图标按钮，用于替代ItemCollectorButton

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SimpleIconButton(int x, int y, String variant, OnPress onPress) ` | 创建简单图标按钮<br>参数 ` x ` 按钮X坐标<br>参数 ` y ` 按钮Y坐标<br>参数 ` variant ` 贴图变体（如 "minus", "add" 等）<br>参数 ` onPress ` 点击事件<br>实现调用 ` super(x, y, 10, 10, Component.literal(""), onPress, DEFAULT_NARRATION) `<br>实现调用 ` Component.literal("") `<br>实现调用 ` SharedTextures.textureGui("machine/button_%s".formatted(variant)) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SimpleIconButton.java#L27) |
| ` @Override public void renderWidget(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.isHovered() `<br>实现调用 ` RenderSystem.enableDepthTest() `<br>实现调用 ` this.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SimpleIconButton.java#L34) |

## Slider

` public class Slider extends AbstractWidget `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final ResourceLocation SLIDER ` | 初值 ` SharedTextures.textureGui("misc/slider_like/slider") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L20) |
| ` public final Callback<Integer> callback ` | 字段类型为 ` Callback<Integer> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L36) |
| ` public static boolean scrolling ` | 初值 ` false ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L41) |
| ` public Slider( int x, int y, int min, int max, int length, Function<Double, Double> valueFunction, Function<Integer, Double> argFunction, Callback<Integer> callback ) ` | 构建一个Slider<br>参数 ` x ` X<br>参数 ` y ` Y<br>参数 ` min ` 最小值<br>参数 ` max ` 最大值<br>参数 ` length ` 长度<br>参数 ` callback ` 更新回调<br>实现调用 ` super(x, y, length, 8, Component.literal("Slider")) `<br>实现调用 ` Component.literal("Slider") ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L53) |
| ` public Slider( int x, int y, int min, int max, int length, Callback<Integer> callback ) ` | 执行 ` this(x, y, min, max, length, i -> Slider.defaultValueFunction(i, min, max), i -> Slider.defaultArgFunction(i, min, max), callback) `<br>[调用处 SliderScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SliderScreen.java#L44) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L74) |
| ` public double getProportion() ` | 末尾返回 ` Math.clamp(this.proportion, 0.0, 1.0) `<br>[调用处 Slider.isInSlider](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L169) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L94) |
| ` public void setProportion(double proportion) ` | 执行 ` this.proportion = Math.clamp(proportion, 0.0, 1.0) `<br>[调用处 Slider.onDrag](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L157) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L98) |
| ` public static double defaultValueFunction(double proportion, int min, int max) ` | 末尾返回 ` (max - min) * proportion + min `<br>[调用处 CreativeLaserScreen.LinearSlider.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/CreativeLaserScreen.java#L297) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L102) |
| ` public static double defaultArgFunction(int value, int min, int max) ` | ` (value == 0) ` 成立时提前返回 ` Math.clamp(((double) value - min) / (max - min), 0.0, 1.0) `<br>末尾返回 ` Math.clamp(((value >= 0 ? v : -v) - min) / (max - min), 0.0, 1.0) `<br>[调用处 Slider.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L106) |
| ` public void setValue(int value) ` | 执行 ` this.proportion = this.argFunction.apply(value) `<br>[调用处 Slider.setValueWithUpdate](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L131) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L112) |
| ` public int getValue() ` | ` (v == 0) ` 成立时提前返回 ` 0 `<br>末尾返回 ` v > 0 ? (int) Math.pow(2, Math.abs(v - 1)) : -(int) Math.pow(2, Math.abs(v + 1)) `<br>[调用处 Slider.update](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L136) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L116) |
| ` public int getAddValue(int value) ` | ` (Math.abs(value) < 4) ` 成立时提前返回 ` 1 `<br>末尾返回 ` (int) Math.pow(2, Math.floor(Math.log(Math.abs(value)) / Math.log(2)) - 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L122) |
| ` public void setValueWithUpdate(int value) ` | 设置 Value 并更新<br>实现调用 ` this.setValue(value) `<br>实现调用 ` this.update() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L130) |
| ` @SuppressWarnings("deprecation") public void onClick(double mouseX, double mouseY) ` | 实现调用 ` super.onClick(mouseX, mouseY) `<br>实现调用 ` this.isInSlider(mouseX, mouseY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L139) |
| ` public void onDrag(double mouseX, double mouseY, double dragX, double dragY) ` | 实现调用 ` super.onDrag(mouseX, mouseY, dragX, dragY) `<br>分支 ` (scrolling \|\| this.scroll) ` 内调用 ` this.setProportion(offset) `<br>分支 ` (this.scroll) ` 内调用 ` this.update() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L149) |
| ` public void onReleased() ` | 分支 ` (this.scroll) ` 内调用 ` this.update() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L162) |
| ` @Override public void render(GuiGraphics guiGraphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.isInSlider(mouseX, mouseY) `<br>实现调用 ` this.renderWidget(guiGraphics, mouseX, mouseY, partialTick) `<br>实现调用 ` this.updateTooltip() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L173) |
| ` public void setMin(final int min) ` | 执行 ` this.min = min `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L19) |
| ` public int getMin() ` | 末尾返回 ` this.min `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L19) |
| ` public void setMax(final int max) ` | 执行 ` this.max = max `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L19) |
| ` public int getMax() ` | 末尾返回 ` this.max `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/Slider.java#L19) |

## StructureScannerButtonState

` public final class StructureScannerButtonState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L4)

成型舱式三段/五段按钮及六段文件按钮状态；只有有效的松开操作才提交动作。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StructureScannerButtonState(int frames) ` | ` (frames != 3 && frames != 5 && frames != 6) ` 成立时抛出 ` new IllegalArgumentException("Expected three, five or six frames") `<br>[调用处 SmartBlockPlacerScreen.ModeButton.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/SmartBlockPlacerScreen.java#L356) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L8) |
| ` public boolean press(int input, boolean enabled) ` | ` (!enabled \|\| input < 0 \|\| this.pressedInput != -1) ` 成立时提前返回 ` false `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L13) |
| ` public boolean release(int input, boolean enabled, boolean inside) ` | ` (!this.pressedBy(input)) ` 成立时提前返回 ` false `<br>末尾返回 ` enabled && inside ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L19) |
| ` public boolean pressedBy(int input) ` | 末尾返回 ` input >= 0 && this.pressedInput == input `<br>[调用处 StructureScannerButtonState.release](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L25) |
| ` public boolean keyboardPressed() ` | 末尾返回 ` this.pressedInput > 0 `<br>[调用处 StructureScannerButtonState.frame](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L29) |
| ` public void cancel() ` | 执行 ` this.pressedInput = -1 `<br>[调用处 StructureScannerButtonState.release](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L21) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L33) |
| ` public int frame(boolean enabled, boolean hovered, boolean selected) ` | ` (this.pressedInput != -1 && (this.frames == 5 \|\| hovered \|\| this.keyboardPressed())) ` 成立时提前返回 ` 2 `<br>` (this.frames == 5 && selected) ` 成立时提前返回 ` hovered ? 4 : 3 `<br>末尾返回 ` hovered ? 1 : 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/StructureScannerButtonState.java#L37) |

## SwitchableButton

` public class SwitchableButton extends Button `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public SwitchableButton( int x, int y, int width, int height, List<ResourceLocation> textures, int texYDiff, int textureWidth, int textureHeight, OnPress onPress ) ` | 执行 ` this(x, y, width, height, textures, texYDiff, textureWidth, textureHeight, onPress, List.of()) `<br>[调用处 StorageScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StorageScreen.java#L555) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L27) |
| ` public SwitchableButton( int x, int y, int width, int height, List<ResourceLocation> textures, int texYDiff, int textureWidth, int textureHeight, OnPress onPress, List<Component> message ) ` | 实现调用 ` super(x, y, width, height, Component.empty(), onPress, Button.DEFAULT_NARRATION) `<br>实现调用 ` Component.empty() `<br>[调用处 AdvancedComparatorScreen.init](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/AdvancedComparatorScreen.java#L70) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L41) |
| ` @Override public void render(GuiGraphics graphics, int mouseX, int mouseY, float partialTick) ` | 实现调用 ` this.isMouseOver(mouseX, mouseY) `<br>实现调用 ` this.textures.size() `<br>分支 ` (this.current < this.textures.size()) ` 内调用 ` this.textures.get(this.current) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L54) |
| ` @Override public Component getMessage() ` | ` (this.message.isEmpty()) ` 成立时提前返回 ` Component.empty() `<br>末尾返回 ` this.message.get(this.getCurrent()) `<br>[调用处 SwitchableButton.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L83) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L88) |
| ` @Override public void onClick(double mouseX, double mouseY) ` | 执行 ` this.onPress(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L101) |
| ` @Override public void onClick(double mouseX, double mouseY, int button) ` | 执行 ` this.onPress(button) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L106) |
| ` @Override public void onPress() ` | 执行 ` this.onPress(0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L111) |
| ` public void switchToNext() ` | 实现调用 ` this.textures.size() `<br>实现调用 ` ((OnPress) this.onPress).onPress(this, this.current) `<br>[调用处 SwitchableButton.onPress](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L118) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L124) |
| ` public void switchToPrev() ` | 分支 ` (this.current < 0) ` 内调用 ` this.textures.size() `<br>实现调用 ` ((OnPress) this.onPress).onPress(this, this.current) `<br>[调用处 SwitchableButton.onPress](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L120) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L132) |
| ` public int getCurrent() ` | 末尾返回 ` this.current `<br>由 Lombok 生成。<br>[调用处 SwitchableButton.getMessage](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L93) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L17) |
| ` public void setCurrent(final int current) ` | 执行 ` this.current = current `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/gui/component/SwitchableButton.java#L17) |
