# dev.dubhe.anvilcraft.client.event（BigRedButtonInputListener 至 TerminalKeyMappingEventListener）



## BigRedButtonInputListener

` public class BigRedButtonInputListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L27)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void onUse(InputEvent.InteractionKeyMappingTriggered event) ` | 事件总线派发 ` InputEvent.InteractionKeyMappingTriggered ` 时调用。<br>实现调用 ` event.isUseItem() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` targetedButton(minecraft) `<br>实现调用 ` hit.getBlockPos() `<br>实现调用 ` event.setCanceled(true) `<br>实现调用 ` event.setSwingHand(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L39) |
| ` @SubscribeEvent public static void onMouseButton(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` event.getAction() `<br>实现调用 ` Minecraft.getInstance().options.keyUse.matchesMouse(event.getButton()) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getButton() `<br>实现调用 ` release() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L56) |
| ` @SubscribeEvent public static void onKey(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` event.getAction() `<br>实现调用 ` Minecraft.getInstance().options.keyUse.matches(event.getKey(), event.getScanCode()) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getKey() `<br>实现调用 ` event.getScanCode() `<br>实现调用 ` release() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L64) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Pre event) ` | 事件总线派发 ` ClientTickEvent.Pre ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` targetedButton(minecraft) `<br>实现调用 ` minecraft.options.keyUse.isDown() `<br>实现调用 ` heldPos.equals(hit.getBlockPos()) `<br>实现调用 ` hit.getBlockPos() `<br>实现调用 ` release() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L72) |
| ` @SubscribeEvent public static void onAnimationTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.level.getBlockState(heldPos).is(ModBlocks.BIG_RED_BUTTON) `<br>实现调用 ` minecraft.level.getBlockState(heldPos) `<br>实现调用 ` minecraft.level.getBlockState(heldPos).getValue(BigRedButtonBlock.PRESSED) `<br>实现调用 ` Mth.approach(swingProgress, pressed ? HELD_SWING_PROGRESS : 0, HELD_SWING_PROGRESS / 2) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L88) |
| ` public static void handleHoldResult(BlockPos pos, int id, boolean accepted) ` | 实现调用 ` pos.equals(heldPos) `<br>实现调用 ` Minecraft.getInstance() `<br>[调用处 BigRedButtonHoldPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/BigRedButtonHoldPacket.java#L40) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L104) |
| ` public static float getHandSwingProgress(InteractionHand hand, float partialTick, float vanillaProgress) ` | ` (hand != InteractionHand.MAIN_HAND \|\| (swingProgress == 0 && previousSwingProgress == 0)) ` 成立时提前返回 ` vanillaProgress `<br>末尾返回 ` Mth.lerp(partialTick, previousSwingProgress, swingProgress) `<br>实现调用 ` Mth.lerp(partialTick, previousSwingProgress, swingProgress) `<br>[调用处 ItemInHandRendererMixin.anvilcraft$holdButtonHand](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/ItemInHandRendererMixin.java#L101) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L109) |
| ` public BigRedButtonInputListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/BigRedButtonInputListener.java#L27) |

## ClientBlockEventListener

` public class ClientBlockEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L32)

类型注解 ` @EventBusSubscriber(value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void syncInfiniteFluidTankBreakModifiers(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getAction() `<br>实现调用 ` InfiniteFluidTankBreakProtection.isProtected(event.getLevel(), event.getPos()) `<br>实现调用 ` event.getPos() `<br>实现调用 ` Screen.hasControlDown() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L34) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void anvilHammerUse(PlayerInteractEvent.RightClickBlock event) ` | 侦听右键方块事件<br>事件总线派发 ` PlayerInteractEvent.RightClickBlock ` 时调用。<br>参数 ` event ` 右键方块事件<br>实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getHand() `<br>实现调用 ` event.getLevel().getBlockState(event.getPos()) `<br>实现调用 ` event.getPos() `<br>实现调用 ` event.getEntity() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L52) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void anvilHammerUseItem(PlayerInteractEvent.RightClickItem event) ` | 主手铁砧锤、副手持有方块且目标为普通方块时，取消使用物品事件， 使客户端跳过铁砧锤的长按使用，继续处理副手并放出副手方块。<br>事件总线派发 ` PlayerInteractEvent.RightClickItem ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getHand() `<br>实现调用 ` player.getMainHandItem().is(ModItemTags.ANVIL_HAMMER) `<br>实现调用 ` player.getMainHandItem() `<br>实现调用 ` player.pick(player.blockInteractionRange(), 1.0F, false) `<br>实现调用 ` player.blockInteractionRange() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L121) |
| ` public ClientBlockEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientBlockEventListener.java#L32) |

## ClientEventListener

` public class ClientEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L57)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onScreenMouseReleasedTerminal(ScreenEvent.MouseButtonReleased.Pre event) ` | 事件总线派发 ` ScreenEvent.MouseButtonReleased.Pre ` 时调用。<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L68) |
| ` @SubscribeEvent public static void blockHighlight(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` BlockHighlightUtil.SUBCHUNKS.isEmpty() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` Minecraft.getInstance().renderBuffers().bufferSource() `<br>实现调用 ` Minecraft.getInstance().renderBuffers() `<br>实现调用 ` event.getPoseStack() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L77) |
| ` @SubscribeEvent public static void onRenderBlockOverlay(RenderBlockScreenEffectEvent event) ` | 事件总线派发 ` RenderBlockScreenEffectEvent ` 时调用。<br>实现调用 ` event.getOverlayType() `<br>实现调用 ` event.getBlockState().is(ModBlocks.ACCELERATION_RING) `<br>实现调用 ` event.getBlockState() `<br>实现调用 ` event.getBlockState().is(ModBlocks.DEFLECTION_RING) `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L91) |
| ` @SubscribeEvent public static void onClientPlayerDisconnect(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` SettingClientStub.clearCache() `<br>实现调用 ` OverseerMapData.clear() `<br>实现调用 ` SoundHelper.INSTANCE.clear() `<br>实现调用 ` StorageTerminalClientStub.clear() `<br>实现调用 ` TerminalReachabilityCache.clear() `<br>实现调用 ` TerminalRemoteOverlay.setHovering(ItemStack.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L100) |
| ` @SubscribeEvent public static void onClientLevelUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel() instanceof ClientLevel) ` 内调用 ` HudTooltipManager.INSTANCE.resetClientState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L111) |
| ` @SubscribeEvent public static void onKeyPress(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` ModKeyMappings.shouldIgnoreForDebugChord(event.getAction()) `<br>实现调用 ` event.getAction() `<br>实现调用 ` ModKeyMappings.TOGGLE_GOGGLE.get() `<br>实现调用 ` InputConstants.getKey(event.getKey(), event.getScanCode()) `<br>实现调用 ` event.getKey() `<br>实现调用 ` event.getScanCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L118) |
| ` @SubscribeEvent public static void onScreenKeyPressed(ScreenEvent.KeyPressed.Post event) ` | 事件总线派发 ` ScreenEvent.KeyPressed.Post ` 时调用。<br>实现调用 ` ModKeyMappings.isDebugChordActive() `<br>实现调用 ` event.getKeyCode() `<br>实现调用 ` ModKeyMappings.THOUGHT.get().getKey().getValue() `<br>实现调用 ` ModKeyMappings.THOUGHT.get().getKey() `<br>实现调用 ` ModKeyMappings.THOUGHT.get() `<br>分支 ` (event.getKeyCode() == ModKeyMappings.THOUGHT.get().getKey().getValue()) ` 内调用 ` ThoughtManager.onThought() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L139) |
| ` @SubscribeEvent public static void onScreenKeyPressedTerminal(ScreenEvent.KeyPressed.Pre event) ` | 事件总线派发 ` ScreenEvent.KeyPressed.Pre ` 时调用。<br>实现调用 ` event.getScreen() `<br>实现调用 ` TerminalRemoteOverlay.isHovering() `<br>实现调用 ` TerminalRemoteOverlay.keyPressed( event.getKeyCode(), event.getScanCode(), event.getModifiers() ) `<br>实现调用 ` event.getKeyCode() `<br>实现调用 ` event.getScanCode() `<br>实现调用 ` event.getModifiers() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L147) |
| ` @SubscribeEvent public static void onScreenCharTypedTerminal(ScreenEvent.CharacterTyped.Pre event) ` | 事件总线派发 ` ScreenEvent.CharacterTyped.Pre ` 时调用。<br>实现调用 ` event.getScreen() `<br>实现调用 ` TerminalRemoteOverlay.isHovering() `<br>实现调用 ` TerminalRemoteOverlay.charTyped(event.getCodePoint(), event.getModifiers()) `<br>实现调用 ` event.getCodePoint() `<br>实现调用 ` event.getModifiers() `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L160) |
| ` @SubscribeEvent public static void onScreenKeyReleased(ScreenEvent.KeyReleased.Post event) ` | 事件总线派发 ` ScreenEvent.KeyReleased.Post ` 时调用。<br>实现调用 ` event.getKeyCode() `<br>实现调用 ` ModKeyMappings.THOUGHT.get().getKey().getValue() `<br>实现调用 ` ModKeyMappings.THOUGHT.get().getKey() `<br>实现调用 ` ModKeyMappings.THOUGHT.get() `<br>分支 ` (event.getKeyCode() == ModKeyMappings.THOUGHT.get().getKey().getValue()) ` 内调用 ` ThoughtManager.onEndThought() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L169) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` OverseerMapData.refreshVisibility() `<br>实现调用 ` handleAttackKeyRelease() `<br>实现调用 ` ThoughtManager.getLastThoughtTime() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.gui.getGuiTicks() `<br>实现调用 ` ThoughtManager.maxSeconds() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L176) |
| ` @SubscribeEvent public static void onMouseButton(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getAction() `<br>实现调用 ` minecraft.options.keyAttack.matchesMouse(event.getButton()) `<br>实现调用 ` event.getButton() `<br>实现调用 ` sendDragonRodStopDevourPacket(minecraft) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L193) |
| ` @SubscribeEvent public static void onMouseScrolled(ScreenEvent.MouseScrolled.Pre event) ` | 事件总线派发 ` ScreenEvent.MouseScrolled.Pre ` 时调用。<br>实现调用 ` event.getScreen() `<br>实现调用 ` TerminalRemoteOverlay.isHovering() `<br>实现调用 ` event.getScrollDeltaY() `<br>实现调用 ` TerminalRemoteOverlay.mouseScrolled(amount) `<br>分支 ` (TerminalRemoteOverlay.mouseScrolled(amount)) ` 内调用 ` event.setCanceled(true) `<br>实现调用 ` AmuletSelectorSupport.hasHoveringItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L217) |
| ` @SubscribeEvent public static void onScreenMousePressed(ScreenEvent.MouseButtonPressed.Pre event) ` | 事件总线派发 ` ScreenEvent.MouseButtonPressed.Pre ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.options.keyUse.matchesMouse(event.getButton()) `<br>实现调用 ` event.getButton() `<br>实现调用 ` event.getScreen() `<br>实现调用 ` minecraft.getConnection() `<br>实现调用 ` containerScreen.getMenu().getCarried().isEmpty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L237) |
| ` @SubscribeEvent public static void onScreenMousePressedTerminal(ScreenEvent.MouseButtonPressed.Pre event) ` | 事件总线派发 ` ScreenEvent.MouseButtonPressed.Pre ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getScreen() `<br>实现调用 ` minecraft.getConnection() `<br>实现调用 ` containerScreen.getSlotUnderMouse() `<br>实现调用 ` TerminalRemoteOverlay.isBoundTerminal(slot.getItem()) `<br>实现调用 ` slot.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L259) |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void onScreenMouseDraggedStorage(ScreenEvent.MouseDragged.Pre event) ` | Prevents Mouse Tweaks from intercepting shift+left-drag quick-move in StorageScreen. Mouse Tweaks listens on ScreenEvent.MouseDragged.Pre at default priority and issues a vanilla QUICK\_MOVE for every hovered inventory slot. Handling the event at HIGHEST priority and cancelling it lets StorageScreen's own quick-move-to-storage logic take over.<br>事件总线派发 ` ScreenEvent.MouseDragged.Pre ` 时调用。<br>实现调用 ` event.getScreen() `<br>实现调用 ` storageScreen.isQuickMoveDragging() `<br>实现调用 ` event.getMouseButton() `<br>实现调用 ` Screen.hasShiftDown() `<br>实现调用 ` storageScreen.quickMoveDrag(event.getMouseX(), event.getMouseY()) `<br>实现调用 ` event.getMouseX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L379) |
| ` @SubscribeEvent public static void renderContainerScreenEvent(ContainerScreenEvent.Render.Foreground event) ` | 事件总线派发 ` ContainerScreenEvent.Render.Foreground ` 时调用。<br>实现调用 ` event.getContainerScreen() `<br>实现调用 ` screen.getSlotUnderMouse() `<br>实现调用 ` slot.getItem() `<br>实现调用 ` ClientEventListener.menuSlotIndex(screen) `<br>实现调用 ` item.is(ModItems.PILL_BOX) `<br>分支 ` (item.is(ModItems.PILL_BOX)) ` 内调用 ` AnvilCraftClient.pillSelectorSupport.setPillBox(item, slotIndex) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L503) |
| ` @SubscribeEvent public static void onRenderTooltip(RenderTooltipEvent.Pre event) ` | 事件总线派发 ` RenderTooltipEvent.Pre ` 时调用。<br>实现调用 ` TerminalRemoteOverlay.isHovering() `<br>分支 ` (TerminalRemoteOverlay.isHovering()) ` 内调用 ` TerminalRemoteOverlay.updateForTooltip(event.getX(), event.getY()) `<br>分支 ` (TerminalRemoteOverlay.isHovering()) ` 内调用 ` event.getX() `<br>分支 ` (TerminalRemoteOverlay.isHovering()) ` 内调用 ` event.getY() `<br>实现调用 ` event.getGraphics() `<br>实现调用 ` event.getX() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L541) |
| ` @SubscribeEvent public static void onScreenClosing(ScreenEvent.Closing event) ` | 事件总线派发 ` ScreenEvent.Closing ` 时调用。<br>实现调用 ` TerminalRemoteOverlay.setHovering(ItemStack.EMPTY) `<br>实现调用 ` AmuletSelectorSupport.setHoveredSlot(-1) `<br>实现调用 ` AnvilCraftClient.pillSelectorSupport.clearHoveredSlot() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L589) |
| ` @SubscribeEvent public static void onContainerScreenRenderPost(ScreenEvent.Render.Post event) ` | 事件总线派发 ` ScreenEvent.Render.Post ` 时调用。<br>实现调用 ` event.getScreen() `<br>实现调用 ` TerminalRemoteOverlay.tick() `<br>分支 ` (!(event.getScreen() instanceof StorageScreen)) ` 内调用 ` TerminalRemoteOverlay.render( event.getGuiGraphics(), Minecraft.getInstance().font, event.getPartialTick() ) `<br>分支 ` (!(event.getScreen() instanceof StorageScreen)) ` 内调用 ` event.getGuiGraphics() `<br>分支 ` (!(event.getScreen() instanceof StorageScreen)) ` 内调用 ` Minecraft.getInstance() `<br>分支 ` (!(event.getScreen() instanceof StorageScreen)) ` 内调用 ` event.getPartialTick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L596) |
| ` public ClientEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L57) |

## EnergyWeaponSoundHandler

` public final class EnergyWeaponSoundHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EnergyWeaponSoundHandler.java#L26)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isPaused() `<br>实现调用 ` ACTIVE_SOUNDS.entrySet().removeIf(entry -> entry.getValue().isStopped()) `<br>实现调用 ` ACTIVE_SOUNDS.entrySet() `<br>实现调用 ` minecraft.level.players() `<br>实现调用 ` getRequiredSound(player) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EnergyWeaponSoundHandler.java#L33) |
| ` @SubscribeEvent public static void onLogout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` ACTIVE_SOUNDS.values().forEach(FollowingWeaponSound::finish) `<br>实现调用 ` ACTIVE_SOUNDS.values() `<br>实现调用 ` ACTIVE_SOUNDS.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EnergyWeaponSoundHandler.java#L55) |

