# 🧩 Dependency-rule-based Layered

## ✅ Overview

Dependency-rule-based Layered is a group of layered styles that strongly emphasize the rule:

> **"Dependencies point only inward"**

And prioritize **protecting the domain model from external technologies and infrastructure.**

Representative Styles:

- Hexagonal Architecture (Ports & Adapters)
- Onion Architecture
- Clean Architecture

## ✅ Problems Addressed

Even with Domain Model Layered, the following problems remained in practice:

- Framework dependency code (annotations, ORM-specific types, etc.) erodes into the Domain layer.
- It is difficult to separate infrastructure dependencies in tests.
- Hard to naturally handle multiple I/Os like Web UI / Batch / CLI / Messages.

Dependency-rule-based Layered attempts to answer this by:

- **Fixing dependency direction only to inner layers**, and
- Leaving the domain as a "set of pure rules".

## ✅ Basic Philosophy & Rules

Common core concepts:

- Domain Model is at the center (Inside).
- Application Services, Interface Adapters, Frameworks & Drivers are placed on the outside.
- Dependency arrows always point inward.
- Outer layers depend on inner abstractions (interfaces).

Expressions differ between Hexagonal / Onion / Clean, but this philosophy is common.

## ✅ Styles Belonging to This Family

- **Hexagonal Architecture (Ports & Adapters)**
  - Hexagonal metaphor connecting domain and outside with ports and adapters.

- **Onion Architecture**
  - Style visualizing the domain-centric layer structure as an "onion".

- **Clean Architecture**
  - Clearly defines layers: Entities / Use Cases / Interface Adapters / Frameworks & Drivers.
  - Emphasizes dependency rules and the Use Case layer.

## ✅ Relationship with Other Families

- **Evolved form** of Classic / Domain Model Layered.
- In connection with Integration Styles (REST / gRPC / EDA), concepts like Ports & Adapters are particularly important.
- deeply involved with testing strategies (Unit / Integration).

## ✅ When to Reference

- Products where the domain is complex and long-term operation is assumed.
- Want to reduce framework dependency and leave freedom for future technology choices.
- Backends handling multiple I/O channels like UI / API / Batch / Messaging.
- Development prioritizing automated tests and wanting to verify the domain independently from the outside.

Under this directory, Hexagonal / Onion / Clean are taken up individually, organizing their characteristics and differences.
