# dev.dubhe.anvilcraft.api.energy



## EnergyHelper

` public class EnergyHelper `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void insertEnergy(Level level, BlockPos pos, Direction direction, int amount) ` | 塞能量<br>实现调用 ` level.getCapability(Capabilities.EnergyStorage.BLOCK, pos, direction) `<br>实现调用 ` energyStorage.receiveEnergy(amount, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java#L13) |
| ` public EnergyHelper() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/EnergyHelper.java#L9) |

## IEnergyHandlerHolder

` public interface IEnergyHandlerHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/IEnergyHandlerHolder.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Nullable IEnergyStorage getEnergyStorage(@Nullable Direction direction) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/IEnergyHandlerHolder.java#L10) |

## ItemFEStorage

` public class ItemFEStorage implements IEnergyStorage `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L11)

基于 DataComponent 的 FE 能量存储实现 使用 ModComponents#STORED\_ENERGY 作为后端存储

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ItemFEStorage(ItemStack stack, int capacity) ` | [调用处 CapabilitiesEventListener.registerCapabilities](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CapabilitiesEventListener.java#L264) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L15) |
| ` @Override public int receiveEnergy(int maxReceive, boolean simulate) ` | 末尾返回 ` accepted `<br>实现调用 ` this.stack.getOrDefault(ModComponents.STORED_ENERGY, 0) `<br>实现调用 ` Math.min(maxReceive, this.capacity - energy) `<br>分支 ` (!simulate && accepted > 0) ` 内调用 ` this.stack.set(ModComponents.STORED_ENERGY, energy + accepted) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L20) |
| ` @Override public int extractEnergy(int maxExtract, boolean simulate) ` | 末尾返回 ` extracted `<br>实现调用 ` this.stack.getOrDefault(ModComponents.STORED_ENERGY, 0) `<br>实现调用 ` Math.min(energy, maxExtract) `<br>分支 ` (!simulate && extracted > 0) ` 内调用 ` this.stack.set(ModComponents.STORED_ENERGY, energy - extracted) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L30) |
| ` @Override public int getEnergyStored() ` | 末尾返回 ` Math.min(this.stack.getOrDefault(ModComponents.STORED_ENERGY, 0), this.capacity) `<br>[调用处 ItemFEStorage.canExtract](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L52) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L40) |
| ` @Override public int getMaxEnergyStored() ` | 末尾返回 ` this.capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L45) |
| ` @Override public boolean canExtract() ` | 末尾返回 ` this.getEnergyStored() > 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L50) |
| ` @Override public boolean canReceive() ` | 末尾返回 ` this.getEnergyStored() < this.capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/energy/ItemFEStorage.java#L55) |
