# dev.dubhe.anvilcraft.client.event（BigRedButtonInputListener 至 SubmitGeometryEventListener）



## BigRedButtonInputListener

` public class BigRedButtonInputListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L27)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void onUse(InputEvent.InteractionKeyMappingTriggered event) ` | 事件总线派发 ` InputEvent.InteractionKeyMappingTriggered ` 时调用。<br>实现调用 ` event.isUseItem() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` targetedButton(minecraft) `<br>实现调用 ` hit.getBlockPos() `<br>实现调用 ` event.setCanceled(true) `<br>实现调用 ` event.setSwingHand(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L39) |
| ` @SubscribeEvent public static void onMouseButton(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` event.getAction() `<br>实现调用 ` Minecraft.getInstance().options.keyUse.matchesMouse(new MouseButtonEvent(0, 0, event.getMouseButtonInfo())) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getMouseButtonInfo() `<br>实现调用 ` release() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L56) |
| ` @SubscribeEvent public static void onKey(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` event.getAction() `<br>实现调用 ` Minecraft.getInstance().options.keyUse.matches(event.getKeyEvent()) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getKeyEvent() `<br>实现调用 ` release() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L64) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Pre event) ` | 事件总线派发 ` ClientTickEvent.Pre ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` targetedButton(minecraft) `<br>实现调用 ` minecraft.options.keyUse.isDown() `<br>实现调用 ` heldPos.equals(hit.getBlockPos()) `<br>实现调用 ` hit.getBlockPos() `<br>实现调用 ` release() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L72) |
| ` @SubscribeEvent public static void onAnimationTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.level.getBlockState(heldPos).is(ModBlocks.BIG_RED_BUTTON) `<br>实现调用 ` minecraft.level.getBlockState(heldPos) `<br>实现调用 ` minecraft.level.getBlockState(heldPos).getValue(BigRedButtonBlock.PRESSED) `<br>实现调用 ` Mth.approach(swingProgress, pressed ? HELD_SWING_PROGRESS : 0, HELD_SWING_PROGRESS / 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L88) |
| ` public static void handleHoldResult(BlockPos pos, int id, boolean accepted) ` | 实现调用 ` pos.equals(heldPos) `<br>实现调用 ` Minecraft.getInstance() `<br>[调用处 BigRedButtonHoldPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L104) |
| ` public static float getHandSwingProgress(InteractionHand hand, float partialTick, float vanillaProgress) ` | ` (hand != InteractionHand.MAIN_HAND \|\| (swingProgress == 0 && previousSwingProgress == 0)) ` 成立时提前返回 ` vanillaProgress `<br>末尾返回 ` Mth.lerp(partialTick, previousSwingProgress, swingProgress) `<br>实现调用 ` Mth.lerp(partialTick, previousSwingProgress, swingProgress) `<br>[调用处 ItemInHandRendererMixin.anvilcraft$holdButtonHand](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/ItemInHandRendererMixin.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L109) |
| ` public BigRedButtonInputListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L27) |

## ClientBlockEventListener

` public class ClientBlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L31)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void syncInfiniteFluidTankBreakModifiers(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getAction() `<br>实现调用 ` InfiniteFluidTankBreakProtection.isProtected(event.getLevel(), event.getPos()) `<br>实现调用 ` event.getPos() `<br>实现调用 ` Minecraft.getInstance() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L33) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void anvilHammerUse(PlayerInteractEvent.RightClickBlock event) ` | 侦听右键方块事件<br>事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>参数 ` event ` 右键方块事件<br>实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getLevel().getBlockState(event.getPos()) `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L50) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void anvilHammerUseItem(PlayerInteractEvent.RightClickItem event) ` | 主手铁砧锤、副手持有方块且目标为普通方块时，取消使用物品事件， 使客户端跳过铁砧锤的长按使用，继续处理副手并放出副手方块。<br>事件总线派发 ` PlayerInteractEvent.RightClickItem ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getHand() `<br>实现调用 ` player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` player.pick(player.blockInteractionRange(), 1.0F, false) `<br>实现调用 ` player.blockInteractionRange() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L98) |
| ` public ClientBlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L31) |

## ClientEventListener

