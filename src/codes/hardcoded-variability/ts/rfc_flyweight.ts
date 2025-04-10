// Flyweight（共通部分）
class NotificationTemplate {
  constructor(public header: string, public footer: string) {}

  format(user: string, body: string): string {
    return `${this.header}\n宛先: ${user}\n本文: ${body}\n${this.footer}`;
  }
}

// Context（可変部分を持つ）
class Notification {
  constructor(
    private user: string,
    private message: string,
    private template: NotificationTemplate
  ) {}

  send() {
    console.log(this.template.format(this.user, this.message));
  }
}

// 利用例：テンプレートは共有
const sharedTemplate = new NotificationTemplate(
  "件名: お知らせ",
  "-- 通知システム"
);

new Notification("hiroshi", "メッセージ1", sharedTemplate).send();
new Notification("satoshi", "メッセージ2", sharedTemplate).send();
