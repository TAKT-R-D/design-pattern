---
sidebar_label: ✨️ Framework Architecutre Flavors
---

# ✨️ Deciphering the "Architectural Flavor" held by major frameworks

## ✅ Introduction: Frameworks are not Architecture

Many frameworks do not **force a specific architectural style**.
However, each has a **tendency (flavor) where "designing this way feels natural"**.

Examples:

- Rails has a strong [Active Record](./data-centric/active-record.md) philosophy.
- React / SwiftUI are close to [MVU (Elm Architecture)](./ui/mvu.md).
- Spring Boot / NestJS are easy to align with [Clean](./layered/dependency-rule-layered/clean.md) / [Hexagonal](./layered/dependency-rule-layered/hexagonal.md).
- Node.js induces a structure centered on [Event Loop](./reactive/event-loop.md) (Async I/O).

In other words, we decipher with the stance:

> **It is important not to think "The framework decides the architecture",  
> but to "Understand the direction the framework naturally induces".**

## ✅ Architectural Flavors of [UI](./ui/index.md) Frameworks

### React

- **Classification: [MVU (Model–View–Update) family](./ui/mvu.md) / Under Elm Architecture influence**
- Unidirectional data flow, immutability, declarative UI.
- Combination with Redux further strengthens the [MVU](./ui/mvu.md) color.  
  **→ Can be treated as a representative example of UI Structural Style "[MVU](./ui/mvu.md)".**

### Next.js (App Router)

- **Classification: Closer to "[Topologies](../topologies/index.md) / [Integration](../integration/index.md)" than UI structural style**
- Rendering strategies like SSR / SSG / ISR / Edge Rendering **themselves determine the architecture**.
- **Structure where UI and API (Backend) coexist** via API Routes / Route Handlers / Server Actions.
- File-based routing naturally enforces folder structure by feature.  
  → Tends to become a project structure close to Vertical Slice / Feature-based.
- While containing React (MVU), Next.js itself is **an entity that defines "Overall App Configuration (Topology)" rather than "Structural Architecture".**

**→ As an architectural style, it belongs to the world of "Topologies (SSR/Edge) + Integration (UI + API Integration)" rather than MVU.**

### Vue.js (3.x)

- Options API: Close to [MVVM](./ui/mvvm.md).
- Composition API: Increased functional elements leaning towards React.  
  **→ Overall, a hybrid of [MVVM](./ui/mvvm.md) and [MVU](./ui/mvu.md).**

### Angular

- **Clear [MVVM](./ui/mvvm.md) / [Layered structure](./layered/index.md)**
- Component (VM), Template (View), Service (Logic).  
  **→ Easy to treat as a typical example of UI structural style.**

### SwiftUI / Jetpack Compose

- **Completely [MVU](./ui/mvu.md) family**
- Single source of truth, re-computation, declarative UI.  
  **→ The purest implementation of recent Declarative UI.**

## ✅ Architectural Flavors of [Data-centric](./data-centric/index.md) Frameworks

### Ruby on Rails

- **Typical example centered on [Active Record](./data-centric/active-record.md)**
- MVC, but practically tends to become Fat Model / Transaction Script.  
  **→ Representative example of Structural Style "Data-centric (Active Record)".**

### Laravel

- Eloquent is [Active Record](./data-centric/active-record.md)-like.
- Intuitive, but domain model splitting is up to the developer's ingenuity.  
  **→ Easy to understand in the context of Data-centric.**

### Django

- MVT (Model–View–Template) is close to [MVC](./ui/mvc.md).
- ORM leans towards Data Mapper.  
  **→ Representative example leaning towards "Table Module / Data Mapper" within Data-centric.**

## ✅ [Layered](./layered/index.md) / [Clean](./layered/dependency-rule-layered/clean.md) / [Dependency Rule](./layered/dependency-rule-layered/index.md) Frameworks

### Spring Boot (Java)

- **Structure easy to make [Clean](./layered/dependency-rule-layered/clean.md) / [Hexagonal](./layered/dependency-rule-layered/hexagonal.md)**
- Division of Controller → Service → Repository is natural.
- Easy to control dependency direction via DI.  
  **→ One of the frameworks with the most [Clean Architecture](./layered/dependency-rule-layered/clean.md) implementation examples.**

### NestJS (Node.js)

- Module structure, DI, and Decorators are very similar to Spring.
- Implementation of Port / Adapter / UseCase can be made clearly.  
  **→ Representative of [Clean](./layered/dependency-rule-layered/clean.md) / [Hexagonal](./layered/dependency-rule-layered/hexagonal.md) in the Node.js world.**

### .NET / ASP.NET Core

- [Clean Architecture](./layered/dependency-rule-layered/clean.md) templates are standardized.
- Literature and examples of DDD / [CQRS](../data/cqrs.md) / [Hexagonal](./layered/dependency-rule-layered/hexagonal.md) are very abundant.  
  **→ "De facto standard platform" for [Clean](./layered/dependency-rule-layered/clean.md) / [Layered families](./layered/index.md).**

## ✅ Reactive / Actor Frameworks

### Node.js

- **[Event Loop based structure](./reactive/event-loop.md) itself**
- Async I/O, Callbacks, Promises, Event-driven.  
  **→ Representative example of Structural Style "[Event Loop](./reactive/event-loop.md)".**

### Erlang / Elixir / Akka

- **Serious implementation of [Actor Model](./reactive/actor-model.md)**
- Message passing and supervision are at the language level.  
  **→ Pure sample of [Reactive Structural Style](./reactive/index.md).**

## ✅ Style × Framework Correspondence Table (Overview)

| Structural Style                                                                                                                                      | Representative Framework / Technology    |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| **[MVU](./ui/mvu.md)**                                                                                                                                | React / Redux, SwiftUI, Jetpack Compose  |
| **[MVVM](./ui/mvvm.md)**                                                                                                                              | Vue (Options API), Angular               |
| **[MVC](./ui/mvc.md) / MVT**                                                                                                                          | Rails, Django                            |
| **[Active Record](./data-centric/active-record.md)**                                                                                                  | Rails (ActiveRecord), Laravel (Eloquent) |
| **Data Mapper leaning**                                                                                                                               | Django ORM                               |
| **[Layered](./layered/index.md) / [Clean](./layered/dependency-rule-layered/clean.md) / [Hexagonal](./layered/dependency-rule-layered/hexagonal.md)** | Spring Boot, NestJS, .NET                |
| **[Event Loop](./reactive/event-loop.md)**                                                                                                            | Node.js                                  |
| **[Actor Model](./reactive/actor-model.md)**                                                                                                          | Erlang / Elixir, Akka                    |

## ✅ Value This Page Wants to Provide

- When learning architecture, understand **which style familiar frameworks are close to**.
- When reading code, understand **which "lens" deepens understanding**.
- See which philosophy the technology you are using stands on.

Please use this page as a **guide to understand "the architectural philosophy moving behind the framework".**
