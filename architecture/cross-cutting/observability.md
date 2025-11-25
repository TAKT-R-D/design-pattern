# 🧩 Observability

## ✅ Overview

**Design philosophy to make it possible to grasp what is happening inside the system "from outside".**

## ✅ Problems Addressed

- Cannot understand cause at failure (Black box).
- Tracing in distributed system is difficult.
- Cannot see improvement points due to lack of data.
- Increase in complexity where traditional "Monitoring" is insufficient.

## ✅ Basic Philosophy & Rules

- Metrics
- Logs
- Traces
- Integration as "Three Pillars".
- Data output with context (Trace ID).
- Incorporate observability into design at code/infrastructure layer.

## ✅ Suitable Applications

- Microservices.
- Serverless + Event-driven systems.
- Service operation based on SLA / SLO.

## ❌ Unsuitable Cases

- Single node small-scale app (Over-engineering).
- Environment where log management / observability tool operation is impossible.

## ✅ History

- Evolved from Monitoring to Observability.
- Standardization progressed from Dapper → OpenTracing → OpenTelemetry.

## ✅ Related Styles

- SRE: Observability is foundation of SRE practices.
- DevOps: Prerequisite for safe acceleration of delivery.
- Service Mesh: Automation of trace/metrics collection.

## ✅ Summary

Observability is an **essential approach to keep complex systems in understandable state**,
and is indispensable for failure response, improvement, and rapid development.
