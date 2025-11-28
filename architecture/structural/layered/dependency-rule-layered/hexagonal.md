# 🧩 Hexagonal Architecture (Ports & Adapters)

## ✅ Overview

A structural style that places **Domain and Use Cases** at the center of the application and surrounds them with **Ports (Abstractions) and Adapters (Implementations)**.
The "Hexagon" is just a metaphor; the essence lies in **dependency direction and boundary design**.

## ✅ Problems Addressed

Hexagonal is primarily an answer to challenges such as:

- Domain logic getting dragged by Web frameworks or ORMs.
- Need to launch external systems every time for testing.
- Wanting to use the same domain logic from multiple I/Os (REST / CLI / Batch / Message).

It attempts to separate the domain from technical details with the idea:

> "Place the domain at the center and make everything else replaceable 'adapters'."

## ✅ Basic Philosophy & Rules

- **Domain / Application Core** knows nothing about the outside world.
- The Core only holds **Ports (Interfaces)**.
  - e.g., `UserRepository`, `NotificationSender`
- **Adapters (Implementations)** are placed on the outside.
  - DB Adapters (RDB / NoSQL / InMemory)
  - UI Adapters (Web, CLI, Batch)
  - External Service Adapters (REST Clients, etc.)
- Dependency direction always points "Adapter → Port → Core".

As a result:

- The Domain does not depend on infrastructure but only on abstractions.
- In testing, the core can be verified just by swapping adapters.

### Conceptual Diagram

![Hexagonal Architecture diagram](/img/architecture/hexagonal.png)

> Source: Alistair Cockburn, “Hexagonal Architecture”, 2005–2013.
> https://alistair.cockburn.us/hexagonal-architecture

## ✅ Suitable Applications

- Backends with multiple I/O channels.
  - REST API + Batch + Admin CLI + Message Consumer
- Systems where external services/DBs are highly likely to change in the future.
- Projects prioritizing Test-First / Automated Testing.

## ❌ Unsuitable Cases

- Very small CRUD apps (structural cost becomes overhead).
- Systems where future expansion or increase in I/O is hardly expected.

If applied excessively:

- Interfaces and adapters increase too much, making visibility poor.
- Feels heavy for small teams / short-term projects.

## ✅ History (Genealogy / Parent Styles)

- Proposed by Alistair Cockburn.
- Positioned as an evolution from [Layered / Domain Model](../index.md) families.
- Also known as Ports & Adapters.
- Strongly influenced subsequent styles like [Onion](./onion.md) / [Clean](./clean.md).

## ✅ Related Styles

- **[Onion Architecture](./onion.md)**: Illustrates the same philosophy as "layers" instead of a hexagon.
- **[Clean Architecture](./clean.md)**: An organized version clarifying the Use Case layer.
- **DDD (Tactical Patterns)**: Used for expressing the domain model.

## ✅ Representative Frameworks

Hexagonal Architecture is a concept (Ports & Adapters) and not specific to any framework, but there are many practice examples in environments like:

- **Spring Boot (Java)**  
  Easy to map Controller / Service / Repository to Port / Adapter, with very many Hexagonal samples.

- **ASP.NET Core / .NET**  
  Abundant templates and reference implementations themed on Clean / Hexagonal.

- **NestJS (Node.js)**  
  Configuration of Module / Provider / Controller makes it easy to express Ports & Adapters, with many Hexagonal practice examples in the Node.js community.

## ✅ Design Patterns Supporting This Style

The "Ports and Adapters" structure of Hexagonal is realized by a combination of multiple design patterns.

- **Adapter**  
  The central pattern that adapts external I/O and data formats to the abstract interface defined by the port.

- **Strategy**  
  Used when switching port implementations (DB types, swapping external services, etc.).

- **Command**  
  Expresses Use Cases (Application Services) as operation objects, making testing and configuration management easier.

- **Proxy**  
  Adds controls like caching, retries, and circuit breakers to access to external services.

- **Abstract Factory**  
  Used to assemble appropriate adapter implementations according to the execution environment (Production / Test) or configuration.

## ✅ Summary

Hexagonal Architecture is a powerful choice for projects that prioritize:

- Domain-centric design
- Control of dependency direction
- Replaceability of infrastructure

It is important not to be trapped by the "hexagonal look" but to design from the perspective of:  
**"Where to draw the boundary between ports and adapters?"**
