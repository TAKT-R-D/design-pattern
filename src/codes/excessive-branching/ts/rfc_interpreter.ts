// 文法インターフェース
interface Expression {
  interpret(userType: string, basePrice: number): number;
}

// ターミナル式（具体的な条件と計算）
class DiscountExpression implements Expression {
  constructor(private targetType: string, private rate: number) {}

  interpret(userType: string, basePrice: number): number {
    return userType === this.targetType ? basePrice * this.rate : basePrice;
  }
}

// 非終端式（ANDやORなどにも拡張可能）
class DiscountInterpreter {
  private expressions: DiscountExpression[] = [];

  add(expression: DiscountExpression) {
    this.expressions.push(expression);
  }

  interpret(userType: string, basePrice: number): number {
    for (const expr of this.expressions) {
      const result = expr.interpret(userType, basePrice);
      if (result !== basePrice) return result;
    }
    return basePrice;
  }
}

// 利用例
const interpreter = new DiscountInterpreter();
interpreter.add(new DiscountExpression("student", 0.8));
interpreter.add(new DiscountExpression("member", 0.9));
interpreter.add(new DiscountExpression("vip", 0.7));

console.log(interpreter.interpret("vip", 1000)); // 700
console.log(interpreter.interpret("student", 1000)); // 800
console.log(interpreter.interpret("guest", 1000)); // 1000
