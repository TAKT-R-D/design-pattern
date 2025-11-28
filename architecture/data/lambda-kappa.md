---
sidebar_label: 🧩 Lambda / Kappa
---

# 🧩 Lambda / Kappa Architecture

## ✅ Overview

**Architecture styles for massive data processing, contrasting two-layer structure of Batch + Streaming (Lambda) and single-layer structure of Streaming (Kappa).**

## ✅ Problems Addressed

### What Lambda Architecture wanted to solve

- Batch processing is "accurate but slow".
- Streaming processing is "fast but tends to be inaccurate".
- Neither alone can satisfy requirements of large-scale data analysis.

→ Solution:
**"Balance accuracy and immediacy by using 'Batch Layer' and 'Speed Layer' together."**

### What Kappa Architecture wanted to solve

- Maintenance of 2 systems in Lambda Architecture is hard (Code duplication, Model double management).
- Discussion "Is batch unnecessary?" emerged due to evolution of streaming technology.

→ Solution:
**"Unify all processing as streaming."**

## ✅ Basic Philosophy & Rules

### Three Layers of Lambda Architecture

1. **Batch Layer**  
   Accumulates raw data (immutable) and creates true value by periodic batch recalculation.
2. **Speed Layer (Streaming Layer)**  
   Near real-time processing to complement the gap until batch comes.
3. **Serving Layer**  
   Merges and provides batch result + streaming result.

### Philosophy of Kappa Architecture

- "Batch processing can also be expressed by replay of stream."
- Abolish batch layer and configure with **single stream processing**.
- Recalculation of state is realized by Replay of stream.

## ✅ Suitable Applications

### Lambda

- DWH-type analysis requiring accurate aggregation.
- Cases requiring both batch ETL and real-time analysis.
- Phased migration in large organizations (Continued use of existing batch).

### Kappa

- Business centered on real-time processing (Monitoring, Detection, IoT).
- When wanting to build simple pipeline centered on stream.
- Environment with recalculation needs but don't want to hold batch.

## ❌ Unsuitable Cases

### Lambda

- Development and operation are complex (Management of 2 layers).
- Over-engineering for small to medium scale data.

### Kappa

- Cases where DWH-like accurate aggregation is strongly required.
- Environment where streaming infrastructure is not established.

## ✅ History (Genealogy / Parent Styles)

- Lambda Architecture (Nathan Marz) proposed double structure of [Batch](../structural/flow/batch-pipeline.md) + [Stream](../structural/flow/streaming-pipeline.md).
- Later, Kappa Architecture spread with evolution of Kafka Streams / Flink / Beam etc.
- Nowadays, combination with [Lakehouse](./data-lake-lakehouse.md) + [Streaming](../structural/flow/streaming-pipeline.md) is becoming common.

## ✅ Related Styles

- **[Batch Pipeline](../structural/flow/batch-pipeline.md)**: Prototype of Batch Layer of Lambda.
- **[Streaming Pipeline](../structural/flow/streaming-pipeline.md)**: Central model of Kappa.
- **[Data Lake / Lakehouse](./data-lake-lakehouse.md)**: Foundation for raw data accumulation and recalculation.
- **[Event Sourcing](./event-sourcing.md)**: Close to idea of state reconstruction by Replay.

## ✅ Representative Frameworks

- **Apache Spark**  
  Central technology constructing Batch Layer of Lambda Architecture.

- **Kafka Streams / Apache Flink**  
  Representative streaming processing infrastructure of Kappa Architecture.

- **Apache Beam**  
  Can construct pipeline integrating Batch / Streaming, supporting both Lambda/Kappa.

- **Delta Lake / Iceberg / Hudi**  
  Good compatibility with Lakehouse assuming recalculation and Replay.

## ✅ Design Patterns Supporting This Style

- **Iterator**  
  Used for sequential processing of stream / massive data.

- **Observer**  
  Process triggered by arrival of stream event.

- **Strategy**  
  Switching algorithms of batch processing / streaming processing.

- **Template Method**  
  Unifies common flow of ETL / Pipeline construction.

## ✅ Summary

Lambda / Kappa Architecture are data processing structures born from the perspective of:  
**How to handle massive data with "Accuracy", "Immediacy", and "Recalculability".**

- Both Accuracy + Immediacy needed → **Lambda**
- Want to simplify with Streaming center → **Kappa**

This segregation is often used in practice.