## EquipmentClientEvents

` public final class EquipmentClientEvents `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L35)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void key(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` ModKeyMappings.shouldIgnoreForDebugChord(event.getAction()) `<br>实现调用 ` event.getAction() `<br>实现调用 ` press(InputConstants.getKey(event.getKey(), event.getScanCode()), event.getAction()) `<br>实现调用 ` InputConstants.getKey(event.getKey(), event.getScanCode()) `<br>实现调用 ` event.getKey() `<br>实现调用 ` event.getScanCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L76) |
| ` @SubscribeEvent public static void mouse(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>执行 ` press(InputConstants.Type.MOUSE.getOrCreate(event.getButton()), event.getAction()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L82) |
| ` @SubscribeEvent public static void releaseKey(ScreenEvent.KeyReleased.Pre event) ` | 事件总线派发 ` ScreenEvent.KeyReleased.Pre ` 时调用。<br>实现调用 ` InputConstants.getKey(event.getKeyCode(), event.getScanCode()) `<br>实现调用 ` event.getKeyCode() `<br>实现调用 ` event.getScanCode() `<br>实现调用 ` ModKeyMappings.POCKETS.get().matches(event.getKeyCode(), event.getScanCode()) `<br>实现调用 ` ModKeyMappings.POCKETS.get() `<br>实现调用 ` ModKeyMappings.POCKETS.get().getKeyModifier().matches(key) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L87) |
| ` @SubscribeEvent public static void releaseMouse(ScreenEvent.MouseButtonReleased.Pre event) ` | 事件总线派发 ` ScreenEvent.MouseButtonReleased.Pre ` 时调用。<br>实现调用 ` ModKeyMappings.POCKETS.get().matchesMouse(event.getButton()) `<br>实现调用 ` ModKeyMappings.POCKETS.get() `<br>实现调用 ` event.getButton() `<br>分支 ` (pocketHeld && ModKeyMappings.POCKETS.get().matchesMouse(event.getButton())) ` 内调用 ` press(InputConstants.Type.MOUSE.getOrCreate(event.getButton()), InputConstants.RELEASE) `<br>分支 ` (pocketHeld && ModKeyMappings.POCKETS.get().matchesMouse(event.getButton())) ` 内调用 ` InputConstants.Type.MOUSE.getOrCreate(event.getButton()) `<br>分支 ` (pocketHeld && ModKeyMappings.POCKETS.get().matchesMouse(event.getButton())) ` 内调用 ` event.getButton() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L97) |
| ` @SubscribeEvent public static void tick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` EquipmentAbilities.chargeProgress(client.player) `<br>分支 ` (EquipmentAbilities.chargeProgress(client.player) > 0) ` 内调用 ` client.options.keyJump.getTranslatedKeyMessage() `<br>分支 ` (chargedMessage) ` 内调用 ` client.gui.setOverlayMessage(Component.empty(), false) `<br>分支 ` (chargedMessage) ` 内调用 ` Component.empty() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L105) |
| ` @SubscribeEvent public static void chargeBar(RenderGuiLayerEvent.Pre event) ` | 事件总线派发 ` RenderGuiLayerEvent.Pre ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getName().equals(VanillaGuiLayers.EXPERIENCE_BAR) `<br>实现调用 ` event.getName() `<br>实现调用 ` client.player.isSpectator() `<br>实现调用 ` EquipmentAbilities.chargeProgress(client.player) `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L129) |
| ` @SubscribeEvent(priority = EventPriority.LOWEST) public static void clearFluidFog(ViewportEvent.RenderFog event) ` | 事件总线派发 ` ViewportEvent.RenderFog ` 时调用。<br>实现调用 ` event.getCamera().getEntity() `<br>实现调用 ` event.getCamera() `<br>实现调用 ` entity.getItemBySlot(EquipmentSlot.HEAD).is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>实现调用 ` entity.getItemBySlot(EquipmentSlot.HEAD) `<br>实现调用 ` BlockPos.containing(event.getCamera().getPosition()) `<br>实现调用 ` event.getCamera().getPosition() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L140) |
| ` @SubscribeEvent public static void clearWaterOverlay(RenderBlockScreenEffectEvent event) ` | 事件总线派发 ` RenderBlockScreenEffectEvent ` 时调用。<br>实现调用 ` event.getOverlayType() `<br>实现调用 ` event.getPlayer().getItemBySlot(EquipmentSlot.HEAD).is(ModItems.WEATHERPROOF_SPACESUIT_HELMET) `<br>实现调用 ` event.getPlayer().getItemBySlot(EquipmentSlot.HEAD) `<br>实现调用 ` event.getPlayer() `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/EquipmentClientEvents.java#L153) |

## GuiLayerRegistrationEventListener

` public class GuiLayerRegistrationEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L28)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void onRegister(RegisterGuiLayersEvent event) ` | 实现调用 ` event.registerAboveAll(AnvilCraft.of("weatherproof_chestplate"), WeatherproofChestplateHUD::render) `<br>实现调用 ` AnvilCraft.of("weatherproof_chestplate") `<br>实现调用 ` AnvilCraft.of("power_grid_indicator") `<br>实现调用 ` AnvilCraft.of("overworld_like_collapse") `<br>实现调用 ` AnvilCraft.of("power") `<br>实现调用 ` event.registerAboveAll(AnvilCraft.of("test"), GuiLayerRegistrationEventListener::render) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L30) |
| ` public static void render(GuiGraphics guiGraphics, DeltaTracker deltaTracker) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L90) |
| ` public GuiLayerRegistrationEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/GuiLayerRegistrationEventListener.java#L28) |

