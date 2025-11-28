---
sidebar_label: Introduction
pagination_label: Data & Analytics Architecture Overview
---

# Data & Analytics Architecture

Data Architecture covers the architecture layer dealing with **flow, storage, transformation, and analysis of data.**

- Separation of OLTP / OLAP
- Data Lake / Data Warehouse
- Streaming Processing
- Handling of Domain Events
- Distributed Data Consistency (CQRS / Event Sourcing)

## ✅ Problems Addressed by This Category

- Where to store data (DB / Lake / Warehouse).
- How to aggregate and analyze.
- Data lifecycle (Acquisition → Storage → Transformation → Analysis → Provision).
- Streaming vs Batch.
- Handling of data consistency in distributed systems.

## ✅ Representative Styles of Data Architecture

### ● [Data Warehouse (DWH)](./data-warehouse.md)

- Aggregation database for analysis and reporting.
- Center of enterprise BI.

### ● [Data Lake / Lakehouse](./data-lake-lakehouse.md)

- Large-scale infrastructure handling unstructured/structured data together.
- For ML and large-scale analysis.
- Lakehouse is a fusion of DWH + Lake.

### ● [CQRS (Command Query Responsibility Segregation)](./cqrs.md)

- Separates write model and read model.
- Effective in situations requiring high load distribution and fast reading.

### ● [Event Sourcing](./event-sourcing.md)

- Manages state by "history of events".
- Supports advanced requirements like audit / reconstruction / snapshot.

### ● [Data Mesh](./data-mesh.md)

- Manages data products per domain.
- Organization structure and distribution of data responsibility are key points.

### ● [Lambda / Kappa Architecture](./lambda-kappa.md)

- Batch + Stream (Lambda).
- Unification with Stream alone (Kappa).

## ✅ How to Read This Category

1. Understand the boundary between OLTP and OLAP.
2. Which is primary: Streaming or Batch.
3. How data responsibility within the organization should be distributed (Mesh).

## ✅ Relationship with Other Layers

- **[Integration](../integration/index.md)**: Event-driven is directly connected to data structure.
- **[System Topologies](../topologies/index.md)**: CQRS/ES is important in distributed services.
- **[Cross-cutting](../cross-cutting/index.md)**: Closely related to Data Governance, Audit, SLO, etc.
