# dev.dubhe.anvilcraft.client.markdown



## HandbookSidebarState

` public interface HandbookSidebarState `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/HandbookSidebarState.java#L5)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` void anvilcraft$restoreSidebar(Set<Integer> collapsedGroups, int rows, double remainder) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/HandbookSidebarState.java#L6) |

## HandbookStructureExportClient

` public final class HandbookStructureExportClient `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/HandbookStructureExportClient.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static void export(Identifier location, StructureTemplate template) ` | 实现调用 ` Minecraft.getInstance() `<br>实现调用 ` minecraft.getConnection() `<br>实现调用 ` NbtIo.writeCompressed(template.save(new CompoundTag()), output) `<br>[调用处 HandbookStructureExportMixin.anvilcraft$exportClick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/mixin/client/HandbookStructureExportMixin.java#L32) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/client/markdown/HandbookStructureExportClient.java#L23) |
