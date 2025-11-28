---
sidebar_label: 🧩 CQRS
---

# 🧩 CQRS (Command Query Responsibility Segregation)

## ✅ Overview

**Architecture style separating Read (Query) and Write (Command).**

## ✅ Problems Addressed

- Balancing read optimization vs write consistency.
- Query performance problem in large-scale systems.
- General-purpose model cannot satisfy specific data access patterns.

## ✅ Basic Philosophy & Rules

- Design Command Model and Query Model separately.
- Often separate DB for reading (Cache / Search specific) and DB for writing.
- Often used in combination with Event Sourcing.

### Conceptual Diagram

![CQRS Architecture diagram](./cqrs.png)

> Source: Greg Young, “CQRS Documents”, 2010, Figure 12.  
> https://cqrs.files.wordpress.com/2010/11/cqrs_documents.pdf

## ✅ Suitable Applications

- Systems where load balance of write and read differs significantly.
- API with high traffic and large scale requirements.
- Domains with complex search or aggregation requirements.

## ❌ Unsuitable Cases

- Small-scale CRUD apps (Complexity outweighs benefits).
- Situations where separation increases consistency and operational load.

## ✅ History

- Proposed in DDD context, but widely adopted also from scalability perspective.

## ✅ Related Styles

- [Event Sourcing](./event-sourcing.md): Good compatibility with style holding state by events.
- [EDA](../integration/event-driven.md): Utilized for asynchronous update.

## ✅ Representative Frameworks

- **EventStoreDB**  
  Widely adopted in CQRS implementation combined with Event Sourcing.

- **Axon Framework (Java)**  
  Possible to implement integrating Command/Query separation and Event Sourcing.

- **Lagom (Scala / Java)**  
  Microservices framework premised on CQRS + ES.

- **Kafka + Custom Command Processor**  
  CQRS implementation exchanging Command/Event via Kafka Topic is also common.

## ✅ Design Patterns Supporting This Style

- **Command**  
  Central pattern treating write operation as "operation with intent".

- **Memento**  
  Used when handling snapshot at specific point as auxiliary of state management.

- **Strategy**  
  Switching different data fetching methods in Read / Write models.

- **Observer**  
  Used when subscribing to write result events and updating read model.

- **Mediator**  
  Appears in structure where Command Handler / Query Handler cooperate loosely.

## ✅ Summary

CQRS is a powerful method realizing scale and flexible model design with the simple concept of **separation of reading and writing**.
