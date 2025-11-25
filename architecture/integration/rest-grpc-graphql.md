# 🧩 REST / gRPC / GraphQL (Synchronous Request-Driven Integration Styles)

## ✅ Overview

This page overviews **three representative protocols / API styles connecting services synchronously with "Request & Response".**

- REST: Resource-oriented HTTP API style.
- gRPC: IDL-based fast binary RPC.
- GraphQL: Client-driven flexible query API.

Here we organize them based on "what philosophy they have and what problems they try to solve".

## ✅ Problems Addressed

All three basically face the challenge of **wanting to make inter-service communication simple and reusable**, but their focus differs slightly.

- REST:
  - Wants to provide resource-oriented and unified interface in the world of Web / HTTP.
  - Wants to design link-oriented and cacheable APIs.

- gRPC:
  - Wants to reduce JSON/HTTP overhead and realize fast and type-safe communication in microservices.
  - Wants bidirectional streaming and strict interface definition (IDL).

- GraphQL:
  - Wants to resolve "N+1 REST calls" and responses with too much/too little data in situations where necessary data differs per client.
  - Wants to design schema and data fetching form led by frontend.

## ✅ Basic Philosophy & Rules

### REST

- Expresses resource operation with HTTP methods (GET/POST/PUT/DELETE...) + URL.
- Utilizes HTTP mechanisms like status codes, headers, and caching.
- Hypermedia-oriented design philosophy like HATEOAS (transition via links).

### gRPC

- Defines interface with IDL like Protocol Buffers (proto).
- Fast and efficient communication by binary format + HTTP/2.
- Supports Unary / Server Streaming / Client Streaming / Bidirectional Streaming.

### GraphQL

- Typed API definition by Schema.
- Client declaratively specifies "only fields wanted" in query.
- Possible to fetch combination of multiple resources with single endpoint.

## ✅ Suitable Applications

### REST

- Public API / Web API in general.
- APIs that want to utilize caching and HTTP infrastructure.
- Resource-centric CRUD APIs.

### gRPC

- Internal communication between microservices.
- Backends where high throughput and low latency are important.
- Multi-language environments where type-safe interfaces are important.

### GraphQL

- BFF role where flexible data fetching from frontend is necessary.
- Reducing network round trips in Mobile / SPA.
- Products with many UI variations or A/B tests.

## ❌ Unsuitable Cases

### REST

- When necessary data structure differs greatly per client.
- When fast bidirectional streaming is required.

### gRPC

- Public API called directly from browser (Usage from standard browser has higher threshold than JSON/REST).
- Operation sites that want to check with HTTP debug tools.

### GraphQL

- Very simple CRUD APIs (GraphQL server cost is overkill).
- Cases where simple REST caching strategy is sufficient.
- When team lacks knowledge of schema design and N+1 problem countermeasures.

## ✅ History (Genealogy / Parent Styles)

- REST: Spread as Web architecture starting from Fielding's dissertation.
- gRPC: OSS based on Google internal technology, expanded as RPC for microservices era.
- GraphQL: Created by Facebook from frontend challenges, then widely used as OSS.

It is easier to understand if you view them as **different directions of evolution of Web API / Inter-service communication** rather than opposing axes.

## ✅ Related Styles

- **Event-driven / Messaging**: Contrast with asynchronous integration styles.
- **API Gateway / BFF**: Style of how to expose and aggregate these APIs.
- **Service Mesh**: Complementary style from the perspective of communication path control and observation.

## ✅ Representative Frameworks

### REST

- **Spring MVC / Spring Boot**
  Representative of enterprise Web/API servers. Often referenced as typical example of RESTful API.

- **Ruby on Rails**
  Easy to build RESTful API with resource-oriented routing and controllers.

- **Django REST Framework**
  De facto standard for implementing REST API on Django.

- **Express / FastAPI etc.**
  Lightweight Web frameworks capable of building simple REST APIs quickly.

### gRPC

- **gRPC Official Libraries (Go / Java / C# / Node.js etc.)**
  Provides fast and type-safe RPC through IDL (proto) and code generation.

- **Envoy / gRPC-Web**
  Proxy and adapter to handle gRPC from browser.

### GraphQL

- **Apollo Server / Apollo Gateway**
  Node.js based GraphQL server / federation implementation.

- **Hasura**
  Backend generating GraphQL API immediately from DB schema.

- **GraphQL Java / Hot Chocolate (.NET) etc.**
  GraphQL server implementations in each language.

## ✅ Design Patterns Supporting This Style

REST / gRPC / GraphQL are communication protocols, but the following design patterns are often used behind them.

- **Facade**
  Summarizes multiple domain operations as one API, simplifying the entrance seen from client.

- **Adapter**
  Absorbs difference in data format between internal model/interface and externally exposed API.

- **Proxy**
  Used when adding control on communication path like authentication, caching, rate limiting.

- **Strategy**
  Used when switching behavior by version difference or client.

- **Template Method**
  Unifies common request processing flow (Authentication → Validation → Processing → Response formatting).

## ✅ Summary

REST / gRPC / GraphQL are styles that:

- Are all "Request & Response type integration", but
- Have slightly different problems to solve and areas of expertise.

When choosing, it is realistic to use them in combination in the right places from perspectives like:

- **Who is the protagonist? (Client / Backend / Inter-service)**
- **What is the bottleneck? (Bandwidth / Latency / Development Speed / Flexibility)**