## HammerEffectRenderEventListener

` public class HammerEffectRenderEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L29)

类型注解 ` @EventBusSubscriber(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Pair<Direction, Component>[] DIRECTION_TEXTS ` | 字段类型为 ` Pair<Direction, Component>[] ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L33) |
| ` public static final ModelResourceLocation MODEL ` | 初值 ` ModelResourceLocation.standalone(AnvilCraft.of("block/axis")) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L34) |
| ` @SubscribeEvent public static void onRender(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` hasHammerEffect.shouldRender() `<br>实现调用 ` hasHammerEffect.renderingBlockPos() `<br>实现调用 ` hasHammerEffect.renderingBlockState() `<br>实现调用 ` hasHammerEffect.renderType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L48) |
| ` public HammerEffectRenderEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/HammerEffectRenderEventListener.java#L29) |

## InvertedActionEventListener

` public class InvertedActionEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/InvertedActionEventListener.java#L16)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static boolean isInverted() ` | 所有 BundleLike 物品共用的反转状态（与客户端配置一致）。<br>末尾返回 ` AnvilCraftClient.CONFIG.controls.invertMouseOverrideActions `<br>[调用处 ClientEventListener.onScreenMousePressedTerminal](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ClientEventListener.java#L290) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/InvertedActionEventListener.java#L22) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance().getConnection() `<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (inverted != InvertedActionEventListener.lastInverted) ` 内调用 ` BundleLikeClientStub.updateInverted(inverted) `<br>分支 ` (bucketInverted != InvertedActionEventListener.lastBucketInverted) ` 内调用 ` StorageClientStub.updateInvertedBucketAction(bucketInverted) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/InvertedActionEventListener.java#L41) |
| ` public InvertedActionEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/InvertedActionEventListener.java#L16) |

## IonocraftBackpackClientHandler

` public class IonocraftBackpackClientHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/IonocraftBackpackClientHandler.java#L32)

飘升机背包客户端处理器 — 负责缓降切换和飞行时的排气粒子效果。 粒子位置跟随玩家身体模型（yBodyRot）旋转，与背包引擎模型实际位置一致。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void onFlyingSync(int playerId, boolean flying) ` | 由 IonocraftBackpackFlyingPacket 在客户端调用，记录服务器同步的飞行状态。<br>分支 ` (flying) ` 内调用 ` SYNCED_FLYING_PLAYERS.add(playerId) `<br>分支 ` !(flying) ` 内调用 ` SYNCED_FLYING_PLAYERS.remove(playerId) `<br>[调用处 IonocraftBackpackFlyingPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/IonocraftBackpackFlyingPacket.java#L37) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/IonocraftBackpackClientHandler.java#L48) |
| ` @SubscribeEvent public static void onMovementInput(MovementInputUpdateEvent event) ` | 事件总线派发 ` MovementInputUpdateEvent ` 时调用。<br>实现调用 ` event.getEntity() `<br>实现调用 ` event.getInput() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.onGround() `<br>实现调用 ` player.isAlive() `<br>实现调用 ` player.isCreative() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/IonocraftBackpackClientHandler.java#L56) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isPaused() `<br>实现调用 ` minecraft.options.getCameraType() `<br>实现调用 ` level.players() `<br>实现调用 ` player.isCreative() `<br>实现调用 ` player.isSpectator() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/IonocraftBackpackClientHandler.java#L82) |
| ` public IonocraftBackpackClientHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/IonocraftBackpackClientHandler.java#L32) |

## LargeBlockPlacePreviewEventListener

` public class LargeBlockPlacePreviewEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L68)

类型注解 ` @EventBusSubscriber(Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void offerMissingAmplifierAnvil(BlockPos anvilPos) ` | 实现调用 ` anvilPos.immutable() `<br>实现调用 ` Util.getMillis() `<br>[调用处 CelestialForgingAnvilBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L795) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L145) |
| ` public static void removeMissingAmplifierAnvil(BlockPos anvilPos) ` | 执行 ` LargeBlockPlacePreviewEventListener.missingAmplifierAnvilPositions.remove(anvilPos) `<br>[调用处 CelestialForgingAnvilBlockEntity.tick](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/entity/CelestialForgingAnvilBlockEntity.java#L797) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L152) |
| ` @SubscribeEvent public static void onLevelUnload(LevelEvent.Unload event) ` | 事件总线派发 ` LevelEvent.Unload ` 时调用。<br>实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>分支 ` (event.getLevel().isClientSide()) ` 内调用 ` LargeBlockPlacePreviewEventListener.missingAmplifierAnvilPositions.clear() `<br>分支 ` (event.getLevel().isClientSide()) ` 内调用 ` renderEntries.clear() `<br>分支 ` (event.getLevel().isClientSide()) ` 内调用 ` placementProjection.clear() `<br>分支 ` (event.getLevel().isClientSide()) ` 内调用 ` amplifierProjection.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L156) |
| ` @SuppressWarnings("BooleanMethodIsAlwaysInverted") public static boolean isPreviewable(Block block) ` | 该方块是否参与放置预览：多方块方块，或 ModBlockTags#PLACEMENT\_PREVIEW 内的单方块。<br>末尾返回 ` block instanceof AbstractMultiPartBlock<?> \|\| block.defaultBlockState().is(ModBlockTags.PLACEMENT_PREVIEW) `<br>[调用处 BuildingRodRenderer.render](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/building/BuildingRodRenderer.java#L109) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L249) |
| ` @SubscribeEvent public static void renderGhost(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` player.isSpectator() `<br>分支 ` (player == null \|\| player.isSpectator() \|\| mc.level == null) ` 内调用 ` LargeBlockPlacePreviewEventListener.renderEntries.clear() `<br>分支 ` (player == null \|\| player.isSpectator() \|\| mc.level == null) ` 内调用 ` LargeBlockPlacePreviewEventListener.missingAmplifierAnvilPositions.clear() `<br>分支 ` (player == null \|\| player.isSpectator() \|\| mc.level == null) ` 内调用 ` placementProjection.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L269) |
| ` public static void startFailBoundCooldown() ` | 实现调用 ` LargeBlockPlacePreviewEventListener.animationActuator.reset() `<br>[调用处 FlexibleMultiPartBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FlexibleMultiPartBlockItem.java#L88) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L587) |
| ` public static void startFailBoundErrorCooldown(List<BlockPos> errorPosList) ` | [调用处 FlexibleMultiPartBlockItem.useOn](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/block/item/FlexibleMultiPartBlockItem.java#L89) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L592) |
| ` public LargeBlockPlacePreviewEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/LargeBlockPlacePreviewEventListener.java#L68) |

## MunMusicHandler

` public final class MunMusicHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/MunMusicHandler.java#L24)

月球背景音乐随机选择首曲后依次轮换，并在曲目之间保留随机静默期。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onSelectMusic(SelectMusicEvent event) ` | 事件总线派发 ` SelectMusicEvent ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getPlayingMusic() `<br>实现调用 ` musicIndex(playingMusic) `<br>实现调用 ` minecraft.level.dimension().equals(CelestialTravelManager.MUN_LEVEL) `<br>实现调用 ` minecraft.level.dimension() `<br>分支 ` (playingIndex >= 0) ` 内调用 ` event.setMusic(null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/MunMusicHandler.java#L36) |
| ` @SubscribeEvent public static void onLogout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/MunMusicHandler.java#L93) |

## NegativeShapeModelEventListener

` public class NegativeShapeModelEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/NegativeShapeModelEventListener.java#L32)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onModelBake(ModelEvent.ModifyBakingResult event) ` | 将负形方块模型的外缘四边形归入方向剔除列表。<br>事件总线派发 ` ModelEvent.ModifyBakingResult ` 时调用。<br>实现调用 ` event.getModels() `<br>实现调用 ` EDGE_RECTANGLES.clear() `<br>实现调用 ` block.getStateDefinition().getPossibleStates() `<br>实现调用 ` block.getStateDefinition() `<br>实现调用 ` BlockModelShaper.stateToModelLocation(state) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/NegativeShapeModelEventListener.java#L44) |
| ` public static boolean shouldSkipFace(BlockState state, BlockState adjacentState, Direction face) ` | ` (!(state.getBlock() instanceof INegativeShapeBlock<?> block) \|\| !block.getBlockType().isInstance(adjacentState.getBlock())) ` 成立时提前返回 ` false `<br>` (selfRectangles.isEmpty()) ` 成立时提前返回 ` false `<br>` (adjacentRectangles.isEmpty()) ` 成立时提前返回 ` false `<br>末尾返回 ` true `<br>实现调用 ` state.getBlock() `<br>实现调用 ` block.getBlockType().isInstance(adjacentState.getBlock()) `<br>实现调用 ` block.getBlockType() `<br>实现调用 ` adjacentState.getBlock() `<br>实现调用 ` getEdgeRectangles(state, face) `<br>实现调用 ` selfRectangles.isEmpty() `<br>[调用处 BlockStateBaseMixin.negativeShapeFaceSkip](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/BlockStateBaseMixin.java#L29) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/NegativeShapeModelEventListener.java#L66) |
| ` public NegativeShapeModelEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/NegativeShapeModelEventListener.java#L32) |

## OverworldLikeVisualEventListener

` public final class OverworldLikeVisualEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeVisualEventListener.java#L15)

Applies the synchronized eclipse to the overworld-like atmospheric fog.

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onComputeFogColor(ViewportEvent.ComputeFogColor event) ` | 事件总线派发 ` ViewportEvent.ComputeFogColor ` 时调用。<br>实现调用 ` event.getCamera().getFluidInCamera() `<br>实现调用 ` event.getCamera() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` CelestialTravelManager.isOverworldLike(level.dimension()) `<br>实现调用 ` level.dimension() `<br>实现调用 ` OverworldLikeClientState.environmentColorMultiplier(level) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/OverworldLikeVisualEventListener.java#L20) |

## QuenchedOutMusicHandler

` public final class QuenchedOutMusicHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L29)

淬灭序曲客户端播放器。 以双声道播放超新星前奏曲 quenched\_out，根据玩家与锻星砧的距离调整音量（约 1 分 12 秒，不循环）。 由 dev.dubhe.anvilcraft.network.QuenchedOutMusicPacket 驱动： 演化进入最后 71 秒时开始播放，锻星砧/增幅器被破坏或加速器被清除时立即停止。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void start(BlockPos pos) ` | 实现调用 ` stop(pos) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isPaused() `<br>实现调用 ` ACTIVE.put(pos, sound) `<br>实现调用 ` minecraft.getSoundManager().play(sound) `<br>实现调用 ` minecraft.getSoundManager() `<br>[调用处 QuenchedOutMusicPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L42) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L37) |
| ` public static void stop(BlockPos pos) ` | 实现调用 ` ACTIVE.remove(pos) `<br>分支 ` (sound != null) ` 内调用 ` sound.finish() `<br>[调用处 QuenchedOutMusicPacket.handleOnClient](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/network/QuenchedOutMusicPacket.java#L44) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L47) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.isPaused() `<br>实现调用 ` ACTIVE.entrySet() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L54) |
| ` @SubscribeEvent public static void onLogout(ClientPlayerNetworkEvent.LoggingOut event) ` | 事件总线派发 ` ClientPlayerNetworkEvent.LoggingOut ` 时调用。<br>实现调用 ` ACTIVE.values().forEach(QuenchedOutSound::finish) `<br>实现调用 ` ACTIVE.values() `<br>实现调用 ` ACTIVE.clear() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/QuenchedOutMusicHandler.java#L62) |

## RedstoneDiceInputListener

` public class RedstoneDiceInputListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L35)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(priority = EventPriority.HIGHEST) public static void onUse(InputEvent.InteractionKeyMappingTriggered event) ` | 事件总线派发 ` InputEvent.InteractionKeyMappingTriggered ` 时调用。<br>实现调用 ` event.isUseItem() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` targetedDice(client) `<br>实现调用 ` event.setCanceled(true) `<br>实现调用 ` event.setSwingHand(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L45) |
| ` @SubscribeEvent public static void onMouseButton(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance().options.keyUse.matchesMouse(event.getButton()) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getButton() `<br>实现调用 ` event.getAction() `<br>分支 ` (event.getAction() == GLFW.GLFW_PRESS) ` 内调用 ` press() `<br>分支 ` (event.getAction() == GLFW.GLFW_RELEASE) ` 内调用 ` release() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L66) |
| ` @SubscribeEvent public static void onKey(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` ModKeyMappings.shouldIgnoreForDebugChord(event.getAction()) `<br>实现调用 ` event.getAction() `<br>实现调用 ` Minecraft.getInstance().options.keyUse.matches(event.getKey(), event.getScanCode()) `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getKey() `<br>实现调用 ` event.getScanCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L73) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Pre event) ` | 事件总线派发 ` ClientTickEvent.Pre ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.isWindowActive() `<br>实现调用 ` client.player.getItemInHand(heldHand).getItem() `<br>实现调用 ` client.player.getItemInHand(heldHand) `<br>分支 ` (wheelScreen != null && client.screen == wheelScreen) ` 内调用 ` client.setScreen(null) `<br>实现调用 ` reset() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L81) |
| ` public RedstoneDiceInputListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RedstoneDiceInputListener.java#L35) |

## RegisterAdditionalEventListener

` public class RegisterAdditionalEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L17)

类型注解 ` @SuppressWarnings("Linelength") `、` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void registerModels(ModelEvent.RegisterAdditional event) ` | 注册模型<br>事件总线派发 ` ModelEvent.RegisterAdditional ` 时调用。<br>实现调用 ` event.register(standaloneItem("crab_claw_holding_block")) `<br>实现调用 ` standaloneItem("crab_claw_holding_block") `<br>实现调用 ` event.register(standaloneItem("crab_claw_holding_block_slab")) `<br>实现调用 ` standaloneItem("crab_claw_holding_block_slab") `<br>实现调用 ` event.register(standaloneItem("crab_claw_holding_block_panel")) `<br>实现调用 ` standaloneItem("crab_claw_holding_block_panel") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L24) |
| ` public RegisterAdditionalEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RegisterAdditionalEventListener.java#L17) |

## RenderEventListener

` public class RenderEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L50)