` public class ClientEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L56)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void on(SubmitCustomGeometryEvent event) ` | 事件总线派发 ` SubmitCustomGeometryEvent ` 时调用。<br>实现调用 ` BlockHighlightUtil.SUBCHUNKS.isEmpty() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getSubmitNodeCollector() `<br>实现调用 ` event.getPoseStack() `<br>实现调用 ` event.getLevelRenderState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L60) |
| ` @SubscribeEvent public static void on(RegisterTextureAtlasesEvent event) ` | 事件总线派发 ` RegisterTextureAtlasesEvent ` 时调用。<br>执行 ` event.register( new AtlasManager.AtlasConfig( ModTextureAtlases.LOCATION_LASER, ModAtlasIds.LASER, false ) ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L73) |
| ` @SubscribeEvent public static void onRenderBlockOverlay(RenderBlockScreenEffectEvent event) ` | 事件总线派发 ` RenderBlockScreenEffectEvent ` 时调用。<br>实现调用 ` event.getOverlayType() `<br>实现调用 ` event.getBlockState().is(ModBlocks.ACCELERATION_RING) `<br>实现调用 ` event.getBlockState() `<br>实现调用 ` event.getBlockState().is(ModBlocks.DEFLECTION_RING) `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L84) |
| ` @SubscribeEvent public static void onClientPlayerDisconnect(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` SettingClientStub.clearCache() `<br>实现调用 ` OverseerMapData.clear() `<br>实现调用 ` SoundHelper.INSTANCE.clear() `<br>实现调用 ` StorageTerminalClientStub.clear() `<br>实现调用 ` ItemTooltipManager.clearStorageTooltips() `<br>实现调用 ` TerminalReachabilityCache.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L93) |
| ` @SubscribeEvent public static void onKeyPress(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` ModKeyMappings.shouldIgnoreForDebugChord(event.getAction()) `<br>实现调用 ` event.getAction() `<br>实现调用 ` ModKeyMappings.TOGGLE_GOGGLE.get().isActiveAndMatches(InputConstants.getKey(event.getKeyEvent())) `<br>实现调用 ` ModKeyMappings.TOGGLE_GOGGLE.get() `<br>实现调用 ` InputConstants.getKey(event.getKeyEvent()) `<br>实现调用 ` event.getKeyEvent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L107) |
| ` @SubscribeEvent public static void onScreenKeyPressed(ScreenEvent.KeyPressed.Post event) ` | 事件总线派发 ` ScreenEvent.KeyPressed.Post ` 时调用。<br>实现调用 ` ModKeyMappings.isDebugChordActive() `<br>实现调用 ` event.getKeyCode() `<br>实现调用 ` ModKeyMappings.THOUGHT.get().getKey().getValue() `<br>实现调用 ` ModKeyMappings.THOUGHT.get().getKey() `<br>实现调用 ` ModKeyMappings.THOUGHT.get() `<br>分支 ` (event.getKeyCode() == ModKeyMappings.THOUGHT.get().getKey().getValue()) ` 内调用 ` ThoughtManager.onThought() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L128) |
| ` @SubscribeEvent public static void onScreenKeyReleased(ScreenEvent.KeyReleased.Post event) ` | 事件总线派发 ` ScreenEvent.KeyReleased.Post ` 时调用。<br>实现调用 ` event.getKeyCode() `<br>实现调用 ` ModKeyMappings.THOUGHT.get().getKey().getValue() `<br>实现调用 ` ModKeyMappings.THOUGHT.get().getKey() `<br>实现调用 ` ModKeyMappings.THOUGHT.get() `<br>分支 ` (event.getKeyCode() == ModKeyMappings.THOUGHT.get().getKey().getValue()) ` 内调用 ` ThoughtManager.onEndThought() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L136) |
| ` @SubscribeEvent public static void onAnvilEffectTick(ClientTickEvent.Pre event) ` | 事件总线派发 ` ClientTickEvent.Pre ` 时调用。<br>实现调用 ` AnvilParticleManager.tick() `<br>实现调用 ` Minecraft.getInstance().isPaused() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` SeismicBounceManager.getInstance().tick() `<br>实现调用 ` SeismicBounceManager.getInstance() `<br>实现调用 ` ScreenShakeManager.getInstance().tick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L143) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` OverseerMapData.refreshVisibility() `<br>实现调用 ` ClientEventListener.handleAttackKeyRelease() `<br>实现调用 ` ThoughtManager.getLastThoughtTime() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.gui.getGuiTicks() `<br>实现调用 ` ThoughtManager.maxSeconds() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L151) |
| ` @SubscribeEvent public static void onMouseScrolled(ScreenEvent.MouseScrolled.Pre event) ` | 事件总线派发 ` ScreenEvent.MouseScrolled.Pre ` 时调用。<br>实现调用 ` AmuletSelectorSupport.hasHoveringItem() `<br>分支 ` (AmuletSelectorSupport.hasHoveringItem()) ` 内调用 ` event.getScrollDeltaY() `<br>分支 ` (AmuletSelectorSupport.hasHoveringItem()) ` 内调用 ` AmuletSelectorSupport.mouseScrolled(-amount) `<br>分支 ` (AmuletSelectorSupport.hasHoveringItem()) ` 内调用 ` event.setCanceled(true) `<br>分支 ` !(AmuletSelectorSupport.hasHoveringItem()) ` 内调用 ` AnvilCraftClient.pillSelectorSupport.hasItem() `<br>分支 ` (AnvilCraftClient.pillSelectorSupport.hasItem()) ` 内调用 ` event.getScrollDeltaY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L167) |
| ` @SubscribeEvent public static void onMouseButton(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getAction() `<br>实现调用 ` minecraft.options.keyAttack.getKey().getType() `<br>实现调用 ` minecraft.options.keyAttack.getKey() `<br>实现调用 ` minecraft.options.keyAttack.getKey().getValue() `<br>实现调用 ` event.getButton() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L180) |
| ` @SubscribeEvent public static void onScreenMousePressed(ScreenEvent.MouseButtonPressed.Pre event) ` | 事件总线派发 ` ScreenEvent.MouseButtonPressed.Pre ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.options.keyUse.getKey().getType() `<br>实现调用 ` minecraft.options.keyUse.getKey() `<br>实现调用 ` minecraft.options.keyUse.getKey().getValue() `<br>实现调用 ` event.getButton() `<br>实现调用 ` event.getScreen() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L207) |
| ` @SubscribeEvent public static void renderContainerScreenEvent(ContainerScreenEvent.Render.Foreground event) ` | 事件总线派发 ` ContainerScreenEvent.Render.Foreground ` 时调用。<br>实现调用 ` event.getContainerScreen().getHoveredSlot() `<br>实现调用 ` event.getContainerScreen() `<br>实现调用 ` ClientEventListener.updateBoxSelectors(slot == null ? ItemStack.EMPTY : slot.getItem()) `<br>实现调用 ` slot.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L231) |
| ` @SubscribeEvent public static void onScreenClosing(ScreenEvent.Closing event) ` | 事件总线派发 ` ScreenEvent.Closing ` 时调用。<br>实现调用 ` AnvilCraftClient.pillSelectorSupport.clearHoveredSlot() `<br>实现调用 ` AnvilCraftClient.pillSelectorSupport.setPillBox(ItemStack.EMPTY, BoxSelectionTarget.NONE) `<br>实现调用 ` AmuletSelectorSupport.setHoveredTarget(BoxSelectionTarget.NONE) `<br>实现调用 ` AmuletSelectorSupport.setCurrentHoveringItemStack(ItemStack.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L252) |
| ` @SubscribeEvent public static void onRenderTooltip(RenderTooltipEvent.Pre event) ` | 事件总线派发 ` RenderTooltipEvent.Pre ` 时调用。<br>实现调用 ` event.getGraphics() `<br>实现调用 ` event.getX() `<br>实现调用 ` event.getY() `<br>实现调用 ` event.getItemStack() `<br>实现调用 ` ClientEventListener.updateBoxSelectors(itemStack) `<br>实现调用 ` itemStack.is(ModItems.AMULET_BOX) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L260) |
| ` public ClientEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L56) |

