# 🧩 Batch Pipeline

## ✅ Overview

**A style configuring "Batch Jobs" that process data for a certain period collectively as a multi-stage pipeline.**

## ✅ Problems Addressed

- One batch job becomes huge, and it's unclear what is done in what order.
- Want to re-run / parallelize only some steps but it's difficult.
- Recovery point at failure is hard to understand.

Batch Pipeline makes operation, maintenance, and scaling easier by:

> "Decomposing batch processing into stages and designing it as a pipeline."

## ✅ Basic Philosophy & Rules

Example of typical batch pipeline stages:

1. Extract
2. Transform
3. Load
4. Aggregate / Report

Each stage takes the structure of:

- Receiving input dataset
- Fulfilling its own responsibility
- Passing to the next stage

Implementation forms:

- Sequential execution within one process.
- Split into multiple jobs and connected by queue/scheduler.
- Defined as DAG with workflow engine (Airflow, etc.).

### Conceptual Diagram

```mermaid
flowchart LR
    SRC[Source Data]
    EX[Extract]
    TR[Transform]
    LD[Load]
    AGG[Aggregate / Report]

    SRC --> EX --> TR --> LD --> AGG
```

## ✅ Suitable Applications

- Daily / Hourly batch processing.
- ETL Jobs (Load to Data Warehouse).
- Log aggregation / Report generation.
- Bulk Import / Export processing.

Features:

- Easy to monitor and re-run per stage.
- Easy to plan scaling strategy per stage.

## ❌ Unsuitable Cases

- Processing requiring almost real-time response.
- Streaming processing that should operate constantly in event-driven manner.

In such cases, Streaming Pipeline or EDA is more suitable.

## ✅ History (Genealogy / Parent Styles)

- Organized practical knowledge of batch processing existing for a long time into the form of a pipeline.
- Close to ETL patterns in [Data Warehouse / DWH](../../data/data-warehouse.md) context.
- Often combined with workflow orchestration tools in recent years.

## ✅ Related Styles

- **[Pipe & Filter](./pipe-and-filter.md)**: Prototype of simple pipeline within 1 process.
- **[Streaming Pipeline](./streaming-pipeline.md)**: Evolution to real-time processing.
- **[Data Architecture (Lambda / Kappa)](../../data/index.md)**: Positioning as Batch Layer.

## ✅ Representative Frameworks

Batch Pipeline is widely used as a foundation supporting batch workflows.

- **Apache Airflow / Dagster / Argo Workflows**  
  Build pipelines with DAG (Directed Acyclic Graph) and realize re-execution and dependency management per stage.

- **AWS Glue / Google Cloud Dataflow (Batch Mode)**  
  Can build ETL / data transformation processing as a stepwise pipeline.

- **Spark (Batch Processing)**  
  Stage processing by RDD / DataFrame corresponds to pipeline.

- **Airbyte / Fivetran (ELT Tools)**  
  Clearly structure steps of Extract → Load → Transform.

## ✅ Design Patterns Supporting This Style

Inside Batch Pipeline, the following patterns are used to support stepwise processing and reuse.

- **Chain of Responsibility**  
  Connects stages serially and processes them in order.

- **Template Method**  
  Unifies pre-processing / post-processing of jobs and common flows.

- **Iterator**  
  As assistance when processing large scale data sequentially.

- **Strategy**  
  Makes algorithms different per stage replaceable.

## ✅ Summary

Batch Pipeline is a structural style that:

- Controls complexity of batch processing by stage division.
- Is conscious of operational aspects (monitoring, re-execution, recovery).

If a batch is becoming "one huge black box",  
it might be a sign to consider **redesigning as a pipeline**.
