// Strategy インターフェース
interface DiscountStrategy {
  calculate(basePrice: number): number;
}

// ConcreteStrategy: 学生割引
class StudentDiscount implements DiscountStrategy {
  calculate(basePrice: number): number {
    return basePrice * 0.8;
  }
}

// ConcreteStrategy: 会員割引
class MemberDiscount implements DiscountStrategy {
  calculate(basePrice: number): number {
    return basePrice * 0.9;
  }
}

// ConcreteStrategy: VIP割引
class VIPDiscount implements DiscountStrategy {
  calculate(basePrice: number): number {
    return basePrice * 0.7;
  }
}

// ConcreteStrategy: 割引なし
class NoDiscount implements DiscountStrategy {
  calculate(basePrice: number): number {
    return basePrice;
  }
}

// Context クラス
class PriceCalculator {
  constructor(private discountStrategy: DiscountStrategy) {}

  calculatePrice(basePrice: number): number {
    return this.discountStrategy.calculate(basePrice);
  }
}

// 利用例
const basePrice = 1000;
const studentCalculator = new PriceCalculator(new StudentDiscount());
console.log(studentCalculator.calculatePrice(basePrice)); // 800

const memberCalculator = new PriceCalculator(new MemberDiscount());
console.log(memberCalculator.calculatePrice(basePrice)); // 900

const vipCalculator = new PriceCalculator(new VIPDiscount());
console.log(vipCalculator.calculatePrice(basePrice)); // 700

const regularCalculator = new PriceCalculator(new NoDiscount());
console.log(regularCalculator.calculatePrice(basePrice)); // 1000
