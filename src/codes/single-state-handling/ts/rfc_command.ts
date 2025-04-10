// コマンドインターフェース
interface PublishCommand {
  execute(): void;
}

// 各状態の処理をコマンド化
class DraftPublishCommand implements PublishCommand {
  execute(): void {
    console.log("レビュー依頼を送信");
  }
}

class ReviewPublishCommand implements PublishCommand {
  execute(): void {
    console.log("公開しました");
  }
}

class PublishedPublishCommand implements PublishCommand {
  execute(): void {
    console.log("すでに公開済みです");
  }
}

// Invoker（呼び出し役）
class Document {
  private command: PublishCommand;

  constructor(command: PublishCommand) {
    this.command = command;
  }

  setCommand(command: PublishCommand): void {
    this.command = command;
  }

  publish(): void {
    this.command.execute();
  }
}

// 利用例
const doc = new Document(new DraftPublishCommand());
doc.publish(); // → レビュー依頼

doc.setCommand(new ReviewPublishCommand());
doc.publish(); // → 公開

doc.setCommand(new PublishedPublishCommand());
doc.publish(); // → すでに公開済み
