# 🧩 Data & Analytics Architecture（データ構造・分析基盤）

Data Architecture は、**データの流れ・保存・変換・分析** に関わるアーキテクチャ層を扱う。

- OLTP / OLAP の分離
- データレイク・データウェアハウス
- ストリーミング処理
- ドメインイベントの扱い
- 分散データ整合性（CQRS / Event Sourcing）

## ✅ このカテゴリが扱う問題

- どこにデータを保存するか（DB / Lake / Warehouse）
- どのように集計・分析するか
- データのライフサイクル（取得 → 保存 → 変換 → 分析 → 提供）
- ストリーミング vs バッチ
- 分散システムでのデータ整合性の扱い

## ✅ Data Architecture の代表スタイル

### ● Data Warehouse（DWH）

- 解析・レポート用の集約データベース
- 企業内 BI の中心

### ● Data Lake / Lakehouse

- 非構造／構造データをまとめて扱う大規模基盤
- ML・大規模分析向け
- Lakehouse は DWH + Lake の融合型

### ● CQRS（Command Query Responsibility Segregation）

- 書き込みモデルと読み取りモデルを分離
- 高負荷分散・高速読み取りが必要な場面に有効

### ● Event Sourcing

- 状態を “イベントの履歴” で管理
- 監査／再構築／スナップショットなど高度な要件に対応

### ● Data Mesh

- ドメイン単位でデータ製品を管理する
- 組織構造とデータ責務の分散がポイント

### ● Lambda / Kappa Architecture

- バッチ＋ストリーム（Lambda）
- ストリーム単体の一本化（Kappa）

## ✅ このカテゴリの読み方

1. OLTP と OLAP の境界を理解する
2. ストリーミング／バッチのどちらが主か
3. 組織内のデータ責任がどのように分散するべきか（Mesh）

## ✅ 他の階層との関係

- **Integration**：イベント駆動がデータ構造に直結
- **System Topologies**：分散サービスでは CQRS／ES が重要
- **Cross-cutting**：データガバナンス・監査・SLO などと密接
