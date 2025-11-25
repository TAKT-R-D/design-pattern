# 🧩 Service Mesh

## ✅ Overview

**A structural style separating "network-related responsibilities" of inter-service communication from the app, and centrally managing them with Sidecar Proxy + Control Plane.**

## ✅ Problems Addressed

As microservices increase, each service tends to hold responsibilities regarding communication like:

- Retry / Timeout / Circuit Breaker
- Logging / Tracing
- Encryption / Authentication by mTLS
- Service Discovery / Load Balancing

If these are left to library implementation per application:

- Implementation varies per language / framework.
- Policy change involves deployment of all services.

Service Mesh responds with a structure that:

> "Leaves communication control to Sidecar Proxy, and lets app focus on business logic."

## ✅ Basic Philosophy & Rules

### ● Data Plane (Sidecar Proxy)

- Place proxy (Sidecar) next to each service instance.
- All inter-service communication goes through this proxy.
- Perform retry, timeout, encryption, etc. here.

### ● Control Plane

- Centrally manage policies, routing, certificate management, etc.
- Distribute configuration to Data Plane.

Application code:

- Just performs normal HTTP/gRPC calls.
- Leaves details of network control to Mesh side.

## ✅ Suitable Applications

- Large-scale systems with many microservices.
- Environments wanting to apply security policies (mTLS etc.) centrally.
- Organizations wanting to unify observability (metrics, traces, logs).

## ❌ Unsuitable Cases

- Small-scale systems with few services.
- Cases where there is no Infrastructure / Ops structure and Mesh operation cost cannot be paid.

Introducing Service Mesh has downsides like:

- High learning cost (Istio etc.).
- Increase in debug points.

So it is important whether it matches the scale and operational capability.

## ✅ History (Genealogy / Parent Styles)

- Emerged with spread of Microservices / Kubernetes.
- Spread as implementation like Envoy / Istio / Linkerd based on Sidecar pattern.
- Recognized as "Standard component of network layer" for microservices alongside API Gateway.

## ✅ Related Styles

- **API Gateway / BFF**: Entrance to outside. Service Mesh mainly handles internal traffic.
- **REST / gRPC**: Protocols carried on Mesh.
- **Zero Trust / Security Architecture**: As application point of mTLS and authorization policies.

## ✅ Representative Frameworks

Service Mesh is often implemented as infrastructure layer products.

- **Istio**
  Representative Service Mesh using Envoy as data plane. Rich in features and widely used in Kubernetes environments.

- **Linkerd**
  Service Mesh emphasizing simplicity and lightness. Metrics and mTLS can be introduced easily.

- **Consul Connect**
  Integrated solution of Service Discovery + Mesh by HashiCorp Consul.

- **AWS App Mesh / GCP Anthos Service Mesh**
  Managed Mesh infrastructure provided by cloud providers.

- **Envoy**
  High-performance proxy adopted as data plane in many Service Mesh implementations.

## ✅ Design Patterns Supporting This Style

Service Mesh itself is infrastructure structure, but strongly linked with following patterns in design perspective.

- **Proxy**
  Sidecar itself acts as proxy, performing traffic control, monitoring, and encryption.

- **Facade**
  Hides complex network control through unified API (Policy / Routing configuration) provided by Mesh.

- **Mediator**
  Control plane acts as mediator with each data plane (Sidecar).

- **Observer**
  Appears in mechanism aggregating observation information like metrics, traces, and logs.

- **Chain of Responsibility**
  Structure where request is processed passing through multiple filters/rules (Authentication → Routing → Retry etc.).

## ✅ Summary

Service Mesh is a structural style to handle concerns around network like:

- Communication Control
- Security
- Observability

Separately from the application.

When the scale of microservices exceeds a certain level,
it is worth considering as an option: **"Should we separate the network layer from the app?"**.
