---
next:
   text: Environment Setup
   link: /en/posts/docs/addon/01_environment
---

# Addon Development

Welcome to the AnvilCraft Addon Development documentation! This section will guide you through creating your own
AnvilCraft addon mod.

## What is an Addon Mod?

An addon mod is an extension built on top of the AnvilCraft core mod, allowing developers and creators to:

* Add new items and blocks
* Create custom recipes
* Extend existing AnvilCraft mechanics
* Integrate with other mods
* Contribute new content to the AnvilCraft ecosystem

## Why Create an Addon Mod?

1. **Extend Functionality**: Add new content without modifying the core mod
2. **Maintain Compatibility**: Addon mods work well with the main AnvilCraft mod and other addons
3. **Community Contribution**: Share your creativity and ideas with the AnvilCraft community
4. **Learning Opportunity**: Gain deeper understanding of Minecraft mod development through practice

## Prerequisites

Before you begin development, you need to:

1. Be familiar with the Java programming language
2. Understand vanilla Minecraft mechanics
3. Grasp basic mod development concepts
4. Have your development environment ready (JDK 21, IDE, etc.)

## Development Overview

### Basic Development

1. [Environment Setup](01_environment.md) - Configure your development environment
2. [Creating Your First Item](02_create_item.md) - Learn basic item registration
3. [Creating Your First Block](03_create_block.md) - Learn basic block registration

### Advanced Development

4. [Entity Registration](04_create_entity.md) - Learn how to create custom entities
5. [Block Entity Development](05_create_block_entity.md) - Create blocks with logic
6. [Data Generators](06_data_generation.md) - Automatically generate game resources
7. [Configuration System](07_config.md) - Create mod configuration files
8. [Recipe System Integration](08_recipe_integration.md) - Integrate with AnvilCraft recipe system
9. [Event System](09_event_system.md) - Use the NeoForge event system
10. [Resources and Localization](10_resources.md) - Manage textures, models, and language files
11. [Networking](11_networking.md) - Implement client-server communication

## Tech Stack

AnvilCraft addon mod development primarily uses the following technologies:

* **Java 21** - Programming language
* **Gradle** - Build tool
* **Registrum** - Content registration system (Registration API provided by AnvilLib, improved from Registrate)
* **NeoForge** - Mod loader API
* **Lombok** - Simplifies Java code writing

## Best Practices

* Follow AnvilCraft's design language and style
* Maintain consistency with vanilla Minecraft
* Make full use of the APIs provided by AnvilCraft
* Write clear documentation and comments
* Perform thorough testing

Ready to start your addon development journey? Let's begin with [Environment Setup](01_environment.md)!
