---
sidebar_label: Introduction
pagination_label: System Topologies Overview
---

# System Topologies (System Configuration & Service Granularity)

System Topologies covers the architecture layer dealing with **at what granularity to split the application and how to arrange/deploy it.**

- Targets **configuration between multiple services/processes** rather than "contents of 1 service".
- Closely related to scaling strategy and organizational structure, ranging from Monolith to Microservices.

## ✅ Problems Addressed by This Category

- At what granularity should the system be split?
- How to decide the unit of change and deployment?
- Mismatch between team structure and architecture.
- How to realize availability, scale, and fault isolation.
- Problems of "too many / too few" microservices.

## ✅ Representative Styles of System Topologies

### ● [Monolith](./monolith.md)

- Single deployment, single process configuration.
- Most efficient for small to medium scale where tight coupling is not an issue.
- Merits are strong internal consistency and simple deployment.

### ● [Modular Monolith](./modular-monolith.md)

- Internally modularized, but deployment is one unit.
- Anticipates "future microservices" but avoids excessive splitting.

### ● [Microservices](./microservices.md)

- Group of services independently deployable per process.
- Configuration allowing evolution per team.
- However, hurdles for operation cost and observability are high.

### ● [Service-Oriented Architecture (SOA)](./soa.md)

- Emerged in the context of enterprise integration.
- Includes classic SOA centered on ESB and modern SOA centered on APIs.

### ● [Serverless / FaaS](./serverless.md)

- Deployed per Function.
- Aimed at scaling/cost efficiency per feature unit.
- Allows fine-grained splitting but can easily become complex.

### ● [Edge / Fog Architecture](./edge.md)

- Distributes processing to the edge (devices/local sites) in addition to the cloud.
- Important for IoT and low-latency applications.

### ● [Cell-based Architecture](./cell-based.md)

- Configuration adopted in ultra-large-scale systems.
- Horizontal scale per Cell (small independent cluster).
- Balances fault isolation and scale.

### ● [Multi-region Architecture](./multi-region.md)

- Deploys services to multiple regions.
- Realizes high standards of availability, latency, and DR.
- Active-active / Active-passive configurations.

## ✅ How to Read This Category

1. Understand in order from Small → Large, Simple → Complex.
2. Map your own system scale and organizational scale.
3. Compare Cost (Cognitive/Operational) and Value (Independence/Scale).

## ✅ Relationship with Other Layers

- **[Integration Styles](../integration/index.md)**: Communication method is a matter of life and death in Microservices.
- **[Structural Styles](../structural/index.md)**: Internal structure of each service is a separate category (Layered/Hex etc.).
- **[Cross-cutting](../cross-cutting/index.md)**: Observability / SLO is essential especially in Microservices.
- **[Data Architecture](../data/index.md)**: Distributed data consistency problems (CQRS / Event Sourcing) appear.
