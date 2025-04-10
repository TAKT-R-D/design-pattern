// 状態インターフェース
interface DocumentState {
  publish(context: DocumentContext): void;
}

// 状態クラス（draft）
class DraftState implements DocumentState {
  publish(context: DocumentContext): void {
    console.log("レビュー依頼を送信");
    context.setState(new ReviewState());
  }
}

// 状態クラス（review）
class ReviewState implements DocumentState {
  publish(context: DocumentContext): void {
    console.log("公開しました");
    context.setState(new PublishedState());
  }
}

// 状態クラス（published）
class PublishedState implements DocumentState {
  publish(context: DocumentContext): void {
    console.log("すでに公開済みです");
  }
}

// コンテキスト
class DocumentContext {
  private state: DocumentState;

  constructor() {
    this.state = new DraftState();
  }

  setState(state: DocumentState): void {
    this.state = state;
  }

  publish(): void {
    this.state.publish(this);
  }
}

// 利用例
const doc = new DocumentContext();
doc.publish(); // → レビュー依頼
doc.publish(); // → 公開
doc.publish(); // → すでに公開済み
