---
pagination_label: God Object Summary
---

# Summary

## Pattern Comparison

| Pattern     | When to Apply                              | Strengths                                     | Caveats                                | Common Use Cases                     |
| ----------- | ------------------------------------------ | --------------------------------------------- | -------------------------------------- | ------------------------------------ |
| `Facade`    | When you want to encapsulate complex logic | Provides a simple interface                   | Can blur responsibilities if overused  | APIs, domain services, system façade |
| `Strategy`  | When switching algorithms or behaviors     | Excellent extensibility and testability       | May lead to many small classes         | Discount strategies, sorting logic   |
| `State`     | When behavior depends on object state      | Explicitly separates state and behavior       | Overengineering if states are few      | Workflow, UI modes, state machines   |
| `Composite` | When working with hierarchical structures  | Simplifies recursion and provides flexibility | Hard to manage in very deep structures | Menus, org charts, trees             |
| `Iterator`  | When custom collection traversal is needed | Standardizes and abstracts traversal          | Overkill for simple arrays             | Custom collections, tree traversal   |

## Choosing the Right Pattern

- Suspect a **God Object** when a class grows too large and handles too much
- The key is to **clearly separate responsibilities** into smaller classes:
  - Separate **processing logic** using `Facade` or `Strategy`
  - Offload **state control** with the `State` pattern
  - Structure **hierarchical data** using `Composite`
  - Abstract **collection traversal** using `Iterator`
- It’s not just about having many methods—**focus on which responsibilities are bloated**

## Team Discussion Snippets

- "Isn't this class doing too much? Let's break it down with a `Facade`."
- "Since behavior depends on state, we could extract it using the `State` pattern."
- "This logic varies by case—`Strategy` would make it more testable."
- "This looks like a nested structure—`Composite` could make the recursion cleaner."
- "Too many raw loops over this array—how about introducing an `Iterator`?"
