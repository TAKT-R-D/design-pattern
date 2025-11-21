# 🧩 Reactive Streams

## ✅ このスタイルの概要

**非同期ストリーム（データの流れ）を扱う際の、「ストリーム処理＋バックプレッシャー」を標準化した仕様／スタイル。**

## ✅ 解決しようとした問題

- 非同期ストリーム処理がライブラリごとにバラバラ（Observable / Future / Promise など）
- 速いプロデューサーと遅いコンシューマーの速度差（バックプレッシャー問題）
- ストリームの合成・エラー処理・キャンセルの扱いが複雑

Reactive Streams は、

> 「非同期ストリームを安全かつ一貫した形で扱うための共通プロトコル」

として提案された。

## ✅ 基本思想・ルール

### ● Publisher / Subscriber / Subscription / Processor

- **Publisher**：データを発行する側
- **Subscriber**：データを購読する側
- **Subscription**：購読関係の管理（リクエスト数量、キャンセルなど）
- **Processor**：Publisher と Subscriber の両方として振る舞う中間処理

### ● バックプレッシャー

- Subscriber が `request(n)` のように、  
  「今これだけ処理できる」と通知
- Publisher はそれを超える量を一方的に送らない

このプロトコルにより、

- ストリーム処理の合成
- 高負荷時の安定性

が確保しやすくなる。

## ✅ 得意なアプリケーション

- イベントストリーム処理（メッセージング、ログ、センサー情報）
- 非同期処理を多用する Web / API サーバ
- マイクロサービス間通信（非同期メッセージベース）の内部実装

## ❌ 不向きなケース

- 処理フローが単純で、通常の同期処理で十分なアプリ
- 非同期ストリームがほとんど登場しない小規模システム

Reactive Streams を採用すると抽象化レイヤが増えるため、  
その価値が出るのは「ストリームが主役」の領域です。

## ✅ 歴史（系譜・親スタイル）

- リアクティブプログラミングの文脈から登場
- JVM の Reactive Streams 仕様、ReactiveX ファミリなど
- Reactive Manifesto やリアクティブシステム設計と併せて語られることが多い

## ✅ 関連スタイル

- **Flow / Pipeline 系**：ストリーム処理のフロー設計と組み合わせる
- **Event Loop / Actor Model**：非同期実行の土台として使われる
- **EDA / Pub-Sub**：システム間のイベント駆動構造

## 8. 代表的なフレームワーク

Reactive Streams 仕様は複数の実装で広く普及しています。

- **Reactive Streams for JVM（標準仕様）**  
  Publisher / Subscriber を定義した共通プロトコル。

- **Project Reactor（Java）**  
  Spring WebFlux の基盤。Mono / Flux による非同期ストリーム。

- **RxJava / RxJS / ReactiveX ファミリ**  
  Observable ベースのリアクティブストリームライブラリ。

- **Akka Streams**  
  Actor System 上のストリーム処理エンジン。

- **Vert.x（Java）**  
  非同期アプリケーション基盤で Reactive Streams に対応。

## 9. このスタイルを支えるデザインパターン

Reactive Streams の内部モデルは複数パターンの組み合わせで成り立っています。

- **Iterator**  
  ストリームを「逐次処理する抽象」として扱う。

- **Observer**  
  Publisher → Subscriber へのデータ通知の根幹構造。

- **Mediator**  
  Subscription が Publisher と Subscriber の調停役として働く。

- **Chain of Responsibility**  
  複数の Processor（map/filter/flatMap）が連鎖する構造。

- **Strategy**  
  バックプレッシャー処理（要求数管理など）のカスタム戦略を切り替える場面で使われる。

## ✅ まとめ

Reactive Streams は、

- 非同期ストリーム
- バックプレッシャー
- 安全な合成

をキーワードにしたスタイル／仕様です。

イベント駆動・ストリーミングが前提のシステムでは、  
**「非同期ストリームをどう安全に扱うか」** という観点で、  
Flow / Pipeline 系スタイルとセットで検討するとよい。
