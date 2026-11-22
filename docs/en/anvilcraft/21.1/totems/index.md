# Totems & Lethal Protection

When you need to grant an item a one-time death-prevention effect, register a `TotemHandler`. Each trigger is driven by `LivingEntity`'s death protection check, and the handler directly receives the injured entity and the totem stack. For persistent effects granted while worn, see [Amulets](../amulets/).

- [Implementing and Registering a Totem](./handler) includes an Ember Ward that activates only on fire damage and complete registration code.
- [Hand Order, Pockets, and Amulet Boxes](./box) explains candidate check order, in-box delegation, and built-in totem scopes.

[Totem manager](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/totem/TotemManager.java) · [Death protection call site](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/mixin/LivingEntityMixin.java)
