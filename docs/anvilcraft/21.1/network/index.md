# 客户端与服务端通信

当界面需要服务端数据时，先看 AnvilCraft 是否已经为这项操作定义了包。红石导线的信号查询和盒子的滚轮选中都有现成协议。电网、管道网络的世界模拟另见[电网](../power/)与[流体](../fluid/)。

- [请求并显示导线读数](./wire)讲解请求端、响应端、距离和缓存。
- [同步菜单中的选中项](./selection)说明槽位号、药盒和护符盒的索引语义。
- [注册自己的载荷](./registration)演示用独立命名空间注册服务端查询。
- [大数据的分片传输](./split)说明编码器、分片大小、线程与交付时机。

在模组事件总线的 `RegisterPayloadHandlersEvent` 中，AnvilCraft 用协议版本字符串 `"2"` 建立 `PayloadRegistrar`，调用 `NetworkRegistrar.register(registrar, AnvilCraft.MOD_ID)`。依赖方发送内置包时直接使用包类型。自行注册同名 ID 会与原注册冲突。[内置协议注册](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/AnvilCraft.java)
