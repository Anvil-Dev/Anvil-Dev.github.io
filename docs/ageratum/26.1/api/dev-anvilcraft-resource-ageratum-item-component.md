# dev.anvilcraft.resource.ageratum.item.component



## Doc

` public record Doc(String value) `

[类型声明](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L24)

手册指向的文档。 值为字符串形式： 普通资源包文档：ageratum:index（Identifier 字符串形式）； GitHub 远程指南：github:user/repo#path:assets/xxx&amp;commit=sha（见 GitHubDocUri）。 Codec 同时兼容旧格式（纯 Identifier 或 &#123;"id": "..."&#125; 对象）。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public static final Codec<Doc> STRICT ` | 旧格式的严格 Codec（&#123;"id": "..."&#125;）。<br>初值 ` RecordCodecBuilder.create(instance -> instance.group( Codec.STRING.fieldOf("id").forGetter(Doc::value) ).apply(instance, Doc::new)) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L28) |
| ` public static final Codec<Doc> CODEC ` | 兼容 Codec：优先按普通字符串解码，其次按旧对象格式解码。<br>初值 ` Codec.either( Codec.STRING.xmap(Doc::new, Doc::value), STRICT ).xmap(e -> e.left().orElseGet(e.right()::get), doc -> Either.left(doc)) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L35) |
| ` public static final StreamCodec<FriendlyByteBuf, Doc> STREAM_CODEC ` | 初值 ` StreamCodec.of( (buf, doc) -> buf.writeUtf(doc.value()), buf -> new Doc(buf.readUtf()) ) ` | [字段](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L40) |
| ` public static Doc of(Identifier id) ` | 由 Identifier 构造。<br>末尾返回 ` new Doc(id.toString()) `<br>[调用处 AgeratumItems](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/init/AgeratumItems.java#L23) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L48) |
| ` public boolean isGitHub() ` | 是否为 GitHub 远程指南。<br>末尾返回 ` GitHubDocUri.isGitHubDoc(this.value) `<br>[调用处 Doc.id](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L64) | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L55) |
| ` @Nullable public Identifier id() ` | 解析为 Identifier；GitHub 远程指南返回 null。<br>` (this.isGitHub()) ` 成立时提前返回 ` null `<br>末尾返回 ` Identifier.tryParse(this.value) ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L62) |
| ` public Doc(String value) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L24) |
| ` public String value() ` | 读取 record 分量 ` value ` | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L24) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L24) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L24) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/item/component/Doc.java#L24) |
