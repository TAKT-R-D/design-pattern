---
sidebar_label: 🧩 Event-driven
---

# 🧩 Event-driven Architecture (EDA)

## ✅ Overview

**An integration style loosely coupling services triggered by the occurrence of events.**  
Publishes the fact that "something happened" as an event, and services subscribing to it react.

## ✅ Problems Addressed

Synchronous request type cooperation ([REST/gRPC](./rest-grpc-graphql.md) etc.) alone has challenges like:

- Chain of synchronous calls tends to occur when many services are involved in one process.
- Caller needs to know all callees (Strong coupling).
- Delay/Failure of some services directly connects to caller's response.

Event-driven Architecture (EDA) tries to enhance flexibility and fault tolerance by:

> "Publishing change of state (event) and making 'who processes it' loosely coupled."

## ✅ Basic Philosophy & Rules

### ● Event

- **Fact that happened in the past** like "Order created", "Inventory allocated".
- Immutable, and in principle "not cancelled".

### ● Event Producer / Consumer

- Producer: Service publishing the event.
- Consumer: Service subscribing to the event and reacting.
- Both are connected loosely via message broker (Kafka, RabbitMQ etc.).

### ● Pub/Sub Model

- Publisher does not know "who is subscribing".
- Subscriber does not care "who published", only looks at events of interest.

### Conceptual Diagram

![Event-Driven Architecture diagram](./event-driven.png)

> Source: Microsoft, “Asynchronous messaging patterns – Azure Architecture Center”.  
> https://learn.microsoft.com/en-us/azure/architecture/patterns/async-request-reply

## ✅ Suitable Applications

- Domains with many interactions between microservices.
- Systems performing additional processing reacting to "something happened" (Notification, Aggregation, Asynchronous Batch).
- High throughput event processing platforms (Log / Tracking / IoT).

Features:

- Easy to "add new service as subscriber of existing event".
- Natural transition to asynchronous processing.

## ❌ Unsuitable Cases

- Operations requiring strong consistency where "it is troublesome if result is not known immediately".
- Systems where processing flow is simple and synchronous call is sufficient.
- Teams that cannot afford cost of event design and schema management.

Also, abuse of EDA creates problems like:

- Flood of events.
- Poor visibility of dependencies (Hard to understand where and what is triggered).

## ✅ History (Genealogy / Parent Styles)

- Development from GUI event-driven model (reacting to clicks etc.).
- Spread of messaging systems (MQ) and Pub/Sub.
- Spread in earnest by Log + Stream platforms like Kafka.

## ✅ Related Styles

- **[Saga Pattern](./saga.md)**: Performs distributed transaction control with events.
- **[Streaming Pipeline](../structural/flow/streaming-pipeline.md)**: Continuously processes event streams.
- **[CQRS](../data/cqrs.md) / [Event Sourcing](../data/event-sourcing.md)**: Style treating events as data model.

## ✅ Representative Frameworks

Event-driven Architecture is realized on messaging infrastructure or event platforms.

- **Apache Kafka**  
  High throughput distributed log / stream platform. Representative implementation of EDA.

- **RabbitMQ**  
  Used as message broker in both Queuing type and Pub/Sub type.

- **Amazon SNS / SQS / EventBridge**  
  Major components of event-driven integration on AWS.

- **Google Cloud Pub/Sub**  
  Global Pub/Sub service in GCP.

- **NATS / Pulsar etc.**  
  Increasing adoption as lightweight and high-performance messaging infrastructure.

## ✅ Design Patterns Supporting This Style

Internal structure of Event-driven can be decomposed into object-oriented patterns as follows:

- **Observer**  
  Model of Event Publishing (Subject) and Subscription (Observer) itself.

- **Mediator**  
  Message broker functions as a mediator between Producer and Consumer.

- **Command**  
  Treats event as "operation object", and Consumer side interprets its meaning.

- **Chain of Responsibility**  
  Appears in structure where multiple handlers/consumers take over processing in order.

- **Iterator**  
  Used as abstraction when processing event streams sequentially.

## ✅ Summary

Event-driven Architecture is an integration style emphasizing:

- Loose Coupling
- Asynchronous Processing
- Extensibility

It is important not to make everything event-driven, but to  
**Identify "where event-driven brings high value" while combining with synchronous calls.**
