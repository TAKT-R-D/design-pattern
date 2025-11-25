# 🧩 Onion Architecture

## ✅ Overview

A style that places the Domain Model at the "center of the onion" and places Application Services, Infrastructure, and UI in the outer layers.
It expresses the same philosophy as Hexagonal as **"concentric layers"**.

## ✅ Problems Addressed

Onion Architecture can be said to be a style aiming to:

- Explain the concepts of dependency direction and domain-centric design in an easy-to-understand way,
- Even for those who find the "Hexagon and Ports" diagram of Hexagonal unintuitive.

The specific challenges it wanted to solve are common with Hexagonal:

- Domain becomes dependent on frameworks.
- Tests get dragged by infrastructure.
- Cannot naturally handle multiple UIs / I/Os.

## ✅ Basic Philosophy & Rules

As layers of an onion, generally the following structure is taken:

- Innermost: Domain Model (Entities, Value Objects, Domain Services)
- Outer: Application Services (Coordination of Use Cases)
- Further Outer: Infrastructure (DB / External API / Messaging)
- Outermost: UI / Frameworks

Rules are similar to Hexagonal:

- Dependencies point only to inner layers.
- The Domain does not know technical details of the outside.
- The Outside depends on inner abstractions (interfaces).

It is characterized by visually conveying the image that "the closer to the center, the purer" and "the outer, the more technical details".

### Conceptual Diagram

![Onion Architecture diagram](./onion.webp)

> Source: Jeffrey Palermo, “The Onion Architecture (Part 1)”, 2008.
> https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/

## ✅ Suitable Applications

- Medium to large systems adopting DDD.
- Products wanting to operate for a long term with the domain model as the "core".
- When you want to share layer responsibilities and dependency rules within the team.

## ❌ Unsuitable Cases

- Very small CRUD apps, same as Hexagonal.
- When the team is not yet accustomed to layer concepts or DDD.

If you increase layers just by imitating the diagram, there is a risk that:

- The structure becomes complex while the reality remains unchanged.

## ✅ History (Genealogy / Parent Styles)

- Architectural style introduced by Jeffrey Palermo.
- Spread in the context of the same period to later period as Hexagonal, particularly famous in the .NET community.
- Strongly influenced the illustration of Clean Architecture.

## ✅ Related Styles

- **Hexagonal Architecture**: Explains the same philosophy as Ports & Adapters.
- **Clean Architecture**: Subdivides layers more and emphasizes the Use Case layer.
- **Domain Model Layered**: Layered style serving as a precursor to Onion.

## ✅ Representative Frameworks

Onion Architecture is also framework-independent like Hexagonal, but is adopted particularly often in .NET / Java systems.

- **ASP.NET Core / .NET**
  There are many samples of concentric structures centered on the domain, making it a representative practice example of Onion.

- **Spring Boot (Java)**
  Project configurations organizing Domain / Application / Infrastructure as "layers" and leaning towards Onion-like structure are often seen.

## ✅ Design Patterns Supporting This Style

Onion Architecture expresses the same philosophy as Hexagonal with "layers", and the patterns used are close.

- **Strategy**
  Expresses replacement of domain services and policies within the domain-centric structure.

- **Command**
  Expresses processing of Application Services (Use Cases) as operation objects, making them easier to test.

- **Adapter**
  Functions as glue for outer layers (Infrastructure / UI) to follow inner abstract interfaces.

- **Proxy**
  Wraps access to external services and technical concerns (cache, retry) in outer layers.

- **Repository** (as a term)
  Used as a conceptual pattern to clarify the boundary between domain model and persistence.

## ✅ Summary

Onion Architecture is a style that:

- Centers on the Domain Model, and
- Visually expresses dependency direction and separation of responsibilities.

While philosophically almost the same as Hexagonal,
For **"teams comfortable with layer structure diagrams"**, Onion is often easier to introduce.
