---
sidebar_position: 2
---

# What Are Design Patterns?

## Definition and Purpose

- Design patterns are **reusable templates for solving common design problems**.
- They focus not on _how_ to write code, but on _why_ a particular structure is effective.
- The most well-known patterns are the `23` foundational patterns introduced by the GoF (Gang of Four).

---

## GoF Pattern Classification (3 Categories)

| Category     | Description                          | Representative Patterns                                                                                                                               |
| ------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Creational` | How objects are created              | `Singleton`, `Factory Method`, `Abstract Factory`, `Builder`, `Prototype`                                                                             |
| `Structural` | How objects are composed and related | `Adapter`, `Decorator`, `Facade`, `Composite`, `Proxy`, `Bridge`, `Flyweight`                                                                         |
| `Behavioral` | How objects behave and interact      | `Strategy`, `Observer`, `Command`, `State`, `Template Method`, `Iterator`, `Mediator`, `Chain of Responsibility`, `Visitor`, `Memento`, `Interpreter` |

## Pattern Map (Overview)

```
Creational
├─ Singleton         : Shared single instance
├─ Factory Method    : Delegate instantiation to subclasses
├─ Abstract Factory  : Create families of related objects
├─ Builder           : Separate complex construction logic
└─ Prototype         : Clone existing instances

Structural
├─ Adapter           : Interface compatibility
├─ Bridge            : Decouple abstraction and implementation
├─ Composite         : Uniformly treat part-whole hierarchies
├─ Decorator         : Add functionality via wrapping
├─ Facade            : Simplify access via unified interface
├─ Flyweight         : Share to reduce memory footprint
└─ Proxy             : Add control or delay via delegation

Behavioral
├─ Strategy          : Swap algorithms flexibly
├─ Observer          : Notify on state change
├─ Command           : Encapsulate operations as objects
├─ State             : Change behavior by state
├─ Template Method   : Define a process skeleton
├─ Chain of Resp.    : Delegate responsibility across handlers
├─ Iterator          : Sequentially access elements
├─ Mediator          : Centralize communication between objects
├─ Visitor           : Externalize operations on object structures
├─ Memento           : Save and restore state
└─ Interpreter       : Evaluate based on grammar rules
```

## Top 10 Most Used Patterns and Their Use Cases

| Pattern           | Problem Solved                      | Common Use Cases                        |
| ----------------- | ----------------------------------- | --------------------------------------- |
| `Singleton`       | Global shared state                 | Config, logging, DB connections         |
| `Strategy`        | Manage branching logic              | Billing, authentication modes           |
| `Observer`        | React to state changes              | UI updates, Pub/Sub systems             |
| `Factory Method`  | Avoid direct instantiation          | Client creation per protocol            |
| `Decorator`       | Add behavior dynamically            | Logging, authorization checks           |
| `Adapter`         | Bridge interface mismatches         | Legacy system integration               |
| `Command`         | Represent actions as objects        | Undo/Redo, command queues               |
| `Facade`          | Simplify complex APIs               | Service wrappers, unified access        |
| `Template Method` | Abstract common processing skeleton | Output routines, standardized workflows |
| `State`           | Change logic depending on state     | Wizard flows, connection status         |

# Tips for Memory and Practical Application

- Don't just memorize names—**link each pattern to real-life experiences or specific problems you've encountered.**
- Look for moments where you think, _“I've seen this kind of structure before”_ or _“We did something like this in another project.”_

## Refactoring Goals — A Reminder

| Goal              | Explanation                                |
| ----------------- | ------------------------------------------ |
| Maintainability   | Easier to read and understand code         |
| Extensibility     | Safer and more efficient feature updates   |
| Bug Prevention    | Fewer side effects and change-related bugs |
| Development Speed | Faster reviews and testing cycles          |

> Don't aim for “it just works”—aim for **structures that evolve safely**.

Design patterns are **reusable solutions that support long-term development agility**.
