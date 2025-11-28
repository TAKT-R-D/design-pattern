# 🧩 Transaction Script

## ✅ Overview

**A structural style implementing one process (transaction) as one function/script.**
Simple design of "1 Use Case = 1 Function" for screens or APIs, suitable for small systems.

## ✅ Problems Addressed

Transaction Script has more order than chaos like Big Ball of Mud,
and is often adopted to solve realistic challenges like:

- Want to make something working first.
- Requirements are not complex.
- Domain rules are light, and business logic can be done with "serial procedures".
- Data structure is simple, and internal app "representation" and "DB structure" almost match.
- Want to minimize design cost (short development period).

## ✅ Basic Philosophy & Rules

Transaction Script has the following characteristics:

- Create a function for each processing unit (Use Case / API Handler / Batch Job).
- Business logic is written "serially" inside that function.
- Data access is also often called directly within the function.
- Complex objects like Domain Model are unnecessary.
- Shared logic with other functions is minimized (or should not be increased).

Image of implementation:

```
processOrder()
   → Input Check
   → Inventory Check
   → Payment Call
   → Save Order Record
   → Completion Response
```

## ✅ Suitable Applications

- CRUD-centric simple apps.
- Small admin screens.
- Short-lived products of a few weeks to months.
- Web apps where data model and UI almost match.
- MVP (Minimum Viable Product) for small startups.

## ❌ Unsuitable Cases

- Business logic is complex and cannot be expressed by "procedure sequences".
- Read/Write logic scatters massively.
- Variations of the same process increase.
- State and invariant control is necessary (area where DDD is suitable).
- Products with long-term operation and continuous feature additions.

## ✅ History (Genealogy / Parent Styles)

- Clarified by Fowler's _Patterns of Enterprise Application Architecture_.
- Evolved: Big Ball of Mud → Transaction Script → Layered Architecture.
- "Limits" appeared when scaling from small to medium scale, leading to the emergence of Domain Model / Layered etc.

## ✅ Related Styles

- **[Big Ball of Mud](./big-ball-of-mud.md)** (Even earlier chaos)
- **[Active Record](../data-centric/active-record.md)** ("Evolved form of Transaction Script" in data-centric family)
- **[Classic Layered Architecture](../layered/classic-layered.md)** (Approach to resolve debts of Transaction Script)
- **[Domain Model](../layered/domain-model-layered.md) / DDD** (Effective in complex areas)

## ✅ Representative Frameworks

Transaction Script does not depend on specific frameworks, but
often naturally induces the structure of **"1 Use Case = 1 Function"**.

- **Next.js / Node.js (API Routes / Route Handlers)**

  - Easy to complete Request → Response with a single function.
  - Suitable for small APIs centered on procedural processing.

- **Laravel / Rails (Procedural processing in Controller)**

  - In small CRUD, processing tends to gather in Controller and become Transaction Script.

- **Serverless (AWS Lambda / Cloud Functions)**
  - Since 1 Function = 1 Process, compatibility with Transaction Script is very good.

## ✅ Design Patterns Supporting This Style

Transaction Script itself is a "simple structure requiring almost no patterns", but
the following patterns play partial auxiliary roles.

- **Command**

  - Used when expressing a processing unit (Use Case) as an operation object.
  - Can clarify the "operation" of transaction processing.

- **Template Method**

  - Suitable for abstraction when processing steps are similar between multiple Transaction Scripts.
  - Example: Unifying common pre-processing / post-processing.

- **Strategy**
  - Sometimes used when "replacement points" of processing occur.
  - Basically outside the scope of TS, but appears as assistance during growth.

## ✅ Summary

Transaction Script is  
**The optimal "realistic and practical" structural style for simple applications.**

However, in products that continue to grow,  
logic duplication, bloating, difficulty in change, and difficulty in testing expand rapidly.

Therefore, it can be said to be a style that should be used with the understanding that it "does not scale".
