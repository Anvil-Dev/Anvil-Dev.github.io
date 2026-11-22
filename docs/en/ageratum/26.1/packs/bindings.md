# Opening Articles by Item Components

The same item can have multiple uses. To make a damaged iron pickaxe jump specifically to the repair page, include `minecraft:damage` in the binding. The example below matches only an iron pickaxe with a damage value of `12`, regardless of enchantments, custom names, or other components on that pickaxe in the inventory.

```markdown
---
navigation:
  title: Repair Example
guide:
  items:
    - 'minecraft:iron_pickaxe{"minecraft:damage":12}'
---

# Repair Example

This pickaxe has lost 12 durability. Repair it with iron ingots on an anvil.
```

| Field or Syntax | Type | Reading Rules |
| --- | --- | --- |
| `guide.items`, `items` | String or string list | Optional. Each entry defines one binding rule. |
| `guide.item`, `guide.item_id`, `item`, `item_id` | String | Single-binding form. |
| `namespace:item`, `namespace:item{}` | Item ID | Both check only the item. |
| `{…}` after ID | Component object text | Subset-matched against the encoded data of the actual stack. Attempts JSON first, then SNBT if JSON parsing fails. |

The parser reads the first valid configuration in the order `guide.items`, `guide.item`, `guide.item_id`, `items`, `item`, `item_id` without merging across fields. When matching component objects, the item only needs to contain the required keys; when matching arrays, required elements must appear in the same relative order (other elements may appear in between); numbers are compared by numeric value. Empty stacks, mismatched IDs, or undecodable conditions never match. [Binding parsing & matching](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideItemBinding.java) · [Field priority](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/MDDocument.java)

Hold the target item and run `/ageratum item` to inspect its item ID and components that differ from the default state. In an inventory, hover over the item and hold the "Ponder" key (default `W`, held for `750` ms by default) to jump to the guide. If multiple pages match, the client prefers the current language first, falls back to English if no candidate exists, and only then considers other languages. Within the same language group, more specific component constraints take higher priority: each object key adds 1 point, each primitive value adds 1 point, arrays sum their element scores, and an item-ID-only rule scores 0. When a single page has multiple rules, its highest score is used; ties are broken lexicographically by page resource ID. [Command implementation](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/command/AgeratumCommand.java) · [Cache selection](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/feat/markdown/GuideDocumentCache.java) · [Keybind settings](https://github.com/Anvil-Dev/Ageratum/blob/36bf4ce16017ebc532a369c56f972dfb73d272a0/src/main/java/dev/anvilcraft/resource/ageratum/client/AgeratumClientConfig.java)
