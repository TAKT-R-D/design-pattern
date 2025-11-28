# 🧩 Active Record

## ✅ Overview

A **data-centric style** that is extremely intuitive and easy to implement:
**"1 Table = 1 Class, 1 Row = 1 Instance"**.
Uses the database structure directly as the application model.

## ✅ Problems Addressed

Active Record primarily wanted to solve practical challenges such as:

- Reducing the effort of O/R Mapping (Table ⇄ Object).
- Automating/Abstracting typical CRUD patterns.
- Enabling data manipulation as methods of model classes.
- Developing fast using frameworks.

Especially with the success of ActiveRecord in Rails,
it became the **de facto standard for rapid development**.

## ✅ Basic Philosophy & Rules

### ● Correspondence between Table and Class

- Class Name → Table Name
- Property → Column
- Instance → Row

### ● Row-level Operations (Instance Methods)

- `save`
- `update`
- `destroy`

### ● Set-level Operations (Class Methods)

- `find`
- `where`
- `order`

### ● Aggregation of Lightweight Business Logic

- Validation
- Simple state checks
- Simple conditional branching

**As a result:**
Data structure, persistence, and simple behaviors are **aggregated in 1 class**.

## ✅ Suitable Applications

Active Record shines in scenarios like:

- CRUD-centric apps
- Admin screens
- Management dashboards
- Business systems with "simple states" like inventory management
- Web apps where frontend and DB structure correspond straightforwardly
- MVP (Minimum Viable Product)

High speed and low learning cost are very significant strengths.

## ❌ Unsuitable Cases

Active Record tends to break down in apps like:

- Domains with **complex business rules**.
- When one table has different meanings in multiple contexts.
- When behaviors (business logic) increase massively.
- Complex apps integrating with external services or multiple data sources.
- When invariants and state transitions need strict management.

→ Logic scatters into service layers and controllers,
tending to become an **[Anemic Domain Model](./anemic-domain-model.md)**.

## ✅ History (Genealogy / Parent Styles)

- Patternized in Fowler's _Patterns of Enterprise Application Architecture_.
- Spread globally with Rails' ActiveRecord implementation.
- Natural evolution of Transaction Script style.
- Iconic existence of data-centric design.

## ✅ Related Styles

- **[Table Module](./table-module.md)**  
  Style grouping operations on sets (entire tables).
- **[Anemic Domain Model](./anemic-domain-model.md)**  
  Anti-pattern that occurs when data-centric style goes too far.
- **[Domain Model](../layered/domain-model-layered.md) / DDD**  
  Opposite style for complex domains.

## ✅ Representative Frameworks

- **Ruby on Rails (ActiveRecord)**
  The most famous implementation of the Active Record pattern.
  The philosophy of 1 Class = 1 Table, 1 Instance = 1 Row takes shape directly.

- **Laravel (Eloquent ORM)**
  Active Record implementation close to Rails.
  Optimized for data-centric / rapid development, structural features are similar to Rails.

- **Django (Partially similar)**
  Django ORM leans towards Data Mapper, but for lightweight logic and simple CRUD, it is often used in an Active Record way.

## ✅ Design Patterns Supporting This Style

Active Record itself is a Fowler pattern, but internally the following are used auxiliarily.

- **Template Method**
  Unifies persistence processing steps (Validation → Save → Callback).

- **Strategy**
  Used when switching validation or simple business rules.

- **Proxy**
  Appears in lazy loading and association loading.

- **Observer**
  Mechanism to fire hooks (callbacks) upon model changes.

- **Command**
  Used when expressing "single operations" like Transaction Scripts.

## ✅ Summary

Active Record can be evaluated as:

- **Very productive and realistic for simple CRUD apps.**
- **Does not scale and easily breaks down for complex domains.**

Therefore, the most important question is:

> Is this app complex enough to exceed the "limits of Active Record"?

If signs of complexity begin to appear,
migration to [Domain Model](../layered/domain-model-layered.md), [Layered](../layered/index.md), [Hexagonal](../layered/dependency-rule-layered/hexagonal.md), etc. should be considered.
