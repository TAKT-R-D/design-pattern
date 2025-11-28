---
sidebar_label: 🧩 Microservices
---

# 🧩 Microservices Architecture

## ✅ このスタイルの概要

**アプリケーションを小さな独立サービスに分割し、独立デプロイ・独立スケールを可能にする構造スタイル。**

## ✅ 解決しようとした問題

- 巨大モノリスの開発速度低下
- チーム規模増加による衝突
- 機能ごとに異なるスケール特性への対応

## ✅ 基本思想・ルール

- サービスごとに独立デプロイ
- 独立したデータストア（Database per Service）
- API（REST/gRPC/Event）による疎結合連携
- [DevOps](../cross-cutting/devops.md) / CI/CD / [Observability](../cross-cutting/observability.md) の強い前提

### 概念図（Conceptual Diagram）

![Microservices Architecture diagram](/img/architecture/microservices.svg)

> 出典: Microsoft, “Microservices architecture style – Azure Architecture Center”.  
> https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices

## ✅ 得意なアプリケーション

- 多チーム・多領域での開発
- 可用性・スケール要件が高い Web サービス
- 機能ごとに技術選択が異なる場合

## ❌ 不向きなケース

- 小規模プロダクト（オーバーエンジニアリング）
- 運用が重く、SRE 体制が不十分
- 分散トランザクションが大量に発生するドメイン

## ✅ 歴史

- Netflix / Amazon の成功により普及
- [SOA](./soa.md) の思想をより軽量に実装した流派として発展

## ✅ 関連スタイル

- [SOA](./soa.md)：より重量級でエンタープライズ的な祖先
- [Modular Monolith](./modular-monolith.md)：導入前の構造整理として有効

## ✅ 代表的なフレームワーク

- **Spring Cloud**  
  Config / Gateway / Discovery / Circuit Breaker など、Micoservices の総合基盤。

- **Go + gRPC + Kubernetes**  
  軽量で高速なサービス構築に強い組み合わせ。

- **Node.js / NestJS / Express**  
  BFF や小粒サービスに適した構成。

- **AWS（ECS / Lambda / API Gateway / EventBridge）**  
  マネージドサービスによるマイクロサービス構築。

- **Dapr**  
  サイドカーでサービス間連携を提供するプラットフォーム。

## ✅ このスタイルを支えるデザインパターン

- **Facade**  
  API Gateway を通じた統一入口。

- **Proxy**  
  Service Mesh や Sidecar によるトラフィック制御。

- **Observer**  
  イベント駆動連携やドメインイベント配信。

- **Mediator**  
  Orchestrator（Workflow）による複数サービス調整。

- **Strategy**  
  サービスごとに異なるアルゴリズム／技術選択。

## ✅ まとめ

Microservices は  
**「高速開発 × 高スケール × 高可用性」** のための強力な構造だが、  
運用コストが高いため **組織規模とドメイン特性に依存する。**
