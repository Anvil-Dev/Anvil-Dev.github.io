# 事件

按要介入的动作选择事件。手持磁铁通过模组事件总线发布，其余各页列出的运行时事件使用 `NeoForge.EVENT_BUS`。可取消的事件是否会停止游戏行为，取决于发布者怎样处理取消标记。

| 附属功能 | 完整监听器示例 |
| --- | --- |
| 为自己的物品追加悬停说明 | [逐行写入提示文本](./append-custom-hover-text-event) |
| 按玩家装备调整磁铁的拾取半径 | [向模组总线订阅磁铁事件](./use-magnet-event) |
| 按位置调整燃烧鱼缸的接触伤害 | [限制特定区域内的鱼缸伤害](./fish-tank-event) |

## 其他调用场景

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
