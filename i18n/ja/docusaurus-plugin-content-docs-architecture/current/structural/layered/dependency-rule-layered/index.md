# 依存ルール重視レイヤード

## ✅ 概要

Dependency-rule-based Layered は、

> **「依存は内側に向かう一方向のみ」**

というルールを強く打ち出し、  
**ドメインモデルを外部技術やインフラから守る** ことを重視するレイヤード系スタイルのグループである。

代表的なスタイル：

- [Hexagonal Architecture（Ports & Adapters）](./hexagonal.md)
- [Onion Architecture](./onion.md)
- [Clean Architecture](./clean.md)

## ✅ 解決しようとした問題

[Domain Model Layered](../domain-model-layered.md) まで来ても、実務では次のような問題が残っていた：

- Domain 層にフレームワーク依存コード（アノテーション、ORM 特有の型など）が侵食する
- テストでインフラ依存を切り離しにくい
- Web UI / バッチ / CLI / メッセージなど複数の I/O を自然に扱いづらい

Dependency-rule-based Layered はこれに対して：

- 依存方向を **内側のレイヤーのみに固定** し、
- ドメインを「純粋なルールの集合」として残す

という方向で応えようとする。

## ✅ 基本思想・ルール

共通のコアとなる考え方：

- ドメインモデルが中心（内側）
- 外側にアプリケーションサービス、インターフェースアダプタ、フレームワーク / ドライバが配置される
- 依存矢印は常に内側に向かう
- 外側のレイヤーは、内側の抽象（インターフェース）に依存する

表現は [Hexagonal](./hexagonal.md) / [Onion](./onion.md) / [Clean](./clean.md) で異なるが、この思想は共通する。

## ✅ この系統に属するスタイル

- **[Hexagonal Architecture（Ports & Adapters）](./hexagonal.md)**

  - ドメインと外部をポートとアダプタでつなぐ、六角形のメタファ

- **[Onion Architecture](./onion.md)**

  - ドメイン中心の層構造を“玉ねぎ”として可視化したスタイル

- **[Clean Architecture](./clean.md)**
  - Entities / Use Cases / Interface Adapters / Frameworks & Drivers と明確に層を定義
  - 依存ルールとユースケース層を強調

## ✅ 他の系統との関係

- [Classic](../classic-layered.md) / [Domain Model Layered](../domain-model-layered.md) の **発展系**
- Integration Styles（[REST](../../../integration/rest-grpc-graphql.md) / [gRPC](../../../integration/rest-grpc-graphql.md) / [EDA](../../../integration/event-driven.md) ）との接続において、Ports & Adapters のような考え方が特に重要
- テスト戦略（ユニット / 統合）と非常に深く関わる

## ✅ どんな時に参考になるか

- ドメインが複雑で、長期運用が前提のプロダクト
- フレームワーク依存を減らし、将来の技術選択の自由度を残したい
- 複数の UI / API / バッチ / メッセージングチャネルを扱うバックエンド
- 自動テストを重視し、ドメインを外部から独立に検証したい

このディレクトリ配下では [Hexagonal](./hexagonal.md) / [Onion](./onion.md) / [Clean](./clean.md) を個別に取り上げ、  
それぞれの特徴と違いを整理する。
