# GuideBookEvent

Letting your own guide book take over opening requires two parts. When `HasGuideBookEvent` is queried, call `hasGuideBook()`, which the caller reads via `isHasGuideBook()`. Later, when a server player opens the book, `OpenGuideBookEvent` carries the level, player, and interaction hand.

`ModEventUtil.openGuideBook` only posts the event; subscribers handle actually opening the page. Once handled, you can cancel `OpenGuideBookEvent` to stop subsequent listeners that do not normally receive canceled events. Note that the built-in Ageratum handler runs at `HIGHEST` priority and cancels immediately. [Posting method](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java) · [Built-in guide handler](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/event/GuideEventListener.java)

| Event Type | Construction Site |
| --- | --- |
| `GuideBookEvent` | No direct construction call site under this name in this commit |
| `GuideBookEvent.HasGuideBookEvent` | [`ModEventUtil:14`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L14) |
| `GuideBookEvent.OpenGuideBookEvent` | [`ModEventUtil:18`](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/util/ModEventUtil.java#L18) |
