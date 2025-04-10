// Strategy インターフェース
interface PublishStrategy {
  publish(): void;
}

// 各戦略
class DraftStrategy implements PublishStrategy {
  publish(): void {
    console.log("レビュー依頼を送信");
  }
}

class ReviewStrategy implements PublishStrategy {
  publish(): void {
    console.log("公開しました");
  }
}

class PublishedStrategy implements PublishStrategy {
  publish(): void {
    console.log("すでに公開済みです");
  }
}

// コンテキスト
class Document {
  constructor(private strategy: PublishStrategy) {}

  setStrategy(strategy: PublishStrategy): void {
    this.strategy = strategy;
  }

  publish(): void {
    this.strategy.publish();
  }
}

// 利用例
const doc = new Document(new DraftStrategy());
doc.publish(); // → レビュー依頼

doc.setStrategy(new ReviewStrategy());
doc.publish(); // → 公開

doc.setStrategy(new PublishedStrategy());
doc.publish(); // → すでに公開済み
