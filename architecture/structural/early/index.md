# 🧩 A. Non-structured / Early Structural Styles

## ✅ Overview

This family deals with early structural styles born around **"making something that works for now"**, in an era when the concept of software architecture was not yet clear.

Business logic, data access, and UI responsibility separation were not considered,
code was often jumbled between files and functions,
and speed was prioritized over structure.

Representative styles (or anti-patterns) include:

- **Big Ball of Mud**
- **Transaction Script**

## ✅ Why This Family Emerged (History & Background)

- Small programs and scripts were central, and the need for long-term maintenance and expansion was low.
- Individual development was more common than team development, and the necessity for structuring was still weak.
- Era before design patterns and layered architectures were established.
- It was important to create something working that met requirements in the "shortest" time.

## ✅ Problems Addressed

Early styles were actually **inevitabilities matching constraints** rather than "solving many challenges".

- Cannot spend time on design (deadlines are short).
- App is small and complexity is low.
- Immediate output was required rather than structuring.

As a result, there is an aspect that led to structures later treated as anti-patterns.

## ✅ Styles Belonging to This Family

### ● Big Ball of Mud

- State where design hardly exists and features are added haphazardly.
- Responsibilities are jumbled, dependencies are confused, and changes become extremely difficult.
- Representative anti-pattern.

### ● Transaction Script

- Writes each process (transaction) as a script or function.
- Effective for small scale, but duplication and logic dispersion increase rapidly when complicated.
- Famous for naming by Fowler.

## ✅ Relationship with Other Families

- **B. Data-centric (Active Record, etc.)** developed as an extension of Transaction Script.
- **C. Layered** appeared to solve problems of Big Ball and Transaction Script.
- Can be understood as the **"primitive form" of all structural styles**.

## ✅ When to Reference

- When making small scripts or temporary tools.
- As a "bad example" to avoid anti-patterns.
- As a foundation to understand why Layered, DDD, and Hexagonal are needed.
