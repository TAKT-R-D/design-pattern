abstract class Notifier {
  send(user: string, message: string) {
    console.log(this.header());
    console.log(this.formatMessage(message));
    console.log(this.destination(user));
  }

  protected abstract header(): string;
  protected abstract destination(user: string): string;
  protected abstract formatMessage(message: string): string;
}

class EmailNotifier extends Notifier {
  protected header(): string {
    return "件名: お知らせ";
  }

  protected destination(user: string): string {
    return `宛先: ${user}@example.com`;
  }

  protected formatMessage(message: string): string {
    return `本文: ${message}`;
  }
}

class SlackNotifier extends Notifier {
  protected header(): string {
    return "Slack 通知";
  }

  protected destination(user: string): string {
    return `Slack宛: ${user}`;
  }

  protected formatMessage(message: string): string {
    return `内容: ${message}`;
  }
}

// 利用例
new EmailNotifier().send("hiroshi", "メールメッセージ");
new SlackNotifier().send("hiroshi", "Slackメッセージ");
