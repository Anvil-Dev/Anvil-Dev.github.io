# Heating & Heat Collection

Heating blocks and collecting heat follow two independent call chains. Heaters describe heated positions and temperature curves, and the manager merges contributions at the same position to raise temperature. Collectors search around themselves for heat sources, draw heat according to source rules, and update the source's state.

- [Determining Temperature from Producer Count](curve) covers thresholds, time units, and step-down boundaries.
- [Registering Heaters and Heatable Blocks](heaters) binds rules to server positions and handles loading, extinguishing, and removal.
- [Adding Collector Heat Sources](collectors) defines how much heat can be drawn each time and the block state after depletion.
