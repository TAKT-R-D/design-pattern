class InventoryChecker:
    def check(self, product_id: str) -> bool:
        print(f"在庫確認: {product_id}")
        return True

class PaymentGateway:
    def pay(self, amount: int) -> bool:
        print(f"支払い処理: ¥{amount}")
        return True

class ReceiptPrinter:
    def print(self, product_id: str, amount: int):
        print(f"領収書発行: 商品={product_id}, 金額=¥{amount}")

def complete_purchase(product_id: str, amount: int):
    checker = InventoryChecker()
    payment = PaymentGateway()
    printer = ReceiptPrinter()

    if checker.check(product_id):
        if payment.pay(amount):
            printer.print(product_id, amount)
