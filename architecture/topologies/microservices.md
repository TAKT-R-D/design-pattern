# 🧩 Microservices Architecture

## ✅ Overview

**A structural style splitting the application into small independent services, enabling independent deployment and independent scale.**

## ✅ Problems Addressed

- Development speed slowdown of huge Monolith.
- Collision due to team scale increase.
- Response to different scale characteristics per feature.

## ✅ Basic Philosophy & Rules

- Independent deployment per service.
- Independent data store (Database per Service).
- Loosely coupled coordination via API (REST/gRPC/Event).
- Strong prerequisite of DevOps / CI/CD / Observability.

### Conceptual Diagram

![Microservices Architecture diagram](./microservices.svg)

> Source: Microsoft, “Microservices architecture style – Azure Architecture Center”.  
> https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices

## ✅ Suitable Applications

- Development in multi-team / multi-domain.
- Web services with high availability / scale requirements.
- When technology selection differs per feature.

## ❌ Unsuitable Cases

- Small-scale products (Over-engineering).
- Heavy operation, insufficient SRE structure.
- Domains where distributed transactions occur massively.

## ✅ History

- Spread by success of Netflix / Amazon.
- Developed as a school implementing SOA ideas more lightly.

## ✅ Related Styles

- **SOA**: Heavier and enterprise-like ancestor.
- **Modular Monolith**: Effective as structural organization before introduction.

## ✅ Representative Frameworks

- **Spring Cloud**
  Comprehensive foundation for Microservices like Config / Gateway / Discovery / Circuit Breaker.

- **Go + gRPC + Kubernetes**
  Strong combination for building lightweight and fast services.

- **Node.js / NestJS / Express**
  Configuration suitable for BFF and small-grained services.

- **AWS (ECS / Lambda / API Gateway / EventBridge)**
  Microservices construction by managed services.

- **Dapr**
  Platform providing service-to-service invocation via sidecar.

## ✅ Design Patterns Supporting This Style

- **Facade**
  Unified entrance via API Gateway.

- **Proxy**
  Traffic control by Service Mesh or Sidecar.

- **Observer**
  Event-driven coordination and domain event distribution.

- **Mediator**
  Coordination of multiple services by Orchestrator (Workflow).

- **Strategy**
  Different algorithm / technology selection per service.

## ✅ Summary

Microservices is a powerful structure for
**"High Speed Development × High Scale × High Availability"**,
but since operation cost is high, **it depends on organizational scale and domain characteristics.**
