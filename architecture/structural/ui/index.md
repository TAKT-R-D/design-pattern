---
sidebar_label: UI Interaction / Presentation Styles
---

# UI Interaction / Presentation Styles (UI Structural Styles)

## ✅ Overview

This family covers styles that deal with **how to divide and coordinate between UI and Domain/Application Logic**.

- Division of responsibilities between Screen (View), State (ViewModel / Presenter / Model), and Events (Controller / Update).
- Where to write screen logic.
- How much should be handled by the UI side and where the Domain side should take over.

Representative Styles:

- [MVC (Model-View-Controller)](./mvc.md)
- [MVP (Model-View-Presenter)](./mvp.md)
- [MVVM (Model-View-ViewModel)](./mvvm.md)
- [MVU (Model-View-Update / Elm Architecture)](./mvu.md)

## ✅ Why this Family Emerged (History/Background)

- Mixing screen logic, state management, and business logic in a single file makes maintenance impossible.
- The advent of GUI applications necessitated event-driven structures.
- The increasing complexity of Web front-ends (SPA, two-way binding) increased logic that cannot be completed solely on the UI side.

As a result, various styles have been proposed for the problem of:

> "How to separate UI from everything else."

## ✅ Problems Solved

UI styles primarily target the following:

- Screen state management becoming spaghetti code.
- Business logic being written directly in event handlers.
- Difficulty in testing (dependency on UI frameworks).
- UI changes easily breaking other logic.

As styles evolved from [MVC](./mvc.md) → [MVP](./mvp.md) → [MVVM](./mvvm.md) → [MVU](./mvu.md), the direction has been to:

- Decouple logic from UI frameworks.
- Enhance compatibility with Declarative UI / Data Binding.

## ✅ Styles Belonging to this Family

- **[MVC](./mvc.md)**: The oldest UI structural pattern. Divided into Model / View / Controller.
- **[MVP](./mvp.md)**: Presenter handles screen logic to improve testability.
- **[MVVM](./mvvm.md)**: A style premised on data binding, bundling state and behavior using ViewModel.
- **[MVU](./mvu.md)**: A functional style that expresses UI through a loop of State + Message + Update function.

## ✅ Relationship with Other Families

- Often used as the internal structure of the "Presentation Layer" within **[Layered / Domain Model Families](../layered/index.md)**.
- Sometimes combined with **[Reactive](../reactive/index.md) / [Flow](../flow/index.md) Families** to build event streams or reactive UIs.

## ✅ When to Reference

- When UI-side code is becoming bloated or spaghetti-like.
- When you want to consider a testable UI structure.
- When you want to think about design across UI frameworks like Web / Mobile / Desktop.

Styles in this family serve as important comparisons when considering **where to draw the boundary between "Display" and "State/Logic"**.
