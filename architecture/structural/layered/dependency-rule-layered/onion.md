# Onion Architecture

## 1. 一言でいうと

ドメインモデルを“玉ねぎの中心”に置き、  
外側の層にアプリケーションサービス・インフラ・UI を配置するスタイル。  
Hexagonal と同じ思想を **「同心円の層」** として表現したもの。

---

## 2. 解決しようとした問題

Onion Architecture は、

- Hexagonal の「六角形とポート」の図が直感的でない人にも、
- 依存方向とドメイン中心設計の考え方を分かりやすく説明する

ことを目的にしたと言ってよいスタイルです。

解決したかった具体的な課題は Hexagonal と共通です：

- ドメインがフレームワーク依存になる
- テストがインフラに引きずられる
- 複数の UI / I/O を自然に扱えない

---

## 3. 基本思想・ルール

玉ねぎの層として、一般的には以下のような構造が取られます：

- 最内側：Domain Model（エンティティ・値オブジェクト・ドメインサービス）
- その外側：Application Services（ユースケースの調整）
- さらに外側：Infrastructure（DB / 外部 API / メッセージング）
- 一番外側：UI / Frameworks

ルールは Hexagonal と同様：

- 依存は内側の層にのみ向かう
- ドメインは外側の技術詳細を知らない
- 外側は内側の抽象（インターフェース）に依存する

視覚的に「中心に行くほど純粋」「外側ほど技術詳細」というイメージが伝わりやすいのが特徴です。

---

## 3.1 概念図（Conceptual Diagram）

![Onion Architecture diagram](./onion.webp)

> 出典: Jeffrey Palermo, “The Onion Architecture (Part 1)”, 2008.  
> https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/

---

## 4. 得意なアプリケーション

- DDD を採用している中〜大規模システム
- ドメインモデルを“核”として長期運用したいプロダクト
- チーム内でレイヤーの責務と依存ルールを共有したいとき

---

## 5. 不向きなケース

- Hexagonal と同じく、ごく小さな CRUD アプリ
- チームがまだレイヤーの概念や DDD に慣れていない場合

図だけ真似して層を増やすと、

- 実態は変わらないのに構造だけ複雑になる
  リスクがあります。

---

## 6. 歴史（系譜・親スタイル）

- Jeffrey Palermo によって紹介されたアーキテクチャスタイル
- Hexagonal と同時期〜後期の文脈で広まり、
  .NET コミュニティなどで特に有名
- Clean Architecture の図示にも強い影響を与えた

---

## 7. 関連スタイル

- **Hexagonal Architecture**：同じ思想をポート＆アダプタとして説明
- **Clean Architecture**：層をより細分化し、ユースケース層を強調
- **Domain Model Layered**：Onion の前段階となるレイヤードスタイル

---

## 8. Framework Examples（代表的なフレームワーク）

Onion Architecture も Hexagonal 同様フレームワーク非依存だが、特に .NET / Java 系で多く採用されている。

- **ASP.NET Core / .NET**  
  ドメインを中心に据えた同心円構造のサンプルが多数あり、Onion の代表的な実践例となっている。

- **Spring Boot（Java）**  
  Domain / Application / Infrastructure を“層”として整理し、Onion 的な構造に寄せたプロジェクト構成がよく見られる。

---

## 9. Supported Design Patterns（このスタイルを支えるデザインパターン）

Onion Architecture は Hexagonal と同じ思想を「層」で表現したものであり、使われるパターンも近い。

- **Strategy**  
  ドメイン中心の構造の中で、ドメインサービスやポリシーの差し替えを表現する。

- **Command**  
  アプリケーションサービス（ユースケース）の処理を操作オブジェクトとして表し、テストしやすくする。

- **Adapter**  
  外側の層（Infrastructure / UI）が、内側の抽象インターフェースに従うための接着として機能する。

- **Proxy**  
  外側の層で、外部サービスへのアクセスや技術的関心事（キャッシュ・リトライ）を包み込む。

- （用語としての）**Repository**  
  ドメインモデルと永続化の間の境界を明確にするための概念的パターンとして用いられる。

---

## 10. まとめ

Onion Architecture は、

- ドメインモデルを中心に据え、
- 依存方向と責務分離を視覚的に表現するスタイルです。

Hexagonal と思想的にはほぼ同じですが、
**「層構造の図が馴染みやすいチーム」** にとっては、
Onion の方が導入しやすい場合も多いでしょう。
