# dev.dubhe.anvilcraft.api.entity.fakeplayer



## AnvilCraftFakeBlockPlacer

` public class AnvilCraftFakeBlockPlacer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L33)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AnvilCraftFakeBlockPlacer() ` | 当前实现的方法体为空。<br>[调用处 LevelEventListener.onLevelLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L50) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L41) |
| ` public ServerPlayer offerPlayer(ServerLevel level) ` | 末尾返回 ` placer.player() `<br>实现调用 ` this.disabledPlacers.poll() `<br>分支 ` (placer == null) ` 内调用 ` this.enabledPlacers.size() `<br>实现调用 ` this.enabledPlacers.add(placer) `<br>实现调用 ` placer.player() `<br>[调用处 AnvilCraftFakeBlockPlacer.placeBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L96) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L44) |
| ` public InteractionResult placeBlock( Level level, BlockPos pos, Orientation orientation, BlockItem blockItem, ItemStack stack ) ` | 放置方块<br>参数 ` level ` 放置世界<br>参数 ` pos ` 放置位置<br>参数 ` orientation ` 放置方向<br>参数 ` blockItem ` 放置方块物品<br>返回 放置结果<br>末尾返回 ` this.placeBlock(level, pos, orientation, blockItem, stack, null) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L60) |
| ` public InteractionResult placeBlock( Level level, BlockPos pos, Orientation orientation, BlockItem blockItem, ItemStack stack, @Nullable BlockState placementState ) ` | 放置方块<br>参数 ` level ` 放置世界<br>参数 ` pos ` 放置位置<br>参数 ` orientation ` 放置方向<br>参数 ` blockItem ` 放置方块物品<br>返回 放置结果<br>` (AnvilCraftFakePlayers.BLOCK_PLACER_BLACKLIST.contains(BuiltInRegistries.BLOCK.getKey(blockItem.getBlock()).toString())) ` 成立时提前返回 ` InteractionResult.FAIL `<br>` ( placementState != null && placementState.getBlock() != blockItem.getBlock() && placementState.getBlock().asItem() != blockItem ) ` 成立时提前返回 ` InteractionResult.FAIL `<br>` (!(level instanceof ServerLevel serverLevel)) ` 成立时提前返回 ` InteractionResult.FAIL `<br>实现调用 ` BuiltInRegistries.BLOCK.getKey(blockItem.getBlock()).toString() `<br>实现调用 ` BuiltInRegistries.BLOCK.getKey(blockItem.getBlock()) `<br>实现调用 ` blockItem.getBlock() `<br>实现调用 ` placementState.getBlock() `<br>实现调用 ` placementState.getBlock().asItem() `<br>实现调用 ` this.offerPlayer(serverLevel) `<br>[调用处 AnvilCraftFakeBlockPlacer.placeBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L67) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L77) |
| ` public void disable(ServerPlayer player) ` | 实现调用 ` placer.getUUID().equals(player.getUUID()) `<br>实现调用 ` placer.getUUID() `<br>实现调用 ` player.getUUID() `<br>实现调用 ` placer.player().setItemInHand(InteractionHand.MAIN_HAND, ItemStack.EMPTY) `<br>实现调用 ` placer.player() `<br>实现调用 ` this.disabledPlacers.offer(placer) `<br>[调用处 AnvilCraftFakeBlockPlacer.placeBlock](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L150) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L171) |
| ` public void clear(ServerLevel level) ` | 实现调用 ` this.disabledPlacers.removeIf(placer -> AnvilCraftFakePlayers.clearIfInLevel(placer.player(), level)) `<br>实现调用 ` this.enabledPlacers.removeIf(placer -> AnvilCraftFakePlayers.clearIfInLevel(placer.player(), level)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L183) |

## AnvilCraftFakeBlockPlacer.Placer

