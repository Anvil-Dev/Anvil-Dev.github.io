# dev.dubhe.anvilcraft.api.itemhandler（VoidItemHandler 至 VoidItemHandler）



## VoidItemHandler

` public final class VoidItemHandler implements ResourceHandler<ItemResource> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L10)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final VoidItemHandler INSTANCE ` | 初值 ` new VoidItemHandler() ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L11) |
| ` @Override public int size() ` | 末尾返回 ` 1 `<br>[调用处 VoidItemHandler.getResource](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L23) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L16) |
| ` @Override public ItemResource getResource(int index) ` | 末尾返回 ` ItemResource.EMPTY `<br>实现调用 ` Preconditions.checkElementIndex(index, this.size()) `<br>实现调用 ` this.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L21) |
| ` @Override public long getAmountAsLong(int index) ` | 末尾返回 ` 0 `<br>实现调用 ` Preconditions.checkElementIndex(index, this.size()) `<br>实现调用 ` this.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L27) |
| ` @Override public long getCapacityAsLong(int index, ItemResource resource) ` | 末尾返回 ` Integer.MAX_VALUE `<br>实现调用 ` Preconditions.checkElementIndex(index, this.size()) `<br>实现调用 ` this.size() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L33) |
| ` @Override public boolean isValid(int index, ItemResource resource) ` | 末尾返回 ` !resource.has(ModComponents.ETERNAL) `<br>实现调用 ` Preconditions.checkElementIndex(index, this.size()) `<br>实现调用 ` this.size() `<br>实现调用 ` resource.has(ModComponents.ETERNAL) `<br>[调用处 VoidItemHandler.insert](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L48) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L39) |
| ` @Override public int insert(int index, ItemResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` this.isValid(index, resource) ? amount : 0 `<br>实现调用 ` TransferPreconditions.checkNonEmptyNonNegative(resource, amount) `<br>实现调用 ` this.isValid(index, resource) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L45) |
| ` @Override public int extract(int index, ItemResource resource, int amount, TransactionContext transaction) ` | 末尾返回 ` 0 `<br>实现调用 ` Preconditions.checkElementIndex(index, this.size()) `<br>实现调用 ` this.size() `<br>实现调用 ` TransferPreconditions.checkNonEmptyNonNegative(resource, amount) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/api/itemhandler/VoidItemHandler.java#L51) |