## DebugRendererEventListener

` public class DebugRendererEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/DebugRendererEventListener.java#L15)

注册 AnvilCraft 的调试条目与调试渲染器，参考 anvillib 的 \`ALRDebugEntries\`。 调试条目负责在 F3 调试选项中提供开关（默认关闭），调试渲染器负责实际绘制。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void on(RegisterDebugEntriesEvent event) ` | 事件总线派发 ` RegisterDebugEntriesEvent ` 时调用。<br>执行 ` event.register(CfaRenderBoundsDebugRenderer.LOCATION, new DebugEntryNoop()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/DebugRendererEventListener.java#L17) |
| ` @SubscribeEvent public static void on(RegisterDebugRenderersEvent event) ` | 事件总线派发 ` RegisterDebugRenderersEvent ` 时调用。<br>执行 ` event.register(new CfaRenderBoundsDebugRenderer()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/DebugRendererEventListener.java#L23) |
| ` public DebugRendererEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/DebugRendererEventListener.java#L15) |

## EnergyWeaponSoundHandler

` public final class EnergyWeaponSoundHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EnergyWeaponSoundHandler.java#L25)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isPaused() `<br>实现调用 ` EnergyWeaponSoundHandler.ACTIVE_SOUNDS.entrySet().removeIf(entry -> entry.getValue().isStopped()) `<br>实现调用 ` EnergyWeaponSoundHandler.ACTIVE_SOUNDS.entrySet() `<br>实现调用 ` minecraft.level.players() `<br>实现调用 ` EnergyWeaponSoundHandler.getRequiredSound(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EnergyWeaponSoundHandler.java#L32) |
| ` @SubscribeEvent public static void onLogout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` EnergyWeaponSoundHandler.ACTIVE_SOUNDS.values().forEach(FollowingWeaponSound::finish) `<br>实现调用 ` EnergyWeaponSoundHandler.ACTIVE_SOUNDS.values() `<br>实现调用 ` EnergyWeaponSoundHandler.ACTIVE_SOUNDS.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EnergyWeaponSoundHandler.java#L54) |

## EquipmentClientEvents

` public final class EquipmentClientEvents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L34)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void clearFluidFog(ViewportEvent.RenderFog event) ` | 事件总线派发 ` ViewportEvent.RenderFog ` 时调用。<br>实现调用 ` event.getCamera().entity() `<br>实现调用 ` event.getCamera() `<br>实现调用 ` entity.getItemBySlot(EquipmentSlot.HEAD).is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>实现调用 ` entity.getItemBySlot(EquipmentSlot.HEAD) `<br>实现调用 ` BlockPos.containing(event.getCamera().position()) `<br>实现调用 ` event.getCamera().position() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L43) |
| ` @SubscribeEvent public static void clearWaterOverlay(RenderBlockScreenEffectEvent event) ` | 事件总线派发 ` RenderBlockScreenEffectEvent ` 时调用。<br>实现调用 ` event.getOverlayType() `<br>实现调用 ` event.getPlayer().getItemBySlot(EquipmentSlot.HEAD).is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>实现调用 ` event.getPlayer().getItemBySlot(EquipmentSlot.HEAD) `<br>实现调用 ` event.getPlayer() `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L54) |
| ` @SubscribeEvent public static void tick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` EquipmentAbilities.chargeProgress(client.player) `<br>分支 ` (EquipmentAbilities.chargeProgress(client.player) > 0) ` 内调用 ` client.options.keyJump.getTranslatedKeyMessage() `<br>分支 ` (chargedMessage) ` 内调用 ` client.gui.setOverlayMessage(Component.empty(), false) `<br>分支 ` (chargedMessage) ` 内调用 ` Component.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L62) |
| ` @SubscribeEvent public static void chargeBar(RenderGuiLayerEvent.Pre event) ` | 事件总线派发 ` RenderGuiLayerEvent.Pre ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getName().equals(VanillaGuiLayers.CONTEXTUAL_INFO_BAR) `<br>实现调用 ` event.getName() `<br>实现调用 ` event.getName().equals(VanillaGuiLayers.CONTEXTUAL_INFO_BAR_BACKGROUND) `<br>实现调用 ` client.player.isSpectator() `<br>实现调用 ` EquipmentAbilities.chargeProgress(client.player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L86) |
| ` @SubscribeEvent public static void key(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` ModKeyMappings.shouldIgnoreForDebugChord(event.getAction()) `<br>实现调用 ` event.getAction() `<br>实现调用 ` press(InputConstants.getKey(event.getKeyEvent()), event.getAction()) `<br>实现调用 ` InputConstants.getKey(event.getKeyEvent()) `<br>实现调用 ` event.getKeyEvent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L131) |
| ` @SubscribeEvent public static void mouse(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>执行 ` press(InputConstants.Type.MOUSE.getOrCreate(event.getMouseButtonInfo().button()), event.getAction()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L137) |
| ` @SubscribeEvent public static void releaseKey(ScreenEvent.KeyReleased.Pre event) ` | 事件总线派发 ` ScreenEvent.KeyReleased.Pre ` 时调用。<br>实现调用 ` InputConstants.getKey(event.getKeyEvent()) `<br>实现调用 ` event.getKeyEvent() `<br>实现调用 ` ModKeyMappings.POCKETS.get().matches(event.getKeyEvent()) `<br>实现调用 ` ModKeyMappings.POCKETS.get() `<br>实现调用 ` ModKeyMappings.POCKETS.get().getKeyModifier().matches(key) `<br>实现调用 ` ModKeyMappings.POCKETS.get().getKeyModifier() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L142) |
| ` @SubscribeEvent public static void releaseMouse(ScreenEvent.MouseButtonReleased.Pre event) ` | 事件总线派发 ` ScreenEvent.MouseButtonReleased.Pre ` 时调用。<br>实现调用 ` ModKeyMappings.POCKETS.get().getKey().equals(InputConstants.Type.MOUSE.getOrCreate(event.getButton())) `<br>实现调用 ` ModKeyMappings.POCKETS.get().getKey() `<br>实现调用 ` ModKeyMappings.POCKETS.get() `<br>实现调用 ` InputConstants.Type.MOUSE.getOrCreate(event.getButton()) `<br>实现调用 ` event.getButton() `<br>实现调用 ` press(InputConstants.Type.MOUSE.getOrCreate(event.getButton()), InputConstants.RELEASE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L152) |