类型注解 ` @EventBusSubscriber(value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onRenderOverworldLikeSky(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>执行 ` OverworldLikeOrbitalSkyRenderer.render(event) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L62) |
| ` @SubscribeEvent public static void onRenderInspection(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` event.getCamera().getPosition() `<br>实现调用 ` event.getCamera() `<br>实现调用 ` event.getPoseStack() `<br>实现调用 ` event.getPartialTick() `<br>实现调用 ` event.getLevelRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L67) |
| ` @SubscribeEvent public static void onRenderBounce(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` SeismicBounceManager.getInstance() `<br>实现调用 ` event.getPoseStack() `<br>实现调用 ` event.getLevelRenderer().renderBuffers.bufferSource() `<br>实现调用 ` event.getLevelRenderer() `<br>实现调用 ` event.getPartialTick().getGameTimeDeltaPartialTick(Minecraft.getInstance().isPaused()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L82) |
| ` @SubscribeEvent public static void onRenderEnchantedGoldGlints(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` EnchantedGoldBlockGlints.getInstance() `<br>实现调用 ` event.getPoseStack() `<br>实现调用 ` event.getLevelRenderer().renderBuffers.bufferSource() `<br>实现调用 ` event.getLevelRenderer() `<br>实现调用 ` event.getCamera().getPosition() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L95) |
| ` @SubscribeEvent public static void onRender(RenderLevelStageEvent event) ` | 事件总线派发 ` RenderLevelStageEvent ` 时调用。<br>实现调用 ` event.getStage() `<br>实现调用 ` event.getCamera().getEntity() `<br>实现调用 ` event.getCamera() `<br>实现调用 ` event.getPoseStack() `<br>实现调用 ` event.getLevelRenderer().renderBuffers.bufferSource() `<br>实现调用 ` event.getLevelRenderer() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L105) |
| ` public RenderEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/RenderEventListener.java#L50) |

