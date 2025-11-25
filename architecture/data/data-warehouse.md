# 🧩 Data Warehouse (DWH)

## ✅ Overview

**Centralized data store integrating organization-wide data and storing it optimized for analysis use.**

## ✅ Problems Addressed

- Data is siloed per business system.
- Complex JOINs and pre-processing are required for every analysis.
- Reporting and analysis become personalized and reproducibility is low.

Data Warehouse provides a centralized infrastructure centered on **"Integration", "Normalization", and "History Management"** for these.

## ✅ Basic Philosophy & Rules

- Format data with ETL (Extract → Transform → Load) and store in DWH.
- Schema design is optimized for analysis like Star / Snowflake schema.
- History is also managed by retaining time-series data (SCD etc.).

## ✅ Suitable Applications

- Integrated reports, BI dashboards.
- Centralized management of company-wide KPIs.
- Definitive data store for audit and regulatory compliance.

## ❌ Unsuitable Cases

- Exploratory analysis wanting to handle raw data flexibly (Data Lake is more suitable).
- Cases where real-time nature is important like streaming.

## ✅ History (Genealogy / Parent Styles)

- Standard approach continuing since 1990s.
- Multiple schools exist like Kimball / Inmon methods.

## ✅ Related Styles

- Data Lake / Lakehouse: More flexible data retention.
- Lambda / Kappa Architecture: Use DWH as batch layer.

## ✅ Representative Frameworks

- **Amazon Redshift**
  Pioneer of cloud DWH. Provides large-scale analysis processing.

- **Google BigQuery**
  Serverless DWH realizing scale and query acceleration.

- **Snowflake**
  Characterized by virtual warehouse structure and compute separation architecture.

- **Teradata / Oracle Exadata**
  Traditional on-premise DWH, infrastructure for high-performance analysis processing.

## ✅ Design Patterns Supporting This Style

- **Template Method**
  Unifies ETL procedures (Extract → Transform → Load).

- **Strategy**
  Switching optimization strategies (Index / Partition).

- **Iterator**
  Used when processing massive data sequentially.

- **Facade**
  Integration layer (BI tools and metadata management) hides internal complexity.

## ✅ Summary

DWH is the **royal road for standard reports and definitive data analysis**,
and is still widely used as a stable business analysis platform.
