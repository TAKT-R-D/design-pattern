// Strategy インターフェース
interface DiscountStrategy {
  calculate(base: number): number;
}

class NoDiscount implements DiscountStrategy {
  calculate(base: number): number {
    return base;
  }
}

class StudentDiscount implements DiscountStrategy {
  calculate(base: number): number {
    return base * 0.8;
  }
}

class MemberDiscount implements DiscountStrategy {
  calculate(base: number): number {
    return base * 0.9;
  }
}

// 注文処理クラス（依存を注入）
class StrategyOrderProcessor {
  constructor(
    private productIds: string[],
    private userEmail: string,
    private discountStrategy: DiscountStrategy
  ) {}

  confirmOrder() {
    const basePrice = this.productIds.length * 1000;
    const total = this.discountStrategy.calculate(basePrice);

    InventoryService.reduce(this.productIds);
    EmailService.send(
      this.userEmail,
      `ご注文ありがとうございます。合計: ¥${total}`
    );
    OrderLogger.log("order-" + Math.random().toString(36).substring(2));
  }
}

// 利用例
const strategyProcessor = new StrategyOrderProcessor(
  ["p01", "p02"],
  "hiroshi@example.com",
  new StudentDiscount()
);
strategyProcessor.confirmOrder();
