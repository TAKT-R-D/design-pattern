# 🧩 Anemic Domain Model

## ✅ Overview

A **"Anemic" domain model where domain objects hold only data (properties) and business logic (behavior) is scattered in the service layer.**
Treated as a typical anti-pattern in DDD.

## ✅ Problems Addressed (Surface Reasons)

Anemic Domain Model is born as a result of seeking "simplicity" like:

- Want domain objects to be **pure data structures**.
- Want to **group business logic in service classes**.
- Want to handle simple objects like DTOs.
- Good compatibility with ORMs and frameworks (can be handled as POJO/POCO).

**However**, these merits often create the following problems:

- Business rules scatter across multiple services.
- Guaranteeing invariants is difficult.
- "Which service is responsible for what" becomes ambiguous.

## ✅ Basic Philosophy & Reality

Typical Anemic Domain Model structure:

### ● Domain Class (Entity / Value Object)

- Holds only properties.
- Methods are only getter/setter level.
- Does not hold state transition logic or rules.

### ● Service Class (Domain Service / Application Service)

- Takes domain model as argument and changes state.
- Invariants, rules, and calculation logic are scattered.
- Logic tends to duplicate between services.

As a result, **the domain model becomes "just data", and consistency is easily broken.**

## ✅ Suitable Applications

Although an "anti-pattern", it can be a realistic choice in scenes like:

- Domain rules are simple and no complex state transitions exist.
- Minimum business apps centered almost entirely on CRUD.
- Short deadlines, need features working quickly.
- Framework strongly assumes data-centric design (e.g., Rails).

→ **Low complexity is a prerequisite.**

## ❌ Unsuitable Cases

It surely breaks down in apps like:

- Domains where state transitions and invariants are important.
- Areas requiring high consistency (Finance, Payment, Inventory Management, Logistics, etc.).
- Many reusable complex business logics.
- Products with frequent specification changes in long-term operation.

Typical problems:

- Don't know where logic is written.
- Hard to write tests (Service layer bloats).
- Bugs recur easily, scope of fix is hard to read.

## ✅ History (Genealogy / Parent Styles)

- Structure naturally generated from Data-centric (Active Record / Table Module) designs.
- Evans raised the issue as "Anemic Model" in the context of DDD.
- Rich Domain Model and DDD approaches evolved as countermeasures to this problem.

## ✅ Related Styles

- **Active Record / Table Module**
  Data-centric relative styles, prone to becoming Anemic Models.
- **Domain Model (Rich Domain)**
  "Opposite" approach solving the Anemic Model problem.
- **Service Layer**
  Closely related to Anemic Model (also a cause of excessive logic concentration).

## ✅ Representative Frameworks

Anemic Domain Model is not "adopted by specific frameworks", but is a **structure that "naturally occurs" easily in frameworks with strong data-centric design.**

- **Rails / Laravel (Active Record centric)**
  Logic cannot be fully loaded on models and tends to scatter to the service layer.

- **Django**
  With MVT structure, domain logic tends to lean towards view/service.

- **Environments where ORM assumes POJO/POCO (Java/.NET)**
  Entities tend to become data holders only, and domain logic often escapes outside.

## ✅ Design Patterns Supporting This Style

Anemic Domain Model is not a "recommended structure" as a pattern, but the following patterns appear auxiliarily.

- **Command**
  Used to organize by operation unit when complex logic accumulates in the service layer.

- **Strategy**
  Used to organize replaceable logic since domain logic gathers on the service side.

- **Template Method**
  Used when there is a need to unify overlapping processing steps in multiple services.

## ✅ Summary

Anemic Domain Model is often adopted because it is "easy to understand" and "easy to implement", but
**It is never suitable for complex domains and risks accelerating structural collapse.**

Important thing is:

> Always ask the question:
> "Is the complexity of this app's domain low enough for the simplicity of Anemic Model?"

If there is any sign of increasing complexity,
more serious structural styles like Domain Model / DDD / Layered / Hexagonal should be considered.
