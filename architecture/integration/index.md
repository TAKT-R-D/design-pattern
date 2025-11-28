---
sidebar_label: Introduction
pagination_label: Integration Styles Overview
---

# Integration Styles

Integration Styles covers the architecture layer defining **how services communicate and cooperate with each other and external systems.**

## ✅ Problems Addressed by This Category

- How to choose communication methods between services.
- Latency and scale problems of synchronous APIs.
- Complexity of event-driven architecture.
- Handling distributed transactions with Saga.
- Contract management of API boundaries.

## ✅ Representative Styles of Integration Styles

### ● [REST / gRPC / GraphQL](./rest-grpc-graphql.md)

- Basic methods of synchronous communication.
- REST: Most widely spread, for CRUD.
- gRPC: Fast, type-safe, for Microservices.
- GraphQL: Frontend optimization (Good compatibility with BFF).

### ● [Event-Driven Architecture (EDA)](./event-driven.md)

- Loose coupling with asynchronous events.
- Suitable for high scale / high availability configuration.
- However, complexity of observability and consistency increases.

### ● [Saga Pattern (Orchestration / Choreography)](./saga.md)

- Control of distributed transactions.
- Essential for "consistency across multiple services" like payment and reservation.

### ● [API Gateway / BFF](./api-gateway-bff.md)

- Integration and optimization of APIs for clients.
- Aggregates authentication, routing, and rate limiting.

### ● [Service Mesh](./service-mesh.md)

- Separates communication from app and controls it at network layer.
- Automates mTLS, retry, Circuit Breaker, tracing, etc.

### ● [Outbox Pattern (Transactional Outbox)](./outbox-pattern.md)

- Buffers events within DB transaction.
- Resolves inconsistency between app update and event delivery.
- Most practical consistency assurance method in Microservices.

### ● [Change Data Capture (CDC)](./cdc.md)

- Directly streams DB change logs.
- Generates events without going through the app.
- Suitable for high throughput data replication and pipelines.

## ✅ How to Read This Category

1. Distinction between Synchronous / Asynchronous.
2. Trade-off between "Consistency" and "Latency".
3. Role of layers absorbing complexity like BFF and Mesh.

## ✅ Relationship with Other Layers

- Most strongly linked with **[System Topologies](../topologies/index.md)**.
- **[Data Architecture (CQRS, ES)](../data/index.md)** is almost a set with EDA.
- **[Cross-cutting](../cross-cutting/index.md)** ([SLO](../cross-cutting/slo-sre.md) / [Observability](../cross-cutting/observability.md)) is directly connected to communication visualization.
