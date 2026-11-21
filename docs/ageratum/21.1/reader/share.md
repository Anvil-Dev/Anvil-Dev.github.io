# 分享当前书页

玩家分享手册时，客户端发送页面、锚点和是否仅分享给队友。服务器向选中的玩家发送可点击的聊天消息。接收者点击后用自己的客户端资源包打开文件，发送方不上传 Markdown 正文。

| `ShareGuidePayload` 字段 | 类型 | 用途 |
| --- | --- | --- |
| `location` | `ResourceLocation` | 生成命令的命名空间和文件参数。 |
| `anchor` | `String` | 去除前后空白后若仍有内容，就追加为客户端命令的第三个参数。 |
| `sameTeam` | `boolean` | 为 true 时通过队伍对象是否相等筛选接收者。两名均未加入队伍的玩家在这个比较里相等。 |

服务端能发送打开手册的请求，无法保证对方资源包里有对应页面。需要准确跳转时，确保各端安装包含该页面的资源；要在客户端代码中确认打开结果，可读取本地打开方法返回的布尔值。[发送入口](../guides/open) · [分享消息处理器](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/network/ServerPayloadHandler.java)
