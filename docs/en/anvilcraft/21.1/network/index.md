# Client-Server Networking

When a screen needs server data, check first whether AnvilCraft already defines a packet for that operation. Redstone wire signal queries and box scroll selections already have built-in protocols. World simulation for power grids and pipe networks is covered separately in [Power Grid & Wattage](../power/) and [Pipes & Fluids](../fluid/).

- [Requesting and Displaying Wire Readouts](./wire) explains the requester, responder, range, and caching.
- [Syncing Menu Selections](./selection) covers slot indexes and index semantics for pill boxes and amulet boxes.
- [Registering Your Own Payloads](./registration) demonstrates registering server queries under your own namespace.
- [Chunked Transfer for Large Data](./split) covers codecs, chunk sizes, threading, and delivery timing.

In `RegisterPayloadHandlersEvent` on the mod event bus, AnvilCraft creates a `PayloadRegistrar` with protocol version `"2"` and calls `NetworkRegistrar.register(registrar, AnvilCraft.MOD_ID)`. Dependents sending built-in packets use the packet types directly; registering the same IDs yourself conflicts with the original registration. [Built-in protocol registration](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java)
