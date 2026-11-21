# dev.dubhe.anvilcraft.mixin.accessor



## AbstractContainerMenuSlotsAccessor

` public interface AbstractContainerMenuSlotsAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractContainerMenuSlotsAccessor.java#L13)

暴露 lastSlots 与 remoteSlots：两者由 AbstractContainerMenu#addSlot 与 slots 同步维护，某些原版代码会绕过它，需要外部校正长度。

类型注解 ` @Mixin(AbstractContainerMenu.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("lastSlots") NonNullList<ItemStack> getLastSlots() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractContainerMenuSlotsAccessor.java#L15) |
| ` @Accessor("remoteSlots") NonNullList<ItemStack> getRemoteSlots() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractContainerMenuSlotsAccessor.java#L18) |

## AvoidEntityGoalAccessor

` public interface AvoidEntityGoalAccessor<T extends LivingEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AvoidEntityGoalAccessor.java#L8)

类型注解 ` @Mixin(AvoidEntityGoal.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Class<T> getAvoidClass() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AvoidEntityGoalAccessor.java#L10) |

## BaseSpawnerAccessor

` public interface BaseSpawnerAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L18)

BaseSpawner访问器

类型注解 ` @Mixin(BaseSpawner.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker SpawnData invokeGetOrCreateNextSpawnData(@Nullable Level level, RandomSource random, BlockPos pos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L20) |
| ` @Invoker void invokeSetNextSpawnData(@Nullable Level level, BlockPos pos, SpawnData spawnData) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L23) |
| ` @Accessor int getSpawnCount() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L26) |
| ` @Accessor int getMaxNearbyEntities() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L29) |
| ` @Accessor int getSpawnRange() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L32) |
| ` @Accessor void setSpawnPotentials(SimpleWeightedRandomList<SpawnData> spawnPotentials) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L35) |
| ` @Accessor void setDisplayEntity(@Nullable Entity displayEntity) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L38) |

## BlueprintBlockEventsAccessor

` public interface BlueprintBlockEventsAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BlueprintBlockEventsAccessor.java#L9)

类型注解 ` @Mixin(ServerLevel.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("blockEvents") ObjectLinkedOpenHashSet<BlockEventData> anvilcraft$getBlockEvents() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BlueprintBlockEventsAccessor.java#L11) |

## CreativeModeTabAccessor

` public interface CreativeModeTabAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CreativeModeTabAccessor.java#L7)

类型注解 ` @Mixin(CreativeModeTab.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("displayItemsGenerator") CreativeModeTab.DisplayItemsGenerator anvilcraft$getDisplayItemsGenerator() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CreativeModeTabAccessor.java#L9) |

## CropBlockAccessor

` public interface CropBlockAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CropBlockAccessor.java#L9)

类型注解 ` @Mixin(CropBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker ItemLike invokeGetBaseSeedId() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CropBlockAccessor.java#L11) |
| ` @Invoker IntegerProperty invokeGetAgeProperty() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CropBlockAccessor.java#L14) |

## DelegateBorderChangeListenerAccessor

` public interface DelegateBorderChangeListenerAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/DelegateBorderChangeListenerAccessor.java#L8)

类型注解 ` @Mixin(BorderChangeListener.DelegateBorderChangeListener.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("worldBorder") WorldBorder getWorldBorder() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/DelegateBorderChangeListenerAccessor.java#L10) |

## EntityAccessor

` public interface EntityAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/EntityAccessor.java#L7)

类型注解 ` @Mixin(Entity.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor void setWasTouchingWater(boolean flag) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/EntityAccessor.java#L10) |

## GrowingPlantAccessor

` public interface GrowingPlantAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/GrowingPlantAccessor.java#L8)

类型注解 ` @Mixin(GrowingPlantBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker GrowingPlantHeadBlock invokeGetHeadBlock() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/GrowingPlantAccessor.java#L10) |

## MinecraftServerAccessor

` public interface MinecraftServerAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MinecraftServerAccessor.java#L9)

类型注解 ` @Mixin(MinecraftServer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Services getServices() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MinecraftServerAccessor.java#L11) |
| ` @Accessor("storageSource") LevelStorageSource.LevelStorageAccess getStorageSource() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MinecraftServerAccessor.java#L14) |

## ModelBakeryAccessor

` public interface ModelBakeryAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ModelBakeryAccessor.java#L12)

类型注解 ` @Mixin(ModelBakery.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Map<ModelResourceLocation, UnbakedModel> getTopLevelModels() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ModelBakeryAccessor.java#L14) |
| ` @Accessor Map<ResourceLocation, UnbakedModel> getUnbakedCache() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ModelBakeryAccessor.java#L17) |

## MultiPlayerGameModeAccessor

` public interface MultiPlayerGameModeAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MultiPlayerGameModeAccessor.java#L7)

类型注解 ` @Mixin(MultiPlayerGameMode.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor void setDestroyDelay(int delay) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MultiPlayerGameModeAccessor.java#L9) |

## PortalProcessorAccessor

` public interface PortalProcessorAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/PortalProcessorAccessor.java#L8)

类型注解 ` @Mixin(PortalProcessor.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Portal getPortal() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/PortalProcessorAccessor.java#L10) |

## RedStoneWireBlockAccessor

` public interface RedStoneWireBlockAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/RedStoneWireBlockAccessor.java#L10)

类型注解 ` @Mixin(RedStoneWireBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker("getConnectionState") BlockState anvilcraft$getConnectionState(BlockGetter level, BlockState state, BlockPos pos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/RedStoneWireBlockAccessor.java#L12) |

## RenderSystemAccessor

` public interface RenderSystemAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/RenderSystemAccessor.java#L8)

类型注解 ` @Mixin(RenderSystem.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("shaderLightDirections") static Vector3f[] anvilcraft$getShaderLightDirections() ` | [调用处 PreviewRenderState.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/client/support/PreviewRenderState.java#L56) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/RenderSystemAccessor.java#L10) |

## ScreenAccessor

` public interface ScreenAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ScreenAccessor.java#L8)

类型注解 ` @Mixin(Screen.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Font getFont() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ScreenAccessor.java#L10) |

## ShapedRecipePatternAccessor

` public interface ShapedRecipePatternAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ShapedRecipePatternAccessor.java#L9)

类型注解 ` @Mixin(ShapedRecipePattern.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Optional<ShapedRecipePattern.Data> getData() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ShapedRecipePatternAccessor.java#L11) |

## TargetingConditionsAccessor

` public interface TargetingConditionsAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/TargetingConditionsAccessor.java#L11)

类型注解 ` @Mixin(TargetingConditions.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable @Accessor Predicate<LivingEntity> getSelector() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/TargetingConditionsAccessor.java#L13) |

## VaultServerDataAccessor

` public interface VaultServerDataAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VaultServerDataAccessor.java#L11)

类型注解 ` @Mixin(VaultServerData.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker void invokeMarkChanged() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VaultServerDataAccessor.java#L14) |
| ` @Accessor Set<UUID> getRewardedPlayers() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VaultServerDataAccessor.java#L17) |

## VillagerAccessor

` public interface VillagerAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VillagerAccessor.java#L8)

类型注解 ` @Mixin(Villager.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor void setUpdateMerchantTimer(int timer) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VillagerAccessor.java#L11) |
| ` @Accessor void setIncreaseProfessionLevelOnUpdate(boolean flag) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VillagerAccessor.java#L14) |
| ` @Invoker boolean invokeShouldIncreaseLevel() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VillagerAccessor.java#L17) |

## WorldBorderAccessor

` public interface WorldBorderAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/WorldBorderAccessor.java#L10)

类型注解 ` @Mixin(WorldBorder.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker("getListeners") List<BorderChangeListener> invokeGetListeners() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/WorldBorderAccessor.java#L12) |
