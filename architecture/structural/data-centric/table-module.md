# 🧩 Table Module

## ✅ Overview

A data-centric structural style that **"groups logic for the entire table (set) into one module"**.
While Active Record centers on "1 Row = 1 Object",
Table Module handles "Table = 1 Module".

## ✅ Problems Addressed

In Active Record, logic tends to scatter when handling sets (multiple rows).

- Places to write aggregation processing become scattered.
- Confusion about where to place batch processing / reporting processing.
- Hard to express operations centered on **data sets** rather than single row states.

Table Module organizes these problems and creates a clear place:
**"Put all collective logic in this module."**

## ✅ Basic Philosophy & Rules

- **1 Module/Class** per 1 Table.
- The module handles **sets (entire table) not rows**.
- Operations are defined as functions on the table.
  - Examples:
    - `findByStatus(status)`
    - `calculateMonthlyTotals()`
    - `bulkUpdateFlags(ids)`
- Mainly targets data processing logic like queries, aggregation, and bulk updates.

### Image of Role Division with Active Record

| Logic Type | Active Record | Table Module |
| :--- | :--- | :--- |
| Row-level attribute operation | ◎ | △ |
| Aggregation / Search / Set operation | △ | ◎ |

## ✅ Suitable Applications

- Business systems with frequent reporting and aggregation processing.
- Applications with many batch processes.
- Pre-processing for loading into Data Warehouses.
- Aggregation / Analysis pre-processing assuming large amounts of data.

Especially effective when you want to create a state where:

> "If you look here, you understand all aggregation processing for this table."

## ❌ Unsuitable Cases

- When handling complex business rules centered on objects.
- Apps centered on row-level behavior and state transitions.
- Small CRUD apps where Active Record alone is sufficient.

## ✅ History (Genealogy / Parent Styles)

- Defined in Fowler's _Patterns of Enterprise Application Architecture_.
- A type of "Table-centric" idea, sibling relationship with Active Record.
- Practical pattern as a place for aggregate operations.
- Different domain from Repository Pattern (DDD), but roles are similar in some scenes.

## ✅ Related Styles

- **Active Record**: Strong in row-level operations.
- **Anemic Domain Model**: Often occurs concurrently in data-centric contexts.
- **Repository Pattern**: Set operations in DDD. Philosophy differs but relationship is deep.
- **Read Model of CQRS**: "Set processing for views" like Table Module appears.

## ✅ Representative Frameworks

Few frameworks adopt Table Module directly, but it appears naturally in contexts like:

- **Django ORM (Set Operations)**
  Django's QuerySet is rich in operations handling entire tables, making Table Module-like usage easy.

- **ETL / DWH Pre-processing (Airflow / Spark Pre-processing)**
  Structure grouping set logic into one module matches Table Module design.

- **Batch Processing Systems (Java/Spring Batch, Node.js scripts)**
  When writing aggregation / bulk update processing by table, it naturally becomes Table Module.

## ✅ Design Patterns Supporting This Style

- **Facade**
  Acts as an "entry point" for set processing (aggregation / search / bulk update).

- **Template Method**
  Useful when unifying common steps in aggregation or reporting processing.

- **Strategy**
  Used when switching aggregation algorithms.

- **Iterator**
  Useful when processing large amounts of data in a stream-like manner.

## ✅ Summary

Table Module is a **data-centric style for aggregating collective logic in one place.**

Complementing Active Record:

- Single Row Operation → Active Record
- Collective Operation → Table Module

This division often functions well,
and is particularly effective in practical CRUD + Aggregation apps.
