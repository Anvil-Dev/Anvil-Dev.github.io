# dev.dubhe.anvilcraft.integration.curios.data



## CuriosData

` public class CuriosData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/CuriosData.java#L14)

类型注解 ` @Integration(value = "curios", type = IntegrationType.DATA) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void applyData() ` | 实现调用 ` IntegrationHook.getEvent() `<br>实现调用 ` event.getGenerator() `<br>实现调用 ` event.getLookupProvider() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/CuriosData.java#L16) |
| ` public CuriosData() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/CuriosData.java#L14) |

## ModCuriosProvider

` public class ModCuriosProvider extends CuriosDataProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/ModCuriosProvider.java#L11)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModCuriosProvider(PackOutput output, ExistingFileHelper fileHelper, CompletableFuture<HolderLookup.Provider> registries) ` | 执行 ` super(AnvilCraft.MOD_ID, output, fileHelper, registries) `<br>[调用处 CuriosData.applyData](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/CuriosData.java#L23) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/ModCuriosProvider.java#L12) |
| ` @Override public void generate(HolderLookup.Provider registries, ExistingFileHelper fileHelper) ` | 实现调用 ` this.createEntities("goggles") .addPlayer() .addSlots("head") `<br>实现调用 ` this.createEntities("goggles") .addPlayer() `<br>实现调用 ` this.createEntities("goggles") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/ModCuriosProvider.java#L16) |
