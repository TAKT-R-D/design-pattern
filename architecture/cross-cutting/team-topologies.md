# 🧩 Team Topologies

## ✅ Overview

**Approach to systematize team structure and collaboration patterns, and link software architecture with organization design.**

## ✅ Problems Addressed

- Team boundaries and system boundaries do not match, high change cost.
- Communication load increases, development speed decreases.
- Platform and common infrastructure are scattered, operation management becomes chaotic.
- "Shape of team" becomes structural problem hindering architecture.

Team Topologies provides a perspective to **"Treat team structure itself as an architecture element"** for these.

## ✅ Basic Philosophy & Rules

### ● 4 Team Types

1. **Stream-aligned Team (Product / Domain charge)**
   - Continuous development along the stream of business value.
2. **Platform Team**
   - Provide "Internal Platform" for internal developers.
3. **Enabling Team**
   - Support other teams and nurture technical capability.
4. **Complicated Subsystem Team**
   - Charge of special expert area (Optimization / ML / Video processing etc.).

### ● 3 Collaboration Modes

- **Collaboration**: Cooperate closely in short term.
- **X-as-a-Service**: Provide / Use as service.
- **Facilitating**: Capability support / Coaching.

### ● Matching Team Boundary and Architecture Boundary

- Match organization structure and system structure based on Conway's Law.
- Design collaboration patterns with less friction.

## ✅ Suitable Applications

- Products with clear domain division.
- Organizations adopting [Microservices](../topologies/microservices.md) or [Modular Monolith](../topologies/modular-monolith.md).
- Environments requiring maintenance of Platform / Infrastructure.
- Services developed continuously by multiple teams.

## ❌ Unsuitable Cases

- Small-scale products operable by small number of people.
- Corporate culture where organization change is difficult (Rigid organization structure).
- When platform maturity is insufficient and service provision becomes a burden.

## ✅ History (Genealogy / Parent Styles)

- Organizational architecture method evolved from [DevOps](./devops.md) context.
- Systematized under influence of Conway's Law, SRE, Platform Engineering.
- Recently spreading as standard framework for modern organization design.

## ✅ Related Styles

- **[DevOps](./devops.md)**: Cultural/Technical approach eliminating boundary between Dev and Ops.
- **[SRE / SLO](./slo-sre.md)**: Standardization of operational quality.
- **Platform Engineering**: Practical form of Platform Team.
- **[Microservices](../topologies/microservices.md) / [Modular Monolith](../topologies/modular-monolith.md)**: Matching of team boundary and service boundary.

## ✅ Summary

Team Topologies clarifies the message **"Organization structure is architecture"**,  
and provides theory and practice to balance development speed and organizational health through team placement, collaboration modes, and boundary design.
