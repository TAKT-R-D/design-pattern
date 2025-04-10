# Summary

## Pattern Comparison

| Pattern                   | When to Apply                       | Strengths                          | Caveats                         | Common Use Cases                         |
| ------------------------- | ----------------------------------- | ---------------------------------- | ------------------------------- | ---------------------------------------- |
| `Strategy`                | Conditional branching               | High flexibility and testability   | Can lead to many small classes  | Discount processing, algorithm switching |
| `State`                   | When state transitions are involved | Clear state separation             | Overkill if states are minimal  | UI modes, business workflows             |
| `Command`                 | When command history is needed      | Supports Undo/Redo                 | Command objects may proliferate | Text editors, operation tracking         |
| `Chain of Responsibility` | Linear flow of conditional logic    | Great separation and extensibility | Risk of unhandled cases         | Validation, middleware chains            |
| `Interpreter`             | Complex, configurable conditions    | Extracts logic as external rules   | Can become complex to implement | Rule engines, DSLs, search expressions   |

## Choosing the Right Pattern

- Use `Strategy` for simple condition-based behavior switching
- Choose `State` when the logic depends on internal state transitions
- Apply `Command` to encapsulate operations and enable reusability
- Use `Chain of Responsibility` when you want to process handlers in sequence
- Go with `Interpreter` when conditions are dynamic and rule-based

## Team Discussion Snippets

- “This condition block looks messy—let’s extract it into a `Strategy` so it’s easier to test.”
- “Since the behavior depends on state, wouldn’t a `State` pattern make things clearer?”
- “We’re repeating similar logic—why not wrap it as `Command` and add undo support?”
- “These checks feel sequential—maybe a `Chain of Responsibility` fits better here?”
- “If the logic flow is fixed, chaining handlers sounds ideal using `Chain of Responsibility`.”
- “This if-tree could be declared as rules—we might want to implement an `Interpreter` here.”
