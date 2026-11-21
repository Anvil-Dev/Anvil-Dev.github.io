# dev.dubhe.anvilcraft.api.block.entity



## IConvertableBlockEntity

` public interface IConvertableBlockEntity<T extends BlockEntity> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/entity/IConvertableBlockEntity.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` Holder<BlockEntityType<?>> targetTypeHolder() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/entity/IConvertableBlockEntity.java#L8) |
| ` void convertTo(T newBe) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/entity/IConvertableBlockEntity.java#L10) |

## ITickable

` public interface ITickable `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/entity/ITickable.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` static <T extends BlockEntity> @Nullable BlockEntityTicker<T> tickServerOnly( Level level, BlockEntityType<?> expected, BlockEntityType<?> actual ) ` | ` (level.isClientSide()) ` 成立时提前返回 ` null `<br>末尾返回 ` ITickable.tick(expected, actual) `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` ITickable.tick(expected, actual) `<br>[调用处 RemoteTransmissionPoleBlock.getTicker](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/power/transmitting/RemoteTransmissionPoleBlock.java#L130) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/entity/ITickable.java#L11) |
| ` static <T extends BlockEntity> @Nullable BlockEntityTicker<T> tick( BlockEntityType<?> expected, BlockEntityType<?> actual ) ` | ` (expected != actual) ` 成立时提前返回 ` null `<br>末尾返回 ` (_, _, _, entity) -> Util.<ITickable>cast(entity).tick() `<br>[调用处 ITickable.tickServerOnly](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/entity/ITickable.java#L19) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/entity/ITickable.java#L22) |
| ` void tick() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/block/entity/ITickable.java#L32) |
