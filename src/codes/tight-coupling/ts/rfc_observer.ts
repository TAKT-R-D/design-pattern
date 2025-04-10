// Observer インターフェース
interface Observer {
  update(email: string): void;
}

// ConcreteObserver
class Mailer implements Observer {
  update(email: string): void {
    console.log(`送信しました: ${email} → ようこそ！`);
  }
}

// Subject（通知元）
class UserService {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(email: string): void {
    this.observers.forEach((observer) => observer.update(email));
  }

  registerUser(email: string): void {
    console.log(`ユーザー登録: ${email}`);
    this.notifyObservers(email);
  }
}

// 利用例
const service = new UserService();
service.addObserver(new Mailer());
service.registerUser("user@example.com");