## ResonanceMiningClientEventListener

` public class ResonanceMiningClientEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ResonanceMiningClientEventListener.java#L12)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void suppressAirUse(InputEvent.InteractionKeyMappingTriggered event) ` | 事件总线派发 ` InputEvent.InteractionKeyMappingTriggered ` 时调用。<br>实现调用 ` event.isUseItem() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.hitResult.getType() `<br>实现调用 ` minecraft.player.getItemInHand(event.getHand()) `<br>实现调用 ` event.getHand() `<br>实现调用 ` stack.getItem() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ResonanceMiningClientEventListener.java#L14) |
| ` public ResonanceMiningClientEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ResonanceMiningClientEventListener.java#L12) |

## ScreenShakeEventListener

` public class ScreenShakeEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ScreenShakeEventListener.java#L12)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onCameraAngles(ViewportEvent.ComputeCameraAngles event) ` | 事件总线派发 ` ViewportEvent.ComputeCameraAngles ` 时调用。<br>实现调用 ` ScreenShakeManager.getInstance() `<br>实现调用 ` manager.isActive() `<br>实现调用 ` Minecraft.getInstance().isPaused() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getPartialTick() `<br>实现调用 ` manager.computeAngleOffsets(partialTick) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ScreenShakeEventListener.java#L15) |
| ` public ScreenShakeEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/ScreenShakeEventListener.java#L12) |

