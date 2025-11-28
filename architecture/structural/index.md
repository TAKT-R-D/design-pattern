---
sidebar_label: Introduction
pagination_label: Structural Styles Overview
---

# Structural Styles (Internal Application Structure)

Within software architecture, **Structural Styles** deal with:
"How to divide the **inside** of a single application (1 process / 1 service), and how classes/modules/layers/components **depend on each other**."

- Examples: [Layered Architecture](./layered/index.md), [MVC](./ui/mvc.md), [Microkernel](./microkernel/index.md), [Pipe & Filter](./flow/pipe-and-filter.md), etc.
- Scope: **"Internal structure" of a single service** (separate from whether it is a microservice or not).

In this chapter, representative Structural Styles are organized by "Family", explaining them from perspectives such as:

- History and background of their origin
- Problems they attempt to solve
- Applications they are suitable for

## ✅ Problems Addressed by This Category

Structural Styles primarily address problems such as:

- Business logic getting buried in UI or DB code, making changes difficult.
- Ambiguous responsibilities of classes and modules leading to spaghetti dependencies.
- Testing units being too large, making it hard to write automated tests.
- Breaking existing code every time a new feature is added.

In other words, the various schools of Structural Styles are answers to the question:

> **"How should structure and dependencies be organized within a single application?"**

## ✅ Families of Structural Styles

This site organizes representative styles into the following "Families":

### [A. Non-structured / Early](./early/index.md)

- [Big Ball of Mud (Anti-pattern)](./early/big-ball-of-mud.md)
- [Transaction Script](./early/transaction-script.md), etc.

### [B. Data / Record Centric](./data-centric/index.md)

- [Active Record](./data-centric/active-record.md)
- [Table Module](./data-centric/table-module.md)
- [Anemic Domain Model](./data-centric/anemic-domain-model.md), etc.

### [C. Layered / Domain Model](./layered/index.md)

- [Classic Layered (3-tier / n-tier)](./layered/classic-layered.md)
- [Domain Model Layered](./layered/domain-model-layered.md)
- [Dependence-rule-based Layered Family](./layered/dependency-rule-layered/index.md)
  - Styles that strongly emphasize dependency direction and domain-centric design.

### [D. UI Interaction / Presentation](./ui/index.md)

- [MVC](./ui/mvc.md) / [MVP](./ui/mvp.md) / [MVVM](./ui/mvvm.md) / [MVU](./ui/mvu.md), etc.

These UI patterns deal with the structure of the presentation layer (screen related) and exist on a different layer from system-wide internal structural styles like [Classic Layered](./layered/classic-layered.md) or [Hexagonal](./layered/dependency-rule-layered/hexagonal.md). Therefore, they can be used in combination, for example, "Backend is [Hexagonal](./layered/dependency-rule-layered/hexagonal.md), UI is [MVVM](./ui/mvvm.md)".

### [E. Flow / Pipeline](./flow/index.md)

- [Pipe & Filter](./flow/pipe-and-filter.md)
- [Batch Pipeline](./flow/batch-pipeline.md)
- [Streaming Pipeline](./flow/streaming-pipeline.md), etc.

### [F. Microkernel / Plugin](./microkernel/index.md)

- [Microkernel Architecture](./microkernel/microkernel-architecture.md)
- [Plugin / Extension Architecture](./microkernel/plugin-architecture.md), etc.

### [G. Reactive / Actor](./reactive/index.md)

- [Actor Model based](./reactive/actor-model.md)
- [Event Loop / Reactor](./reactive/event-loop.md)
- [Reactive Streams / FRP](./reactive/reactive-streams.md), etc.

Each family page organizes the philosophy and history common to that family, and then delves into individual style pages (e.g., [MVC](./ui/mvc.md), [Classic Layered](./layered/classic-layered.md), [Microkernel](./microkernel/microkernel-architecture.md)...).

## ✅ How to Read This Category

It is assumed that you read this category in the following order:

1. **Glance through the Family-level pages**
   Grasp "what families exist" and "which ones seem relevant to your app".

2. **Read the detailed pages of styles that interest you**

   - Background/History (Where did it come from?)
   - Problems it attempts to solve
   - Basic Rules (Dependency direction, responsibility division, etc.)
   - Suitable applications and unsuitable cases

3. **Return to "How to Choose" in your context**
   Use it as material to judge whether to use a style as is, combine it, or dare not to adopt it.

## ✅ Relationship with Other Layers

Structural Styles are closely related to other architectural layers.

- **[System Topologies (System Configuration)](../topologies/index.md)**

  - Whether [Monolith](../topologies/monolith.md) or [Microservices](../topologies/microservices.md), some Structural Style always exists inside each service.

