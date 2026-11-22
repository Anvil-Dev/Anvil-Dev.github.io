# AnvilBehaviorRegisterEvent

When adding anvil landing behavior for your own blocks, subscribe to this event on the game event bus during mod construction. AnvilCraft posts the registration event the first time it processes anvil behaviors, then caches the handler table. Registration keys can be either blocks or specific state predicates. Checking fall distance as in the example prevents accidental triggers from short drops. [Sandstone impact handler](../anvil/register)

This event group is defined in [`AnvilBehaviorRegisterEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/AnvilBehaviorRegisterEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `AnvilBehaviorRegisterEvent` | [`IAnvilBehavior:64`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/anvil/IAnvilBehavior.java#L64) |
