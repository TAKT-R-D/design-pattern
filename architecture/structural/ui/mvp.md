# 🧩 MVP (Model-View-Presenter)

## ✅ Overview of this Style

A UI structural style where the **Presenter handles screen logic and the View is made as "passive" as possible**.  
It can be seen as an evolution of MVC that enhances testability.

## ✅ Problems Solved

In MVC, depending on the implementation, there were challenges such as:

- Logic easily creeping into the View.
- Ambiguity in responsibilities between Controller and View.
- Strong dependency on UI frameworks in tests.

MVP attempts to realize a **testable UI structure** by:

- Treating the View as an **interface (contract)**.
- Concentrating screen logic in the Presenter.
- Routing interactions with the Model through the Presenter as well.

## ✅ Basic Philosophy and Rules

### ● View

- UI Component (Screen).
- Responsible for input and display.
- Holds as little logic as possible.
- Often defined as an interface like `IView`.

### ● Presenter

- Mediator between View and Model.
- Responsible for interpreting user operations and updating screen state.
- Instructs the View "display this".

### ● Model

- Data and domain logic.

Variations of MVP:

- Passive View (View does almost only rendering).
- Supervising Controller (View has simple binding logic).

## ✅ Suitable Applications

- Desktop applications where testability is important (WinForms, parts of WPF, etc.).
- Environments where you want to reduce dependency on UI frameworks.
- Cases where screen logic is complex and cannot be fully organized by Controller alone.

## ❌ Unsuitable Cases

- Cases where the UI is very simple and the cost of introducing MVP is not justified.
- Frameworks where powerful data binding mechanisms (MVVM-like mechanisms) are a prerequisite.

## ✅ History (Genealogy / Parent Styles)

- Emerged as an evolutionary style addressing the challenges of [MVC](./mvc.md).
- Used especially in the GUI application community such as .NET / Java.
- Later passed the baton to styles premised on data binding like [MVVM](./mvvm.md).

## ✅ Related Styles

- **[MVC](./mvc.md)**: The original UI structural pattern.
- **[MVVM](./mvvm.md)**: A modern UI pattern utilizing data binding.
- **[MVU](./mvu.md)**: A functional approach that clearly separates state and updates.

## ✅ Representative Frameworks

MVP is not specific to a particular framework but has been used mainly in GUI applications and projects that emphasize testability.

- **.NET (WinForms / Early WPF Apps)**  
  A configuration where the View is made into an interface and operated from the Presenter was often adopted.

- **Java GUI (Swing / SWT, etc.)**  
  In environments with heavy UI components, configurations were chosen to concentrate logic in the Presenter to facilitate testing.

- **Android (Old Architecture Guide)**  
  Before [MVVM](./mvvm.md) became common, patterns where Activity / Fragment were treated as View and screen logic was aggregated in Presenter were often used.

## ✅ Design Patterns Supporting this Style

In MVP, since the Presenter becomes the "center of screen logic", the following patterns become important.

- **Mediator**  
  The Presenter acts as a mediator between View and Model, aggregating interactions between them in one place.

- **Observer**  
  Used as a pattern where the Presenter detects changes in the Model and reflects them in the View.

- **State**  
  Used when explicitly managing screen state (display mode, validation state, etc.).

- **Command**  
  Treats user operations (button clicks, etc.) as operation objects and organizes processing within the Presenter.

## ✅ Summary

MVP is a style that:

- Reduces dependency on UI frameworks.
- Aggregates screen logic in the Presenter.
- Provides a testable UI structure.

Even for understanding modern [MVVM](./mvvm.md) / [MVU](./mvu.md),  
it is worth noting as an **intermediate generation style that pushed "separation of View and Logic" one step further**.
