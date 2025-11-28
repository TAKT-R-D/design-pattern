---
sidebar_label: 🧩 Saga
---

# 🧩 Saga Pattern (Distributed Transaction Coordination)

## ✅ Overview

**A pattern coordinating a series of processes across multiple services as a combination of "Local Transaction + Compensating Action".**

Approach assuming **Eventual Consistency** rather than strong distributed transaction like 2PC (2-Phase Commit).

## ✅ Problems Addressed

Due to microservices, one business operation came to span:

- Multiple services
- Multiple data stores

As a result:

- Rollback when one place fails is difficult.
- Distributed transactions (XA, 2PC) are heavy and incompatible with cloud / [microservices](../topologies/microservices.md).

Saga tries to maintain consistency with the idea:

> "Each service performs local transaction on its own DB, and cancels with compensating transaction if failed."

## ✅ Basic Philosophy & Rules

### ● Local Transaction

- Each service executes ACID transaction on its own DB.
- Does not span global transaction.

### ● Compensating Transaction

- Processing to cancel "steps already succeeded" at failure.
  - Example: Cancel reservation, revert inventory allocation, refund payment.

### ● Orchestration vs Choreography

- Orchestration Type

  - "Orchestrator" controlling Saga exists and calls each step in order.

- Choreography Type
  - Each service subscribes to events and autonomously proceeds to next step.

## ✅ Suitable Applications

- EC Order Processing (Payment, Inventory, Delivery, Points, etc.).
- Reservation System (Seat, Payment, Notification).
- B2B processes assuming multiple service coordination.

Features:

- Can maintain consistency to some extent without using strong distributed transactions.
- Can explicitly design failure patterns (compensation scenarios).

## ❌ Unsuitable Cases

- Processing that absolutely cannot tolerate intermediate states (Some areas of finance etc.).
- Processing flow is short and completes within single service.

Also, if Saga design is wrong:

- Compensation logic becomes complex.
- Scenario at failure becomes hard to read.

So domain understanding and identifying failure patterns are essential.

## ✅ History (Genealogy / Parent Styles)

- Originally emerged from dissertation on database transaction management.
- Re-focused in microservices era, treated as realistic solution for distributed transactions.
- Often used in combination with EDA / CQRS / Event Sourcing.

## ✅ Related Styles

- **[Event-driven Architecture](./event-driven.md)**: Choreography type Saga is built on EDA.
- **[REST / gRPC](./rest-grpc-graphql.md)**: Used for step calls in Orchestration type.
- **[CQRS](../data/cqrs.md) / [Event Sourcing](../data/event-sourcing.md)**: Good compatibility with tracking state transitions and implementing compensation logic.

## ✅ Representative Frameworks

Saga is a pattern, but frameworks and platforms supporting implementation exist.

- **Workflow Engines like Camunda / Zeebe / JBPM**  
  Can orchestrate long-running business processes based on BPMN.

- **Temporal / Cadence**  
  Platform to describe workflows in code and manage retry / compensation / timeout.

- **AWS Step Functions**  
  Can build Saga-like flows as orchestration infrastructure for distributed processing.

- **Kafka + Custom Orchestrator**  
  Many implementations control Saga with application code while using events on Kafka.

## ✅ Design Patterns Supporting This Style

Saga itself is an architecture pattern, but multiple design patterns are active inside.

- **Command**  
  Expresses processing of each step (Reservation, Billing, Inventory Allocation etc.) as operation object.

- **Memento**  
  Appears as idea when recording/restoring how far processing advanced and to which state to return.

- **State**  
  Explicitly expresses state of entire Saga (In Progress / Success / Compensating / Failed etc.).

- **Chain of Responsibility**  
  Structure tracing steps in order and switching to compensation flow if failed in between.

- **Mediator**  
  In Orchestration type Saga, Orchestrator itself acts as mediator between services.

## ✅ Summary

Saga Pattern holds an important position as:

- Practical solution for distributed transaction problem in microservices era.
- Design assuming "Eventual Consistency" instead of "Strong Consistency".

When introducing,  
**"At which step can it fail" and "How to compensate"** are keys to careful design.
