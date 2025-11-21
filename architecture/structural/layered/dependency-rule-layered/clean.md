# 🧩 Clean Architecture

## ✅ このスタイルの概要

Hexagonal / Onion などの考え方を整理し直し、

- Entities（エンタープライズビジネスルール）
- Use Cases（アプリケーションビジネスルール）
- Interface Adapters
- Frameworks & Drivers

という **明確な層構造と依存ルール** としてまとめ直したスタイル。

## ✅ 解決しようとした問題

- Hexagonal / Onion / Layered / DDD などの概念が乱立し、違いが分かりづらい
- 「依存は内向き」「ドメイン中心」という共通の考え方を整理したい
- 具体的にどの層に何を書くのか、もう少しガイドが欲しい

Clean Architecture はこれに対して：

> 既存のスタイルを「依存ルール」と「層」によって再整理した統一図

として提示された、と捉えると理解しやすい。

## ✅ 基本思想・ルール

### ● 層構造

- **Entities**

  - システムをまたいで有効なビジネスルール
  - DDD でいうエンティティ・値オブジェクトに近い

- **Use Cases**

  - アプリケーション固有のユースケース
  - 入出力の制御、トランザクション境界など

- **Interface Adapters**

  - Presenter / Controller / Repository 実装など
  - 外部のデータ形式を内側のモデルに変換

- **Frameworks & Drivers**
  - Web フレームワーク / DB / メッセージングなど

### ● 依存ルール

- 依存は内側（Entities）に向かうのみ
- 内側は外側のことを知らない
- 外側が内側のインターフェースに依存する

### 概念図（Conceptual Diagram）

![The Clean Architecture diagram](./clean.jpg)

> 出典: Robert C. Martin, “The Clean Architecture”, 2012.  
> https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

## ✅ 得意なアプリケーション

- ドメインが中〜高の複雑さを持つ業務システム
- 長期運用・複数チーム開発を前提としたプロダクト
- フレームワークに縛られたくないバックエンド
- 自動テスト・ユースケース単位のテストを重視する開発

## ❌ 不向きなケース

- 短命な小規模 CRUD アプリ
- チームの経験値が低く、層構造を維持するコストの方が高い場合

層を形だけ導入すると：

- クラス数・フォルダ階層が増えるだけ
- 実際には依存ルールが守られない

という危険もある。

## ✅ 歴史（系譜・親スタイル）

- Robert C. Martin（Uncle Bob）によって提唱
- Hexagonal / Onion / DDD / Layered などの流れを整理・総括したスタイル
- 書籍『Clean Architecture』として広く普及

## ✅ 関連スタイル

- **Hexagonal Architecture**：ポート＆アダプタの考え方
- **Onion Architecture**：同心円上の層構造
- **DDD**：Entities / Use Cases の具体的な表現方法として

## ✅ 代表的なフレームワーク

Clean Architecture もフレームワークから独立した考え方だが、実際には次のような技術スタックで多く実践されている。

- **ASP.NET Core / .NET**  
  “Clean Architecture Template” のような公式／コミュニティ製テンプレートが多数存在する。

- **Spring Boot（Java）**  
  Entities / Use Cases / Interface Adapters / Frameworks & Drivers を明確に分けた構成が紹介されている。

- **NestJS（Node.js）**  
  UseCase / Repository Interface / Adapter 実装といった分割がしやすく、Clean 的な構造に寄せやすい。

## ✅ このスタイルを支えるデザインパターン

Clean Architecture では、依存ルールとユースケース中心設計を支えるために複数のパターンが組み合わされる。

- **Adapter**  
  Interface Adapters 層において、外部の I/O と内部モデルの橋渡し役として機能する。

- **Strategy**  
  ビジネスルールやユースケースのバリエーションを、差し替え可能な形で表現する。

- **Command**  
  Use Case を「1 操作」としてオブジェクト化し、入力・出力・トランザクション境界をはっきりさせる。

- **Facade**  
  外側（UI / API）から見たときに、複数ユースケースを統一されたインターフェースとして提供する。

- **Abstract Factory**  
  実行時に適切な実装（本番用 / テスト用）のアダプタを組み立てる際に利用される。

## ✅ まとめ

Clean Architecture は、

- ドメイン中心設計
- 依存ルールの徹底
- フレームワーク非依存

というモダンアーキテクチャの key idea を、シンプルな図とルールセットにまとめたスタイルだ。

「完璧に守る」ことよりも、  
**「依存を内向きに保つ」という原則をチームで共有するための共通言語** として使うのが現実的だ。
