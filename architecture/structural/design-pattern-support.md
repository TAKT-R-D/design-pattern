# Structural Styles とデザインパターン対応表

（アーキテクチャを支えるデザインパターンの体系）

本ページでは、各 Structural Style が **どのデザインパターンの組み合わせによって支えられているか** を一覧化します。

※ パターン名称は _takt.dev/design-pattern/_ と完全に統一しています。

---

## 1. Clean / Hexagonal / Onion（Dependency Rule 系）

これらのスタイルは「依存方向の制御」「ポート・アダプタ構造」が中核であり、  
次のデザインパターンが強く関与します。

- **Adapter**：Port/Adapter の “Adapter” 部分
- **Strategy**：UseCase 抽象化の中心
- **Command**：ユースケースを操作オブジェクトとして扱う
- **Facade**：アプリケーションサービスの外観
- **Proxy**：外部 API／インフラアクセスの抽象
- **Abstract Factory**：依存切り替え（テストダブル含む）
- **Builder**：集約構築など複雑生成の補助

**主役パターン：Adapter / Strategy / Command**

---

## 2. Layered / Domain Model Layered

レイヤー境界の明確化と責務分離を支えるパターン。

- **Facade**：上位レイヤから下位を隠す外観
- **Template Method**：Service / Repository の処理骨格共有
- **Strategy**：ドメインロジック切り替え
- **Composite**：集約内部の階層構造表現
- **Proxy**：外部システム or 遅延アクセスの抽象化

---

## 3. UI 系（MVC / MVP / MVVM / MVU）

UI Interaction スタイルを支える主要パターン。

- **Observer**：状態 → UI の反映
- **State**：UI 状態の保持
- **Command**：UI イベントを操作オブジェクト化
- **Mediator**：View と ViewModel / Presenter の仲介
- **Memento**：Undo/Redo などの状態復元
- **Strategy**：描画戦略・入力制御の差し替え

**MVU（React / SwiftUI / Jetpack Compose）では特に  
State + Command + Observer が強く現れる。**

---

## 4. Microkernel / Plugin Architecture

プラグインの拡張性・ホットスワップ性を支えるパターン群。

- **Strategy**：プラグインの切り替え
- **Abstract Factory**：プラグイン生成の統一化
- **Proxy**：拡張ポイントのラップ
- **Mediator**：プラグイン間調整
- **Facade**：コアシステムの外観 API

---

## 5. Reactive / Actor / Event Loop / Streams

イベント駆動・非同期処理・アクターモデルを支えるパターン。

- **Observer**：イベント購読
- **Mediator**：イベント分配
- **Command**：メッセージを操作オブジェクトとして扱う
- **State**：Actor の内部状態
- **Iterator**：ストリーム処理の順次化
- **Chain of Responsibility**：イベント処理の段階的伝搬

---

## 6. Flow / Pipeline（Pipe & Filter / Streaming / Batch）

段階的な処理フローを実現する構造。

- **Chain of Responsibility**：フィルタの連鎖
- **Iterator**：ストリームの逐次処理
- **Mediator**：ステップ間の調整
- **Strategy**：各処理ステップの差し替え

---

## 7. Data-centric（Active Record / Table Module / Transaction Script）

データ中心の構造は次のパターンの影響が大きい。

- **Template Method**：永続化処理の統一
- **Proxy**：遅延ロード
- **Observer**：変更通知
- **Strategy**：バリデーション戦略
- **Command**：トランザクションスクリプトとしての操作

---

## 8. この一覧の活用方法

- Structural Style を選ぶ際に、**実装で必要になるパターンが自然に分かる**
- 現在のコードベースがどのパターンを多用しているかから、**採用すべき構造スタイルを逆算できる**
- 既存サイト（takt.dev/design-pattern）で詳細説明を補完できる

> **アーキテクチャ（構造） ⇄ デザインパターン（実装）**  
> の橋渡しとなるガイドページです。
