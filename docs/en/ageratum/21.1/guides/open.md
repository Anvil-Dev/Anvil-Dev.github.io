# Opening Pages from the Server

For example, if an administrator wants to demonstrate the guide to a player next to a crafting table via a command, you can register a `/fieldguide` command as shown below. The server sends the logical page ID to the player executing the command, and the client loads the corresponding resource in its own language upon receipt.

```java
package dev.example.fieldguide;

import dev.anvilcraft.resource.ageratum.Ageratum;
import net.minecraft.commands.Commands;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.server.level.ServerPlayer;
import net.neoforged.fml.common.Mod;
import net.neoforged.neoforge.common.NeoForge;
import net.neoforged.neoforge.event.RegisterCommandsEvent;

@Mod("field_guide")
public final class FieldGuideMod {
    public FieldGuideMod() {
        NeoForge.EVENT_BUS.addListener(FieldGuideMod::registerCommands);
    }

    private static void registerCommands(RegisterCommandsEvent event) {
        event.getDispatcher().register(Commands.literal("fieldguide").executes(context -> {
            ServerPlayer reader = context.getSource().getPlayerOrException();
            Ageratum.openGuide(reader, ResourceLocation.fromNamespaceAndPath("field_guide", "index"));
            return 1;
        }));
    }
}
```

| Call | Parameters, Return Value & Timing |
| --- | --- |
| `Ageratum.openGuide(ServerPlayer, ResourceLocation)` | Obtains the target player on the server and passes the namespace and logical page name. Returns `void`, indicating the packet has been sent; the server does not receive confirmation of whether the page exists. |
| `openGuideOnClientWithoutLanguageCode` | Passes the logical page ID and breadcrumb list on the client, resolving the language automatically. Returns `false` if resolution fails. |
| `openGuideOnClient` | Opens a page with an already-resolved resource ID, such as `field_guide:ageratum/en_us/index.md`. Use the corresponding overload when an anchor is needed. |

Do not include `ageratum/en_us/` in the logical page name sent from the server. The client prepends the guide root directory and language directory itself when it receives the packet; including them in advance will cause the file not to be found. When running this command from the console there is no player, so `getPlayerOrException()` returns an error message to the command sender through Brigadier.

[Server entrypoint](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/Ageratum.java) · [Client packet handler](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/network/ClientPayloadHandler.java)
