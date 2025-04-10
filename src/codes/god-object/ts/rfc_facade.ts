// 個別責務のクラスたち
class DiscountCalculator {
  static calculate(base: number, type: string): number {
    switch (type) {
      case "student":
        return base * 0.8;
      case "member":
        return base * 0.9;
      default:
        return base;
    }
  }
}

class InventoryService {
  static reduce(productIds: string[]) {
    console.log(`在庫を ${productIds.length} 件分減らしました`);
  }
}

class EmailService {
  static send(email: string, message: string) {
    console.log(`メールを ${email} に送信: ${message}`);
  }
}

class OrderLogger {
  static log(orderId: string) {
    console.log(`注文ログを記録: ${orderId}`);
  }
}

// Facadeクラス
class OrderProcessor {
  constructor(
    private productIds: string[],
    private userEmail: string,
    private discountType: string
  ) {}

  confirmOrder() {
    const basePrice = this.productIds.length * 1000;
    const total = DiscountCalculator.calculate(basePrice, this.discountType);

    InventoryService.reduce(this.productIds);
    EmailService.send(
      this.userEmail,
      `ご注文が確定しました（合計: ¥${total}）`
    );
    OrderLogger.log("order-" + Math.random().toString(36).substring(2));
  }
}

// 利用例
const facadeProcessor = new OrderProcessor(
  ["p01", "p02"],
  "hiroshi@example.com",
  "student"
);
facadeProcessor.confirmOrder();