` public record Placer(ServerPlayer player) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L190)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Placer(ServerLevel level, int profile) ` | 执行 ` this(FakePlayerFactory.get(level, Placer.create(profile))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L191) |
| ` public UUID getUUID() ` | 末尾返回 ` this.player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L199) |
| ` public ServerPlayer player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L190) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L190) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L190) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeBlockPlacer.java#L190) |

## AnvilCraftFakeDestroyer

` public class AnvilCraftFakeDestroyer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L19)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AnvilCraftFakeDestroyer() ` | 当前实现的方法体为空。<br>[调用处 LevelEventListener.onLevelLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L52) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L28) |
| ` public ServerPlayer offerPlayer(ServerLevel level) ` | 末尾返回 ` destroyer.player() `<br>实现调用 ` this.disabledDestroyers.poll() `<br>分支 ` (destroyer == null) ` 内调用 ` this.enabledDestroyers.size() `<br>实现调用 ` this.enabledDestroyers.add(destroyer) `<br>实现调用 ` destroyer.player() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L31) |
| ` public void enabledDestroy(ServerPlayer player, ItemStack itemStack) ` | 实现调用 ` player.setItemInHand(InteractionHand.MAIN_HAND, this.dummyBreakTool.copy()) `<br>实现调用 ` this.dummyBreakTool.copy() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L40) |
| ` public void disable(ServerPlayer player) ` | 实现调用 ` destroyer.getUUID().equals(player.getUUID()) `<br>实现调用 ` destroyer.getUUID() `<br>实现调用 ` player.getUUID() `<br>实现调用 ` destroyer.player().setItemInHand(InteractionHand.MAIN_HAND, ItemStack.EMPTY) `<br>实现调用 ` destroyer.player() `<br>实现调用 ` this.disabledDestroyers.offer(destroyer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L47) |
| ` public void clear(ServerLevel level) ` | 实现调用 ` this.disabledDestroyers.removeIf(destroyer -> AnvilCraftFakePlayers.clearIfInLevel(destroyer.player(), level)) `<br>实现调用 ` this.enabledDestroyers.removeIf(destroyer -> AnvilCraftFakePlayers.clearIfInLevel(destroyer.player(), level)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L59) |

## AnvilCraftFakeDestroyer.Destroyer

` public record Destroyer(ServerPlayer player) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L67)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Destroyer(ServerLevel level, int profile) ` | 执行 ` this(FakePlayerFactory.get(level, Destroyer.create(profile))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L68) |
| ` public UUID getUUID() ` | 末尾返回 ` this.player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L76) |
| ` public ServerPlayer player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L67) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L67) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L67) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeDestroyer.java#L67) |

## AnvilCraftFakeKiller

` public class AnvilCraftFakeKiller `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L25)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public AnvilCraftFakeKiller() ` | 当前实现的方法体为空。<br>[调用处 LevelEventListener.onLevelLoad](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L51) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L36) |
| ` public ServerPlayer offerPlayer(ServerLevel level) ` | 末尾返回 ` killer.player() `<br>实现调用 ` this.disabledKillers.poll() `<br>分支 ` (killer == null) ` 内调用 ` this.enabledKillers.size() `<br>实现调用 ` this.enabledKillers.add(killer) `<br>实现调用 ` killer.player() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L39) |
| ` public void enableLooting5(ServerLevel level, ServerPlayer player) ` | 分支 ` (this.dummyLooting5Weapon == null) ` 内调用 ` Items.POTATO.getDefaultInstance() `<br>分支 ` (this.dummyLooting5Weapon == null) ` 内调用 ` weapon.set(DataComponents.CUSTOM_NAME, Component.literal("Looting 5 Potato!!!")) `<br>分支 ` (this.dummyLooting5Weapon == null) ` 内调用 ` Component.literal("Looting 5 Potato!!!") `<br>分支 ` (this.dummyLooting5Weapon == null) ` 内调用 ` level.holderLookup(Registries.ENCHANTMENT) .get(Enchantments.LOOTING) .ifPresent(e -> weapon.enchant(e, 5)) `<br>分支 ` (this.dummyLooting5Weapon == null) ` 内调用 ` level.holderLookup(Registries.ENCHANTMENT) .get(Enchantments.LOOTING) `<br>分支 ` (this.dummyLooting5Weapon == null) ` 内调用 ` level.holderLookup(Registries.ENCHANTMENT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L48) |
| ` public void enableDisintegration(ServerLevel level, ServerPlayer player) ` | 分支 ` (this.dummyDisintegrationWeapon == null) ` 内调用 ` Items.QUARTZ.getDefaultInstance() `<br>分支 ` (this.dummyDisintegrationWeapon == null) ` 内调用 ` weapon.set(DataComponents.CUSTOM_NAME, Component.literal("Disintegration Quartz!!!")) `<br>分支 ` (this.dummyDisintegrationWeapon == null) ` 内调用 ` Component.literal("Disintegration Quartz!!!") `<br>分支 ` (this.dummyDisintegrationWeapon == null) ` 内调用 ` level.holderLookup(Registries.ENCHANTMENT) .get(ModEnchantments.DISINTEGRATION_KEY) `<br>分支 ` (this.dummyDisintegrationWeapon == null) ` 内调用 ` level.holderLookup(Registries.ENCHANTMENT) `<br>实现调用 ` player.setItemInHand(InteractionHand.MAIN_HAND, this.dummyDisintegrationWeapon.copy()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L60) |
| ` public void disable(ServerPlayer player) ` | 实现调用 ` killer.getUUID().equals(player.getUUID()) `<br>实现调用 ` killer.getUUID() `<br>实现调用 ` player.getUUID() `<br>实现调用 ` killer.player().setItemInHand(InteractionHand.MAIN_HAND, ItemStack.EMPTY) `<br>实现调用 ` killer.player() `<br>实现调用 ` this.disabledKillers.offer(killer) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L72) |
| ` public void clear(ServerLevel level) ` | 实现调用 ` this.disabledKillers.removeIf(killer -> AnvilCraftFakePlayers.clearIfInLevel(killer.player(), level)) `<br>实现调用 ` this.enabledKillers.removeIf(killer -> AnvilCraftFakePlayers.clearIfInLevel(killer.player(), level)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L84) |

