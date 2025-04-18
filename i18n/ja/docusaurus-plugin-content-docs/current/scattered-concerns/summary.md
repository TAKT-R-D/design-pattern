# まとめ

## パターン比較レビュー

| パターン    | 適用条件                     | 強み                         | 注意点                   | よく使うシーン               |
| ----------- | ---------------------------- | ---------------------------- | ------------------------ | ---------------------------- |
| `Singleton` | 同一インスタンスを共有したい | 状態一元管理、アクセス容易   | テストが難しくなることも | Logger, Config, Cache など   |
| `Facade`    | 複雑な処理を隠したい         | 呼び出しが簡潔、構造が見える | 内部実装が肥大化しがち   | API 統一、サブシステムの入口 |

## まとめと選び方の指針

- ユーティリティ的な処理を統一して管理 → `Singleton`
- 複数の処理を簡単にまとめて使いたい → `Facade`
- テスト・拡張のために、依存注入(`DI`)や `Adapter` との併用も検討すると ◎

## 実際の設計会話での使い分けヒント

- Logger 直接呼んでる箇所多いですね。`Singleton` にして一元管理しましょう
- ログ出力や設定アクセスを `Facade` でまとめたら、呼び出し側はスッキリしますよ
- あちこちで process.env 使ってるなら、Config クラスに集約しましょう