## GuiLayerRegistrationEventListener

` public class GuiLayerRegistrationEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L31)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onRegister(RegisterGuiLayersEvent event) ` | 事件总线派发 ` RegisterGuiLayersEvent ` 时调用。<br>实现调用 ` AnvilCraft.of("power_grid_indicator") `<br>实现调用 ` AnvilCraft.of("overworld_like_collapse") `<br>实现调用 ` AnvilCraft.of("power") `<br>实现调用 ` event.registerAboveAll(AnvilCraft.of("test"), GuiLayerRegistrationEventListener::render) `<br>实现调用 ` AnvilCraft.of("test") `<br>实现调用 ` event.registerAboveAll(AnvilCraft.of("anvil_hammer_use"), AnvilHammerUseHUD::render) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L34) |
| ` public static void render(GuiGraphicsExtractor graphics, DeltaTracker deltaTracker) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L105) |
| ` public GuiLayerRegistrationEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L31) |

## HammerEffectRenderEventListener

` public class HammerEffectRenderEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L36)

类型注解 ` @EventBusSubscriber(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Pair<Direction, Component>[] DIRECTION_TEXTS ` | 字段类型为 ` Pair<Direction, Component>[] ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L39) |
| ` public static final StandaloneModelKey<BlockStateModel> MODEL ` | 初值 ` new StandaloneModelKey<>(() -> "AnvilCraft: Axis Block Model") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L40) |
| ` @SubscribeEvent public static void onExtract(ExtractLevelRenderStateEvent event) ` | 事件总线派发 ` ExtractLevelRenderStateEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` effect.shouldRender() `<br>实现调用 ` effect.renderingBlockState() `<br>实现调用 ` effect.renderingBlockPos().immutable() `<br>实现调用 ` effect.renderingBlockPos() `<br>实现调用 ` mc.getModelManager().getBlockStateModelSet().get(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L57) |
| ` @SubscribeEvent public static void onRender(SubmitCustomGeometryEvent event) ` | 事件总线派发 ` SubmitCustomGeometryEvent ` 时调用。<br>实现调用 ` event.getLevelRenderState() `<br>实现调用 ` renderState.getRenderData(HammerEffectRenderEventListener.HAMMER_STATE) `<br>实现调用 ` state.pos() `<br>实现调用 ` event.getPoseStack() `<br>实现调用 ` poseStack.pushPose() `<br>实现调用 ` pos.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L73) |
| ` public HammerEffectRenderEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L36) |

## InvertedActionEventListener

