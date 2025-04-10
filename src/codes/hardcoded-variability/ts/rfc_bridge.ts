// 実装クラス（通知手段）
interface Notifier {
  sendMessage(to: string, content: string): void;
}

class EmailNotifier implements Notifier {
  sendMessage(to: string, content: string): void {
    console.log("件名: お知らせ");
    console.log(`本文: ${content}`);
    console.log(`宛先: ${to}@example.com`);
  }
}

class SlackNotifier implements Notifier {
  sendMessage(to: string, content: string): void {
    console.log(`Slack宛: ${to}`);
    console.log(`内容: ${content}`);
  }
}

// 抽象クラス（通知処理）
abstract class Notification {
  constructor(protected notifier: Notifier) {}

  abstract notify(user: string, message: string): void;
}

// 拡張された抽象クラス
class NormalNotification extends Notification {
  notify(user: string, message: string): void {
    this.notifier.sendMessage(user, message);
  }
}

class UrgentNotification extends Notification {
  notify(user: string, message: string): void {
    this.notifier.sendMessage(user, `[緊急] ${message}`);
  }
}

// 利用例
const emailUrgent = new UrgentNotification(new EmailNotifier());
emailUrgent.notify("hiroshi", "サーバーが落ちました");

const slackNormal = new NormalNotification(new SlackNotifier());
slackNormal.notify("hiroshi", "定例ミーティングは15時です");
