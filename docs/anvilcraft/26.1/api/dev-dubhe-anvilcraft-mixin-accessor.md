# dev.dubhe.anvilcraft.mixin.accessor



## AbstractArrowAccessor

` public interface AbstractArrowAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractArrowAccessor.java#L13)

类型注解 ` @Mixin(AbstractArrow.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor int getLife() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractArrowAccessor.java#L15) |
| ` @Accessor void setLife(int life) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractArrowAccessor.java#L18) |
| ` @Accessor double getBaseDamage() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractArrowAccessor.java#L21) |
| ` @Accessor @Nullable IntOpenHashSet getPiercingIgnoreEntityIds() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractArrowAccessor.java#L24) |
| ` @Accessor void setPiercingIgnoreEntityIds(IntOpenHashSet piercingIgnoreEntityIds) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractArrowAccessor.java#L28) |
| ` @Accessor @Nullable List<Entity> getPiercedAndKilledEntities() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractArrowAccessor.java#L31) |
| ` @Accessor @Nullable ItemStack getFiredFromWeapon() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractArrowAccessor.java#L35) |

## AbstractContainerMenuSlotsAccessor

` public interface AbstractContainerMenuSlotsAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractContainerMenuSlotsAccessor.java#L12)

类型注解 ` @Mixin(AbstractContainerMenu.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("lastSlots") NonNullList<ItemStack> anvilcraft$getLastSlots() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractContainerMenuSlotsAccessor.java#L14) |
| ` @Accessor("remoteSlots") NonNullList<RemoteSlot> anvilcraft$getRemoteSlots() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractContainerMenuSlotsAccessor.java#L17) |
| ` @Accessor("synchronizer") @Nullable ContainerSynchronizer anvilcraft$getSynchronizer() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AbstractContainerMenuSlotsAccessor.java#L20) |

## AvoidEntityGoalAccessor

` public interface AvoidEntityGoalAccessor<T extends LivingEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AvoidEntityGoalAccessor.java#L8)

类型注解 ` @Mixin(AvoidEntityGoal.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Class<T> getAvoidClass() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/AvoidEntityGoalAccessor.java#L10) |

## BaseSpawnerAccessor

` public interface BaseSpawnerAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L16)

BaseSpawner访问器

类型注解 ` @Mixin(BaseSpawner.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker SpawnData invokeGetOrCreateNextSpawnData(@Nullable Level level, RandomSource random, BlockPos pos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L18) |
| ` @Invoker void invokeSetNextSpawnData(@Nullable Level level, BlockPos pos, SpawnData spawnData) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L21) |
| ` @Accessor int getSpawnCount() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L24) |
| ` @Accessor int getMaxNearbyEntities() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L27) |
| ` @Accessor int getSpawnRange() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L30) |
| ` @Accessor void setSpawnPotentials(WeightedList<SpawnData> spawnPotentials) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L33) |
| ` @Accessor void setDisplayEntity(@Nullable Entity displayEntity) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BaseSpawnerAccessor.java#L36) |

## BlueprintBlockEventsAccessor

` public interface BlueprintBlockEventsAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BlueprintBlockEventsAccessor.java#L9)

类型注解 ` @Mixin(ServerLevel.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("blockEvents") ObjectLinkedOpenHashSet<BlockEventData> anvilcraft$getBlockEvents() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BlueprintBlockEventsAccessor.java#L11) |

## BuildingRodItemLayerAccessor

` public interface BuildingRodItemLayerAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BuildingRodItemLayerAccessor.java#L8)

类型注解 ` @Mixin(ItemStackRenderState.LayerRenderState.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker("applyTransform") void anvilcraft$applyTransform(PoseStack.Pose pose) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/BuildingRodItemLayerAccessor.java#L10) |

## CreativeModeTabAccessor

` public interface CreativeModeTabAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CreativeModeTabAccessor.java#L7)

类型注解 ` @Mixin(CreativeModeTab.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("displayItemsGenerator") CreativeModeTab.DisplayItemsGenerator anvilcraft$getDisplayItemsGenerator() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CreativeModeTabAccessor.java#L9) |

## CropBlockAccessor

` public interface CropBlockAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CropBlockAccessor.java#L9)

类型注解 ` @Mixin(CropBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker ItemLike invokeGetBaseSeedId() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CropBlockAccessor.java#L11) |
| ` @Invoker IntegerProperty invokeGetAgeProperty() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/CropBlockAccessor.java#L14) |

## EntityAccessor

` public interface EntityAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/EntityAccessor.java#L7)

类型注解 ` @Mixin(Entity.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor void setWasTouchingWater(boolean wasTouchingWater) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/EntityAccessor.java#L9) |

## EntityTypeAccessor

` public interface EntityTypeAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/EntityTypeAccessor.java#L7)

类型注解 ` @Mixin(EntityType.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("factory") EntityType.EntityFactory<?> anvilcraft$getFactory() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/EntityTypeAccessor.java#L9) |

## FluidStateModelSetAccessor

` public interface FluidStateModelSetAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/FluidStateModelSetAccessor.java#L11)

类型注解 ` @Mixin(FluidStateModelSet.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Map<Fluid, FluidModel> getModelByFluid() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/FluidStateModelSetAccessor.java#L13) |
| ` @Accessor FluidModel getMissingModel() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/FluidStateModelSetAccessor.java#L16) |

## GrowingPlantAccessor

` public interface GrowingPlantAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/GrowingPlantAccessor.java#L8)

类型注解 ` @Mixin(GrowingPlantBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker GrowingPlantHeadBlock invokeGetHeadBlock() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/GrowingPlantAccessor.java#L10) |

## GuiBlurBoundaryAccessor

` public interface GuiBlurBoundaryAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/GuiBlurBoundaryAccessor.java#L7)

类型注解 ` @Mixin(GuiRenderState.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("firstStratumAfterBlur") int anvilcraft$firstStratumAfterBlur() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/GuiBlurBoundaryAccessor.java#L9) |

## LevelRendererAccessor

` public interface LevelRendererAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/LevelRendererAccessor.java#L8)

类型注解 ` @Mixin(LevelRenderer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor SubmitNodeStorage getSubmitNodeStorage() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/LevelRendererAccessor.java#L10) |

## LivingEntityAccessor

` public interface LivingEntityAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/LivingEntityAccessor.java#L8)

类型注解 ` @Mixin(LivingEntity.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker("travelInWater") void anvilcraft$travelInWater(Vec3 input, double gravity, boolean falling, double oldY) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/LivingEntityAccessor.java#L10) |

## MinecraftServerAccessor

` public interface MinecraftServerAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MinecraftServerAccessor.java#L13)

类型注解 ` @Mixin(MinecraftServer.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor("storageSource") LevelStorageSource.LevelStorageAccess anvilcraft$getStorageSource() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MinecraftServerAccessor.java#L15) |
| ` @Accessor("levels") Map<ResourceKey<Level>, ServerLevel> anvilcraft$getLevels() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MinecraftServerAccessor.java#L18) |

## MultiPlayerGameModeAccessor

` public interface MultiPlayerGameModeAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MultiPlayerGameModeAccessor.java#L7)

类型注解 ` @Mixin(MultiPlayerGameMode.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor void setDestroyDelay(int delay) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/MultiPlayerGameModeAccessor.java#L9) |

## PortalProcessorAccessor

` public interface PortalProcessorAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/PortalProcessorAccessor.java#L8)

类型注解 ` @Mixin(PortalProcessor.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Portal getPortal() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/PortalProcessorAccessor.java#L10) |

## RedStoneWireBlockAccessor

` public interface RedStoneWireBlockAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/RedStoneWireBlockAccessor.java#L10)

类型注解 ` @Mixin(RedStoneWireBlock.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker("getConnectionState") BlockState anvilcraft$getConnectionState(BlockGetter level, BlockState state, BlockPos pos) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/RedStoneWireBlockAccessor.java#L12) |

## ScreenAccessor

` public interface ScreenAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ScreenAccessor.java#L8)

类型注解 ` @Mixin(Screen.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Font getFont() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ScreenAccessor.java#L10) |

## ShapedRecipePatternAccessor

` public interface ShapedRecipePatternAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ShapedRecipePatternAccessor.java#L9)

类型注解 ` @Mixin(ShapedRecipePattern.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor Optional<ShapedRecipePattern.Data> getData() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/ShapedRecipePatternAccessor.java#L11) |

## StacksResourceHandlerAccessor

` public interface StacksResourceHandlerAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/StacksResourceHandlerAccessor.java#L10)

类型注解 ` @Mixin(StacksResourceHandler.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor ArrayList<SnapshotJournal<?>> getSnapshotJournals() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/StacksResourceHandlerAccessor.java#L12) |

## TargetingConditionsAccessor

` public interface TargetingConditionsAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/TargetingConditionsAccessor.java#L8)

类型注解 ` @Mixin(TargetingConditions.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor TargetingConditions.@Nullable Selector getSelector() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/TargetingConditionsAccessor.java#L10) |

## VaultServerDataAccessor

` public interface VaultServerDataAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VaultServerDataAccessor.java#L11)

类型注解 ` @Mixin(VaultServerData.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Invoker void invokeMarkChanged() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VaultServerDataAccessor.java#L14) |
| ` @Accessor Set<UUID> getRewardedPlayers() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VaultServerDataAccessor.java#L17) |

## VillagerAccessor

` public interface VillagerAccessor `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VillagerAccessor.java#L8)

类型注解 ` @Mixin(Villager.class) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Accessor void setUpdateMerchantTimer(int timer) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VillagerAccessor.java#L11) |
| ` @Accessor void setIncreaseProfessionLevelOnUpdate(boolean flag) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VillagerAccessor.java#L14) |
| ` @Invoker boolean invokeShouldIncreaseLevel() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/accessor/VillagerAccessor.java#L17) |
