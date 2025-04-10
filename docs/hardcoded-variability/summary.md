# Summary

## Pattern Comparison

| Pattern           | When to Apply                                    | Strengths                                 | Caveats                                  | Common Use Cases                       |
| ----------------- | ------------------------------------------------ | ----------------------------------------- | ---------------------------------------- | -------------------------------------- |
| `Template Method` | Common structure with slight variations          | Enforces structure, easy to share         | Inherits from base class (less flexible) | Save operations, batch jobs            |
| `Strategy`        | Main goal is to switch logic dynamically         | Highly flexible and testable              | Can lead to many small classes           | Notifications, calculation logic       |
| `Bridge`          | Multiple dimensions of variation                 | Separates abstraction from implementation | Can overcomplicate the design            | UI × Output format, renderers          |
| `Flyweight`       | Repeated structures with shared state            | Reduces memory use, lightweight           | Requires external state management       | Icons, seats, text rendering           |
| `Prototype`       | Copy from a base template and modify differences | Easy duplication and reuse                | Be cautious with side effects on clone   | UI components, notifications, settings |

---

## Choosing the Right Pattern

- Want to isolate just the differing parts → `Template Method`
- Need flexible switching of logic → `Strategy`
- Multiple axes of variation → `Bridge`
- Repeating structures with shared data → `Flyweight`
- Want to clone a base and apply changes → `Prototype`

## Team Discussion Snippets

- “The differences embedded in this common process could be extracted as hooks using `Template Method`.”
- “This logic fits nicely into a `Template Method` — we just implement the variable parts.”
- “If you want to swap behavior flexibly, `Strategy` might be a better fit.”
- “Extracting this into `Strategy` lets us switch logic dynamically.”
- “The notification type and content both vary — this calls for a `Bridge` to separate concerns.”
- “Two dimensions of change? Sounds like a good case for `Bridge` to keep things clean.”
- “We're creating the same icons over and over — consider using `Flyweight` to share them.”
- “This notification structure could benefit from `Prototype`. Clone the base and customize.”
