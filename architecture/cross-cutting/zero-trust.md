# 🧩 Zero Trust Architecture

## ✅ Overview

**Security architecture that assumes "Trust No One" and continuously verifies all communications. A modern model to overcome the limitations of perimeter defense.**

## ✅ Problems Addressed

- Limitations of security based on perimeter defense (Firewall).
- "Disappearance of perimeter" due to Cloud / SaaS / Remote Work.
- Increase in internal breaches (Insider threats / Credential leaks).
- Unlimited access once inside the network.

## ✅ Basic Philosophy & Rules

- "Never trust, always verify"
- ID-based access control (Strict authentication/authorization by IAM).
- Micro-segmentation (Fine-grained boundaries).
- Device verification / Context authentication.
- Communication encryption (mTLS).
- Continuous application and audit of policies.

## ✅ Suitable Applications

- Cloud / Multi-cloud environments.
- Organizations assuming remote work.
- Areas with strict security requirements (Finance / Government).
- Microservices utilizing Service Mesh + mTLS.

## ❌ Unsuitable Cases

- Simple on-premise only networks.
- Organizations where IAM is undeveloped and cannot afford to build authentication infrastructure.

## ✅ History

- Modeled by Google BeyondCorp.
- Concept of Zero Trust standardized as framework (NIST etc.).

## ✅ Related Styles

- Service Mesh: Good compatibility with mTLS / Policy management.
- DevOps / SRE: Aspect of security automation.
- Identity & Access Management: Central infrastructure.

## ✅ Summary

Zero Trust is the **standard form of modern security standing on the premise of 'Do not trust the network'**,
and is built across all layers of App, Network, and Device.
