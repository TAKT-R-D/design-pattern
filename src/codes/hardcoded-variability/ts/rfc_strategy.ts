// Strategy インターフェース
interface NotificationStrategy {
  send(user: string, message: string): void;
}

// Strategy 実装（メール）
class EmailStrategy implements NotificationStrategy {
  send(user: string, message: string): void {
    console.log("件名: お知らせ");
    console.log(`本文: ${message}`);
    console.log(`宛先: ${user}@example.com`);
  }
}

// Strategy 実装（Slack）
class SlackStrategy implements NotificationStrategy {
  send(user: string, message: string): void {
    console.log(`Slack宛: ${user}`);
    console.log(`内容: ${message}`);
  }
}

// コンテキスト
class NotificationService {
  constructor(private strategy: NotificationStrategy) {}

  notify(user: string, message: string) {
    this.strategy.send(user, message);
  }
}

// 利用例
new NotificationService(new EmailStrategy()).notify(
  "hiroshi",
  "メールメッセージ"
);
new NotificationService(new SlackStrategy()).notify(
  "hiroshi",
  "Slackメッセージ"
);
