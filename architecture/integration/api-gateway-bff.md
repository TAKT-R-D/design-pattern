---
sidebar_label: 🧩 API Gateway / BFF
---

# 🧩 API Gateway / BFF (Backend for Frontend)

## ✅ Overview

**A structural style with a common "Entrance (Gateway)" exposing multiple backend services, and "BFF" preparing optimized backends for each client type.**

## ✅ Problems Addressed

When microservices or multiple clients (Web / Mobile / External Partners) appear:

- Complexity increases if clients call many services directly.
- Common processing like authentication, authorization, rate limiting, and logging is duplicated.
- Data shape required by Web and Mobile differs, making same API inconvenient.

API Gateway / BFF responds with a structure that:

- Processes cross-cutting concerns at a common entrance.
- Prepares Facades optimized for each client type.

## ✅ Basic Philosophy & Rules

### ● API Gateway

- Entrance for all requests from outside.
- Main roles:
  - Authentication / Authorization
  - Rate Limiting
  - Logging / Tracing
  - Routing (Which service to send to)
  - Protocol Conversion (External REST, Internal gRPC, etc.)

### ● BFF (Backend for Frontend)

- Backend specialized for specific clients (Web, iOS, Android, etc.).
- Roles:
  - Convert to appropriate data shape per client.
  - Orchestration of multiple service calls.
  - Aggregation of client-specific use cases.

Configuration Example:

- Internet → API Gateway → Web BFF → Various Backend Services
- Internet → API Gateway → Mobile BFF → Various Backend Services

## ✅ Suitable Applications

- SaaS providing Web / Mobile / External Partner APIs simultaneously.
- Systems with many microservices where clients should not know everything directly.
- Products where screen design / UX differs significantly per client.

## ❌ Unsuitable Cases

- Simple monolithic apps (API completes with 1 backend).
- Cases with only 1 type of client and no complex aggregation logic needed.

If BFFs are increased excessively:

- Boundaries increase too much, raising change cost.
- Similar logic duplicates across multiple BFFs.

Care is needed for splitting granularity.

## ✅ History (Genealogy / Parent Styles)

- API Gateway itself existed since [SOA](../topologies/soa.md) era (ESB + Gateway etc.).
- Idea of BFF was born with the spread of smartphones.
- Became standard component with spread of [Microservices](../topologies/microservices.md), [REST/gRPC/GraphQL](./rest-grpc-graphql.md).

## ✅ Related Styles

- **[REST / gRPC / GraphQL](./rest-grpc-graphql.md)**: API styles provided by Gateway/BFF on the front side.
- **[Service Mesh](./service-mesh.md)**: Layer responsible for internal implementation of inter-service communication (Inside Gateway).
- **[Event-driven](./event-driven.md) / [Saga](./saga.md)**: Components of asynchronous flow triggered from Gateway/BFF.

## ✅ Representative Frameworks

There are many choices for API Gateway / BFF as both products and OSS.

- **AWS API Gateway / Azure API Management / GCP API Gateway**  
  Managed API Gateway services. Provide authentication, rate limiting, routing, etc.

- **Kong / Tyk / KrakenD / NGINX**  
  OSS / Commercial API Gateway products. Extensible via plugins.

- **Spring Cloud Gateway**  
  API Gateway implementation for Spring ecosystem.

- **Node.js / Express / NestJS based BFF**  
  Often used when implementing BFF specialized for Web / Mobile clients.

- **Next.js (App Router / Route Handlers)**  
  Easy to configure Web frontend and BFF-like API within the same project.

## ✅ Design Patterns Supporting This Style

API Gateway / BFF is established by a combination of multiple patterns as an "entrance" seen from the client.

- **Facade**  
  Appearance showing multiple backend services as one API.

- **Adapter**  
  Converts data and interfaces into forms easy for clients to handle.

- **Proxy**  
  Interposes control like authentication, authorization, rate limiting, caching before and after requests.

- **Mediator**  
  Role of integrating responses from multiple services into one response.

- **Strategy**  
  Used when switching routing or response structure per client type.

## ✅ Summary

API Gateway / BFF is a structural style that is almost standard in modern Web / Mobile services as:

- **Entrance for external exposure**
- **Client-specific orchestration layer**

Especially,  
**"How much to bring to common Gateway and from where to split to BFF"** becomes an important judgment point in design.
