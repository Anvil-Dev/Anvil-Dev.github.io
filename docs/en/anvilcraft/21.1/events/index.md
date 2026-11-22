# Events

First identify the action you want to intercept, then check where in the game logic the event is constructed. Open the call site to verify which bus dispatches it, which side it runs on, and whether the poster checks cancellation or result flags.

- [AmuletEvent](./amulet-event)
- [AnvilBehaviorRegisterEvent](./anvil-behavior-register-event)
- [AnvilEvent](./anvil-event)
- [BlockEntityEvent](./block-entity-event)
- [CheckIntegrationLoadedEvent](./check-integration-loaded-event)
- [EntityThroughPortalEvent](./entity-through-portal-event)
- [FishTankEvent](./fish-tank-event)
- [GiantAnvilEvent](./giant-anvil-event)
- [GuideBookEvent](./guide-book-event)
- [HammerChangeBlockEvent](./hammer-change-block-event)
- [ItemEntityEvent](./item-entity-event)
- [LargeCauldronEvent](./large-cauldron-event)
- [LightningBoltStrikeEvent](./lightning-bolt-strike-event)
- [ModCategoryInitEvent](./mod-category-init-event)
- [PrimerEnchantmentsEvent](./primer-enchantments-event)
- [SlidingBlockEvent](./sliding-block-event)
- [SmartBlockPlacerFindPointerEvent](./smart-block-placer-find-pointer-event)
- [StorageUnlockCraftingEvent](./storage-unlock-crafting-event)
- [TeslaStrikeEvent](./tesla-strike-event)
- [UseMagnetEvent](./use-magnet-event)
