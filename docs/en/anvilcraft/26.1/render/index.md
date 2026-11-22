# Rendering Block Models

To draw a moving part on a block entity, register the part as a standalone block model. Select the model when extracting the render state. At submission time, use the prepared state together with the current pose matrix.

- [Registering a Standalone Model and Choosing a Render Layer](prepare) prepares a reusable model state for a glowing indicator.
- [Submitting the Model, Lighting, and Pose](submit) positions the indicator with the current frame's collector.