## SeismicBounceTickEventListener

` public class SeismicBounceTickEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/SeismicBounceTickEventListener.java#L13)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onTick(ClientTickEvent.Pre e) ` | 事件总线派发 ` ClientTickEvent.Pre ` 时调用。<br>实现调用 ` AnvilParticleManager.tick() `<br>实现调用 ` Minecraft.getInstance().isPaused() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` SeismicBounceManager.getInstance().tick() `<br>实现调用 ` SeismicBounceManager.getInstance() `<br>实现调用 ` ScreenShakeManager.getInstance().tick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/SeismicBounceTickEventListener.java#L16) |
| ` public SeismicBounceTickEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/SeismicBounceTickEventListener.java#L13) |

## StellarVisualReloadListener

` public final class StellarVisualReloadListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StellarVisualReloadListener.java#L13)

客户端资源重载时清理恒星动态贴图缓存。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void register(RegisterClientReloadListenersEvent event) ` | 事件总线派发 ` RegisterClientReloadListenersEvent ` 时调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StellarVisualReloadListener.java#L18) |

## StoragePortHammerGestureListener

` public class StoragePortHammerGestureListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StoragePortHammerGestureListener.java#L38)

仓储端口的铁砧锤手势：手持铁砧锤对已标记的端口长按右键会打开轮盘， 轮盘中只有一个渲染为屏障的「清除标记」选项，选中即清除标记。 普通铁砧锤右键（短按）不会调整任何状态。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onMouseButton(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.options.keyUse.matchesMouse(event.getButton()) `<br>实现调用 ` event.getButton() `<br>实现调用 ` event.getAction() `<br>分支 ` (event.getAction() == GLFW.GLFW_PRESS) ` 内调用 ` StoragePortHammerGestureListener.targetedMarkedPort(client.player) `<br>分支 ` (event.getAction() == GLFW.GLFW_PRESS) ` 内调用 ` client.level.getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StoragePortHammerGestureListener.java#L52) |
| ` @SubscribeEvent public static void onClientTick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>分支 ` (StoragePortHammerGestureListener.wheelOpened) ` 内调用 ` player.isUsingItem() `<br>分支 ` (player.isUsingItem()) ` 内调用 ` player.stopUsingItem() `<br>分支 ` (player.isUsingItem()) ` 内调用 ` Objects.requireNonNull(client.gameMode).releaseUsingItem(player) `<br>分支 ` (player.isUsingItem()) ` 内调用 ` Objects.requireNonNull(client.gameMode) `<br>实现调用 ` level.getGameTime() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StoragePortHammerGestureListener.java#L81) |

## StorageTakeOutListener

` public final class StorageTakeOutListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L25)

仓储端口与创造板条箱共用长按计时，避免取少量物品时立即连续取出。

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent(receiveCanceled = true) public static void onAttack(PlayerInteractEvent.LeftClickBlock event) ` | 事件总线派发 ` PlayerInteractEvent.LeftClickBlock ` 时调用。<br>实现调用 ` event.getLevel().isClientSide() `<br>实现调用 ` event.getLevel() `<br>实现调用 ` event.getAction() `<br>实现调用 ` findTarget() `<br>实现调用 ` next.getBlockPos().equals(event.getPos()) `<br>实现调用 ` next.getBlockPos() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L34) |
| ` @SubscribeEvent public static void onMouse(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance().options.keyAttack.getKey() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getAction() `<br>实现调用 ` key.getType() `<br>实现调用 ` key.getValue() `<br>实现调用 ` event.getButton() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L55) |
| ` @SubscribeEvent public static void onKey(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` Minecraft.getInstance().options.keyAttack.getKey() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getAction() `<br>实现调用 ` key.getValue() `<br>实现调用 ` key.getType() `<br>实现调用 ` event.getScanCode() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L64) |
| ` @SubscribeEvent public static void tick(ClientTickEvent.Post event) ` | 事件总线派发 ` ClientTickEvent.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` client.options.keyAttack.isDown() `<br>实现调用 ` findTarget() `<br>实现调用 ` client.level.getGameTime() `<br>分支 ` (now - lastTakeAt >= interval) ` 内调用 ` take(now) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/StorageTakeOutListener.java#L74) |

