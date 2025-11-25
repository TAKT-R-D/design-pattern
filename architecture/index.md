# 🧩 The Map of Software Architecture

This site aims to provide a "map" for systematically understanding software architecture.
Architecture is not a single concept but a domain where multiple design layers overlap, making it difficult to grasp the big picture. This site organizes them and provides guidelines for understanding their interrelationships.

## ✅ Why Architecture is Confusing

The reason architectural discussions often become confusing is that designs of different dimensions are frequently discussed in the same context.
The following are representative layers, each having independent design axes:

- **Internal Application Structure** (Layered, MVC, Hexagonal, etc.)
- **System Topologies & Granularity** (Monolith, Microservices)
- **Integration Styles** (REST, gRPC, Event-driven)
- **Data Structure & Analytics** (DWH, Data Lake, Event Sourcing)
- **Operations & Organization** (DevOps, SRE, Team Topologies)

These are completely different design layers—"Structure, Deployment, Communication, Data, Operations"—and cannot be integrated into a single diagram or concept.

## ✅ Categorization Structure of This Site

The categorization of this site is designed based on historical trends in recent architectural discussions.

- **Dependency Rule-based styles** (Hexagonal / Onion / Clean Architecture) have become strongly established in practice.
- These deepened as the **main topic of internal application structure** from the 2000s to the 2010s.
- In contrast, recent evolution has centered on **"outer layers"** such as **Topologies (Monolith to Microservices), Integration, Data, and Socio-technical aspects**.

Based on this background, this site adopts a structure that:
**Finely categorizes Structural Styles (Internal Application Structure) and organizes the outer layers as separate categories.**

### 1. Structural Styles (Internal Application Structure)

In recent discussions, styles centered on the **Dependency Rule** (Hexagonal / Onion / Clean) have become strongly established and treated as the central topic of internal application structure.
Therefore, Structural Styles are categorized more finely than other categories.

Note that implementation techniques like Vertical Slice / Feature-based are positioned as supplementary specific configuration patterns of existing styles.

### 2. System Topologies (System Configuration & Granularity)

This area deals with deployment strategies, ranging from Monolith to Microservices, Serverless, and Edge. It is the category with the most significant evolution in recent years.

### 3. Integration Styles (Communication & Coordination)

Deals with service-to-service communication methods and integration patterns, such as REST, gRPC, Event-driven, and Service Mesh.

### 4. Data & Analytics Architecture (Data Structure & Analytics Platform)

Organizes the evolution of data design, from traditional DWH and Data Lakes to operation separation with CQRS/Event Sourcing and distributed responsibilities with Data Mesh.

### 5. Cross-cutting & Socio-technical (Operations, Culture, Quality)

Deals with areas involving not just technical foundations but also organization, operations, and culture, such as DevOps, SRE, Observability, Zero Trust, and Team Topologies.

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

### ● Architecture Principles

Organizes fundamental concepts common to architecture (Dependency Direction, Boundaries, Coupling & Cohesion, Consistency Models, Sync/Async, etc.).

### ● Architecture Decision Guide

A systematic guide on how to select outer structures (Topologies / Integration / Data / Cross-cutting) based on requirements, constraints, and organizational structure.

### ● Structural Styles Decision Guide

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
