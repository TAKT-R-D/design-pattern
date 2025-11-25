# 🧩 Table of Structural Styles and Design Patterns

(System of Design Patterns supporting Architecture)

This page lists **which combination of design patterns supports** each Structural Style.

*Note: Pattern names are completely unified with _takt.dev/design-pattern/_.*

## ✅ Clean / Hexagonal / Onion (Dependency Rule Family)

These styles center on "Control of Dependency Direction" and "Port/Adapter Structure", and the following design patterns are strongly involved.

- **Adapter**: The "Adapter" part of Port/Adapter.
- **Strategy**: Center of UseCase abstraction.
- **Command**: Treating UseCases as operation objects.
- **Facade**: Appearance of Application Services.
- **Proxy**: Abstraction of external API / Infrastructure access.
- **Abstract Factory**: Dependency switching (including Test Doubles).
- **Builder**: Assistance for complex creation like Aggregate construction.

**Main Patterns: Adapter / Strategy / Command**

## ✅ Layered / Domain Model Layered

Patterns supporting clarification of layer boundaries and separation of responsibilities.

- **Facade**: Appearance hiding lower layers from upper layers.
- **Template Method**: Sharing processing skeletons of Service / Repository.
- **Strategy**: Switching domain logic.
- **Composite**: Expression of hierarchical structure inside Aggregates.
- **Proxy**: Abstraction of external systems or lazy access.

## ✅ UI Family (MVC / MVP / MVVM / MVU)

Major patterns supporting UI Interaction styles.

- **Observer**: Reflection of State → UI.
- **State**: Holding UI state.
- **Command**: Turning UI events into operation objects.
- **Mediator**: Mediation between View and ViewModel / Presenter.
- **Memento**: State restoration like Undo/Redo.
- **Strategy**: Switching drawing strategies / input control.

**In MVU (React / SwiftUI / Jetpack Compose),  
State + Command + Observer appear particularly strongly.**

## ✅ Microkernel / Plugin Architecture

Patterns supporting extensibility and hot-swappability of plugins.

- **Strategy**: Switching plugins.
- **Abstract Factory**: Unification of plugin creation.
- **Proxy**: Wrapping extension points.
- **Mediator**: Coordination between plugins.
- **Facade**: Appearance API of the core system.

## ✅ Reactive / Actor / Event Loop / Streams

Patterns supporting Event-driven, Asynchronous processing, and Actor Model.

- **Observer**: Event subscription.
- **Mediator**: Event distribution.
- **Command**: Treating messages as operation objects.
- **State**: Internal state of Actor.
- **Iterator**: Sequentialization of stream processing.
- **Chain of Responsibility**: Step-by-step propagation of event processing.

## ✅ Flow / Pipeline (Pipe & Filter / Streaming / Batch)

Structure realizing stepwise processing flow.

- **Chain of Responsibility**: Chaining of filters.
- **Iterator**: Sequential processing of streams.
- **Mediator**: Coordination between steps.
- **Strategy**: Switching of each processing step.

## ✅ Data-centric (Active Record / Table Module / Transaction Script)

Data-centric structures are heavily influenced by the following patterns.

- **Template Method**: Unification of persistence processing.
- **Proxy**: Lazy loading.
- **Observer**: Change notification.
- **Strategy**: Validation strategy.
- **Command**: Operation as a Transaction Script.

## ✅ How to Use This List

- When choosing a Structural Style, **naturally understand the patterns needed for implementation**.
- From the patterns heavily used in the current codebase, **calculate backward to the structural style that should be adopted**.
- Supplement detailed explanations with the existing site (takt.dev/design-pattern).

> This is a guide page serving as a bridge between  
> **Architecture (Structure) ⇄ Design Patterns (Implementation)**.
