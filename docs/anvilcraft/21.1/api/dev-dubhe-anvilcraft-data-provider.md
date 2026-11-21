# dev.dubhe.anvilcraft.data.provider



## ModBlockPlacementRuleProvider

` public final class ModBlockPlacementRuleProvider implements DataProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L67)

Generates built-in state-to-placement-item mappings, one file per block. Covers every block that has a corresponding BlockItem, replicating the logic formerly in DefaultBlockPlacementRule.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModBlockPlacementRuleProvider(PackOutput output) ` | 执行 ` this.pathProvider = output.createRegistryElementsPathProvider(ModRegistryKeys.BLOCK_PLACEMENT_RULES) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L59) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L76) |
| ` @Override public CompletableFuture<?> run(CachedOutput output) ` | 末尾返回 ` CompletableFuture.allOf(saves.toArray(CompletableFuture[]::new)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L80) |
| ` @Override public String getName() ` | 末尾返回 ` "AnvilCraft Block Placement Rules" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModBlockPlacementRuleProvider.java#L557) |

## ModFurnaceFuelProvider

` public class ModFurnaceFuelProvider extends DataMapProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModFurnaceFuelProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModFurnaceFuelProvider(PackOutput packOutput, CompletableFuture<HolderLookup.Provider> lookupProvider) ` | 执行 ` super(packOutput, lookupProvider) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L58) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModFurnaceFuelProvider.java#L14) |

## ModLootModifierProvider

` public class ModLootModifierProvider extends GlobalLootModifierProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootModifierProvider.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModLootModifierProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries) ` | 执行 ` super(output, registries, AnvilCraft.MOD_ID) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L60) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootModifierProvider.java#L14) |

## ModLootTableProvider

` public class ModLootTableProvider extends LootTableProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootTableProvider.java#L15)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModLootTableProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> provider) ` | 实现调用 ` Set.of() `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L56) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModLootTableProvider.java#L16) |

## ModParticleDescriptionProvider

` public class ModParticleDescriptionProvider extends ParticleDescriptionProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModParticleDescriptionProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModParticleDescriptionProvider(PackOutput output, ExistingFileHelper fileHelper) ` | 执行 ` super(output, fileHelper) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L61) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModParticleDescriptionProvider.java#L11) |

## ModPoiTagProvider

` public class ModPoiTagProvider extends TagsProvider<PoiType> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModPoiTagProvider.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModPoiTagProvider( PackOutput output, CompletableFuture<HolderLookup.Provider> lookupProvider, @Nullable ExistingFileHelper existingFileHelper) ` | 执行 ` super(output, Registries.POINT_OF_INTEREST_TYPE, lookupProvider, AnvilCraft.MOD_ID, existingFileHelper) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L57) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModPoiTagProvider.java#L17) |

## ModSoundDefinitionsProvider

` public class ModSoundDefinitionsProvider extends SoundDefinitionsProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModSoundDefinitionsProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModSoundDefinitionsProvider(net.minecraft.data.PackOutput output, ExistingFileHelper fileHelper) ` | 执行 ` super(output, AnvilCraft.MOD_ID, fileHelper) `<br>[调用处 AnvilCraftDatagen.gatherData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/AnvilCraftDatagen.java#L62) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModSoundDefinitionsProvider.java#L11) |
| ` @Override public void registerSounds() ` | 实现调用 ` definition() .subtitle("subtitles.anvilcraft.plasma_jet") `<br>实现调用 ` definition() `<br>实现调用 ` sound(ResourceLocation.withDefaultNamespace("entity.blaze.burn"), SoundDefinition.SoundType.EVENT) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/data/provider/ModSoundDefinitionsProvider.java#L15) |
