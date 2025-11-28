---
sidebar_label: 🧩 SLO / SRE
---

# 🧩 SLO / SRE (Site Reliability Engineering)

## ✅ Overview

**Practical system to achieve reliability by "Engineering". Design availability with SLO (Objective) and Error Budget.**

## ✅ Problems Addressed

- Develop and operate with ambiguous definition of availability.
- Conflict of "Stability vs Development Speed" does not converge.
- Response at failure is personalized.
- Culture trying to realize high availability with "guts".

## ✅ Basic Philosophy & Rules

- Three stages: SLI (Indicator) → SLO (Objective) → SLA (Agreement).
- Balance control by "Error Budget".  
  → If reliability is sufficient, increase development speed.  
  If used up, focus on stabilization.
- Standardization of incident response (On-call, Runbook).
- Post-mortem culture (Improvement rather than blame).

## ✅ Suitable Applications

- Internet-scale services.
- Microservices and distributed systems.
- Strong availability requirements (99.9% - 99.999%).

## ❌ Unsuitable Cases

- Small-scale apps with low availability requirements.
- Organization where operation culture is not nurtured (Organization training is needed).

## ✅ History

- Systematized starting from Google SRE.
- SLO / Error Budget became standard and adopted as metrics in cloud era.

## ✅ Related Styles

- [Observability](./observability.md): Foundation of SLI measurement.
- [DevOps](./devops.md): Cultural background and automation.
- [Team Topologies](./team-topologies.md): Distribution of On-call and operational responsibility.

## ✅ Summary

SRE is an **approach to "guarantee reliability with code"**,  
and availability management by **SLO + Error Budget** becomes central.
