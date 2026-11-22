# Events

Select an event by the action you want to intercept. Handheld magnets post on the mod event bus, while the runtime events listed on the remaining pages use `NeoForge.EVENT_BUS`. Whether a cancelable event stops game behavior depends on how the poster handles the cancellation flag.

| Add-on Feature | Complete Listener Example |
| --- | --- |
| Appending hover tooltips to your own items | [Appending Tooltip Lines](./append-custom-hover-text-event) |
| Adjusting magnet attraction radius by player equipment | [Subscribing to Magnet Events on the Mod Bus](./use-magnet-event) |
| Adjusting contact damage of lit fish tanks by position | [Limiting Fish Tank Damage in Specific Areas](./fish-tank-event) |

## Other Call Sites

- [AmuletEvent](./amulet-event)
- [AnvilBehaviorRegisterEvent](./anvil-behavior-register-event)
- [AnvilEvent](./anvil-event)
- [AppendCustomHoverTextEvent](./append-custom-hover-text-event)
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
- [PrimerEnchantmentsEvent](./primer-enchantments-event)
- [SlidingBlockEvent](./sliding-block-event)
- [SmartBlockPlacerFindPointerEvent](./smart-block-placer-find-pointer-event)
- [StorageUnlockCraftingEvent](./storage-unlock-crafting-event)
- [TeslaStrikeEvent](./tesla-strike-event)
- [UseMagnetEvent](./use-magnet-event)
