# レイヤード／ドメインモデル系

## ✅ 概要

この系統は、アプリケーション内部を **レイヤー（層）に分割し、依存方向にルールを設ける** スタイルを扱う。

- UI / アプリケーション / ドメイン / インフラなどに分割
- レイヤー間の依存を制御することで、変更容易性・テスト容易性を高める
- ドメインの複雑さに応じて、より“ドメイン中心”なスタイルへ発展してきた系譜

代表的なスタイルは次の 3 つに大別できます。

- **[Classic Layered](./classic-layered.md)**（3 層 / n 層アーキテクチャ）
- **[Domain Model Layered](./domain-model-layered.md)**（DDD/Fowler 的レイヤード）
- **依存ルール重視 Layered（Dependency-rule-based Layered）**
  - [Hexagonal](./dependency-rule-layered/hexagonal.md) / [Onion](./dependency-rule-layered/onion.md) / [Clean](./dependency-rule-layered/clean.md) など

## ✅ なぜこの系統が生まれたか（歴史・背景）

- [Big Ball of Mud](../early/big-ball-of-mud.md) / [Transaction Script](../early/transaction-script.md) などの“場当たり的構造”からの脱却
- UI / ロジック / データアクセスが混ざったコードの保守性の低さ
- チーム開発・長期運用・フレームワーク更新に耐えられる構造が必要に

その流れの中で：

1. **[Classic Layered](./classic-layered.md)** が「まずは層に分ける」という最初の回答となり、
2. より複雑な領域では **[Domain Model Layered](./domain-model-layered.md)** としてドメイン中心の層構造が発展し、
3. 最終的に **[Hexagonal](./dependency-rule-layered/hexagonal.md) / [Onion](./dependency-rule-layered/onion.md) / [Clean](./dependency-rule-layered/clean.md)** に代表される、  
   **依存方向とドメイン保護を強く意識したスタイル** へと進化していった。

## ✅ 解決しようとした問題

レイヤード系は主に次のような問題に取り組む。

- UI・アプリケーションロジック・ドメインロジック・インフラの混在
- フレームワークや DB に強く依存したコード
- 単体テストが書きづらい
- 仕様変更のたびにシステム全体を触ることになる

特にドメインモデル系（[Domain Model Layered](./domain-model-layered.md) 以降）では：

- ビジネスルールを **ドメインモデルとして明示的に表現したい**
- フレームワークや外部システムから **ドメインを守りたい**

というモチベーションが強くなる。

## ✅ この系統に属するスタイル

### ● [Classic Layered](./classic-layered.md)

- UI / Application / Domain / Infrastructure などに分けた、最も広く知られるレイヤード構造

### ● [Domain Model Layered](./domain-model-layered.md)

- Domain 層を明示し、オブジェクト指向のドメインモデルを中心に据えたスタイル

### ● Dependency-rule-based Layered

- 依存は内側のレイヤーにのみ許可する
- ドメインを中心に、外側に向かってインターフェースやインフラを配置
- [Hexagonal](./dependency-rule-layered/hexagonal.md) / [Onion](./dependency-rule-layered/onion.md) / [Clean](./dependency-rule-layered/clean.md) などがこのグループに含まれる

## ✅ 他の系統との関係

- **A/B 系（初期・データ中心）** が抱えた混乱を解決するために登場した“メインストリーム”
- **UI 系（MVC/MVVM 等）** は、レイヤード構造の中の「プレゼンテーション層」の細分化とも捉えられる
- **Reactive / Flow 系** と組み合わせて使われることも多い（レイヤー間をイベントで繋ぐなど）

## ✅ どんな時に参考になるか

- ドメインの複雑さが中〜高程度で、長期運用が前提のシステム
- フレームワークやデータベースの寿命より、ドメインの寿命が長い場合
- テスト容易性・変更容易性を重視したい場合

この系統は、
**「モダンな業務システムの“デフォルト候補”」** となることが多く、
他のスタイルを検討する際の基準点としても重要となる。
