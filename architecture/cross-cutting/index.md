# 🧩 Cross-cutting & Socio-technical (Operation, Culture, Quality)

Cross-cutting deals with areas that **affect all layers of architecture cross-sectionally.**
It centers on "socio-technical elements" such as **Operation, Organization Structure, Culture, and Quality** in addition to technology.

## ✅ Problems Addressed by This Category

- Architecture does not mesh with organizational structure.
- Slow deployment due to disconnect between development/operation teams.
- Operational failure of microservices (Lack of observability).
- Unmet security requirements.
- Difficulty of incorporating "Quality" into architecture.

## ✅ Key Concepts of Cross-cutting

### ● DevOps / CI/CD / 12-Factor App

- Acceleration and automation of delivery.
- Culture not separating design and operation.

### ● Team Topologies / Conway’s Law

- Organizational structure affects architecture.
- Stream-aligned teams / Platform teams etc.

### ● SLO-driven Architecture (SRE)

- Control of reliability by SLO / Error Budget.
- Availability design of dependent services.

### ● Zero Trust Security

- Philosophy abandoning "Internal network = Safe" and always verifying.

### ● Observability

- Visualize state of entire system with Logs / Metrics / Traces.
- Essential for microservices.

### ● Green Software / Sustainability

- CO2 emission reduction.
- Optimization of cloud resources.
- Balancing cost saving and value maximization.

## ✅ How to Read This Category

1. Have a perspective including **people and organization, not just technology itself.**
2. Understand as a foundation supporting "realistic operation" of Topologies and Integration.
3. Recognize the need to change architecture according to organization.

## ✅ Relationship with Other Layers

- **Structural Styles**: Affects testability and changeability.
- **Topologies**: SLO/Observability is essential for microservices operation.
- **Integration**: Reinforce security/observability with Mesh and Gateway.
- **Data Architecture**: Closely related to data governance and audit.
