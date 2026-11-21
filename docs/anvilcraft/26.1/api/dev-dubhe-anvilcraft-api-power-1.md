# dev.dubhe.anvilcraft.api.power（ConnectivityChecker 至 PowerComponentType）



## ConnectivityChecker

` public abstract class ConnectivityChecker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/ConnectivityChecker.java#L8)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void register(ConnectivityChecker instance) ` | 执行 ` ConnectivityChecker.instances.add(instance) `<br>[调用处 PowerGrid](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L82) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/ConnectivityChecker.java#L11) |
| ` public static boolean check(PowerGrid powerGrid, IPowerComponent component) ` | 末尾返回 ` false `<br>实现调用 ` it.checkInRange(powerGrid, component) `<br>[调用处 PowerGrid.isInRange](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L464) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/ConnectivityChecker.java#L15) |
| ` public ConnectivityChecker() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/ConnectivityChecker.java#L8) |

## DynamicPowerComponent

` public class DynamicPowerComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L18)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DynamicPowerComponent(Entity owner, Supplier<AABB> aabbSupplier) ` | [调用处 IonocraftEntity.构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/entity/IonocraftEntity.java#L49) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L28) |
| ` public int getPowerConsumption() ` | 末尾返回 ` amount `<br>[调用处 DynamicPowerComponent.getCommandDescription](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L33) |
| ` public void switchTo(@Nullable PowerGrid powerGrid) ` | 分支 ` (this.powerGrid != null) ` 内调用 ` this.powerGrid.notifyLeaving(this) `<br>分支 ` (this.powerGrid != null) ` 内调用 ` this.powerGrid.notifyEntering(this) `<br>分支 ` (this.owner instanceof IDynamicPowerComponentHolder) ` 内调用 ` ((IDynamicPowerComponentHolder) this.owner).anvilcraft$switchTo(powerGrid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L41) |
| ` public AABB boundingBox() ` | 末尾返回 ` this.aabbSupplier.get() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L55) |
| ` public void gridTick() ` | 分支 ` (this.owner instanceof IDynamicPowerComponentHolder) ` 内调用 ` ((IDynamicPowerComponentHolder) this.owner).anvilcraft$gridTick() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L59) |
| ` public MutableComponent getCommandDescription() ` | 实现调用 ` this.owner.getX() `<br>实现调用 ` this.owner.getY() `<br>实现调用 ` this.owner.getZ() `<br>实现调用 ` this.owner.getName() `<br>实现调用 ` DynamicPowerComponent.formatDouble(x) `<br>实现调用 ` DynamicPowerComponent.formatDouble(y) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L65) |
| ` public Entity getOwner() ` | 末尾返回 ` this.owner `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L18) |
| ` public Supplier<AABB> getAabbSupplier() ` | 末尾返回 ` this.aabbSupplier `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L18) |
| ` @Nullable public PowerGrid getPowerGrid() ` | 末尾返回 ` this.powerGrid `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L18) |
| ` public void setPowerGrid(@Nullable final PowerGrid powerGrid) ` | 执行 ` this.powerGrid = powerGrid `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L18) |
| ` public Set<PowerConsumption> getPowerConsumptions() ` | 末尾返回 ` this.powerConsumptions `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L18) |

## DynamicPowerComponent.PowerConsumption

` public record PowerConsumption(int amount) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L84)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PowerConsumption(int amount) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L84) |
| ` public int amount() ` | 读取 record 分量 ` amount ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L84) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L84) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L84) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/DynamicPowerComponent.java#L84) |

## FastCollisionConnectivityChecker

` public class FastCollisionConnectivityChecker extends ConnectivityChecker `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/FastCollisionConnectivityChecker.java#L3)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FastCollisionConnectivityChecker() ` | Java 提供的无参构造器。<br>[调用处 PowerGrid](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L82) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/FastCollisionConnectivityChecker.java#L3) |

## FastShape

