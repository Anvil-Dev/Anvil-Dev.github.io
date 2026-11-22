# Cross-Page Links and Anchors

Internal links use logical page names. Writing `field_guide:furnace` allows the same link to work for both English and Chinese. To point directly to a specific translation file, write the full resource ID. Appending an anchor to a heading lets readers jump straight to that step.

```markdown
# Furnace

[Jump to fuel](#fuel)

## Fuel

[Return to the guide](field_guide:index)
```

| Link Target | Resolution |
| --- | --- |
| `#fuel` | Searches for the heading on the current page and scrolls to it. |
| `field_guide:index` | Searches for the home page by namespace, current language, and fallback language. |
| `field_guide:ageratum/en_us/index.md` | Directly targets an explicit resource, suitable for fixed-language references. |
| `https://example.org/` | Handled through the external link flow. |

When a reader clicks a link to another page, navigation history preserves the previous page position. Changing only the anchor on the same page does not create a new page entry. When debugging a guide, open the logical path via command first, then verify that the anchor matches the actual heading.

[Link dispatch, history & anchors](https://github.com/Anvil-Dev/Ageratum/blob/83f89c4c3a6796d16bcef7e728f4b5b95d5a516c/src/main/java/dev/anvilcraft/resource/ageratum/client/gui/GuideScreen.java)
