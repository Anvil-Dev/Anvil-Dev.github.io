# dev.dubhe.anvilcraft.client.support（AmuletSelectorSupport 至 GravitationalLensSupport）



## AmuletSelectorSupport

` public class AmuletSelectorSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Identifier BACKGROUND ` | 初值 ` SharedTextures.bg("misc", "amulet_box") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L18) |
| ` public static final int BACKGROUND_WIDTH ` | 初值 ` 78 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L19) |
| ` public static final int BACKGROUND_HEIGHT ` | 初值 ` 80 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L20) |
| ` public static void setHoveredTarget(BoxSelectionTarget target) ` | 执行 ` AmuletSelectorSupport.target = target `<br>[调用处 ClientEventListener.updateBoxSelectors](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L248) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L28) |
| ` public static void render(GuiGraphicsExtractor graphics, int x, int y) ` | 分支 ` (AmuletSelectorSupport.layout != null && AmuletSelectorSupport.contents != null) ` 内调用 ` AmuletSelectorSupport.layout.extract(graphics, left, top, AmuletSelectorSupport.contents) `<br>[调用处 ClientEventListener.onRenderTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L270) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L32) |
| ` public static boolean hasHoveringItem() ` | 末尾返回 ` !AmuletSelectorSupport.currentHoveringItemStack.isEmpty() `<br>[调用处 ClientEventListener.onMouseScrolled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L169) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L52) |
| ` public static void setCurrentHoveringItemStack(ItemStack itemStack) ` | 实现调用 ` ItemStack.isSameItemSameComponents(AmuletSelectorSupport.currentHoveringItemStack, itemStack) `<br>实现调用 ` itemStack.isEmpty() `<br>实现调用 ` itemStack.getOrDefault(ModComponents.BOX_CONTENTS, BoxContents.EMPTY) `<br>[调用处 ClientEventListener.updateBoxSelectors](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L249) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L56) |
| ` public static void mouseScrolled(int amount) ` | 实现调用 ` AmuletSelectorSupport.getCurrentSelectedIndex() `<br>分支 ` (amount > 0) ` 内调用 ` AmuletSelectorSupport.next() `<br>分支 ` (amount < 0) ` 内调用 ` AmuletSelectorSupport.previous() `<br>[调用处 ClientEventListener.onMouseScrolled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L171) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L82) |
| ` public static void previous() ` | 执行 ` AmuletSelectorSupport.selectDelta(-1) `<br>[调用处 AmuletSelectorSupport.mouseScrolled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L93) |
| ` public static void next() ` | 执行 ` AmuletSelectorSupport.selectDelta(1) `<br>[调用处 AmuletSelectorSupport.mouseScrolled](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L85) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L97) |
| ` public static void selectDelta(int delta) ` | 实现调用 ` AmuletSelectorSupport.getCurrentSelectedIndex() `<br>实现调用 ` AmuletSelectorSupport.setCurrentSelectedIndex(index) `<br>[调用处 AmuletSelectorSupport.previous](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L94) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L101) |
| ` public AmuletSelectorSupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L17) |

## AmuletSelectorSupport.Layout

