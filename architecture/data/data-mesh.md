# 🧩 Data Mesh

## ✅ Overview

**Data architecture treating organization's data as "distributed products" and giving ownership and responsibility to domain teams.**

## ✅ Problems Addressed

- Bottleneck of centralized DWH/Lake.
- Concentration of requests to data platform team (Cannot handle data requests).
- Data quality problem due to lack of domain knowledge.

## ✅ Basic Philosophy & Rules

1. **Domain-oriented Data Ownership**
2. **Data Product Thinking (SLO, Quality, API)**
3. **Self-service Data Platform**
4. **Standardized Interface and Governance**

## ✅ Suitable Applications

- Data distributed management in large-scale organizations.
- Operation of independent analysis platform per business division.
- Environment utilizing Data Catalog / Data API.

## ❌ Unsuitable Cases

- Small-scale organizations (Merit of distribution is thin).
- Cases without governance organization or culture of SLO operation.

## ✅ History

- Proposed by Zhamak Dehghani.
- Design philosophy approach to limits of [Data Lake](./data-lake-lakehouse.md) / [Warehouse](./data-warehouse.md).

## ✅ Related Styles

- [Data Lake / Lakehouse](./data-lake-lakehouse.md): Implementation infrastructure of data retention layer.
- [CQRS](./cqrs.md) / [EDA](../integration/event-driven.md): Implementation means of inter-product coordination.

## ✅ Representative Frameworks

- **Databricks / Lakehouse Platform**  
  Platform suitable for management per data product unit.

- **Snowflake + Data Marketplace**  
  Mesh-like operation premised on data sharing is possible.

- **AWS Glue / Athena + Lake Formation**  
  Unified management of metadata and access rights of distributed data products.

- **Data Catalog (Amundsen / DataHub / Collibra)**  
  Mesh essential component performing data search and ownership management.

## ✅ Design Patterns Supporting This Style

Data Mesh is closer to organizational structure pattern, but technically related to:

- **Facade**  
  Functions as "entrance" of Data API or Data Product.

- **Mediator**  
  Platform plays role of mediating between each data product.

- **Strategy**  
  Flexibility to select different processing method / retention format per domain.

- **Iterator**  
  Used for abstraction when handling distributed data cross-sectionally.

## ✅ Summary

Data Mesh is an **architecture philosophy where domain teams own data as products and aim for overall optimization while cooperating in distributed manner**, against the limits of centralized data infrastructure.

It is for large-scale organizations, and data product management, governance, and SLO operation are essential.
