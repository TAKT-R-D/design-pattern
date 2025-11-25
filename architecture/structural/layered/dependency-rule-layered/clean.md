# 🧩 Clean Architecture

## ✅ Overview

A style that reorganized concepts from Hexagonal / Onion and summarized them as **clear layer structures and dependency rules**:

- Entities (Enterprise Business Rules)
- Use Cases (Application Business Rules)
- Interface Adapters
- Frameworks & Drivers

## ✅ Problems Addressed

- Concepts like Hexagonal / Onion / Layered / DDD were proliferating, making differences hard to understand.
- Wanted to organize the common idea of "Dependencies point inward" and "Domain centric".
- Wanted more guidance on specifically what to write in which layer.

Clean Architecture can be understood as:

> A unified diagram reorganizing existing styles by "Dependency Rules" and "Layers".

## ✅ Basic Philosophy & Rules

### ● Layer Structure

- **Entities**
  - Business rules valid across systems.
  - Close to Entities / Value Objects in DDD.

- **Use Cases**
  - Application-specific use cases.
  - Input/output control, transaction boundaries, etc.

- **Interface Adapters**
  - Presenter / Controller / Repository implementations, etc.
  - Convert external data formats to inner models.

- **Frameworks & Drivers**
  - Web Frameworks / DB / Messaging, etc.

### ● Dependency Rule

- Dependencies point only inward (to Entities).
- The inside does not know about the outside.
- The outside depends on the inside's interface.

### Conceptual Diagram

![The Clean Architecture diagram](./clean.jpg)

> Source: Robert C. Martin, “The Clean Architecture”, 2012.
> https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

## ✅ Suitable Applications

- Business systems with medium to high domain complexity.
- Products assuming long-term operation and multi-team development.
- Backends that do not want to be tied to frameworks.
- Development prioritizing automated tests and use-case unit tests.

## ❌ Unsuitable Cases

- Short-lived small CRUD apps.
- When the team's experience level is low and the cost of maintaining the layer structure is higher.

If layers are introduced only in form:

- Only the number of classes and folder hierarchy increases.
- Dependency rules are not actually observed.

There is a danger of this happening.

## ✅ History (Genealogy / Parent Styles)

- Proposed by Robert C. Martin (Uncle Bob).
- A style that organized and summarized flows like Hexagonal / Onion / DDD / Layered.
- Widely popularized as the book "Clean Architecture".

## ✅ Related Styles

- **Hexagonal Architecture**: Concept of Ports & Adapters.
- **Onion Architecture**: Layer structure on concentric circles.
- **DDD**: As a concrete expression method for Entities / Use Cases.

## ✅ Representative Frameworks

Clean Architecture is also a concept independent of frameworks, but in practice, it is often practiced in the following technology stacks.

- **ASP.NET Core / .NET**
  Many official/community templates like "Clean Architecture Template" exist.

- **Spring Boot (Java)**
  Configurations clearly separating Entities / Use Cases / Interface Adapters / Frameworks & Drivers are introduced.

- **NestJS (Node.js)**
  Easy to split into UseCase / Repository Interface / Adapter Implementation, making it easy to align with Clean-like structure.

## ✅ Design Patterns Supporting This Style

In Clean Architecture, multiple patterns are combined to support dependency rules and use-case centric design.

- **Adapter**
  Functions as a bridge between external I/O and internal models in the Interface Adapters layer.

- **Strategy**
  Expresses variations of business rules and use cases in a replaceable form.

- **Command**
  Objectifies a Use Case as "one operation", clarifying input/output and transaction boundaries.

- **Facade**
  Provides multiple use cases as a unified interface when viewed from the outside (UI / API).

- **Abstract Factory**
  Used to assemble appropriate implementation adapters (for production / test) at runtime.

## ✅ Summary

Clean Architecture is a style that summarizes modern architectural key ideas:

- Domain-centric design
- Thorough dependency rules
- Framework independence

Into a simple diagram and rule set.

Rather than "observing it perfectly", it is realistic to use it as a **common language for the team to share the principle of keeping dependencies inward.**
