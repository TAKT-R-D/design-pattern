// Mediator インターフェース
interface Mediator {
  notify(sender: string, data: any): void;
}

// コンポーネント（UserService）
class UserService {
  constructor(private mediator: Mediator) {}

  registerUser(email: string): void {
    console.log(`ユーザー登録: ${email}`);
    this.mediator.notify("UserService", email);
  }
}

// コンポーネント（Mailer）
class Mailer {
  sendWelcome(email: string): void {
    console.log(`送信しました: ${email} → ようこそ！`);
  }
}

// Mediator 実装
class AppMediator implements Mediator {
  constructor(private mailer: Mailer) {}

  notify(sender: string, data: any): void {
    if (sender === "UserService") {
      this.mailer.sendWelcome(data);
    }
  }
}

// 利用例
const mailer = new Mailer();
const mediator = new AppMediator(mailer);
const userService = new UserService(mediator);

userService.registerUser("user@example.com");
