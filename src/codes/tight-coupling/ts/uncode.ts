class Mailer {
  send(email: string, content: string) {
    console.log(`送信しました: ${email} → ${content}`);
  }
}

class UserService {
  private mailer: Mailer;

  constructor() {
    this.mailer = new Mailer(); // ← クラス内で直接生成（密結合）
  }

  notifyUser(email: string) {
    const content = "ようこそ！";
    this.mailer.send(email, content); // ← Mailer の存在を知りすぎている
  }
}
