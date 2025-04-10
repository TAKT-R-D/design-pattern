interface NotificationStrategy {
  send(user: string, message: string): void;
}

class EmailStrategy implements NotificationStrategy {
  send(user: string, message: string): void {
    console.log(`[Email] To: ${user}, Message: ${message}`);
  }
}

class SlackStrategy implements NotificationStrategy {
  send(user: string, message: string): void {
    console.log(`[Slack] To: ${user}, Message: ${message}`);
  }
}

interface Notifier {
  notify(user: string, message: string): void;
}

class RealNotifier implements Notifier {
  constructor(private strategy: NotificationStrategy) {}

  notify(user: string, message: string): void {
    this.strategy.send(user, message);
  }
}

class NotifierProxy implements Notifier {
  constructor(private real: Notifier) {}

  notify(user: string, message: string): void {
    if (!user.includes("@")) {
      console.log("Invalid user. Notification aborted.");
      return;
    }
    console.log("Proxy: Access check passed.");
    this.real.notify(user, message);
    console.log("Proxy: Notification sent.");
  }
}

// Usage
const realNotifier = new RealNotifier(new EmailStrategy());
const proxy = new NotifierProxy(realNotifier);
proxy.notify("taro@example.com", "Disk space warning");
