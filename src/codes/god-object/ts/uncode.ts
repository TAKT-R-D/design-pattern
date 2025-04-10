// Godクラス：責務が全部入り
class OrderManager {
  private orders: string[] = [];
  private userEmail: string = "";
  private discountType: string = "none";

  setUser(email: string) {
    this.userEmail = email;
  }

  addOrder(productId: string) {
    this.orders.push(productId);
  }

  applyDiscount(type: string) {
    this.discountType = type;
  }

  calculateTotal(): number {
    let basePrice = this.orders.length * 1000;
    if (this.discountType === "student") {
      return basePrice * 0.8;
    } else if (this.discountType === "member") {
      return basePrice * 0.9;
    }
    return basePrice;
  }

  confirmOrder() {
    // 1. 在庫調整
    console.log("在庫を減らす");

    // 2. メール通知
    console.log(`メールを ${this.userEmail} に送信`);

    // 3. ログ出力
    console.log("注文完了ログ");
  }
}
