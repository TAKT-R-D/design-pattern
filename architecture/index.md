---
sidebar_label: Introduction
pagination_label: The Map of Software Architecture
---

# The Map of Software Architecture

This site aims to provide a "map" for systematically understanding software architecture.
Architecture is not a single concept but a domain where multiple design layers overlap, making it difficult to grasp the big picture. This site organizes them and provides guidelines for understanding their interrelationships.

## ✅ Why Architecture is Confusing

The reason architectural discussions often become confusing is that designs of different dimensions are frequently discussed in the same context.
The following are representative layers, each having independent design axes:

- **[Internal Application Structure](./structural/index.md)** (Layered, MVC, Hexagonal, etc.)
- **[System Topologies & Granularity](./topologies/index.md)** (Monolith, Microservices)
- **[Integration Styles](./integration/index.md)** (REST, gRPC, Event-driven)
- **[Data Structure & Analytics](./data/index.md)** (DWH, Data Lake, Event Sourcing)
- **[Operations & Organization](./cross-cutting/index.md)** (DevOps, SRE, Team Topologies)

These are completely different design layers—"Structure, Deployment, Communication, Data, Operations"—and cannot be integrated into a single diagram or concept.

## ✅ Categorization Structure of This Site

The categorization of this site is designed based on historical trends in recent architectural discussions.

- **[Dependency Rule-based styles](./structural/layered/dependency-rule-layered/index.md)** ([Hexagonal](./structural/layered/dependency-rule-layered/hexagonal.md) / [Onion](./structural/layered/dependency-rule-layered/onion.md) / [Clean Architecture](./structural/layered/dependency-rule-layered/clean.md)) have become strongly established in practice.
- These deepened as the **main topic of internal application structure** from the 2000s to the 2010s.
- In contrast, recent evolution has centered on **"outer layers"** such as **[Topologies](./topologies/index.md) ([Monolith](./topologies/monolith.md) to [Microservices](./topologies/microservices.md)), [Integration](./integration/index.md), [Data](./data/index.md), and [Socio-technical aspects](./cross-cutting/index.md)**.

Based on this background, this site adopts a structure that:
**Finely categorizes [Structural Styles (Internal Application Structure)](./structural/index.md) and organizes the outer layers as separate categories.**

### [1. Structural Styles (Internal Application Structure)](./structural/index.md)

In recent discussions, styles centered on the **[Dependency Rule](./structural/layered/dependency-rule-layered/index.md)** ([Hexagonal](./structural/layered/dependency-rule-layered/hexagonal.md) / [Onion](./structural/layered/dependency-rule-layered/onion.md) / [Clean](./structural/layered/dependency-rule-layered/clean.md)) have become strongly established and treated as the central topic of internal application structure.
Therefore, Structural Styles are categorized more finely than other categories.

Note that implementation techniques like Vertical Slice / Feature-based are positioned as supplementary specific configuration patterns of existing styles.

### [2. System Topologies (System Configuration & Granularity)](./topologies/index.md)

This area deals with deployment strategies, ranging from [Monolith](./topologies/monolith.md) to [Microservices](./topologies/microservices.md), [Serverless](./topologies/serverless.md), and [Edge](./topologies/edge.md). It is the category with the most significant evolution in recent years.

### [3. Integration Styles (Communication & Coordination)](./integration/index.md)

Deals with service-to-service communication methods and integration patterns, such as [REST, gRPC](./integration/rest-grpc-graphql.md), [Event-driven](./integration/event-driven.md), and [Service Mesh](./integration/service-mesh.md).

### [4. Data & Analytics Architecture (Data Structure & Analytics Platform)](./data/index.md)

Organizes the evolution of data design, from traditional [DWH](./data/data-warehouse.md) and [Data Lakes](./data/data-lake-lakehouse.md) to operation separation with [CQRS](./data/cqrs.md)/[Event Sourcing](./data/event-sourcing.md) and distributed responsibilities with [Data Mesh](./data/data-mesh.md).

### [5. Cross-cutting & Socio-technical (Operations, Culture, Quality)](./cross-cutting/index.md)

Deals with areas involving not just technical foundations but also organization, operations, and culture, such as [DevOps](./cross-cutting/devops.md), [SRE](./cross-cutting/slo-sre.md), [Observability](./cross-cutting/observability.md), [Zero Trust](./cross-cutting/zero-trust.md), and [Team Topologies](./cross-cutting/team-topologies.md).

