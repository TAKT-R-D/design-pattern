# 🧩 G. Reactive / Event-driven Structural Styles

## ✅ Overview

This family deals with styles that handle **structures reacting asynchronously centered on the flow of events and messages.**

- Main design object is "when and how" to react to input.
- Structure assumes threads, callbacks, event loops, message queues, etc.
- Important in concurrency, high throughput, and reactive systems.

Representative Styles:

- Actor Model
- Event Loop based structure
- Reactive Streams

## ✅ Why This Family Emerged (History & Background)

- Importance of concurrency/parallelism with increasing CPU cores.
- Explosive increase in connections/events due to Web / Mobile / IoT.
- Blocking I/O models became difficult to scale.
- High responsiveness and fault tolerance became required.

Reactive / Event-driven styles developed from the need:

> "Want to handle concurrency as a flow of events or messages, rather than managing threads directly."

## ✅ Problems Addressed

- Low-level thread management (Lock / Mutex hell).
- Throughput limits due to synchronous I/O.
- Difficulty in recovery from abnormalities and fault tolerance design.

Reactive family considers the design of the entire system from perspectives like:

- "Flow of events (messages)"
- "Combination of asynchronous processing"
- "Reactive responsiveness"

## ✅ Styles Belonging to This Family

- **Actor Model**: Concurrency model where actors communicate with messages.
- **Event Loop based structure**: Structure handling asynchronous I/O with a single event loop (Node.js etc.).
- **Reactive Streams**: Standardized model including asynchronous stream processing and backpressure.

## ✅ Relationship with Other Families

- Combined with **Flow / Pipeline** to configure processing flow of event streams.
- Closely related to **Integration Styles (EDA, Messaging)**.
- Often adopted as internal implementation of **Layered / Domain Model**.

## ✅ When to Reference

- Services requiring high throughput and low latency.
- Servers handling many clients or connections (Chat / Game / IoT etc.).
- Systems with event-driven business logic.

Understanding this family gives you the **perspective of capturing architecture on the axis of 'What happens when, and how to react to it'.**
