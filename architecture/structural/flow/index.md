# 🧩 E. Flow / Pipeline Structural Styles

## ✅ Overview

This family covers styles that deal with **how to configure processing inside an application as a series of steps (pipeline).**

- Data or messages are processed "step-by-step".
- Each stage (filter) is composed of a single responsibility, and functions are realized by combining them.
- Important in data flow-centric architectures like batch processing and streaming processing.

Representative Styles:

- Pipe & Filter
- Batch Pipeline
- Streaming Pipeline

## ✅ Why This Family Emerged (History & Background)

- Idea of "connecting small programs with pipes (`|`)" from Unix culture.
- Needs in data processing fields like ETL (Extract-Transform-Load).
- Increase in log processing, event processing, streaming analytics, etc.

Flow / Pipeline styles emerged from the need:

> "To handle complexity by combining simple processes rather than one huge process."

## ✅ Problems Addressed

- Huge monolithic processing functions (chunks of complex if/for loops).
- Batch processing / ETL becoming spaghetti code and reusable.
- Difficulty in replacing or parallelizing only parts of the process.

Flow / Pipeline styles aim to **"treat the processing flow as a design object"** by:

- Splitting
- Arranging
- Making re-combinable

## ✅ Styles Belonging to This Family

- **Pipe & Filter**: Classic style connecting processing with filters (processing stages) and pipes (data flow).
- **Batch Pipeline**: Pipeline structure as batch processing (ETL jobs, batch workflows, etc.).
- **Streaming Pipeline**: Pipeline processing streaming data continuously.

## ✅ Relationship with Other Families

- Very compatible with **Data Architecture** (Lambda / Kappa / Data Pipeline).
- Often combined with **Integration Styles** (Messaging / EDA) to configure distributed pipelines.
- High affinity with **Reactive / Actor** families, used as internal structure for event stream processing.

## ✅ When to Reference

- Data flow-centric systems like Batch processing, ETL, Log processing, Streaming analytics.
- When you want to organize processing that is "transformed step-by-step".
- When considering responsibility division, reuse, and parallel execution for each processing stage.

Understanding this family gives you the perspective of **"designing the processing flow itself as architecture"**.
