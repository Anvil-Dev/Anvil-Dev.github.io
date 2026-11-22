# Adding Interactivity Inline

Placing short values, item names, and commands inline makes them easier to match with operational steps. Backticks preserve raw text; use Ageratum's inline extensions when you need translation or hover behavior. The interaction below puts a command into the chat input box so readers can still edit it.

```markdown
After **fuel runs out**, check whether there is still raw material in the input slot.

<hover type="SHOW_TEXT" data="Fill command into chat"><click type="SUGGEST_COMMAND" data="/ageratum field_guide">Open Guide</click></hover>
```

`SUGGEST_COMMAND` is suitable for commands whose arguments need editing, while `COPY_TO_CLIPBOARD` copies a string. Use `RUN_COMMAND` for actions that should run directly on click. Wrapping the same text in both `hover` and `click` provides both explanation and action. Distinguish inline styles, inline components, and line-level block components—they have separate registration entrypoints in the parser.

[Built-in inline styles](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/registries/BuiltinInlineStyleParsers.java) · [Extension registration guide](../extensions/)
