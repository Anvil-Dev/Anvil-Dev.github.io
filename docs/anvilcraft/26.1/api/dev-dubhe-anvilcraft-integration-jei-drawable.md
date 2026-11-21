# dev.dubhe.anvilcraft.integration.jei.drawable



## DrawableBlockStateIcon

` public class DrawableBlockStateIcon implements IDrawable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/DrawableBlockStateIcon.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DrawableBlockStateIcon(BlockState upState, BlockState downState) ` | 执行 ` this(upState, downState, null, null) `<br>[调用处 BeaconConversionCategory.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/BeaconConversionCategory.java#L54) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/DrawableBlockStateIcon.java#L18) |
| ` public static DrawableBlockStateIcon alternatingUp( BlockState upState, BlockState downState, BlockState alternateUpState ) ` | 末尾返回 ` new DrawableBlockStateIcon(upState, downState, alternateUpState, null) `<br>[调用处 FastCookingCategory.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/anvil/liquid/FastCookingCategory.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/DrawableBlockStateIcon.java#L34) |
| ` public static DrawableBlockStateIcon alternatingDown( BlockState upState, BlockState downState, BlockState alternateDownState ) ` | 末尾返回 ` new DrawableBlockStateIcon(upState, downState, null, alternateDownState) `<br>[调用处 SolidLiquidCategory.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/SolidLiquidCategory.java#L53) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/DrawableBlockStateIcon.java#L42) |
| ` public static DrawableBlockStateIcon alternatingBoth( BlockState upState, BlockState downState, BlockState alternateUpState, BlockState alternateDownState ) ` | 末尾返回 ` new DrawableBlockStateIcon(upState, downState, alternateUpState, alternateDownState) `<br>[调用处 SuperHeatingCategory.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/anvil/liquid/SuperHeatingCategory.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/DrawableBlockStateIcon.java#L50) |
| ` @Override public int getWidth() ` | 末尾返回 ` 16 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/DrawableBlockStateIcon.java#L59) |
| ` @Override public int getHeight() ` | 末尾返回 ` 16 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/DrawableBlockStateIcon.java#L64) |
| ` @Override public void draw(GuiGraphicsExtractor graphics, int offsetX, int offsetY) ` | 实现调用 ` graphics.pose() `<br>实现调用 ` pose.pushMatrix() `<br>实现调用 ` pose.translate(0F, -0.5F) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/DrawableBlockStateIcon.java#L69) |

## JeiButton

` public class JeiButton<T> implements IJeiGuiEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/JeiButton.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public JeiButton(int buttonX, int buttonY, int size, Consumer<T> onClickCallback, T metadataKey) ` | [调用处 MultiBlock4DCategory.createRecipeExtras](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/category/multiblock/MultiBlock4DCategory.java#L276) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/JeiButton.java#L16) |
| ` @Override public ScreenRectangle getArea() ` | 末尾返回 ` new ScreenRectangle(new ScreenPosition(this.buttonX, this.buttonY), this.size, this.size) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/JeiButton.java#L24) |
| ` @Override public boolean mouseClicked(double mouseX, double mouseY, int button) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/jei/drawable/JeiButton.java#L29) |
