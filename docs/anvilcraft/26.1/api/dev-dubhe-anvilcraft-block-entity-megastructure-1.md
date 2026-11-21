# dev.dubhe.anvilcraft.block.entity.megastructure（AcceleratorHandler 至 MatterDecompressorHandler）



## AcceleratorHandler

` public class AcceleratorHandler extends BaseMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L44)

恒星演化加速器。 演化由 StellarEvolutionState 的绝对游戏刻和 StellarTrack 节点推进。 演化中间阶段绝不会改写 StarData 的玩法字段。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String name() ` | 末尾返回 ` "stellar_evolution_accelerator" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L85) |
| ` public boolean isActive() ` | 轨道或事件状态仍在运行时视为活动。<br>末尾返回 ` this.evolutionState != null && this.evolutionState.isActive() `<br>[调用处 AcceleratorHandler.getPhaseId](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L111) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L91) |
| ` public boolean isPaused() ` | 末尾返回 ` this.pausedSinceGameTime >= 0L `<br>[调用处 AcceleratorHandler.visualPartialTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L731) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L95) |
| ` @Nullable public StellarEvolutionState getEvolutionState() ` | 末尾返回 ` this.evolutionState ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L99) |
| ` @Nullable public StellarTrack getEvolutionTrack() ` | 末尾返回 ` this.evolutionTrack ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L104) |
| ` public String getPhaseId() ` | 当前物理阶段 ID，空闲时返回空字符串。<br>末尾返回 ` this.evolutionState == null \|\| !this.isActive() ? "" : this.evolutionState.phaseId() `<br>[调用处 AcceleratorHandler.getPhaseId](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L116) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L110) |
| ` public String getPhaseId(CelestialForgingAnvilBlockEntity be) ` | ` (this.evolutionState == null \|\| !this.isActive() \|\| this.evolutionTrack == null \|\| be.getLevel() == null) ` 成立时提前返回 ` this.getPhaseId() `<br>末尾返回 ` this.evolutionState.phaseAt(this.evolutionTrack, this.clockTime(be), 0.0F).getSerializedName() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L114) |
| ` public float getPhaseProgress() ` | 当前阶段进度，始终钳制在 0..1。<br>末尾返回 ` this.evolutionState == null \|\| !this.isActive() ? 0.0F : this.evolutionState.phaseProgress() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L122) |
| ` public float getPhaseProgress(CelestialForgingAnvilBlockEntity be, float partialTick) ` | 客户端按绝对游戏时间重建阶段进度，不依赖 20 tick 心跳。<br>` (this.evolutionState == null \|\| !this.isActive() \|\| be.getLevel() == null) ` 成立时提前返回 ` 0.0F `<br>` (this.evolutionTrack == null) ` 成立时提前返回 ` this.evolutionState.phaseProgress() `<br>末尾返回 ` this.evolutionState.phaseProgressAt(this.evolutionTrack, this.clockTime(be), this.visualPartialTick(partialTick)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L127) |
| ` public int getTicksRemaining(CelestialForgingAnvilBlockEntity be) ` | 客户端按绝对游戏时间计算剩余刻数。<br>` (this.evolutionState == null \|\| be.getLevel() == null) ` 成立时提前返回 ` this.ticksRemaining `<br>末尾返回 ` Math.max(0, this.evolutionState.totalDurationTicks() - (int) Math.min(Integer.MAX_VALUE, elapsed)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L134) |
| ` public float getTotalProgress(CelestialForgingAnvilBlockEntity be, float partialTick) ` | 总演化进度，供客户端 UI 使用。<br>` (this.evolutionState == null \|\| be.getLevel() == null) ` 成立时提前返回 ` 0.0F `<br>末尾返回 ` this.evolutionState.totalProgress(this.clockTime(be), this.visualPartialTick(partialTick)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L142) |
| ` public String getTerminalProfileId() ` | 末尾返回 ` this.evolutionState == null ? "" : this.evolutionState.terminalProfileId() `<br>[调用处 AcceleratorHandler.getTerminalProfileId](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L152) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L147) |
| ` public String getTerminalProfileId(CelestialForgingAnvilBlockEntity be) ` | 末尾返回 ` this.getTerminalProfileId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L151) |
| ` public String getTerminalOutcomeId() ` | 显示当前轨道的终局。<br>末尾返回 ` this.evolutionTrack == null ? "" : this.evolutionTrack.definition().terminal().kind().id() `<br>[调用处 AcceleratorHandler.getTerminalOutcomeId](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L161) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L156) |
| ` public String getTerminalOutcomeId(CelestialForgingAnvilBlockEntity be) ` | 末尾返回 ` this.getTerminalOutcomeId() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L160) |
| ` @Nullable public StellarVisualState getVisualState(CelestialForgingAnvilBlockEntity be, float partialTick) ` | 根据绝对游戏刻采样视觉快照；非演化状态由调用方回退到 StarData。<br>末尾返回 ` this.sampleVisualState(be, partialTick, true) `<br>[调用处 AcceleratorHandler.calculateVisualBodyScale](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L220) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L165) |
| ` @Nullable public StellarVisualState getStructuralVisualState(CelestialForgingAnvilBlockEntity be, float partialTick) ` | 返回不含周期脉动的结构快照。束星环、巨构和中心高度只使用这个值， 从而不会随着恒星表面的快速小幅呼吸上下抖动。<br>末尾返回 ` this.sampleVisualState(be, partialTick, false) `<br>[调用处 AcceleratorHandler.calculateVisualBodyScale](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L221) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L174) |
| ` public float getVisualBodyScale(CelestialForgingAnvilBlockEntity be, float partialTick) ` | 将轨道半径换算为当前恒星的结构渲染缩放，供束星环和中心共用。<br>末尾返回 ` this.calculateVisualBodyScale(be, partialTick, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L197) |
| ` public float getPulsatingVisualBodyScale(CelestialForgingAnvilBlockEntity be, float partialTick) ` | 将含脉动的半径换算为本体渲染缩放；不供束星环使用。<br>末尾返回 ` this.calculateVisualBodyScale(be, partialTick, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L202) |
| ` public float getTerminalVisualBodyScale(CelestialForgingAnvilBlockEntity be) ` | 返回本次演化终点在服务端 StarData 中使用的原始视觉缩放。<br>` (!(be.getCelestialBodyData() instanceof StarData star)) ` 成立时提前返回 ` 0.01F `<br>` (this.evolutionState == null) ` 成立时提前返回 ` star.bodyScale() `<br>末尾返回 ` this.terminalVisualBodyScale(star) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L207) |
| ` @Nullable public StellarEventProfile getCurrentEventProfile(CelestialForgingAnvilBlockEntity be) ` | 当前事件 profile，供渲染器选择独立核心/抛射物层。<br>` (this.evolutionState == null \|\| !this.evolutionState.isActive() \|\| this.evolutionTrack == null) ` 成立时提前返回 ` null `<br>` (id == null \|\| id.isBlank()) ` 成立时提前返回 ` null `<br>末尾返回 ` this.evolutionState.eventProfile(id) `<br>[调用处 AcceleratorHandler.getEventProgress](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L394) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L352) |
| ` @Nullable public StellarEventProfile getEventProfile(String id) ` | 末尾返回 ` this.evolutionState == null ? StellarTrackLibrary.eventProfiles().get(id) : this.evolutionState.findEventProfile(id) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L360) |
| ` public void captureSnapshot(CelestialForgingAnvilBlockEntity be, CompoundTag snapshot) ` | 捕获的是已冻结的运行，不在复制或重新捕获时抽样。<br>实现调用 ` be.getLevel() `<br>实现调用 ` this.saveState(saved) `<br>实现调用 ` snapshot.put("stellarEvolution", saved) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L366) |
| ` public void restoreSnapshot(CelestialForgingAnvilBlockEntity be, CompoundTag snapshot) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().isClientSide() `<br>实现调用 ` this.onClear(be) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L375) |
| ` public float getEventProgress(CelestialForgingAnvilBlockEntity be, float partialTick) ` | 当前事件的 0..1 进度。<br>` (profile == null \|\| this.evolutionState == null \|\| be.getLevel() == null) ` 成立时提前返回 ` 0.0F `<br>` (this.evolutionTrack == null) ` 成立时提前返回 ` this.evolutionState.phaseProgress() `<br>末尾返回 ` this.evolutionState.eventProgress(this.evolutionTrack, this.clockTime(be), this.visualPartialTick(partialTick), profile) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L393) |
| ` @Override public boolean isAuxiliaryActive(CelestialForgingAnvilBlockEntity be) ` | 末尾返回 ` this.isActive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L405) |
| ` @Override public void serverTick(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().isClientSide() `<br>实现调用 ` this.evolutionState.isActive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L410) |
| ` @Override public void onBuild(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().isClientSide() `<br>实现调用 ` this.isActive() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L456) |
| ` @Override public void onClear(CelestialForgingAnvilBlockEntity be) ` | 分支 ` (this.quenchedStarted) ` 内调用 ` this.sendQuenchedOutMusic(be, false) `<br>[调用处 AcceleratorHandler.restoreSnapshot](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L377) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L741) |
| ` @Override public void saveAdditional(ValueOutput output) ` | 写入方块实体的持久化数据时调用。<br>实现调用 ` this.saveState(tag) `<br>实现调用 ` output.store(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L762) |
| ` @Override public void loadAdditional(ValueInput input) ` | 从存档恢复方块实体附加数据时调用。<br>执行 ` this.loadState(input.read(MapCodec.assumeMapUnsafe(CompoundTag.CODEC)).orElseGet(CompoundTag::new)) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L769) |
| ` @Override public void writeUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 实现调用 ` tag.putInt("acceleratorStage", this.stage) `<br>实现调用 ` tag.putInt("acceleratorTicksRemaining", this.ticksRemaining) `<br>实现调用 ` tag.putInt("acceleratorTicksTotal", this.ticksTotal) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L842) |
| ` @Override public void readUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 实现调用 ` tag.getIntOr("acceleratorStage", 0) `<br>实现调用 ` tag.getIntOr("acceleratorTicksRemaining", 0) `<br>实现调用 ` tag.getIntOr("acceleratorTicksTotal", 0) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L851) |
| ` public int getStage() ` | 供巨构资格判断使用的粗阶段。<br>末尾返回 ` this.stage `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L44) |
| ` public int getTicksRemaining() ` | 末尾返回 ` this.ticksRemaining `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L44) |
| ` public int getTicksTotal() ` | 末尾返回 ` this.ticksTotal `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L44) |
| ` public AcceleratorHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/AcceleratorHandler.java#L44) |

## BaseMegastructureHandler

` public abstract class BaseMegastructureHandler implements IMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/BaseMegastructureHandler.java#L31)

