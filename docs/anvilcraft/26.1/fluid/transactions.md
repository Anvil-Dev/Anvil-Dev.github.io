# 为附属机器接入流体事务

一台机器要从输入端口搬运指定流体到缓冲罐时，经常要求整批转移。先抽取再插入，任一端拒绝都需要恢复原量。把两次操作放入同一个 NeoForge 事务，只有两边都接受全部数量时才调用 `commit()`。所有能够改变存量的处理器都必须支持事务回滚。

下面的工具用于服务端机器刻或玩家交互，可直接接收通过 `FluidContainerLookup.Result.handler()` 得到的处理器。传入 `FluidResource` 锁定流体种类和组件，数量以 mB 单独传入。

```java
package dev.example.addon;

import net.neoforged.neoforge.transfer.ResourceHandler;
import net.neoforged.neoforge.transfer.fluid.FluidResource;
import net.neoforged.neoforge.transfer.transaction.Transaction;

public final class BatchFluidTransfer {
    public static boolean move(ResourceHandler<FluidResource> from, ResourceHandler<FluidResource> to,
                               FluidResource resource, int amount) {
        if (from == to || resource.isEmpty() || amount <= 0) return false;
        try (Transaction tx = Transaction.openRoot()) {
            if (from.extract(resource, amount, tx) != amount) return false;
            if (to.insert(resource, amount, tx) != amount) return false;
            tx.commit();
            return true;
        }
    }
}
```

| 调用 | 约定 |
| --- | --- |
| `Transaction.openRoot()` | 开始一次顶层操作。若调用方已经提供 `TransactionContext`，处理器应沿用传入事务登记变更，避免创建互不相干的顶层事务。 |
| `extract(resource, amount, tx)` | 返回这次操作实际抽出的数量，可能小于请求量。返回 false 的分支离开 try 块时自动回滚。 |
| `insert(resource, amount, tx)` | 返回接受数量。例中的目标空间不足会让源与目标一起恢复。 |
| `FluidStackResourceHandler(int capacity)` | 适合模拟单槽，状态写入会先记录快照。自定义处理器若绕开事务，外部 `close` 无法恢复其手动改写的库存。 |

要经过管网过滤、单向阀和高度判定时，使用[管网的整量推送](transfer)。这里的工具适用于机器已经决定源和目标的内部交换。
