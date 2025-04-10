# Summary

## Pattern Comparison

| Pattern            | When to Apply                              | Strengths                            | Caveats                                     | Common Use Cases                        |
| ------------------ | ------------------------------------------ | ------------------------------------ | ------------------------------------------- | --------------------------------------- |
| `Factory Method`   | When choosing implementations dynamically  | Great extensibility                  | Requires subclass-based design              | Flexible creation of simple objects     |
| `Abstract Factory` | When generating related objects as a group | Enables consistent environment setup | Slightly more complex structure             | UI configuration, environment switching |
| `Builder`          | When building objects in multiple steps    | Flexible and clear construction      | Overkill for simple objects                 | Multi-stage initialization scenarios    |
| `Singleton`        | When sharing a single instance globally    | Shared state, high reusability       | Can hinder testing and dependency injection | Logger, configuration, cache            |

## Choosing the Right Pattern

- Frequent use of `new` scattered across the code is a sign of design issues
- Centralizing instantiation improves testability, extensibility, and maintainability
- Choose the pattern based on object complexity and relationships among instances

## Team Discussion Snippets

- “There’s too much `new` scattered around—let’s manage this with a `Factory`.”
- “Since the logger is shared, we might want to make it a `Singleton`.”
- “This object has a complex set of properties—`Builder` could make it clearer.”
- “If we need to switch dependencies per environment, `Abstract Factory` might fit.”
