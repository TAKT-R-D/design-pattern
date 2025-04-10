class InventoryService:
    def reduce_stock(self, product_id: str, amount: int):
        print(f"在庫を減らしました: {product_id} × {amount}")

class OrderService:
    def __init__(self):
        self.inventory = InventoryService()

    def place_order(self, product_id: str, quantity: int):
        print(f"注文受付: {product_id} × {quantity}")
        self.inventory.reduce_stock(product_id, quantity)
