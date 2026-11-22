# Pipes & Fluids

Containers expose fluid storage via NeoForge's `IFluidHandler`, and the pipe network scans connected faces to determine whether fluid can flow from source to target. When debugging "no flow", first verify that the connected face can obtain the capability, then check equivalent height, pump state, and valves.

- [Identifying Containers and Connected Faces](endpoints) distinguishes block endpoints, entity endpoints, and multi-face access.
- [Flow Rate, Head, and Integral Pushing](transfer) selects transfer interfaces for external fluid-supplying devices.
- [Infinite Sources and Special Containers](handlers) distinguishes infinite supply, infinite pressure, and receive-only fluid devices.
