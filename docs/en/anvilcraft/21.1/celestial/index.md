# Celestial Forging Anvil & Stellar Evolution

The Celestial Forging Anvil searches for celestial bodies using its slots, seed, and power state. The server-side block entity holds search state, history, and megastructure handlers; add-on mods can read that state, transfer celestial bodies, or provide new megastructures.

- [Starting Searches & Diagnosing Failure Reasons](./search) from server interaction to result settlement.
- [Disk and Singularity Crystal Snapshots](./snapshot) covering supported carriers, returned copies, and extreme body limits.
- [Looking Up Evolution Tracks by Mass and Spectrum](./evolution) for simulators, debug panels, and post-reload reads.
- [Registering Megastructures and Handlers](./megastructures) to set build prerequisites, tracks, materials, and runtime behavior for new megastructures.

For celestial crafting and search material JSON, see [Celestial & Temple Recipes](../packs/celestial/). For resource paths of stellar tracks, events, and coverage matrices, see [Stellar Evolution Data](../packs/stars/).