` public class FastShape `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/FastShape.java#L9)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public FastShape(List<AABB> shapes) ` | 执行 ` this.shapes = new ArrayList<>(shapes) `<br>[调用处 PowerGrid.addRange](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerGrid.java#L283) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/FastShape.java#L12) |
| ` public boolean inRange(Vec3 pos) ` | 末尾返回 ` false `<br>实现调用 ` aabb.contains(pos) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/FastShape.java#L16) |
| ` public boolean intersects(AABB box) ` | 末尾返回 ` false `<br>实现调用 ` aabb.intersects(box) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/FastShape.java#L25) |
| ` public void add(AABB shape) ` | 执行 ` this.shapes.add(shape) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/FastShape.java#L34) |
| ` public void remove(AABB shape) ` | 执行 ` this.shapes.remove(shape) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/FastShape.java#L38) |
| ` public static FastShape create(List<AABB> shapes) ` | 末尾返回 ` new FastShape(shapes) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/FastShape.java#L42) |

## IDynamicPowerComponentHolder

` public interface IDynamicPowerComponentHolder `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IDynamicPowerComponentHolder.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` AABB anvilcraft$getPowerSupplyingBoundingBox() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IDynamicPowerComponentHolder.java#L8) |
| ` void anvilcraft$gridTick() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IDynamicPowerComponentHolder.java#L10) |
| ` void anvilcraft$switchTo(@Nullable PowerGrid grid) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IDynamicPowerComponentHolder.java#L12) |
| ` DynamicPowerComponent anvilcraft$getPowerComponent() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IDynamicPowerComponentHolder.java#L14) |
| ` static IDynamicPowerComponentHolder of(ServerPlayer player) ` | 末尾返回 ` (IDynamicPowerComponentHolder) player `<br>[调用处 IonoCraftBackpackItem.refreshPower](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/item/armor/IonoCraftBackpackItem.java#L110) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IDynamicPowerComponentHolder.java#L16) |

## IPowerComponent

` public interface IPowerComponent extends Comparable<IPowerComponent> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L20)

电力元件

类型注解 ` @SuppressWarnings("unused") `

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` BooleanProperty OVERLOAD ` | 初值 ` BooleanProperty.create("overload") ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L22) |
| ` EnumProperty<Switch> SWITCH ` | 初值 ` EnumProperty.create("switch", Switch.class) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L23) |
| ` @Nullable Level getCurrentLevel() ` | [调用处 IPowerComponent.getCommandDiscription](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L114) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L25) |
| ` default void gridTick() ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L27) |
| ` BlockPos getPos() ` | [调用处 IPowerComponent.getShape](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L30) |
| ` default AABB getShape() ` | 末尾返回 ` AABB.ofSize(this.getPos().getCenter(), range, range, range) `<br>实现调用 ` this.getRange() `<br>实现调用 ` AABB.ofSize(this.getPos().getCenter(), range, range, range) `<br>实现调用 ` this.getPos().getCenter() `<br>实现调用 ` this.getPos() `<br>[调用处 IPowerComponent.toPowerComponentInfo](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L108) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L32) |
| ` default int getRange() ` | 末尾返回 ` 0 `<br>[调用处 IPowerComponent.getShape](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L33) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L37) |
| ` void setGrid(@Nullable PowerGrid grid) ` | 设置电网<br>参数 ` grid ` 电网 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L44) |
| ` @Nullable PowerGrid getGrid() ` | 获取电网<br>返回 电网<br>[调用处 IPowerComponent.flushState](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L75) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L49) |
| ` PowerComponentType getComponentType() ` | [调用处 IPowerComponent.compareTo](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L91) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L51) |
| ` default void flushState(Level level, BlockPos pos) ` | 实现调用 ` level.getBlockState(pos) `<br>实现调用 ` state.hasProperty(IPowerComponent.OVERLOAD) `<br>实现调用 ` this.getGrid() `<br>分支 ` (this.getGrid() == null) ` 内调用 ` state.getValue(IPowerComponent.OVERLOAD) `<br>分支 ` (!state.getValue(IPowerComponent.OVERLOAD)) ` 内调用 ` level.setBlockAndUpdate(pos, state.setValue(IPowerComponent.OVERLOAD, true)) `<br>分支 ` (!state.getValue(IPowerComponent.OVERLOAD)) ` 内调用 ` state.setValue(IPowerComponent.OVERLOAD, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L72) |
| ` @Override default int compareTo(IPowerComponent powerComponent) ` | ` (this.equals(powerComponent)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` i == 0 ? 1 : i `<br>实现调用 ` this.equals(powerComponent) `<br>实现调用 ` this.getComponentType().compareTo(powerComponent.getComponentType()) `<br>实现调用 ` this.getComponentType() `<br>实现调用 ` powerComponent.getComponentType() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L88) |
| ` default boolean isGridWorking() ` | 末尾返回 ` Optional.ofNullable(this.getGrid()).map(PowerGrid::isWorking).orElse(false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L95) |
| ` default PowerComponentInfo toPowerComponentInfo() ` | 转换为电网元件信息<br>末尾返回 ` new PowerComponentInfo( this.getPos(), 0, 0, 0, 0, this.getRange(), this.getShape(), this.getComponentType() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L100) |
| ` default MutableComponent getCommandDiscription() ` | ` (this.getComponentType() == PowerComponentType.PRODUCER && this instanceof IPowerProducer producer) ` 成立时提前返回 ` Component.translatable("command.anvilcraft.powergrid.info.producer", block.getName(), x, y, z, producer.getOutputPower(), this.getRange()).withStyle(ChatFormatting.GREEN) `<br>末尾返回 ` Component.literal("") `<br>实现调用 ` Optional.ofNullable(this.getCurrentLevel()) .map(level -> level.getBlockState(this.getPos()).getBlock()) `<br>实现调用 ` Optional.ofNullable(this.getCurrentLevel()) `<br>实现调用 ` this.getCurrentLevel() `<br>实现调用 ` this.getPos().getX() `<br>实现调用 ` this.getPos() `<br>实现调用 ` this.getPos().getY() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L113) |

## IPowerComponent.Switch

` enum Switch implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L53)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` ON ` | 声明于枚举 ` IPowerComponent.Switch ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L54) |
| ` OFF ` | 声明于枚举 ` IPowerComponent.Switch ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L55) |
| ` public String toString() ` | 末尾返回 ` this.getSerializedName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L62) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name `<br>[调用处 IPowerComponent.Switch.toString](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L63) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L66) |
| ` public static Switch[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L53) |
| ` public static Switch valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L53) |

