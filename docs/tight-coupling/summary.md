# Summary

## Pattern Comparison

| Pattern    | When to Apply                             | Strengths                   | Caveats                                     | Common Use Cases                             |
| ---------- | ----------------------------------------- | --------------------------- | ------------------------------------------- | -------------------------------------------- |
| `Observer` | When notification targets may change      | Loosely coupled, extensible | Hard to manage order and dependencies       | Events, UI updates, webhook notifications    |
| `Mediator` | When multiple components interact         | Centralized coordination    | Mediator may become overly responsible      | UI components, complex business workflows    |
| `DI`       | When testability or replaceability is key | Flexible, test-friendly     | Requires lifecycle/configuration management | Service layer, external dependency injection |

## Choosing the Right Pattern

- Want extensible notifications? → Use `Observer`
- Need centralized control over many services? → Use `Mediator`
- Need testability and loose coupling? → Use `Dependency Injection (DI)`

## Team Discussion Snippets

- “OrderService is calling too many services directly—let’s decouple with `Observer`.”
- “There are too many services interacting—`Mediator` could help centralize the control.”
- “We might want to swap this service for a mock—`DI` would make testing much easier.”
