// インターフェースで依存先を抽象化（任意）
interface Notifier {
  send(email: string, message: string): void;
}

// 実装クラス
class Mailer implements Notifier {
  send(email: string, message: string): void {
    console.log(`送信しました: ${email} → ${message}`);
  }
}

// クライアントクラス
class UserService {
  constructor(private notifier: Notifier) {}

  registerUser(email: string): void {
    console.log(`ユーザー登録: ${email}`);
    this.notifier.send(email, "ようこそ！");
  }
}

// 利用例（依存を注入）
const mailer = new Mailer();
const service = new UserService(mailer);
service.registerUser("user@example.com");
