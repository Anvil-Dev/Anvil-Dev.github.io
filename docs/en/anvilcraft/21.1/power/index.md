# Power Grid & Wattage

Power supply is settled per grid. A machine only needs to report its demand for the current power tick; the grid aggregates generation, consumption, and storage, then notifies components to tick. Each dimension maintains its own grids: the server handles machine logic, while the client receives snapshots for meters and wire rendering.

- [Connecting Block Entities to the Power Grid](components) tracks demand and overload state from machine load to unload.
- [Power Storage and Settlement](storage) implements capacity-limited charging and discharging, distinguishing rejected remainder from actual output.
- [Finding Grids and Dynamic Loads](dynamic) registers power consumption when player equipment is active and releases it when removed.
- [Client Readouts](display) reads stored power and wattage for a component from synced snapshots.
