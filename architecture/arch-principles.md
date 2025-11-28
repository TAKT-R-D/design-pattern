# 🌟 Architecture Principles

Software architecture is not a collection of individual styles or techniques but is supported by foundational "Principles." This page systematically organizes the major architectural principles that work commonly across styles.

## ✅ Dependency Direction

One of the most important principles in architecture is to intentionally design **which direction dependencies point**.

- Avoid dependencies from Higher Layers (Policy) → Lower Layers (Detail).
- Concrete implementations should follow abstract interfaces (DIP: Dependency Inversion Principle).
- Styles like [Hexagonal](./structural/layered/dependency-rule-layered/hexagonal.md), [Onion](./structural/layered/dependency-rule-layered/onion.md), and [Clean Architecture](./structural/layered/dependency-rule-layered/clean.md) place this principle at their core.

Dependency direction directly affects changeability, testability, and modularity.

## ✅ Coupling & Cohesion

Key elements of sound design include:

- **Low Coupling**: Minimizing dependencies on other components.
- **High Cohesion**: A single module has consistent responsibilities.

Coupling and cohesion relate to all structural styles and also influence topologies ([Microservices](./topologies/microservices.md) / [Modular Monolith](./topologies/modular-monolith.md)).

## ✅ Boundaries & Context

In architecture, defining where to draw **Boundaries** is one of the most critical decisions.

- Bounded Context
- Boundary definition via Interfaces / Ports
- Alignment with team boundaries (Conway's Law)

Boundary design determines the scalability and changeability of the system.

## ✅ Sync vs Async

The difference in communication methods affects the entire structure.

- **Synchronous**: [REST/gRPC](./integration/rest-grpc-graphql.md), Request-Response type.
- **Asynchronous**: [Event-driven](./integration/event-driven.md), Stream processing, Messaging.

Appropriate methods must be selected based on availability, latency, and consistency requirements.

## ✅ Consistency Models

Key points in data-centric design:

- **Strong Consistency**
- **Eventual Consistency**
- **Trade-offs based on scale (CAP / PACELC)**

[CQRS](./data/cqrs.md), [Event Sourcing](./data/event-sourcing.md), and [Microservices](./topologies/microservices.md) presuppose an understanding of consistency models.

## ✅ Essential Complexity vs Accidental Complexity

There are two types of system complexity:

- **Essential Complexity**: The complexity inherent in the domain itself.
- **Accidental Complexity**: Unnecessary complexity added by technology choices or design.

Excellent architecture reduces accidental complexity and realizes a structure that allows focusing on essential value.

## ✅ Center of Gravity in Design (Operational / Domain / Data)

Architecture changes depending on which of the following centers of gravity is prioritized:

- **Operational** (Availability, Resilience, Monitoring)
- **Domain** (Domain Model Expression)
- **Data** (Data-centric, Analytics Workloads)

Where you place the center of gravity naturally leads to style selection and topology.

## ✅ Summary

Architecture principles are concepts higher than styles or frameworks, and are **universal rules that apply consistently regardless of which style is adopted.**

By understanding these principles, you acquire the **foundation to assemble design intent according to purpose**, rather than just "choosing" individual styles.
