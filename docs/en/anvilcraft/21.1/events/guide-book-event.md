# GuideBookEvent

When integrating your own guide book, respond to two events. Upon receiving `HasGuideBookEvent`, call `hasGuideBook()` to indicate availability; in `OpenGuideBookEvent`, open the corresponding content based on `ServerPlayer` and the hand used. The poster only broadcasts the open event and does not implement a fallback based on the cancellation flag.

This event group is defined in [`GuideBookEvent.java`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/event/GuideBookEvent.java).

| Event Type | Construction Site |
| --- | --- |
| `GuideBookEvent` | No direct construction call site under this name in this commit |
| `GuideBookEvent.HasGuideBookEvent` | [`ModEventUtil:14`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L14) |
| `GuideBookEvent.OpenGuideBookEvent` | [`ModEventUtil:18`](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L18) |
