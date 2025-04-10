import random
import string

# 個別責務のクラスたち
class DiscountCalculator:
    @staticmethod
    def calculate(base: float, discount_type: str) -> float:
        if discount_type == "student":
            return base * 0.8
        elif discount_type == "member":
            return base * 0.9
        return base

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

# Facadeクラス
class OrderProcessor:
    def __init__(self, product_ids: list[str], user_email: str, discount_type: str):
        self.product_ids = product_ids
        self.user_email = user_email
        self.discount_type = discount_type

    def confirm_order(self):
        base_price = len(self.product_ids) * 1000
        total = DiscountCalculator.calculate(base_price, self.discount_type)

        InventoryService.reduce(self.product_ids)
        EmailService.send(self.user_email, f"ご注文が確定しました（合計: ¥{total}）")
        order_id = "order-" + ''.join(random.choices(string.ascii_lowercase + string.digits, k=8))
        OrderLogger.log(order_id)

# 利用例
processor = OrderProcessor(
    ["p01", "p02"],
    "hiroshi@example.com",
    "student"
)
processor.confirm_order()