` public enum Layout `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L128)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` EMPTY ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L129) |
| ` NO_AMULET ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L139) |
| ` BIG_AMULET_1 ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L154) |
| ` SMALL_AMULET_1 ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L185) |
| ` SMALL_AMULET_2 ` | 声明于枚举 ` AmuletSelectorSupport.Layout ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L216) |
| ` public abstract void extract(GuiGraphicsExtractor graphics, int x, int y, BoxContents content) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L321) |
| ` public static Layout layout(BoxContents content) ` | ` (content.isEmpty()) ` 成立时提前返回 ` Layout.EMPTY `<br>` (content.isAmuletEmpty()) ` 成立时提前返回 ` Layout.NO_AMULET `<br>` (firstAmulet == null) ` 成立时提前返回 ` Layout.EMPTY `<br>` (firstBigAmulet) ` 成立时提前返回 ` Layout.BIG_AMULET_1 `<br>末尾返回 ` Layout.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L323) |
| ` public static Layout[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L128) |
| ` public static Layout valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AmuletSelectorSupport.java#L128) |

## AnvilParticleManager

` public class AnvilParticleManager `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void redstoneEmp(ClientLevel level, BlockPos center, int radius, List<BlockPos> affectedTorches) ` | 实现调用 ` AnvilParticleManager.setLevel(level) `<br>实现调用 ` pos.getCenter() `<br>实现调用 ` center.getCenter() `<br>[调用处 RedstoneEmpEffectPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/RedstoneEmpEffectPacket.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L24) |
| ` public static void giantAnvilShock(ClientLevel level, BlockPos center, int radius) ` | 实现调用 ` AnvilParticleManager.setLevel(level) `<br>实现调用 ` AnvilParticleManager.SHOCKWAVES.add(new GiantAnvilShockwave(center, radius)) `<br>[调用处 GiantAnvilShockEffectPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/GiantAnvilShockEffectPacket.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L33) |
| ` public static void tick() ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` AnvilParticleManager.setLevel(level) `<br>实现调用 ` minecraft.isPaused() `<br>[调用处 ClientEventListener.onAnvilEffectTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L145) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L38) |
| ` public AnvilParticleManager() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/AnvilParticleManager.java#L17) |

## BoxSelectionTarget

