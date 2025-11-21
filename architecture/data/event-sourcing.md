# 🧩 Event Sourcing

## ✅ このスタイルの概要

**状態そのものではなく「状態を変化させたイベント」を蓄積し、それを再生して現在の状態を得るスタイル。**

## ✅ 解決しようとした問題

- 更新履歴の完全な保持（監査・再現）
- 競合の検知や非同期処理との整合性確保
- 状態変化の意味（なぜこの状態になったか）を後から把握しやすく

## ✅ 基本思想・ルール

- 変更操作はすべてイベントとして保存
- 現在状態 = 過去イベントの再生結果（Replay）
- Event Store（イベント専用 DB）を利用することが多い

### 3.1 概念図（Conceptual Diagram）

![Event Sourcing Architecture diagram](./event-sourcing-overview.png)

> 出典: Microsoft, “Event Sourcing pattern – Azure Architecture Center”.  
> https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing

## ✅ 得意なアプリケーション

- 金融・会計など履歴管理が必須の領域
- DDD の Aggregate と相性の良いドメイン
- 自動再処理・再演算が必要なシステム

## ✅ 不向きなケース

- 履歴保持の必要が薄いシンプルな CRUD
- イベント量が多すぎ、リプレイコストが問題になるケース

## ✅ 歴史

- Actor Model などイベント中心の計算モデルに影響
- CQRS との併用が一般的

## ✅ 関連スタイル

- CQRS：書き込み側のモデルとして利用されやすい
- EDA：イベント駆動システムと自然に統合

## ✅ 代表的なフレームワーク

- **EventStoreDB**  
  Event Sourcing 専用の Event Store として最も広く使われる。

- **Kafka / Kinesis / Pub/Sub**  
  Append-only ログとしてイベントを蓄積し、Replay で状態再構築を行う実装が可能。

- **Axon Framework（Java）**  
  Event Sourcing と CQRS を統合した実装が容易。

- **Temporal / Cadence**  
  長期間のイベント履歴管理とワークフローのリプレイをサポート。

## ✅ このスタイルを支えるデザインパターン

- **Memento**  
  スナップショットの保存・復元に利用される。

- **Command**  
  イベントを生成する操作オブジェクトとして扱う。

- **Observer**  
  イベント購読者が状態変化を通知として受け取る構造。

- **Iterator**  
  Event Stream の順次再生に利用される。

- **State**  
  Aggregate がイベントを適用しながら内部状態を更新する。

## ✅ まとめ

Event Sourcing は **履歴を第一級データとして扱い、  
意味のある状態管理を実現するアーキテクチャ** である。