` public final class InvertedActionEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/InvertedActionEventListener.java#L17)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isInverted() ` | 末尾返回 ` AnvilCraftClient.CONFIG.controls.invertMouseOverrideActions `<br>[调用处 TerminalOverlayEventListener.onClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalOverlayEventListener.java#L124) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/InvertedActionEventListener.java#L26) |
| ` @SubscribeEvent public static void tick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.getConnection() `<br>实现调用 ` isInverted() `<br>实现调用 ` BundleLikeServerStub.setClientInverted(inverted) `<br>分支 ` (lastConnection != connection \|\| lastBucketInverted != bucketInverted) ` 内调用 ` StorageClientStub.updateInvertedBucketAction(bucketInverted) `<br>分支 ` (lastConnection != connection \|\| lastInverted != inverted) ` 内调用 ` BundleLikeClientStub.updateInverted(inverted) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/InvertedActionEventListener.java#L30) |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` BundleLikeServerStub.setClientInverted(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/InvertedActionEventListener.java#L49) |

## IonoCraftBackpackClientHandler

` public class IonoCraftBackpackClientHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/IonoCraftBackpackClientHandler.java#L32)

飘升机背包客户端处理器 — 负责飞行时的排气粒子效果。 粒子位置跟随玩家身体模型（yBodyRot）旋转，与背包引擎模型实际位置一致。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onMovementInput(MovementInputUpdateEvent event) ` | 事件总线派发 ` MovementInputUpdateEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getInput().keyPresses.jump() `<br>实现调用 ` event.getInput() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.onGround() `<br>实现调用 ` player.isAlive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/IonoCraftBackpackClientHandler.java#L38) |
| ` public static void onFlyingSync(int playerId, boolean flying) ` | 由 IonoCraftBackpackFlyingPacket 在客户端调用，记录服务器同步的飞行状态。<br>分支 ` (flying) ` 内调用 ` IonoCraftBackpackClientHandler.SYNCED_FLYING_PLAYERS.add(playerId) `<br>分支 ` !(flying) ` 内调用 ` IonoCraftBackpackClientHandler.SYNCED_FLYING_PLAYERS.remove(playerId) `<br>[调用处 IonoCraftBackpackFlyingPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/IonoCraftBackpackFlyingPacket.java#L37) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/IonoCraftBackpackClientHandler.java#L76) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (minecraft.level == null) ` 内调用 ` SYNCED_FLYING_PLAYERS.clear() `<br>实现调用 ` minecraft.isPaused() `<br>分支 ` (IonoCraftBackpackClientHandler.lastLevel != level) ` 内调用 ` IonoCraftBackpackClientHandler.SYNCED_FLYING_PLAYERS.clear() `<br>实现调用 ` minecraft.options.getCameraType() `<br>实现调用 ` level.players() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/IonoCraftBackpackClientHandler.java#L84) |
| ` public IonoCraftBackpackClientHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/IonoCraftBackpackClientHandler.java#L32) |

## LargeBlockPlacePreviewEventListener

` public class LargeBlockPlacePreviewEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L74)

类型注解 ` @EventBusSubscriber(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void offerMissingAmplifierAnvil(BlockPos anvilPos) ` | 实现调用 ` anvilPos.immutable() `<br>实现调用 ` Util.getMillis() `<br>[调用处 CelestialForgingAnvilBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L761) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L150) |
| ` public static void removeMissingAmplifierAnvil(BlockPos anvilPos) ` | 执行 ` LargeBlockPlacePreviewEventListener.missingAmplifierAnvilPositions.remove(anvilPos) `<br>[调用处 CelestialForgingAnvilBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L762) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L157) |
| ` @SubscribeEvent public static void onLevelUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel().isClientSide()) ` 内调用 ` LargeBlockPlacePreviewEventListener.missingAmplifierAnvilPositions.clear() `<br>分支 ` (event.getLevel().isClientSide()) ` 内调用 ` renderEntries.clear() `<br>分支 ` (event.getLevel().isClientSide()) ` 内调用 ` placementProjection.clear() `<br>分支 ` (event.getLevel().isClientSide()) ` 内调用 ` amplifierProjection.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L161) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean isPreviewable(Block block) ` | 该方块是否参与放置预览：多方块方块，或 ModBlockTags#PLACEMENT\_PREVIEW 内的单方块。<br>末尾返回 ` block instanceof AbstractMultiPartBlock<?> \|\| block instanceof LargeCakeBlock \|\| block.defaultBlockState().is(ModBlockTags.PLACEMENT_PREVIEW) `<br>[调用处 BuildingRodRenderer.renderProjection](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodRenderer.java#L143) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L241) |
| ` @SubscribeEvent public static void extractPreview(ExtractLevelRenderStateEvent event) ` | 事件总线派发 ` ExtractLevelRenderStateEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` mc.player.isSpectator() `<br>分支 ` (mc.level == null \|\| mc.player == null \|\| mc.player.isSpectator()) ` 内调用 ` LargeBlockPlacePreviewEventListener.renderEntries.clear() `<br>分支 ` (mc.level == null \|\| mc.player == null \|\| mc.player.isSpectator()) ` 内调用 ` LargeBlockPlacePreviewEventListener.missingAmplifierAnvilPositions.clear() `<br>实现调用 ` collectMissingAmplifiers(mc.level, outlines, amplifiers) `<br>实现调用 ` BuildingRodItem.isHeld(mc.player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L274) |
| ` @SubscribeEvent public static void renderProjections(RenderLevelStageEvent.AfterTranslucentBlocks event) ` | 事件总线派发 ` RenderLevelStageEvent.AfterTranslucentBlocks ` 时调用。<br>实现调用 ` event.getLevelRenderState().getRenderData(PREVIEW) `<br>实现调用 ` event.getLevelRenderState() `<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (frame == null \|\| mc.level == null) ` 内调用 ` placementProjection.clear() `<br>分支 ` (frame == null \|\| mc.level == null) ` 内调用 ` amplifierProjection.clear() `<br>实现调用 ` placementProjection.update(mc.level, frame.blocks()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L387) |
| ` @SubscribeEvent public static void submitPreview(SubmitCustomGeometryEvent event) ` | 事件总线派发 ` SubmitCustomGeometryEvent ` 时调用。<br>实现调用 ` event.getLevelRenderState().getRenderData(PREVIEW) `<br>实现调用 ` event.getLevelRenderState() `<br>实现调用 ` event.getPoseStack() `<br>实现调用 ` frame.ghosts() `<br>实现调用 ` pose.pushPose() `<br>实现调用 ` batch.pos().getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L423) |
| ` public static void startFailBoundCooldown() ` | 实现调用 ` LargeBlockPlacePreviewEventListener.animationActuator.reset() `<br>[调用处 FlexibleMultiPartBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FlexibleMultiPartBlockItem.java#L113) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L491) |
| ` public static void startFailBoundErrorCooldown(List<BlockPos> errorPosList) ` | [调用处 FlexibleMultiPartBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/block/FlexibleMultiPartBlockItem.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L496) |
| ` public LargeBlockPlacePreviewEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L74) |

## MunMusicHandler

` public final class MunMusicHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/MunMusicHandler.java#L24)

月球背景音乐随机选择首曲后依次轮换，并在曲目之间保留随机静默期。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onSelectMusic(SelectMusicEvent event) ` | 事件总线派发 ` SelectMusicEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getPlayingMusic() `<br>实现调用 ` musicIndex(playingMusic) `<br>实现调用 ` minecraft.level.dimension().equals(CelestialTravelManager.MUN_LEVEL) `<br>实现调用 ` minecraft.level.dimension() `<br>分支 ` (playingIndex >= 0) ` 内调用 ` event.setMusic(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/MunMusicHandler.java#L36) |
| ` @SubscribeEvent public static void onLogout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/MunMusicHandler.java#L94) |

## NegativeShapeModelEventListener

` public class NegativeShapeModelEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/NegativeShapeModelEventListener.java#L32)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onModelBake(ModelEvent.ModifyBakingResult event) ` | 将负形方块模型的外缘四边形归入方向剔除列表。<br>事件总线派发 ` ModelEvent.ModifyBakingResult ` 时调用。<br>实现调用 ` event.getBakingResult().blockStateModels() `<br>实现调用 ` event.getBakingResult() `<br>实现调用 ` EDGE_RECTANGLES.clear() `<br>实现调用 ` block.getStateDefinition().getPossibleStates() `<br>实现调用 ` block.getStateDefinition() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/NegativeShapeModelEventListener.java#L44) |
| ` public static boolean shouldSkipFace(BlockState state, BlockState adjacentState, Direction face) ` | ` (!(state.getBlock() instanceof INegativeShapeBlock<?> block) \|\| !block.getBlockType().isInstance(adjacentState.getBlock())) ` 成立时提前返回 ` false `<br>` (selfRectangles.isEmpty()) ` 成立时提前返回 ` false `<br>` (adjacentRectangles.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>实现调用 ` state.getBlock() `<br>实现调用 ` block.getBlockType().isInstance(adjacentState.getBlock()) `<br>实现调用 ` block.getBlockType() `<br>实现调用 ` adjacentState.getBlock() `<br>实现调用 ` getEdgeRectangles(state, face) `<br>实现调用 ` selfRectangles.isEmpty() `<br>[调用处 BlockStateBaseMixin.negativeShapeFaceSkip](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/BlockStateBaseMixin.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/NegativeShapeModelEventListener.java#L67) |
| ` public static BlockStateModel modelForSelection(BlockStateModel model) ` | 选择几何使用原始模型；绘制时仍保留负形面的剔除包装。<br>末尾返回 ` model instanceof NegativeShapeBlockStateModel wrapper ? wrapper.originalModel() : model `<br>[调用处 ModelSelectionBakery.resolve](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/selection/ModelSelectionBakery.java#L96) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/NegativeShapeModelEventListener.java#L83) |
| ` public NegativeShapeModelEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/NegativeShapeModelEventListener.java#L32) |

## OverworldLikeClientEvents

` public final class OverworldLikeClientEvents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeClientEvents.java#L10)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void logout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>执行 ` OverworldLikeClientState.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeClientEvents.java#L12) |
| ` public OverworldLikeClientEvents() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeClientEvents.java#L10) |

## OverworldLikeVisualEventListener

` public final class OverworldLikeVisualEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeVisualEventListener.java#L15)

Applies the synchronized eclipse to the overworld-like atmospheric fog.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onComputeFogColor(ViewportEvent.ComputeFogColor event) ` | 事件总线派发 ` ViewportEvent.ComputeFogColor ` 时调用。<br>实现调用 ` event.getCamera().getFluidInCamera() `<br>实现调用 ` event.getCamera() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` CelestialTravelManager.isOverworldLike(level.dimension()) `<br>实现调用 ` level.dimension() `<br>实现调用 ` OverworldLikeClientState.environmentColorMultiplier(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeVisualEventListener.java#L20) |

## QuenchedOutMusicHandler

` public final class QuenchedOutMusicHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L29)

淬灭序曲客户端播放器。 以双声道播放超新星前奏曲 quenched\_out，根据玩家与锻星砧的距离调整音量（约 1 分 12 秒，不循环）。 由 dev.dubhe.anvilcraft.network.QuenchedOutMusicPacket 驱动： 演化进入最后 71 秒时开始播放，锻星砧/增幅器被破坏或加速器被清除时立即停止。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void start(BlockPos pos) ` | 在客户端主线程开始播放（若同位置已有实例则先停止）。<br>实现调用 ` stop(pos) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isPaused() `<br>实现调用 ` ACTIVE.put(pos, sound) `<br>实现调用 ` minecraft.getSoundManager().play(sound) `<br>实现调用 ` minecraft.getSoundManager() `<br>[调用处 QuenchedOutMusicPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L37) |
| ` public static void stop(BlockPos pos) ` | 立即停止指定位置的播放。<br>实现调用 ` ACTIVE.remove(pos) `<br>分支 ` (sound != null) ` 内调用 ` sound.finish() `<br>[调用处 QuenchedOutMusicPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L47) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isPaused() `<br>实现调用 ` ACTIVE.entrySet() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L54) |
| ` @SubscribeEvent public static void onLogout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` ACTIVE.values().forEach(QuenchedOutSound::finish) `<br>实现调用 ` ACTIVE.values() `<br>实现调用 ` ACTIVE.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L62) |

## RecipesReceivedEventListener

` public class RecipesReceivedEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RecipesReceivedEventListener.java#L10)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void on(RecipesReceivedEvent event) ` | 事件总线派发 ` RecipesReceivedEvent ` 时调用。<br>执行 ` RecipesRecord.CLIENTSIDE = event.getRecipeMap() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RecipesReceivedEventListener.java#L12) |
| ` public RecipesReceivedEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RecipesReceivedEventListener.java#L10) |

## RedstoneDiceInputListener

` public class RedstoneDiceInputListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L35)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void onUse(InputEvent.InteractionKeyMappingTriggered event) ` | 事件总线派发 ` InputEvent.InteractionKeyMappingTriggered ` 时调用。<br>实现调用 ` event.isUseItem() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` targetedDice(client) `<br>实现调用 ` event.setCanceled(true) `<br>实现调用 ` event.setSwingHand(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L45) |
| ` @SubscribeEvent public static void onMouseButton(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance().options.keyUse.matchesMouse(new MouseButtonEvent(0, 0, event.getMouseButtonInfo())) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getMouseButtonInfo() `<br>实现调用 ` event.getAction() `<br>分支 ` (event.getAction() == GLFW.GLFW_PRESS) ` 内调用 ` press() `<br>分支 ` (event.getAction() == GLFW.GLFW_RELEASE) ` 内调用 ` release() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L66) |
| ` @SubscribeEvent public static void onKey(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` ModKeyMappings.shouldIgnoreForDebugChord(event.getAction()) `<br>实现调用 ` event.getAction() `<br>实现调用 ` Minecraft.getInstance().options.keyUse.matches(event.getKeyEvent()) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getKeyEvent() `<br>分支 ` (event.getAction() == GLFW.GLFW_PRESS) ` 内调用 ` press() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L73) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Pre event) ` | 事件总线派发 ` ClientTickEvent.Pre ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.isWindowActive() `<br>实现调用 ` client.player.getItemInHand(heldHand).getItem() `<br>实现调用 ` client.player.getItemInHand(heldHand) `<br>分支 ` (wheelScreen != null && client.screen == wheelScreen) ` 内调用 ` client.setScreen(null) `<br>实现调用 ` reset() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L81) |
| ` public RedstoneDiceInputListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L35) |

## RegisterAdditionalEventListener

` public class RegisterAdditionalEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L61)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void registerRenderBuffers(RegisterRenderBuffersEvent event) ` | 事件总线派发 ` RegisterRenderBuffersEvent ` 时调用。<br>实现调用 ` event.registerRenderBuffer(ModRenderTypes.CUTOUT_BLOCK) `<br>实现调用 ` event.registerRenderBuffer(ModRenderTypes.TRANSLUCENT_BLOCK) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L64) |
| ` @SubscribeEvent public static void registerModels(ModelEvent.RegisterStandalone event) ` | 注册模型<br>事件总线派发 ` ModelEvent.RegisterStandalone ` 时调用。<br>实现调用 ` SimpleUnbakedStandaloneModel.blockStateModel(AnvilCraft.of("block/redstone_dice_dice")) `<br>实现调用 ` AnvilCraft.of("block/redstone_dice_dice") `<br>实现调用 ` SimpleUnbakedStandaloneModel.blockStateModel(AnvilCraft.of("block/big_red_button_cap")) `<br>实现调用 ` AnvilCraft.of("block/big_red_button_cap") `<br>实现调用 ` CrabClawItemInHandRenderer.registerModels(event) `<br>实现调用 ` SimpleUnbakedStandaloneModel.blockStateModel(AnvilCraft.of("block/heliostats_head")) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L71) |
| ` @SubscribeEvent public static void registerSpecialRenderers(RegisterSpecialModelRendererEvent event) ` | 事件总线派发 ` RegisterSpecialModelRendererEvent ` 时调用。<br>实现调用 ` event.register(AnvilCraft.of("celestial_forging_anvil"), CelestialForgingAnvilItemRenderer.Unbaked.CODEC) `<br>实现调用 ` AnvilCraft.of("celestial_forging_anvil") `<br>实现调用 ` event.register(AnvilCraft.of("filter"), FilterItemRenderer.Unbaked.CODEC) `<br>实现调用 ` AnvilCraft.of("filter") `<br>实现调用 ` event.register(AnvilCraft.of("disk"), DiskItemRenderer.Unbaked.CODEC) `<br>实现调用 ` AnvilCraft.of("disk") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L393) |
| ` @SubscribeEvent public static void registerPictureInPictureRenderers(RegisterPictureInPictureRenderersEvent event) ` | 注册锻星砧界面使用的画中画渲染器。<br>事件总线派发 ` RegisterPictureInPictureRenderersEvent ` 时调用。<br>实现调用 ` event.register(CfaPreviewPipRenderer.State.class, CfaPreviewPipRenderer::new) `<br>实现调用 ` event.register(ProcessOverlayRenderer.State.class, ProcessOverlayRenderer::new) `<br>实现调用 ` event.register(TransparentItemRenderer.State.class, TransparentItemRenderer::new) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L413) |
| ` public RegisterAdditionalEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L61) |

