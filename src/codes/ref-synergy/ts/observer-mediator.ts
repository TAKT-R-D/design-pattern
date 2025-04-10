// Observer インターフェース
interface Observer {
  update(event: string, data: any): void;
}

// Mediator インターフェース
interface Mediator {
  notify(sender: string, event: string, data: any): void;
}

// 実際の Mediator
class EventHub implements Mediator {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notify(sender: string, event: string, data: any): void {
    for (const obs of this.observers) {
      obs.update(event, data);
    }
  }
}

// イベント発生元（Subject）
class UserService {
  constructor(private mediator: Mediator) {}

  registerUser(name: string): void {
    console.log(`Registering user: ${name}`);
    this.mediator.notify("UserService", "user_registered", { name });
  }
}

// 通知を受け取る Observer
class Mailer implements Observer {
  update(event: string, data: any): void {
    if (event === "user_registered") {
      console.log(`[Mailer] Sending welcome email to ${data.name}`);
    }
  }
}

class Logger implements Observer {
  update(event: string, data: any): void {
    console.log(`[Logger] Event: ${event}, Data: ${JSON.stringify(data)}`);
  }
}

// 使用例
const mediator = new EventHub();
const mailer = new Mailer();
const logger = new Logger();
mediator.addObserver(mailer);
mediator.addObserver(logger);

const userService = new UserService(mediator);
userService.registerUser("Taro");
