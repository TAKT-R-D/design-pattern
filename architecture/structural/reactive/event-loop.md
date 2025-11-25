# 🧩 Event Loop Based Structure

## ✅ Overview

**A structural style where one (or few) event loops process asynchronous I/O and callbacks/handlers in order.**
Representative in Node.js and browser JavaScript execution environments.

## ✅ Problems Addressed

- Scalability limit of synchronous I/O model creating threads per request.
- Thread context switch and lock costs.
- Handling massive connections (C10K problem, etc.).

Event Loop model realizes high throughput by:

> "Handling many connections with asynchronous I/O and event loop instead of increasing threads."

## ✅ Basic Philosophy & Rules

### ● Event Loop

- Loop that takes events one by one from the event queue and executes corresponding handlers.

### ● Asynchronous I/O

- I/O operations (Network, File, etc.) are issued asynchronously.
- Event is stacked in queue upon completion, and processed in the next loop.

### ● Single Thread Model (Often)

- Design that minimizes use of locks and shared memory.
- Expresses asynchrony with Callback / Promise / async/await instead.

## ✅ Suitable Applications

- Web servers handling many client connections.
- Chat / Game / Real-time Web apps.
- Lightweight API servers.

Features:

- Strong in I/O bound processing.
- Low memory consumption, easy to scale with few threads.

## ❌ Unsuitable Cases

- Apps containing many CPU bound heavy calculations.
- Long blocking processing (blocks the loop).

Such processing needs to be escaped to workers (separate threads/processes).

## ✅ History (Genealogy / Parent Styles)

- Development from GUI event loop (main thread).
- Combined with asynchronous I/O models (epoll, kqueue, etc.) to server side.
- Widely spread with event-driven server platforms like Node.js.

## ✅ Related Styles

- **Actor Model**: Message-driven, but often uses Event Loop for implementation.
- **Reactive Streams**: Abstraction of event stream processing.
- **EDA / Pub-Sub**: Event-driven structure of the entire system.

## ✅ Representative Frameworks

Event Loop based structure is widely adopted in platforms centered on asynchronous I/O.

- **Node.js**
  Most representative Event Loop implementation. Single thread + Asynchronous I/O model is core.

- **Browser (JavaScript Runtime)**
  `setTimeout` / `Promise` / `fetch` etc. all operate on Event Loop.

- **Deno / Bun (JavaScript Runtime)**
  Adopts event loop model similar to Node.js.

- **High Performance Servers like Nginx / Envoy**
  Realize high throughput by event loop + asynchronous I/O inside core.

## ✅ Design Patterns Supporting This Style

Event Loop itself is a low-level execution model, but strongly linked with the following patterns.

- **Observer**
  Basic of notification model: Event firing → Handler execution.

- **Command**
  Used when treating asynchronous callbacks or processing as "operation objects".

- **Mediator**
  Sometimes used as a mechanism to coordinate multiple events/handlers.

- **Iterator**
  Useful when processing asynchronous streams sequentially (AsyncIterator etc.).

## ✅ Summary

Event Loop based structure is a style realizing high throughput with simple ideas:

- Asynchronous I/O
- Event Queue
- Single (or few) Loops

It is good to consider as **one of the "default candidates"** when designing I/O bound servers.
