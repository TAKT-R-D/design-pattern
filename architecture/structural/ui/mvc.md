# 🧩 MVC (Model-View-Controller)

## ✅ Overview of this Style

One of the oldest UI structural styles, defining the **separation of responsibilities into Model / View / Controller** in GUI / Web applications.

## ✅ Problems Solved

The background of MVC's emergence involved the following challenges:

- Code for screen operations and data logic were mixed, making reuse and modification difficult.
- Wanting to share the same data across multiple displays (Views).
- Wanting to organize and handle user operations (events).

MVC attempted to organize the UI structure by:

> "Separating appearance (View), data (Model), and operation (Controller)."

## ✅ Basic Philosophy and Rules

### ● Model

- Represents the application's data and business logic.
- Holds state and notifies the View when changed (Observer pattern, etc.).

### ● View

- Displays the state of the Model on the screen.
- Ideally should have as little logic as possible (pure rendering).

### ● Controller

- Receives user input (clicks, key operations, etc.) and updates the Model or switches the View.

### Basic Rules (Classic MVC)

- The View observes the Model and redraws if there are changes.
- The Controller receives events from the View and acts on the Model.

Note that "MVC" in Web frameworks often differs in interpretation from the original Smalltalk MVC (e.g., Controller = Router role).

## ✅ Suitable Applications

- Simple screen transitions and form-centric Web apps.
- Existing GUI apps that want to introduce clear separation of responsibilities.
- Small to medium-scale UIs where the main purpose is "separating View and Model for now".

## ❌ Unsuitable Cases

- SPA / Modern front-end involving complex state management.
- Cases that make heavy use of two-way binding or reactive programming.
- Projects where the Controller's role tends to become bloated, making testing difficult.

In today's Web / Mobile development,
more sophisticated styles based on the MVC concept (MVP / MVVM / MVU) are often adopted.

## ✅ History (Genealogy / Parent Styles)

- A pattern for GUI applications born from Smalltalk in the 1970s-80s.
- The ideological base for many frameworks (Rails, ASP.NET MVC, etc.).
- The "ancestor" of successor styles like MVP / MVVM / MVU.

## ✅ Related Styles

- **MVP**: An evolution that aggregates screen logic in the Presenter.
- **MVVM**: A modern UI pattern premised on data binding.
- **MVU**: A style that handles state and updates with functional concepts.

## ✅ Representative Frameworks

MVC is historically one of the most widely known UI structural styles, and many Web / GUI frameworks adopt or are influenced by it in some form.

- **Ruby on Rails**  
  A representative "MVC framework". Although there is a division of responsibilities between Controller and View, the interpretation differs slightly depending on the implementation.

- **Django (Python)**  
  Calls it MVT (Model-Template-View), but structurally it is close to MVC.

- **ASP.NET MVC / ASP.NET Core MVC**  
  Typical MVC implementation for Web apps. Configures routing and actions centered on the Controller.

- **Initial implementations of various GUI frameworks**  
  Smalltalk-based and older desktop UI frameworks are under the direct influence of MVC.

## ✅ Design Patterns Supporting this Style

MVC itself is a structural style, but the following design patterns are often used within it.

- **Observer**  
  Realizes the mechanism to notify the View of Model state changes and trigger redraws.

- **State**  
  Used when changing behavior according to the state within the Model. Also involved in UI state management.

- **Command**  
  Represents user operations (actions) as objects and organizes processing from Controller to Model.

- **Mediator**  
  In complex screens involving multiple Views and Models, the Controller acts as a mediator for them.

## ✅ Summary

MVC is:

- The style that became the starting point for the idea of separating UI and logic.
- The base for many modern UI patterns.

Although it is less frequently adopted as-is in current front-end development,
it is worth knowing as the **origin when thinking about UI structure**.
