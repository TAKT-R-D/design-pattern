# Data-centric Structural Styles

## ✅ Overview

This family deals with **styles that design applications centered on database tables and record structures.**

- Idea of "1 Table = 1 Class (or 1 Model)".
- Business logic is mainly placed near data structures or in service functions.
- RDB table design comes strongly to the fore rather than object-oriented domain models.

Representative styles are the following three:

- **[Active Record](./active-record.md)**
- **[Table Module](./table-module.md)**
- **[Anemic Domain Model](./anemic-domain-model.md)**

## ✅ Why This Family Emerged (History & Background)

- RDB and SQL became the center of enterprise systems, and "Database Design = System Design" was often considered the norm.
- Need to lower the cost of Object-Relational Mapping (ORM).
- With the spread of Web frameworks (especially Rails), the style of "Model Class = Table Wrapper" became widespread.
- Design prioritizing **speed and realistic solutions** over complex object-oriented modeling was required.

## ✅ Problems Addressed

- Want to reduce the effort of table-to-object conversion (O/R Mapping).
- Want to implement CRUD quickly.
- Business logic is not so complex, so expressing it in a form close to tables is not a problem.
- Want to avoid "excessive domain modeling" in small to medium-sized business apps.

## ✅ Styles Belonging to This Family

### ● [Active Record](./active-record.md)

- Assigns 1 class per 1 table.
  - Row = Instance
  - Column = Property
  - Has INSERT / UPDATE / DELETE / SELECT as methods.
- Rails' `ActiveRecord` is a typical example.

### ● [Table Module](./table-module.md)

- A module that groups logic by table.
- Expresses operations on tables as sets (multiple rows) as module functions.

### ● [Anemic Domain Model](./anemic-domain-model.md)

- Structure of "Data Class (Properties only) + Service Class (Behavior)".
- Often treated as an anti-pattern as an "excessive form" of data-centric style.

## ✅ Relationship with Other Families

- Styles that appeared as a natural evolution from **[A. Non-structured / Early (Transaction Script)](../early/index.md)**.
- Often contrasted with **[C. Layered / Domain Model](../layered/index.md)** (Data-centric vs. Domain-centric).
- Has limitations in areas requiring DDD or rich domains, but is a realistic option for CRUD-centric apps.

## ✅ When to Reference

- When full DDD or Hexagonal is too heavy, but you want to build a CRUD app with some order.
- When you want to organize a design assuming a framework like Rails.
- When you want to think about why "Anemic Model" is a problem and where the acceptable line is.

Understanding this family helps to discern the **boundary between "Realistic CRUD Apps" and "Serious Domain Modeling"**.
