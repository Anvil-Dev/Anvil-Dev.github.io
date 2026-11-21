# 给代码加行号与高亮

用围栏保留空格和换行。语言名称交给 JHighlight 的渲染器选择逻辑，无法处理的内容按普通代码显示。语言后可以写大括号标注要强调的行。相邻行用闭区间，多个范围用逗号分隔，行号从 1 开始。

````markdown
```java{3-4}
public final class FuelCost {
    public static int coalFor(int outputs) {
        if (outputs < 0) throw new IllegalArgumentException("negative count");
        return Math.ceilDiv(outputs, 8);
    }
}
```
````

| 设置或标记 | 类型 | 效果 |
| --- | --- | --- |
| `{3-4}` | 围栏信息中的行号范围 | 给第三、四行加背景。范围引用代码正文，不包含围栏。 |
| `showCodeBlockLineNumbers` | 客户端布尔值 | 是否给每行绘制行号。 |
| `allowCodeBlockLineContentLineBreaks` | 客户端布尔值 | 控制过长代码行如何适应书页宽度。 |

[渲染器选择与行号解析](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/component/MDCodeBlockComponent.java)