## 🧩 Overall Software Architecture Mindmap

```mermaid
mindmap
  root((Software Architecture))
    ("1. Structural Styles\n(Internal App Structure)")
      A["A. Non-structured / Early"]
        A1["Big Ball of Mud"]
        A2["Transaction Script"]
      B["B. Data / Record Centric"]
        B1["Active Record"]
        B2["Table Module"]
        B3["Anemic Domain Model"]
      C["C. Layered / Domain Model"]
        C1["Classic Layered"]
        C2["Domain Model Layered"]
        C3["Dependence-rule-based Layered\n(Hexagonal / Onion / Clean)"]
      D["D. UI Interaction / Presentation"]
        D1["MVC"]
        D2["MVP"]
        D3["MVVM"]
        D4["MVU"]
      E["E. Flow / Pipeline"]
        E1["Pipe & Filter"]
        E2["Batch Pipeline"]
        E3["Streaming Pipeline"]
      F["F. Microkernel / Plugin"]
        F1["Microkernel"]
        F2["Plugin Architecture"]
      G["G. Reactive / Actor"]
        G1["Actor Model"]
        G2["Event Loop / Reactor"]
        G3["Reactive Streams / FRP"]

    ("2. System Topologies\n(Service Config / Granularity)")
      T1["Monolith"]
      T2["Modular Monolith"]
      T3["Microservices"]
      T4["SOA"]
      T5["Serverless / FaaS"]
      T6["Edge / Fog Architecture"]

    ("3. Integration Styles\n(Communication / Integration)")
      I1["REST / gRPC / GraphQL"]
      I2["Event-Driven Architecture"]
      I3["Saga Pattern\n(Orchestration / Choreography)"]
      I4["Service Mesh"]
      I5["API Gateway / BFF"]

    ("4. Data & Analytics Architecture\n(Data Structure / Analytics)")
      Dn1["Data Warehouse"]
      Dn2["Data Lake / Lakehouse"]
      Dn3["CQRS"]
      Dn4["Event Sourcing"]
      Dn5["Data Mesh"]
      Dn6["Lambda / Kappa Architecture"]

    ("5. Cross-cutting & Socio-technical\n(Ops / Culture / Quality)")
      S1["DevOps / CI/CD / 12-Factor"]
      S2["Team Topologies / Conway's Law"]
      S3["SLO-driven Architecture (SRE)"]
      S4["Zero Trust Security"]
      S5["Observability"]
      S6["Green Software / Sustainability"]
```

## 🧩 Relationship Diagram Between Categories (Cross-cutting Edges)

```mermaid
graph LR
  SS("Structural Styles")
  ST("System Topologies")
  IT("Integration Styles")
  DA("Data Architecture")
  CT("Cross-cutting & Socio-technical")

  SS --- IT
  SS --- DA
  SS --- CT
  ST --- IT
  ST --- CT
  IT --- DA
  DA --- CT
```

## 🧩 Guide to Understanding the Overall Architecture

Before reading individual categories like internal structure, system configuration, communication methods, and data platforms, supplementary pages are provided to give an overview of the big picture.

### ● [Architecture Principles](./arch-principles.md)

Organizes fundamental concepts common to architecture (Dependency Direction, Boundaries, Coupling & Cohesion, Consistency Models, Sync/Async, etc.).

### ● [Architecture Decision Guide](./decision-guide.md)

A systematic guide on how to select outer structures (Topologies / Integration / Data / Cross-cutting) based on requirements, constraints, and organizational structure.

### ● [Structural Styles Decision Guide](./structure-decision-guide.md)

A guide on how to select internal application structures (Layered / Clean / Hexagonal / MVC / MVVM / Transaction Script, etc.) based on domain complexity, changeability, and team structure.

Reading these as prerequisites for each category helps in appropriately positioning individual styles while overlooking the entire architecture.

## 🧭 Pages to Read Next

- [**Structural Styles (Internal App Structure)**](./structural/index.md)
- [**System Topologies (Service Config & Granularity)**](./topologies/index.md)
- [**Integration Styles (Communication & Integration)**](./integration/index.md)
- [**Data Architecture (Data Structure & Analytics)**](./data/index.md)
- [**Cross-cutting & Socio-technical (Ops, Culture, Quality)**](./cross-cutting/index.md)

Each category is explained from the following perspectives:

- Problems it attempts to solve
- Philosophy and structure of the style
- Suitable application areas