` public record BoxSelectionTarget(int menuId, int slotIndex) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final BoxSelectionTarget NONE ` | 初值 ` new BoxSelectionTarget(-1, -1) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L12) |
| ` public static BoxSelectionTarget of(AbstractContainerScreen<?> screen, Slot slot) ` | ` (screen instanceof CreativeModeInventoryScreen \|\| !slot.isActive()) ` 成立时提前返回 ` NONE `<br>末尾返回 ` index < 0 ? NONE : new BoxSelectionTarget(screen.getMenu().containerId, index) `<br>[调用处 ClientEventListener.updateBoxSelectors](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L244) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L14) |
| ` public void send(ItemStack expected, int selection) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.getConnection() `<br>实现调用 ` screen.getMenu() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L20) |
| ` public BoxSelectionTarget(int menuId, int slotIndex) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L11) |
| ` public int menuId() ` | 读取 record 分量 ` menuId ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L11) |
| ` public int slotIndex() ` | 读取 record 分量 ` slotIndex ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/BoxSelectionTarget.java#L11) |

## DimensionNameSupport

` public final class DimensionNameSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DimensionNameSupport.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Component getName(Identifier dimension) ` | 末尾返回 ` Component.translatableWithFallback(key, dimension.toString()) `<br>[调用处 MDMineralFountainRecipeComponent.dimensionName](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/recipe/MDMineralFountainRecipeComponent.java#L220) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DimensionNameSupport.java#L12) |

## DiskDisplaySupport

` public final class DiskDisplaySupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L62)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static ItemStack getImportedDisplay(StructureSnapshot snapshot) ` | ` (level == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (choices == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` matchStructure(data, StructureSnapshotCodec.write(snapshot), level.registryAccess(), choices) `<br>[调用处 StructureScannerScreen.onImportComplete](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureScannerScreen.java#L1545) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L73) |
| ` public static ItemStack getScannedDisplay(StructureScannerBlockEntity scanner) ` | ` (level == null \|\| !scanner.isScanComplete()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>[调用处 StructureScannerScreen.updateNameInputEditable](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/StructureScannerScreen.java#L988) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L87) |
| ` public static ItemStack getDisplay(ItemStack stack) ` | ` (stack.is(ModItems.STRUCTURE_DISK) && marker != null) ` 成立时提前返回 ` marker.stored() `<br>` (stack.is(ModItems.DISK)) ` 成立时提前返回 ` recordedBlock(stack) `<br>` (!stack.is(ModItems.STRUCTURE_DISK)) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (level == null \|\| data == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (cached.isEmpty()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>[调用处 DiskItemRenderer.extractArgument](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L102) |
| ` public static ItemStack recordedBlock(ItemStack stack) ` | ` (data == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (source == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (type == null) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (type.isValid(sameName.defaultBlockState()) && sameName.asItem() != Items.AIR) ` 成立时提前返回 ` sameName.asItem().getDefaultInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L133) |
| ` @SubscribeEvent public static void recipesUpdated(RecipesReceivedEvent event) ` | 事件总线派发 ` RecipesReceivedEvent ` 时调用。<br>实现调用 ` event.getRecipeMap() `<br>实现调用 ` PATTERNS.clear() `<br>实现调用 ` RESULTS.invalidateAll() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L152) |
| ` @SubscribeEvent public static void tagsUpdated(TagsUpdatedEvent.ClientPacketReceived event) ` | 事件总线派发 ` TagsUpdatedEvent.ClientPacketReceived ` 时调用。<br>执行 ` RESULTS.invalidateAll() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L160) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` BlueprintClientFiles.clear() `<br>实现调用 ` PATTERNS.clear() `<br>实现调用 ` RESULTS.invalidateAll() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L165) |
| ` public static Optional<Pattern> pattern(MultiblockDefinition definition, ItemStack result) ` | ` (result.isEmpty()) ` 成立时提前返回 ` Optional.empty() `<br>` (size == 0) ` 成立时提前返回 ` Optional.empty() `<br>末尾返回 ` Optional.of(new Pattern(size, serialized, result.copyWithCount(1))) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L189) |
| ` public static ItemStack conversionResult(MultiblockConversionRecipe recipe) ` | ` (center != null && center.asItem() != Items.AIR) ` 成立时提前返回 ` center.asItem().getDefaultInstance() `<br>末尾返回 ` outputs.size() == 1 ? outputs.iterator().next().getDefaultInstance() : ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L203) |
| ` public static ItemStack matchStructure( StructureDiskData data, CompoundTag tag, HolderLookup.Provider registries, List<Pattern> choices ) ` | ` (choices.stream().noneMatch(pattern -> pattern.size == data.sizeX())) ` 成立时提前返回 ` ItemStack.EMPTY `<br>` (parsed.isEmpty()) ` 成立时提前返回 ` ItemStack.EMPTY `<br>末尾返回 ` ItemStack.EMPTY ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L221) |

## DiskDisplaySupport.Pattern

` public record Pattern(int size, DefinitionSerialization definition, ItemStack result) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L319)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Pattern(int size, DefinitionSerialization definition, ItemStack result) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L319) |
| ` public int size() ` | 读取 record 分量 ` size ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L319) |
| ` public DefinitionSerialization definition() ` | 读取 record 分量 ` definition ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L319) |
| ` public ItemStack result() ` | 读取 record 分量 ` result ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L319) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L319) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L319) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/DiskDisplaySupport.java#L319) |

## EnchantedGoldBlockGlints

` public final class EnchantedGoldBlockGlints `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/EnchantedGoldBlockGlints.java#L27)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static EnchantedGoldBlockGlints getInstance() ` | 末尾返回 ` INSTANCE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/EnchantedGoldBlockGlints.java#L37) |
| ` @SubscribeEvent public static void frame(RenderLevelStageEvent.AfterOpaqueFeatures event) ` | 事件总线派发 ` RenderLevelStageEvent.AfterOpaqueFeatures ` 时调用。<br>实现调用 ` RenderSystem.getModelViewStack() `<br>实现调用 ` matrices.pushMatrix().identity() `<br>实现调用 ` matrices.pushMatrix() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/EnchantedGoldBlockGlints.java#L41) |
| ` public void render(PoseStack pose, MultiBufferSource buffers, Vec3 camera) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.options.getEffectiveRenderDistance() `<br>实现调用 ` EnchantedGoldBlockPositions.getPositions().iterator() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/EnchantedGoldBlockGlints.java#L56) |

## FeatureRendererSupport

` public class FeatureRendererSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FeatureRendererSupport.java#L22)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static BlockStateModelTessellateState createTessellation( StandaloneModelKey<BlockStateModel> key, boolean lighting ) ` | 末尾返回 ` FeatureRendererSupport.createTessellation( key, false, lighting ) `<br>[调用处 CFARenderer.extractRings](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L375) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FeatureRendererSupport.java#L26) |
| ` public static BlockStateModelTessellateState createTessellation( StandaloneModelKey<BlockStateModel> key, boolean translucent, boolean lighting ) ` | 末尾返回 ` BlockStateModelRenderer.INSTANCE.prepare(key, translucent, lighting) `<br>[调用处 CFARenderer.extractMegastructureRings](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/CFARenderer.java#L591) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FeatureRendererSupport.java#L37) |
| ` public static BlockModelRenderState initialize(StandaloneModelKey<BlockStateModel> standalone, BlockEntity be) ` | 末尾返回 ` FeatureRendererSupport.initialize(standalone, be, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FeatureRendererSupport.java#L45) |
| ` public static BlockModelRenderState initialize(BlockState blockState, BlockEntity be) ` | ` (level == null) ` 成立时提前返回 ` state `<br>末尾返回 ` state ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FeatureRendererSupport.java#L49) |
| ` public static BlockModelRenderState initialize( StandaloneModelKey<BlockStateModel> standalone, BlockEntity be, boolean translucent ) ` | 初始化独立方块模型，并明确指定其是否使用半透明方块渲染层。<br>` (level == null) ` 成立时提前返回 ` state `<br>末尾返回 ` state `<br>[调用处 HypercubeBERenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/HypercubeBERenderer.java#L43) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FeatureRendererSupport.java#L67) |
| ` public static ItemClusterRenderState initialize(ItemStack stack, ItemModelResolver resolver) ` | 末尾返回 ` initialize(stack, resolver, null, ItemClusterRenderState.getSeedForItemStack(stack)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FeatureRendererSupport.java#L91) |
| ` public static ItemClusterRenderState initialize(ItemStack stack, ItemModelResolver resolver, @Nullable Level level, int seed) ` | 末尾返回 ` state `<br>[调用处 FishTankRenderer.extractRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/blockentity/FishTankRenderer.java#L119) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FeatureRendererSupport.java#L95) |
| ` public FeatureRendererSupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FeatureRendererSupport.java#L22) |

## FilterSelectorSupport

` public class FilterSelectorSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FilterSelectorSupport.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void setCurrentFilterStack(ItemStack filter) ` | 实现调用 ` ItemStack.isSameItemSameComponents(FilterSelectorSupport.currentFilter, filter) `<br>实现调用 ` filter.isEmpty() `<br>实现调用 ` filter.getOrDefault(ModComponents.FILTER_CONTENT, new FilterContent()) `<br>[调用处 ClientEventListener.onRenderTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L276) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FilterSelectorSupport.java#L23) |
| ` public static void render(GuiGraphicsExtractor graphics, int x, int y) ` | 实现调用 ` SharedTextures.bg("misc", "filter") `<br>实现调用 ` FilterSelectorSupport.content.list().size() `<br>实现调用 ` FilterSelectorSupport.content.list() `<br>[调用处 ClientEventListener.onRenderTooltip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L277) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FilterSelectorSupport.java#L38) |
| ` public FilterSelectorSupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FilterSelectorSupport.java#L12) |

## FittedItemRenderer

` public final class FittedItemRenderer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L50)

使用独立队列捕获 GUI 姿态，将裁切后的透明图标贴到物品表面。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isRenderingPreview() ` | 末尾返回 ` captureDepth > 0 `<br>[调用处 DiskItemRenderer.extractArgument](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L68) |
| ` public static float frontZ(ItemStack stack) ` | 末尾返回 ` Float.isFinite(maximum) ? maximum : 8.5F / 16 `<br>[调用处 DiskItemRenderer.extractArgument](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L24) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L72) |
| ` public static @Nullable Icon prepare(ItemStack stack) ` | ` (stack.isEmpty() \|\| isRenderingPreview()) ` 成立时提前返回 ` null `<br>末尾返回 ` icon `<br>[调用处 DiskItemRenderer.extractArgument](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L90) |
| ` @SubscribeEvent public static void frame(RenderFrameEvent.Pre event) ` | 事件总线派发 ` RenderFrameEvent.Pre ` 时调用。<br>实现调用 ` RETIRED_TEXTURES.entrySet() `<br>实现调用 ` REQUESTS.isEmpty() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L124) |
| ` @SubscribeEvent public static void reload(ModelEvent.BakingCompleted event) ` | 事件总线派发 ` ModelEvent.BakingCompleted ` 时调用。<br>执行 ` clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L145) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>执行 ` clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L150) |
| ` public static void clear() ` | 实现调用 ` REQUESTS.clear() `<br>实现调用 ` IN_FLIGHT.clear() `<br>实现调用 ` ICONS.values().forEach(icon -> Minecraft.getInstance().getTextureManager().release(icon.texture)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L155) |
| ` public static void submit(Icon icon, float size, PoseStack pose, SubmitNodeCollector collector, int light, int overlay, boolean foil) ` | 分支 ` (foil) ` 内调用 ` RenderTypes.entityGlint() `<br>[调用处 DiskItemRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/DiskItemRenderer.java#L35) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L167) |

## FittedItemRenderer.Icon

` public record Icon(Identifier texture, RenderType renderType, int width, int height, Object modelIdentity, boolean animated, long createdAt) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L235)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Icon(Identifier texture, RenderType renderType, int width, int height, Object modelIdentity, boolean animated, long createdAt) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L235) |
| ` public Identifier texture() ` | 读取 record 分量 ` texture ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L236) |
| ` public RenderType renderType() ` | 读取 record 分量 ` renderType ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L236) |
| ` public int width() ` | 读取 record 分量 ` width ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L237) |
| ` public int height() ` | 读取 record 分量 ` height ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L237) |
| ` public Object modelIdentity() ` | 读取 record 分量 ` modelIdentity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L237) |
| ` public boolean animated() ` | 读取 record 分量 ` animated ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L237) |
| ` public long createdAt() ` | 读取 record 分量 ` createdAt ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L237) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L235) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L235) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FittedItemRenderer.java#L235) |

## FluidBucketGeometry

` public final class FluidBucketGeometry `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidBucketGeometry.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static QuadCollection bake( ModelBaker baker, Material.Baked mask, BakedQuad.MaterialInfo material, ModelState state, ExtraFaceData faceData ) ` | 末尾返回 ` result.build() `<br>[调用处 ModFluidBucketModelMixin.anvilcraft$sourceFluidGeometry](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ModFluidBucketModelMixin.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidBucketGeometry.java#L27) |

## FluidRenderHelper

` public final class FluidRenderHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L42)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final FluidRenderHelper INSTANCE ` | 初值 ` new FluidRenderHelper() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L43) |
| ` public static FluidModel getModel(FluidStateModelSet set, Fluid fluid) ` | 末尾返回 ` accessor.getModelByFluid().getOrDefault(fluid, accessor.getMissingModel()) `<br>[调用处 FluidDisplayWidget.extractWidgetRenderState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/component/FluidDisplayWidget.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L45) |
| ` public static void submitFluidBox( FluidResource resource, int amount, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, float opacity, PoseStack pose, SubmitNodeCollector collector, int light, RenderType translucent ) ` | 执行 ` submitFluidBox(resource, amount, minX, minY, minZ, maxX, maxY, maxZ, opacity, pose, collector, light, translucent, true, false) `<br>[调用处 FluidTankRenderUtil.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidTankRenderUtil.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L50) |
| ` public static void submitFluidBox( FluidResource resource, int amount, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, float opacity, PoseStack pose, SubmitNodeCollector collector, int light, RenderType translucent, boolean renderBottom, boolean flowingSides ) ` | 实现调用 ` getModel(Minecraft.getInstance().getModelManager().getFluidStateModelSet(), resource.getFluid()) `<br>实现调用 ` Minecraft.getInstance().getModelManager().getFluidStateModelSet() `<br>实现调用 ` Minecraft.getInstance().getModelManager() `<br>[调用处 FluidRenderLayers.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/FluidRenderLayers.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L58) |
| ` public static RenderType renderType(FluidResource resource, RenderType translucent) ` | 末尾返回 ` resource.is(NeoForgeMod.MILK.get()) ? RenderTypes.cutoutMovingBlock() : translucent `<br>[调用处 StorageFluidPortItemRenderer.submit](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/item/StorageFluidPortItemRenderer.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L74) |
| ` public void renderFluidBox( TextureAtlasSprite sprite, FluidResource fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, int color, VertexConsumer builder, PoseStack.Pose pose, int light, boolean renderBottom, boolean invertGasses ) ` | 执行 ` this.renderFluidBox(sprite, fluid, minX, minY, minZ, maxX, maxY, maxZ, color, builder, pose, light, renderBottom, invertGasses, 1) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L78) |
| ` public void renderFluidBox( TextureAtlasSprite sprite, FluidResource fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, int color, VertexConsumer builder, PoseStack.Pose pose, int light, boolean renderBottom, boolean invertGasses, float opacity ) ` | 实现调用 ` Set.of() `<br>实现调用 ` Set.of(Direction.DOWN) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L97) |
| ` public void renderFluidBox( TextureAtlasSprite sprite, FluidResource fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, int color, VertexConsumer builder, PoseStack.Pose pose, int light, Set<Direction> skippedSides, boolean invertGasses, float opacity ) ` | 执行 ` this.renderFluidBox(sprite, fluid, minX, minY, minZ, maxX, maxY, maxZ, color, builder, pose, light, skippedSides, invertGasses, opacity, sprite) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L106) |
| ` public void renderFluidBox( TextureAtlasSprite sprite, FluidResource fluid, float minX, float minY, float minZ, float maxX, float maxY, float maxZ, int color, VertexConsumer builder, PoseStack.Pose pose, int light, Set<Direction> skippedSides, boolean invertGasses, float opacity, TextureAtlasSprite sideSprite ) ` | 实现调用 ` Math.max(blockLightIn, fluid.getFluidType().getLightLevel()) `<br>实现调用 ` fluid.getFluidType().getLightLevel() `<br>实现调用 ` fluid.getFluidType() `<br>[调用处 FluidRenderHelper.renderFluidBox](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L111) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L115) |
| ` public static void renderStillTiledFace( Direction dir, float left, float down, float right, float up, float depth, VertexConsumer builder, PoseStack.Pose pose, int light, int color, TextureAtlasSprite texture ) ` | 执行 ` FluidRenderHelper.renderTiledFace(dir, left, down, right, up, depth, builder, pose, light, color, texture, 1) `<br>[调用处 FluidRenderHelper.renderFluidBox](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L145) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L165) |
| ` public static void renderTiledFace( Direction dir, float left, float down, float right, float up, float depth, VertexConsumer builder, PoseStack.Pose pose, int light, int color, TextureAtlasSprite texture, float textureScale ) ` | 实现调用 ` dir.getAxisDirection() `<br>实现调用 ` dir.getAxis().isHorizontal() `<br>实现调用 ` dir.getAxis() `<br>[调用处 FluidRenderHelper.renderStillTiledFace](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L169) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L172) |
| ` public FluidRenderHelper() ` | Java 提供的无参构造器。<br>[调用处 FluidRenderHelper](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L43) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/FluidRenderHelper.java#L42) |

