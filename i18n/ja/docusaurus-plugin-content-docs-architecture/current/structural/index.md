---
sidebar_label: はじめに
pagination_label: アプリ内部構造概要
---

# Structural Styles（アプリ内部構造）

ソフトウェアアーキテクチャの中でも、**Structural Styles** は
「1 つのアプリケーション（1 プロセス／1 サービス）の **内部** をどう分割し、
クラス／モジュール／レイヤー／コンポーネントが **どう依存し合うか**」を扱う領域である。

- 例：レイヤードアーキテクチャ、MVC、マイクロカーネル、パイプ＆フィルタ など
- 対象：**単一サービスの“中身の構造”**（マイクロサービスにするかどうか、とは別の話）

この章では、代表的な Structural Style を「系統（ファミリー）」ごとに整理し、

- どんな歴史・背景から生まれたか
- どんな問題を解決しようとしているか
- どのようなアプリケーションに向いているか

といった観点で解説する。

## ✅ このカテゴリが扱う問題

Structural Styles は、主に次のような問題に向き合う。

- ビジネスロジックが UI や DB に埋もれてしまい、変更が難しくなる
- クラスやモジュールの責務が曖昧で、依存関係がスパゲッティ化する
- テストの単位が大きすぎて、自動テストが書きづらい
- 機能追加のたびに既存コードを壊してしまう

言い換えると、

> **「1 つのアプリケーションの中で、構造と依存をどう整理するか？」**

という問いに対する回答が、Structural Styles のさまざまな流派である。

## ✅ Structural Styles の系統

このサイトでは、代表的なスタイルを次のような“系統（ファミリー）”に分けて整理する。

### A. 非構造〜初期系

- Big Ball of Mud（泥団子：アンチパターン）
- Transaction Script など

### B. データ／レコード中心系

- Active Record
- Table Module
- Anemic Domain Model など

### C. レイヤード／ドメインモデル系

- Classic Layered（3-tier / n-tier）
- Domain Model Layered
- Dependence-rule-based Layered ファミリー
  - 依存方向やドメイン中心設計を強く意識したスタイル群

### D. UI Interaction / Presentation 系

- MVC / MVP / MVVM / MVU など

これらの UI パターンは、プレゼンテーション層（画面まわり）の構造を扱うものであり、Classic Layered や Hexagonal のようなアプリ全体の内部構造スタイルとはレイヤが異なる。そのため、例えば「バックエンドは Hexagonal、UI は MVVM」といった形で組み合わせて利用することができる。

### E. Flow / Pipeline 系

- Pipe & Filter
- Batch Pipeline
- Streaming Pipeline など

### F. Microkernel / Plugin 系

- Microkernel Architecture
- Plugin / Extension Architecture など

### G. Reactive / Actor 系

- Actor Model ベース
- Event Loop / Reactor
- Reactive Streams / FRP など

各系統のページでは、そのファミリーに共通する思想と歴史を整理し、
さらに個別スタイル（例：MVC, Classic Layered, Microkernel…）のページへと掘り下げていく。

## ✅ このカテゴリの読み方

このカテゴリは、次のような順序で読むことを想定する。

1. **系統レベルのページをざっと眺める**  
   「どんなファミリーがあるか」「自分のアプリに関係しそうなのはどこか」を掴む。

2. **気になるスタイルの詳細ページを読む**

   - 背景・歴史（どこから来たのか）
   - 解決しようとした問題
   - 基本ルール（依存方向、責務分割など）
   - 得意なアプリケーションと苦手なケース

3. **自分の文脈での“選び方”に戻る**  
   どのスタイルをそのまま使うか／組み合わせるか／あえて採用しないか、
   を判断するための材料として使う。

## ✅ 他の階層との関係

Structural Styles は、他のアーキテクチャ階層とも密接に関係する。

- **System Topologies（システム構成）**

  - モノリスであっても、マイクロサービスであっても、  
    各サービスの内部には必ず何らかの Structural Style が存在する。

