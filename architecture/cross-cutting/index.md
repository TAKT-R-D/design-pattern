# 🧩 Cross-cutting & Socio-technical（運用・文化・品質）

Cross-cutting は、アーキテクチャの **すべての階層を横断して影響する領域** を扱う。  
技術だけでなく、**運用・組織構造・文化・品質** といった “社会技術的要素” が中心となる。

## ✅ このカテゴリが扱う問題

- アーキテクチャが組織構造と噛み合わない
- 開発／運用チームの断絶によるデプロイの遅さ
- マイクロサービスの運用破綻（可観測性不足）
- セキュリティ要件の未充足
- “品質” をアーキテクチャに組み込む難しさ

## ✅ Cross-cutting の主要概念

### ● DevOps / CI/CD / 12-Factor App

- デリバリーの高速化・自動化
- 設計と運用を分離しない文化

### ● Team Topologies / Conway’s Law

- 組織構造がアーキテクチャに影響する
- ストリームアラインドチーム / プラットフォームチーム など

### ● SLO-driven Architecture（SRE）

- SLO / Error Budget による信頼性のコントロール
- 依存サービスの可用性設計

### ● Zero Trust Security

- “内部ネットワーク＝安全” を捨て、常に検証する思想

### ● Observability

- Logs / Metrics / Traces でシステム全体の状態を可視化
- マイクロサービスでは必須

### ● Green Software / Sustainability

- CO2 排出削減
- クラウドリソースの適正化
- 省コスト運用と価値最大化の両立

## ✅ このカテゴリの読み方

1. **技術そのものだけでなく、人と組織を含む視点** を持つ
2. Topologies や Integration の “現実的な運用” を支える基礎として理解する
3. 組織に合わせてアーキテクチャを変える必要があることを認識する

## ✅ 他の階層との関係

- **Structural Styles**：テスト容易性・変更容易性に影響
- **Topologies**：マイクロサービス運用には SLO/Observability が必須
- **Integration**：Mesh や Gateway でセキュリティ・可観測性を補強
- **Data Architecture**：データガバナンスや監査と密接