## IPowerConsumer

` public interface IPowerConsumer extends IPowerComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerConsumer.java#L4)

用电

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default int getInputPower() ` | 末尾返回 ` 0 `<br>[调用处 IPowerConsumer.toPowerComponentInfo](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerConsumer.java#L18) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerConsumer.java#L5) |
| ` @Override default PowerComponentType getComponentType() ` | 末尾返回 ` PowerComponentType.CONSUMER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerConsumer.java#L9) |
| ` @Override default PowerComponentInfo toPowerComponentInfo() ` | 末尾返回 ` new PowerComponentInfo( this.getPos(), this.getInputPower(), 0, 0, 0, this.getRange(), this.getShape(), PowerComponentType.CONSUMER ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerConsumer.java#L14) |

## IPowerProducer

` public interface IPowerProducer extends IPowerComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerProducer.java#L6)

发电

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` default int getOutputPower() ` | 末尾返回 ` 0 `<br>[调用处 IPowerProducer.toPowerComponentInfo](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerProducer.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerProducer.java#L7) |
| ` default int getTime() ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerProducer.java#L11) |
| ` default boolean isInfinitePower() ` | 是否正在提供无限电力。<br>末尾返回 ` false `<br>[调用处 IPowerProducer.toPowerComponentInfo](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerProducer.java#L36) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerProducer.java#L16) |
| ` @Override default PowerComponentType getComponentType() ` | 末尾返回 ` PowerComponentType.PRODUCER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerProducer.java#L20) |
| ` @Override default PowerComponentInfo toPowerComponentInfo() ` | 末尾返回 ` new PowerComponentInfo( this.getPos(), 0, this.getOutputPower(), 0, 0, this.getRange(), this.getShape(), PowerComponentType.PRODUCER, this.isInfinitePower() ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerProducer.java#L25) |
| ` default int getServerPower() ` | 实际电量<br>实现调用 ` SimplePowerGrid.findPowerGrid(this.getPos()) `<br>实现调用 ` this.getPos() `<br>实现调用 ` s.isPresent() `<br>分支 ` (s.isPresent()) ` 内调用 ` s.get().getConsume() `<br>分支 ` (s.isPresent()) ` 内调用 ` s.get() `<br>分支 ` (s.isPresent()) ` 内调用 ` s.get().getGenerate() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerProducer.java#L41) |

## IPowerStorage

` public interface IPowerStorage extends IPowerProducer, IPowerConsumer `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerStorage.java#L4)

储电

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` int insert(int power) ` | 输入电量<br>参数 ` power ` 输入值<br>返回 无法输入的值 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerStorage.java#L9) |
| ` int extract(int power) ` | 获取电量<br>参数 ` power ` 想要获取的值<br>返回 实际获取的值 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerStorage.java#L15) |
| ` int getPowerAmount() ` | 获取已存储的电量<br>返回 电量值<br>[调用处 IPowerStorage.toPowerComponentInfo](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerStorage.java#L38) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerStorage.java#L20) |
| ` int getCapacity() ` | 获取储电容量<br>返回 储电容量<br>[调用处 IPowerStorage.toPowerComponentInfo](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerStorage.java#L39) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerStorage.java#L25) |
| ` @Override default PowerComponentType getComponentType() ` | 末尾返回 ` PowerComponentType.STORAGE ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerStorage.java#L27) |
| ` @Override default PowerComponentInfo toPowerComponentInfo() ` | 末尾返回 ` new PowerComponentInfo( this.getPos(), 0, 0, this.getPowerAmount(), this.getCapacity(), this.getRange(), this.getShape(), PowerComponentType.STORAGE ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerStorage.java#L32) |

## IPowerTransmitter

` public interface IPowerTransmitter extends IPowerComponent `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerTransmitter.java#L6)

电力中继器

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override default int getRange() ` | 末尾返回 ` AnvilCraft.CONFIG.machines.powerTransmitterRange `<br>[调用处 IPowerTransmitter.toPowerComponentInfo](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerTransmitter.java#L25) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerTransmitter.java#L7) |
| ` @Override default PowerComponentType getComponentType() ` | 末尾返回 ` PowerComponentType.TRANSMITTER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerTransmitter.java#L12) |
| ` @Override default PowerComponentInfo toPowerComponentInfo() ` | 末尾返回 ` new PowerComponentInfo( this.getPos(), 0, 0, 0, 0, this.getRange(), this.getShape(), PowerComponentType.TRANSMITTER ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerTransmitter.java#L17) |

## PowerComponentInfo

` public record PowerComponentInfo(BlockPos pos, int consumes, int produces, int stores, int capacity, int range, AABB boundingBox, PowerComponentType type, boolean infinitePower) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L12)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public PowerComponentInfo(BlockPos pos, int consumes, int produces, int stores, int capacity, int range, AABB boundingBox, PowerComponentType type) ` | 执行 ` this(pos, consumes, produces, stores, capacity, range, boundingBox, type, false) `<br>[调用处 IPowerComponent.toPowerComponentInfo](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/IPowerComponent.java#L101) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L23) |
| ` public static final Codec<PowerComponentInfo> CODEC ` | 由 ` RecordCodecBuilder.create ` 初始化。 | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L28) |
| ` public static final StreamCodec<ByteBuf, PowerComponentInfo> STREAM_CODEC ` | 字段类型为 ` StreamCodec<ByteBuf, PowerComponentInfo> ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L55) |
| ` public BlockPos pos() ` | 读取 record 分量 ` pos ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L13) |
| ` public int consumes() ` | 读取 record 分量 ` consumes ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L14) |
| ` public int produces() ` | 读取 record 分量 ` produces ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L15) |
| ` public int stores() ` | 读取 record 分量 ` stores ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L16) |
| ` public int capacity() ` | 读取 record 分量 ` capacity ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L17) |
| ` public int range() ` | 读取 record 分量 ` range ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L18) |
| ` public AABB boundingBox() ` | 读取 record 分量 ` boundingBox ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L19) |
| ` public PowerComponentType type() ` | 读取 record 分量 ` type ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L20) |
| ` public boolean infinitePower() ` | 读取 record 分量 ` infinitePower ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L21) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L12) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L12) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L12) |

## PowerComponentType

` public enum PowerComponentType implements StringRepresentable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L7)

电力元件类型

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` INVALID ` | 声明于枚举 ` PowerComponentType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L8) |
| ` PRODUCER ` | 声明于枚举 ` PowerComponentType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L9) |
| ` CONSUMER ` | 声明于枚举 ` PowerComponentType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L10) |
| ` STORAGE ` | 声明于枚举 ` PowerComponentType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L11) |
| ` TRANSMITTER ` | 声明于枚举 ` PowerComponentType ` | [枚举值](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L12) |
| ` public static final Codec<PowerComponentType> CODEC ` | 初值 ` StringRepresentable.fromEnum(PowerComponentType::values) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L13) |
| ` @Override public String getSerializedName() ` | 末尾返回 ` this.name() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L15) |
| ` public static PowerComponentType[] values() ` | 返回按声明顺序排列的枚举常量数组，每次调用得到独立数组。<br>[调用处 PowerComponentInfo.decode](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentInfo.java#L66) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L7) |
| ` public static PowerComponentType valueOf(String name) ` | 按大小写精确匹配枚举名。未知名称抛出 IllegalArgumentException，null 抛出 NullPointerException。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/power/PowerComponentType.java#L7) |
