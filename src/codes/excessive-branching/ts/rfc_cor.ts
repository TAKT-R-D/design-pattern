// ハンドラインターフェース
interface DiscountHandler {
  setNext(handler: DiscountHandler): DiscountHandler;
  handle(userType: string, basePrice: number): number;
}

// 抽象クラス（共通処理）
abstract class BaseDiscountHandler implements DiscountHandler {
  private nextHandler: DiscountHandler | null = null;

  setNext(handler: DiscountHandler): DiscountHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(userType: string, basePrice: number): number {
    if (this.nextHandler) {
      return this.nextHandler.handle(userType, basePrice);
    }
    return basePrice;
  }
}

// 各ハンドラ
class StudentHandler extends BaseDiscountHandler {
  handle(userType: string, basePrice: number): number {
    if (userType === "student") return basePrice * 0.8;
    return super.handle(userType, basePrice);
  }
}

class MemberHandler extends BaseDiscountHandler {
  handle(userType: string, basePrice: number): number {
    if (userType === "member") return basePrice * 0.9;
    return super.handle(userType, basePrice);
  }
}

class VIPHandler extends BaseDiscountHandler {
  handle(userType: string, basePrice: number): number {
    if (userType === "vip") return basePrice * 0.7;
    return super.handle(userType, basePrice);
  }
}

// 利用例
const student = new StudentHandler();
const member = new MemberHandler();
const vip = new VIPHandler();

student.setNext(member).setNext(vip);

console.log(student.handle("vip", 1000)); // 700
console.log(student.handle("student", 1000)); // 800
console.log(student.handle("guest", 1000)); // 1000
