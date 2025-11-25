# 🧩 Event Sourcing

## ✅ Overview

**Style obtaining current state by accumulating "events that changed state" instead of state itself, and replaying them.**

## ✅ Problems Addressed

- Complete retention of update history (Audit / Reproduction).
- Detection of conflict and ensuring consistency with asynchronous processing.
- Making it easy to grasp meaning of state change (why it became this state) later.

## ✅ Basic Philosophy & Rules

- All change operations are saved as events.
- Current State = Replay result of past events.
- Often uses Event Store (DB dedicated to events).

### Conceptual Diagram

![Event Sourcing Architecture diagram](./event-sourcing.png)

> Source: Microsoft, “Event Sourcing pattern – Azure Architecture Center”.  
> https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing

## ✅ Suitable Applications

- Areas where history management is essential like Finance / Accounting.
- Domains compatible with DDD Aggregate.
- Systems requiring automatic reprocessing / recalculation.

## ❌ Unsuitable Cases

- Simple CRUD where necessity of history retention is thin.
- Cases where event volume is too large and replay cost becomes a problem.

## ✅ History

- Influenced event-centric calculation models like Actor Model.
- Combination with CQRS is common.

## ✅ Related Styles

- CQRS: Easily used as model on write side.
- EDA: Naturally integrated with event-driven systems.

## ✅ Representative Frameworks

- **EventStoreDB**
  Most widely used Event Store dedicated to Event Sourcing.

- **Kafka / Kinesis / Pub/Sub**
  Implementation accumulating events as Append-only log and performing state reconstruction by Replay is possible.

- **Axon Framework (Java)**
  Easy to implement integrating Event Sourcing and CQRS.

- **Temporal / Cadence**
  Supports long-term event history management and workflow replay.

## ✅ Design Patterns Supporting This Style

- **Memento**
  Used for saving / restoring snapshots.

- **Command**
  Treats event as operation object generating it.

- **Observer**
  Structure where event subscriber receives state change as notification.

- **Iterator**
  Used for sequential replay of Event Stream.

- **State**
  Aggregate updates internal state applying events.

## ✅ Summary

Event Sourcing is an **architecture realizing meaningful state management by treating history as first-class data.**
