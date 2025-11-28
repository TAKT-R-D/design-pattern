---
pagination_label: Forced Compatibility Summary
---

# Summary

## Pattern Comparison

| Pattern   | When to Apply                                  | Strengths                                   | Caveats                                   | Common Use Cases                               |
| --------- | ---------------------------------------------- | ------------------------------------------- | ----------------------------------------- | ---------------------------------------------- |
| `Adapter` | When the existing interface is incompatible    | Provides a unified API to the caller        | Adapter can grow complex with heavy logic | External APIs, legacy libraries, compatibility |
| `Facade`  | When internal processes are too complex        | Simplifies APIs and combines multiple calls | Structure differs from the real logic     | UI-facing APIs, subsystem integration          |
| `Proxy`   | When inserting access control or caching logic | Flexible interception (e.g. lazy, logging)  | Doesn’t transform behavior                | Caching, authentication, request tracing       |

## Choosing the Right Pattern

- Connecting to a legacy or incompatible interface? → Use `Adapter`
- Simplifying complex API calls? → Use `Facade`
- Want to insert extra behavior (auth, cache)? → Use `Proxy`

## Team Discussion Snippets

- “This old API is unavoidable—let’s wrap it with an `Adapter`.”
- “We should abstract it behind a unified interface so we can switch implementations later.”
- “Calling `.printText()` directly everywhere feels risky—let’s add a transformation layer.”
