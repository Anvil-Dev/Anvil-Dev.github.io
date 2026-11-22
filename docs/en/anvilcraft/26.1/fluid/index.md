# Pipes & Fluids

Containers expose stock via NeoForge's `ResourceHandler<FluidResource>`, and the pipe network scans connected faces before deciding whether fluid can flow from source to target. When debugging "not flowing", confirm the connected face exposes the capability first, then check effective height, pump state, and valves.

- [Identifying Containers and Connected Faces](endpoints) Distinguish block endpoints, entity endpoints, and multi-face access.
- [Flow Rate, Head, and Exact Push](transfer) Choose transfer APIs for external fluid-supplying devices.
- [Infinite Sources and Special Containers](handlers) Distinguish infinite supplies, infinite gas pressure, and fluid-only receivers.
- [Integrating Fluid Transactions for Add-on Machines](transactions) Complete cross-container batch transfers in a single commit.
