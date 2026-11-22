# ModCategoryInitEvent

When the server initializes storage categories, you can register a namespaced category with your own mod ID and icon, or pass a full `ICategory`. Calling `register` again with the same ID replaces the mapped value. `getHolder` queries this event's registry and throws if the key does not exist. [Storage](../storage/)

This event group is defined in [`ModCategoryInitEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/ModCategoryInitEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `ModCategoryInitEvent` | [`CategoryInitEventListener:45`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/event/CategoryInitEventListener.java#L45) |
