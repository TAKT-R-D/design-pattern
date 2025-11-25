# 📚 References & Further Reading

The architecture explanations on this site are based on the following books, papers, and articles.
This list can also be used as a learning roadmap for deepening your understanding of each topic.

## 🏛 General Architecture (Fundamentals)

Must-read books for learning the foundational concepts, history, and patterns of software architecture.

- **Patterns of Enterprise Application Architecture** (Martin Fowler)
  - Known as PoEAA. The source for Transaction Script, Domain Model, Active Record, Table Module, etc.
  - [Official Catalog (martinfowler.com)](https://martinfowler.com/eaaCatalog/)
- **Software Architecture in Practice** (Len Bass, Paul Clements, Rick Kazman)
  - A classic on architectural quality attributes and evaluation methods.
- **Fundamentals of Software Architecture** (Mark Richards, Neal Ford)
  - A good book comparing and organizing architectural styles (Layered, Microkernel, Microservices, etc.) from a modern perspective.
- **Software Systems Architecture** (Nick Rozanski, Eóin Woods)
  - A practical guide systematizing architectural views and stakeholder analysis.

## 🏗 Structural Styles (Internal Application Structure)

### Layered / Domain Model / Dependency Rule

- **Domain-Driven Design: Tackling Complexity in the Heart of Software** (Eric Evans)
  - The origin of DDD. Concepts of Domain Model, Ubiquitous Language, and Bounded Context.
- **Clean Architecture: A Craftsman's Guide to Software Structure and Design** (Robert C. Martin)
  - Detailed explanation of Clean Architecture and its relationship with SOLID principles.
- **Implementing Domain-Driven Design** (Vaughn Vernon)
  - Known as IDDD. Rich practical explanation on how to combine Hexagonal Architecture with DDD.
- **[Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)** (Alistair Cockburn)
  - The original article by the proponent of Ports & Adapters.
- **[The Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/)** (Jeffrey Palermo)
  - The proposal article for Onion Architecture.

### Other Structural Patterns

- **Pattern-Oriented Software Architecture (POSA) Series**
  - Detailed systematization of structural patterns like Microkernel and Pipe & Filter.
- **[The Reactive Manifesto](https://www.reactivemanifesto.org/)**
  - Definition of the four characteristics of Reactive Architecture (Responsive, Resilient, Elastic, Message Driven).
- **Refactoring to Patterns** (Joshua Kerievsky)
  - A practical book emphasizing design decisions behind pattern application.

## 🌐 System Topologies (System Configuration & Granularity)

- **Building Microservices** (Sam Newman)
  - The standard textbook on microservices design, operations, and splitting criteria.
- **Monolith to Microservices** (Sam Newman)
  - Explanation of migration patterns from Monolith to Microservices (e.g., Strangler Fig).
- **[Microservices](https://martinfowler.com/articles/microservices.html)** (James Lewis, Martin Fowler)
  - The article that defined Microservices.
- **Serverless Architectures on AWS** (Peter Sbarski)
  - Patterns and practices for Serverless Architecture.
- **Site Reliability Workbook** (Google SRE Team)
  - Rich in operational design and practical examples for large-scale distributed systems.

## 🔗 Integration Styles (Communication & Coordination)

- **Enterprise Integration Patterns** (Gregor Hohpe, Bobby Woolf)
  - The bible of integration patterns like Messaging, Pub/Sub, and Routing.
  - [Official Catalog (enterpriseintegrationpatterns.com)](https://www.enterpriseintegrationpatterns.com/)
- **Microservices Patterns** (Chris Richardson)
  - Explanation of microservice-specific implementation patterns like Saga, API Gateway, and CQRS/ES.
- **Distributed Systems Observability** (Cindy Sridharan)
  - Provides practical knowledge on measurement and tracing in distributed systems.

## 💾 Data Architecture (Data & Analytics)

- **[CQRS Documents](https://cqrs.files.wordpress.com/2010/11/cqrs_documents.pdf)** (Greg Young)
  - Explanatory document by the proponent of CQRS.
- **Designing Data-Intensive Applications** (Martin Kleppmann)
  - A masterpiece for deeply understanding data distribution, replication, partitioning, and batch/stream processing mechanisms.
- **[Data Mesh Principles](https://martinfowler.com/articles/data-mesh-principles.html)** (Zhamak Dehghani)
  - Explanation of the Data Mesh concept and its four principles.
- **[The Log: What every software engineer should know about real-time data's unifying abstraction](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying)** (Jay Kreps)
  - Explanation of log-centric architecture (foundation of Kappa Architecture) by a Kafka developer.
- **Streaming Systems** (Tyler Akidau et al.)
  - Foundation for deeply understanding stream processing and consistency models.

## 🤝 Cross-cutting & Organization (Operations & Organization)

- **Team Topologies** (Matthew Skelton, Manuel Pais)
  - Must-read on the relationship between team structure and architecture (Reverse Conway's Law).
- **Accelerate** (Nicole Forsgren, Jez Humble, Gene Kim)
  - Scientific analysis of how DevOps capabilities (Four Keys) affect organizational performance.
- **Site Reliability Engineering** (Google SRE Team)
  - The origin of operational architectures like SRE, SLO/SLI, and Error Budgets.
- **[The Twelve-Factor App](https://12factor.net/)** (Adam Wiggins)
  - 12 practices that modern SaaS/Web applications should follow.
- **The Phoenix Project** (Gene Kim)
  - Understanding DevOps philosophy and organizational improvement through a narrative format.
