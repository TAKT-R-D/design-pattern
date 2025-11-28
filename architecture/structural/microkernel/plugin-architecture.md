# 🧩 Plugin Architecture

## ✅ Overview

**A structural style where the application provides explicit Extension Points, and enables feature addition/customization by inserting plugins there.**

## ✅ Problems Addressed

- Necessary features differ for each customer or project.
- Forking/modifying the main body every time a feature is added has high cost.
- Want to build an ecosystem (plugin market) by third parties.

Plugin Architecture supports ease of change and ecosystem construction by:

> "Main body provides core functions, and extensions are added later as plugins."

## ✅ Basic Philosophy & Rules

### ● Extension Point

- Core defines slots saying "Plugins can be inserted here".
- Expressed by interfaces, events, or configuration files.

### ● Plugin

- Implements the contract (interface) of the extension point.
- Adds / Replaces / Filters functions.
- Often enabled/disabled via configuration or marketplace.

### ● Implementation Patterns

- Classpath Scan / Reflection
- Registration by DI Container
- Declaration by Configuration File / Manifest

## ✅ Suitable Applications

- Editor / IDE (Extensions for Lint, Formatter, Language Support, etc.)
- CI/CD Tools (Add supported services with various plugins)
- CMS / EC Platforms (Themes, Add-ons)
- SaaS Platforms (Those providing Webhook / App mechanisms)

## ❌ Unsuitable Cases

- Single-purpose apps with almost no variation in features.
- Cases where security requirements are extremely strict and execution of external code is to be avoided.
- Designs where plugin boundaries are ambiguous and end up tightly coupled with the core.

## ✅ History (Genealogy / Parent Styles)

- Style that concretized [Microkernel](./microkernel-architecture.md) ideas at a more application level.
- Spread in many tools including IDEs like Eclipse / VSCode / IntelliJ.
- Applied to Web platforms (Browser extensions, SaaS app integration).

## ✅ Related Styles

- **[Microkernel Architecture](./microkernel-architecture.md)**: Almost same family in terms of separation of core and plugins.
- **[Event-Driven Architecture](../../integration/event-driven.md)**: Easy to combine as event subscription type extension points.
- **[Layered Architecture](../layered/index.md)**: Can be used as a plugin for specific layers (e.g., replacing authentication method).

## ✅ Representative Frameworks

Plugin Architecture is widely spread as a Microkernel-like structure at the application level.

- **VSCode / IntelliJ**  
  Language servers, formatters, debuggers, etc. are all added via plugins.

- **WordPress / Shopify / Joomla**  
  Themes, add-ons, and apps are added as plugins for CMS / EC feature extension.

- **CI/CD Tools (Jenkins, GitHub Actions)**  
  Processing steps like build, deploy, notification are separated as plugins.

- **External Integration of Modern SaaS (Webhook / App)**  
  Structure where external services are "inserted into extension points as apps".

## ✅ Design Patterns Supporting This Style

Plugin Architecture is more application-oriented compared to Microkernel, but the essence of patterns used is the same.

- **Strategy**  
  Central pattern to naturally express implementation replacement of plugins.

- **Abstract Factory**  
  Used to unify how plugins are loaded (configuration, metadata).

- **Proxy**  
  Adds control like logging, authorization, caching to plugin calls.

- **Mediator**  
  Aggregates coordination between plugins or Plugin ⇔ Core in one place.

- **Decorator**  
  Often used to wrap plugin functions and extend them.

## ✅ Summary

Plugin Architecture is a style that:

- Addresses diverse user needs
- Enables ecosystem construction by third parties

By **providing "Extension Points" in the application to allow features to be added or customized later**.

It is widely adopted as an application-level implementation of Microkernel Architecture, commonly seen in IDEs, CMS, and SaaS platforms.  
However, since designing extension points and managing security can become complex, it is important to balance the need for extensibility with the implementation costs.

