# 📚 References & Further Reading

本サイトのアーキテクチャ解説は、以下の書籍・論文・記事をベースに構成している。
各トピックをより深く学びたい場合の学習ロードマップとしても活用できる。

## 🏛 General Architecture (全体・基礎)

ソフトウェアアーキテクチャの基礎概念、歴史、パターンを学ぶための必読書である。

- **Patterns of Enterprise Application Architecture** (Martin Fowler)
  - 通称 PoEAA。Transaction Script, Domain Model, Active Record, Table Module などの原典。
  - [公式カタログ (martinfowler.com)](https://martinfowler.com/eaaCatalog/)
- **Software Architecture in Practice** (Len Bass, Paul Clements, Rick Kazman)
  - アーキテクチャの品質特性（Quality Attributes）や評価手法についての古典的名著である。
- **Fundamentals of Software Architecture** (Mark Richards, Neal Ford)

  - 現代的な視点でアーキテクチャスタイル（Layered, Microkernel, Microservices 等）を比較・整理した良書である。

- **Software Systems Architecture** (Nick Rozanski, Eóin Woods)
  - アーキテクチャビューと利害関係者分析を体系化した実務向けガイド。

## 🏗 Structural Styles (アプリ内部構造)

### Layered / Domain Model / Dependency Rule

- **Domain-Driven Design: Tackling Complexity in the Heart of Software** (Eric Evans)
  - DDD の原典。ドメインモデル、ユビキタス言語、境界づけられたコンテキストの概念である。
- **Clean Architecture: A Craftsman's Guide to Software Structure and Design** (Robert C. Martin)
  - Clean Architecture の詳細解説と、SOLID 原則との関係である。
- **Implementing Domain-Driven Design** (Vaughn Vernon)
  - 通称 IDDD。Hexagonal Architecture を DDD とどう組み合わせるかの実践的解説が豊富である。
- **[Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)** (Alistair Cockburn)
  - Ports & Adapters の提唱者によるオリジナル記事である。
- **[The Onion Architecture](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/)** (Jeffrey Palermo)
  - Onion Architecture の提唱記事である。

### Other Structural Patterns

- **Pattern-Oriented Software Architecture (POSA) Series**
  - Microkernel, Pipe & Filter などの構造パターンが詳細に体系化されている。
- **[The Reactive Manifesto](https://www.reactivemanifesto.org/)**

  - Reactive Architecture の 4 つの特性（Responsive, Resilient, Elastic, Message Driven）の定義である。

- **Refactoring to Patterns** (Joshua Kerievsky)
  - パターン適用の背景となる設計判断を重視した実践的書籍。

## 🌐 System Topologies (システム構成・粒度)

- **Building Microservices** (Sam Newman)
  - マイクロサービスの設計・運用・分割基準についての標準的な教科書である。
- **Monolith to Microservices** (Sam Newman)
  - モノリスからマイクロサービスへの移行パターン（Strangler Fig 等）の解説である。
- **[Microservices](https://martinfowler.com/articles/microservices.html)** (James Lewis, Martin Fowler)
  - マイクロサービスの定義を決定づけた記事である。
- **Serverless Architectures on AWS** (Peter Sbarski)

  - サーバーレスアーキテクチャのパターンと実践である。

- **Site Reliability Workbook** (Google SRE Team)
  - 大規模分散システムの運用設計と実践例が豊富である。

## 🔗 Integration Styles (通信・連携)

- **Enterprise Integration Patterns** (Gregor Hohpe, Bobby Woolf)
  - メッセージング、Pub/Sub、Routing などの統合パターンのバイブルである。
  - [公式カタログ (enterpriseintegrationpatterns.com)](https://www.enterpriseintegrationpatterns.com/)
- **Microservices Patterns** (Chris Richardson)

  - Saga パターン、API Gateway、CQRS/ES などのマイクロサービス特有の実装パターン解説である。

- **Distributed Systems Observability** (Cindy Sridharan)
  - 分散システムにおける計測とトレースの実務知識を提供する。

## 💾 Data Architecture (データ・分析)

- **[CQRS Documents](https://cqrs.files.wordpress.com/2010/11/cqrs_documents.pdf)** (Greg Young)
  - CQRS の提唱者による解説ドキュメントである。
- **Designing Data-Intensive Applications** (Martin Kleppmann)
  - データ分散、レプリケーション、パーティショニング、バッチ/ストリーム処理の仕組みを深く理解するための名著である。
- **[Data Mesh Principles](https://martinfowler.com/articles/data-mesh-principles.html)** (Zhamak Dehghani)
  - Data Mesh の概念と 4 つの原則についての解説である。
- **[The Log: What every software engineer should know about real-time data's unifying abstraction](https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying)** (Jay Kreps)

  - Kafka 開発者による、ログ中心アーキテクチャ（Kappa Architecture の基礎）の解説である。

- **Streaming Systems** (Tyler Akidau ほか)
  - ストリーム処理と一貫性モデルを深く理解するための基礎となる。

## 🤝 Cross-cutting & Organization (組織・運用)

- **Team Topologies** (Matthew Skelton, Manuel Pais)
  - チーム構造とアーキテクチャの関係（コンウェイの法則の逆適用）についての必読書である。
- **Accelerate** (Nicole Forsgren, Jez Humble, Gene Kim)
  - DevOps の能力（Four Keys）が組織のパフォーマンスにどう影響するかの科学的分析である。
- **Site Reliability Engineering** (Google SRE Team)
  - SRE、SLO/SLI、Error Budget などの運用アーキテクチャの原典である。
- **[The Twelve-Factor App](https://12factor.net/)** (Adam Wiggins)

  - モダンな SaaS/Web アプリケーションが守るべき 12 のプラクティスである。

- **The Phoenix Project** (Gene Kim)
  - DevOps の思想と組織改善を物語形式で理解できる。
