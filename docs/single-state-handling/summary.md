---
pagination_label: Single State Handling Summary
---

# Summary

## Pattern Comparison

| Pattern    | When to Apply                                 | Strengths                                            | Caveats                                  | Common Use Cases                         |
| ---------- | --------------------------------------------- | ---------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `State`    | When behavior varies based on internal state  | Clear separation of responsibilities and transitions | Can be overkill with few states          | Step flows, workflows, UI mode switching |
| `Strategy` | When behavior changes based on external input | Easy to swap logic                                   | State transition logic handled elsewhere | Algorithm switching, discount strategies |
| `Command`  | When focusing on operations, not states       | Easy to manage execution history, Undo/Redo          | Not ideal for state transitions          | Batch processing, queues, operation logs |

## Choosing the Right Pattern

- If conditionals increase based on internal state → consider `State`
- If you only need to swap behavior without transitions → use `Strategy`
- If the focus is on actions and their history → `Command` is a better fit

## Team Discussion Snippets

- “This behavior changes with state—let’s extract it using the `State` pattern to improve testability.”
- “We’re just switching logic based on inputs—`Strategy` might be a cleaner choice.”
- “Since we’re more focused on command execution and history, `Command` could be a better abstraction.”
