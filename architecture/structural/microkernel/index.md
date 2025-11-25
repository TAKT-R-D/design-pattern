# 🧩 F. Microkernel / Plugin Structural Styles

## ✅ Overview

This family deals with styles that split the system into a **minimal core (Microkernel) and a group of extensible plugins.**

- Core provides only minimal functions.
- Plugins provide individual functions, extensions, and variations.
- Structure often seen in software where extensibility is important, such as IDEs, OSs, and middleware.

Representative Styles:

- Microkernel Architecture
- Plugin Architecture

## ✅ Why This Family Emerged (History & Background)

- Software that is extended over a long period, such as OSs, compilers, and IDEs, increased.
- Cost of change explodes if the boundary between core functions and extension functions is not clear.
- Need to enable/disable only some functions.
- Want to open room for extension to third parties (Plugin Ecosystem).

Microkernel / Plugin styles emerged from the idea:

> "Design by separating 'hard-to-change core' and 'easy-to-change extensions'."

## ✅ Problems Addressed

- Large-scale changes to existing code are required every time a feature is added.
- Complexity increases as customizations for specific customers or optional features increase.
- Want to allow third-party extensions but don't want the core to be broken.

By separating core and plugins, the goal is a structure where:

- Additional features are implemented as plugins.
- Core is stabilized, maintaining only interfaces.

## ✅ Styles Belonging to This Family

- **Microkernel Architecture**: Basic structure of "Minimal Core + Plugins" used in OSs and IDEs.
- **Plugin Architecture**: Style where the application provides extension points and adds features with external plugins.

## ✅ Relationship with Other Families

- Can be combined with **Layered / Domain Model** to replace domain services as plugins.
- Form of inserting processing stages or handlers as plugins within **Flow / Reactive** families is also common.
- Related to **Cross-cutting (Extensibility using Plugins, Third-party development)**.

## ✅ When to Reference

- Platforms that are operated for a long time and continuous feature addition is expected.
- Products where feature sets differ for each customer (Feature Flags + Plugins).
- When you want to design extension points for third parties.

When making a "Platform" rather than a "Product",
the idea of this family becomes particularly important.
