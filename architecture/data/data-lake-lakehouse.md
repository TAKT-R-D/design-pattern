# 🧩 Data Lake / Lakehouse

## ✅ Overview

**Approach combining "Data Lake" accumulating raw data at low cost and manageability of DWH as "Lakehouse".**

## ✅ Problems Addressed

- Semi-structured / unstructured data that cannot be handled flexibly in DWH.
- Raw data that might be discarded before ETL.
- Want to respond to increase in Analysis / ML / Exploration use.

## ✅ Basic Philosophy & Rules

### Data Lake

- Accumulate raw data in object storage like S3/GCS.
- Schema is applied at read time (Schema on Read).

### Lakehouse

- Enhance table management with Delta Lake / Iceberg / Hudi etc.
- Provide DWH-like functions like ACID, version control, index.

## ✅ Suitable Applications

- Data infrastructure for ML model training.
- Massive data processing like logs and clickstreams.
- Utilization of semi-structured data (JSON / Parquet).

## ❌ Unsuitable Cases

- Operations centered on standard reports with fixed format.
- Areas strongly requiring data governance (Lakehouse is needed).

## ✅ History (Genealogy / Parent Styles)

- Data Lake → Developed into Lakehouse from challenges in actual operation.
- Hadoop → Cloud Object Storage → Evolved to ACID Table.

## ✅ Related Styles

- DWH: Complement with strong schema and integrated analysis.
- Lambda/Kappa: Integrate Lake with streaming layer.

## ✅ Representative Frameworks

### Data Lake

- **AWS S3 / Google Cloud Storage / Azure Data Lake Storage**
  Central storage of Data Lake accumulating raw data on large scale.

- **Apache Spark**
  Central existence of data processing on Lake.

- **Trino / Presto**
  SQL query execution engine for Data Lake.

### Lakehouse

- **Delta Lake (Databricks)**
  Provision of ACID Table / Time Travel / Versioning.

- **Apache Iceberg / Apache Hudi**
  Table formats to realize Lakehouse as OSS.

## ✅ Design Patterns Supporting This Style

- **Iterator**
  Used when handling large-scale data in stream / chunk units.

- **Strategy**
  Switching execution method per data processing engine (Spark / Presto).

- **Template Method**
  Unifies common procedures of ETL / ELT.

- **Facade**
  Used in meta-layer hiding complex API of Data Lake / Lakehouse and handling uniformly.

## ✅ Summary

Data Lake / Lakehouse is the **central approach of modern data infrastructure handling massive, diverse, and high-speed data.**