## ResonanceMiningClientEventListener

` public class ResonanceMiningClientEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ResonanceMiningClientEventListener.java#L13)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void suppressAirUse(InputEvent.InteractionKeyMappingTriggered event) ` | 事件总线派发 ` InputEvent.InteractionKeyMappingTriggered ` 时调用。<br>实现调用 ` event.isUseItem() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.hitResult.getType() `<br>实现调用 ` minecraft.player.getItemInHand(event.getHand()) `<br>实现调用 ` event.getHand() `<br>实现调用 ` stack.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ResonanceMiningClientEventListener.java#L15) |
| ` public ResonanceMiningClientEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ResonanceMiningClientEventListener.java#L13) |

## ScreenShakeEventListener

` public class ScreenShakeEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ScreenShakeEventListener.java#L13)

屏幕震动 —— 在 ComputeCameraAngles 阶段往摄像机角度叠加衰减抖动。 由超新星爆发、巨型铁砧撼地等事件通过 ScreenShakeManager 触发。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onCameraAngles(ViewportEvent.ComputeCameraAngles event) ` | 事件总线派发 ` ViewportEvent.ComputeCameraAngles ` 时调用。<br>实现调用 ` ScreenShakeManager.getInstance() `<br>实现调用 ` manager.isActive() `<br>实现调用 ` Minecraft.getInstance().isPaused() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getPartialTick() `<br>实现调用 ` manager.computeAngleOffsets(partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ScreenShakeEventListener.java#L16) |
| ` public ScreenShakeEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/ScreenShakeEventListener.java#L13) |

