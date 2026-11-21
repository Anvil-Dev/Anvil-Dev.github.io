# dev.dubhe.anvilcraft.mixin.plugin



## AnvilCraftMixinPlugin

` public class AnvilCraftMixinPlugin implements IMixinConfigPlugin `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/plugin/AnvilCraftMixinPlugin.java#L13)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void onLoad(String mixinPackage) ` | 实现调用 ` FMLLoader.getLoadingModList().getMods().stream().anyMatch(mod -> mod.getModId().equals("ageratum")) `<br>实现调用 ` FMLLoader.getLoadingModList().getMods().stream() `<br>实现调用 ` FMLLoader.getLoadingModList().getMods() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/plugin/AnvilCraftMixinPlugin.java#L32) |
| ` @Override public @Nullable String getRefMapperConfig() ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/plugin/AnvilCraftMixinPlugin.java#L50) |
| ` @Override public boolean shouldApplyMixin(String targetClassName, String mixinClassName) ` | ` (mixinClassName.startsWith("dev.dubhe.anvilcraft.mixin.client.Handbook")) ` 成立时提前返回 ` AnvilCraftMixinPlugin.hasAgeratum `<br>` (mixinClassName.contains("Xaero")) ` 成立时提前返回 ` this.isLoaded(targetClassName.replace('.', '/') + ".class") `<br>` (mixinClassName.endsWith("PistonStructureResolverMixin")) ` 成立时提前返回 ` !hasZetaPiston `<br>` (mixinClassName.endsWith("DefaultDisplayViewingScreenMixin")) ` 成立时提前返回 ` hasReiScreen `<br>` (mixinClassName.contains("Create")) ` 成立时提前返回 ` hasCreate `<br>` (mixinClassName.contains("AE2")) ` 成立时提前返回 ` hasAE2 `<br>` (mixinClassName.contains("Cerbon")) ` 成立时提前返回 ` hasCerbonBetterBeacons `<br>` (mixinClassName.contains("Jemi")) ` 成立时提前返回 ` hasJei && hasEmi `<br>` (mixinClassName.contains("SophisticatedJei")) ` 成立时提前返回 ` hasJei && hasSophisticatedCore `<br>` (mixinClassName.contains("Jei")) ` 成立时提前返回 ` hasJei `<br>` (mixinClassName.contains("Architectury")) ` 成立时提前返回 ` hasArchitectury `<br>` (mixinClassName.contains("Sodium")) ` 成立时提前返回 ` hasSodium `<br>` (mixinClassName.contains("Emb")) ` 成立时提前返回 ` hasEmbeddium `<br>` (mixinClassName.contains("Iris")) ` 成立时提前返回 ` hasIris `<br>末尾返回 ` true ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/plugin/AnvilCraftMixinPlugin.java#L55) |
| ` @Override public void acceptTargets(Set<String> myTargets, Set<String> otherTargets) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/plugin/AnvilCraftMixinPlugin.java#L76) |
| ` @Override public @Nullable List<String> getMixins() ` | 末尾返回 ` null ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/plugin/AnvilCraftMixinPlugin.java#L80) |
| ` @Override public void preApply(String targetClassName, ClassNode targetClass, String mixinClassName, IMixinInfo mixinInfo) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/plugin/AnvilCraftMixinPlugin.java#L85) |
| ` @Override public void postApply(String targetClassName, ClassNode targetClass, String mixinClassName, IMixinInfo mixinInfo) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/plugin/AnvilCraftMixinPlugin.java#L89) |
| ` public AnvilCraftMixinPlugin() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/plugin/AnvilCraftMixinPlugin.java#L13) |
