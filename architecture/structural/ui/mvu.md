# 🧩 MVU (Model-View-Update / Elm Architecture)

## ✅ Overview of this Style

**A UI structural style that connects State (Model), Screen (View), and State Update (Update) using pure functions and messages.**  
Made famous by Elm, it became a representative approach for functional front-end development.

## ✅ Problems Solved

Even with MVVM, the following challenges remained:

- State flow becomes hard to trace when two-way binding becomes complex.
- ViewModels become bloated, making it difficult to understand where and what is being changed.
- Logic becomes scattered as asynchronous processing and events increase.

MVU responds to this with a simple principle:

> "Aggregate state in one place, and  
>  handle all updates via a single Update function through messages."

## ✅ Basic Philosophy and Rules

### ● Model

- A record / object representing the application state.

### ● View

- A pure function that generates UI (Virtual DOM) from state, like `view : Model -> Html Msg`.
- User operations are expressed as `Msg` (Messages).

### ● Update

- A pure function that takes a message and the current state, and returns the next state, like `update : Msg -> Model -> Model`.

### ● Loop Structure

- Render View based on Model.
- Msg is generated from user operations, etc.
- Update returns a new Model.
- Render View again.

The UI operates by continuously running this loop.

## ✅ Suitable Applications

- Functional front-ends like Elm and PureScript.
- React apps influenced by Redux / TEA (The Elm Architecture).
- Event-driven UIs with many state transitions.

Characteristics:

- State flow (data flow) is very clear.
- Easy to debug and time travel.

## ❌ Unsuitable Cases

- Teams not accustomed to functional style.
- Apps with only small form-centric screens (can be overhead).

Also, trying to fit everything into MVU can lead to:

- Bloated Update functions.
- Too many types of messages.

These are some of the challenges.

## ✅ History (Genealogy / Parent Styles)

- Architecture proposed by the Elm language.
- Influenced many front-end technologies like Redux and React Hooks.
- Widely recognized as a school of UI state management, similar to MVVM / Flux.

## ✅ Related Styles

- **MVVM**: Binding-based UI structure.
- **Flux / Redux**: Structure of Single Store + Reducer is close to MVU.
- **FRP / Reactive Streams**: UI model as event streams.

## ✅ Representative Frameworks

MVU (The Elm Architecture) has had a wide influence in the world of functional and declarative UI.

- **Elm**  
  The language/framework that originated MVU. The structure of `Model` / `View` / `Update` is explicit.

- **React + Redux**  
  State updates via Single Store and Reducer are strongly influenced by MVU.

- **React Hooks (useReducer, etc.)**  
  Update flow via `state` and `dispatch` is close to the MVU idea.

- **SwiftUI / Jetpack Compose**  
  Can build UIs in a style close to MVU due to unidirectional data flow and declarative UI.

## ✅ Design Patterns Supporting this Style

Although MVU is formally a functional structure, the following elements appear strongly when viewed through object-oriented design patterns.

- **State**  
  Aggregates application state into a single Model and changes behavior based on its changes.

- **Command**  
  Treats `Msg` (message) as an "operation object" and interprets it in the Update function.

- **Observer**  
  Has a notification-like structure of Model → View in the sense that the View is recalculated whenever the state changes.

## ✅ Summary

MVU is a style that assembles UI with simple rules:

- Single State
- Update via Pure Functions
- Declarative View

In modern front-ends where state management tends to become complex,  
the idea that **"all changes are aggregated into a single Update through messages"**  
continues to have a significant influence on other frameworks and patterns.
