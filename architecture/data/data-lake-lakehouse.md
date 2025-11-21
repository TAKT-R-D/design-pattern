# Data Lake / Lakehouse

## 1. 一言でいうと

**生データを低コストに蓄積する“Data Lake”と、  
DWH の管理性を組み合わせた“Lakehouse”のアプローチ。**

---

## 2. 解決しようとした問題

- DWH では柔軟に扱えない半構造化／非構造化データ
- ETL の前に捨てられる可能性がある生データ
- 分析／ML／探索用途の増加に対応したい

---

## 3. 基本思想・ルール

### Data Lake

- S3/GCS などのオブジェクトストレージに生データを蓄積
- スキーマは読取時に適用（Schema on Read）

### Lakehouse

- Delta Lake / Iceberg / Hudi などでテーブル管理を強化
- ACID, バージョン管理, インデックスなど DWH 的機能を提供

---

## 4. 得意なアプリケーション

- ML モデル学習のデータ基盤
- ログ・クリックストリームなど大量データ処理
- 半構造化データ（JSON / Parquet）の利活用

---

## 5. 不向きなケース

- 固定フォーマットの定型レポート中心の業務
- データガバナンスを強く求める領域（Lakehouse が必要）

---

## 6. 歴史（系譜・親スタイル）

- Data Lake → 実運用での課題から Lakehouse に発展
- Hadoop → クラウドオブジェクトストレージ → ACID Table へ進化

---

## 7. 関連スタイル

- DWH：強いスキーマと統合分析で補完
- Lambda/Kappa：Lake をストリーミングレイヤーと統合

---

---

## 8. Framework Examples（代表的な基盤・プロダクト）

### Data Lake

- **AWS S3 / Google Cloud Storage / Azure Data Lake Storage**  
  生データを大規模に蓄積する Data Lake の中心的ストレージ。

- **Apache Spark**  
  Lake 上のデータ処理の中心的存在。

- **Trino / Presto**  
  Data Lake に対する SQL クエリ実行エンジン。

### Lakehouse

- **Delta Lake（Databricks）**  
  ACID テーブル／Time Travel／バージョニングの提供。

- **Apache Iceberg / Apache Hudi**  
  Lakehouse を OSS として実現するためのテーブルフォーマット。

---

## 9. Supported Design Patterns（このスタイルを支えるデザインパターン）

- **Iterator**  
  大規模データをストリーム／チャンク単位で扱う際に利用。

- **Strategy**  
  データ処理エンジン（Spark / Presto）ごとの実行方式を切り替える。

- **Template Method**  
  ETL / ELT の共通手順を統一する。

- **Facade**  
  Data Lake / Lakehouse の複雑な API を隠し、統一的に扱うメタレイヤで使われる。

---

## 10. まとめ

Data Lake / Lakehouse は、  
**大量・多様・高速なデータを扱う現代のデータ基盤の中心的アプローチ** です。
