# dev.dubhe.anvilcraft.data.provider



## ModBlockPlacementRuleProvider

` public final class ModBlockPlacementRuleProvider implements DataProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L64)

为需要显式规则的方块生成状态到放置物品的映射，每个方块对应一个文件。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModBlockPlacementRuleProvider(PackOutput output) ` | 执行 ` this.pathProvider = output.createRegistryElementsPathProvider(ModRegistryKeys.BLOCK_PLACEMENT_RULES) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L59) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L73) |
| ` @Override public CompletableFuture<?> run(CachedOutput output) ` | 末尾返回 ` CompletableFuture.allOf(saves.toArray(CompletableFuture[]::new)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L77) |
| ` @Override public String getName() ` | 末尾返回 ` "AnvilCraft Block Placement Rules" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L544) |

## ModFurnaceFuelProvider

` public class ModFurnaceFuelProvider extends DataMapProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModFurnaceFuelProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModFurnaceFuelProvider(PackOutput packOutput, CompletableFuture<HolderLookup.Provider> lookupProvider) ` | 执行 ` super(packOutput, lookupProvider) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L57) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModFurnaceFuelProvider.java#L14) |

## ModLootModifierProvider

` public class ModLootModifierProvider extends GlobalLootModifierProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootModifierProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModLootModifierProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries) ` | 执行 ` super(output, registries, AnvilCraft.MOD_ID) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L58) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootModifierProvider.java#L14) |

## ModLootTableProvider

` public class ModLootTableProvider extends LootTableProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootTableProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModLootTableProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> provider) ` | 实现调用 ` Set.of() `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L56) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootTableProvider.java#L16) |

## ModParticleDescriptionProvider

` public class ModParticleDescriptionProvider extends ParticleDescriptionProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModParticleDescriptionProvider.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModParticleDescriptionProvider(PackOutput output) ` | 执行 ` super(output) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L54) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModParticleDescriptionProvider.java#L10) |

## ModSoundDefinitionsProvider

` public class ModSoundDefinitionsProvider extends SoundDefinitionsProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModSoundDefinitionsProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModSoundDefinitionsProvider(PackOutput output) ` | 执行 ` super(output, AnvilCraft.MOD_ID) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L55) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModSoundDefinitionsProvider.java#L11) |
| ` @Override public void registerSounds() ` | 实现调用 ` ModSoundEvents.ABOVE_THE_MOON_DUST.get() `<br>实现调用 ` SoundDefinitionsProvider.definition() `<br>实现调用 ` SoundDefinitionsProvider.sound(AnvilCraft.of("music/mun/above_the_moon_dust_loop")).stream() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/data/provider/ModSoundDefinitionsProvider.java#L15) |
