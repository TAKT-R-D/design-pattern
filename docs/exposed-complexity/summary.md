---
pagination_label: Exposed Complexity Summary
---

# Summary

## Pattern Comparison

| Pattern    | When to Apply                               | Strengths                                            | Caveats                                         | Common Use Cases                        |
| ---------- | ------------------------------------------- | ---------------------------------------------------- | ----------------------------------------------- | --------------------------------------- |
| `Facade`   | When you want to consolidate complex steps  | Provides a simple interface for external callers     | Can overly hide internal structure              | Service orchestration, domain workflows |
| `Proxy`    | When you want to inject behavior into calls | Adds functionality without changing call semantics   | May introduce unnecessary complexity            | Authorization, caching, logging         |
| `Iterator` | When iteration logic is repeated or exposed | Abstracts collection traversal, enforces consistency | Overhead may be unnecessary for small use cases | Task lists, paging, structure traversal |

## Choosing the Right Pattern

- Use `Facade` to wrap complex procedures behind a simplified interface.
- Use `Proxy` to intercept or augment behavior without changing the public API.
- Use `Iterator` when traversal logic is repeated or tightly coupled with clients.

Note: `Iterator` is often used **alongside `Facade` or `Proxy`**  
to unify traversal logic within abstracted control flow.

## Team Discussion Snippets

- “This process exposes everything—auth, logging, etc. Let’s wrap it in a `Facade` for clarity.”
- “We want to keep the call the same but insert logging and permissions—sounds like a `Proxy` use case.”
- “Let’s define a clear interface here so changes won’t ripple outward.”
- “These repeated `for` loops are cluttering things—let’s encapsulate them using an `Iterator`.”
