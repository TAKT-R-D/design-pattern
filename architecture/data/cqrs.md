# 🧩 CQRS（Command Query Responsibility Segregation）

## ✅ このスタイルの概要

**読み取り（Query）と書き込み（Command）を分離するアーキテクチャスタイル。**

## ✅ 解決しようとした問題

- 読み取り最適化 vs 書き込み整合性の両立
- 大規模システムでのクエリ性能問題
- 特定のデータアクセスパターンを汎用モデルが満たせない

## ✅ 基本思想・ルール

- Command Model と Query Model を別々に設計する
- 読み取り用 DB（キャッシュ／検索専用）と書き込み用 DB を分けることも多い
- Event Sourcing と併用されることが多い

### 3.1 概念図（Conceptual Diagram）

![CQRS Architecture diagram](./cqrs.png)

> 出典: Greg Young, “CQRS Documents”, 2010, Figure 12.  
> https://cqrs.files.wordpress.com/2010/11/cqrs_documents.pdf

## ✅ 得意なアプリケーション

- 書き込みと読み取りの負荷バランスが大きく異なるシステム
- 高トラフィックでスケール要求が大きい API
- 検索要件や集計要件が複雑なドメイン

## ✅ 不向きなケース

- 小規模 CRUD アプリ（複雑性が上回る）
- 分離により整合性や運用負荷が増える状況

## ✅ 歴史

- DDD 文脈で提案されたが、スケーラビリティの観点でも広く採用

## ✅ 関連スタイル

- Event Sourcing：状態をイベントで保持するスタイルと相性が良い
- EDA：非同期更新に活用

## ✅ 代表的なフレームワーク

- **EventStoreDB**  
  Event Sourcing と組み合わせた CQRS 実装で広く採用される。

- **Axon Framework（Java）**  
  コマンド／クエリの分離と Event Sourcing を統合した実装が可能。

- **Lagom（Scala / Java）**  
  CQRS + ES を前提としたマイクロサービスフレームワーク。

- **Kafka + Custom Command Processor**  
  Kafka の Topic を通じて Command/Event をやり取りする CQRS 実装も一般的。

## ✅ このスタイルを支えるデザインパターン

- **Command**  
  書き込み操作を「意図を持つ操作」として扱う中心的パターン。

- **Memento**  
  状態管理の補助として、特定時点のスナップショットを扱う場合に使われる。

- **Strategy**  
  読み取り／書き込みモデルで異なるデータ取得方式を切り替える。

- **Observer**  
  書き込み結果のイベントを購読し、読み取りモデルを更新する際に利用。

- **Mediator**  
  Command Handler／Query Handler が疎結合で連携する構造に現れる。

## ✅ まとめ

CQRS は **読み書きの分離** というシンプルな概念で、  
スケールと柔軟なモデル設計を実現する強力な手法である。
