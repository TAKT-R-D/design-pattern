# 🧩 Big Ball of Mud

## ✅ Overview

A **huge spaghetti structure resulting from the accumulation of haphazard implementations** where structure has collapsed.
A representative anti-pattern in software architecture.

## ✅ Problems Addressed

Actually, Big Ball of Mud is **not designed to solve problems, but is a structure born from the inevitability of circumstances.**

Typical backgrounds include:

- Need to make something working ASAP.
- Culture prioritizing implementation over design.
- No coordination between teams, anyone can write code anywhere.
- Absence of architects, or design rules are not observed.
- Feature additions are haphazard, refactoring cannot keep up.

## ✅ Basic Philosophy & Characteristics (= Signs of Anti-pattern)

Big Ball of Mud has the following characteristics:

- **Ambiguous Responsibilities**: Business logic, data access, and UI are intertwined.
- **Confused Dependencies**: Dependency directions between modules are not unified.
- **Explosion of Duplicate Code**: Copy & Paste occurs frequently.
- **Difficult to Change**: Small fixes break other places.
- **Fear of New Development**: No means to add features without breaking existing structure.
- **Untestable**: Test units are huge or too tightly coupled to write.

## ✅ Suitable Applications

Rather than "suitable", **there are situations where it holds up:**

- Ultra-small one-off scripts.
- Code guaranteed to be discarded in a few days.
- Simple tools running with only one developer.

## ❌ Unsuitable Cases

Unsuitable for almost all long-term operation products:

- Medium to large systems.
- Apps with frequent specification changes.
- Products with continuous team development.
- Products requiring quality or observability.
- Domains used from multiple UIs / multiple services.

## ✅ History (Genealogy / Parent Styles)

- Primitive form born "naturally" in the dawn of software architecture.
- Organized as an anti-pattern by Fowler and other authors.
- Later, Layered Architecture and DDD evolved aiming for "De-Big Ball".

## ✅ Related Styles

- **[Transaction Script](./transaction-script.md)** (Same early family, milder chaos)
- **[Classic Layered Architecture](../layered/classic-layered.md)** (First systematic approach to Big Ball problems)
- **[Hexagonal](../layered/dependency-rule-layered/hexagonal.md) / [Onion](../layered/dependency-rule-layered/onion.md) / [Clean Architecture](../layered/dependency-rule-layered/clean.md)** (Evolved forms strongly seeking separation from external dependencies)

## ✅ Summary

Big Ball of Mud is not a "bad way of writing code", but  
**A structure as a result of visualizing situations where design did not hold up.**

Understanding this style becomes the foundation for understanding  
why Modern Architectures (Layered / DDD / Hexagonal) exist and what they tried to solve.
