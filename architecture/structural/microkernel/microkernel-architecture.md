# 🧩 Microkernel Architecture

## ✅ Overview of this Style

**An architecture where a minimal core (Microkernel) serves as the foundation, and plugins or extensions are built on top of it.**
It is often used in systems that prioritize extensibility, such as OSs, IDEs, and language processing systems.

## ✅ Problems Solved

- Core functions and extensions are mixed, resulting in high change costs.
- Adding custom features or third-party extensions makes the core increasingly complex.
- Failures in some features directly affect the stability of the entire system.

Microkernel attempts to balance structural stability and extensibility by:

> Separating the "stable core that rarely changes" from
> "plugins that are easily added or changed".

## ✅ Basic Philosophy and Rules

### ● Microkernel (Core)

- Provides only minimal functionality.
  - Plugin lifecycle management.
  - Definition of Extension Points.
  - Basic resource management and messaging.
- Assumes that it is not changed frequently.

### ● Plugin

- Implements interfaces defined by the core.
- Provides specific features and variations.
- Often capable of dynamic loading/unloading.

### ● Communication and Coordination

- Plugins communicate with each other primarily via the core.
- Controls coupling by avoiding direct dependencies.

## ✅ Suitable Applications

- OS (File system drivers, device drivers, etc.)
- IDE / Editors (Plugins for language support, linting, refactoring features, etc.)
- Language processing systems (Compiler backends, optimization passes)
- Rule engines and workflow engines

Characteristics:

- Balancing core stability and extensibility.
- Independent development and distribution of plugins.

## ❌ Unsuitable Cases

- Frequency of feature additions is low, and the cost of establishing extension points is not justified.
- Simple CRUD applications.
- Domains where the domain itself changes frequently and significantly (core design cannot keep up).

Over-engineering Microkernel can lead to:

- Initial design costs being too high.
- Proliferation of unused extension points.

## ✅ History (Genealogy / Parent Styles)

- Emerged in the OS world as an approach against monolithic kernels.
- Adopted in enterprise applications as pluggable platforms.
- Sometimes treated synonymously with Plugin Architecture depending on the context.

## ✅ Related Styles

- **[Plugin Architecture](./plugin-architecture.md)**: A more application-oriented plugin structure.
- **[Layered Architecture](../layered/index.md)**: The core may be implemented as part of the infrastructure layer.
- **[Microservices](../../topologies/microservices.md)**: A different lineage for functional division, but shares the goal of extensibility.

## ✅ Representative Frameworks

Microkernel Architecture is adopted not only in OSs but also in many "products centered on extensibility".

- **VSCode / IntelliJ / Eclipse (IDE)**  
  Language support, linting, search extensions, etc., are all provided as plugins.  
  Representative examples of Microkernel + Plugin Architecture.

- **Linux / BSD (OS Kernel)**  
  Device drivers and file systems can be loaded as modules.

- **Browser (Chrome / Firefox) Extensions**  
  The core (rendering, security) is stable, and extensions are added in a separate layer.

- **Workflow Engines (Camunda, JBPM, etc.)**  
  Pluggable processing steps and components can be added on top of the execution core.

## ✅ Design Patterns Supporting this Style

Microkernel is a style clearly established by a combination of multiple patterns.

- **Strategy**  
  Treats plugin behavior as "replaceable implementations".

- **Abstract Factory**  
  Unifies plugin creation methods (loading methods, configuration) to facilitate implementation switching.

- **Proxy**  
  Used when adding control over plugin access (auditing, caching, metrics).

- **Mediator**  
  Aggregates communication between plugins into the core to avoid direct dependencies between plugins.

- **Facade**  
  Serves as the external API of the core system, unifying usage from plugins and external systems.

## ✅ Summary

Microkernel Architecture is a **powerful style for structurally separating "unchanging parts" from "changing parts"** in:

- Long-running platforms.
- Systems that assume third-party extensions and variations.

However, forcing it onto small-scale apps tends to result in over-engineering, so it is important to assess the scope of application and lifespan before adoption.
