# Registering Cacheable Renderers

Select renderers by block entity type, with registration occurring after the type is available. Keep renderer registration on the client initialization path so the server does not load Minecraft client classes.

## Example in Source

- [`RenderRegion` · Line 176](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/RenderRegion.java#L176)

## Interfaces and Parameters

| Type | Declaration |
| --- | --- |
| `CacheableBlockEntityRenderer` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderer.java) |
| `CacheableBlockEntityRenderers` | [Java](https://github.com/Anvil-Dev/AnvilCraft/blob/6a4cde43b4ece65b765137a7aab145b9b4c002bf/src/main/java/dev/dubhe/anvilcraft/api/rendering/CacheableBlockEntityRenderers.java) |
