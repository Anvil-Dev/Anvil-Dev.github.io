# Integrating Fluid Transactions for Add-on Machines

When a machine moves a specific fluid from an input port to a buffer tank, all-or-nothing batch transfer is often required. Extract first, then insert; if either side rejects, the original amounts must be restored. Place both operations in the same NeoForge transaction and call `commit()` only when both sides accept the full amount. All handlers capable of mutating stock must support transaction rollback.

The utility below is intended for server machine ticks or player interactions, directly accepting handlers obtained from `FluidContainerLookup.Result.handler()`. Pass `FluidResource` to lock the fluid type and components, and pass the amount in mB separately.

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

| Call | Convention |
| --- | --- |
| `Transaction.openRoot()` | Starts a top-level operation. If the caller already provides a `TransactionContext`, handlers should register changes on that transaction instead of opening unrelated root transactions. |
| `extract(resource, amount, tx)` | Returns the amount actually extracted, which may be less than requested. Returning `false` automatically rolls back on exiting the `try` block. |
| `insert(resource, amount, tx)` | Returns the accepted amount. In the example, insufficient target space restores both source and target. |
| `FluidStackResourceHandler(int capacity)` | Suitable for simulating a single slot; state writes record a snapshot first. If a custom handler bypasses transactions, outer `close` cannot restore manually mutated inventory. |

To go through pipe network filtering, one-way valves, and height checks, use [Network Exact Push](transfer). The utility here is for internal exchanges where the machine has already chosen source and target.
