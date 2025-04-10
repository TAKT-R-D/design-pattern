# Summary

## Pattern Comparison

| Pattern   | When to Apply                              | Strengths                                          | Caveats                                    | Common Use Cases               |
| --------- | ------------------------------------------ | -------------------------------------------------- | ------------------------------------------ | ------------------------------ |
| `Command` | When you need to record and manage actions | Supports Undo/Redo, allows re-execution of actions | Responsibility for state is on the command | Text editors, batch operations |
| `Memento` | When full state snapshots are needed       | Easy state restoration, encapsulated and safe      | Snapshot size can become heavy             | Form restoration, game saves   |

## Choosing the Right Pattern

- Use `Command` when you need to record _actions_ and enable replay or reversal.
- Use `Memento` when you need to capture and restore _entire states_.
- Both can be combined to manage “action history + state snapshots” effectively.

## Team Discussion Snippets

- “We need to restore this operation—let’s introduce a `Command` history.”
- “If we’re saving the entire state, `Memento` might be simpler and safer.”
- “Use `Command` for action history and rollback; use `Memento` to capture full state at key points.”
