# 物品、方块、实体与配方

分别填写对应注册表的 ID。展示带组件的物品时，`components` 是 JSON 对象文本。方块状态使用逗号分隔的属性赋值，实体数据则使用 SNBT。

```markdown
<item id="minecraft:iron_pickaxe" count="1" components='{"minecraft:damage":12}'/>

<block id="minecraft:oak_log" state="axis=x" showText="false"/>

<entity id="minecraft:sheep" nbt='{}'/>

<recipe id="minecraft:anvil" center="true"/>
```

| 标签 | 字段 | 类型 | 要求与行为 |
| --- | --- | --- | --- |
| `item` | `id` | 物品 ID | 必填。查询客户端世界的物品注册表。 |
| `item` | `count` | 整数字符串 | 可选，默认 1。无法解析为整数时显示参数错误。 |
| `item` | `components` | JSON 对象字符串 | 可选，默认 `{}`。按 DataComponentMap 的 Codec 解码，成功后覆盖默认栈上的对应组件。 |
| `block` | `id`、`state` | 方块 ID、属性字符串 | ID 必填。状态可省略。多个属性写作 `facing=north,half=bottom`。 |
| `entity` | `id`、`nbt` | 实体类型 ID、SNBT compound 文本 | ID 必填。省略或无法解析 NBT 时，以空 compound 构造预览。 |
| 三种预览 | `showText` | 布尔字符串 | 可选，默认 `true`，控制名称显示。 |
| `recipe` | `id` | 配方 ID | 必填，填写配方条目自身的 ID。 |
| `recipe` | `center` | 布尔字符串 | 可选，默认 `true`。实现按小写字符串 `true` 判断是否居中。 |

在这个分支，`<recipe>` 解析时会保存 ID，渲染代理按 ID 查找配方的代码已经注释。上例中的 `<recipe>` 在页面上只留下空白占位，即使配方存在也一样。模组作者持有配方实例时可直接调用对应的工作台、锻造台、切石机或熔炉工厂。详见[手工创建配方视图](../recipe-render/factory)。[配方代理实现](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDRecipeComponent.java) · [物品预览](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDItemComponent.java) · [方块预览](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDBlockComponent.java) · [实体预览](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/extend/MDEntityComponent.java) · [配方视图](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinRecipeComponentFactories.java)
