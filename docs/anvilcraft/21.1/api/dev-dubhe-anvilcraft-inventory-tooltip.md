# dev.dubhe.anvilcraft.inventory.tooltip



## ConfinementChamberTooltip

` public record ConfinementChamberTooltip(ItemStack item) implements TooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/ConfinementChamberTooltip.java#L11)

约束仓物品 tooltip 的数据载体，携带存储的内容物。<br>参数 ` item ` 槽 0 中的内容物

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public ConfinementChamberTooltip(ItemStack item) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/ConfinementChamberTooltip.java#L11) |
| ` public ItemStack item() ` | 读取 record 分量 ` item ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/ConfinementChamberTooltip.java#L11) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/ConfinementChamberTooltip.java#L11) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/ConfinementChamberTooltip.java#L11) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/ConfinementChamberTooltip.java#L11) |

## CreativeCrateTooltip

` public record CreativeCrateTooltip(CompoundTag itemTag) implements TooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/CreativeCrateTooltip.java#L12)

创造板条箱物品 tooltip 的数据载体（仅携带存储物品的 NBT）。 物品解析、图标与文字渲染在 ClientCreativeCrateTooltip 中进行。<br>参数 ` itemTag ` 存储物品的 NBT（ItemStackHandler 序列化结果，含 Items 列表）

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public CreativeCrateTooltip(CompoundTag itemTag) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/CreativeCrateTooltip.java#L12) |
| ` public CompoundTag itemTag() ` | 读取 record 分量 ` itemTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/CreativeCrateTooltip.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/CreativeCrateTooltip.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/CreativeCrateTooltip.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/CreativeCrateTooltip.java#L12) |

## FluidTankTooltip

` public record FluidTankTooltip(CompoundTag tankTag, boolean multi, int capacity, boolean infiniteCapacity, boolean showCapacity) implements TooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L16)

流体储罐物品 tooltip 的数据载体（仅携带储罐 NBT）。 流体解析、图标与文字渲染在 ClientFluidTankTooltip 中进行。<br>参数 ` tankTag ` 储罐的流体容器 NBT（单流体为含 Fluid 的复合标签， 多流体为含 Fluids 列表的复合标签）<br>参数 ` multi ` true = 多流体储罐（读 Fluids 列表），false = 单流体储罐（读 Fluid）<br>参数 ` capacity ` 有效容量（含增强/无限标记后的显示容量）<br>参数 ` infiniteCapacity ` 是否无限容量（容量行显示 ∞）

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FluidTankTooltip(CompoundTag tankTag, boolean multi, int capacity, boolean infiniteCapacity) ` | 执行 ` this(tankTag, multi, capacity, infiniteCapacity, true) `<br>[调用处 FluidTankItemTooltip.singleFluidTooltipImage](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/tooltip/FluidTankItemTooltip.java#L30) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L19) |
| ` public CompoundTag tankTag() ` | 读取 record 分量 ` tankTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L17) |
| ` public boolean multi() ` | 读取 record 分量 ` multi ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L17) |
| ` public int capacity() ` | 读取 record 分量 ` capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L17) |
| ` public boolean infiniteCapacity() ` | 读取 record 分量 ` infiniteCapacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L17) |
| ` public boolean showCapacity() ` | 读取 record 分量 ` showCapacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L17) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L16) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L16) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/FluidTankTooltip.java#L16) |

## StoragePortTooltip

` public record StoragePortTooltip(CompoundTag blockEntityTag) implements TooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StoragePortTooltip.java#L12)

仓储端口物品 tooltip 的数据载体（携带方块实体的存档数据 NBT）。 物品解析、图标与文字渲染在 ClientStoragePortTooltip 中进行。<br>参数 ` blockEntityTag ` 方块实体存档数据（含 marked\_item 与 buffer）

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StoragePortTooltip(CompoundTag blockEntityTag) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StoragePortTooltip.java#L12) |
| ` public CompoundTag blockEntityTag() ` | 读取 record 分量 ` blockEntityTag ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StoragePortTooltip.java#L12) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StoragePortTooltip.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StoragePortTooltip.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StoragePortTooltip.java#L12) |

## StorageTooltip

` public record StorageTooltip(int usedTypes, int typeLimit, List<ItemStack> types) implements TooltipComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StorageTooltip.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public StorageTooltip(int usedTypes, int typeLimit, List<ItemStack> types) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StorageTooltip.java#L8) |
| ` public int usedTypes() ` | 读取 record 分量 ` usedTypes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StorageTooltip.java#L8) |
| ` public int typeLimit() ` | 读取 record 分量 ` typeLimit ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StorageTooltip.java#L8) |
| ` public List<ItemStack> types() ` | 读取 record 分量 ` types ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StorageTooltip.java#L8) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StorageTooltip.java#L8) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StorageTooltip.java#L8) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/inventory/tooltip/StorageTooltip.java#L8) |