## GatewayGuiProjection

` public final class GatewayGuiProjection `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GatewayGuiProjection.java#L20)

保留物品图集和 PIP 渲染，在提交折跃门顶点时还原完整界面的投影坐标。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isProjected(TrackingItemStackRenderState state) ` | ` (!(state.getModelIdentity() instanceof List<?> elements)) ` 成立时提前返回 ` false `<br>末尾返回 ` false `<br>[调用处 ScaledGuiItemPipMixin.anvilcraft$projectGateway](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ScaledGuiItemPipMixin.java#L27) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GatewayGuiProjection.java#L27) |
| ` public static void mark(TrackingItemStackRenderState state, Matrix3x2f pose, int x, int y) ` | 实现调用 ` state.getModelIdentity() `<br>实现调用 ` state.setAnimated() `<br>实现调用 ` isProjected(state) `<br>[调用处 TransparentItemRenderer.extract](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/TransparentItemRenderer.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GatewayGuiProjection.java#L38) |
| ` public static <T extends @Nullable Object> T withItem(GuiItemRenderState current, Supplier<T> action) ` | 实现调用 ` action.get() `<br>[调用处 ScaledGuiItemRendererMixin.anvilcraft$scaledSlot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ScaledGuiItemRendererMixin.java#L54) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GatewayGuiProjection.java#L51) |
| ` public static void withAtlas(int textureSize, int slotSize, int slotX, int slotY, Runnable action) ` | 分支 ` (item == null) ` 内调用 ` action.run() `<br>实现调用 ` gui(item.pose()).translate(item.x(), item.y(), 0) .scale(16.0F / slotSize, 16.0F / slotSize, 1) `<br>实现调用 ` gui(item.pose()).translate(item.x(), item.y(), 0) `<br>[调用处 GatewayItemAtlasMixin.anvilcraft$projectGateway](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/GatewayItemAtlasMixin.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GatewayGuiProjection.java#L61) |
| ` public static void withProjection(Matrix4f current, Runnable action) ` | 实现调用 ` action.run() `<br>[调用处 ScaledGuiItemPipMixin.anvilcraft$projectGateway](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/ScaledGuiItemPipMixin.java#L28) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GatewayGuiProjection.java#L73) |
| ` public static @Nullable Matrix4f current() ` | 末尾返回 ` projection `<br>[调用处 MonolithSurfaceRenderer.renderType](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/MonolithSurfaceRenderer.java#L134) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GatewayGuiProjection.java#L83) |
| ` public static Matrix4f pip(PictureInPictureRenderState state) ` | 末尾返回 ` gui(state.pose()).translate(state.x0(), state.y1(), 0) .scale(state.x1() - state.x0(), state.y0() - state.y1(), 1) `<br>[调用处 CfaPreviewPipRenderer.submitBody](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/gui/screen/cfa/CfaPreviewPipRenderer.java#L127) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GatewayGuiProjection.java#L87) |

## GravitationalLensSupport

` public class GravitationalLensSupport `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L23)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Set<BlockPos> CLIENT_BLACK_HOLE_POSITIONS ` | 初值 ` Collections.newSetFromMap(new ConcurrentHashMap<>()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L25) |
| ` public static final Set<BlockPos> CLIENT_WHITE_HOLE_POSITIONS ` | 初值 ` Collections.newSetFromMap(new ConcurrentHashMap<>()) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L26) |
| ` public static void register(BlockPos pos) ` | 执行 ` GravitationalLensSupport.CLIENT_BLACK_HOLE_POSITIONS.add(pos.immutable()) `<br>[调用处 BlackHoleBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L28) |
| ` public static void unregister(BlockPos pos) ` | 执行 ` GravitationalLensSupport.CLIENT_BLACK_HOLE_POSITIONS.remove(pos) `<br>[调用处 BlackHoleBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/BlackHoleBlockEntity.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L32) |
| ` public static void registerWhiteHole(BlockPos pos) ` | 执行 ` GravitationalLensSupport.CLIENT_WHITE_HOLE_POSITIONS.add(pos.immutable()) `<br>[调用处 WhiteHoleBlockEntity.onLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/WhiteHoleBlockEntity.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L36) |
| ` public static void unregisterWhiteHole(BlockPos pos) ` | 执行 ` GravitationalLensSupport.CLIENT_WHITE_HOLE_POSITIONS.remove(pos) `<br>[调用处 WhiteHoleBlockEntity.setRemoved](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/WhiteHoleBlockEntity.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L40) |
| ` public static List<HoleProjection> collectVisibleHoles( CameraRenderState cameraState, Matrix4fc projectionMatrix, int maxCount, float blackHoleDir, float whiteHoleDir ) ` | Collect up to maxCount on-screen holes from both black and white hole sets, sorted nearest first. Black holes get blackHoleDir (positive=convex pull), white holes get whiteHoleDir (negative=concave push). Uses CameraRenderState + projection matrix from the new rendering pipeline.<br>末尾返回 ` result `<br>[调用处 GravitationalLensSupport.uploadBlackHoles](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L123) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L90) |
| ` public static boolean uploadBlackHoles( GravitationalLensPostEffect effect, CommandEncoder commandEncoder, LevelRenderState levelRenderState ) ` | ` (holes.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>[调用处 GravitationalLensPostEffect.process](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/renderer/post/GravitationalLensPostEffect.java#L146) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L115) |
| ` public GravitationalLensSupport() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/support/GravitationalLensSupport.java#L23) |
