# dev.dubhe.anvilcraft.integration.curios.data



## CuriosData

` public class CuriosData `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/CuriosData.java#L8)

类型注解 ` @Integration(value = "curios", type = IntegrationType.CLIENT_DATA) `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public void applyClientData() ` | 实现调用 ` IntegrationHook.getEvent() `<br>实现调用 ` event.createProvider(ModCuriosProvider::new) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/CuriosData.java#L10) |
| ` public CuriosData() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/CuriosData.java#L8) |

## ModCuriosProvider

` public class ModCuriosProvider extends CuriosDataProvider `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/ModCuriosProvider.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ModCuriosProvider(PackOutput output, CompletableFuture<HolderLookup.Provider> registries) ` | 执行 ` super(AnvilCraft.MOD_ID, output, registries) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/ModCuriosProvider.java#L11) |
| ` @Override public void generate(HolderLookup.Provider registries) ` | 实现调用 ` this.createEntities("goggles") .addPlayer() .addSlots("head") `<br>实现调用 ` this.createEntities("goggles") .addPlayer() `<br>实现调用 ` this.createEntities("goggles") ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/integration/curios/data/ModCuriosProvider.java#L15) |
