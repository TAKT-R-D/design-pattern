# 🧩 Frameworks and Their Architectural Flavors

(Deciphering the "Architectural Flavor" held by major frameworks)

## ✅ Introduction: Frameworks are not Architecture

Many frameworks do not **force a specific architectural style**.
However, each has a **tendency (flavor) where "designing this way feels natural"**.

Examples:

- Rails has a strong Active Record philosophy.
- React / SwiftUI are close to MVU (Elm Architecture).
- Spring Boot / NestJS are easy to align with Clean / Hexagonal.
- Node.js induces a structure centered on Event Loop (Async I/O).

In other words, we decipher with the stance:

> **It is important not to think "The framework decides the architecture", but to "Understand the direction the framework naturally induces".**

## ✅ Architectural Flavors of UI Frameworks

### React

- **Classification: MVU (Model–View–Update) family / Under Elm Architecture influence**
- Unidirectional data flow, immutability, declarative UI.
- Combination with Redux further strengthens the MVU color.
  **→ Can be treated as a representative example of UI Structural Style "MVU".**

### Next.js (App Router)

- **Classification: Closer to "Topologies / Integration" than UI structural style**
- Rendering strategies like SSR / SSG / ISR / Edge Rendering **themselves determine the architecture**.
- **Structure where UI and API (Backend) coexist** via API Routes / Route Handlers / Server Actions.
- File-based routing naturally enforces folder structure by feature.
  → Tends to become a project structure close to Vertical Slice / Feature-based.
- While containing React (MVU), Next.js itself is **an entity that defines "Overall App Configuration (Topology)" rather than "Structural Architecture".**

**→ As an architectural style, it belongs to the world of "Topologies (SSR/Edge) + Integration (UI + API Integration)" rather than MVU.**

### Vue.js (3.x)

- Options API: Close to MVVM.
- Composition API: Increased functional elements leaning towards React.
  **→ Overall, a hybrid of MVVM and MVU.**

### Angular

- **Clear MVVM / Layered structure**
- Component (VM), Template (View), Service (Logic).
  **→ Easy to treat as a typical example of UI structural style.**

### SwiftUI / Jetpack Compose

- **Completely MVU family**
- Single source of truth, re-computation, declarative UI.
  **→ The purest implementation of recent Declarative UI.**

## ✅ Architectural Flavors of Data-centric Frameworks

### Ruby on Rails

- **Typical example centered on Active Record**
- MVC, but practically tends to become Fat Model / Transaction Script.
  **→ Representative example of Structural Style "Data-centric (Active Record)".**

### Laravel

- Eloquent is Active Record-like.
- Intuitive, but domain model splitting is up to the developer's ingenuity.
  **→ Easy to understand in the context of Data-centric.**

### Django

- MVT (Model–View–Template) is close to MVC.
- ORM leans towards Data Mapper.
  **→ Representative example leaning towards "Table Module / Data Mapper" within Data-centric.**

## ✅ Layered / Clean / Dependency Rule Frameworks

### Spring Boot (Java)

- **Structure easy to make Clean / Hexagonal**
- Division of Controller → Service → Repository is natural.
- Easy to control dependency direction via DI.
  **→ One of the frameworks with the most Clean Architecture implementation examples.**

### NestJS (Node.js)

- Module structure, DI, and Decorators are very similar to Spring.
- Implementation of Port / Adapter / UseCase can be made clearly.
  **→ Representative of Clean / Hexagonal in the Node.js world.**

### .NET / ASP.NET Core

- Clean Architecture templates are standardized.
- Literature and examples of DDD / CQRS / Hexagonal are very abundant.
  **→ "De facto standard platform" for Clean / Layered families.**

## ✅ Reactive / Actor Frameworks

### Node.js

- **Event Loop based structure itself**
- Async I/O, Callbacks, Promises, Event-driven.
  **→ Representative example of Structural Style "Event Loop".**

### Erlang / Elixir / Akka

- **Serious implementation of Actor Model**
- Message passing and supervision are at the language level.
  **→ Pure sample of Reactive Structural Style.**

## ✅ Style × Framework Correspondence Table (Overview)

| Structural Style                | Representative Framework / Technology      |
| ------------------------------- | ------------------------------------------ |
| **MVU**                         | React / Redux, SwiftUI, Jetpack Compose    |
| **MVVM**                        | Vue (Options API), Angular                 |
| **MVC / MVT**                   | Rails, Django                              |
| **Active Record**               | Rails (ActiveRecord), Laravel (Eloquent)   |
| **Data Mapper leaning**         | Django ORM                                 |
| **Layered / Clean / Hexagonal** | Spring Boot, NestJS, .NET                  |
| **Event Loop**                  | Node.js                                    |
| **Actor Model**                 | Erlang / Elixir, Akka                      |

## ✅ Value This Page Wants to Provide

- When learning architecture, understand **which style familiar frameworks are close to**.
- When reading code, understand **which "lens" deepens understanding**.
- See which philosophy the technology you are using stands on.

Please use this page as a **guide to understand "the architectural philosophy moving behind the framework".**