- **Integration Styles（通信・インテグレーション）**

  - Hexagonal などのスタイルは、ポート／アダプタを通じて  
    REST / gRPC / メッセージングなどの Integration Styles と強く結びつく。

- **Data Architecture（データ・分析）**

  - CQRS / Event Sourcing のように、内部構造とデータアーキテクチャが  
    一体となっているスタイルもある。

- **Cross-cutting & Socio-technical（運用・文化・品質）**
  - テスト容易性、変更容易性、チーム分割のしやすさなど、  
    構造の選択はそのまま開発体験や運用コストに影響する。

この章は、そうした「他の階層」との関係も意識しながら、**アプリケーション内部構造という視点からアーキテクチャを見直す** ための入り口になることを目指す。

## ✅ DDD と Structural Styles の関係

本サイトでは DDD（Domain-Driven Design）を
**「アーキテクチャそのもの」ではなく、
アプリ内部構造を考えるための“視点（レンズ）”** として扱う。

DDD は下記のように、複数の Structural Style と関係している。

- **レイヤード／ドメインモデル系（C 系統）**  
  エンティティ／値オブジェクト／ドメインサービスなど、  
  DDD のパターン群はこの系統と特に親和性が高い。

- **依存方向ルール（Dependency Rule）を重視したスタイル群**  
  Hexagonal / Onion / Clean Architecture は、  
  “ドメイン中心・依存逆転”という DDD 的な考え方と自然に結びつく。

- **CQRS / Event Sourcing（Data Architecture）**  
  DDD の発展に影響を受け、  
  「状態遷移」「集約」などの考え方と共に用いられることが多い。

- **Modular Monolith / Microservices（Topologies）**  
  “境界づけられたコンテキスト（Bounded Context）”は、  
  サービス分割やモジュール分割と非常に相性が良い。

このように DDD は、  
特定のスタイルを必須とする技法ではなく、

> **「ドメイン中心に構造を考えるときに現れる共通パターン」**

として各系統に関わっている。

本サイトでは、各スタイルの説明の中で
DDD が自然に関係する箇所のみ触れる方針とし、
詳細な DDD 入門は扱わない。

## ✅ フレームワークが示す“アーキテクチャ風味（Flavor）”

モダンフレームワークは、特定のアーキテクチャスタイルを  
**厳密に強制するわけではない**。  
しかし、React / Rails / Spring Boot / Node.js などはそれぞれ、  
**「自然とそう設計するとしっくりくる方向性（flavor）」** を持っている。

例：

- React / SwiftUI：MVU（Elm Architecture）的な UI 構造
- Rails / Laravel：Active Record を中心とした Data-centric
- Spring Boot / NestJS / .NET：Clean / Hexagonal に寄せやすい構造
- Node.js：Event Loop を核とする非同期・イベント駆動

これらの“風味”を理解しておくと、
**自分の使っているフレームワークがどの Structural Style に近いのか** を
直感的に把握でき、各スタイルの理解が深まる。

👉 **[主要フレームワークとアーキテクチャ風味の対応表](./framework-architecture-flavors.md)**

## ✅ Structural Styles を支えるデザインパターン

アプリケーション内部構造（Structural Styles）は、  
しばしば特定の **デザインパターンによって成立・強化** される。

- Clean / Hexagonal / Onion では **Adapter / Strategy / Command** が中核
- MVC / MVVM / MVU は **Observer / State / Mediator** が UI 更新を支える
- Microkernel では **Strategy / Abstract Factory / Proxy** がプラグイン機構を実現
- Pipeline / Reactive 系は **Chain of Responsibility / Iterator / Observer** が基本構造になる

これらは _1 つのスタイル = 1 つのパターン_ ではなく、  
**複数のパターンの組み合わせによってアーキテクチャ特性が生まれる** という関係性だ。

詳細なマッピング表は以下のページにまとめている：

👉 **[Structural Styles とデザインパターン対応表](./design-pattern-support.md)**

デザインパターン解説（アンチパターン含む）は [Tutorial](/docs/intro) を基準としており、本章でも同じ名称・語彙体系を採用している。
