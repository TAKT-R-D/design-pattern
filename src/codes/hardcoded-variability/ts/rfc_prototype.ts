interface Cloneable<T> {
  clone(): T;
}

class Notification implements Cloneable<Notification> {
  constructor(
    public header: string,
    public footer: string,
    public user: string = "",
    public message: string = ""
  ) {}

  clone(): Notification {
    return new Notification(this.header, this.footer);
  }

  send(): void {
    console.log(
      `${this.header}\n宛先: ${this.user}\n本文: ${this.message}\n${this.footer}`
    );
  }
}

// プロトタイプ生成
const prototype = new Notification("件名: お知らせ", "-- 通知システム");

// 利用例
const n1 = prototype.clone();
n1.user = "hiroshi";
n1.message = "こんにちは";
n1.send();

const n2 = prototype.clone();
n2.user = "satoshi";
n2.message = "お知らせがあります";
n2.send();
