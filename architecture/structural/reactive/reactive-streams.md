# 🧩 Reactive Streams

## ✅ Overview of this Style

**A specification/style that standardizes "stream processing + backpressure" when handling asynchronous streams (data flows).**

## ✅ Problems Solved

- Asynchronous stream processing varies between libraries (Observable / Future / Promise, etc.).
- Speed difference between fast producers and slow consumers (backpressure problem).
- Complexity in stream composition, error handling, and cancellation.

Reactive Streams was proposed as:

> "A common protocol for handling asynchronous streams safely and consistently."

## ✅ Basic Philosophy and Rules

### ● Publisher / Subscriber / Subscription / Processor

- **Publisher**: The side that emits data.
- **Subscriber**: The side that subscribes to data.
- **Subscription**: Manages the subscription relationship (request quantity, cancellation, etc.).
- **Processor**: Intermediate processing that behaves as both a Publisher and a Subscriber.

### ● Backpressure

- The Subscriber notifies, for example via `request(n)`,  
  "I can process this much right now."
- The Publisher does not unilaterally send more than that amount.

This protocol makes it easier to ensure:

- Composition of stream processing.
- Stability under high load.

## ✅ Suitable Applications

- Event stream processing (messaging, logs, sensor information).
- Web / API servers that make heavy use of asynchronous processing.
- Internal implementation of inter-microservice communication (asynchronous message-based).

## ❌ Unsuitable Cases

- Applications where the processing flow is simple and normal synchronous processing is sufficient.
- Small-scale systems where asynchronous streams rarely appear.

Adopting Reactive Streams increases the abstraction layer, so  
its value emerges in domains where "streams are the main actor".

## ✅ History (Genealogy / Parent Styles)

- Emerged from the context of Reactive Programming.
- Reactive Streams specification for JVM, ReactiveX family, etc.
- Often discussed in conjunction with the Reactive Manifesto and Reactive System design.

## ✅ Related Styles

- **[Flow / Pipeline](../flow/index.md)**: Combined with flow design of stream processing.
- **[Event Loop](./event-loop.md) / [Actor Model](./actor-model.md)**: Used as a foundation for asynchronous execution.
- **[EDA / Pub-Sub](../../integration/event-driven.md)**: Event-driven structure between systems.

## 8. Representative Frameworks

The Reactive Streams specification is widely adopted across multiple implementations.

- **Reactive Streams for JVM (Standard Specification)**  
  A common protocol defining Publisher / Subscriber.

- **Project Reactor (Java)**  
  The foundation of Spring WebFlux. Asynchronous streams using Mono / Flux.

- **RxJava / RxJS / ReactiveX Family**  
  Observable-based reactive stream libraries.

- **Akka Streams**  
  Stream processing engine on top of Actor System.

- **Vert.x (Java)**  
  Supports Reactive Streams in an asynchronous application foundation.

## 9. Design Patterns Supporting this Style

The internal model of Reactive Streams consists of a combination of multiple patterns.

- **Iterator**  
  Treats streams as an "abstraction for sequential processing".

- **Observer**  
  The fundamental structure for data notification from Publisher → Subscriber.

- **Mediator**  
  Subscription acts as a mediator between Publisher and Subscriber.

- **Chain of Responsibility**  
  A structure where multiple Processors (map/filter/flatMap) are chained.

- **Strategy**  
  Used when switching custom strategies for backpressure processing (request count management, etc.).

## ✅ Summary

Reactive Streams is a style/specification with keywords:

- Asynchronous Streams
- Backpressure
- Safe Composition

In systems where event-driven/streaming is a prerequisite,  
it is good to consider it in conjunction with Flow / Pipeline styles,  
from the perspective of **"how to handle asynchronous streams safely"**.