锻星砧巨构处理器基类，提供接口扫描及物品、流体操作工具。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public void saveAdditional(ValueOutput output) ` | 写入方块实体的持久化数据时调用。<br>当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/BaseMegastructureHandler.java#L35) |
| ` @Override public void loadAdditional(ValueInput input) ` | 从存档恢复方块实体附加数据时调用。<br>当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/BaseMegastructureHandler.java#L39) |
| ` @Override public void writeUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/BaseMegastructureHandler.java#L43) |
| ` @Override public void readUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/BaseMegastructureHandler.java#L47) |
| ` @Override public void onBuild(CelestialForgingAnvilBlockEntity be) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/BaseMegastructureHandler.java#L51) |
| ` @Override public void onClear(CelestialForgingAnvilBlockEntity be) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/BaseMegastructureHandler.java#L55) |
| ` public BaseMegastructureHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/BaseMegastructureHandler.java#L31) |

## ColliderHandler

` public class ColliderHandler extends BaseMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ColliderHandler.java#L24)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String name() ` | 末尾返回 ` "stellar_ring_collider" `<br>[调用处 ColliderHandler.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ColliderHandler.java#L50) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ColliderHandler.java#L36) |
| ` @Override public int getInputPower(CelestialForgingAnvilBlockEntity be) ` | 末尾返回 ` 4000 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ColliderHandler.java#L41) |
| ` @Override public void serverTick(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().isClientSide() `<br>实现调用 ` be.getActiveMegastructureOption() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ColliderHandler.java#L46) |
| ` @Override public void onClear(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` this.outputColliderReservedItems(be) `<br>实现调用 ` this.resetColliderState(be) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ColliderHandler.java#L373) |
| ` public ColliderHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ColliderHandler.java#L24) |

## DysonSphereHandler

` public class DysonSphereHandler extends BaseMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L22)

Power production and primordial-matter processing for all Dyson spheres.

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public DysonSphereHandler(String name) ` | 执行 ` this.name = name `<br>[调用处 ModMegastructures](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/init/ModMegastructures.java#L114) | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L39) |
| ` @Override public String name() ` | 末尾返回 ` this.name ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L43) |
| ` @Override public void onBuild(CelestialForgingAnvilBlockEntity be) ` | 执行 ` this.resetSupplyState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L48) |
| ` @Override public void onClear(CelestialForgingAnvilBlockEntity be) ` | 执行 ` this.resetSupplyState() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L53) |
| ` @Override public void serverTick(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` level.isClientSide() `<br>实现调用 ` this.isBrownDwarfSphere() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L58) |
| ` @Override public int getOutputPower(CelestialForgingAnvilBlockEntity be) ` | ` (body != null && body.requiresAmplifier() && !be.isAmplifierPresent()) ` 成立时提前返回 ` 0 `<br>` (be.isAcceleratorActive() && be.getAcceleratorStage() == 1 && be.isAmplifierPresent()) ` 成立时提前返回 ` Math.max(this.cachedGridConsumption * 2, this.cachedGridConsumption + 1) `<br>` (energy <= 0 \|\| radius <= 0) ` 成立时提前返回 ` 0 `<br>末尾返回 ` (int) Math.min(boostedPower, Integer.MAX_VALUE) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L89) |
| ` @Override public PowerComponentType getComponentType() ` | 末尾返回 ` PowerComponentType.PRODUCER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L126) |
| ` @Override public void gridTick(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getGrid() `<br>实现调用 ` be.isAcceleratorActive() `<br>实现调用 ` be.getAcceleratorStage() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L131) |
| ` @Override public void saveAdditional(ValueOutput output) ` | 写入方块实体的持久化数据时调用。<br>实现调用 ` this.writeState(tag) `<br>实现调用 ` output.store(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L141) |
| ` @Override public void loadAdditional(ValueInput input) ` | 从存档恢复方块实体附加数据时调用。<br>实现调用 ` this.statePrefix() `<br>实现调用 ` Arrays.fill(this.stableSupplyTicks, 0) `<br>实现调用 ` input.getIntArray(prefix + "StableTicksByTier") `<br>[调用处 DysonSphereHandler.readUpdateTag](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L175) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L148) |
| ` @Override public void writeUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 实现调用 ` super.writeUpdateTag(tag, registries) `<br>实现调用 ` this.writeState(tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L166) |
| ` @Override public void readUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 实现调用 ` super.readUpdateTag(tag, registries) `<br>实现调用 ` this.loadAdditional(TagValueInput.create(ProblemReporter.DISCARDING, registries, tag)) `<br>实现调用 ` TagValueInput.create(ProblemReporter.DISCARDING, registries, tag) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/DysonSphereHandler.java#L172) |

