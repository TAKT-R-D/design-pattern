// 状態インターフェース
interface DiscountState {
  calculate(basePrice: number): number;
}

// 各状態クラス
class StudentState implements DiscountState {
  calculate(basePrice: number): number {
    return basePrice * 0.8;
  }
}

class MemberState implements DiscountState {
  calculate(basePrice: number): number {
    return basePrice * 0.9;
  }
}

class VIPState implements DiscountState {
  calculate(basePrice: number): number {
    return basePrice * 0.7;
  }
}

class DefaultState implements DiscountState {
  calculate(basePrice: number): number {
    return basePrice;
  }
}

// コンテキスト
class DiscountContext {
  private state: DiscountState;

  constructor(state: DiscountState) {
    this.state = state;
  }

  setState(state: DiscountState) {
    this.state = state;
  }

  calculate(basePrice: number): number {
    return this.state.calculate(basePrice);
  }
}

// 利用例
const context = new DiscountContext(new StudentState());
console.log(context.calculate(1000)); // 800
