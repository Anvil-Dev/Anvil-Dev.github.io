# dev.dubhe.anvilcraft.api.energy



## EnergyHelper

` public class EnergyHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void insertEnergy(Level level, BlockPos pos, Direction direction, int amount) ` | 塞能量<br>实现调用 ` level.getCapability(Capabilities.Energy.BLOCK, pos, direction) `<br>实现调用 ` Transaction.openRoot() `<br>实现调用 ` energyStorage.insert(amount, transaction) `<br>实现调用 ` transaction.commit() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java#L12) |
| ` public EnergyHelper() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java#L10) |

## IEnergyHandlerHolder

` public interface IEnergyHandlerHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/IEnergyHandlerHolder.java#L8)

持有 EnergyHandler 的

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable EnergyHandler getEnergyHandler(@Nullable Direction direction) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/IEnergyHandlerHolder.java#L9) |

## ItemFEStorage

` public class ItemFEStorage implements EnergyHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L26)

基于 DataComponent 的 FE 能量存储实现 使用 ModComponents#STORED\_ENERGY 作为后端存储 支持两种模式： ItemAccess 模式 （首选）：通过 ItemAccess#exchange 进行原子物品交换， 与 NeoForge 通用 FE 系统完全兼容。其他模组的充电器/放电器可以正确追踪能量变更。 SnapshotJournal 模式 （回退）：当 ItemAccess 上下文不可用时，使用事务快照回滚保证一致性。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemFEStorage(ItemAccess itemAccess, int capacity) ` | 使用 ItemAccess 创建（推荐）——与通用 FE 系统完全兼容<br>执行 ` this(itemAccess, capacity, capacity, capacity) ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L44) |
| ` public ItemFEStorage(ItemAccess itemAccess, int capacity, int maxInsert, int maxExtract) ` | 使用 ItemAccess 创建并指定传输限制<br>实现调用 ` TransferPreconditions.checkNonNegative(capacity) `<br>实现调用 ` TransferPreconditions.checkNonNegative(maxInsert) `<br>实现调用 ` TransferPreconditions.checkNonNegative(maxExtract) `<br>实现调用 ` itemAccess.getResource().getItem() `<br>实现调用 ` itemAccess.getResource() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L51) |
| ` @Deprecated @SuppressWarnings("DeprecatedIsStillUsed") public ItemFEStorage(ItemStack stack, int capacity) ` | 使用 ItemStack 创建（回退模式）——保持向后兼容<br>已弃用 建议使用 #ItemFEStorage(ItemAccess, int)<br>实现调用 ` TransferPreconditions.checkNonNegative(capacity) `<br>实现调用 ` stack.getItem() ` | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L71) |
| ` @SuppressWarnings("Deprecation") public static ItemFEStorage create(ItemStack stack, @Nullable ItemAccess ctx, int capacity) ` | 工厂方法：根据上下文自动选择最佳模式<br>` (ctx != null) ` 成立时提前返回 ` new ItemFEStorage(ctx, capacity) `<br>末尾返回 ` new ItemFEStorage(stack, capacity) `<br>[调用处 ModCapabilities.energy](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModCapabilities.java#L268) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L89) |
| ` @Override public long getAmountAsLong() ` | ` (this.itemAccess != null) ` 成立时提前返回 ` (long) this.itemAccess.getAmount() * (long) this.getEnergyFrom(this.itemAccess.getResource()) `<br>` (this.stack == null) ` 成立时提前返回 ` 0 `<br>末尾返回 ` this.stack.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY).value() `<br>分支 ` (this.itemAccess != null) ` 内调用 ` this.itemAccess.getAmount() `<br>分支 ` (this.itemAccess != null) ` 内调用 ` this.getEnergyFrom(this.itemAccess.getResource()) `<br>分支 ` (this.itemAccess != null) ` 内调用 ` this.itemAccess.getResource() `<br>实现调用 ` this.stack.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY).value() `<br>实现调用 ` this.stack.getOrDefault(ModComponents.STORED_ENERGY, StoredEnergy.EMPTY) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L97) |
| ` @Override public long getCapacityAsLong() ` | 末尾返回 ` this.capacity `<br>分支 ` (this.itemAccess != null) ` 内调用 ` this.itemAccess.getResource() `<br>分支 ` (this.itemAccess != null) ` 内调用 ` resource.is(this.validItem) `<br>分支 ` (this.itemAccess != null) ` 内调用 ` this.itemAccess.getAmount() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L106) |
| ` @Override public int insert(int amount, TransactionContext transaction) ` | ` (this.itemAccess != null) ` 成立时提前返回 ` this.insertViaExchange(amount, transaction) `<br>末尾返回 ` this.insertViaJournal(amount, transaction) `<br>实现调用 ` TransferPreconditions.checkNonNegative(amount) `<br>分支 ` (this.itemAccess != null) ` 内调用 ` this.insertViaExchange(amount, transaction) `<br>实现调用 ` this.insertViaJournal(amount, transaction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L124) |
| ` @Override public int extract(int amount, TransactionContext transaction) ` | ` (this.itemAccess != null) ` 成立时提前返回 ` this.extractViaExchange(amount, transaction) `<br>末尾返回 ` this.extractViaJournal(amount, transaction) `<br>实现调用 ` TransferPreconditions.checkNonNegative(amount) `<br>分支 ` (this.itemAccess != null) ` 内调用 ` this.extractViaExchange(amount, transaction) `<br>实现调用 ` this.extractViaJournal(amount, transaction) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L134) |