## EcoStationHandler

` public class EcoStationHandler extends BaseMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/EcoStationHandler.java#L16)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String name() ` | 末尾返回 ` "eco_station" `<br>[调用处 EcoStationHandler.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/EcoStationHandler.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/EcoStationHandler.java#L20) |
| ` @Override public int getInputPower(CelestialForgingAnvilBlockEntity be) ` | 末尾返回 ` 1000 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/EcoStationHandler.java#L25) |
| ` @Override public void serverTick(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().isClientSide() `<br>实现调用 ` be.getActiveMegastructureOption() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/EcoStationHandler.java#L30) |
| ` @Override public void onClear(CelestialForgingAnvilBlockEntity be) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/EcoStationHandler.java#L92) |
| ` public EcoStationHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/EcoStationHandler.java#L16) |

## ExcavatorHandler

` public class ExcavatorHandler extends BaseMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L36)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String name() ` | 末尾返回 ` "planet_excavator" `<br>[调用处 ExcavatorHandler.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L59) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L45) |
| ` @Override public LaserRequirement getLaserRequirement() ` | 末尾返回 ` new LaserRequirement(16, false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L50) |
| ` @Override public void serverTick(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().isClientSide() `<br>实现调用 ` be.getActiveMegastructureOption() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L55) |
| ` @Override public void saveAdditional(ValueOutput output) ` | 写入方块实体的持久化数据时调用。<br>执行 ` output.putBoolean("excavatorLaserActive", this.laserActive) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L180) |
| ` @Override public void loadAdditional(ValueInput input) ` | 从存档恢复方块实体附加数据时调用。<br>执行 ` this.laserActive = input.getBooleanOr("excavatorLaserActive", false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L185) |
| ` @Override public void writeUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 执行 ` tag.putBoolean("excavatorLaserActive", this.laserActive) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L190) |
| ` @Override public void readUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 执行 ` this.laserActive = tag.getBooleanOr("excavatorLaserActive", false) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L195) |
| ` @Override public void onClear(CelestialForgingAnvilBlockEntity be) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L200) |
| ` public boolean isLaserActive() ` | 末尾返回 ` this.laserActive `<br>由 Lombok 生成。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L36) |
| ` public ExcavatorHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExcavatorHandler.java#L36) |

