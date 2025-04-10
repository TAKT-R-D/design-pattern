interface MessageStrategy {
  compose(user: string, content: string): string;
}

class PlainMessageStrategy implements MessageStrategy {
  compose(user: string, content: string): string {
    return `${user}: ${content}`;
  }
}

class HtmlMessageStrategy implements MessageStrategy {
  compose(user: string, content: string): string {
    return `<p><strong>${user}</strong>: ${content}</p>`;
  }
}

abstract class Notifier {
  constructor(protected strategy: MessageStrategy) {}

  abstract notify(user: string, content: string): void;
}

class EmailNotifier extends Notifier {
  notify(user: string, content: string): void {
    const message = this.strategy.compose(user, content);
    console.log(`[Email] Sending: ${message}`);
  }
}

class SlackNotifier extends Notifier {
  notify(user: string, content: string): void {
    const message = this.strategy.compose(user, content);
    console.log(`[Slack] Sending: ${message}`);
  }
}

// 使用例
const notifier = new SlackNotifier(new HtmlMessageStrategy());
notifier.notify("Taro", "Server restarted.");
