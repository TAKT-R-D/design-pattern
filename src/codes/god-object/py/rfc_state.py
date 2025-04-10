import random
import string
from abc import ABC, abstractmethod

# 状態インターフェース
class OrderState(ABC):
    @abstractmethod
    def confirm(self, order: "StatefulOrderProcessor"):
        pass

# 状態クラス：未確定
class UnconfirmedState(OrderState):
    def confirm(self, order: "StatefulOrderProcessor"):
        InventoryService.reduce(order.product_ids)
        EmailService.send(order.user_email, "注文が確定されました")
        order_id = "order-" + ''.join(random.choices(string.ascii_lowercase + string.digits, k=8))
        OrderLogger.log(order_id)
        order.set_state(ConfirmedState())

# 状態クラス：確定済み
class ConfirmedState(OrderState):
    def confirm(self, order: "StatefulOrderProcessor"):
        print("すでに確定済みです")

# コンテキスト
class StatefulOrderProcessor:
    def __init__(self, product_ids: list[str], user_email: str):
        self.product_ids = product_ids
        self.user_email = user_email
        self.state: OrderState = UnconfirmedState()

    def set_state(self, state: OrderState):
        self.state = state

    def confirm_order(self):
        self.state.confirm(self)

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

# 利用例
processor = StatefulOrderProcessor(["p01", "p02"], "hiroshi@example.com")
processor.confirm_order()  # 初回：確定
processor.confirm_order()  # 2回目：すでに確定済み
