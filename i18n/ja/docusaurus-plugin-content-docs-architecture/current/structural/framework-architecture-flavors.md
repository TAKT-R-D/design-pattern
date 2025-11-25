# 🧩 Frameworks and Their Architectural Flavors

（主要フレームワークが持つ “アーキテクチャ風味” を読み解く）

## ✅ はじめに：フレームワークはアーキテクチャではない

多くのフレームワークは、**特定のアーキテクチャスタイルを強制するわけではない**。  
しかし、それぞれに **「こう設計すると自然にしっくりくる」傾向（flavor）** が存在する。

例：

- Rails は Active Record の思想が強い
- React / SwiftUI は MVU（Elm Architecture）に近い
- Spring Boot / NestJS は Clean / Hexagonal に寄せやすい
- Node.js は Event Loop（非同期 I/O）中心の構造を誘導する

つまり、

> **“フレームワークがアーキテクチャを決める” のではなく、  
>  “フレームワークが自然と誘導する方向性を理解する” ことが重要**

というスタンスで読み解く。

## ✅ UI 系フレームワークのアーキテクチャ風味

### React

- **分類：MVU（Model–View–Update）系 / Elm Architecture 影響下**
- 単方向データフロー、immutability、宣言的 UI
- Redux との組み合わせは MVU 色をさらに強める  
  **→ UI Structural Style の「MVU」の代表例として扱える**

### Next.js（App Router）

- **分類：UI の構造スタイルというより「Topologies / Integration」寄り**
- SSR / SSG / ISR / Edge Rendering など、**レンダリング戦略そのものがアーキテクチャを決定する**
- API Routes / Route Handlers / Server Actions により、**UI と API（バックエンド）が同居する構造**
- ファイルベースルーティングにより、機能単位のフォルダ構成が自然に強制される  
  → Vertical Slice / Feature-based に近いプロジェクト構成になりやすい
- React（MVU）を内包しているが、Next.js 自体は **“構造アーキテクチャ” ではなく “アプリの全体構成（トポロジー）” を規定する存在**

**→ アーキテクチャスタイルとしては MVU ではなく、「Topologies（SSR/Edge）＋ Integration（UI + API 統合）」の世界に属する。**

### Vue.js（3.x）

- Options API：MVVM に近い
- Composition API：React に寄った関数型要素も増加  
  **→ 全体としては MVVM と MVU のハイブリッド**

### Angular

- **明確な MVVM / Layered 構造**
- Component（VM）・Template（View）・Service（Logic）  
  **→ UI 構造スタイルの典型例として扱いやすい**

### SwiftUI / Jetpack Compose

- **完全に MVU 系**
- 状態の単一ソース、再計算、宣言的 UI  
  **→ 近年の Declarative UI の最も純粋な実装**

## ✅ Data-centric 系フレームワークのアーキテクチャ風味

### Ruby on Rails

- **Active Record をコアに据えた典型例**
- MVC だが実質的に Fat Model / Transaction Script になりがち  
  **→ Structural Style の「Data-centric（Active Record）」の代表例**

### Laravel

- Eloquent が Active Record 的
- 直観的だが、ドメインモデルの分割は開発者の工夫次第  
  **→ Data-centric の文脈で理解しやすい**

### Django

- MVT（Model–View–Template）で MVC に近い
- ORM は Data Mapper に寄る  
  **→ Data-centric の中では「Table Module / Data Mapper」寄りの代表例**

## ✅ Layered / Clean / Dependency Rule 系フレームワーク

### Spring Boot（Java）

- **Clean / Hexagonal を作りやすい構造**
- Controller → Service → Repository の分割が自然
- DI による依存方向の制御がやりやすい  
  **→ Clean Architecture 実装例が最も多いフレームワークの一つ**

### NestJS（Node.js）

- モジュール構造・DI・デコレータが Spring に酷似
- Port / Adapter / UseCase の実装が明確に作れる  
  **→ Node.js 界の Clean / Hexagonal の代表**

### .NET / ASP.NET Core

- Clean Architecture テンプレートが標準化
- DDD / CQRS / Hexagonal の文献・実例が非常に豊富  
  **→ Clean / Layered 系の“実務標準プラットフォーム”**

## ✅ Reactive / Actor 系フレームワーク

### Node.js

- **Event Loop ベース構造そのもの**
- 非同期 I/O、コールバック、Promise、イベント駆動  
  **→ Structural Style の「Event Loop」の代表例**

### Erlang / Elixir / Akka

- **Actor Model のガチ実装**
- メッセージパッシング・スーパービジョンが言語レベル  
  **→ Reactive 系 Structural Style の純粋なサンプル**

## ✅ スタイル × フレームワーク 対応表（概要版）

| Structural Style                | 代表フレームワーク / 技術                  |
| ------------------------------- | ------------------------------------------ |
| **MVU**                         | React / Redux, SwiftUI, Jetpack Compose    |
| **MVVM**                        | Vue（Options API）, Angular                |
| **MVC / MVT**                   | Rails, Django                              |
| **Active Record**               | Rails（ActiveRecord）, Laravel（Eloquent） |
| **Data Mapper 寄り**            | Django ORM                                 |
| **Layered / Clean / Hexagonal** | Spring Boot, NestJS, .NET                  |
| **Event Loop**                  | Node.js                                    |
| **Actor Model**                 | Erlang / Elixir, Akka                      |

## ✅ このページが提供したい価値

- アーキテクチャを学ぶとき、**身近なフレームワークがどのスタイルに近いのか**が分かる
- コードを読むとき、**どの“レンズ”で見ると理解が深まるのか**が分かる
- 自分の使っている技術がどの思想の上に立っているかが見える

> **「フレームワークの裏で動いているアーキテクチャ思想」を理解するためのガイド**

として、このページを活用してほしい。