## ExtractorHandler

` public class ExtractorHandler extends BaseMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExtractorHandler.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String name() ` | 末尾返回 ` "planet_exctractor" `<br>[调用处 ExtractorHandler.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExtractorHandler.java#L26) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExtractorHandler.java#L17) |
| ` @Override public void serverTick(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().isClientSide() `<br>实现调用 ` be.getActiveMegastructureOption() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExtractorHandler.java#L22) |
| ` @Override public void onClear(CelestialForgingAnvilBlockEntity be) ` | 执行 ` this.fluidRoundRobin = 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExtractorHandler.java#L65) |
| ` public ExtractorHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/ExtractorHandler.java#L14) |

## GiantExtractorHandler

` public class GiantExtractorHandler extends BaseMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/GiantExtractorHandler.java#L17)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String name() ` | 末尾返回 ` "giant_planet_exctractor" `<br>[调用处 GiantExtractorHandler.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/GiantExtractorHandler.java#L30) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/GiantExtractorHandler.java#L21) |
| ` @Override public void serverTick(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().isClientSide() `<br>实现调用 ` be.getActiveMegastructureOption() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/GiantExtractorHandler.java#L26) |
| ` @Override public void onClear(CelestialForgingAnvilBlockEntity be) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/GiantExtractorHandler.java#L106) |
| ` public GiantExtractorHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/GiantExtractorHandler.java#L17) |

## IMegastructureHandler

` public interface IMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L14)