## AnvilCraftFakeKiller.Killer

` public record Killer(ServerPlayer player) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L93)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Killer(ServerLevel level, int profile) ` | 执行 ` this(FakePlayerFactory.get(level, Killer.create(profile))) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L94) |
| ` public UUID getUUID() ` | 末尾返回 ` this.player.getUUID() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L102) |
| ` public ServerPlayer player() ` | 读取 record 分量 ` player ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L93) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L93) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L93) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakeKiller.java#L93) |

## AnvilCraftFakePlayers

` public class AnvilCraftFakePlayers `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static Set<String> BLOCK_PLACER_BLACKLIST ` | 初值 ` new HashSet<>() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L15) |
| ` @Nullable public static AnvilCraftFakeBlockPlacer blockPlacer ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L16) |
| ` @Nullable public static AnvilCraftFakeKiller killer ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L17) |
| ` @Nullable public static AnvilCraftFakeDestroyer destroyer ` | 初值 ` null ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L18) |
| ` public static AnvilCraftFakeBlockPlacer getBlockPlacer() ` | 末尾返回 ` Objects.requireNonNull(AnvilCraftFakePlayers.blockPlacer) `<br>[调用处 HeliostatsBlockEntity.validatePos](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/HeliostatsBlockEntity.java#L137) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L20) |
| ` public static AnvilCraftFakeKiller getKiller() ` | 末尾返回 ` Objects.requireNonNull(AnvilCraftFakePlayers.killer) `<br>[调用处 AnvilEventListener.dropItems](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/anvil/AnvilEventListener.java#L274) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L24) |
| ` public static AnvilCraftFakeDestroyer getDestroyer() ` | 末尾返回 ` Objects.requireNonNull(AnvilCraftFakePlayers.destroyer) `<br>[调用处 BreakBlockUtil.dropWithTool](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/BreakBlockUtil.java#L73) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L28) |
| ` public static void clear(ServerLevel level) ` | 分支 ` (AnvilCraftFakePlayers.blockPlacer != null) ` 内调用 ` AnvilCraftFakePlayers.blockPlacer.clear(level) `<br>分支 ` (AnvilCraftFakePlayers.killer != null) ` 内调用 ` AnvilCraftFakePlayers.killer.clear(level) `<br>分支 ` (AnvilCraftFakePlayers.destroyer != null) ` 内调用 ` AnvilCraftFakePlayers.destroyer.clear(level) `<br>实现调用 ` FakePlayerFactory.unloadLevel(level) `<br>[调用处 LevelEventListener.onLevelUnload](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/LevelEventListener.java#L70) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L32) |
| ` public AnvilCraftFakePlayers() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/entity/fakeplayer/AnvilCraftFakePlayers.java#L14) |
