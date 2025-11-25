# 🧩 MVVM (Model-View-ViewModel)

## ✅ Overview of this Style

**A UI structural style that connects View and ViewModel with data binding, aggregating state and behavior in the ViewModel.**  
It works well with WPF / SwiftUI / Vue / React+State Management, etc.

## ✅ Problems Solved

Even with MVP, the following challenges remained:

- Interaction between View and Presenter tends to become a "storm of method calls".
- Not fully utilizing the data binding mechanisms provided by UI frameworks.
- Synchronization of state and rendering is cumbersome.

MVVM attempts to balance **Declarative UI and State Management** by:

> "Having the ViewModel hold state and behavior, and the View bind to it for rendering."

## ✅ Basic Philosophy and Rules

### ● View

- The screen (XAML, SwiftUI View, Vue/React templates, etc.).
- Holds as little logic as possible, binding to ViewModel properties/commands.

### ● ViewModel

- Holds the state (properties) necessary for the screen.
- Defines user operations as Commands or methods.
- Updates state in coordination with Model / Domain.

### ● Model

- Domain model and data access layer.

Key points of MVVM:

- Designed with the **data binding features** of the UI framework as a prerequisite.
- ViewModel can be written in a form close to framework-independent (ideal form).

## ✅ Suitable Applications

- XAML-based systems like WPF / UWP / MAUI.
- Declarative UIs like SwiftUI / Jetpack Compose.
- Vue / React + State Management libraries are also ideologically close.

Characteristics:

- Per-screen ViewModels tend to be natural units.
- Easy to test UI state.
- Easy to organize data flow.

## ❌ Unsuitable Cases

- UI frameworks with weak or non-existent binding mechanisms.
- Small-scale tools with only very simple screens (high configuration cost of MVVM).

Also, in practice:

- ViewModels tend to become bloated.
- It is difficult to draw the line on how much the ViewModel should hold.

These are some of the challenges.

## ✅ History (Genealogy / Parent Styles)

- A pattern that gained attention with the advent of WPF.
- Optimized for data binding as an evolution from MVP.
- Similar ideas are reinvented in modern declarative UI frameworks.

## ✅ Related Styles

- **MVP**: Previous generation pattern for separating View and logic.
- **MVU**: A functional approach with State + Message + Update function.
- **State Management like Redux, Vuex**: Coordination between global state and View.

## ✅ Representative Frameworks

MVVM is a style that works particularly well with UI frameworks equipped with data binding.

- **WPF / UWP / .NET MAUI (XAML-based)**  
  The combination of XAML's data binding mechanism and ViewModel is known as a representative implementation of MVVM.

- **Vue (Options API)**  
  The structure of treating `data` / `computed` / `methods` as ViewModel and binding with templates has MVVM-like characteristics.

- **Angular**  
  Becomes a structure close to MVVM through binding between Component (ViewModel role) and template.

- **React + State Management (MobX, etc.)**  
  A configuration that treats components as View and handles state management libraries like ViewModel can also be said to be an idea close to MVVM.

## ✅ Design Patterns Supporting this Style

The core of MVVM is "State and Binding", and the patterns supporting it are as follows.

- **Observer**  
  Notifies the View of property changes in the ViewModel, automatically triggering a redraw.

- **State**  
  Explicitly manages screen state (display mode, input content, error state, etc.) within the ViewModel.

- **Command**  
  A mechanism to define user operations (button clicks, etc.) as commands and call ViewModel logic from the View.

- **Mediator**  
  Sometimes used as a coordinator between multiple ViewModels or Models.

## ✅ Summary

MVVM is a powerful style for balancing:

- Data Binding
- Declarative UI
- Testable UI Logic

However, since ViewModels tend to become bloated if responsibilities are not properly divided,  
**the design decision of "What should the ViewModel hold?" becomes important.**