锻星砧巨构处理器接口。 26.1 使用 ValueOutput/ValueInput 持久化，网络同步仍通过 CompoundTag。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` LaserRequirement NO_LASER_REQUIREMENT ` | 初值 ` new LaserRequirement(0, false) ` | [字段](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L15) |
| ` String name() ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L17) |
| ` void serverTick(CelestialForgingAnvilBlockEntity be) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L19) |
| ` void onBuild(CelestialForgingAnvilBlockEntity be) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L21) |
| ` void onClear(CelestialForgingAnvilBlockEntity be) ` | 实现该接口时使用签名中的参数顺序和返回类型。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L23) |
| ` void saveAdditional(ValueOutput output) ` | 使用 ValueOutput 保存巨构持久化数据。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L26) |
| ` void loadAdditional(ValueInput input) ` | 使用 ValueInput 读取巨构持久化数据。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L29) |
| ` void writeUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 服务端写入随锻星砧更新标签发送的同步数据。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L32) |
| ` void readUpdateTag(CompoundTag tag, HolderLookup.Provider registries) ` | 客户端读取锻星砧更新标签中的同步数据。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L35) |
| ` default void onUnload(CelestialForgingAnvilBlockEntity be) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L37) |
| ` default boolean isAuxiliaryActive(CelestialForgingAnvilBlockEntity be) ` | 末尾返回 ` false ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L40) |
| ` default int getInputPower(CelestialForgingAnvilBlockEntity be) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L44) |
| ` default int getOutputPower(CelestialForgingAnvilBlockEntity be) ` | 末尾返回 ` 0 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L48) |
| ` default PowerComponentType getComponentType() ` | 末尾返回 ` PowerComponentType.CONSUMER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L52) |
| ` default void gridTick(CelestialForgingAnvilBlockEntity be) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L56) |
| ` default LaserRequirement getLaserRequirement() ` | 末尾返回 ` IMegastructureHandler.NO_LASER_REQUIREMENT ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L59) |

## IMegastructureHandler.LaserRequirement

` record LaserRequirement(int level, boolean gamma) `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L64)

所有相连激光接口需要满足的激光等级和类型。

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` public LaserRequirement(int level, boolean gamma) ` | 按声明顺序接收所有 record 分量。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L64) |
| ` public int level() ` | 读取 record 分量 ` level ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L64) |
| ` public boolean gamma() ` | 读取 record 分量 ` gamma ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L64) |
| ` public int hashCode() ` | 根据各个分量计算哈希值。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L64) |
| ` public String toString() ` | 返回包含分量名和值的字符串。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L64) |
| ` public boolean equals(Object other) ` | 比较相同 record 类型的各个分量。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/IMegastructureHandler.java#L64) |

## MagnetarCoilHandler

` public class MagnetarCoilHandler extends BaseMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MagnetarCoilHandler.java#L7)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String name() ` | 末尾返回 ` "magnetar_coil" ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MagnetarCoilHandler.java#L9) |
| ` @Override public void serverTick(CelestialForgingAnvilBlockEntity be) ` | 当前实现的方法体为空。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MagnetarCoilHandler.java#L14) |
| ` @Override public int getOutputPower(CelestialForgingAnvilBlockEntity be) ` | ` (!be.isAmplifierPresent()) ` 成立时提前返回 ` 0 `<br>` (!(be.getCelestialBodyData() instanceof StarData star)) ` 成立时提前返回 ` 0 `<br>末尾返回 ` powerMW * 1000 ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MagnetarCoilHandler.java#L19) |
| ` @Override public PowerComponentType getComponentType() ` | 末尾返回 ` PowerComponentType.PRODUCER ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MagnetarCoilHandler.java#L32) |
| ` public MagnetarCoilHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MagnetarCoilHandler.java#L7) |

## MatterDecompressorHandler

` public class MatterDecompressorHandler extends BaseMegastructureHandler `

[类型声明](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MatterDecompressorHandler.java#L14)

| 成员签名 | 实现与调用约定 | 源码 |
| --- | --- | --- |
| ` @Override public String name() ` | 末尾返回 ` "matter_decompressor" `<br>[调用处 MatterDecompressorHandler.serverTick](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MatterDecompressorHandler.java#L34) | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MatterDecompressorHandler.java#L19) |
| ` @Override public LaserRequirement getLaserRequirement() ` | 末尾返回 ` new LaserRequirement(1, true) ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MatterDecompressorHandler.java#L24) |
| ` @Override public void serverTick(CelestialForgingAnvilBlockEntity be) ` | 实现调用 ` be.getLevel() `<br>实现调用 ` be.getLevel().isClientSide() `<br>实现调用 ` be.isAmplifierPresent() ` | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MatterDecompressorHandler.java#L29) |
| ` @Override public void onClear(CelestialForgingAnvilBlockEntity be) ` | 返回类型为 void。 | [方法](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MatterDecompressorHandler.java#L96) |
| ` public MatterDecompressorHandler() ` | Java 提供的无参构造器。 | [构造器](https://github.com/Anvil-Dev/AnvilCraft/blob/7ac05a76988c98454c0384513fcab44d9da4cf88/src/main/java/dev/dubhe/anvilcraft/block/entity/megastructure/MatterDecompressorHandler.java#L14) |
