import random
import string
from abc import ABC, abstractmethod

class DiscountStrategy(ABC):
    @abstractmethod
    def calculate(self, base: float) -> float:
        pass

class NoDiscount(DiscountStrategy):
    def calculate(self, base: float) -> float:
        return base

class StudentDiscount(DiscountStrategy):
    def calculate(self, base: float) -> float:
        return base * 0.8

class MemberDiscount(DiscountStrategy):
    def calculate(self, base: float) -> float:
        return base * 0.9

# 外部サービス（ダミー）
class InventoryService:
    @staticmethod
    def reduce(product_ids: list[str]):
        print(f"在庫を {len(product_ids)} 件分減らしました")

class EmailService:
    @staticmethod
    def send(email: str, message: str):
        print(f"メールを {email} に送信: {message}")

class OrderLogger:
    @staticmethod
    def log(order_id: str):
        print(f"注文ログを記録: {order_id}")

# 注文処理クラス
class StrategyOrderProcessor:
    def __init__(self, product_ids: list[str], user_email: str, discount_strategy: DiscountStrategy):
        self.product_ids = product_ids
        self.user_email = user_email
        self.discount_strategy = discount_strategy

    def confirm_order(self):
        base_price = len(self.product_ids) * 1000
        total = self.discount_strategy.calculate(base_price)

        InventoryService.reduce(self.product_ids)
        EmailService.send(self.user_email, f"ご注文ありがとうございます。合計: ¥{total}")
        order_id = "order-" + ''.join(random.choices(string.ascii_lowercase + string.digits, k=8))
        OrderLogger.log(order_id)

# 利用例
processor = StrategyOrderProcessor(
    ["p01", "p02"],
    "hiroshi@example.com",
    StudentDiscount()
)
processor.confirm_order()
