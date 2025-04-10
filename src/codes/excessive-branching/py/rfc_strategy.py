from abc import ABC, abstractmethod

# Strategy インターフェース
class DiscountStrategy(ABC):
    @abstractmethod
    def calculate(self, base_price: float) -> float:
        pass

# ConcreteStrategy: 学生割引
class StudentDiscount(DiscountStrategy):
    def calculate(self, base_price: float) -> float:
        return base_price * 0.8

# ConcreteStrategy: 会員割引
class MemberDiscount(DiscountStrategy):
    def calculate(self, base_price: float) -> float:
        return base_price * 0.9

# ConcreteStrategy: VIP割引
class VIPDiscount(DiscountStrategy):
    def calculate(self, base_price: float) -> float:
        return base_price * 0.7

# ConcreteStrategy: 割引なし
class NoDiscount(DiscountStrategy):
    def calculate(self, base_price: float) -> float:
        return base_price

# Context クラス
class PriceCalculator:
    def __init__(self, discount_strategy: DiscountStrategy):
        self._discount_strategy = discount_strategy

    def calculate_price(self, base_price: float) -> float:
        return self._discount_strategy.calculate(base_price)

# 利用例
base_price = 1000

student_calculator = PriceCalculator(StudentDiscount())
print(student_calculator.calculate_price(base_price))  # 800

member_calculator = PriceCalculator(MemberDiscount())
print(member_calculator.calculate_price(base_price))  # 900

vip_calculator = PriceCalculator(VIPDiscount())
print(vip_calculator.calculate_price(base_price))  # 700

regular_calculator = PriceCalculator(NoDiscount())
print(regular_calculator.calculate_price(base_price))  # 1000
