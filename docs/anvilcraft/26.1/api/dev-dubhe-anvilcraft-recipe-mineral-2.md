# dev.dubhe.anvilcraft.recipe.mineral（MineralFountainReplacementRecipe.Builder 至 MineralFountainReplacementRecipe.Builder）



## MineralFountainReplacementRecipe.Builder

` public static class Builder extends AbstractRecipeBuilder<MineralFountainReplacementRecipe> `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L132)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public Builder dimension(Identifier dimension) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(dimension) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L143) |
| ` public Builder height(int min, int max) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L148) |
| ` public Builder replace(List<Identifier> replace) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` List.copyOf(replace) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L153) |
| ` public Builder priority(int priority) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L158) |
| ` public Builder chance(double chance) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L163) |
| ` public Builder fromBlock(BlockStatePredicate fromBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L168) |
| ` public Builder toBlock(ChanceBlockState toBlock) ` | 返回当前实例，可继续链式调用。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L173) |
| ` public Builder heat(MineralFountainHeat heat) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(heat) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L178) |
| ` public Builder toFluid(FluidStackTemplate toFluid) ` | 返回当前实例，可继续链式调用。<br>实现调用 ` Optional.of(toFluid) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L183) |
| ` @Override public MineralFountainReplacementRecipe buildRecipe() ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalStateException("to_block is required") `<br>末尾返回 ` new MineralFountainReplacementRecipe( this.dimension, this.height, this.replace, this.priority, this.chance, this.fromBlock, this.toBlock, this.heat, this.toFluid ) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L188) |
| ` @Override public void validate(Identifier id) ` | ` (this.toBlock == null) ` 成立时抛出 ` new IllegalArgumentException("to_block must not be null, RecipeId: " + id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L197) |
| ` @Override public String getType() ` | 末尾返回 ` "mineral_fountain_replacement" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L204) |
| ` @Override public ItemStackTemplate getResult() ` | 末尾返回 ` new ItemStackTemplate(this.toBlock == null ? Items.AIR : this.toBlock.state().getBlock().asItem()) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L209) |
| ` public Builder() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/recipe/mineral/MineralFountainReplacementRecipe.java#L132) |
