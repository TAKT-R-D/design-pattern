import os

class OrderService:
    def create_order(self, order_id: str):
        print(f"[OrderService] 注文作成: {order_id}")  # 直書きログ

        debug_mode = os.environ.get("DEBUG_MODE") == "true"  # 設定の直接参照
        if debug_mode:
            print(f"[DEBUG] 注文詳細: {order_id}")

class UserService:
    def create_user(self, name: str):
        print(f"[UserService] ユーザー作成: {name}")  # 直書きログ

# 実行例
# os.environ["DEBUG_MODE"] = "true"

order_service = OrderService()
order_service.create_order("order-123")

user_service = UserService()
user_service.create_user("hiroshi")
