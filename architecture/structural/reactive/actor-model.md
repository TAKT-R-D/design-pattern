# 🧩 Actor Model

## ✅ Overview

**A concurrent computation model where lightweight concurrent objects called "Actors" communicate only by sending and receiving messages.**

Encapsulates state with message passing without handling threads or locks directly.

## ✅ Problems Addressed

- Complexity of shared memory + lock-based concurrency.
- Typical concurrency bugs like deadlocks / race conditions.
- Design of high throughput servers handling massive clients.

Actor Model tried to make concurrency easier to handle by:

> "Confining state within each Actor and communicating via messages instead of shared memory."

## ✅ Basic Philosophy & Rules

### ● Actor

- Has its own state.
- When receiving a message:
  - Updates state.
  - Sends messages to other Actors.
  - Creates new Actors.

### ● Message Passing

- Interaction between Actors is done through message queues.
- Message sending is asynchronous.
- No direct access to shared memory.

### ● Supervision

- In some Actor systems, parent Actors monitor child Actors' failures and manage restart policies.

## ✅ Suitable Applications

- High throughput distributed systems.
- Chat / Messaging services.
- Online game servers (Players and Rooms expressed as Actors).
- IoT and Event processing platforms.

Features:

- Can control concurrency at message level.
- Clear recovery strategy (Supervision) at failure.

## ❌ Unsuitable Cases

- Simple CRUD-centric Web apps.
- Business apps with low concurrency requirements.

Also, in teams not used to Actor Model:

- Message design and flow become complex.
- Confusion about differences in debugging methods.
- Learning cost occurs.

## ✅ History (Genealogy / Parent Styles)

- Roots in computation model proposed in 1970s.
- Adoption in practice advanced through implementations like Erlang / Akka.
- Important position in context of Reactive Manifesto and Reactive Systems.

## ✅ Related Styles

- **[Event Loop based structure](./event-loop.md)**: Close in terms of event-driven, but model is different.
- **[Reactive Streams](./reactive-streams.md)**: Standard for event stream processing.
- **[EDA (Event-Driven Architecture)](../../integration/event-driven.md)**: Event-driven structure of the entire system.

## ✅ Representative Frameworks

Actor Model has many practical implementations especially in areas where concurrency is important.

- **Erlang / Elixir (BEAM VM)**  
  Original implementation by lightweight processes + message passing. Excellent fault tolerance.

- **Akka (Scala / Java)**  
  Most famous Actor Framework on JVM. Rich in supervision, distribution, persistence, etc.

- **Orleans (.NET)**  
  Adopts "Virtual Actor" model, used in large-scale distributed systems.

- **Ray (Python)**  
  Distributed Actor execution platform in AI / HPC field. Handles tasks and actors uniformly.

## ✅ Design Patterns Supporting This Style

When converted to object-oriented patterns, Actor Model corresponds to the following elements:

- **State**  
  Hides internal state of Actor from outside and updates it by its own message processing.

- **Command**  
  Treats each message as an "operation", and Actor interprets and executes it.

- **Observer**  
  Receives messages in event-driven manner and triggers next processing.

- **Mediator**  
  Appears when adjusting message routing or coordination between Actors.

## ✅ Summary

Actor Model is a structural style strongly conscious of:

- Concurrency
- Message Passing
- Fault Isolation

Instead of handling threads and locks directly,  
it is characterized by the idea of **designing the system in units of "Actors and Messages"**.
