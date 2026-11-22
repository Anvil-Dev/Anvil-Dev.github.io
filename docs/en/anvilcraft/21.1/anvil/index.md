# Anvil Landing Behavior

After an anvil lands on a block, the server can process in-world recipes, run the block's own impact logic, and potentially damage the anvil further. To turn a block into a specialized workstation, an add-on mod typically has two entrypoints:

- When ingredients, conditions, and outputs can be described as data, use in-world recipes. Recipes reload with server data.
- When you need to modify block states, access block entities, or produce server side effects, register a handler with the landing behavior registration event. [Registering Impact Behavior for a Block](./register)

To record state before and after a recipe batch, subscribe to the pre/post events dispatched for the same landing. [Identifying Recipe Batch Boundaries](./batch)
