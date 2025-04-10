# Summary

## Pattern Comparison

| Pattern           | When to Apply                                    | Strengths                                              | Caveats                                   | Common Use Cases                          |
| ----------------- | ------------------------------------------------ | ------------------------------------------------------ | ----------------------------------------- | ----------------------------------------- |
| `Template Method` | When the overall process is fixed but steps vary | Defines a consistent structure, highlights differences | Inheritance-based; less flexible          | Save operations, batch processing         |
| `Strategy`        | When switching core logic                        | Highly flexible, easy to test                          | May lead to many small classes            | Notifications, billing                    |
| `Decorator`       | When adding additional behavior incrementally    | Composable and reusable                                | Too many layers can reduce readability    | Logging, validation                       |
| `Visitor`         | When multiple operations need to be applied      | Adds new behavior without changing data structure      | Can get complex with many operations      | Export formats, AST processing            |
| `Prototype`       | When duplicating similar objects                 | Easy reuse and modification of copies                  | Requires careful `clone()` implementation | Configs, notification templates, UI parts |

## Choosing the Right Pattern

- Repeated logic patterns? → Start with `Template Method`
- Shared workflow with small differences → `Template Method`
- Focused on switching logic → `Strategy`
- Want to layer behavior without altering core logic → `Decorator`
- Want to separate data structure from behavior → `Visitor`
- Duplicating similar objects with minor changes → `Prototype`

## Team Discussion Snippets

- “This looks nearly identical—let’s use `Template Method` and isolate the differences.”
- “If we just want to swap out the logic, `Strategy` will give us more flexibility.”
- “Need to add logging? Wrapping it with a `Decorator` will keep it modular.”
- “We’re outputting to different formats—`Visitor` can cleanly separate that logic.”
- “Using variations of the same object? A `Prototype` with cloning will help streamline this.”
