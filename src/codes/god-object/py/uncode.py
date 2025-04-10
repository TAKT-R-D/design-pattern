class OrderManager:
    def __init__(self):
        self.orders = []
        self.user_email = ""
        self.discount_type = "none"

    def set_user(self, email: str):
        self.user_email = email

    def add_order(self, product_id: str):
        self.orders.append(product_id)

    def apply_discount(self, discount_type: str):
        self.discount_type = discount_type

    def calculate_total(self) -> float:
        base_price = len(self.orders) * 1000
        if self.discount_type == "student":
            return base_price * 0.8
        elif self.discount_type == "member":
            return base_price * 0.9
        return base_price

    def confirm_order(self):
        # 1. 在庫調整
        print("在庫を減らす")

        # 2. メール通知
        print(f"メールを {self.user_email} に送信")

        # 3. ログ出力
        print("注文完了ログ")