- **[Integration Styles (Communication & Integration)](../integration/index.md)**

  - Styles like Hexagonal are strongly linked to Integration Styles like [REST / gRPC](../integration/rest-grpc-graphql.md) / Messaging via Ports/Adapters.

- **[Data Architecture (Data & Analytics)](../data/index.md)**

  - Some styles, like [CQRS](../data/cqrs.md) / [Event Sourcing](../data/event-sourcing.md), integrate internal structure with data architecture.

- **[Cross-cutting & Socio-technical (Ops, Culture, Quality)](../cross-cutting/index.md)**
  - The choice of structure directly affects the development experience and operational costs, such as testability, changeability, and ease of team division.

This chapter aims to be an entry point for **reviewing architecture from the perspective of internal application structure**, while being conscious of these relationships with "other layers".

## ✅ Relationship between DDD and Structural Styles

This site treats DDD (Domain-Driven Design) not as **"Architecture itself"**, but as a **"Perspective (Lens)" for thinking about internal application structure**.

DDD is related to multiple Structural Styles as follows:

- **[Layered / Domain Model Family (Family C)](./layered/index.md)**

  - DDD patterns like Entities / Value Objects / Domain Services have particularly high affinity with this family.

- **Styles emphasizing Dependency Rule**

  - [Hexagonal](./layered/dependency-rule-layered/hexagonal.md) / [Onion](./layered/dependency-rule-layered/onion.md) / [Clean Architecture](./layered/dependency-rule-layered/clean.md) naturally link with the DDD concept of "Domain-centric & Dependency Inversion".

- **[CQRS](../data/cqrs.md) / [Event Sourcing](../data/event-sourcing.md) ([Data Architecture](../data/index.md))**

  - Often used together with concepts like "State Transition" and "Aggregates", influenced by the evolution of DDD.

- **[Modular Monolith](../topologies/modular-monolith.md) / [Microservices](../topologies/microservices.md) ([Topologies](../topologies/index.md))**
  - "Bounded Context" is very compatible with service splitting and module splitting.

Thus, DDD is involved in each family not as a technique that requires a specific style, but as:

> **"Common patterns that appear when thinking about structure centered on the domain"**

This site adopts a policy of touching upon DDD only where it naturally relates within the explanation of each style, and does not cover detailed DDD introduction.

## ✅ "Architectural Flavors" Indicated by Frameworks

Modern frameworks do not **strictly enforce** a specific architectural style.
However, React / Rails / Spring Boot / Node.js etc. each have a **"direction (flavor) where designing in a certain way feels natural"**.

Examples:

- React / SwiftUI: UI structure like [MVU (Elm Architecture)](./ui/mvu.md)
- Rails / Laravel: Data-centric centered on [Active Record](./data-centric/active-record.md)
- Spring Boot / NestJS / .NET: Structure easy to align with [Clean](./layered/dependency-rule-layered/clean.md) / [Hexagonal](./layered/dependency-rule-layered/hexagonal.md)
- Node.js: Asynchronous / Event-driven centered on [Event Loop](./reactive/event-loop.md)

Understanding these "flavors" allows you to intuitively grasp **which Structural Style your framework is close to**, deepening your understanding of each style.

👉 **[Table of Major Frameworks and Architectural Flavors](./framework-architecture-flavors.md)**

## ✅ Design Patterns Supporting Structural Styles

Internal Application Structure (Structural Styles) is often **established and strengthened by specific Design Patterns**.

- **Adapter / Strategy / Command** are central to [Clean](./layered/dependency-rule-layered/clean.md) / [Hexagonal](./layered/dependency-rule-layered/hexagonal.md) / [Onion](./layered/dependency-rule-layered/onion.md).
- **Observer / State / Mediator** support UI updates in [MVC](./ui/mvc.md) / [MVVM](./ui/mvvm.md) / [MVU](./ui/mvu.md).
- **Strategy / Abstract Factory / Proxy** realize the plugin mechanism in [Microkernel](./microkernel/index.md).
- **Chain of Responsibility / Iterator / Observer** become the basic structure for [Pipeline](./flow/index.md) / [Reactive](./reactive/index.md) families.

The relationship is not _1 Style = 1 Pattern_, but rather **architectural characteristics are born from the combination of multiple patterns**.

A detailed mapping table is summarized on the following page:

👉 **[Table of Structural Styles and Design Patterns](./design-pattern-support.md)**

Design pattern explanations (including anti-patterns) are based on the [Tutorial](/docs/intro).
