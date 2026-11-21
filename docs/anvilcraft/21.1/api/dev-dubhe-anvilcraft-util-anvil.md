# dev.dubhe.anvilcraft.util.anvil



## AnvilMenuResult

` public class AnvilMenuResult `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L32)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public final boolean noCostInRenaming ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L37) |
| ` public int xpCost ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L40) |
| ` public int repairItemCountCost ` | 初值 ` 0 ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L41) |
| ` public ItemStack result ` | 初值 ` ItemStack.EMPTY ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L42) |
| ` public boolean onlyRenaming ` | 字段类型为 ` boolean ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L43) |
| ` public static Builder builder() ` | 末尾返回 ` new Builder() `<br>[调用处 EmberAnvilMenu](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/EmberAnvilMenu.java#L20) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L64) |
| ` public void createResult( @Nullable Player player, ItemStack inputLeft, ItemStack inputRight, @Nullable String itemName, LongPredicate onAnvilChangeEventSender ) ` | 实现调用 ` inputLeft.isEmpty() `<br>实现调用 ` EnchantmentHelper.canStoreEnchantments(inputLeft) `<br>实现调用 ` inputLeft.getOrDefault(DataComponents.REPAIR_COST, 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L68) |

## AnvilMenuResult.Builder

` public static class Builder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L540)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder ignoreEnchantmentCompatible() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L551) |
| ` public Builder allowBeyondMaxLevel() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L556) |
| ` public Builder allowEnchantingMultipleItems() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L561) |
| ` public Builder allowUsingFrostMetalToRepair() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L566) |
| ` public Builder noCostInRenaming() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L571) |
| ` public Builder noTaxInRepairUsingItem() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L576) |
| ` public Builder useNewRepairCostAlgorithm() ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L581) |
| ` public AnvilMenuResult create() ` | 返回 ` AnvilMenuResult ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L586) |
| ` public AnvilMenuResult.Builder ignoreEnchantmentCompatible(final boolean ignoreEnchantmentCompatible) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L540) |
| ` public AnvilMenuResult.Builder allowBeyondMaxLevel(final boolean allowBeyondMaxLevel) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L540) |
| ` public AnvilMenuResult.Builder allowEnchantingMultipleItems(final boolean allowEnchantingMultipleItems) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L540) |
| ` public AnvilMenuResult.Builder allowUsingFrostMetalToRepair(final boolean allowUsingFrostMetalToRepair) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L540) |
| ` public AnvilMenuResult.Builder noCostInRenaming(final boolean noCostInRenaming) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L540) |
| ` public AnvilMenuResult.Builder noTaxInRepairUsingItem(final boolean noTaxInRepairUsingItem) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L540) |
| ` public AnvilMenuResult.Builder useNewRepairCostAlgorithm(final boolean useNewRepairCostAlgorithm) ` | 返回 this.<br>返回当前实例，可继续链式调用。<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L540) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/anvil/AnvilMenuResult.java#L540) |
