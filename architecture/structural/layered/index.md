# 🧩 C. Layered & Domain-centric Styles

## ✅ Overview

This family covers styles that **divide the application interior into layers and establish rules for dependency directions**.

- Division into UI / Application / Domain / Infrastructure, etc.
- Enhancing changeability and testability by controlling dependencies between layers.
- A genealogy that has evolved into more "domain-centric" styles according to the complexity of the domain.

Representative styles can be broadly classified into the following three:

- **Classic Layered** (3-tier / n-tier architecture)
- **Domain Model Layered** (DDD/Fowler-style Layered)
- **Dependency-rule-based Layered**
  - Hexagonal / Onion / Clean, etc.

## ✅ Why this Family Emerged (History/Background)

- Breaking away from "ad-hoc structures" like Big Ball of Mud / Transaction Script.
- Low maintainability of code where UI / logic / data access are mixed.
- Need for structures that can withstand team development, long-term operation, and framework updates.

In that flow:

1. **Classic Layered** became the first answer of "first, divide into layers".
2. In more complex domains, **Domain Model Layered** developed as a domain-centric layered structure.
3. Finally, it evolved into styles represented by **Hexagonal / Onion / Clean**, which are **strongly conscious of dependency direction and domain protection**.

## ✅ Problems Solved

Layered styles mainly address the following problems:

- Mixture of UI, application logic, domain logic, and infrastructure.
- Code strongly dependent on frameworks and DBs.
- Difficulty in writing unit tests.
- Having to touch the entire system every time specifications change.

Especially in Domain Model styles (Domain Model Layered and later):

- Motivation to **explicitly express business rules as domain models**.
- Motivation to **protect the domain** from frameworks and external systems.

becomes stronger.

## ✅ Styles Belonging to this Family

### ● Classic Layered

- The most widely known layered structure, divided into UI / Application / Domain / Infrastructure, etc.

### ● Domain Model Layered

- A style that explicitly defines the Domain layer and places the object-oriented domain model at the center.

### ● Dependency-rule-based Layered

- Dependencies are allowed only to inner layers.
- Interfaces and infrastructure are placed outwards, centering on the domain.
- Hexagonal / Onion / Clean, etc., are included in this group.

## ✅ Relationship with Other Families

- The "mainstream" that appeared to solve the confusion held by **A/B Families (Early / Data-centric)**.
- **UI Families (MVC/MVVM, etc.)** can be seen as a subdivision of the "Presentation Layer" within the layered structure.
- Often used in combination with **Reactive / Flow Families** (e.g., connecting layers with events).

## ✅ When to Reference

- Systems where domain complexity is medium to high and long-term operation is a prerequisite.
- When the lifespan of the domain is longer than that of the framework or database.
- When you want to emphasize testability and changeability.

This family often becomes the **"default candidate" for modern business systems**,
and is also important as a reference point when considering other styles.
