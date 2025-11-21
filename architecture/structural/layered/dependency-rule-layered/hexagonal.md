# Hexagonal Architecture（Ports & Adapters）

## 1. 一言でいうと

アプリケーションの中心に **ドメインとユースケース** を置き、
その周囲を **ポート（抽象）とアダプタ（実装）** で囲む構造スタイル。  
“六角形”はあくまで比喩であり、本質は **依存の向きと境界設計** にある。

---

## 2. 解決しようとした問題

Hexagonal は主に次のような課題に対する回答です：

- ドメインロジックが Web フレームワークや ORM に引きずられる
- テストで外部システムを毎回立ち上げる必要がある
- 同じドメインロジックを複数の I/O（REST / CLI / Batch / Message）から使いたい

> 「ドメインを中心に据え、それ以外は取り替え可能な“アダプタ”にする」

という発想で、ドメインを技術的詳細から切り離そうとします。

---

## 3. 基本思想・ルール

- **ドメイン / アプリケーションコア** は外界について知らない
- コアは **ポート（インターフェース）** を持つだけ
  - 例：`UserRepository`, `NotificationSender` など
- 外側に **アダプタ（実装）** を配置
  - DB アダプタ（RDB / NoSQL / InMemory）
  - UI アダプタ（Web, CLI, Batch）
  - 外部サービスアダプタ（REST クライアントなど）
- 依存方向は常に「アダプタ → ポート → コア」へ向かう

結果として：

- ドメインはインフラに依存せず、抽象にのみ依存する
- テストではアダプタを差し替えるだけでコアを検証できる

---

## 3.1 概念図（Conceptual Diagram）

![Hexagonal Architecture diagram](./hexagonal.png)

> 出典: Alistair Cockburn, “Hexagonal Architecture”, 2005–2013.  
> https://alistair.cockburn.us/hexagonal-architecture

---

## 4. 得意なアプリケーション

- 複数の I/O チャネルを持つバックエンド
  - REST API + バッチ + 管理 CLI + メッセージコンシューマ
- 外部サービス・DB が将来的に変更される可能性が高いシステム
- テストファースト・自動テスト重視のプロジェクト

---

## 5. 不向きなケース

- ごく小さな CRUD アプリ（構造コストがオーバーヘッドになる）
- 将来的な拡張や I/O の増加がほぼ見込まれないシステム

過剰に適用すると、

- インターフェース・アダプタが増えすぎて見通しが悪くなる
- 小さなチーム／短期間プロジェクトでは重く感じられる

---

## 6. 歴史（系譜・親スタイル）

- Alistair Cockburn によって提唱
- Layered / Domain Model 系からの発展として位置づけられる
- Ports & Adapters という名前でも知られる
- Onion / Clean などの後続スタイルに強い影響を与えた

---

## 7. 関連スタイル

- **Onion Architecture**：六角形ではなく“層”として同じ思想を図示
- **Clean Architecture**：ユースケース層を明示した整理版
- **DDD（戦術パターン）**：ドメインモデルの表現に使われる

---

## 8. Framework Examples（代表的なフレームワーク）

Hexagonal Architecture は考え方（Ports & Adapters）であり、特定のフレームワーク専用ではないが、次のような環境で実践例が多い。

- **Spring Boot（Java）**  
  Controller / Service / Repository を Port / Adapter にマッピングしやすく、Hexagonal のサンプルが非常に多い。

- **ASP.NET Core / .NET**  
  Clean / Hexagonal をテーマにしたテンプレートやリファレンス実装が豊富。

- **NestJS（Node.js）**  
  Module / Provider / Controller の構成が Ports & Adapters を表現しやすく、Node.js 界隈で Hexagonal 実践例が多い。

---

## 9. Supported Design Patterns（このスタイルを支えるデザインパターン）

Hexagonal の「ポートとアダプタ」構造は、複数のデザインパターンの組み合わせで実現される。

- **Adapter**  
  外部の I/O・データ形式をポートが定義する抽象インターフェースに合わせる、中心的なパターン。

- **Strategy**  
  ポートの実装（DB の種類、外部サービスの差し替えなど）を切り替えるときに利用される。

- **Command**  
  ユースケース（アプリケーションサービス）を操作オブジェクトとして表現し、テストや構成管理をしやすくする。

- **Proxy**  
  外部サービスへのアクセスに対して、キャッシュ・リトライ・サーキットブレーカーなどの制御を追加する。

- **Abstract Factory**  
  実行環境（本番／テスト）や設定に応じて、適切なアダプタ実装を組み立てるために利用される。

---

## 10. まとめ

Hexagonal Architecture は、

- ドメイン中心設計
- 依存方向の制御
- インフラの取り替え可能性

を重視するプロジェクトにとっての強力な選択肢です。

“六角形の見た目”に囚われるのではなく、
**「ポートとアダプタの境界をどこに引くか？」** という観点で設計することが重要です。