## SeismicBounceRenderEventListener

` public class SeismicBounceRenderEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SeismicBounceRenderEventListener.java#L27)

震波弹跳渲染 —— 直接获取原版光照管线。 因为 submitMovingBlock 会把模型里的 quad 按材质层 (SOLID / CUTOUT / TRANSLUCENT) 分发到正确的 RenderPipeline，所以同时支持实体方块、裁剪方块以及透明方块。

类型注解 ` @EventBusSubscriber(modid = "anvilcraft", value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onRender(SubmitCustomGeometryEvent event) ` | 事件总线派发 ` SubmitCustomGeometryEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getLevelRenderState().cameraRenderState.pos.x() `<br>实现调用 ` event.getLevelRenderState() `<br>实现调用 ` event.getLevelRenderState().cameraRenderState.pos.y() `<br>实现调用 ` event.getLevelRenderState().cameraRenderState.pos.z() `<br>实现调用 ` mc.getDeltaTracker().getGameTimeDeltaPartialTick(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SeismicBounceRenderEventListener.java#L30) |
| ` public SeismicBounceRenderEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SeismicBounceRenderEventListener.java#L27) |

## StoragePortHammerGestureListener

` public class StoragePortHammerGestureListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/StoragePortHammerGestureListener.java#L39)

仓储端口的铁砧锤手势：手持铁砧锤对已标记的端口长按右键会打开轮盘， 轮盘中只有一个渲染为屏障的「清除标记」选项，选中即清除标记。 普通铁砧锤右键（短按）不会调整任何状态。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onMouseButton(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.options.keyUse.getKey().getType() `<br>实现调用 ` client.options.keyUse.getKey() `<br>实现调用 ` client.options.keyUse.getKey().getValue() `<br>实现调用 ` event.getButton() `<br>实现调用 ` event.getAction() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/StoragePortHammerGestureListener.java#L53) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (StoragePortHammerGestureListener.wheelOpened) ` 内调用 ` player.isUsingItem() `<br>分支 ` (player.isUsingItem()) ` 内调用 ` player.stopUsingItem() `<br>分支 ` (player.isUsingItem()) ` 内调用 ` Objects.requireNonNull(client.gameMode).releaseUsingItem(player) `<br>分支 ` (player.isUsingItem()) ` 内调用 ` Objects.requireNonNull(client.gameMode) `<br>实现调用 ` level.getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/StoragePortHammerGestureListener.java#L83) |

## StorageTakeOutListener

` public final class StorageTakeOutListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L24)

仓储端口与创造板条箱共用长按计时，避免取少量物品时立即连续取出。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(receiveCanceled = true) public static void onAttack(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getAction() `<br>实现调用 ` findTarget() `<br>实现调用 ` next.getBlockPos().equals(event.getPos()) `<br>实现调用 ` next.getBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L33) |
| ` @SubscribeEvent public static void onMouse(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance().options.keyAttack.getKey() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getAction() `<br>实现调用 ` key.getType() `<br>实现调用 ` key.getValue() `<br>实现调用 ` event.getButton() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L54) |
| ` @SubscribeEvent public static void onKey(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` Minecraft.getInstance().options.keyAttack.getKey() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getAction() `<br>实现调用 ` key.getValue() `<br>实现调用 ` key.getType() `<br>实现调用 ` event.getScanCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L63) |
| ` @SubscribeEvent public static void tick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.options.keyAttack.isDown() `<br>实现调用 ` findTarget() `<br>实现调用 ` client.level.getGameTime() `<br>分支 ` (now - lastTakeAt >= interval) ` 内调用 ` take(now) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L73) |

## SubmitGeometryEventListener

` public class SubmitGeometryEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SubmitGeometryEventListener.java#L46)

类型注解 ` @EventBusSubscriber(value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void on(SubmitCustomGeometryEvent event) ` | 事件总线派发 ` SubmitCustomGeometryEvent ` 时调用。<br>实现调用 ` event.getLevelRenderState() `<br>实现调用 ` event.getPoseStack() `<br>实现调用 ` Minecraft.getInstance().getDeltaTracker() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getSubmitNodeCollector() `<br>实现调用 ` InspectionSupport.INSTANCE.onRenderInspectionAction( poseStack, nodeCollector, camera, deltaTracker ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SubmitGeometryEventListener.java#L54) |
| ` public SubmitGeometryEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/event/SubmitGeometryEventListener.java#L46) |
