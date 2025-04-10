from abc import ABC, abstractmethod

class Expression(ABC):
    @abstractmethod
    def interpret(self, user_type: str, base_price: float) -> float:
        pass

class DiscountExpression(Expression):
    def __init__(self, target_type: str, rate: float):
        self.target_type = target_type
        self.rate = rate

    def interpret(self, user_type: str, base_price: float) -> float:
        return base_price * self.rate if user_type == self.target_type else base_price

class DiscountInterpreter:
    def __init__(self):
        self.expressions: list[DiscountExpression] = []

    def add(self, expr: DiscountExpression):
        self.expressions.append(expr)

    def interpret(self, user_type: str, base_price: float) -> float:
        for expr in self.expressions:
            result = expr.interpret(user_type, base_price)
            if result != base_price:
                return result
        return base_price

# 利用例
interpreter = DiscountInterpreter()
interpreter.add(DiscountExpression("student", 0.8))
interpreter.add(DiscountExpression("member", 0.9))
interpreter.add(DiscountExpression("vip", 0.7))

print(interpreter.interpret("vip", 1000))      # 700
print(interpreter.interpret("student", 1000))  # 800
print(interpreter.interpret("guest", 1000))    # 1000
