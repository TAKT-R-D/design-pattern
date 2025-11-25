# 🧩 Lambda / Kappa Architecture

## ✅ このスタイルの概要

**大量データ処理のためのアーキテクチャスタイルで、バッチ＋ストリーミングの二層構造（Lambda）と、ストリーミング単層構造（Kappa）の 2 つを対比させたもの。**

## ✅ 解決しようとした問題

### Lambda Architecture が解決したかったこと

- バッチ処理は「正確だが遅い」
- ストリーミング処理は「速いが不正確になりやすい」
- どちらかだけでは大規模データ分析の要求を満たせない

→ 解決策：  
**「バッチレイヤ」と「スピードレイヤ」を併用することで、正確さと即時性を両立する」**

### Kappa Architecture が解決したかったこと

- Lambda Architecture の 2 系統メンテナンスが大変（コード重複、モデル二重管理）
- ストリーミング技術の進化により「バッチ不要では？」という議論が登場

→ 解決策：  
**「全処理をストリーミングとして統一する」**

## ✅ 基本思想・ルール

### Lambda Architecture の三層

1. **Batch Layer**  
   生データ（immutable）を蓄積し、定期的にバッチ再計算して真値を作る
2. **Speed Layer（Streaming Layer）**  
   バッチが来るまでの間を補完するための近リアルタイム処理
3. **Serving Layer**  
   バッチ結果 + ストリーミング結果をマージして提供する

### Kappa Architecture の思想

- 「バッチ処理もストリームの再生で表現できる」
- バッチレイヤを廃止し、**ストリーム処理一本**で構成する
- 状態の再計算はストリームの Replay で実現

## ✅ 得意なアプリケーション

### Lambda

- 正確な集計が必要な DWH 系分析
- バッチ ETL とリアルタイム分析の両方が必要なケース
- 大規模組織での段階的移行（既存バッチの継続利用）

### Kappa

- リアルタイム処理が中心のビジネス（監視、検知、IoT）
- ストリームを中心としたシンプルなパイプラインを構築したい場合
- 再計算ニーズがあるが、バッチを持ちたくない環境

## ❌ 不向きなケース

### Lambda

- 開発・運用が複雑（2 つのレイヤー管理）
- 小〜中規模データでは過剰設計

### Kappa

- DWH 的な正確な集計が強く求められるケース
- ストリーミング基盤が整備されていない環境

## ✅ 歴史（系譜・親スタイル）

- Lambda Architecture（Nathan Marz）がバッチ＋ストリームの二重構造を提唱
- その後、Kafka Streams / Flink / Beam などの進化で Kappa Architecture が広まる
- 現代では Lakehouse + Streaming との組み合わせが一般的になりつつある

## ✅ 関連スタイル

- **Batch Pipeline**：Lambda の Batch Layer の原型
- **Streaming Pipeline**：Kappa の中心モデル
- **Data Lake / Lakehouse**：生データの蓄積と再計算の土台
- **Event Sourcing**：Replay による状態再構築という発想に近い

## ✅ 代表的なフレームワーク

- **Apache Spark**  
  Lambda Architecture の Batch Layer を構築する中心技術。

- **Kafka Streams / Apache Flink**  
  Kappa Architecture のストリーミング処理基盤として代表的。

- **Apache Beam**  
  Batch / Streaming を統合したパイプラインを構築でき、Lambda/Kappa のどちらにも対応。

- **Delta Lake / Iceberg / Hudi**  
  再計算や Replay を前提とした Lakehouse と相性が良い。

## ✅ このスタイルを支えるデザインパターン

- **Iterator**  
  ストリーム／大規模データの逐次処理に利用。

- **Observer**  
  ストリームイベントの到着をトリガーに処理する。

- **Strategy**  
  バッチ処理／ストリーミング処理のアルゴリズムを切り替える。

- **Template Method**  
  ETL / パイプライン構築の共通フローを統一する。

## ✅ まとめ

Lambda / Kappa Architecture は、  
**大量データを「正確さ」「即時性」「再計算可能性」でどう扱うか**  
という観点で生まれたデータ処理構造である。

- 正確性 + 即時性が両方必要 → **Lambda**
- ストリーミング中心でシンプルにしたい → **Kappa**

という住み分けが実務ではよく使われる。