## TerminalKeyMappingEventListener

` public class TerminalKeyMappingEventListener `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalKeyMappingEventListener.java#L20)

类型注解 ` @EventBusSubscriber(modid = AnvilCraft.MOD_ID, value = Dist.CLIENT) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @SubscribeEvent public static void onKeyPressed(InputEvent.Key event) ` | 事件总线派发 ` InputEvent.Key ` 时调用。<br>实现调用 ` ModKeyMappings.shouldIgnoreForDebugChord(event.getAction()) `<br>实现调用 ` event.getAction() `<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` TerminalKeyMappingEventListener.tryOpenTerminal(InputConstants.getKey(event.getKey(), event.getScanCode())) `<br>实现调用 ` InputConstants.getKey(event.getKey(), event.getScanCode()) `<br>实现调用 ` event.getKey() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalKeyMappingEventListener.java#L22) |
| ` @SubscribeEvent public static void onMousePressed(InputEvent.MouseButton.Post event) ` | 事件总线派发 ` InputEvent.MouseButton.Post ` 时调用。<br>实现调用 ` Minecraft.getInstance() `<br>实现调用 ` event.getAction() `<br>实现调用 ` TerminalKeyMappingEventListener.tryOpenTerminal(InputConstants.Type.MOUSE.getOrCreate(event.getButton())) `<br>实现调用 ` InputConstants.Type.MOUSE.getOrCreate(event.getButton()) `<br>实现调用 ` event.getButton() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalKeyMappingEventListener.java#L30) |
| ` @SubscribeEvent(priority = EventPriority.LOW) public static void onScreenKeyPressed(ScreenEvent.KeyPressed.Pre event) ` | 事件总线派发 ` ScreenEvent.KeyPressed.Pre ` 时调用。<br>实现调用 ` ModKeyMappings.isDebugChordActive() `<br>实现调用 ` InputConstants.getKey(event.getKeyCode(), event.getScanCode()) `<br>实现调用 ` event.getKeyCode() `<br>实现调用 ` event.getScanCode() `<br>实现调用 ` TerminalKeyMappingEventListener.isInventoryScreen(event.getScreen()) `<br>实现调用 ` event.getScreen() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalKeyMappingEventListener.java#L37) |
| ` @SubscribeEvent(priority = EventPriority.HIGH) public static void onScreenMousePressed(ScreenEvent.MouseButtonPressed.Pre event) ` | 事件总线派发 ` ScreenEvent.MouseButtonPressed.Pre ` 时调用。<br>实现调用 ` TerminalKeyMappingEventListener.isInventoryScreen(event.getScreen()) `<br>实现调用 ` event.getScreen() `<br>实现调用 ` TerminalKeyMappingEventListener.tryOpenTerminal(InputConstants.Type.MOUSE.getOrCreate(event.getButton())) `<br>实现调用 ` InputConstants.Type.MOUSE.getOrCreate(event.getButton()) `<br>实现调用 ` event.getButton() `<br>实现调用 ` event.setCanceled(true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalKeyMappingEventListener.java#L56) |
| ` public TerminalKeyMappingEventListener() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/event/TerminalKeyMappingEventListener.java#L20) |
