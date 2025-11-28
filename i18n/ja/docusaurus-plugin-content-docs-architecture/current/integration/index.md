---
sidebar_label: はじめに
pagination_label: 通信・連携方式概要
---

# Integration Styles（通信・連携方式）

Integration Styles は、**サービス同士・外部システムとどのように通信し、連携するか** を定めるアーキテクチャ層を扱う。

## ✅ このカテゴリが扱う問題

- サービス同士の通信方式をどう選ぶか
- 同期 API の遅延・スケール問題
- イベント駆動の複雑さ
- Saga による分散トランザクションの扱い
- API 境界の契約（Contract）管理

## ✅ Integration Styles の代表スタイル

### ● [REST / gRPC / GraphQL](./rest-grpc-graphql.md)

- 同期通信の基本方式
- REST：最も広く普及、CRUD 向け
- gRPC：高速、型安全、マイクロサービス向け
- GraphQL：フロントエンド最適化（BFF と相性が良い）

### ● [Event-Driven Architecture（EDA）](./event-driven.md)

- 非同期イベントで疎結合化
- 高スケール／高可用構成に向く
- ただし可観測性と整合性の複雑度は上がる

### ● [Saga Pattern（オーケストレーション／コレオグラフィ）](./saga.md)

- 分散トランザクションの制御
- 決済・予約など「複数サービスをまたぐ整合性」に必須

### ● [API Gateway / BFF](./api-gateway-bff.md)

- クライアント向け API の統合と最適化
- 認証・ルーティング・レート制限を集約

### ● [Service Mesh](./service-mesh.md)

- 通信をアプリから分離し、ネットワークレイヤで制御
- mTLS, リトライ, Circuit Breaker, トレーシングなどを自動化

### ● [Outbox Pattern（Transactional Outbox）](./outbox-pattern.md)

- DB トランザクション内でイベントをバッファリング
- アプリ更新とイベント配送の不整合を解消
- マイクロサービスで最も実務的な整合性確保手法

### ● [Change Data Capture（CDC）](./cdc.md)

- DB の変更ログを直接ストリーム化
- アプリを介さずイベントを生成
- 高スループットのデータ複製やパイプラインに向く

## ✅ このカテゴリの読み方

1. 同期/非同期の使い分け
2. “整合性”と“遅延”のトレードオフ
3. BFF や Mesh による複雑さの吸収レイヤの役割

## ✅ 他の階層との関係

- **[System Topologies](../topologies/index.md)** と最も強く結びつく
- **[Data Architecture（CQRS, ES）](../data/index.md)** はほぼ EDA とセット
- **[Cross-cutting](../cross-cutting/index.md)**（SLO/Observability）は通信可視化に直結
