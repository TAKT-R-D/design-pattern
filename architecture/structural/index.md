# 🧩 Structural Styles (Internal Application Structure)

Within software architecture, **Structural Styles** deal with:
"How to divide the **inside** of a single application (1 process / 1 service), and how classes/modules/layers/components **depend on each other**."

- Examples: Layered Architecture, MVC, Microkernel, Pipe & Filter, etc.
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

### A. Non-structured / Early

- Big Ball of Mud (Anti-pattern)
- Transaction Script, etc.

### B. Data / Record Centric

- Active Record
- Table Module
- Anemic Domain Model, etc.

### C. Layered / Domain Model

- Classic Layered (3-tier / n-tier)
- Domain Model Layered
- Dependence-rule-based Layered Family
  - Styles that strongly emphasize dependency direction and domain-centric design.

### D. UI Interaction / Presentation

- MVC / MVP / MVVM / MVU, etc.

These UI patterns deal with the structure of the presentation layer (screen related) and exist on a different layer from system-wide internal structural styles like Classic Layered or Hexagonal. Therefore, they can be used in combination, for example, "Backend is Hexagonal, UI is MVVM".

### E. Flow / Pipeline

- Pipe & Filter
- Batch Pipeline
- Streaming Pipeline, etc.

### F. Microkernel / Plugin

- Microkernel Architecture
- Plugin / Extension Architecture, etc.

### G. Reactive / Actor

- Actor Model based
- Event Loop / Reactor
- Reactive Streams / FRP, etc.

Each family page organizes the philosophy and history common to that family, and then delves into individual style pages (e.g., MVC, Classic Layered, Microkernel...).

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

- **System Topologies (System Configuration)**
  - Whether Monolith or Microservices, some Structural Style always exists inside each service.

- **Integration Styles (Communication & Integration)**
  - Styles like Hexagonal are strongly linked to Integration Styles like REST / gRPC / Messaging via Ports/Adapters.

- **Data Architecture (Data & Analytics)**
  - Some styles, like CQRS / Event Sourcing, integrate internal structure with data architecture.

- **Cross-cutting & Socio-technical (Ops, Culture, Quality)**
  - The choice of structure directly affects the development experience and operational costs, such as testability, changeability, and ease of team division.

This chapter aims to be an entry point for **reviewing architecture from the perspective of internal application structure**, while being conscious of these relationships with "other layers".

## ✅ Relationship between DDD and Structural Styles

This site treats DDD (Domain-Driven Design) not as **"Architecture itself"**, but as a **"Perspective (Lens)" for thinking about internal application structure**.

DDD is related to multiple Structural Styles as follows:

- **Layered / Domain Model Family (Family C)**
  - DDD patterns like Entities / Value Objects / Domain Services have particularly high affinity with this family.

- **Styles emphasizing Dependency Rule**
  - Hexagonal / Onion / Clean Architecture naturally link with the DDD concept of "Domain-centric & Dependency Inversion".

- **CQRS / Event Sourcing (Data Architecture)**
  - Often used together with concepts like "State Transition" and "Aggregates", influenced by the evolution of DDD.

- **Modular Monolith / Microservices (Topologies)**
  - "Bounded Context" is very compatible with service splitting and module splitting.

Thus, DDD is involved in each family not as a technique that requires a specific style, but as:

> **"Common patterns that appear when thinking about structure centered on the domain"**

This site adopts a policy of touching upon DDD only where it naturally relates within the explanation of each style, and does not cover detailed DDD introduction.

## ✅ "Architectural Flavors" Indicated by Frameworks

Modern frameworks do not **strictly enforce** a specific architectural style.
However, React / Rails / Spring Boot / Node.js etc. each have a **"direction (flavor) where designing in a certain way feels natural"**.

Examples:

- React / SwiftUI: UI structure like MVU (Elm Architecture)
- Rails / Laravel: Data-centric centered on Active Record
- Spring Boot / NestJS / .NET: Structure easy to align with Clean / Hexagonal
- Node.js: Asynchronous / Event-driven centered on Event Loop

Understanding these "flavors" allows you to intuitively grasp **which Structural Style your framework is close to**, deepening your understanding of each style.

👉 **[Table of Major Frameworks and Architectural Flavors](./framework-architecture-flavors.md)**

## ✅ Design Patterns Supporting Structural Styles

Internal Application Structure (Structural Styles) is often **established and strengthened by specific Design Patterns**.

- **Adapter / Strategy / Command** are central to Clean / Hexagonal / Onion.
- **Observer / State / Mediator** support UI updates in MVC / MVVM / MVU.
- **Strategy / Abstract Factory / Proxy** realize the plugin mechanism in Microkernel.
- **Chain of Responsibility / Iterator / Observer** become the basic structure for Pipeline / Reactive families.

The relationship is not _1 Style = 1 Pattern_, but rather **architectural characteristics are born from the combination of multiple patterns**.

A detailed mapping table is summarized on the following page:

👉 **[Table of Structural Styles and Design Patterns](./design-pattern-support.md)**

Design pattern explanations (including anti-patterns) are based on the existing site _takt.dev/design-pattern/_, and this book adopts the same naming and vocabulary system.
