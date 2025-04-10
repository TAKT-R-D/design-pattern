interface NotificationStrategy {
  sendMessage(to: string, content: string): void;
}

class EmailStrategy implements NotificationStrategy {
  sendMessage(to: string, content: string): void {
    console.log(`[Email] To: ${to}, Message: ${content}`);
  }
}

class SlackStrategy implements NotificationStrategy {
  sendMessage(to: string, content: string): void {
    console.log(`[Slack] To: ${to}, Message: ${content}`);
  }
}

abstract class Notifier {
  constructor(private strategy: NotificationStrategy) {}

  send(user: string, message: string): void {
    console.log("--- Sending Start ---");
    const content = this.formatMessage(user, message);
    this.strategy.sendMessage(user, content);
    console.log("--- Sending End ---");
  }

  protected abstract formatMessage(user: string, message: string): string;
}

class AlertNotifier extends Notifier {
  protected formatMessage(user: string, message: string): string {
    return `[ALERT] ${user}: ${message}`;
  }
}

// 使用例
const notifier = new AlertNotifier(new EmailStrategy());
notifier.send("taro@example.com", "サーバー障害が発生しました");
