---
pagination_label: Scattered Concerns Summary
---

# Summary

## Pattern Comparison

| Pattern     | When to Apply                            | Strengths                               | Caveats                                | Common Use Cases                  |
| ----------- | ---------------------------------------- | --------------------------------------- | -------------------------------------- | --------------------------------- |
| `Singleton` | When a shared instance is required       | Centralized state, easy access          | Can complicate testing and mocking     | Logger, configuration, caching    |
| `Facade`    | When simplifying multiple internal calls | Clean API surface, hides internal logic | Facade may grow too complex internally | Subsystem access, logging wrapper |

## Choosing the Right Pattern

- For unified access to shared utilities → `Singleton`
- To simplify multiple operations into one call → `Facade`
- Consider combining with `Dependency Injection (DI)` or `Adapter` to improve testability and flexibility

## Team Discussion Snippets

- “We’re calling Logger directly everywhere—let’s make it a `Singleton`.”
- “Logging and config access could be wrapped in a `Facade` for cleaner usage.”
- “If we’re using `process.env` all over, let’s centralize it with a `Config` class.”
