# Sharing the Current Page

When a player shares a guide, the client sends the page, anchor, and whether to share only with teammates. The server sends a clickable chat message to the selected players. When recipients click it, they open the file from their own client resource packs; the sender does not upload Markdown content.

| `ShareGuidePayload` Field | Type | Purpose |
| --- | --- | --- |
| `location` | `Identifier` | Namespace and file arguments used to generate the command. |
| `anchor` | `String` | If non-empty after trimming whitespace, appended as the third argument to the client command. |
| `sameTeam` | `boolean` | When `true`, filters recipients by team equality. Two players who are both not on any team are considered equal in this comparison. |

The server can send a request to open a guide, but cannot guarantee that the recipient's resource packs contain that page. For reliable jumps, ensure every client has the resource pack containing the page installed; to check in client code whether opening succeeded, read the boolean returned by the local open method. [Sending entrypoint](../guides/open) · [Share message handler](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/network/ServerPayloadHandler.java)
